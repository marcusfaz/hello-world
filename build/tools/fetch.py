#!/usr/bin/env python3
"""Cached fetchers for Bulbapedia raw wikitext and PokeAPI."""
import json, os, re, sys, time, hashlib, urllib.parse, urllib.request

CACHE = os.path.join(os.path.dirname(__file__), '..', 'cache')
os.makedirs(CACHE, exist_ok=True)
UA = 'EmeraldGuideBuild/1.0 (research script; contact via github marcusfaz/hello-world)'

def _get(url, binary=False):
    h = hashlib.sha1(url.encode()).hexdigest()[:20]
    p = os.path.join(CACHE, h + ('.bin' if binary else '.txt'))
    if os.path.exists(p):
        return open(p, 'rb').read() if binary else open(p, encoding='utf-8').read()
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            break
        except Exception as e:
            if attempt == 3:
                raise
            time.sleep(2 ** attempt)
    if binary:
        open(p, 'wb').write(data)
        return data
    txt = data.decode('utf-8', 'replace')
    open(p, 'w', encoding='utf-8').write(txt)
    return txt

def wikitext(page, _depth=0):
    """Raw wikitext of a Bulbapedia page — never the rendered summary."""
    url = ('https://bulbapedia.bulbagarden.net/w/api.php?action=parse&page='
           + urllib.parse.quote(page) + '&prop=wikitext&format=json&formatversion=2')
    d = json.loads(_get(url))
    if 'error' in d:
        raise SystemExit('wiki error for %s: %s' % (page, d['error']))
    txt = d['parse']['wikitext']
    m = re.match(r'\s*#REDIRECT\s*\[\[([^\]|#]+)', txt, re.I)
    if m and _depth < 4:
        return wikitext(m.group(1).strip(), _depth + 1)
    return txt

def poke(path):
    return json.loads(_get('https://pokeapi.co/api/v2/' + path.lstrip('/')))

if __name__ == '__main__':
    what = sys.argv[1]
    if what == 'wiki':
        sys.stdout.write(wikitext(sys.argv[2]))
    elif what == 'poke':
        print(json.dumps(poke(sys.argv[2]), indent=1)[:20000])
