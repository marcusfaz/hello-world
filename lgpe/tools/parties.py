"""Extract Generation-PE (Let's Go) trainer parties from Bulbapedia wikitext."""
import re, os, json, glob

def _fields(block):
    d = {}
    for line in block.split('\n'):
        for seg in line.split('|'):
            if '=' not in seg: continue
            k, v = seg.split('=', 1)
            k = k.strip()
            if not k or ' ' in k.strip(): 
                if not re.fullmatch(r'[A-Za-z0-9_ ]+', k): continue
            d[k.strip()] = v.strip()
    return d

def _blocks(text, name):
    """Yield (start,end,body) for each {{name ...}} template at top level."""
    out = []
    pat = re.compile(r'\{\{' + name + r'\b')
    for m in pat.finditer(text):
        i = m.end(); depth = 2
        while i < len(text) and depth:
            if text.startswith('{{', i): depth += 2; i += 2
            elif text.startswith('}}', i): depth -= 2; i += 2
            else: i += 1
        out.append((m.start(), i, text[m.end():i-2]))
    return out

def headings(text):
    return [(m.start(), m.group(2).strip(), len(m.group(1)))
            for m in re.finditer(r'^(={2,6})\s*(.+?)\s*\1\s*$', text, re.M)]

def parse(path):
    text = open(path, encoding='utf-8').read()
    hs = headings(text)
    def ctx(pos):
        trail = [h for h in hs if h[0] < pos]
        # nearest heading at each level, in document order
        stack = {}
        for p, t, lvl in trail: 
            stack[lvl] = t
            for k in list(stack):
                if k > lvl: del stack[k]
        return ' / '.join(stack[k] for k in sorted(stack))
    res = []
    regions = []
    for m in re.finditer(r'\{\{Party\s*\n', text):
        end = text.find('{{Party/end}}', m.end())
        if end < 0: continue
        regions.append((m.start(), text[m.end():end]))
    for s, body in regions:
        head = _fields(body.split('{{Pokémon')[0])
        game = head.get('game') or ''
        if game not in ('PE', 'LGP', 'LGE') and 'gen = PE' not in body: continue
        mons = []
        for ms, me, mb in _blocks(body, 'Pokémon'):
            f = _fields(mb)
            if f.get('gen') != 'PE': continue
            moves = [f.get('move%d' % i) for i in range(1, 5)]
            mtypes = [f.get('move%dtype' % i) for i in range(1, 5)]
            mcats = [f.get('move%dcat' % i) for i in range(1, 5)]
            mons.append({
                'mon': f.get('pokemon'), 'lv': f.get('level'),
                't': [x for x in (f.get('type1'), f.get('type2')) if x],
                'moves': [{'m': m, 't': t, 'c': c} for m, t, c in zip(moves, mtypes, mcats) if m],
            })
        if mons:
            res.append({'game': game, 'section': ctx(s), 'name': head.get('name'),
                        'class': head.get('class'), 'location': head.get('location'),
                        'prize': head.get('prize', '').replace('{{PDollar}}', ''),
                        'team': mons})
    return res

if __name__ == '__main__':
    import sys
    for p in sys.argv[1:]:
        for party in parse(p):
            print('###', os.path.basename(p), '|', party['section'], '|', party['name'], party['class'] or '')
            for m in party['team']:
                print('   Lv%-3s %-12s %-16s %s' % (m['lv'], m['mon'], '/'.join(m['t']),
                      ', '.join('%s(%s,%s)' % (x['m'], x['t'], x['c']) for x in m['moves'])))
