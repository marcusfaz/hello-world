#!/usr/bin/env python3
"""Assign every HeartGold encounter area to the stage that walks you through it.

Fails if any area is left unassigned, so the guide cannot send you somewhere
without saying what lives there.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
RAW = json.load(open(os.path.join(HERE, '..', 'cache', 'zones-raw.json')))

# PokeAPI files the Pokewalker courses as "unknown" locations. They are not places
# in the game, so they must not appear in a list of what is catchable here.
SKIP = {'unknown-all-bugs-area', 'unknown-all-poliwag-area', 'unknown-all-rattata-area'}

STAGE = {
'j01': ['new-bark-town-area','johto-route-29-area','cherrygrove-city-area',
        'johto-route-30-area','johto-route-31-area'],
'j02': ['violet-city-area','violet-city-poke-mart','violet-city-pokemon-center',
        'sprout-tower-2f','sprout-tower-3f','dark-cave-violet-city-entrance'],
'j03': ['ruins-of-alph-outside','ruins-of-alph-interior-a','ruins-of-alph-interior-b',
        'ruins-of-alph-interior-c','ruins-of-alph-interior-d','johto-route-32-area',
        'union-cave-1f','union-cave-b1f','union-cave-b2f','johto-route-33-area'],
'j04': ['azalea-town-area','slowpoke-well-1f','slowpoke-well-b1f'],
'j05': ['ilex-forest-area','johto-route-34-area','goldenrod-city-bills-house',
        'goldenrod-city-north-gate','goldenrod-city-department-store-5f',
        'goldenrod-city-game-corner'],
'j07': ['johto-route-35-area','national-park-area','johto-route-36-area','johto-route-37-area'],
'j08': ['ecruteak-city-area','burned-tower-1f','burned-tower-b1f'],
'j09': ['johto-route-38-area','johto-route-39-area','olivine-city-area','olivine-city-gym'],
'j10': ['johto-sea-route-40-area','johto-sea-route-41-area','cianwood-city-area',
        'cianwood-city-kirks-house','cianwood-city-pokemon-center'],
'j11': ['johto-route-47-area','johto-route-47-cave-gate','johto-route-47-inside-cave',
        'johto-route-48-area','safari-zone-gate-area',
        'johto-safari-zone-desert','johto-safari-zone-forest','johto-safari-zone-marshland',
        'johto-safari-zone-meadow','johto-safari-zone-mountain','johto-safari-zone-peak',
        'johto-safari-zone-plains','johto-safari-zone-rocky-beach','johto-safari-zone-savannah',
        'johto-safari-zone-swamp','johto-safari-zone-wasteland','johto-safari-zone-wetland'],
'j12': ['johto-route-42-area','mt-mortar-1f','mt-mortar-b1f','mt-mortar-lower-cave',
        'mt-mortar-upper-cave','johto-route-43-area','lake-of-rage-area'],
# Whirlpool arrives with the Glacier Badge, which is what opens the Whirl Islands.
'j13': ['team-rocket-hq-area','whirl-islands-1f','whirl-islands-b1f','whirl-islands-b2f',
        'whirl-islands-b3f'],
'j15': ['johto-route-44-area','ice-path-1f','ice-path-b1f','ice-path-b2f','ice-path-b3f',
        'blackthorn-city-area','dragons-den-area'],
'j16': ['bell-tower-2f','bell-tower-3f','bell-tower-4f','bell-tower-5f','bell-tower-6f',
        'bell-tower-7f','bell-tower-8f','bell-tower-9f','bell-tower-10f','bell-tower-roof'],
'j17': ['johto-route-45-area','johto-route-46-area','dark-cave-blackthorn-city-entrance',
        'kanto-route-27-area','kanto-route-26-area','tohjo-falls-area','roaming-johto-area',
        'kanto-victory-road-1-1f','kanto-victory-road-1-2f','kanto-victory-road-1-3f'],
'k01': ['vermilion-city-area','vermilion-city-ss-anne-dock'],
'k02': ['kanto-route-5-area','kanto-route-6-area','kanto-route-7-area','kanto-route-8-area',
        'kanto-route-9-area','kanto-route-10-area','kanto-route-11-area','kanto-route-12-area',
        'rock-tunnel-1f','rock-tunnel-b1f','kanto-power-plant-area',
        'saffron-city-magnet-train-station','saffron-city-silph-co'],
'k03': ['cerulean-city-area','kanto-route-24-area','kanto-route-25-area','kanto-route-4-area'],
'k04': ['celadon-city-area','celadon-city-prize-corner','fuchsia-city-area',
        'kanto-route-13-area','kanto-route-14-area','kanto-route-15-area'],
'k05': ['digletts-cave-area','pewter-city-area','pewter-city-pewter-museum-of-science',
        'mt-moon-1f','mt-moon-2f','mt-moon-mt-moon-square','viridian-forest-area',
        'kanto-route-2-north-towards-pewter-city','kanto-route-2-south-towards-viridian-city',
        'kanto-route-3-area'],
'k06': ['kanto-route-16-area','kanto-route-17-area','kanto-route-18-area',
        'kanto-sea-route-19-area','kanto-sea-route-20-area','kanto-sea-route-21-area',
        'seafoam-islands-1f','seafoam-islands-b1f','seafoam-islands-b2f','seafoam-islands-b3f',
        'seafoam-islands-b4f','cinnabar-island-area'],
'k07': ['viridian-city-area','kanto-route-1-area','pallet-town-area',
        'cerulean-cave-1f','cerulean-cave-2f','cerulean-cave-b1f'],
'r01': ['kanto-route-22-area','kanto-route-28-area','mt-silver-1f','mt-silver-1f-top',
        'mt-silver-2f','mt-silver-3f','mt-silver-4f','mt-silver-mountainside',
        'mt-silver-outside','mt-silver-top','embedded-tower-kyogre-room',
        'embedded-tower-rayquaza-room','sinjoh-ruins-area'],
}

def label(slug):
    s = slug
    for a, b in [('johto-sea-route','Route'),('kanto-sea-route','Route'),
                 ('johto-route','Route'),('kanto-route','Route'),
                 ('kanto-victory-road-1','Victory Road'),('kanto-power-plant','Power Plant'),
                 ('johto-safari-zone','Safari Zone —'),('mt-','Mt. ')]:
        if s.startswith(a): s = b + ' ' + s[len(a):].lstrip('-'); break
    s = s.replace('-area','').replace('-', ' ').strip()
    words = []
    for w in s.split():
        if w in ('1f','2f','3f','4f','5f','6f','7f','8f','9f','10f','b1f','b2f','b3f','b4f'):
            words.append(w.upper())
        elif w.lower() in ('of','the','towards'):
            words.append(w.lower())
        else:
            words.append(w[:1].upper() + w[1:])
    return ' '.join(words).replace('Ss Anne','S.S. Aqua').replace('Pokemon','Pokémon')

assigned = {a for v in STAGE.values() for a in v}
orphans = sorted(set(RAW) - assigned - SKIP)
if orphans:
    sys.exit('zonemap: %d areas unassigned:\n  %s' % (len(orphans), '\n  '.join(orphans)))
ghosts = sorted(assigned - set(RAW))
if ghosts:
    sys.exit('zonemap: %d assigned areas have no encounter data:\n  %s' % (len(ghosts), '\n  '.join(ghosts)))

ORDER = ['Grass','Headbutt','Rock Smash','Surf','Old Rod','Good Rod','Super Rod',
         'Fixed encounter','Poké Flute','Roaming','Squirtbottle','Gift','Gift Egg','In-game trade']
out = {}
for sid, slugs in STAGE.items():
    areas = []
    for slug in slugs:
        mons = sorted(RAW[slug], key=lambda r: (ORDER.index(r['ways'][0]['m']), -r['ways'][0]['rate'], r['n']))
        areas.append({'z': label(slug), 'm': mons})
    out[sid] = areas

dst = os.path.join(HERE, '..', 'cache', 'zones.js')
open(dst, 'w').write('const ZONES=%s;\n' % json.dumps(out, separators=(',', ':'), ensure_ascii=False))
print('stages: %d, areas: %d, rows: %d, skipped: %d'
      % (len(out), sum(len(v) for v in out.values()),
         sum(len(a['m']) for v in out.values() for a in v), len(SKIP)))
print('bytes: %d' % os.path.getsize(dst))
