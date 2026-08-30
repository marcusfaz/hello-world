#!/usr/bin/env python3
"""Content audits. Every claim the guide makes about a catch location, a boss
   team, a move level, an item or a route dependency is re-checked against the
   harvested source data. Run on every rebuild."""
import json, re, sys, os, collections

R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'research')
def load(n): return json.load(open(os.path.join(R, n), encoding='utf-8'))

G        = load('guide_dump.json')
ENC      = load('encounters.json')
CATCHES  = load('catches.json')
PARTIES  = load('parties.json')
MONS     = load('mons.json')
MOVEDATA = load('movedata.json')
ITEMS    = load('items.json')
TMLOC    = load('tm_locations.json')

# A single alternation, longest name first, so "Sludge Bomb" is never read as
# "Sludge" and "Outrage" is never read as "Rage".
CANON = {k.lower(): k for k in MOVEDATA}
MOVE_RE = re.compile(r'(?<![A-Za-z])(?:' +
    '|'.join(re.escape(k) for k in sorted(MOVEDATA, key=len, reverse=True)) +
    r')(?![A-Za-z])', re.I)
POWER_CLAIM = re.compile(r'(?P<n>\d{2,3})\s*power', re.I)

problems = collections.defaultdict(list)
def bad(kind, msg): problems[kind].append(msg)

def strip(h): return re.sub(r'<[^>]+>', '', str(h))
def fold(x):
    """Lower-case and strip accents/punctuation so 'Pokémon Tower' matches 'pokemon-tower-3f'."""
    import unicodedata
    x = unicodedata.normalize('NFKD', str(x))
    x = ''.join(c for c in x if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]', '', x.lower())

SLUG_FIX = {"Nidoran♀":"nidoran-f","Nidoran♂":"nidoran-m","Mr. Mime":"mr-mime","Farfetch'd":"farfetchd","Farfetch’d":"farfetchd"}
def slug(n):
    n = str(n).strip()
    if n in SLUG_FIX: return SLUG_FIX[n]
    if n.startswith('Alolan '): return slug(n[7:]) + '-alola'
    return n.lower().replace('.','').replace("'",'').replace('’','').replace(' ','-')

def blocks(kind):
    for s in G['stages']:
        for b in s['body']:
            if b[0] == kind:
                yield s, b[1]

# ---------------------------------------------------------------- 1. catches
# Every species on a catch card must actually exist in Let's Go, Pikachu!,
# and the place named must be somewhere it is actually found.
enc_by_mon = collections.defaultdict(set)
for area, v in ENC.items():
    for r in v['rows']:
        enc_by_mon[r['mon']].add(area)
catch_by_mon = collections.defaultdict(set)
for part, rows in CATCHES.items():
    for r in rows:
        if r['LGP'] != 'yes': continue
        catch_by_mon[slug(r['mon'])].add((r['sec'] or '').strip())

# places a card may legitimately name that are not encounter areas
OFFGAME = ('let’s go, eevee', "let's go, eevee", 'eevee only', 'eevee!', 'trade', 'free from', 'revive', 'cinnabar lab',
           'fighting dojo', 'silph co', 'in the sky', 'wake with', 'battle it', 'poké ball plus',
           'pokémon go', 'gift', 'from the', 'go park')

for s, cards in blocks('catch'):
    for c in cards:
        name, where = c['n'], strip(c.get('where', ''))
        sl = slug(name)
        if sl not in MONS:
            bad('catch-species', f"{s['id']}: “{name}” is not in the Let’s Go dex data")
            continue
        # typing must match the game data
        want = [t.title() for t in MONS[sl]['types']]
        got = [t.title() for t in c.get('t', [])]
        if got and got != want:
            bad('catch-types', f"{s['id']}: {name} listed as {'/'.join(got)}, game data says {'/'.join(want)}")
        # availability
        wl = where.lower()
        if any(k in wl for k in OFFGAME): continue
        if sl not in enc_by_mon and sl not in catch_by_mon:
            bad('catch-availability', f"{s['id']}: {name} — no Let’s Go, Pikachu! encounter found at all (card says “{where}”)")
            continue
        # the named route/place should appear among its real locations
        raw_areas = list(enc_by_mon.get(sl, set())) + list(catch_by_mon.get(sl, set()))
        areas_flat = ' '.join(raw_areas).lower().replace('-', ' ')
        areas_fold = fold(' '.join(raw_areas))
        toks = re.findall(r'route\s*(\d+)|(viridian forest|mt\. moon|rock tunnel|pok[eé]mon tower|'
                          r'seafoam islands|pok[eé]mon mansion|power plant|cerulean cave|victory road|'
                          r'diglett[’\']s cave|safari zone|silph co)', wl)
        hit = False
        for num, place in toks:
            if num and re.search(r'route\s*%s\b' % num, areas_flat): hit = True
            if place and fold(place) in areas_fold: hit = True
        if toks and not hit:
            bad('catch-location', f"{s['id']}: {name} card says “{where}” but its encounters are {sorted(enc_by_mon.get(sl, set()))[:5]}")

