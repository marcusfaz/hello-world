/* Headless render check: JS errors, broken images, horizontal overflow,
   contrast in all three theme states, and the structural invariants. */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

/* The Artifact host wraps the file in a doctype + head + body skeleton before
   serving it. Reproduce that here — without the doctype the browser renders in
   quirks mode, where <table> does not inherit colour, and every measurement is
   about a document nobody will ever see. */
const SRC = path.resolve(__dirname, '..', 'lets-go-pikachu-guide.html');
const PREVIEW = path.resolve(__dirname, '..', '.preview.html');
fs.writeFileSync(PREVIEW,
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '</head>\n<body>\n' + fs.readFileSync(SRC, 'utf8') + '\n</body>\n</html>\n');
const FILE = 'file://' + PREVIEW;

function srgb(c){ c /= 255; return c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); }
function lum(rgb){ return 0.2126*srgb(rgb[0]) + 0.7152*srgb(rgb[1]) + 0.0722*srgb(rgb[2]); }
function ratio(a, b){ const [l1,l2] = [lum(a), lum(b)].sort((x,y)=>y-x); return (l1+0.05)/(l2+0.05); }

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  let fail = 0;
  const note = (ok, msg) => { if (!ok) fail++; console.log((ok ? '  ok   ' : '  FAIL ') + msg); };

  for (const [themeName, opts] of [
      ['system-default (light OS)', {colorScheme: 'light', stamp: null}],
      ['system-default (dark OS)',  {colorScheme: 'dark',  stamp: null}],
      ['explicit light',            {colorScheme: 'dark',  stamp: 'light'}],
      ['explicit dark',             {colorScheme: 'light', stamp: 'dark'}]]) {
    for (const vw of [1440, 390]) {
      const ctx = await browser.newContext({ viewport: {width: vw, height: 1000}, colorScheme: opts.colorScheme });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(String(e)));
      page.on('console', m => {
        if (m.type() !== 'error') return;
        const t = m.text();
        /* the Google Fonts stylesheet cannot load in an offline sandbox; that is
           an environment fact, not a page defect. Everything else counts. */
        if (/ERR_CONNECTION|ERR_NAME_NOT_RESOLVED|ERR_INTERNET_DISCONNECTED|fonts\.g/.test(t)) return;
        errors.push('console: ' + t);
      });
      page.on('requestfailed', r => {
        if (!/fonts\.googleapis|fonts\.gstatic/.test(r.url())) errors.push('request failed: ' + r.url().slice(0, 80));
      });
      await page.goto(FILE, {waitUntil: 'load'});
      if (opts.stamp) {
        await page.evaluate(t => document.documentElement.setAttribute('data-theme', t), opts.stamp);
      }
      await page.waitForTimeout(500);

      const label = `${themeName} @ ${vw}px`;
      note(errors.length === 0, `${label}: no JS errors` + (errors.length ? ' — ' + errors.slice(0,3).join(' | ') : ''));

      const overflow = await page.evaluate(() => {
        const de = document.documentElement;
        const wide = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > de.clientWidth + 1.5) wide.push(el.tagName + '.' + (el.className || '').toString().split(' ')[0]);
        });
        return {scroll: de.scrollWidth, client: de.clientWidth, wide: [...new Set(wide)].slice(0, 6)};
      });
      note(overflow.scroll <= overflow.client + 1,
        `${label}: no horizontal overflow (scrollWidth ${overflow.scroll} vs ${overflow.client})` +
        (overflow.wide.length ? ' — ' + overflow.wide.join(', ') : ''));

      /* contrast: sample every distinct text colour against its painted backdrop */
      const contrast = await page.evaluate(() => {
        /* A background may be semi-transparent, so walk up compositing every
           layer instead of stopping at the first non-transparent one. */
        function alphaOf(s){
          const m = /rgba?\([^)]*?([\d.]+)\s*\)/.exec(s);
          return /rgba\(/.test(s) ? (m ? parseFloat(m[1]) : 1) : 1;
        }
        function bgStack(el){
          const layers = [];
          let n = el;
          while (n && n !== document.documentElement){
            const c = getComputedStyle(n).backgroundColor;
            if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'){
              layers.push(c);
              if (alphaOf(c) >= 0.999) return layers;
            }
            n = n.parentElement;
          }
          layers.push(getComputedStyle(document.documentElement).backgroundColor || 'rgb(255,255,255)');
          return layers;
        }
        /* rgb()/rgba() are 0-255; color(srgb ...) — which is how Chromium
           serialises color-mix() — is 0-1. Normalise both to 0-255. */
        function parse(s){
          const nums = (s.match(/-?[\d.]+(?:e-?\d+)?/g) || []).map(Number);
          if (/^color\(/.test(s)) return nums.slice(0, 3).map(v => Math.round(Math.min(1, Math.max(0, v)) * 255));
          return nums.slice(0, 3);
        }
        const seen = new Map();
        const els = document.querySelectorAll('p, li, td, th, h1, h2, h3, h4, span, a, label, dt, dd, summary, button, div.pw, div.why, div.prole, figcaption');
        els.forEach(el => {
          if (!el.textContent.trim()) return;
          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) return;
          const cs = getComputedStyle(el);
          if (cs.visibility === 'hidden' || cs.display === 'none') return;
          const stack = bgStack(el);
          const key = cs.color + '|' + stack.join('>') + '|' + cs.fontSize + '|' + cs.fontWeight;
          if (seen.has(key)) return;
          /* composite back-to-front: the deepest opaque layer first */
          let base = parse(stack[stack.length - 1]);
          for (let i = stack.length - 2; i >= 0; i--){
            const a = alphaOf(stack[i]), c = parse(stack[i]);
            base = [0,1,2].map(k => Math.round(c[k] * a + base[k] * (1 - a)));
          }
          const fgA = alphaOf(cs.color), fgC = parse(cs.color);
          const fg = fgA >= 0.999 ? fgC : [0,1,2].map(k => Math.round(fgC[k] * fgA + base[k] * (1 - fgA)));
          seen.set(key, {fg: fg, bg: base,
                         size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight) || 400,
                         sample: el.textContent.trim().slice(0, 40), cls: el.className.toString().slice(0,30)});
        });
        return [...seen.values()];
      });
      const bad = contrast.map(c => ({...c, r: ratio(c.fg, c.bg)}))
        .filter(c => {
          const large = c.size >= 24 || (c.size >= 18.66 && c.weight >= 700);
          return c.r < (large ? 3.0 : 4.5);
        });
      note(bad.length === 0, `${label}: ${contrast.length} text/background pairs clear 4.5:1` +
        (bad.length ? ' — worst: ' + bad.sort((a,b)=>a.r-b.r).slice(0,4)
          .map(c => `${c.r.toFixed(2)}:1 "${c.sample}" [${c.cls}] ${c.size}px`).join(' ; ') : ''));

      await ctx.close();
    }
  }

  /* structural invariants — checked once, at 1440 */
  const ctx = await browser.newContext({ viewport: {width: 1440, height: 1000} });
  const page = await ctx.newPage();
  await page.goto(FILE, {waitUntil: 'load'});
  await page.waitForTimeout(400);

  await page.evaluate(() => {
    document.querySelectorAll('img[loading="lazy"]').forEach(i => i.loading = 'eager');
  });
  await page.evaluate(() => Promise.all(
    [...document.images].filter(i => !i.complete).map(i => i.decode().catch(() => {}))
  ));
  await page.waitForTimeout(1500);
  const imgs = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('img').forEach(i => {
      if (!i.complete || i.naturalWidth === 0) out.push(i.getAttribute('src') ? i.getAttribute('src').slice(0, 60) : '(no src)');
    });
    return {total: document.querySelectorAll('img').length, broken: out};
  });
  note(imgs.broken.length === 0, `every image loads (${imgs.total} images)` +
    (imgs.broken.length ? ' — broken: ' + imgs.broken.slice(0,4).join(', ') : ''));

  const party = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('.party').forEach(p => {
      const stage = p.closest('.stage').id;
      const carrying = p.querySelectorAll('.haverow .hlbl.ok + .hlist .hmon').length;
      const leaving = p.querySelectorAll('.haverow .hlbl.out + .hlist .hmon').length;
      out.push({stage, carrying, leaving});
    });
    return out;
  });
  const wrongSix = party.filter(p => p.carrying !== 6);
  note(wrongSix.length === 0, `every party ledger carries exactly six (${party.length} boards)` +
    (wrongSix.length ? ' — ' + wrongSix.map(p => `${p.stage}:${p.carrying}`).join(', ') : ''));

  const routes = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll('.checks.route').forEach(ul => {
      const stage = ul.closest('.stage').id;
      let n = 0, lastLeg = 0, orphan = 0;
      ul.querySelectorAll('li').forEach(li => {
        if (li.classList.contains('leg')) { lastLeg = +li.dataset.leg; return; }
        const step = +li.querySelector('.stepn').textContent;
        if (step !== n + 1) bad.push(`${stage}: step ${step} follows ${n}`);
        n = step;
        if (+li.dataset.inleg !== lastLeg) orphan++;
      });
      if (lastLeg === 0) bad.push(`${stage}: route has no legs`);
      if (orphan) bad.push(`${stage}: ${orphan} steps outside a leg`);
    });
    return bad;
  });
  note(routes.length === 0, 'route step numbering is monotonic and every step sits in a leg' +
    (routes.length ? ' — ' + routes.slice(0,5).join('; ') : ''));

  const counts = await page.evaluate(() => ({
    stages: document.querySelectorAll('.stage').length,
    checks: document.querySelectorAll('input[type=checkbox][data-k]').length,
    bosses: document.querySelectorAll('.boss').length,
    widgets: document.querySelectorAll('[data-widget]').length,
    emptyWidgets: [...document.querySelectorAll('[data-widget]')].filter(w => !w.innerHTML.trim()).map(w => w.dataset.widget),
    maps: document.querySelectorAll('.mapfig').length,
    navlinks: document.querySelectorAll('[data-nav]').length
  }));
  note(counts.emptyWidgets.length === 0, `all ${counts.widgets} widgets rendered` +
    (counts.emptyWidgets.length ? ' — empty: ' + counts.emptyWidgets.join(', ') : ''));
  console.log(`\n  stages ${counts.stages} · checkboxes ${counts.checks} · boss dossiers ${counts.bosses} · maps ${counts.maps} · nav links ${counts.navlinks}`);

  await browser.close();
  console.log(fail ? `\n${fail} check(s) failed.` : '\nAll checks passed.');
  process.exit(fail ? 1 : 0);
})();
