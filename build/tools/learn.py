#!/usr/bin/env python3
"""Emerald level-up learnsets — the version group is 'emerald', never 'ruby-sapphire'."""
import json, sys
sys.path.insert(0, '.')
from fetch import poke
def learnset(slug):
    p = poke('pokemon/' + slug)
    rows = []
    for m in p['moves']:
        for d in m['version_group_details']:
            if d['version_group']['name'] != 'emerald': continue
            if d['move_learn_method']['name'] != 'level-up': continue
            rows.append((d['level_learned_at'], m['move']['name']))
    rows.sort()
    return rows
if __name__ == '__main__':
    for s in sys.argv[1:]:
        print('==== %s' % s)
        for lv, mv in learnset(s):
            d = poke('move/' + mv)
            print('  L%-3d %-16s %-9s pow %-5s %s' % (lv, mv, d['type']['name'], d['power'],
                  'PHYS' if d['type']['name'] in ('normal','fighting','flying','ground','rock','bug','ghost','poison','steel') else 'SPEC'))
