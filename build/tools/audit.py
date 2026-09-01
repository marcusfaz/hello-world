#!/usr/bin/env python3
"""Content audits. Re-run on every rebuild.

Everything the guide asserts is checked against the machine-readable source it
came from: PokeAPI for encounters, learnsets and machine numbering, and the
Bulbapedia Emerald party templates for boss teams.
"""
import json, os, re, sys
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, '..', 'cache')
SRC = os.path.join(HERE, '..', 'src')
WRAPPED = 'file://' + os.path.abspath(os.path.join(CACHE, 'wrapped.html'))

DEX = json.load(open(os.path.join(CACHE, 'dex.json')))
ENC = json.load(open(os.path.join(CACHE, 'encounters.json')))
BOSSES = json.load(open(os.path.join(CACHE, 'bosses.json')))
TMS = {t['num']: t for t in json.load(open(os.path.join(CACHE, 'tms.json')))}
SLUG = {n: m['slug'] for n, m in DEX.items()}

# PokeAPI reports CURRENT typings, which include Fairy — a type that does not exist in
# Generation III. Auditing the guide against those would flag correct Gen 3 typings as
# errors, so the pre-Generation-VI typing is restored here before anything is compared.
GEN3_TYPES = {
    'Clefairy': ['Normal'], 'Clefable': ['Normal'], 'Cleffa': ['Normal'],
    'Jigglypuff': ['Normal'], 'Wigglytuff': ['Normal'], 'Igglybuff': ['Normal'],
    'Mr. Mime': ['Psychic'], 'Marill': ['Water'], 'Azumarill': ['Water'],
    'Azurill': ['Normal'], 'Snubbull': ['Normal'], 'Granbull': ['Normal'],
    'Togepi': ['Normal'], 'Togetic': ['Normal', 'Flying'],
    'Ralts': ['Psychic'], 'Kirlia': ['Psychic'], 'Gardevoir': ['Psychic'],
    'Mawile': ['Steel'],
}
def gen3_types(name):
    if name in GEN3_TYPES:
        return GEN3_TYPES[name]
    t = [x for x in DEX[name]['types'] if x != 'Fairy']
    if t != DEX[name]['types']:
        raise SystemExit('audit: %s gained Fairy but has no Generation III typing on '
                         'record — add it to GEN3_TYPES before trusting this audit.' % name)
    return t

problems, notes = [], []
def bad(cat, msg): problems.append('[%s] %s' % (cat, msg))

# ── 1. every catch card names a real Emerald encounter (or says why not) ──
src_all = ''.join(open(os.path.join(SRC, f), encoding='utf-8').read()
                  for f in sorted(os.listdir(SRC)) if f.endswith('.js'))
cards = re.findall(r'\{n:"([^"]+)",\s*t:\[([^\]]*)\],\s*where:"(.*?)",\s*why:', src_all)
GIFT_OK = ('Gift', 'gift', 'Root Fossil', 'Claw Fossil', 'Steven', 'trade', 'Trade',
           'breed', 'Breed', 'evolve', 'Evolve', 'after the Devon Scope', 'needs the Devon Scope',
           'Sky Pillar', 'much later', 'next stage', 'Noted', 'nowhere else in Hoenn')
for name, types, where in cards:
    slug = SLUG.get(name)
    if not slug:
        bad('catch', '"%s" is not a Generation III species name' % name); continue
    # types must match the Gen 3 typing from PokeAPI
    claimed = [t.strip().strip('"') for t in types.split(',') if t.strip()]
    actual = gen3_types(name)
    if sorted(claimed) != sorted(actual):
        bad('catch', '%s typed %s in the guide, %s in the data' % (name, claimed, actual))
    if slug not in ENC['bymon'] and not any(k in where for k in GIFT_OK):
        bad('catch', '%s: card says "%s" but it has no wild Emerald encounter' % (name, where[:60]))

# ── 2. boss dossiers match the Emerald party templates ──
PAGE = {'Roxanne':'Roxanne','Brawly':'Brawly','Wattson':'Wattson','Flannery':'Flannery',
        'Norman':'Norman','Winona':'Winona','Tate & Liza':'Tate and Liza','Juan':'Juan',
        'Sidney':'Sidney','Phoebe':'Phoebe','Glacia':'Glacia','Drake':'Drake',
        'Wallace':'Wallace','Archie':'Archie'}
dossiers = re.findall(r'\["boss",\{name:"([^"]+)".*?team:\[(.*?)\], plan:', src_all, re.S)
seen_boss = set()
for who, teamsrc in dossiers:
    if who not in PAGE or who in seen_boss: continue
    seen_boss.add(who)
    mine = [(m.group(1), m.group(2)) for m in
            re.finditer(r'\{m:"([^"]+)", l:(\d+)', teamsrc)]
    ref = [p for p in BOSSES[PAGE[who]] if 'rematch' not in ' '.join(p['heading']).lower()]
    if not ref:
        bad('boss', '%s: no Emerald party found in the source data' % who); continue
    theirs = [(m['mon'], re.sub(r'<br>.*', '', m['lv'])) for m in ref[0]['team']]
    if mine != theirs:
        bad('boss', '%s: guide has %s, Bulbapedia Emerald template has %s' % (who, mine, theirs))

