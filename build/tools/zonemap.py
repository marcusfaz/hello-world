#!/usr/bin/env python3
"""Assign every Emerald encounter area to the stage that reaches it, and emit the
per-stage zone tables as a source part.

Every area in the encounter data must land in exactly one stage. An unassigned
area means a place the guide walks you through without telling you what lives
there, which is the bug this file exists to prevent.
"""
import json, os, sys

CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cache')
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src')
Z = json.load(open(os.path.join(CACHE, 'zones.json')))

# stage -> [(area slug, display name)] in walking order
STAGE_AREAS = [
 ('h01', [('littleroot-town-area', 'Littleroot Town'), ('hoenn-route-101-area', 'Route 101'),
          ('hoenn-route-103-area', 'Route 103')]),
 ('h02', [('hoenn-route-102-area', 'Route 102'), ('petalburg-city-area', 'Petalburg City'),
          ('hoenn-route-104-area', 'Route 104'), ('petalburg-woods-area', 'Petalburg Woods')]),
 ('h03', [('rustboro-city-area', 'Rustboro City'), ('hoenn-route-116-area', 'Route 116'),
          ('rusturf-tunnel-area', 'Rusturf Tunnel')]),
 ('h04', [('hoenn-route-105-area', 'Route 105'), ('hoenn-route-106-area', 'Route 106'),
          ('dewford-town-area', 'Dewford Town'), ('granite-cave-1f', 'Granite Cave 1F'),
          ('granite-cave-1fsmall-room', 'Granite Cave — 1F side room'),
          ('granite-cave-b1f', 'Granite Cave B1F'), ('granite-cave-b2f', 'Granite Cave B2F')]),
 ('h05', [('hoenn-route-107-area', 'Route 107'), ('hoenn-route-108-area', 'Route 108'),
          ('hoenn-route-109-area', 'Route 109'), ('slateport-city-area', 'Slateport City')]),
 ('h06', [('hoenn-route-110-area', 'Route 110'), ('hoenn-route-117-area', 'Route 117')]),
 ('h07', [('hoenn-route-111-area', 'Route 111'), ('hoenn-route-112-area', 'Route 112'),
          ('fiery-path-area', 'Fiery Path'), ('hoenn-route-113-area', 'Route 113'),
          ('hoenn-route-114-area', 'Route 114'), ('meteor-falls-area', 'Meteor Falls — 1F'),
          ('hoenn-route-115-area', 'Route 115')]),
 ('h08', [('jagged-pass-area', 'Jagged Pass'), ('lavaridge-town-area', 'Lavaridge Town'),
          ('mirage-tower-area', 'Mirage Tower')]),
 ('h09', [('abandoned-ship-area', 'Abandoned Ship'),
          ('new-mauville-entrance-area', 'New Mauville — entrance'),
          ('new-mauville-entrance', 'New Mauville — entrance'),
          ('new-mauville-area', 'New Mauville'), ('hoenn-route-118-area', 'Route 118')]),
 ('h10', [('hoenn-route-119-area', 'Route 119'),
          ('hoenn-route-119-weather-institute', 'Weather Institute'),
          ('fortree-city-area', 'Fortree City'), ('hoenn-route-120-area', 'Route 120')]),
 ('h11', [('hoenn-route-121-area', 'Route 121'), ('hoenn-route-122-area', 'Route 122'),
          ('lilycove-city-area', 'Lilycove City'), ('mt-pyre-outside', 'Mt. Pyre — outside'),
          ('mt-pyre-1f', 'Mt. Pyre 1F'), ('mt-pyre-2f', 'Mt. Pyre 2F'),
          ('mt-pyre-3f', 'Mt. Pyre 3F'), ('mt-pyre-4f', 'Mt. Pyre 4F'),
          ('mt-pyre-5f', 'Mt. Pyre 5F'), ('mt-pyre-6f', 'Mt. Pyre 6F'),
          ('mt-pyre-summit', 'Mt. Pyre — summit'), ('hoenn-route-123-area', 'Route 123')]),
 ('h12', [('magma-hideout-area', 'Magma Hideout'),
          ('team-magma-hideout-area', 'Magma Hideout — inner room'),
          ('team-aqua-hideout-area', 'Aqua Hideout')]),
 ('h13', [('hoenn-route-124-area', 'Route 124'),
          ('hoenn-route-124-underwater', 'Route 124 — underwater'),
          ('mossdeep-city-area', 'Mossdeep City'),
          ('mossdeep-city-stevens-house', "Steven's house, Mossdeep"),
          ('hoenn-route-125-area', 'Route 125'), ('shoal-cave-low-tide', 'Shoal Cave — low tide'),
          ('shoal-cave-high-tide', 'Shoal Cave — high tide'), ('shoal-cave-b1f', 'Shoal Cave B1F'),
          ('shoal-cave-b2f', 'Shoal Cave B2F'), ('shoal-cave-b3f', 'Shoal Cave B3F')]),
 ('h14', [('hoenn-route-126-area', 'Route 126'),
          ('hoenn-route-126-underwater', 'Route 126 — underwater'),
          ('hoenn-route-127-area', 'Route 127'), ('hoenn-route-128-area', 'Route 128'),
          ('seafloor-cavern-area', 'Seafloor Cavern'), ('sootopolis-city-area', 'Sootopolis City'),
          ('cave-of-origin-entrance', 'Cave of Origin — entrance'),
          ('cave-of-origin-1f', 'Cave of Origin 1F'), ('cave-of-origin-b1f', 'Cave of Origin B1F'),
          ('cave-of-origin-b2f', 'Cave of Origin B2F'),
          ('cave-of-origin-b3f', 'Cave of Origin B3F'),
          ('hoenn-route-129-area', 'Route 129'), ('hoenn-route-130-area', 'Route 130'),
          ('mirage-island-area', 'Mirage Island'), ('hoenn-route-131-area', 'Route 131'),
          ('pacifidlog-town-area', 'Pacifidlog Town'), ('sky-pillar-1f', 'Sky Pillar 1F'),
          ('sky-pillar-3f', 'Sky Pillar 3F'), ('sky-pillar-5f', 'Sky Pillar 5F')]),
 ('e4',  [('hoenn-route-132-area', 'Route 132'), ('hoenn-route-133-area', 'Route 133'),
          ('hoenn-route-134-area', 'Route 134'), ('hoenn-victory-road-1f', 'Victory Road 1F'),
          ('hoenn-victory-road-b1f', 'Victory Road B1F'),
          ('hoenn-victory-road-b2f', 'Victory Road B2F'),
          ('ever-grande-city-area', 'Ever Grande City')]),
 ('p01', [('desert-underpass-area', 'Desert Underpass'), ('meteor-falls-b1f', 'Meteor Falls B1F'),
          ('meteor-falls-back', 'Meteor Falls — back room'),
          ('meteor-falls-backsmall-room', 'Meteor Falls — back side room'),
          ('hoenn-altering-cave-area', 'Altering Cave')]),
 ('p02', [('desert-ruins-area', 'Desert Ruins'), ('island-cave-area', 'Island Cave'),
          ('ancient-tomb-area', 'Ancient Tomb')]),
 ('p03', [('terra-cave-area', 'Terra Cave'), ('marine-cave-area', 'Marine Cave'),
          ('sky-pillar-apex', 'Sky Pillar — apex'), ('roaming-hoenn-area', 'Roaming Hoenn'),
          ('southern-island-area', 'Southern Island'),
          ('faraway-island-area', 'Faraway Island'), ('navel-rock-area', 'Navel Rock')]),
 ('bf01', [('hoenn-battle-frontier-area', 'Battle Frontier'),
           ('artisan-cave-area', 'Artisan Cave')]),
 ('dex-safari', [('hoenn-safari-zone-sw', 'Safari Zone — south-west'),
                 ('hoenn-safari-zone-se', 'Safari Zone — south-east'),
                 ('hoenn-safari-zone-nwmach-bike-area', 'Safari Zone — north-west (Mach Bike)'),
                 ('hoenn-safari-zone-neacro-bike-area', 'Safari Zone — north-east (Acro Bike)'),
                 ('hoenn-safari-zone-expansion-north', 'Safari Zone — north expansion'),
                 ('hoenn-safari-zone-expansion-south', 'Safari Zone — south expansion')]),
]