# -------------------------------------------- 1b. version-exclusive flags
# The catch card's version chip is rendered from c.lg, so the flag has to be on
# exactly the species Let's Go, Pikachu! actually has to itself.
EX = load('exclusives.json')
def _disp(x): return x.replace('-', ' ').title()
LGP_ONLY = {_disp(x) for x in EX['lgp_only']}
LGE_ONLY = {_disp(x) for x in EX['lge_only']}
# Alolan forms come from version-split trade counters, so they inherit the
# exclusivity of the Kantonian form the NPC asks for.
ALOLAN_LGP = {'Alolan Sandshrew', 'Alolan Sandslash', 'Alolan Grimer', 'Alolan Muk'}
ALOLAN_LGE = {'Alolan Vulpix', 'Alolan Ninetales', 'Alolan Meowth', 'Alolan Persian'}

for s, cards in blocks('catch'):
    for c in cards:
        n = c['n']
        flagged = bool(c.get('lg'))
        if c.get('lg') and c.get('lgv'):
            bad('version-flag', f"{s['id']}: {n} carries both version chips")
        exclusive = n in LGP_ONLY or n in ALOLAN_LGP
        theirs = n in LGE_ONLY or n in ALOLAN_LGE
        # a card that deliberately describes the other version's stock
        describes_theirs = re.search(r'eevee only|let.s go, eevee', strip(c.get('where', '')), re.I)
        if flagged and theirs:
            bad('version-flag', f"{s['id']}: {n} is flagged as yours but it is Let’s Go, Eevee! exclusive")
        elif flagged and not exclusive:
            bad('version-flag', f"{s['id']}: {n} is flagged version-exclusive but it exists in both versions")
        elif exclusive and not flagged and not c.get('lgv') and not describes_theirs:
            bad('version-flag', f"{s['id']}: {n} is Let’s Go, Pikachu! exclusive but its card carries no version chip")
        elif c.get('lgv') and exclusive:
            bad('version-flag', f"{s['id']}: {n} is flagged as a version-locked <i>spawn</i>, but the whole species is exclusive — use the species chip")

# No renderer may name a different game. The engine came from a LeafGreen
# guide, and a stale literal in a template is invisible in the source data.
FOREIGN = re.compile(r"(LeafGreen|FireRed|Sevii|Kanto Circuit)\s*(only|version|exclusive)", re.I)
for part in ('20-engine.js', '72-roster-render.js', '90-widgets.js'):
    src = open(os.path.join(R, '..', 'parts', part), encoding='utf-8').read()
    for m in FOREIGN.finditer(src):
        bad('foreign-game', f"parts/{part} renders the literal “{m.group(0)}” — this guide is Let’s Go, Pikachu!")

# ---------------------------------------------------------------- 2. bosses
def norm(n): return re.sub(r'[^a-z]', '', str(n).lower())
# Several Bulbapedia pages render the trainer name through a template, so the
# name field is unusable. Index parties by their team signature instead, which
# is what actually has to agree between two independent pages.
bb = {}
bb_by_name = {}
for page, ps in PARTIES.items():
    for party in ps:
        if party['game'] not in ('PE', 'LGP'): continue
        sig = tuple(sorted((norm(m['mon']), str(m['lv'])) for m in party['team']))
        bb.setdefault(sig, []).append((page, party['section']))
        bb_by_name.setdefault(norm(party['name']), []).append(sig)

def find_party(name, team):
    return bb.get(tuple(sorted((norm(m['m']), str(m['l'])) for m in team)))

SKIP_BOSS = {'Articuno', 'Zapdos', 'Moltres', 'Mewtwo'}   # wild encounters, not trainer parties
for s, b in blocks('boss'):
    if b['name'] in SKIP_BOSS:
        # verify the level and typing against the species data instead
        m = b['team'][0]
        sl = slug(m['m'])
        want = [t.title() for t in MONS[sl]['types']]
        if [t.title() for t in m['t']] != want:
            bad('boss-types', f"{s['id']}: {m['m']} typed {m['t']}, game data says {want}")
        continue
    src = find_party(b['name'], b['team'])
    if not src:
        # report what Bulbapedia has for that trainer so the mismatch is legible
        cands = bb_by_name.get(norm(b['name']), [])
        detail = ''
        if cands:
            detail = ' | Bulbapedia has: ' + ' ; '.join(
                ', '.join('%s%s' % (m, l) for m, l in c) for c in cands[:3])
        have = ', '.join('%s%s' % (m['m'], m['l']) for m in b['team'])
        bad('boss-team', f"{s['id']}: {b['name']} team does not match any Bulbapedia PE party — "
                         f"guide has {have}{detail}")
    else:
        if len(set(p for p, _ in src)) < 2 and b['name'] not in ('Red', 'Green', 'Morimoto', 'Archer', 'Jessie'):
            bad('boss-crosscheck', f"{s['id']}: {b['name']} matched only one source page ({src[0][0]})")
    for m in b['team']:
        sl = slug(m['m'])
        if sl not in MONS:
            bad('boss-species', f"{s['id']}: {b['name']} — unknown species {m['m']}")
            continue
        want = [t.title() for t in MONS[sl]['types']]
        if [t.title() for t in m['t']] != want:
            bad('boss-types', f"{s['id']}: {b['name']}’s {m['m']} typed {'/'.join(m['t'])}, game data says {'/'.join(want)}")

