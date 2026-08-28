"""Pull the Let's Go (PE) row out of each TM item page's location table."""
import sys, os, re, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import wikitext
from concurrent.futures import ThreadPoolExecutor

def clean(s):
    s = re.sub(r'\{\{rt\|([^|}]*)\|[^}]*\}\}', r'Route \1', s)
    s = re.sub(r'\{\{(?:DL|OBP|ga|ka|tc|p|i|si)\|[^|}]*\|([^|}]*)\}\}', r'\1', s)
    s = re.sub(r'\{\{PDollar\}\}|\{\{pdollar\}\}', '₽', s)
    s = re.sub(r'\{\{[^{}]*\}\}', '', s)
    s = re.sub(r'\[\[[^]|]*\|([^]]*)\]\]', r'\1', s)
    s = s.replace('[[', '').replace(']]', '').replace("''", '')
    return re.sub(r'\s+', ' ', s).strip(' ,')

def one(n):
    try: w = wikitext('TM%02d' % n)
    except Exception: return (n, None, None)
    sec = w.split('===Generation VII===')
    if len(sec) < 2: return (n, None, None)
    body = sec[1].split('===Generation VIII===')[0]
    move = None
    mh = re.search(r'\{\{TMtable/header\|([^|}]*)\|', body)
    for m in re.finditer(r'\{\{TMtable/(?:header|row)\|([^\n]*)', body):
        pass
    rows = []
    hdr_move = None
    for line in body.split('\n'):
        h = re.match(r'\{\{TMtable/header\|([^|}]*)\|', line)
        if h: hdr_move = h.group(1)
        r = re.match(r'\{\{TMtable/row\|(.+)$', line)
        if not r: continue
        parts, depth, cur = [], 0, ''
        for ch in r.group(1):
            if ch == '{': depth += 1
            elif ch == '}': depth -= 1
            if ch == '|' and depth == 0: parts.append(cur); cur = ''
            else: cur += ch
        parts.append(cur)
        game = parts[0]
        if 'PE' not in game and "Let's Go" not in game: continue
        rows.append({'move': hdr_move, 'where': clean(parts[1] if len(parts) > 1 else ''),
                     'price': clean(parts[3] if len(parts) > 3 else '')})
    return (n, rows or None, hdr_move)

if __name__ == '__main__':
    out = {}
    with ThreadPoolExecutor(5) as ex:
        for n, rows, mv in ex.map(one, range(1, 61)):
            if rows: out['TM%02d' % n] = rows
    json.dump(out, open('research/tm_locations.json', 'w'), indent=1, ensure_ascii=False)
    print(len(out), 'of 60 TMs located')
    for k in sorted(out):
        for r in out[k]:
            print('%-6s %-16s %-70s %s' % (k, r['move'], r['where'][:70], r['price']))
