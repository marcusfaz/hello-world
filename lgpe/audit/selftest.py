#!/usr/bin/env python3
"""Mutation test: break each fact deliberately and confirm the audit catches it.
   An audit that cannot fail is not an audit."""
import json, subprocess, sys, os, copy, re
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'research')
DUMP = os.path.join(R, 'guide_dump.json')
orig = open(DUMP, encoding='utf-8').read()

def run():
    r = subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), 'audit.py')],
                       capture_output=True, text=True)
    return r.stdout

MUT = []
def mutate(name, fn): MUT.append((name, fn))

def find_stage(d, sid): return next(s for s in d['stages'] if s['id'] == sid)
def find_block(d, sid, kind):
    for b in find_stage(d, sid)['body']:
        if b[0] == kind: return b
    raise KeyError(kind)

mutate('catch card given the wrong typing',
       lambda d: find_block(d, 'k03', 'catch')[1][0].__setitem__('t', ['Fire']))
mutate('catch card moved to a route it does not appear on',
       lambda d: find_block(d, 'k03', 'catch')[1][0].__setitem__('where', 'Route 18 — 20%'))
mutate('boss given an extra Pokémon',
       lambda d: find_block(d, 'k02', 'boss')[1]['team'].append({'m':'Golem','l':40,'t':['Rock','Ground']}))
mutate('boss level changed by one',
       lambda d: find_block(d, 'k02', 'boss')[1]['team'][0].__setitem__('l', 12))
mutate('boss Pokémon given the wrong typing',
       lambda d: find_block(d, 'k04', 'boss')[1]['team'][1].__setitem__('t', ['Water']))
mutate('move-learn level shifted',
       lambda d: d['rosters']['k03']['mv'][0].__setitem__('lv', 21))
mutate('move claimed that the species cannot learn',
       lambda d: d['rosters']['k03']['mv'][0].__setitem__('learn', '<b>Hydro Pump</b>'))
mutate('TM number attached to the wrong move',
       lambda d: find_block(d, 'k04', 'loot')[1][0].__setitem__('k', 'TM19'))
mutate('move power misquoted',
       lambda d: find_stage(d, 'k18')['body'].append(['p', 'Solar Beam is 120 power in this game.']))
mutate('a Secret Technique used before it is obtained',
       lambda d: find_block(d, 'k03', 'do')[1].append({'at':'Mt. Moon','t':'Use Sea Skim to cross the water.'}))
mutate('party ledger dropped to five',
       lambda d: d['rosters']['k01']['slots'].pop())

fails = 0
for name, fn in MUT:
    d = json.loads(orig)
    fn(d)
    json.dump(d, open(DUMP, 'w', encoding='utf-8'))
    out = run()
    caught = 'All content audits passed' not in out
    print(('  ok   ' if caught else '  MISS ') + name)
    if not caught: fails += 1
open(DUMP, 'w', encoding='utf-8').write(orig)
base = run()
print(('\n  ok   ' if 'All content audits passed' in base else '\n  MISS ') + 'clean dump still passes')
if 'All content audits passed' not in base: fails += 1
print(f"\n{fails} mutation(s) went undetected." if fails else "\nEvery mutation was caught.")
sys.exit(1 if fails else 0)
