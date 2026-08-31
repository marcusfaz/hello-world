#!/usr/bin/env python3
"""Check every route step against the location data for the leg it sits under.

The failure this catches is the one that is invisible when you read the guide:
a step whose text is factually right but which is filed under the wrong place,
so the reader is sent there at the wrong point in the walk.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, '..', 'cache')
SRC = os.path.join(HERE, '..', 'src')
ITEMS = json.load(open(os.path.join(CACHE, 'items.json')))

# guide leg label -> the Bulbapedia location page(s) that leg covers
LEG_PAGES = {
    'Littleroot Town': ['Littleroot Town'], 'Oldale Town': ['Oldale Town'],
    'Route 101': ['Hoenn Route 101'], 'Route 102': ['Hoenn Route 102'],
    'Route 103': ['Hoenn Route 103'],
    'Route 104': ['Hoenn Route 104'],
    'Route 104 south': ['Hoenn Route 104'], 'Route 104 north': ['Hoenn Route 104'],
    'Abandoned Ship': ['Abandoned Ship'],
    'Petalburg City': ['Petalburg City'], 'Petalburg Woods': ['Petalburg Woods'],
    'Rustboro City': ['Rustboro City'], 'Route 116': ['Hoenn Route 116'],
    'Rusturf Tunnel': ['Rusturf Tunnel'], 'Devon Corporation': ['Rustboro City', 'Devon Corporation'],
    'Route 105–107': ['Hoenn Route 105'], 'Dewford Town': ['Dewford Town'],
    'Granite Cave': ['Granite Cave'], 'Dewford Gym': ['Dewford Town'],
    'Granite Cave (second visit)': ['Granite Cave'],
    'Route 109': ['Hoenn Route 109'], 'Slateport City': ['Slateport City', 'Slateport Market', 'Oceanic Museum'],
    'Oceanic Museum': ['Oceanic Museum'], 'Route 110': ['Hoenn Route 110', 'Trick House'],
    'Mauville City': ['Mauville City', 'Mauville Game Corner'], 'New Mauville': ['New Mauville'],
    'Route 117 · Verdanturf': ['Hoenn Route 117', 'Verdanturf Town'],
    'Route 111 (south)': ['Hoenn Route 111'], 'Route 112': ['Hoenn Route 112'],
    'Fiery Path': ['Fiery Path'], 'Route 113': ['Hoenn Route 113'],
    'Fallarbor Town': ['Fallarbor Town'], 'Route 114': ['Hoenn Route 114'],
    'Meteor Falls': ['Meteor Falls'], 'Mt. Chimney': ['Mt. Chimney'],
    'Jagged Pass': ['Jagged Pass'], 'Lavaridge Town': ['Lavaridge Town'],
    'Route 111 desert': ['Hoenn Route 111'], 'Mirage Tower': ['Mirage Tower'],
    'Route 118': ['Hoenn Route 118'], 'Route 119': ['Hoenn Route 119'], 'Route 119 north': ['Hoenn Route 119'],
    'Weather Institute': ['Weather Institute'], 'Route 119 (north)': ['Hoenn Route 119'],
    'Fortree City': ['Fortree City'], 'Route 120': ['Hoenn Route 120'],
    'Route 121': ['Hoenn Route 121'], 'Lilycove City': ['Lilycove City', 'Lilycove Department Store'],
    'Mt. Pyre': ['Mt. Pyre'], 'Team Aqua Hideout': ['Team Aqua Hideout'],
    'Magma Hideout': ['Magma Hideout (Jagged Pass)'], 'Slateport Harbor': ['Slateport City'],
    'Route 124': ['Hoenn Route 124'], 'Shoal Cave': ['Shoal Cave'],
    'Mossdeep City': ['Mossdeep City'], 'Space Center': ['Mossdeep City'],
    'Route 128': ['Hoenn Route 128'], 'Seafloor Cavern': ['Seafloor Cavern'],
    'Sootopolis City': ['Sootopolis City'], 'Sky Pillar': ['Sky Pillar'],
    'Victory Road': ['Victory Road (Hoenn)'], 'Ever Grande City': ['Ever Grande City'],
    'The League': ['Ever Grande City'], 'Lilycove Harbor': ['Lilycove City', 'S.S. Tidal'],
    'Route 134': ['Hoenn Route 134'], 'Sealed Chamber (first room)': ['Sealed Chamber'],
    'Sealed Chamber (second room)': ['Sealed Chamber'], 'Desert Ruins': ['Desert Ruins'],
    'Island Cave': ['Island Cave'], 'Ancient Tomb': ['Ancient Tomb'],
    'Battle Frontier': ['Battle Frontier (Generation III)'],
    'Terra Cave': ['Terra Cave'], 'Marine Cave': ['Marine Cave'],
    'Weather Institute ': ['Weather Institute'], 'Roaming Hoenn': [],
    'Anywhere': [], 'Route 104 (beach)': ['Hoenn Route 104'],
}
# items whose source is an NPC gift, a shop or a story event rather than a floor pickup
NO_LOCATION_CHECK = {
    'poké ball', 'poke ball', 'potion', 'super potion', 'great ball', 'ultra ball',
    'repel', 'escape rope', 'antidote', 'full heal', 'revive', 'full restore',
}

src = {}
for f in sorted(os.listdir(SRC)):
    if f.endswith('.js'):
        src[f] = open(os.path.join(SRC, f), encoding='utf-8').read()
allsrc = ''.join(src.values())

# item name -> locations it appears at, from the E=yes-filtered Bulbapedia rows
ITEM_AT = {}
for loc, rows in ITEMS.items():
    for r in rows:
        nm = re.sub(r'\s*×\s*\d+$', '', r['item']).strip().lower()
        ITEM_AT.setdefault(nm, set()).add(loc)
        m = re.match(r'^(tm|hm)(\d\d) ', nm)
        if m:
            ITEM_AT.setdefault(m.group(1) + m.group(2), set()).add(loc)

# Route 104 is one Bulbapedia page but two disconnected halves, split by Petalburg
# Woods. Filing a step under the wrong half sends the reader across the woods at the
# wrong point in the walk, so the halves are checked by landmark.
SEGMENTS = {
  'Route 104 south': {
     'own':   ['briney', 'beach', 'pier', 'fisherman', 'shore'],
     'other': ['flower shop', 'pond', 'bridge', 'rustboro'],
     'other_name': 'Route 104 north'},
  'Route 104 north': {
     'own':   ['flower shop', 'pond', 'bridge', 'rustboro', 'petal'],
     'other': ['briney', 'beach', 'pier', 'fisherman'],
     'other_name': 'Route 104 south'},
}

problems = []
steps_checked = 0

# walk every ["do",[ ... ]] block, tracking the current leg
for block in re.findall(r'\["do",\[(.*?)\n\]\]', allsrc, re.S):
    leg = None
    for m in re.finditer(r'\{(?:at:"([^"]*)", )?t:"((?:[^"\\]|\\.)*)"', block):
        if m.group(1): leg = m.group(1)
        text = m.group(2)
        plain = re.sub(r'<[^>]+>', '', text)
        steps_checked += 1
        if leg not in LEG_PAGES:
            problems.append('unmapped leg %r (step: %s)' % (leg, plain[:50]))
            continue
        pages = LEG_PAGES[leg]
        if not pages: continue
        # a step that names the other half's landmarks is filed under the wrong half
        seg = SEGMENTS.get(leg)
        if seg:
            low = plain.lower()
            hit = [w for w in seg['other'] if w in low]
            # a step may legitimately name the other half to tell you where you are NOT
            if hit and not re.search(r'not on|far side|other half|across the woods|'
                                     r'no flower shop|is on route 104', low):
                problems.append('%s: filed under "%s" but names %s — that is on %s'
                                % (plain[:52], leg, hit, seg['other_name']))

        # every machine the step tells you to take
        for num in re.findall(r'\b(TM\d\d|HM\d\d)\b', text):
            if not re.search(r'\bTake\b|\bfrom\b|\bTM\b.*\bhidden\b', plain): pass
            locs = ITEM_AT.get(num.lower())
            if not locs: continue
            if not (locs & set(pages)):
                problems.append('%s: step under "%s" says take %s, data places it at %s'
                                % (plain[:52], leg, num, sorted(locs)))

print('route steps checked: %d' % steps_checked)
if problems:
    print('\nPLACEMENT PROBLEMS (%d):' % len(problems))
    for p in problems: print(' -', p)
    sys.exit(1)
print('Every machine in a route step matches the leg it sits under.')