assigned, dupes, out = set(), [], {}
for stage, areas in STAGE_AREAS:
    rows = []
    for slug, label in areas:
        if slug not in Z:
            continue                      # slug spelled two ways; the real one is next to it
        if slug in assigned:
            dupes.append(slug)
        assigned.add(slug)
        rows.append({'z': label, 'm': Z[slug]})
    out[stage] = rows

missing = sorted(set(Z) - assigned)
if missing:
    print('AREAS NOT ASSIGNED TO ANY STAGE (%d):' % len(missing), file=sys.stderr)
    for m in missing: print('  -', m, [r['n'] for r in Z[m]], file=sys.stderr)
    sys.exit(1)
if dupes:
    print('AREAS ASSIGNED TWICE: %s' % dupes, file=sys.stderr); sys.exit(1)

body = ('/* ===================== WHAT LIVES WHERE =====================\n'
        '   Generated by tools/zonemap.py from PokeAPI encounters filtered to the\n'
        '   emerald version group. Every area in the game is assigned to exactly one\n'
        '   stage, and rates are the sum of a species\' slot chances for that method. */\n'
        'const ZONES = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
open(os.path.join(SRC, '26-zones.js'), 'w', encoding='utf-8').write(body)

nz = sum(len(v) for v in out.values())
nm = sum(len(z['m']) for v in out.values() for z in v)
print('stages %d   areas %d   species rows %d   %.0f KB'
      % (len(out), nz, nm, len(body) / 1024))
