#!/usr/bin/env python3
"""Build the Emerald TM/HM index: number -> move (PokeAPI) + where you get it.

A (number, move) pair scraped from a page is kept only when the move matches the
Gen 3 mapping. That filter is what stops ORAS numbering (TM19 Roost, TM48 Round)
leaking into a Generation III index.
"""
import json, re, sys
sys.path.insert(0, '.')
from fetch import wikitext

TMS = {t['num']: t for t in json.load(open('../cache/tms.json'))}
BY_MOVE = {t['move'].lower(): t['num'] for t in TMS.values()}

PAGES = ['Mauville Game Corner','Lilycove Department Store','Slateport City','Mauville City',
 'Fortree City','Rustboro City','Hoenn Route 104','Trick House','Battle Frontier (Generation III)',
 'Lilycove City','Pacifidlog Town','Hoenn Route 123','Abandoned Ship','New Mauville','Mt. Pyre',
 'Petalburg City','Verdanturf Town','Sootopolis City','Fallarbor Town','Hoenn Route 111',
 'Safari Zone (Hoenn)','Mossdeep City','Seafloor Cavern','Victory Road (Hoenn)','Dewford Town',
 'Granite Cave','Meteor Falls','Fiery Path','Shoal Cave','Scorched Slab','Hoenn Route 113',
 'Hoenn Route 114','Hoenn Route 115','Hoenn Route 119','Hoenn Route 120','Hoenn Route 121',
 'Hoenn Route 124','Hoenn Route 126','Hoenn Route 133','Rusturf Tunnel','Jagged Pass',
 'Roxanne','Brawly','Wattson','Flannery','Norman','Winona','Tate and Liza','Juan',
 'Magma Hideout (Jagged Pass)','Team Aqua Hideout','Weather Institute','Sky Pillar',
 'Littleroot Town','Oldale Town','Ever Grande City','Hoenn Route 118','Hoenn Route 117',
 'Hoenn Route 110','Hoenn Route 103','Hoenn Route 116','Desert Underpass','Artisan Cave']

found = {}
for pg in PAGES:
    try: t = wikitext(pg)
    except Exception: continue
    for num, move in re.findall(r'\{\{(?:TM|HM)\|(\d+)\|([^}|]+)\}\}', t):
        key = ('HM%02d' if int(num) <= 8 and move.lower() in
               ('cut','fly','surf','strength','flash','rock smash','waterfall','dive')
               else 'TM%02d') % int(num)
        rec = TMS.get(key)
        if not rec:                       continue
        if rec['move'].lower() != move.lower().replace('solarbeam','solar beam'):
            continue                      # wrong generation's numbering — drop it
        found.setdefault(key, set()).add(pg)

# every machine that exists, with the pages that mention it
out = []
for num in sorted(TMS, key=lambda k: (k[0], int(k[2:]))):
    t = TMS[num]
    out.append({**t, 'pages': sorted(found.get(num, []))})
json.dump(out, open('../cache/machines.json', 'w'), indent=1)
miss = [o['num'] for o in out if not o['pages']]
print('machines with a located source: %d / %d' % (len(out) - len(miss), len(out)))
print('still unsourced:', miss)
