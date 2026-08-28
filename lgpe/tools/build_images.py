"""Build parts/10-img.js: mon renders, trainer portraits, location maps as WebP data URIs."""
import sys, os, json, base64, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import get
from bb_images import urls, to_webp
from concurrent.futures import ThreadPoolExecutor

TRAINERS = {
 'Brock':'VSBrock PE.png', 'Misty':'VSMisty PE.png', 'Lt. Surge':'VSLt Surge PE.png',
 'Erika':'VSErika PE.png', 'Koga':'VSKoga PE.png', 'Sabrina':'VSSabrina PE.png',
 'Blaine':'VSBlaine PE.png', 'Giovanni':'VSGiovanni PE.png', 'Trace':'VSTrace.png',
 'Lorelei':'VSLorelei PE.png', 'Bruno':'VSBruno PE.png', 'Agatha':'VSAgatha PE.png',
 'Lance':'VSLance PE.png', 'Blue':'VSBlue PE.png', 'Green':'VSGreen PE.png',
 'Archer':'VSArcher PE.png', 'Jessie':'VSJessie PE.png', 'Red':'VSRed PE.png',
 'Trace (Champion)':'VSTrace 2.png', 'Morimoto':'VSCoach Trainer M PE.png',
}
# stage id -> (Bulbapedia map file, caption)
MAPS = {}

def mons():
    out = {}
    for f in sorted(glob.glob('research/mon_webp/*.webp')):
        n = os.path.basename(f)[:-5]
        out[n] = 'data:image/webp;base64,' + base64.b64encode(open(f,'rb').read()).decode()
    return out

def fetch_set(mapping, maxw, quality, flatten=False):
    have = urls(sorted(set(mapping.values())))
    out, missing = {}, []
    def one(kv):
        k, fn = kv
        u = have.get(fn)
        if not u: return (k, None, fn)
        try:
            raw = get(u, binary=True)
            return (k, 'data:image/webp;base64,' + base64.b64encode(
                to_webp(raw, maxw, quality, flatten)).decode(), fn)
        except Exception as e:
            return (k, None, fn + ' ERR ' + str(e)[:50])
    with ThreadPoolExecutor(6) as ex:
        for k, d, fn in ex.map(one, mapping.items()):
            if d: out[k] = d
            else: missing.append((k, fn))
    return out, missing

if __name__ == '__main__':
    maps_spec = json.load(open('research/maps.json')) if os.path.exists('research/maps.json') else {}
    M = mons()
    T, tmiss = fetch_set(TRAINERS, 190, 82)
    mapping = {k: v['file'] for k, v in maps_spec.items()}
    P, pmiss = fetch_set(mapping, 760, 78, flatten=True, ) if mapping else ({}, [])
    MAPOUT = {k: {'src': P[k], 'loc': maps_spec[k]['loc']} for k in P}
    blob = {'mon': M, 'trn': T, 'map': MAPOUT}
    js = 'const IMG=' + json.dumps(blob, separators=(',', ':'), ensure_ascii=False) + ';\n'
    open('parts/10-img.js', 'w').write(js)
    print('mon %d  trn %d  map %d' % (len(M), len(T), len(MAPOUT)))
    print('size %.2f MB' % (len(js.encode())/1e6))
    for x in tmiss + pmiss: print('  MISSING', x)
