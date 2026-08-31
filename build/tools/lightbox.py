#!/usr/bin/env python3
"""Drive the map lightbox and check it in its OPEN state.

The render pass only ever sees the page at rest, so a dialog that is hidden on
load is untested by it. This opens one, exercises every control, and repeats the
contrast and overflow checks with the overlay up.
"""
import json, os, sys
from playwright.sync_api import sync_playwright

HTML = 'file://' + os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'cache', 'wrapped.html'))
CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'
FAIL = []

CONTRAST = open(os.path.join(os.path.dirname(__file__), 'verify.py')).read()
CONTRAST = CONTRAST[CONTRAST.index('CONTRAST_JS = r"""') + len('CONTRAST_JS = r"""'):]
CONTRAST = CONTRAST[:CONTRAST.index('"""')]

def check(pw, theme, w, h, label):
    b = pw.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
    ctx = b.new_context(viewport={'width': w, 'height': h},
                        color_scheme='dark' if theme == 'system-dark' else 'light')
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(HTML, wait_until='load')
    if theme in ('light', 'dark'):
        pg.evaluate("t => document.documentElement.setAttribute('data-theme', t)", theme)
    pg.wait_for_timeout(1000)

    # a stage with several maps, so prev/next are live
    pg.evaluate("() => document.querySelector('#h08 .mapimg').click()")
    pg.wait_for_timeout(500)

    if not pg.evaluate("() => !document.getElementById('lightbox').hidden"):
        FAIL.append('%s: clicking a map did not open the lightbox' % label); ctx.close(); b.close(); return

    st = pg.evaluate("""() => {
      const b = document.getElementById('lightbox'), i = b.querySelector('.lbstage img');
      const r = i.getBoundingClientRect(), s = b.querySelector('.lbstage').getBoundingClientRect();
      return {cap: b.querySelector('.lbcap').textContent,
              count: b.querySelector('.lbcount').textContent,
              natW: i.naturalWidth, natH: i.naturalHeight,
              w: Math.round(r.width), h: Math.round(r.height),
              stageW: Math.round(s.width), stageH: Math.round(s.height),
              focus: document.activeElement.className,
              bodyLocked: document.body.classList.contains('lbopen')};
    }""")

    # the popped-out map must be bigger than the thumbnail it came from
    thumb = pg.evaluate("""() => {
      const i = document.querySelector('#h08 .mapimg img');
      return Math.round(i.getBoundingClientRect().width);
    }""")
    if st['w'] <= thumb:
        FAIL.append('%s: popped out at %dpx, no bigger than the %dpx thumbnail'
                    % (label, st['w'], thumb))
    # and must fit the stage it sits in
    if st['w'] > st['stageW'] + 2 or st['h'] > st['stageH'] + 2:
        FAIL.append('%s: map %dx%d overflows the %dx%d stage'
                    % (label, st['w'], st['h'], st['stageW'], st['stageH']))
    # pixel art scaled up should land on a whole multiple
    if st['w'] >= st['natW']:
        k = st['w'] / st['natW']
        if abs(k - round(k)) > 0.02:
            FAIL.append('%s: scaled %.3f× — not a whole number, tiles will blur' % (label, k))
    if 'lbclose' not in st['focus']:
        FAIL.append('%s: focus went to %r, not the close button' % (label, st['focus']))
    if not st['bodyLocked']:
        FAIL.append('%s: background did not lock while the overlay was open' % label)

    # no horizontal overflow with the overlay up
    ov = pg.evaluate("() => ({doc: document.documentElement.scrollWidth, win: window.innerWidth})")
    if ov['doc'] > ov['win'] + 1:
        FAIL.append('%s: page scrolls sideways with the lightbox open (%d > %d)'
                    % (label, ov['doc'], ov['win']))

    # contrast of the overlay chrome
    bad = pg.evaluate(CONTRAST)
    bad = [x for x in bad if 'lb' in str(x.get('cls', '')) or 'lightbox' in str(x.get('cls', ''))]
    if bad:
        FAIL.append('%s: overlay text below AA — %s' % (label, json.dumps(bad[:3])))

    # next / prev / arrow keys / escape
    first = st['cap']
    pg.evaluate("() => document.querySelector('.lbnext').click()"); pg.wait_for_timeout(350)
    second = pg.evaluate("() => document.querySelector('.lbcap').textContent")
    if second == first:
        FAIL.append('%s: Next did not change the map' % label)
    pg.keyboard.press('ArrowLeft'); pg.wait_for_timeout(350)
    if pg.evaluate("() => document.querySelector('.lbcap').textContent") != first:
        FAIL.append('%s: ArrowLeft did not go back' % label)
    pg.keyboard.press('Escape'); pg.wait_for_timeout(350)
    if not pg.evaluate("() => document.getElementById('lightbox').hidden"):
        FAIL.append('%s: Escape did not close the lightbox' % label)
    if pg.evaluate("() => document.body.classList.contains('lbopen')"):
        FAIL.append('%s: background stayed locked after close' % label)
    if 'mapimg' not in pg.evaluate("() => document.activeElement.className"):
        FAIL.append('%s: focus was not returned to the map that opened it' % label)

    # backdrop click closes
    pg.evaluate("() => document.querySelector('#h08 .mapimg').click()"); pg.wait_for_timeout(350)
    pg.evaluate("() => document.getElementById('lightbox').click()"); pg.wait_for_timeout(350)
    if not pg.evaluate("() => document.getElementById('lightbox').hidden"):
        FAIL.append('%s: clicking the backdrop did not close it' % label)

    if errs: FAIL.append('%s: JS errors %s' % (label, errs[:3]))
    print('%-24s %-34s %s  thumb %dpx -> %dpx (%dx%d natural)'
          % (label, st['cap'], st['count'] or '-', thumb, st['w'], st['natW'], st['natH']))
    ctx.close(); b.close()

with sync_playwright() as pw:
    for theme, w, h, label in [('light', 1440, 900, 'light@1440'),
                               ('dark', 1440, 900, 'dark@1440'),
                               ('system-dark', 1440, 900, 'system-default@1440'),
                               ('light', 390, 844, 'light@390')]:
        check(pw, theme, w, h, label)

print()
if FAIL:
    print('LIGHTBOX FAILURES (%d):' % len(FAIL))
    for f in FAIL: print(' -', f[:400])
    sys.exit(1)
print('Lightbox: opens, scales, navigates, closes, and returns focus.')
