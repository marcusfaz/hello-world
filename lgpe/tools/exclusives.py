"""Which species can each version obtain at all?

A card's version chip means "this species exists only in your game", which is
not the same as "this particular encounter is version-locked". Arcanine is the
trap: Let's Go, Pikachu! has a 1% wild one, Let's Go, Eevee! gives it away in
Vermilion — the spawn is exclusive, the species is not. So seed from every
listed encounter, gift and trade per version, then close over evolution.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import get
API = 'https://pokeapi.co/api/v2/'
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'research')

CATCHES = json.load(open(os.path.join(R, 'catches.json'), encoding='utf-8'))
DEX     = json.load(open(os.path.join(R, 'dex.json'), encoding='utf-8'))

FIX = {"Nidoran♀": "nidoran-f", "Nidoran♂": "nidoran-m", "Mr. Mime": "mr-mime",
       "Farfetch'd": "farfetchd", "Farfetch’d": "farfetchd"}
def slug(n):
    n = n.split('-')[0].strip() if n.endswith('Alolan Form') else n.strip()
    if n in FIX: return FIX[n]
    return n.lower().replace('.', '').replace("'", '').replace('’', '').replace(' ', '-')

seed = {'lgp': set(), 'lge': set()}
for rows in CATCHES.values():
    for r in rows:
        s = slug(r['mon'])
        if r['LGP'] == 'yes': seed['lgp'].add(s)
        if r['LGE'] == 'yes': seed['lge'].add(s)

# evolution closure: if you can get the base, you can get the rest of the line
chains, seen = [], set()
for _, sp in DEX:
    if sp in seen: continue
    try:
        d = get(API + 'pokemon-species/' + sp + '/')
        ev = get(d['evolution_chain']['url'])
    except Exception:
        chains.append([sp]); seen.add(sp); continue
    line = []
    def walk(c):
        line.append(c['species']['name'])
        for n in c['evolves_to']: walk(n)
    walk(ev['chain'])
    line = [x for x in line if x in {s for _, s in DEX}]
    chains.append(line); seen.update(line)

def reachable(have):
    out = set()
    for line in chains:
        hit = next((i for i, s in enumerate(line) if s in have), None)
        if hit is not None: out.update(line[hit:])
    return out

rp, re_ = reachable(seed['lgp']), reachable(seed['lge'])
# these three have no in-game encounter at all in either version
SPECIAL = {'mew', 'meltan', 'melmetal'}
# legendaries are stationary encounters the catch tables do not list
LEGEND = {'articuno', 'zapdos', 'moltres', 'mewtwo'}
rp |= LEGEND; re_ |= LEGEND

only_p = sorted(rp - re_)
only_e = sorted(re_ - rp)
neither = sorted({s for _, s in DEX} - rp - re_ - SPECIAL)
json.dump({'lgp_only': only_p, 'lge_only': only_e, 'special': sorted(SPECIAL),
           'unreachable_either': neither},
          open(os.path.join(R, 'exclusives.json'), 'w', encoding='utf-8'), indent=1)
print('Let\'s Go, Pikachu! only (%d): %s' % (len(only_p), ', '.join(only_p)))
print("Let's Go, Eevee! only (%d): %s" % (len(only_e), ', '.join(only_e)))
print('neither, needs a trade or GO (%d): %s' % (len(neither), ', '.join(neither)))
