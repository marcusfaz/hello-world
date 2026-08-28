"""Extract {{Catch/entry*}} rows (Pokémon availability + rarity) from LGPE walkthrough parts."""
import re, glob, os, json

def parse(path):
    t = open(path, encoding='utf-8').read()
    out, sec, div = [], None, None
    for line in t.split('\n'):
        h = re.match(r'^(={2,4})\s*(.+?)\s*\1\s*$', line)
        if h: sec = h.group(2).replace('<!--',''); div = None; continue
        d = re.match(r'\{\{Catch/div\|[^|]*\|(.+?)\}\}', line)
        if d: div = d.group(1); continue
        m = re.match(r'\{\{Catch/entry(?:pe|type|pe2)?\|(.+?)\}\}\s*$', line)
        if not m: continue
        parts = [p.strip() for p in m.group(1).split('|')]
        kv = {}
        pos = []
        for p in parts:
            if '=' in p: k,v = p.split('=',1); kv[k.strip()] = v.strip()
            else: pos.append(p)
        # pos: dex, name, lgp, lge, method, level, rarity
        if len(pos) < 4: continue
        out.append({'sec': sec, 'group': div, 'dex': pos[0], 'mon': pos[1],
                    'LGP': pos[2] if len(pos)>2 else '', 'LGE': pos[3] if len(pos)>3 else '',
                    'method': pos[4] if len(pos)>4 else '', 'lv': pos[5] if len(pos)>5 else '',
                    'rarity': pos[6] if len(pos)>6 else '', 'form': kv.get('form','')})
    return out

if __name__ == '__main__':
    allc = {}
    for f in sorted(glob.glob('research/bb/walk*.wiki')):
        allc[os.path.basename(f)[:-5]] = parse(f)
    json.dump(allc, open('research/catches.json','w'), indent=1)
    for p, rows in allc.items():
        print('#####', p)
        last = None
        for r in rows:
            if (r['sec'], r['group']) != last:
                print('  --', r['sec'], '|', r['group']); last = (r['sec'], r['group'])
            v = '' if (r['LGP']=='yes' and r['LGE']=='yes') else (' <LGP only>' if r['LGP']=='yes' else (' <LGE only>' if r['LGE']=='yes' else ' <neither?>'))
            print('     %-14s %-16s Lv%-8s %s%s' % (r['mon']+(('-'+r['form']) if r['form'] else ''), r['method'], r['lv'], r['rarity'], v))