# ---------------------------------------------------------------- 3. move levels
lset = {}
for sl, d in MONS.items():
    lset[sl] = {}
    for lv, mv in d['moves']['level-up']:
        lset[sl].setdefault(mv, []).append(lv)

def move_slug(name):
    n = strip(name).strip().lower()
    n = re.sub(r'\s*(and|,).*$', '', n)
    return n.replace(' ', '-').replace("'", '').replace('’', '')

for rid, r in G['rosters'].items():
    for m in r.get('mv', []):
        if not m.get('lv'): continue
        sl = slug(m['p'])
        want = move_slug(m['learn'])
        if sl not in lset:
            bad('move-species', f"{rid}: unknown species {m['p']} in the move table")
            continue
        if want not in lset[sl]:
            near = [k for k in lset[sl]]
            bad('move-learnset', f"{rid}: {m['p']} is said to learn {strip(m['learn'])} at {m['lv']}, "
                                 f"but its Let’s Go learnset has no such move (has: {', '.join(sorted(near)[:8])}…)")
        elif m['lv'] not in lset[sl][want]:
            bad('move-level', f"{rid}: {m['p']} {strip(m['learn'])} said at level {m['lv']}, "
                              f"game data says {lset[sl][want]}")

# ---------------------------------------------------------------- 4. TM claims
tm_in_guide = {}
for s, loot in blocks('loot'):
    for i in loot:
        mm = re.match(r'^TM(\d+)$', i['k'])
        if not mm: continue
        num = 'TM%02d' % int(mm.group(1))
        tm_in_guide.setdefault(num, []).append((s['id'], i['n'], strip(i['where'])))
mach = {m[0]: m for m in G['machines']}
for num, uses in tm_in_guide.items():
    if num not in mach:
        bad('tm-number', f"{num} is cited in the walkthrough but is not a Let’s Go machine")
        continue
    real = mach[num][1]
    for sid, name, where in uses:
        if norm(name) != norm(real):
            bad('tm-move', f"{sid}: {num} called “{name}”, but in Let’s Go {num} is {real}")

# every machine should be findable somewhere in the guide text
alltext = json.dumps(G['stages'], ensure_ascii=False)
for m in G['machines']:
    if m[0] not in alltext and m[1] not in alltext:
        bad('tm-orphan', f"{m[0]} {m[1]} is never mentioned outside the index")

# ---------------------------------------------------------------- 5. move power claims
POW = re.compile(r'(\d{2,3})\s*power\s*(?:physical|special)?\s*[A-Za-z]*\s*\b', re.I)
for s in G['stages']:
    text = json.dumps(s['body'], ensure_ascii=False)
    for m in POWER_CLAIM.finditer(text):
        num = int(m.group('n'))
        # the move a number belongs to is the nearest name that precedes it
        before = text[max(0, m.start() - 90):m.start()]
        names = list(MOVE_RE.finditer(before))
        if not names: continue
        mname = CANON[names[-1].group(0).lower()]
        pw = MOVEDATA[mname]['power']
        if pw is None or num == pw: continue
        # "doubles to 140", "up to 102", "against 40" describe a modified or
        # contrasted value, not the base power
        tail = before[names[-1].end():]
        if re.search(r'(doubles?\s+to|up\s+to|against|rather\s+than|not\s+the|instead\s+of)\s*$', tail, re.I):
            continue
        bad('move-power', f"{s['id']}: “…{mname}…{num} power…” but Let’s Go data says {pw}"
                          f"  [context: …{re.sub(chr(92)+'s+', ' ', before[-70:])}{num} power]")

