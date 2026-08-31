#!/usr/bin/env python3
"""Headless render checks: JS errors, broken images, overflow, contrast, structure."""
import json, os, sys
from playwright.sync_api import sync_playwright

SRC = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'emerald-guide.html'))

# build.py emits cache/wrapped.html — the page exactly as the Artifact publisher
# serves it. Always test that, never the bare fragment.
HTML = 'file://' + os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'cache', 'wrapped.html'))
FAIL = []

CONTRAST_JS = r"""
() => {
  const lum = c => {
    const [r,g,b] = c.map(v => { v/=255; return v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); });
    return .2126*r + .7152*g + .0722*b;
  };
  // rgb()/rgba() give 0-255; color(srgb r g b) — what color-mix() resolves to — gives 0-1.
  const parse = s => {
    const n = (String(s).match(/[\d.]+/g) || []).slice(0,3).map(Number);
    if (n.length < 3) return n;
    return /color\(/.test(s) ? n.map(v => v * 255) : n;
  };
  const alphaOf = s => { const m = String(s).match(/[\d.]+/g); return m && m.length > 3 ? +m[3] : 1; };
  // Walk up compositing every translucent layer, so a .22-alpha white pill over a dark
  // header reads as the colour a person actually sees rather than as flat white.
  const bgOf = el => {
    const layers = [];
    let n = el;
    while (n && n !== document.documentElement) {
      const cs = getComputedStyle(n), b = cs.backgroundColor;
      if (b && !/rgba\(0, 0, 0, 0\)|transparent/.test(b)) {
        const a = alphaOf(b);
        layers.push({c: parse(b), a});
        if (a >= .999) break;
      }
      n = n.parentElement;
    }
    const base = parse(getComputedStyle(document.body).backgroundColor);
    let out = (layers.length && layers[layers.length-1].a >= .999)
              ? layers.pop().c : base.slice();
    for (let i = layers.length - 1; i >= 0; i--) {
      const L = layers[i];
      out = out.map((v, k) => L.c[k] * L.a + v * (1 - L.a));
    }
    return out;
  };
  const out = [];
  const els = document.querySelectorAll('p,li,td,th,h1,h2,h3,h4,span,a,label,dd,dt,button,summary');
  els.forEach(el => {
    if (!el.textContent.trim()) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (el.querySelector('p,li,td,span,a,h1,h2,h3,h4')) return;   // leaf nodes only
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity < .5) return;
    const fg = parse(cs.color), bg = bgOf(el);
    if (fg.length < 3 || bg.length < 3) return;
    const L1 = lum(fg), L2 = lum(bg);
    const ratio = (Math.max(L1,L2) + .05) / (Math.min(L1,L2) + .05);
    const px = parseFloat(cs.fontSize);
    const large = px >= 24 || (px >= 18.66 && +cs.fontWeight >= 700);
    const need = large ? 3 : 4.5;
    if (ratio < need) out.push({t: el.textContent.trim().slice(0,50), ratio: +ratio.toFixed(2),
                                need, px, cls: el.className, color: cs.color, bg: 'rgb(' + bg.join(',') + ')'});
  });
  return out;
}
"""

def run(pw, theme, width, height, label):
    b = pw.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args=['--no-sandbox'])
    ctx = b.new_context(viewport={'width': width, 'height': height},
                        color_scheme='dark' if theme == 'system-dark' else 'light')
    pg = ctx.new_page()
    errs, reqfail = [], []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: errs.append('console.' + m.type + ': ' + m.text)
          if m.type == 'error' and 'ERR_CONNECTION_RESET' not in m.text
             and 'ERR_NAME_NOT_RESOLVED' not in m.text else None)
    # fonts.googleapis.com is allowlisted by the artifact CSP but unreachable from this
    # sandbox; every face has a real fallback stack, so a failure here is not a page defect.
    pg.on('requestfailed', lambda r: reqfail.append(r.url[:90])
          if 'fonts.googleapis.com' not in r.url and 'fonts.gstatic.com' not in r.url else None)
    pg.goto(HTML, wait_until='load')
    if theme in ('light', 'dark'):
        pg.evaluate("t => document.documentElement.setAttribute('data-theme', t)", theme)
    pg.wait_for_timeout(1200)

    res = {'label': label}
    if errs:   FAIL.append('%s: JS errors %s' % (label, errs[:4]))
    if reqfail: FAIL.append('%s: failed requests %s' % (label, reqfail[:4]))

    # broken images
    broken = pg.evaluate("""() => [...document.images]
        .filter(i => i.complete && i.naturalWidth === 0)
        .map(i => (i.src||'').slice(0,60))""")
    if broken: FAIL.append('%s: %d broken images e.g. %s' % (label, len(broken), broken[:3]))
    res['images'] = pg.evaluate("() => document.images.length")

    # horizontal overflow of the page body
    ov = pg.evaluate("""() => ({doc: document.documentElement.scrollWidth,
                               win: window.innerWidth})""")
    if ov['doc'] > ov['win'] + 1:
        wide = pg.evaluate("""(w) => [...document.querySelectorAll('body *')]
            .filter(el => el.getBoundingClientRect().right > w + 1
                       && getComputedStyle(el).position !== 'fixed')
            .slice(0,6).map(el => el.tagName + '.' + (el.className||'') + ' @' +
                            Math.round(el.getBoundingClientRect().right))""", ov['win'])
        FAIL.append('%s: page scrolls horizontally (%d > %d) %s' % (label, ov['doc'], ov['win'], wide))

    # contrast
    bad = pg.evaluate(CONTRAST_JS)
    if bad:
        FAIL.append('%s: %d text pairs below AA — %s' % (label, len(bad), json.dumps(bad[:5])))
    res['contrast_fail'] = len(bad)

    # structure
    res['stages'] = pg.evaluate("() => document.querySelectorAll('.stage').length")
    res['checkboxes'] = pg.evaluate("() => document.querySelectorAll('.checks input[type=checkbox]').length")
    res['bosses'] = pg.evaluate("() => document.querySelectorAll('.boss').length")
    res['rosters'] = pg.evaluate("() => document.querySelectorAll('.party').length")
    res['maps'] = pg.evaluate("() => document.querySelectorAll('.mapfig').length")
    ctx.close(); b.close()
    return res

with sync_playwright() as pw:
    for theme, w, h, label in [('light', 1440, 900, 'light@1440'),
                               ('dark', 1440, 900, 'dark@1440'),
                               ('system-dark', 1440, 900, 'system-default-dark@1440'),
                               ('light', 390, 844, 'light@390'),
                               ('dark', 390, 844, 'dark@390')]:
        r = run(pw, theme, w, h, label)
        print('%-26s stages %-3s steps %-4s bosses %-3s rosters %-3s maps %-3s imgs %-4s contrastfail %s'
              % (r['label'], r['stages'], r['checkboxes'], r['bosses'], r['rosters'],
                 r['maps'], r['images'], r['contrast_fail']))

print()
if FAIL:
    print('FAILURES (%d):' % len(FAIL))
    for f in FAIL: print(' -', f[:600])
    sys.exit(1)
print('All render checks passed.')