# ── 3. move-plan levels match the Emerald learnsets ──
def learnset(slug):
    p = os.path.join(CACHE, 'learn_%s.json' % slug)
    if os.path.exists(p): return json.load(open(p))
    sys.path.insert(0, HERE)
    from learn import learnset as L
    d = {}
    for lv, mv in L(slug):
        d.setdefault(mv, []).append(lv)
    json.dump(d, open(p, 'w'))
    return d
mv_rows = re.findall(r'\{p:"([^"]+)",[^}]*?lv:(\d+), learn:"([^"]*?)"', src_all)
for who, lv, learn in mv_rows:
    if who.startswith('%S%'): continue
    m = re.search(r'<b>([A-Za-z \-\']+)</b>|^([A-Za-z \-\']+)$', learn)
    move = (m.group(1) or m.group(2)) if m else None
    if not move or who not in SLUG: continue
    if move.lower() in ('evolution',): continue
    key = move.lower().replace(' ', '-').replace("'", '')
    ls = learnset(SLUG[who])
    if key not in ls:
        bad('move', '%s does not learn %s by level-up in Emerald' % (who, move))
    elif int(lv) not in ls[key]:
        bad('move', '%s learns %s at %s in Emerald, guide says Lv %s' % (who, move, ls[key], lv))

# ── 4. the machine index matches PokeAPI's emerald mapping ──
mach = re.findall(r'\["(TM\d\d|HM\d\d)","([^"]+)","([^"]+)","', src_all)
for num, move, typ in mach:
    ref = TMS.get(num)
    if not ref:
        bad('tm', '%s is not a Generation III machine' % num); continue
    if ref['move'].lower().replace(' ', '') != move.lower().replace(' ', ''):
        bad('tm', '%s: guide says %s, Emerald data says %s' % (num, move, ref['move']))
    if ref['type'] != typ:
        bad('tm', '%s %s: guide types it %s, data says %s' % (num, move, typ, ref['type']))
if len(mach) != 58:
    bad('tm', 'machine index has %d rows, expected 58 (TM01-50 + HM01-08)' % len(mach))

# ── 5. every item a route step tells you to take exists at that location ──
ITEMS = json.load(open(os.path.join(CACHE, 'items.json')))
# location page name -> the place strings the guide uses in `at:` and prose
PLACE_ALIASES = {
 'Hoenn Route %d' % n: {'Route %d' % n} for n in range(101, 135)
}
for k in list(ITEMS):
    PLACE_ALIASES.setdefault(k, set()).add(k)
PLACE_ALIASES.setdefault('Safari Zone (Hoenn)', set()).add('Safari Zone')
PLACE_ALIASES.setdefault('Victory Road (Hoenn)', set()).add('Victory Road')
PLACE_ALIASES.setdefault('Magma Hideout (Jagged Pass)', set()).add('Magma Hideout')
PLACE_ALIASES.setdefault('Battle Frontier (Generation III)', set()).add('Battle Frontier')

# flat index: item name -> set of place strings it can be found at
ITEM_AT = {}
for loc, rows in ITEMS.items():
    for r in rows:
        nm = re.sub(r'\s*\u00d7\s*\d+$', '', r['item']).strip()
        ITEM_AT.setdefault(nm.lower(), set()).update(PLACE_ALIASES.get(loc, {loc}))

# the machines the guide places, and where it says they are
for num, move, typ, where in re.findall(r'\["(TM\d\d|HM\d\d)","([^"]+)","([^"]+)","([^"]+)"\]', src_all):
    key = ('%s %s' % (num, move)).lower()
    if key not in ITEM_AT:
        continue                      # shop / badge / Game Corner source, not a floor pickup
    places = ITEM_AT[key]
    plain = re.sub(r'<[^>]+>', '', where)
    if not any(pl.lower() in plain.lower() for pl in places):
        bad('item', '%s %s: guide says "%s", data places it at %s'
            % (num, move, plain[:52], sorted(places)))
notes.append('machine placements cross-checked against location pages: %d'
             % sum(1 for n, m, t, w in re.findall(r'\["(TM\d\d|HM\d\d)","([^"]+)","([^"]+)","([^"]+)"\]', src_all)
                   if ('%s %s' % (n, m)).lower() in ITEM_AT))

# ── 6. the zone index is complete: nothing catchable is left out ──
ZONES_SRC = open(os.path.join(SRC, '26-zones.js'), encoding='utf-8').read()
ZONES = json.loads(ZONES_SRC.split('const ZONES = ', 1)[1].rstrip(';\n'))
ZDATA = json.load(open(os.path.join(CACHE, 'zones.json')))

in_guide = {}
for stage, areas in ZONES.items():
    for a in areas:
        for r in a['m']:
            in_guide.setdefault(r['n'], set()).add(a['z'])

