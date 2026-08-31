#!/usr/bin/env python3
"""Every Emerald-flagged item on every Hoenn location page.

Bulbapedia Itemlist templates carry per-version flags (Ru/Sa/E/OR/AS). We keep
ONLY rows with E=yes, so a Ruby-only or ORAS-only pickup can never leak in.
"""
import json, re, sys
sys.path.insert(0, '.')
from fetch import wikitext

LOCATIONS = (
    ['Littleroot Town','Oldale Town','Petalburg City','Rustboro City','Dewford Town',
     'Slateport City','Mauville City','Verdanturf Town','Fallarbor Town','Lavaridge Town',
     'Fortree City','Lilycove City','Mossdeep City','Sootopolis City','Pacifidlog Town',
     'Ever Grande City','Petalburg Woods','Rusturf Tunnel','Granite Cave','Mt. Chimney',
     'Jagged Pass','Fiery Path','Meteor Falls','New Mauville','Weather Institute',
     'Safari Zone (Hoenn)','Mt. Pyre','Shoal Cave','Seafloor Cavern','Cave of Origin',
     'Victory Road (Hoenn)','Sky Pillar','Magma Hideout (Jagged Pass)','Team Aqua Hideout',
     'Abandoned Ship','Trick House','Scorched Slab','Sea Mauville','Desert Underpass',
     'Mirage Tower','Southern Island','Artisan Cave','Aqua Hideout','Sealed Chamber',
     'Island Cave','Desert Ruins','Ancient Tomb','Marine Cave','Terra Cave',
     'Battle Frontier (Generation III)','Oceanic Museum','S.S. Tidal','Mauville Game Corner',
     'Lilycove Department Store','Slateport Market','Devon Corporation','Pokémon Fan Club']
    + ['Hoenn Route %d' % n for n in range(101, 135)]
)

out = {}
for loc in LOCATIONS:
    try:
        t = wikitext(loc)
    except Exception as e:
        print('!! %s %s' % (loc, e), file=sys.stderr); continue
    rows = []
    for m in re.finditer(r'\{\{Itemlist\|([^\n]*?)\}\}\s*$', t, re.M):
        body = m.group(1)
        parts, depth, buf = [], 0, ''
        for ch in body:                      # split on | but never inside {{...}}
            if ch == '{': depth += 1
            elif ch == '}': depth -= 1
            if ch == '|' and depth == 0:
                parts.append(buf.strip()); buf = ''
            else:
                buf += ch
        parts.append(buf.strip())
        flags = {p.split('=')[0]: p.split('=', 1)[1] for p in parts if '=' in p}
        if flags.get('E') != 'yes':
            continue
        name = parts[0]
        # The sprite name ("TM Steel") is not the item; display= carries the real one.
        disp = flags.get('display', '')
        mm = re.search(r'\{\{(TM|HM)\|(\d+)\|([^}|]+)\}\}', disp)
        if mm:
            name = '%s%02d %s' % (mm.group(1), int(mm.group(2)), mm.group(3))
        elif disp:
            d2 = re.sub(r'\[\[([^\]|]*\|)?([^\]]*)\]\]', r'\2', disp)
            d2 = re.sub(r'\{\{[a-z]+\|([^}|]*)(\|[^}]*)?\}\}', r'\1', d2).strip()
            if d2: name = d2
        where = parts[1] if len(parts) > 1 and '=' not in parts[1] else ''
        where = re.sub(r'\{\{[a-z]+\|([^}|]*)(\|[^}]*)?\}\}', r'\1', where)
        where = re.sub(r'\[\[([^\]|]*\|)?([^\]]*)\]\]', r'\2', where)
        where = re.sub(r"'{2,}", '', where).strip()
        rows.append({'item': name, 'where': where,
                     'hidden': 'hidden' in where.lower()})
    if rows:
        out[loc] = rows
json.dump(out, open('../cache/items.json', 'w'), ensure_ascii=False, indent=1)
n = sum(len(v) for v in out.values())
print('locations with Emerald items: %d   total item pickups: %d' % (len(out), n))
