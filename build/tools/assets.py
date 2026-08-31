#!/usr/bin/env python3
"""Build the IMG blob: Emerald sprites, trainer portraits, item icons, location maps.

Everything is embedded as a data URI — the artifact CSP blocks every external
host, so a hotlinked image would simply not render.
"""
import base64, io, json, os, re, sys, urllib.parse
sys.path.insert(0, '.')
from fetch import _get
from PIL import Image

DEX = json.load(open('../cache/dex.json'))
API = 'https://bulbapedia.bulbagarden.net/w/api.php'

def wiki_file(title):
    """Resolve a File: page to its actual upload URL, then fetch the bytes."""
    u = (API + '?action=query&format=json&prop=imageinfo&iiprop=url&titles='
         + urllib.parse.quote('File:' + title))
    d = json.loads(_get(u))
    pages = d.get('query', {}).get('pages', {})
    for p in pages.values():
        ii = p.get('imageinfo')
        if ii:
            return _get(ii[0]['url'], binary=True)
    return None

def datauri(raw, mime):
    return 'data:%s;base64,%s' % (mime, base64.b64encode(raw).decode())

def png(raw, trim=True, maxw=None):
    im = Image.open(io.BytesIO(raw)).convert('RGBA')
    if trim:
        bb = im.getbbox()
        if bb: im = im.crop(bb)
    if maxw and im.width > maxw:
        im = im.resize((maxw, max(1, round(im.height * maxw / im.width))), Image.NEAREST)
    im = im.quantize(colors=255, method=Image.FASTOCTREE)
    b = io.BytesIO(); im.save(b, 'PNG', optimize=True)
    return datauri(b.getvalue(), 'image/png')

def webp(raw, maxw=760, q=72):
    im = Image.open(io.BytesIO(raw)).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    b = io.BytesIO(); im.save(b, 'WEBP', quality=q, method=6)
    return datauri(b.getvalue(), 'image/webp')

IMG = {'mon': {}, 'trn': {}, 'itm': {}, 'map': {}}

# ---- 1. all 386 Emerald battle sprites ----
for name, m in DEX.items():
    p = '../cache/spr/%d.png' % m['dex']
    if os.path.exists(p) and os.path.getsize(p):
        IMG['mon'][name] = png(open(p, 'rb').read())
print('mon %d' % len(IMG['mon']), file=sys.stderr)

# ---- 2. trainer portraits (Emerald sprites where they exist) ----
TRAINERS = json.load(open('trainers.json'))
for name, files in TRAINERS.items():
    for f in files:
        try:
            raw = wiki_file(f)
        except Exception:
            raw = None
        if raw:
            try:
                IMG['trn'][name] = png(raw, maxw=64)
                break
            except Exception: pass
    if name not in IMG['trn']:
        print('  no portrait: %s' % name, file=sys.stderr)
print('trn %d' % len(IMG['trn']), file=sys.stderr)

# ---- 3. item icons ----
ITEMS = json.load(open('items_art.json'))
for key, f in ITEMS.items():
    try:
        raw = wiki_file(f)
        if raw: IMG['itm'][key] = png(raw, maxw=30)
    except Exception as e:
        print('  no item art: %s (%s)' % (key, f), file=sys.stderr)
print('itm %d' % len(IMG['itm']), file=sys.stderr)

# ---- 4. location maps, one per stage that has one ----
MAPS = json.load(open('maps.json'))
for sid, (f, loc) in MAPS.items():
    try:
        raw = wiki_file(f)
        if raw: IMG['map'][sid] = {'src': webp(raw), 'loc': loc}
        else: print('  no map: %s (%s)' % (sid, f), file=sys.stderr)
    except Exception as e:
        print('  map fail %s: %s' % (sid, e), file=sys.stderr)
print('map %d' % len(IMG['map']), file=sys.stderr)

out = 'const IMG=' + json.dumps(IMG, ensure_ascii=False, separators=(',', ':')) + ';'
open('../src/20-assets.js', 'w').write(out)
mb = len(out) / 1048576
per = {k: sum(len(x if isinstance(x, str) else x['src']) for x in v.values()) / 1048576
       for k, v in IMG.items()}
print('assets.js %.2f MB  (%s)' % (mb, ', '.join('%s %.2f' % kv for kv in per.items())))
