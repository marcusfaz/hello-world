#!/usr/bin/env python3
"""Every wild Emerald encounter, keyed by location area, straight from PokeAPI.

This is the audit spine: any catch card the guide prints must match a row here.
"""
import json, sys
sys.path.insert(0, '.')
from fetch import poke

byloc, bymon = {}, {}
for dexid in range(1, 387):
    try:
        enc = poke('pokemon/%d/encounters' % dexid)
    except Exception as e:
        print('!! %d %s' % (dexid, e), file=sys.stderr); continue
    name = poke('pokemon/%d' % dexid)['name']
    for e in enc:
        area = e['location_area']['name']
        for v in e['version_details']:
            if v['version']['name'] != 'emerald':
                continue
            methods = sorted({d['method']['name'] for d in v['encounter_details']})
            lv = [d['min_level'] for d in v['encounter_details']] + \
                 [d['max_level'] for d in v['encounter_details']]
            rec = {'mon': name, 'area': area, 'methods': methods,
                   'lv': [min(lv), max(lv)], 'rate': v['max_chance']}
            byloc.setdefault(area, []).append(rec)
            bymon.setdefault(name, []).append(rec)
    if dexid % 60 == 0:
        print('  ...%d' % dexid, file=sys.stderr)
json.dump({'byloc': byloc, 'bymon': bymon}, open('../cache/encounters.json', 'w'), indent=1)
print('areas: %d   species with wild encounters: %d' % (len(byloc), len(bymon)))
