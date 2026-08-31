#!/usr/bin/env python3
"""Extract Emerald-specific Party templates from Bulbapedia raw wikitext.

Every Hoenn trainer page carries Ruby/Sapphire AND Emerald parties. The Party
template's `game =` field is what distinguishes them, so we key on that and
never on which prose came first on the page.
"""
import json, re, sys
from fetch import wikitext

# Bulbapedia Party `game=` codes. Only these mean "this party exists in Emerald".
EMERALD_CODES = {'E', 'RSE', 'RSE2', 'RSEFRLG', 'RSEFRLGCXD', 'RSEFRLGXD', 'ESP'}
NON_EMERALD   = {'RS', 'R', 'S', 'FRLG', 'FR', 'LG', 'ORAS', 'OR', 'AS', 'DP', 'DPPt',
                 'Pt', 'HGSS', 'BW', 'B2W2', 'XY', 'SM', 'USUM', 'SMUSUM', 'SwSh', 'BDSP',
                 'LGPE', 'PE', 'Colo', 'XD', 'Stad2', 'SV', 'RB', 'Y', 'GS', 'C', 'GSC'}
_seen_codes = set()
def is_emerald(code):
    c = re.sub(r'\{\{|\}\}', '', str(code)).strip()
    if c in EMERALD_CODES: return True
    if c in NON_EMERALD:   return False
    if c and c not in _seen_codes:
        _seen_codes.add(c)
        print('  [parties] unrecognised game code %r — treated as NOT Emerald' % c, file=sys.stderr)
    return False

def _fields(block):
    """Parse a template body into {key: value}, ignoring nested braces."""
    out, depth, buf = {}, 0, ''
    parts = []
    for ch in block:
        if ch == '{': depth += 1
        elif ch == '}': depth -= 1
        if ch == '|' and depth == 0:
            parts.append(buf); buf = ''
        else:
            buf += ch
    parts.append(buf)
    for p in parts[1:]:
        if '=' not in p: continue
        k, v = p.split('=', 1)
        out[k.strip()] = v.strip()
    return out

def _templates(text):
    """Yield (name, body) for every top-level {{...}} template in order."""
    i = 0
    while i < len(text):
        j = text.find('{{', i)
        if j < 0: break
        depth, k = 0, j
        while k < len(text):
            if text.startswith('{{', k): depth += 1; k += 2; continue
            if text.startswith('}}', k):
                depth -= 1; k += 2
                if depth == 0: break
                continue
            k += 1
        body = text[j+2:k-2]
        name = body.split('|', 1)[0].strip()
        yield name, body
        i = k

def sections(text):
    """Split wikitext into (heading_path, body) using = headings."""
    lines = text.split('\n')
    cur, path, out = [], [], []
    for ln in lines:
        m = re.match(r'^(={2,6})\s*(.*?)\s*\1\s*$', ln)
        if m:
            out.append((list(path), '\n'.join(cur)))
            lvl = len(m.group(1))
            path = path[:lvl-2] + [m.group(2)]
            cur = []
        else:
            cur.append(ln)
    out.append((list(path), '\n'.join(cur)))
    return out

def emerald_parties(page):
    """Return [{'heading': [...], 'prize':..., 'location':..., 'team':[...]}]"""
    txt = wikitext(page)
    res = []
    for path, body in sections(txt):
        tmpls = list(_templates(body))
        cur = None
        for name, tb in tmpls:
            base = name.split('/')[0]
            if base == 'Party' and not name.endswith('/end'):
                f = _fields(tb)
                cur = {'heading': path, 'game': f.get('game', ''),
                       'prize': f.get('prize', ''), 'location': f.get('location', ''),
                       'class': f.get('class', ''), 'name': f.get('name', ''),
                       'team': []}
            elif base in ('Pokémon', 'Pokemon') and cur is not None:
                f = _fields(tb)
                if not f.get('pokemon'): continue
                mv = [f.get('move%d' % i) for i in range(1, 5)]
                cur['team'].append({
                    'mon': f.get('pokemon'), 'lv': f.get('level'),
                    'types': [t for t in (f.get('type1'), f.get('type2')) if t],
                    'ability': f.get('ability', ''), 'held': f.get('held', ''),
                    'gender': f.get('gender', ''),
                    'moves': [m for m in mv if m],
                    'movetypes': [f.get('move%dtype' % i, '') for i in range(1, 5)][:len([m for m in mv if m])],
                })
            elif base == 'lop' and name.startswith('lop/facility') and cur is not None:
                # positional: game=N | ndex | species | item | (move, type) x4 | nature | EVs...
                pos = [x.strip() for x in tb.split('|')]
                pos = [x for x in pos[1:] if not re.match(r'^(game|note|sortable)\s*=', x)]
                if len(pos) < 3 or '{{' in pos[1] or 'color' in pos[1]: continue
                mvs, mts = [], []
                for k in range(3, 11, 2):
                    if k + 1 < len(pos) and pos[k]:
                        mvs.append(pos[k]); mts.append(pos[k+1])
                cur['team'].append({
                    'mon': pos[1], 'lv': 'Lv 50 / Open',
                    'types': [], 'ability': '', 'held': pos[2] if len(pos) > 2 else '',
                    'gender': '', 'nature': pos[11] if len(pos) > 11 else '',
                    'moves': mvs, 'movetypes': mts})
            elif name.endswith('/end') and cur is not None:
                if is_emerald(cur['game']):
                    res.append(cur)
                cur = None
    return res

if __name__ == '__main__':
    for page in sys.argv[1:]:
        print('#### ' + page)
        print(json.dumps(emerald_parties(page), ensure_ascii=False, indent=1))
