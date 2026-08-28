"""Generate parts/80-refdata.js: the TM index, the move-class table, the
   Master Trainer list, the Catch Combo ladder and the team-planner pool."""
import json, re

md   = json.load(open('research/movedata.json'))
tms  = json.load(open('research/tms.json'))
loc  = json.load(open('research/tm_locations.json'))
mons = json.load(open('research/mons.json'))
mt   = json.load(open('research/master_trainers.json'))

# hand-checked precise locations for the TMs whose item page gives only a place name,
# taken from the Bulbapedia location lists for each route/building
FINE = {
 'TM02':"Cinnabar Lab — from the scientist in the Research Room",
 'TM03':"Celadon Department Store 3F — from the man behind the counter",
 'TM04':"Pokémon Tower 4F — south-west of the centre of the floor",
 'TM05':"Rocket Hideout B2F — centre of the northern spinner maze",
 'TM06':"Celadon Department Store 4F — bought",
 'TM07':"Celadon Department Store 4F — bought",
 'TM08':"Saffron City — from the Copycat, for showing her a Clefairy",
 'TM09':"Celadon Department Store 4F — bought",
 'TM10':"Cerulean City — from the Rocket Grunt in the robbed house",
 'TM11':"Viridian City — from the sleeping man in the south-west (needs Chop Down)",
 'TM12':"Route 7 — reward for beating Coach Trainer Alpesh",
 'TM13':"Route 10 — on the route between Rock Tunnel and Lavender Town",
 'TM14':"Route 16 — from the reclusive girl in the north house (needs Chop Down)",
 'TM15':"Route 25 — reward for beating Coach Trainer Amala",
 'TM16':"Route 25 — north of the path",
 'TM17':"Celadon Department Store 4F — bought",
 'TM18':"Celadon Department Store 4F — bought",
 'TM19':"Celadon Department Store 4F — bought",
 'TM20':"Rocket Hideout B3F — south of the stairs up to B2F",
 'TM21':"Pokémon Mansion 3F — north-east room",
 'TM22':"Pokémon Mansion 2F — reward for beating Coach Trainer Rita",
 'TM23':"Saffron City Fighting Dojo — after beating the Karate Master",
 'TM24':"Route 12 — the island south-east of the Lavender gate (needs Sea Skim)",
 'TM25':"Celadon Department Store 4F — bought",
 'TM26':"Celadon City — from the man north of the pond (needs Sea Skim)",
 'TM27':"From Koga",
 'TM28':"Celadon Department Store 4F — bought",
 'TM29':"From Misty",
 'TM30':"Celadon Department Store 4F — bought",
 'TM31':"Route 15 — reward for beating Coach Trainer Midge",
 'TM32':"Route 12 — from Mr. Dazzling, once you remind him of his name",
 'TM33':"From Sabrina",
 'TM34':"Silph Co. 7F — eastern room",
 'TM35':"Route 21 — reward for beating Coach Trainer Pam",
 'TM36':"From Lt. Surge",
 'TM37':"Silph Co. 10F — south-west room",
 'TM38':"Power Plant — south-east area",
 'TM39':"Victory Road — reward for beating Coach Trainer Ryan",
 'TM40':"Saffron City — from Mr. Psychic, for talking to him",
 'TM41':"From Giovanni at the Viridian Gym",
 'TM42':"Silph Co. 2F — from the woman in the north-west room",
 'TM43':"Celadon Department Store 4F — bought",
 'TM44':"Celadon Condominiums — Game Freak office",
 'TM45':"Victory Road — south-west of Black Belt Daisuke",
 'TM46':"From Blaine",
 'TM47':"Route 15 — north-west area (needs Sea Skim)",
 'TM48':"Celadon Department Store 4F — bought",
 'TM49':"Victory Road — north-east area",
 'TM50':"Route 12 — from the girl upstairs in the Lavender gate",
 'TM51':"Victory Road — north-west area",
 'TM52':"Pokémon Mansion B1F — the southern room",
 'TM53':"From Erika",
 'TM54':"Silph Co. 5F — south-west room",
 'TM55':"Seafoam Islands B2F — south area",
 'TM56':"Victory Road — north area, behind the boulder puzzle",
 'TM57':"Route 4 — reward for beating Coach Trainer Oberon",
 'TM58':"Pokémon Road (Route 17) — reward for beating Coach Trainer Grantley",
 'TM59':"Route 12 — reward for beating Coach Trainer Priya",
 'TM60':"Cerulean City — reward for beating Coach Trainer Harjit, after the League",
}

def disp(slug):
    fix = {'x-scissor':'X-Scissor','u-turn':'U-turn','self-destruct':'Self-Destruct',
           'will-o-wisp':'Will-O-Wisp','solar-beam':'Solar Beam'}
    if slug in fix: return fix[slug]
    return ' '.join(w.capitalize() for w in slug.split('-'))

