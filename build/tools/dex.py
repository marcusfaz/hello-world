#!/usr/bin/env python3
"""Hoenn regional Pokédex (Gen III) + national types/abilities, from PokeAPI."""
import json, sys
sys.path.insert(0, '.')
from fetch import poke

hoenn = {}
for e in poke('pokedex/hoenn')['pokemon_entries']:
    hoenn[e['pokemon_species']['name']] = e['entry_number']

mons = {}
for i in range(1, 387):
    p = poke('pokemon/%d' % i)
    sp = p['species']['name']
    disp = next((n['name'] for n in poke('pokemon-species/%d' % i)['names']
                 if n['language']['name'] == 'en'), sp.capitalize())
    mons[disp] = {
        'dex': i, 'hoenn': hoenn.get(sp),
        'types': [t['type']['name'].capitalize() for t in p['types']],
        'abilities': [a['ability']['name'] for a in p['abilities']],
        'stats': {s['stat']['name']: s['base_stat'] for s in p['stats']},
        'slug': sp,
    }
    if i % 80 == 0: print('  ...%d' % i, file=sys.stderr)
json.dump(mons, open('../cache/dex.json', 'w'), ensure_ascii=False, indent=1)
print('national %d   hoenn dex entries %d' % (len(mons), len(hoenn)))
