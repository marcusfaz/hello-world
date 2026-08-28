"""Merge PokeAPI move data with the Let's Go specific overrides into one table."""
import json

mv = json.load(open('research/moves.json'))
ov = json.load(open('research/lgpe_move_overrides.json'))

# Bulbapedia's infobox is generation-generic; these are the values LGPE actually uses.
HARD = {
    'Absorb':     {'power': 40,  'pp': 15},
    'Mega Drain': {'power': 75,  'pp': 10},
    'Solar Beam': {'power': 200},
    'Sky Attack': {'power': 200},
    'Teleport':   {'prio': -6},
    # partner-exclusive moves: PokeAPI carries the Generation VIII rewrite, not the LGPE one
    'Zippy Zap':      {'power': 50, 'acc': 100, 'pp': 15, 'prio': 2,
                       'effect': 'Always lands a critical hit, and moves first at +2 priority.'},
    'Splishy Splash': {'power': 90, 'acc': 100, 'pp': 15,
                       'effect': 'Has a 30% chance to paralyse the target.'},
    'Floaty Fall':    {'power': 90, 'acc': 95, 'pp': 15,
                       'effect': 'Has a 30% chance to make the target flinch.'},
    'Pika Papow':     {'power': None, 'acc': None, 'pp': 20,
                       'effect': 'Never misses. Power scales with partner friendship, up to 102.'},
}

out = {}
for slug, m in mv.items():
    name = m['name']
    if not name: continue
    row = {'slug': slug, 'name': name, 'type': m['type'].title(), 'class': m['class'],
           'power': m['power'], 'acc': m['acc'], 'pp': m['pp'], 'prio': m['prio'],
           'effect': m['effect']}
    if name in HARD:
        row.update(HARD[name]); row['lgpe_override'] = True
    out[name] = row

json.dump(out, open('research/movedata.json', 'w'), indent=1, ensure_ascii=False)
print(len(out), 'moves;', sum(1 for r in out.values() if r.get('lgpe_override')), 'carry Let\'s Go overrides')
