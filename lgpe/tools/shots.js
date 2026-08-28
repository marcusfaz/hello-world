const { chromium } = require('playwright');
const path = require('path');
const OUT = '/tmp/claude-0/-home-user-hello-world/54866668-e213-5fe1-b82d-9933a3de940b/scratchpad';
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const shots = [
    ['light-top',   1440, null,   '#k01', 0],
    ['dark-boss',   1440, 'dark', '#k19', 3600],
    ['light-party', 1440, null,   '#k12', 700],
    ['mobile',       390, null,   '#k06', 500],
    ['light-route', 1440, null,   '#k03', 4200],
    ['ref-tms',     1440, 'dark', '#ref-tms', 300],
  ];
  for (const [name, w, theme, hash, scroll] of shots) {
    const ctx = await b.newContext({ viewport:{width:w, height:1100}, deviceScaleFactor:1 });
    const p = await ctx.newPage();
    await p.goto('file://' + path.resolve(__dirname, '..', '.preview.html'));
    if (theme) await p.evaluate(t => document.documentElement.setAttribute('data-theme', t), theme);
    await p.waitForTimeout(700);
    await p.evaluate(h => { const el = document.querySelector(h); if (el) el.scrollIntoView(); }, hash);
    if (scroll) await p.evaluate(y => window.scrollBy(0, y), scroll);
    await p.waitForTimeout(600);
    await p.screenshot({ path: `${OUT}/${name}.png` });
    await ctx.close();
  }
  await b.close();
  console.log('shots written');
})();
