import sys, os, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import get, gets, API
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(ROOT, 'research')
VG   = 'lets-go-pikachu-lets-go-eevee'
VER  = 'lets-go-pikachu'

def en(names, key='name'):
    for n in names:
        if n['language']['name'] == 'en': return n[key]
    return None

# ---------- 1. TMs ----------
def tms():
    items = gets([API + 'item/tm%02d/' % i for i in range(1, 101)] , workers=8)
    urls, nums = [], []
    for i, it in enumerate(items, 1):
        for m in it.get('machines', []):
            if m['version_group']['name'] == VG:
                urls.append(m['machine']['url']); nums.append(i)
    machs = gets(urls, workers=8)
    out = []
    for n, m in zip(nums, machs):
        out.append({'tm': 'TM%02d' % n, 'move': m['move']['name']})
    return out

# ---------- 2. moves used anywhere ----------
def move_detail(names):
    ms = gets([API + 'move/' + n + '/' for n in names], workers=8)
    d = {}
    for m in ms:
        pv = [x for x in m['past_values'] if x['version_group']['name'] in
              ('sun-moon','ultra-sun-ultra-moon','x-y','omega-ruby-alpha-sapphire')]
        d[m['name']] = {
            'name': en(m['names']),
            'type': m['type']['name'],
            'class': m['damage_class']['name'],
            'power': m['power'], 'acc': m['accuracy'], 'pp': m['pp'],
            'prio': m['priority'],
            'effect': (en(m['effect_entries'], 'short_effect') or '').replace('$effect_chance', str(m.get('effect_chance') or '')),
            'past': [{'vg': p['version_group']['name'], 'power': p['power'], 'acc': p['accuracy'],
                      'type': p['type']['name'] if p['type'] else None} for p in pv],
        }
    return d

# ---------- 3. species / pokemon ----------
def dex():
    p = get(API + 'pokedex/letsgo-kanto/')
    entries = [(e['entry_number'], e['pokemon_species']['name']) for e in p['pokemon_entries']]
    return entries

def pokemon(names):
    ps = gets([API + 'pokemon/' + n + '/' for n in names], workers=8)
    out = {}
    for p in ps:
        moves = {'level-up': [], 'machine': [], 'tutor': []}
        for mv in p['moves']:
            for d in mv['version_group_details']:
                if d['version_group']['name'] != VG: continue
                meth = d['move_learn_method']['name']
                if meth in moves:
                    moves[meth].append((d['level_learned_at'], mv['move']['name']))
        for k in moves: moves[k] = sorted(set(moves[k]))
        out[p['name']] = {
            'id': p['id'],
            'types': [t['type']['name'] for t in p['types']],
            'stats': {s['stat']['name']: s['base_stat'] for s in p['stats']},
            'moves': moves,
        }
    return out

# ---------- 4. encounters ----------
def encounters():
    la = get(API + 'location-area/?limit=2000')
    # LGPE areas are named kanto-*; but safer: fetch all and filter by version in encounters
    areas = gets([r['url'] for r in la['results']], workers=10)
    out = {}
    for a in areas:
        rows = []
        for pe in a['pokemon_encounters']:
            for vd in pe['version_details']:
                if vd['version']['name'] != VER: continue
                for e in vd['encounter_details']:
                    rows.append({'mon': pe['pokemon']['name'], 'min': e['min_level'], 'max': e['max_level'],
                                 'chance': e['chance'], 'method': e['method']['name'],
                                 'cond': [c['name'] for c in e['condition_values']]})
        if rows:
            out[a['name']] = {'loc': a['location']['name'], 'rows': rows}
    return out

if __name__ == '__main__':
    what = sys.argv[1]
    if what == 'tms':
        d = tms(); json.dump(d, open(OUT+'/tms.json','w'), indent=1); print(len(d), 'TMs')
    elif what == 'dex':
        d = dex(); json.dump(d, open(OUT+'/dex.json','w'), indent=1); print(len(d))
    elif what == 'mons':
        entries = json.load(open(OUT+'/dex.json'))
        names = [n for _, n in entries]
        extra = ['pikachu','raichu','meltan','melmetal','mewtwo','mew',
                 'rattata-alola','raichu-alola','sandshrew-alola','vulpix-alola','diglett-alola',
                 'meowth-alola','geodude-alola','grimer-alola','exeggutor-alola','marowak-alola',
                 'muk-alola','persian-alola','dugtrio-alola','golem-alola','ninetales-alola',
                 'sandslash-alola','raticate-alola']
        d = pokemon(sorted(set(names + extra)))
        json.dump(d, open(OUT+'/mons.json','w'), indent=1); print(len(d), 'mons')
    elif what == 'enc':
        d = encounters(); json.dump(d, open(OUT+'/encounters.json','w'), indent=1); print(len(d), 'areas')
    elif what == 'moves':
        mons = json.load(open(OUT+'/mons.json'))
        s = set()
        for m in mons.values():
            for k in m['moves']:
                for _, mv in m['moves'][k]: s.add(mv)
        for t in json.load(open(OUT+'/tms.json')): s.add(t['move'])
        for x in ['zippy-zap','splishy-splash','floaty-fall','pika-papow','bouncy-bubble',
                  'buzzy-buzz','sizzly-slide','glitzy-glow','baddy-bad','sappy-seed',
                  'freezy-frost','sparkly-swirl','veevee-volley','teleport','mega-drain',
                  'solar-beam','sky-attack','dig','absorb','leech-life','bite','swift']: s.add(x)
        d = move_detail(sorted(s)); json.dump(d, open(OUT+'/moves.json','w'), indent=1); print(len(d),'moves')
