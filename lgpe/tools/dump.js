/* Load the built page and dump its data structures so the audits can read
   exactly what the guide will show, rather than re-parsing the source. */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');

/* Regenerate the wrapped preview from the built file rather than reusing
   whatever verify.js last left behind — a stale preview means the audits run
   against a build that no longer exists. */
const SRC = path.resolve(__dirname, '..', 'lets-go-pikachu-guide.html');
const PREVIEW = path.resolve(__dirname, '..', '.preview.html');
fs.writeFileSync(PREVIEW,
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '</head>\n<body>\n' + fs.readFileSync(SRC, 'utf8') + '\n</body>\n</html>\n');

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await (await b.newContext()).newPage();
  await p.goto('file://' + path.resolve(__dirname, '..', '.preview.html'));
  await p.waitForTimeout(400);
  const data = await p.evaluate(() => ({
    chapters: CHAPTERS,
    stages: STAGES.map(s => ({id:s.id, tag:s.tag, place:s.place, title:s.title, body:s.body})),
    rosters: ROSTERS,
    out: OUT,
    machines: MACHINES,
    movedata: MOVEDATA,
    pool: POOL,
    masters: MASTERS,
    flow: (buildFlow(), Object.fromEntries(Object.entries(FLOW).map(([k,v]) =>
      [k, v.slots.map(s => ({name:s.name, st:s.st, carried:s.carried}))])))
  }));
  fs.writeFileSync(path.resolve(__dirname, '..', 'research', 'guide_dump.json'), JSON.stringify(data, null, 1));
  console.log('dumped', data.stages.length, 'stages,', Object.keys(data.rosters).length, 'rosters');
  await b.close();
})();