# ---------------------------------------------------------------- 6. route feasibility
ORDER = [s['id'] for s in G['stages'] if s['id'].startswith(('k', 'p'))]
GATE = {
  'chop down':  'k06', 'light up': 'k07', 'sky dash': 'k09', 'silph scope': 'k09',
  'poké flute': 'k10', 'master ball': 'k11', 'sea skim': 'k12', 'strong push': 'k13',
  'secret key': 'k15', 'key stone': 'k16', 'mega evolve': 'k16', 'mega evolution': 'k16',
  'in the sky': 'p01', 'sky riding': 'p01',
}
idx = {sid: i for i, sid in enumerate(ORDER)}
for s in G['stages']:
    if s['id'] not in idx: continue
    for b in s['body']:
        if b[0] != 'do': continue
        for step in b[1]:
            txt = strip(step.get('t', '') + ' ' + step.get('sub', '')).lower()
            for gate, need in GATE.items():
                if need not in idx: continue
                # Only an instruction to *use* it counts. A forward reference
                # ("the only source of Chop Down", "he pays in Strong Push")
                # is not a dependency violation.
                g = re.escape(gate)
                used = re.search(r'\b(use|using|with|take to|ride)\b[^.]{0,24}' + g, txt) \
                    or re.search(g + r'\s+(the|to|south|north|east|west|back|across|into)\b', txt) \
                    or re.search(r'\b' + g + r'\b[^.]{0,12}\b(it|them)\b', txt)
                if not used: continue
                if re.search(r'(cannot|can not|do not|don’t|not yet|come back|needs|until|later|leave it|only source|pays in)', txt):
                    continue
                if idx[s['id']] < idx[need]:
                    bad('route-order', f"{s['id']} uses “{gate}” but it is not obtained until {need}: "
                                       f"“{strip(step.get('t',''))[:80]}”")

# ---------------------------------------------------------------- 7. party ledger
# Recompute the ledger from ROSTERS + OUT in Python rather than trusting the
# page's own buildFlow(), so a bug in either the data or the engine shows up.
FAMILY = [
  ["Bulbasaur","Ivysaur","Venusaur"],["Charmander","Charmeleon","Charizard"],
  ["Squirtle","Wartortle","Blastoise"],["Pidgey","Pidgeotto","Pidgeot"],
  ["Caterpie","Metapod","Butterfree"],["Rattata","Raticate"],
  ["Oddish","Gloom","Vileplume"],["Nidoran♀","Nidorina","Nidoqueen"],
  ["Nidoran♂","Nidorino","Nidoking"],["Diglett","Dugtrio"],["Mankey","Primeape"],
  ["Growlithe","Arcanine"],["Machop","Machoke","Machamp"],["Geodude","Graveler","Golem"],
  ["Abra","Kadabra","Alakazam"],["Zubat","Golbat"],["Sandshrew","Sandslash"],
  ["Alolan Sandshrew","Alolan Sandslash"],["Alolan Grimer","Alolan Muk"],
  ["Magikarp","Gyarados"],["Staryu","Starmie"],["Slowpoke","Slowbro"],
  ["Seel","Dewgong"],["Shellder","Cloyster"],["Krabby","Kingler"],
  ["Cubone","Marowak"],["Horsea","Seadra"],["Ekans","Arbok"],["Gastly","Haunter","Gengar"],
  ["Dratini","Dragonair","Dragonite"],["Magnemite","Magneton"],["Voltorb","Electrode"],
  ["Poliwag","Poliwhirl","Poliwrath"],["Psyduck","Golduck"],["Doduo","Dodrio"],
  ["Venonat","Venomoth"],["Exeggcute","Exeggutor"],["Tentacool","Tentacruel"],
  ["Ponyta","Rapidash"],["Kabuto","Kabutops"],["Omanyte","Omastar"],["Meowth","Persian"],
  ["Spearow","Fearow"],["Jigglypuff","Wigglytuff"],["Clefairy","Clefable"],
  ["Paras","Parasect"],["Weedle","Kakuna","Beedrill"],["Goldeen","Seaking"],
  ["Eevee","Vaporeon","Jolteon","Flareon"],["Grimer","Muk"],["Koffing","Weezing"],
  ["Rhyhorn","Rhydon"],["Drowzee","Hypno"],["Bellsprout","Weepinbell","Victreebel"]
]
def same_mon(a, b):
    if a == b: return True
    return any(a in f and b in f for f in FAMILY)

order = [st['id'] for st in G['stages'] if st['id'] in G['rosters']]
party = []
for sid in order:
    r = G['rosters'][sid]
    seen = []
    for sl in r['slots']:
        n = sl['n']; seen.append(n)
        entry = {'name': n, 'st': sl['st']}
        i = next((k for k, m in enumerate(party) if same_mon(m['name'], n)), None)
        if i is None: party.append(entry)
        else: party[i] = entry
    for m in party:
        if not any(same_mon(n, m['name']) for n in seen):
            m['st'] = 'keep'
    for pair in (G['out'].get(sid) or []):
        leaving = pair.split('>')[0]
        i = next((k for k, m in enumerate(party) if same_mon(m['name'], leaving)), None)
        if i is None:
            bad('party-out', f"{sid}: OUTS names “{leaving}”, which is not in the party")
        else:
            party[i]['st'] = 'swap'
    # A swap stage legitimately shows seven or eight cards: the six you are
    # carrying, plus the one or two leaving. The invariant is the six.
    live = [m for m in party if m['st'] != 'swap']
    if len(live) != 6:
        bad('party-six', f"{sid}: carries {len(live)} ({', '.join(m['name'] for m in live)})")
    names = [m['name'] for m in party]
    if len(set(names)) != len(names):
        bad('party-dupe', f"{sid}: duplicate party member — {names}")
    # the page's own engine must arrive at the same set
    page_names = [x['name'] for x in G['flow'].get(sid, []) if not x['carried']]
    if sorted(page_names) != sorted(names):
        bad('party-engine', f"{sid}: the page renders {sorted(page_names)} but the data implies {sorted(names)}")
    party = [dict(m) for m in live]

