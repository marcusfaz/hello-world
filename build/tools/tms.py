#!/usr/bin/env python3
"""Emerald TM/HM list, straight from PokeAPI's emerald version group.

Gen 3 TM numbering is NOT identical across FRLG and RSE for item *locations*,
but the move mapping is per version-group, so we take it from the source.
"""
import json, sys
sys.path.insert(0, '.')
from fetch import poke

rows = []
for i in range(1, 51):
    it = poke('item/tm%02d' % i)
    mv = it['machines']
    move = None
    for m in mv:
        vg = m['version_group']['name']
        if vg == 'emerald':
            move = poke(m['machine']['url'].split('/api/v2/')[1])['move']['name']
    if move is None:  # fall back to ruby-sapphire (same machine set in RSE)
        for m in mv:
            if m['version_group']['name'] == 'ruby-sapphire':
                move = poke(m['machine']['url'].split('/api/v2/')[1])['move']['name']
    rows.append(('TM%02d' % i, move))
for i in range(1, 9):
    it = poke('item/hm%02d' % i)
    move = None
    for m in it['machines']:
        if m['version_group']['name'] in ('emerald', 'ruby-sapphire'):
            move = poke(m['machine']['url'].split('/api/v2/')[1])['move']['name']
            if m['version_group']['name'] == 'emerald':
                break
    rows.append(('HM%02d' % i, move))

out = []
for num, mv in rows:
    d = poke('move/' + mv)
    out.append({'num': num, 'move': ' '.join(w.capitalize() for w in mv.split('-')),
                'type': d['type']['name'].capitalize(), 'power': d['power'],
                'acc': d['accuracy'], 'pp': d['pp']})
json.dump(out, open('../cache/tms.json', 'w'), indent=1)
for o in out:
    print('%s  %-16s %-9s pow %-5s acc %s' % (o['num'], o['move'], o['type'], o['power'], o['acc']))