# every species with an Emerald encounter must be somewhere in the guide
catchable = {r['n'] for rows in ZDATA.values() for r in rows}
absent = sorted(catchable - set(in_guide))
if absent:
    bad('zones', '%d catchable species appear nowhere: %s' % (len(absent), absent[:12]))

# and every area's row set must match the source data exactly
by_label = {}
for stage, areas in ZONES.items():
    for a in areas:
        by_label.setdefault(a['z'], []).append({r['n'] for r in a['m']})
src_sets = [{r['n'] for r in rows} for rows in ZDATA.values()]
for label, sets in by_label.items():
    for st in sets:
        if st not in src_sets:
            bad('zones', 'area "%s" lists a species set that is not in the encounter data' % label)

# a hand-written encounter rate on a catch card must exist in the encounter data
RATES = {}
for a, rows in ZDATA.items():
    for r in rows:
        RATES.setdefault(r['n'], set()).update(w['rate'] for w in r['ways'])
for name, types, where in cards:
    plain = re.sub(r'<[^>]+>', '', where)
    claimed = [int(x) for x in re.findall(r'(\d+)\s*%', plain)]
    have = RATES.get(name, set())
    off = [p for p in claimed if p not in have]
    if off:
        bad('rate', '%s card claims %s%% — the encounter data has %s'
            % (name, off, sorted(have)))

# the guide's own catch cards must agree with the zone data
for name, types, where in cards:
    if name in in_guide: continue
    slug = SLUG.get(name)
    if slug and slug in ENC['bymon']:
        bad('zones', '%s has wild encounters but is missing from every zone table' % name)

# the reported regression, kept as a fixture
r104 = [r for rows in ZDATA.values() for r in rows]
w = [a for st in ZONES.values() for a in st if a['z'] == 'Route 104']
if not w:
    bad('zones', 'Route 104 has no zone table')
else:
    names = {r['n'] for r in w[0]['m']}
    for must in ('Wingull', 'Marill', 'Taillow', 'Poochyena', 'Wurmple', 'Magikarp', 'Pelipper'):
        if must not in names:
            bad('zones', 'Route 104 zone table is missing %s' % must)

notes.append('zone index: %d areas, %d species rows, %d distinct species'
             % (sum(len(v) for v in ZONES.values()),
                sum(len(a['m']) for v in ZONES.values() for a in v),
                len(in_guide)))

# ── 7 & 8. rendered checks: party size, route numbering ──
with sync_playwright() as pw:
    b = pw.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
                           args=['--no-sandbox'])
    pg = b.new_page(); pg.goto(WRAPPED, wait_until='load'); pg.wait_for_timeout(900)

    for starter in ('mudkip', 'torchic', 'treecko'):
        pg.evaluate("s => setStarter(s)", starter)
        pg.wait_for_timeout(400)
        rows = pg.evaluate("""() => [...document.querySelectorAll('.party')].map(p => ({
            stage: p.closest('.stage').id,
            carrying: [...p.querySelectorAll('.haverow')]
                .filter(r => r.querySelector('.hlbl.ok'))
                .flatMap(r => [...r.querySelectorAll('.hmon')].map(m => m.textContent.trim()))
        }))""")
        for r in rows:
            n = len(r['carrying'])
            if n != 6:
                bad('party', '%s (%s run): ledger carries %d, not 6 — %s'
                    % (r['stage'], starter, n, r['carrying']))

    pg.evaluate("() => setStarter('mudkip')"); pg.wait_for_timeout(400)
    routes = pg.evaluate("""() => [...document.querySelectorAll('.checks.route')].map(ul => ({
        stage: ul.closest('.stage').id,
        seq: [...ul.querySelectorAll('.stepn')].map(s => +s.textContent),
        legs: [...ul.querySelectorAll('li.leg')].map(l => l.dataset.leg),
        inleg: [...ul.querySelectorAll('.doneRow')].map(r => r.dataset.inleg)
    }))""")
    for r in routes:
        if r['seq'] != list(range(1, len(r['seq']) + 1)):
            bad('route', '%s: step numbers are not monotonic from 1 — %s' % (r['stage'], r['seq']))
        if any(v is None or v == '' for v in r['inleg']):
            bad('route', '%s: a step sits outside any leg' % r['stage'])
        if r['legs'] != [str(i + 1) for i in range(len(r['legs']))]:
            bad('route', '%s: leg numbering is not sequential — %s' % (r['stage'], r['legs']))
    notes.append('route lists: %d, steps: %d, legs: %d'
                 % (len(routes), sum(len(r['seq']) for r in routes),
                    sum(len(r['legs']) for r in routes)))
    b.close()

print('cards checked: %d   dossiers: %d   move rows: %d   machines: %d'
      % (len(cards), len(seen_boss), len(mv_rows), len(mach)))
for n in notes: print(n)
print()
if problems:
    print('AUDIT PROBLEMS (%d):' % len(problems))
    for p in problems: print(' -', p)
    sys.exit(1)
print('All content audits passed.')
