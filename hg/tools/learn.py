#!/usr/bin/env python3
"""Level-up learnsets for the Pokemon this guide actually recommends,
filtered to the heartgold-soulsilver version group."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import poke

WANT = ["cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr",
        "chikorita","bayleef","meganium","gyarados","magikarp","mareep","flaaffy","ampharos",
        "zubat","golbat","crobat","heracross","wooper","quagsire","growlithe","arcanine",
        "abra","kadabra","onix","sentret","furret","hoothoot","noctowl","togepi","togetic",
        "geodude","graveler","eevee","umbreon","espeon","lapras","dratini","dragonair","dragonite",
        "sneasel","weavile","larvitar","pupitar","tyranitar","phanpy","donphan","tyrogue"]
VG = 'heartgold-soulsilver'
out = {}
for slug in WANT:
    d = poke('pokemon/%s' % slug)
    rows = []
    for m in d['moves']:
        for v in m['version_group_details']:
            if v['version_group']['name'] != VG: continue
            if v['move_learn_method']['name'] != 'level-up': continue
            rows.append((v['level_learned_at'], ' '.join(w.capitalize() for w in m['move']['name'].split('-'))))
    rows.sort()
    name = ' '.join(w.capitalize() for w in slug.split('-'))
    out[name] = [{'lv': lv, 'mv': mv} for lv, mv in rows]
    print('%-12s %d level-up moves' % (name, len(rows)))
dst = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cache', 'learn.json')
json.dump(out, open(dst, 'w'), ensure_ascii=False)
print('written:', dst)
