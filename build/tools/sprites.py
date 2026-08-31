#!/usr/bin/env python3
"""Download the real Gen 3 Emerald battle sprites for all 386, measure the budget."""
import os, sys, urllib.request, concurrent.futures
sys.path.insert(0, '.')
OUT = '../cache/spr'
os.makedirs(OUT, exist_ok=True)
BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/%d.png'
def one(i):
    p = os.path.join(OUT, '%d.png' % i)
    if os.path.exists(p) and os.path.getsize(p) > 0: return os.path.getsize(p)
    try:
        req = urllib.request.Request(BASE % i, headers={'User-Agent': 'EmeraldGuideBuild/1.0'})
        d = urllib.request.urlopen(req, timeout=60).read()
        open(p, 'wb').write(d); return len(d)
    except Exception as e:
        print('!! %d %s' % (i, e), file=sys.stderr); return 0
with concurrent.futures.ThreadPoolExecutor(12) as ex:
    sizes = list(ex.map(one, range(1, 387)))
got = [s for s in sizes if s]
print('sprites: %d/386   raw total %.2f MB   base64 est %.2f MB'
      % (len(got), sum(sizes)/1048576, sum(sizes)*4/3/1048576))
