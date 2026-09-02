import json, os, time, urllib.request
CACHE = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'cache', 'api')
os.makedirs(CACHE, exist_ok=True)
UA = {'User-Agent': 'JohtoCircuitGuide/1.0 (personal fan guide)'}
def poke(path):
    key = path.replace('/', '_') + '.json'
    p = os.path.join(CACHE, key)
    if os.path.exists(p):
        return json.load(open(p))
    url = 'https://pokeapi.co/api/v2/' + path
    for attempt in range(4):
        try:
            d = json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60))
            json.dump(d, open(p, 'w'))
            return d
        except Exception as e:
            if attempt == 3: raise
            time.sleep(1.5 * (attempt + 1))
