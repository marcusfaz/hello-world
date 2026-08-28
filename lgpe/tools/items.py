"""Extract {{Itemlist}} rows tagged for Let's Go (LP/LE) from Bulbapedia wikitext."""
import re, os, glob, json

def rows(path):
    t = open(path, encoding='utf-8').read()
    out = []
    for m in re.finditer(r'\{\{Itemlist\|(.*?)\}\}\s*$', t, re.M):
        body = m.group(1)
        # split on | but keep nested {{ }} intact
        parts, depth, cur = [], 0, ''
        for ch in body:
            if ch == '{': depth += 1
            elif ch == '}': depth -= 1
            if ch == '|' and depth == 0: parts.append(cur); cur = ''
            else: cur += ch
        parts.append(cur)
        kv = {}
        pos = []
        for p in parts:
            if '=' in p and not p.strip().startswith('{{'):
                k, v = p.split('=', 1); kv[k.strip()] = v.strip()
            else: pos.append(p.strip())
        if kv.get('LP') != 'yes' and kv.get('LE') != 'yes': continue
        item = pos[0] if pos else ''
        where = pos[1] if len(pos) > 1 else ''
        disp = kv.get('display', '')
        out.append({'item': item, 'where': where, 'display': disp,
                    'LP': kv.get('LP') == 'yes', 'LE': kv.get('LE') == 'yes'})
    return out

if __name__ == '__main__':
    allr = {}
    for f in sorted(glob.glob('research/bb/*.wiki')):
        r = rows(f)
        if r: allr[os.path.basename(f)[:-5]] = r
    json.dump(allr, open('research/items.json', 'w'), indent=1)
    for page, rs in allr.items():
        print('##', page)
        for r in rs:
            d = (' [' + r['display'] + ']') if r['display'] else ''
            v = '' if (r['LP'] and r['LE']) else (' (LGP only)' if r['LP'] else ' (LGE only)')
            print('   %-26s %s%s%s' % (r['item'], r['where'][:95], d, v))