# ------------------------------------------------------- 8. loot vs route steps
# The route is the checklist, so anything the guide bothers to list as loot for
# a stage must also be reachable from a ticked step in that stage — otherwise
# the reader can complete every box and still walk out without the item.
# Some loot needs no step of its own: gym prizes and Coach Trainer rewards are
# handed over by a battle the route already lists, and a few entries are
# deliberate forward references to a later stage.
LOOT_EXEMPT = re.compile(
    r'(needs? |requires? |come back|cannot|bought|celadon department store|daily|'
    r'already collected|listed again|reminder|'
    r'reward for|prize for|from (brock|misty|lt\. surge|erika|koga|sabrina|blaine|giovanni|blue|trace|'
    r'mr\. fuji|the captain|the president|the safari zone warden|the man|the girl|the reclusive girl|'
    r'oak.?s aide|the rocker|the scientist|the woman|the copycat|mr\. psychic|mr\. dazzling|the hiker|'
    r'the black belt|officer jenny|the boy|jessie|green|the poké mart clerk|the bike maniac|'
    r'the sleeping man|the old lady|the office worker|the karate master))', re.I)
for st in G['stages']:
    loot = [i for b in st['body'] if b[0] == 'loot' for i in b[1]]
    if not loot: continue
    steps = ' '.join(strip(x.get('t', '') + ' ' + x.get('sub', ''))
                     for b in st['body'] if b[0] == 'do' for x in b[1])
    steps_f = fold(steps)
    for i in loot:
        name = strip(i['n'])
        if LOOT_EXEMPT.search(strip(i.get('where', '')) + ' ' + strip(i.get('why', ''))): continue
        key = fold(re.sub(r'\s*×\s*\d+$', '', name))
        num = re.match(r'^TM(\d+)$', i['k'])
        if fold(key) in steps_f: continue
        if num and fold('TM%02d' % int(num.group(1))) in steps_f: continue
        bad('loot-unrouted', f"{st['id']}: “{i['k']} {name}” is listed as loot but no route step collects it")

# ------------------------------------------------- 9. route order vs Bulbapedia
# Bulbapedia's own walkthrough visits Kanto in a fixed sequence that includes
# deliberate back-tracking (Route 2 twice, Pallet Town three times, and so on).
# Model that as a sequence with repeats and walk a pointer through it: every
# stage must be satisfiable at or after the point the previous stage reached.
WALK_SEQ = load('walk_sequence.json')
def place_matches(chunk, stop):
    a, b = fold(chunk), fold(stop)
    ra, rb = re.match(r'^route(\d+)$', a), re.match(r'^route(\d+)$', b)
    if ra or rb: return bool(ra and rb and ra.group(1) == rb.group(1))
    return a == b or (len(b) > 6 and b in a) or (len(a) > 6 and a in b)

# The walkthrough back-tracks constantly, so a strict pointer is the wrong
# model. What matters is that the guide advances through Kanto in the same
# order the game does: take each stage's median position in that sequence and
# require the medians to be non-decreasing.
prev_med, prev_id = -1, None
for st in G['stages']:
    if not st['id'].startswith('k'): continue
    pos = []
    for chunk in [c.strip() for c in re.split(r'\s*·\s*', st['place'])]:
        hits = [i for i, w in enumerate(WALK_SEQ) if place_matches(chunk, w)]
        if not hits: continue
        # of the places this stage names, take the occurrence nearest the
        # point the guide has already reached
        pos.append(min(hits, key=lambda i: abs(i - prev_med)))
    if not pos: continue
    # a stage may loop back, but the furthest point it reaches must never move
    # backwards — that is what "following the game's own order" means
    far = max(pos)
    if far < prev_med:
        bad('walk-order', f"{st['id']} ({st['place']}) reaches no further than walkthrough "
                          f"position {far}, behind {prev_id} at {prev_med} — the guide is "
                          f"visiting Kanto out of the game's own order")
    prev_med, prev_id = max(prev_med, far), st['id']

