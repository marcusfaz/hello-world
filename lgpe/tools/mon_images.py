"""Download PokeAPI 'home' 3D renders for the LGPE dex and re-encode to WebP."""
import sys, os, json, io, base64
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch import get, gets
from PIL import Image
from concurrent.futures import ThreadPoolExecutor

RAW = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/%s.png'
OUT = 'research/mon_webp'
os.makedirs(OUT, exist_ok=True)

def encode(png, size, quality):
    im = Image.open(io.BytesIO(png)).convert('RGBA')
    # trim transparent margin so the subject fills the box
    bb = im.getbbox()
    if bb: im = im.crop(bb)
    w, h = im.size
    s = size / max(w, h)
    im = im.resize((max(1, round(w*s)), max(1, round(h*s))), Image.LANCZOS)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    canvas.paste(im, ((size-im.width)//2, (size-im.height)//2), im)
    buf = io.BytesIO()
    canvas.save(buf, 'WEBP', quality=quality, method=6)
    return buf.getvalue()

if __name__ == '__main__':
    size = int(sys.argv[1]) if len(sys.argv) > 1 else 128
    q    = int(sys.argv[2]) if len(sys.argv) > 2 else 72
    mons = json.load(open('research/mons.json'))
    ids = {}
    for name, m in mons.items():
        ids[name] = m['id']
    def one(kv):
        name, pid = kv
        try:
            png = get(RAW % pid, binary=True)
            wb = encode(png, size, q)
            open(os.path.join(OUT, name + '.webp'), 'wb').write(wb)
            return (name, len(wb))
        except Exception as e:
            return (name, 'ERR ' + str(e)[:60])
    tot, bad = 0, []
    with ThreadPoolExecutor(8) as ex:
        for name, n in ex.map(one, sorted(ids.items())):
            if isinstance(n, str): bad.append((name, n))
            else: tot += n
    print('total %.2f MB over %d files' % (tot/1e6, len(ids)-len(bad)))
    for b in bad: print(' ', b)
