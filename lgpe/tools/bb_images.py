"""Fetch Bulbapedia File: images by title, re-encode to WebP."""
import sys, os, io, json, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import get, BB
from PIL import Image

def urls(titles):
    out = {}
    for i in range(0, len(titles), 20):
        chunk = titles[i:i+20]
        u = BB + '?' + urllib.parse.urlencode({
            'action': 'query', 'titles': '|'.join('File:' + t for t in chunk),
            'prop': 'imageinfo', 'iiprop': 'url|size', 'format': 'json', 'formatversion': '2'})
        d = get(u)
        for p in d['query']['pages']:
            if 'imageinfo' in p:
                out[p['title'][5:]] = p['imageinfo'][0]['url']
    return out

def to_webp(raw, maxw, quality, flatten=False, bg=(255,255,255)):
    im = Image.open(io.BytesIO(raw))
    im = im.convert('RGBA')
    if flatten:
        c = Image.new('RGBA', im.size, bg + (255,)); c.alpha_composite(im); im = c.convert('RGB')
    else:
        bb = im.getbbox()
        if bb: im = im.crop(bb)
    if im.width > maxw:
        h = round(im.height * maxw / im.width)
        im = im.resize((maxw, h), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'WEBP', quality=quality, method=6)
    return buf.getvalue()