# ------------------------------------------------- 10. type-effectiveness claims
# "4x into Rhydon", "2x on Rock", "immune to Electric" - every one of these is
# checkable against the Generation VII chart, and a wrong one loses a fight.
TYPES = ['Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground',
         'Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy']
CHART = {
  'Normal':{'Rock':.5,'Ghost':0,'Steel':.5},
  'Fire':{'Fire':.5,'Water':.5,'Grass':2,'Ice':2,'Bug':2,'Rock':.5,'Dragon':.5,'Steel':2},
  'Water':{'Fire':2,'Water':.5,'Grass':.5,'Ground':2,'Rock':2,'Dragon':.5},
  'Electric':{'Water':2,'Electric':.5,'Grass':.5,'Ground':0,'Flying':2,'Dragon':.5},
  'Grass':{'Fire':.5,'Water':2,'Grass':.5,'Poison':.5,'Ground':2,'Flying':.5,'Bug':.5,'Rock':2,'Dragon':.5,'Steel':.5},
  'Ice':{'Fire':.5,'Water':.5,'Grass':2,'Ice':.5,'Ground':2,'Flying':2,'Dragon':2,'Steel':.5},
  'Fighting':{'Normal':2,'Ice':2,'Poison':.5,'Flying':.5,'Psychic':.5,'Bug':.5,'Rock':2,'Ghost':0,'Dark':2,'Steel':2,'Fairy':.5},
  'Poison':{'Grass':2,'Poison':.5,'Ground':.5,'Rock':.5,'Ghost':.5,'Steel':0,'Fairy':2},
  'Ground':{'Fire':2,'Electric':2,'Grass':.5,'Poison':2,'Flying':0,'Bug':.5,'Rock':2,'Steel':2},
  'Flying':{'Electric':.5,'Grass':2,'Fighting':2,'Bug':2,'Rock':.5,'Steel':.5},
  'Psychic':{'Fighting':2,'Poison':2,'Psychic':.5,'Dark':0,'Steel':.5},
  'Bug':{'Fire':.5,'Grass':2,'Fighting':.5,'Poison':.5,'Flying':.5,'Psychic':2,'Ghost':.5,'Dark':2,'Steel':.5,'Fairy':.5},
  'Rock':{'Fire':2,'Ice':2,'Fighting':.5,'Ground':.5,'Flying':2,'Bug':2,'Steel':.5},
  'Ghost':{'Normal':0,'Psychic':2,'Ghost':2,'Dark':.5},
  'Dragon':{'Dragon':2,'Steel':.5,'Fairy':0},
  'Dark':{'Fighting':.5,'Psychic':2,'Ghost':2,'Dark':.5,'Fairy':.5},
  'Steel':{'Fire':.5,'Water':.5,'Electric':.5,'Ice':2,'Rock':2,'Steel':.5,'Fairy':2},
  'Fairy':{'Fire':.5,'Fighting':2,'Poison':.5,'Dragon':2,'Dark':2,'Steel':.5},
}
def eff(atk, defs): 
    m = 1.0
    for d in defs: m *= CHART.get(atk, {}).get(d, 1)
    return m

MON_TYPES = {}
for _sl, _d in MONS.items():
    MON_TYPES[fold(_sl)] = [t.title() for t in _d['types']]
MOVE_TYPE = {fold(k): v['type'] for k, v in MOVEDATA.items()}

# English states these in two directions and they mean opposite things:
#   offensive  "Grass is 4x into Rhydon"      -> eff(Grass, Rhydon)
#   defensive  "Ice/Flying is 4x weak to Rock" -> eff(Rock, Ice/Flying)
# Reading one as the other is exactly the mistake that loses a fight, so parse
# the direction explicitly rather than guessing.
SUBJ = r"[A-Za-z][A-Za-z’'\-]*(?:[ /][A-Za-z][A-Za-z’'\-]*){0,2}"
OFFENSIVE = re.compile(
  r'(?P<atk>' + SUBJ + r')\s+(?:is|are)\s+(?P<val>4×|2×|½|a straight zero|zero)\s*'
  r'(?:back\s+)?(?:into|on)\s+(?P<def>' + SUBJ + r')', re.I)
DEFENSIVE = re.compile(
  r'(?P<def>' + SUBJ + r')\s+(?:is|are)\s+'
  r'(?:(?P<val>4×|2×|½)\s*weak\s+to|(?P<imm>immune)\s+to)\s+(?P<atk>' + SUBJ + r')', re.I)
TAKES = re.compile(
  r'(?P<def>' + SUBJ + r')\s+takes?\s+(?P<val>4×|2×|½)\s+from\s+(?P<atk>' + SUBJ + r')', re.I)
VAL = {'4×':4.0, '2×':2.0, '½':0.5, 'a straight zero':0.0, 'zero':0.0}

