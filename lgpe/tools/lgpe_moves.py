"""LGPE overrides its own move stats. PokeAPI does not carry them, so pull the
   {{tt|generic|... LGPE}} annotations out of every Bulbapedia move page."""
import sys, os, re, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import wikitext
from concurrent.futures import ThreadPoolExecutor

LG = re.compile(r'(?:LGPE|Let\'s Go)', re.I)

def field(w, key):
    m = re.search(r'^\|' + key + r'=(.+)$', w, re.M)
    return m.group(1).strip() if m else None

def resolve(val):
    """{{tt|40|75 in LGPE}} -> (generic 40, lgpe 75).  Plain '40' -> (40, None)."""
    if val is None: return (None, None)
    m = re.match(r'\{\{tt\|([^|}]*)\|([^}]*)\}\}', val.strip())
    if not m: return (val.strip(), None)
    generic, note = m.group(1).strip(), m.group(2)
    if not LG.search(note): return (generic, None)
    num = re.match(r'\s*(\d+|—|-)', note)
    return (generic, num.group(1) if num else None)

def one(name):
    page = name + ' (move)'
    try:
        w = wikitext(page)
    except Exception:
        try: w = wikitext(name)
        except Exception: return (name, None)
    out = {}
    for key in ('power', 'accuracy', 'basepp', 'priority'):
        gen, lg = resolve(field(w, key))
        if lg is not None and lg != gen:
            out[key] = {'generic': gen, 'lgpe': lg}
    # prose overrides that are not in the infobox
    for para in w.split('\n'):
        if LG.search(para) and re.search(r'\b(power|priority|PP|effect|accuracy)\b', para, re.I) \
           and len(para) < 700 and not para.startswith('|') and not para.startswith('{'):
            out.setdefault('notes', []).append(re.sub(r'\s+', ' ', para).strip()[:400])
    return (name, out or None)

if __name__ == '__main__':
    mv = json.load(open('research/moves.json'))
    names = sorted(m['name'] for m in mv.values() if m.get('name'))
    res = {}
    with ThreadPoolExecutor(5) as ex:
        for name, out in ex.map(one, names):
            if out: res[name] = out
    json.dump(res, open('research/lgpe_move_overrides.json', 'w'), indent=1, ensure_ascii=False)
    print(len(res), 'moves with Let\'s Go specific data')
    for k, v in sorted(res.items()):
        stats = {a: b for a, b in v.items() if a != 'notes'}
        if stats: print('  %-18s %s' % (k, stats))