rows = []
for t in tms:
    name = None
    for k, v in md.items():
        if v['slug'] == t['move']: name = k; break
    name = name or disp(t['move'])
    m = md.get(name)
    if not m:
        raise SystemExit('no move data for ' + name)
    rows.append([t['tm'], name, m['type'], m['class'], m['power'], m['acc'],
                 FINE.get(t['tm'], (loc.get(t['tm']) or [{}])[0].get('where', '')), m['effect']])

# ---- team planner pool: everything a solo Let's Go, Pikachu! player can field ----
POOL_NAMES = """Pikachu Venusaur Charizard Blastoise Butterfree Beedrill Pidgeot Raticate Fearow
Arbok Raichu Sandslash Nidoqueen Nidoking Clefable Vileplume Parasect Venomoth Dugtrio Persian
Golduck Primeape Arcanine Poliwrath Kadabra Machoke Victreebel Tentacruel Golem Rapidash Slowbro
Magneton Farfetch'd Dodrio Dewgong Muk Cloyster Haunter Onix Hypno Kingler Electrode Exeggutor
Marowak Hitmonlee Hitmonchan Lickitung Weezing Rhydon Chansey Tangela Kangaskhan Seadra Seaking
Starmie Mr. Mime Scyther Jynx Electabuzz Magmar Pinsir Tauros Gyarados Lapras Ditto Vaporeon
Jolteon Flareon Porygon Omastar Kabutops Aerodactyl Snorlax Articuno Zapdos Moltres Dragonite
Mewtwo Mew Alolan Sandslash Alolan Dugtrio Alolan Persian Alolan Raichu Alolan Marowak Alolan Muk
Alolan Exeggutor Alolan Golem Alolan Raticate Alolan Ninetales""".split('\n')

def slug(n):
    fix = {"Nidoran♀":"nidoran-f","Nidoran♂":"nidoran-m","Mr. Mime":"mr-mime","Farfetch'd":"farfetchd"}
    if n in fix: return fix[n]
    if n.startswith('Alolan '): return slug(n[7:]) + '-alola'
    return n.lower().replace('.','').replace("'",'').replace(' ','-')

names = []
buf = ''
for line in POOL_NAMES:
    toks = line.split()
    i = 0
    while i < len(toks):
        tok = toks[i]
        if tok == 'Alolan':
            i += 1; names.append('Alolan ' + toks[i])
        elif tok == 'Mr.':
            i += 1; names.append('Mr. ' + toks[i])
        else:
            names.append(tok)
        i += 1
pool = []
for n in names:
    s = slug(n)
    d = mons.get(s)
    if not d:
        print('  pool: no data for', n, '(' + s + ')'); continue
    pool.append([n, [t.title() for t in d['types']]])

out = []
out.append('/* ===================== REFERENCE DATA =====================\n'
           '   Generated by tools/build_refdata.py from PokeAPI (version group\n'
           '   lets-go-pikachu-lets-go-eevee) plus the Let\'s Go specific move\n'
           '   overrides scraped from Bulbapedia. Do not hand-edit.\n'
           '   ========================================================== */')
out.append('/* [number, move, type, class, power, accuracy, where, effect] */')
out.append('const MACHINES = ' + json.dumps(rows, ensure_ascii=False) + ';')
out.append('/* every move in the guide, so a damage class is never guessed from a type */')
out.append('Object.assign(MOVECLASS, ' + json.dumps(
    {k: v['class'] for k, v in sorted(md.items())}, ensure_ascii=False) + ');')
out.append('const MOVEDATA = ' + json.dumps(
    {k: [v['type'], v['class'], v['power'], v['acc'], v['pp'], v['prio'], v['effect']]
     for k, v in sorted(md.items())}, ensure_ascii=False) + ';')
out.append('const POOL = ' + json.dumps(pool, ensure_ascii=False) + ';')
out.append('const MASTERS = ' + json.dumps(
    [[m['mon'], m['lv'], m['loc'], m['trainer'], m['moves']] for m in mt['battles']],
    ensure_ascii=False) + ';')
out.append('const MASTERS_CP = ' + json.dumps(
    [[r[1], r[3]] for r in mt['other'] if len(r) > 3 and r[1] and r[3] and r[1] != 'Pokémon'],
    ensure_ascii=False) + ';')

open('parts/80-refdata.js', 'w', encoding='utf-8').write('\n'.join(out) + '\n')
print('MACHINES %d  MOVEDATA %d  POOL %d  MASTERS %d' % (len(rows), len(md), len(pool), len(mt['battles'])))
