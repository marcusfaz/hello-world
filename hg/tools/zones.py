#!/usr/bin/env python3
"""Per-area encounter tables for HeartGold.

PokeAPI returns one row per encounter SLOT, so a species holding four walking
slots appears four times; the rate for a method is the SUM of its slot chances.
max_chance sums across methods and is useless for display.

Types are reported at current-generation rules, so Fairy is stripped back to the
Gen IV typing before anything reaches the guide.
"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import poke

GEN4_TYPES = {
 'Clefairy':['Normal'],'Clefable':['Normal'],'Cleffa':['Normal'],
 'Jigglypuff':['Normal'],'Wigglytuff':['Normal'],'Igglybuff':['Normal'],
 'Mr. Mime':['Psychic'],'Mime Jr.':['Psychic'],'Marill':['Water'],'Azumarill':['Water'],
 'Azurill':['Normal'],'Snubbull':['Normal'],'Granbull':['Normal'],
 'Togepi':['Normal'],'Togetic':['Normal','Flying'],'Togekiss':['Normal','Flying'],
 'Ralts':['Psychic'],'Kirlia':['Psychic'],'Gardevoir':['Psychic'],'Gallade':['Psychic'],
 'Mawile':['Steel'],
}
METHOD = {
 'walk':'Grass','surf':'Surf','old-rod':'Old Rod','good-rod':'Good Rod','super-rod':'Super Rod',
 'rock-smash':'Rock Smash','headbutt':'Headbutt','headbutt-low':'Headbutt','headbutt-normal':'Headbutt',
 'headbutt-high':'Headbutt','gift':'Gift','gift-egg':'Gift Egg','npc-trade':'In-game trade',
 'static':'Fixed encounter','roaming-grass':'Roaming','roaming-water':'Roaming','pokeflute':'Poké Flute',
 'squirt-bottle':'Squirtbottle','dark-grass':'Grass','only-one':'Fixed encounter',
}
ORDER = ['Grass','Headbutt','Rock Smash','Surf','Old Rod','Good Rod','Super Rod',
         'Fixed encounter','Poké Flute','Roaming','Squirtbottle','Gift','Gift Egg','In-game trade']
# Pokemon Ranger is an external distribution, not a HeartGold encounter - it must
# not appear in a list of what you can catch in this game.
SKIP_METHOD = {'pokemon-ranger'}

def title(slug):
    return ' '.join(w.capitalize() for w in slug.split('-'))

areas = {}
missing_method = set()
for dexid in range(1, 494):
    p = poke('pokemon/%d' % dexid)
    name = title(p['name']).replace('Mr Mime','Mr. Mime').replace('Mime Jr','Mime Jr.')
    types = [t['type']['name'].capitalize() for t in sorted(p['types'], key=lambda x: x['slot'])]
    if name in GEN4_TYPES:
        types = GEN4_TYPES[name]
    elif 'Fairy' in types:
        raise SystemExit('zones: %s is Fairy but has no Gen IV typing on record' % name)
    for e in poke('pokemon/%d/encounters' % dexid):
        area = e['location_area']['name']
        for v in e['version_details']:
            if v['version']['name'] != 'heartgold':
                continue
            per = {}
            for d in v['encounter_details']:
                raw = d['method']['name']
                if raw in SKIP_METHOD: continue
                m = METHOD.get(raw)
                if not m:
                    missing_method.add(raw); continue
                a = per.setdefault(m, {'rate':0,'lo':99,'hi':0})
                a['rate'] += d['chance']
                a['lo'] = min(a['lo'], d['min_level'])
                a['hi'] = max(a['hi'], d['max_level'])
            if not per: continue
            ways = [{'m':m,'rate':min(a['rate'],100),'lo':a['lo'],'hi':a['hi']}
                    for m, a in sorted(per.items(), key=lambda kv: ORDER.index(kv[0]))]
            areas.setdefault(area, []).append({'n':name,'t':types,'ways':ways})
    if dexid % 60 == 0:
        print('  ...%d/493' % dexid, flush=True)

if missing_method:
    print('UNMAPPED METHODS:', sorted(missing_method))
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cache', 'zones-raw.json')
json.dump(areas, open(out, 'w'))
print('areas: %d, species rows: %d' % (len(areas), sum(len(v) for v in areas.values())))
