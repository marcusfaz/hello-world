#!/usr/bin/env python3
"""Find the Emerald in-game area map for each place a stage covers.

Bulbapedia names these <Place>_E.png (Emerald) and <Place>_RS.png (Ruby/Sapphire).
Prefer _E every time — several Hoenn areas were redrawn for Emerald, and the
Magma Hideout and the Safari Zone expansions only exist in the _E versions.
"""
import json, re, sys, urllib.parse
sys.path.insert(0, '.')
from fetch import _get

API = 'https://bulbapedia.bulbagarden.net/w/api.php'

# stage -> [(page to look on, regex for the map, caption)]
WANT = {
 'h01': [('Littleroot Town', r'^Littleroot_Town', 'Littleroot Town'),
         ('Hoenn Route 101', r'^Hoenn_Route_101', 'Route 101'),
         ('Hoenn Route 103', r'^Hoenn_Route_103', 'Route 103')],
 'h02': [('Hoenn Route 102', r'^Hoenn_Route_102', 'Route 102'),
         ('Hoenn Route 104', r'^Hoenn_Route_104', 'Route 104 — south below the woods, north above'),
         ('Petalburg Woods', r'^Petalburg_Woods', 'Petalburg Woods')],
 'h03': [('Rustboro City', r'^Rustboro_City', 'Rustboro City'),
         ('Hoenn Route 116', r'^Hoenn_Route_116', 'Route 116'),
         ('Rusturf Tunnel', r'^Rusturf_Tunnel', 'Rusturf Tunnel')],
 'h04': [('Dewford Town', r'^Dewford_Town', 'Dewford Town'),
         ('Granite Cave', r'^Granite_Cave_1F', 'Granite Cave 1F'),
         ('Granite Cave', r'^Granite_Cave_B1F', 'Granite Cave B1F — Aron')],
 'h05': [('Hoenn Route 109', r'^Hoenn_Route_109', 'Route 109'),
         ('Slateport City', r'^Slateport_City', 'Slateport City')],
 'h06': [('Hoenn Route 110', r'^Hoenn_Route_110', 'Route 110'),
         ('Mauville City', r'^Mauville_City', 'Mauville City'),
         ('Hoenn Route 117', r'^Hoenn_Route_117', 'Route 117 — the Day Care')],
 'h07': [('Hoenn Route 111', r'^Hoenn_Route_111_E\.png|^Hoenn_Route_111_RS\.png', 'Route 111'),
         ('Fiery Path', r'^Fiery_Path', 'Fiery Path'),
         ('Hoenn Route 113', r'^Hoenn_Route_113', 'Route 113 — the ash'),
         ('Meteor Falls', r'^Meteor_Falls_1F1R', 'Meteor Falls 1F')],
 'h08': [('Mt. Chimney', r'^Mt_Chimney', 'Mt. Chimney'),
         ('Jagged Pass', r'^Jagged_Pass_E\.png|^Jagged_Pass_RS\.png', 'Jagged Pass'),
         ('Lavaridge Town', r'^Lavaridge_Town', 'Lavaridge Town'),
         ('Mirage Tower', r'^Mirage_Tower_1F', 'Mirage Tower 1F')],
 'h09': [('Petalburg City', r'^Petalburg_City', 'Petalburg City'),
         ('Abandoned Ship', r'^Abandoned_Ship_1F_and_rooms', 'Abandoned Ship 1F — TM13 Ice Beam'),
         ('New Mauville', r'^New_Mauville', 'New Mauville')],
 'h10': [('Hoenn Route 119', r'^Hoenn_Route_119_E\.png|^Hoenn_Route_119_RS\.png', 'Route 119'),
         ('Weather Institute', r'^Weather_Institute_1F', 'Weather Institute'),
         ('Fortree City', r'^Fortree_City', 'Fortree City')],
 'h11': [('Hoenn Route 121', r'^Hoenn_Route_121', 'Route 121'),
         ('Lilycove City', r'^Lilycove_City_E\.png|^Lilycove_City_RS\.png', 'Lilycove City'),
         ('Mt. Pyre', r'^Mt_Pyre_Exterior|^Mt_Pyre_1F', 'Mt. Pyre')],
 'h12': [('Magma Hideout (Jagged Pass)', r'^Magma_Hideout', 'The Magma Hideout'),
         ('Team Aqua Hideout', r'^(Team_)?Aqua_Hideout', 'The Aqua Hideout')],
 'h13': [('Hoenn Route 124', r'^Hoenn_Route_124', 'Route 124'),
         ('Mossdeep City', r'^Mossdeep_City', 'Mossdeep City'),
         ('Shoal Cave', r'^Shoal_Cave', 'Shoal Cave')],
 'h14': [('Seafloor Cavern', r'^Seafloor_Cavern', 'Seafloor Cavern'),
         ('Sootopolis City', r'^Sootopolis_City_E\.png|^Sootopolis_City_RS\.png', 'Sootopolis City'),
         ('Sky Pillar', r'^Sky_Pillar_1F', 'Sky Pillar')],
 'e4':  [('Victory Road (Hoenn)', r'^Victory_Road.*1F', 'Victory Road 1F'),
         ('Ever Grande City', r'^Ever_Grande_City', 'Ever Grande City')],
 'p01': [('Littleroot Town', r'^Littleroot_Town', 'Littleroot Town — the National Dex'),
         ('Desert Underpass', r'^Desert_Underpass', 'Desert Underpass'),
         ('Meteor Falls', r'^Meteor_Falls_B1F', 'Meteor Falls B1F — Steven')],
 'p02': [('Sealed Chamber', r'^Sealed_Chamber_1R', 'Sealed Chamber, first room'),
         ('Desert Ruins', r'^Desert_Ruins', 'Desert Ruins — Regirock'),
         ('Island Cave', r'^Island_Cave', 'Island Cave — Regice'),
         ('Ancient Tomb', r'^Ancient_Tomb', 'Ancient Tomb — Registeel')],
 'p03': [('Terra Cave', r'^Terra_Cave', 'Terra Cave — Groudon'),
         ('Marine Cave', r'^Marine_Cave', 'Marine Cave — Kyogre'),
         ('Sky Pillar', r'^Sky_Pillar_5F', 'Sky Pillar summit — Rayquaza')],
 'bf01':[('Battle Frontier (Generation III)', r'^Battle_Frontier_E\.png', 'The Battle Frontier')],
 'dex-safari': [('Hoenn Safari Zone', r'^Hoenn_Safari_Zone_E\.png', 'The Hoenn Safari Zone')],
}

def images(page):
    u = API + '?action=parse&format=json&formatversion=2&prop=images&page=' + urllib.parse.quote(page)
    try: return json.loads(_get(u))['parse']['images']
    except Exception: return []

def pick(page, pat):
    ims = images(page)
    hits = [i for i in ims if re.search(pat, i)]
    # prefer the Emerald redraw, then annotated, then Ruby/Sapphire
    for want in (r'_E\.png$', r'_E_annotated\.png$', r'_RSE\.png$', r'_RS\.png$'):
        for h in hits:
            if re.search(want, h): return h
    return hits[0] if hits else None

out, missing = {}, []
for stage, wants in WANT.items():
    rows = []
    for page, pat, cap in wants:
        f = pick(page, pat)
        if f: rows.append([f.replace('_', ' '), cap])
        else: missing.append('%s: %s (%s)' % (stage, cap, page))
    out[stage] = rows
json.dump(out, open('maps.json', 'w'), ensure_ascii=False, indent=1)
print('stages with maps: %d   total maps: %d' % (len(out), sum(len(v) for v in out.values())))
if missing:
    print('NOT FOUND:'); [print('  -', m) for m in missing]
