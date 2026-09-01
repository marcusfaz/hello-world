#!/usr/bin/env python3
"""Per-zone encounter tables: every species catchable in each Emerald area.

PokeAPI returns one entry per encounter SLOT, so a species that occupies four
walking slots appears four times. The rate for a method is the sum of its slot
chances (Wingull walks Route 104 at 4+4+1+1 = 10%), and the level span is the
min and max across those slots. `max_chance` sums across methods and is useless
for display — a Magikarp reachable by three rods reads as 130%.
"""
import json, os, sys
sys.path.insert(0, '.')
from fetch import poke

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cache')
DEX = json.load(open(os.path.join(CACHE, 'dex.json')))
BY_SLUG = {m['slug']: n for n, m in DEX.items()}

# PokeAPI reports CURRENT typings. Fairy does not exist in Generation III, so the
# pre-Gen-VI typing is restored before anything is written into the guide. Shared
# with tools/audit.py, which fails loudly on any species missing from this table.
GEN3_TYPES = {
    'Clefairy': ['Normal'], 'Clefable': ['Normal'], 'Cleffa': ['Normal'],
    'Jigglypuff': ['Normal'], 'Wigglytuff': ['Normal'], 'Igglybuff': ['Normal'],
    'Mr. Mime': ['Psychic'], 'Marill': ['Water'], 'Azumarill': ['Water'],
    'Azurill': ['Normal'], 'Snubbull': ['Normal'], 'Granbull': ['Normal'],
    'Togepi': ['Normal'], 'Togetic': ['Normal', 'Flying'],
    'Ralts': ['Psychic'], 'Kirlia': ['Psychic'], 'Gardevoir': ['Psychic'],
    'Mawile': ['Steel'],
}
def gen3_types(name):
    if name in GEN3_TYPES: return GEN3_TYPES[name]
    t = [x for x in DEX[name]['types'] if x != 'Fairy']
    if t != DEX[name]['types']:
        raise SystemExit('zones: %s gained Fairy but has no Gen III typing on record' % name)
    return t

METHOD = {
    'walk': 'Grass', 'surf': 'Surf', 'old-rod': 'Old Rod', 'good-rod': 'Good Rod',
    'super-rod': 'Super Rod', 'rock-smash': 'Rock Smash', 'headbutt': 'Headbutt',
    'dark-grass': 'Grass', 'seaweed': 'Underwater',
    'gift': 'Gift', 'gift-egg': 'Gift Egg', 'npc-trade': 'In-game trade',
    'static': 'Fixed encounter', 'wailmer-pail': 'Wailmer Pail',
    'roaming-grass': 'Roaming', 'roaming-water': 'Roaming',
    'feebas-tile-fishing': 'Feebas tiles', 'devon-scope': 'Devon Scope',
    'squirt-bottle': 'Wailmer Pail', 'seaweed-surf': 'Underwater',
}
ORDER = ['Grass', 'Rock Smash', 'Headbutt', 'Surf', 'Underwater',
         'Old Rod', 'Good Rod', 'Super Rod',
         'Feebas tiles', 'Devon Scope', 'Fixed encounter', 'Roaming', 'Gift', 'Gift Egg',
         'In-game trade', 'Wailmer Pail']
# The Japanese Colosseum bonus disc is an external distribution, not an Emerald
# encounter — it must not appear in a list of what you can catch in this game.
SKIP_METHOD = {'colosseum-bonus-disc-jpn'}
SKIP_AREA = {'hoenn-pokecenter-area'}

areas = {}
for dexid in range(1, 387):
    name = BY_SLUG.get(poke('pokemon/%d' % dexid)['name'])
    if not name: continue
    for e in poke('pokemon/%d/encounters' % dexid):
        area = e['location_area']['name']
        for v in e['version_details']:
            if v['version']['name'] != 'emerald':
                continue
            if area in SKIP_AREA: continue
            per = {}
            for d in v['encounter_details']:
                raw = d['method']['name']
                if raw in SKIP_METHOD: continue
                m = METHOD.get(raw)
                if m is None:
                    raise SystemExit('zones: unlabelled encounter method %r in %s — add '
                                     'it to METHOD before trusting this table.' % (raw, area))
                s = per.setdefault(m, {'rate': 0, 'lo': 99, 'hi': 0})
                s['rate'] += d['chance']
                s['lo'] = min(s['lo'], d['min_level'])
                s['hi'] = max(s['hi'], d['max_level'])
            if not per: continue
            for m, s in per.items():
                areas.setdefault(area, {}).setdefault(name, {})[m] = s
    if dexid % 80 == 0:
        print('  ...%d' % dexid, file=sys.stderr)

# shape for the page: area -> [ {n, t, ways:[{m, rate, lo, hi}]} ], commonest first
out = {}
for area, mons in areas.items():
    rows = []
    for n, per in mons.items():
        ways = [{'m': m, 'rate': s['rate'], 'lo': s['lo'], 'hi': s['hi']}
                for m, s in sorted(per.items(), key=lambda kv: ORDER.index(kv[0])
                                   if kv[0] in ORDER else 99)]
        rows.append({'n': n, 't': gen3_types(n), 'ways': ways,
                     'top': max(w['rate'] for w in ways)})
    rows.sort(key=lambda r: (-r['top'], r['n']))
    for r in rows: del r['top']
    out[area] = rows

json.dump(out, open(os.path.join(CACHE, 'zones.json'), 'w'), ensure_ascii=False, indent=1)
print('areas: %d   species rows: %d' % (len(out), sum(len(v) for v in out.values())))
w = [r for r in out['hoenn-route-104-area'] if r['n'] == 'Wingull']
print('check — Wingull on Route 104:', json.dumps(w))