def as_types(word):
    """A claim's subject may be a type, a dual typing, a move, or a Pokémon."""
    w = fold(word)
    for t in TYPES:
        if fold(t) == w: return ('type', [t])
    if '/' in word:
        parts = [p.strip() for p in word.split('/')]
        ts = [t for p in parts for t in TYPES if fold(t) == fold(p)]
        if len(ts) == len(parts): return ('type', ts)
    if w in MON_TYPES: return ('mon', MON_TYPES[w])
    if w in MOVE_TYPE: return ('move', [MOVE_TYPE[w].title()])
    return (None, None)

checked = 0
for st in G['stages']:
    text = re.sub(r'<[^>]+>', '', json.dumps(st['body'], ensure_ascii=False)).replace('\\"', '"')
    for rx, direction in ((OFFENSIVE, 'off'), (DEFENSIVE, 'def'), (TAKES, 'def')):
        for m in rx.finditer(text):
            ak, at = as_types(m.group('atk'))
            dk, dt = as_types(m.group('def'))
            if not at or not dt: continue
            if dk == 'move': continue
            want = 0.0 if m.groupdict().get('imm') else VAL.get((m.group('val') or '').lower())
            if want is None: continue
            # an attacking claim uses one type at a time; a defending one uses them all
            got = max(eff(a, dt) for a in at)
            checked += 1
            if got != want:
                bad('type-claim', f"{st['id']}: “{re.sub(chr(92)+'s+', ' ', m.group(0))}” "
                                  f"— the chart says ×{got:g}")
print('   (type-effectiveness claims checked: %d)' % checked, file=sys.stderr)

# ------------------------------------------------------- 11. spawn percentages
# PokeAPI reports every Let's Go encounter chance as 100, so the only source for
# a rate is Bulbapedia's walkthrough tables. Check each quoted figure against them.
rate_by_mon = collections.defaultdict(set)
for _rows in CATCHES.values():
    for _r in _rows:
        if _r['LGP'] != 'yes': continue
        for _pct in re.findall(r'(\d+)%', _r['rarity'] or ''):
            rate_by_mon[fold(_r['mon'])].add(int(_pct))
        # "P:30%<br>E:40%" - the P figure is ours
        _m = re.search(r'P:\s*(\d+)%', _r['rarity'] or '')
        if _m: rate_by_mon[fold(_r['mon'])].add(int(_m.group(1)))

for st, cards in blocks('catch'):
    for c in cards:
        where = strip(c.get('where', ''))
        known = rate_by_mon.get(fold(c['n']))
        if not known: continue
        for pct in re.findall(r'(\d+)\s*%', where):
            if int(pct) not in known:
                bad('spawn-rate', f"{st['id']}: {c['n']} card says {pct}%, but the tables list "
                                  f"{sorted(known)}% for it")

# --------------------------------------------------------- 12. quoted base stats
# "160 HP", "130 Attack", "115 Speed" - all checkable, and all load-bearing for
# the recommendations they sit inside.
STATKEY = {'hp':'hp', 'attack':'attack', 'defense':'defense', 'defence':'defense',
           'special attack':'special-attack', 'sp. atk':'special-attack',
           'special defense':'special-defense', 'special defence':'special-defense',
           'sp. def':'special-defense', 'speed':'speed'}
STAT = re.compile(r'(?P<n>\d{2,3})\s+(?:base\s+)?(?P<s>HP|Attack|Defen[cs]e|Special Attack|'
                  r'Special Defen[cs]e|Sp\. Atk|Sp\. Def|Speed)\b')
# Mega forms have their own spreads, which PokeAPI serves under a -mega slug.
MEGA = {'mega charizard y':'charizard-mega-y', 'mega charizard x':'charizard-mega-x',
        'mega venusaur':'venusaur-mega', 'mega blastoise':'blastoise-mega',
        'mega aerodactyl':'aerodactyl-mega', 'mega mewtwo y':'mewtwo-mega-y',
        'mega mewtwo x':'mewtwo-mega-x', 'mega gengar':'gengar-mega',
        'mega alakazam':'alakazam-mega', 'mega gyarados':'gyarados-mega',
        'mega kangaskhan':'kangaskhan-mega', 'mega pinsir':'pinsir-mega',
        'mega beedrill':'beedrill-mega', 'mega pidgeot':'pidgeot-mega',
        'mega slowbro':'slowbro-mega'}
MEGASTATS = load('mega_stats.json') if os.path.exists(os.path.join(R, 'mega_stats.json')) else {}

# Scan each text field on its own, with the subject taken from the record it
# belongs to (a catch card names its species, a roster slot names its Pokémon,
# a boss row names the one it describes). Guessing a subject out of concatenated
# JSON produces nothing but false alarms.
SUBJ_TOKEN = re.compile(r"(?:Mega\s+[A-Z][a-z]+(?:\s+[XY])?|Alolan\s+[A-Z][a-z]+|[A-Z][A-Za-z’'\.\-]{2,11})")
PARTNER = {'hp':45, 'attack':80, 'defense':50, 'special-attack':75,
           'special-defense':60, 'speed':120}
