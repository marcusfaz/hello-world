"""Cached, concurrent fetcher for PokeAPI + Bulbapedia."""
import json, os, time, hashlib, urllib.request, urllib.parse, threading
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'research', 'cache')
os.makedirs(CACHE, exist_ok=True)
_lock = threading.Lock()

def _path(url):
    return os.path.join(CACHE, hashlib.sha1(url.encode()).hexdigest() + '.json')

def get(url, binary=False, retries=4):
    p = _path(url) + ('.bin' if binary else '')
    if os.path.exists(p):
        return open(p, 'rb').read() if binary else json.load(open(p))
    last = None
    for a in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'lgpe-guide-builder/1.0 (personal completion guide; contact via github marcusfaz)'})
            with urllib.request.urlopen(req, timeout=60) as r:
                raw = r.read()
            if binary:
                with open(p, 'wb') as f: f.write(raw)
                return raw
            d = json.loads(raw)
            with open(p, 'w') as f: json.dump(d, f)
            return d
        except Exception as e:
            last = e; time.sleep(1.5 * (a + 1))
    raise RuntimeError('fetch failed %s: %s' % (url, last))

def gets(urls, workers=8, binary=False):
    with ThreadPoolExecutor(max_workers=workers) as ex:
        return list(ex.map(lambda u: get(u, binary=binary), urls))

API = 'https://pokeapi.co/api/v2/'
BB  = 'https://bulbapedia.bulbagarden.net/w/api.php'

def wikitext(page):
    u = BB + '?' + urllib.parse.urlencode({
        'action': 'parse', 'page': page, 'prop': 'wikitext', 'format': 'json',
        'formatversion': '2', 'redirects': '1'})
    d = get(u)
    if 'error' in d:
        raise RuntimeError('bulbapedia: %s -> %s' % (page, d['error'].get('info')))
    return d['parse']['wikitext']