def resolve_subject(tok):
    t = tok.strip()
    if t.lower() in MEGA: return ('mega', MEGA[t.lower()])
    # every Pikachu in this guide's party is the partner, which has its own spread
    if fold(t) in ('pikachu', 'pikachus'): return ('partner', 'partner Pikachu')
    if t.startswith('Alolan '):
        sl = fold(t[7:]) + '-alola'
        return ('mon', sl) if sl in MONS else (None, None)
    f = fold(t)
    for cand in (f, f.rstrip('s')):
        if cand in MONS: return ('mon', cand)
    return (None, None)

def stat_of(kind, sl, key):
    if kind == 'partner': return PARTNER.get(key)
    if kind == 'mega': return (MEGASTATS.get(sl) or {}).get(key)
    return MONS[sl]['stats'].get(key)

def scan_field(sid, text, owner):
    """owner: the species this field is about, or None for free prose."""
    text = strip(text)
    for m in STAT.finditer(text):
        key = STATKEY.get(m.group('s').lower().replace('defence', 'defense'))
        if not key: continue
        before = text[:m.start()]
        # A name only claims the number if it is adjacent to it and in the same
        # sentence. "Snorlax takes Primeape's slot. 160 HP" must not read as
        # Primeape's; "Arcanine's 95 Speed" must read as Arcanine's. Anything
        # further away loses to the record the field belongs to.
        # split on sentence boundaries only — a colon ("Starmie with a Water
        # Stone: 115 Speed") still belongs to the same clause as its subject
        clause = re.split(r'(?<=[.!?])\s+(?=[A-Z“<])', before)[-1]
        after = text[m.end():m.end() + 24]
        cands = [(p, resolve_subject(t)) for p, t in
                 ((mm.start(), mm.group(0)) for mm in SUBJ_TOKEN.finditer(clause))]
        cands = [(p, r) for p, r in cands if r[0]]
        adjacent = [(p, r) for p, r in cands if len(clause) - p <= 60]
        # English also puts the name straight after the figure: "130 HP Lapras survives"
        follow = next((r for r in (resolve_subject(mm.group(0))
                                   for mm in SUBJ_TOKEN.finditer(after)) if r[0]), None)
        picks = {r for _, r in adjacent} | ({follow} if follow else set())
        if len(picks) > 1:
            continue                       # a comparison names two; do not guess
        subj = (follow or (adjacent[-1][1] if adjacent else None)) or owner
        if not subj: continue
        real = stat_of(subj[0], subj[1], key)
        if real is None: continue
        if int(m.group('n')) != real:
            bad('base-stat', f"{sid}: “{m.group(0)}” reads as {subj[1]}’s, "
                             f"but its {m.group('s')} is {real}")

for st in G['stages']:
    for b in st['body']:
        kind, v = b[0], b[1]
        if kind == 'catch':
            for c in v:
                own = resolve_subject(c['n'])
                for fld in ('why', 'where'):
                    if c.get(fld): scan_field(st['id'], c[fld], own if own[0] else None)
        elif kind == 'boss':
            for mm in v['team']:
                own = resolve_subject(mm['m'])
                if mm.get('note'): scan_field(st['id'], mm['note'], own if own[0] else None)
            for line in v.get('plan', []): scan_field(st['id'], line, None)
        elif kind in ('p', 'tip', 'warn', 'team', 'ver', 'lgpe', 'h'):
            if isinstance(v, str): scan_field(st['id'], v, None)
        elif kind == 'ul':
            for line in v: scan_field(st['id'], line, None)
        elif kind == 'do':
            for step in v:
                for fld in ('t', 'sub'):
                    if isinstance(step, dict) and step.get(fld): scan_field(st['id'], step[fld], None)

for rid, r in G['rosters'].items():
    for sl in r['slots']:
        own = resolve_subject(sl['n'])
        if sl.get('w'): scan_field(rid, sl['w'], own if own[0] else None)
    for mv in r.get('mv', []):
        own = resolve_subject(mv['p'])
        if mv.get('why'): scan_field(rid, mv['why'], own if own[0] else None)
    for fld in ('sum', 'now'):
        if r.get(fld): scan_field(rid, r[fld], None)

# ---------------------------------------------------------------- report
total = sum(len(v) for v in problems.values())
for kind in sorted(problems):
    print(f"\n## {kind} ({len(problems[kind])})")
    for m in problems[kind][:40]:
        print('   -', m)
    if len(problems[kind]) > 40:
        print(f'   … and {len(problems[kind]) - 40} more')
print(f"\n{total} problem(s)." if total else "\nAll content audits passed.")
sys.exit(1 if total else 0)
