/* ===================== WIDGETS ===================== */

/* — TM index: 60 machines, filterable, with a Have box each — */
WIDGETS.tmindex = function(el){
  const rows = MACHINES.map(m => {
    const [num, move, type, cls, power, acc, where, effect] = m;
    const id = 'mach-' + num;
    const on = !!DONE[id];
    return '<tr class="doneRow' + (on ? ' isdone' : '') +
      '" data-search="' + esc([num, move, type, cls, where, effect].join(' ').toLowerCase()) + '">' +
      '<td><input class="have" type="checkbox" data-k="' + id + '"' + (on ? ' checked' : '') +
        ' aria-label="Have ' + esc(num) + '"></td>' +
      '<td class="num">' + esc(num) + '</td>' +
      '<td class="mon">' + esc(move) + '</td>' +
      '<td>' + tpill(type) + ' ' + dcpill(move) + '</td>' +
      '<td class="num">' + (power === null ? '—' : esc(power)) +
        (acc === null ? '' : ' <span style="color:var(--ink3)">/ ' + esc(acc) + '%</span>') + '</td>' +
      '<td class="mv">' + esc(where) + '</td></tr>';
  }).join('');
  el.innerHTML =
    '<div class="reftable"><div class="rh">' +
      '<input id="tmfilter" type="search" placeholder="Filter by number, move, type or place…" autocomplete="off" aria-label="Filter machines">' +
      '<span class="pct mono" id="tmcount"></span>' +
    '</div><div class="tblwrap"><table><thead><tr>' +
      '<th>Have</th><th>#</th><th>Move</th><th>Type · class</th><th>Pow / Acc</th><th>Where it comes from</th>' +
    '</tr></thead><tbody id="tmbody">' + rows + '</tbody></table></div></div>';

  const body = el.querySelector('#tmbody');
  const count = el.querySelector('#tmcount');
  function tally(){
    count.textContent = MACHINES.filter(m => DONE['mach-' + m[0]]).length + ' / ' + MACHINES.length;
  }
  tally();
  body.addEventListener('change', tally);
  el.querySelector('#tmfilter').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    body.querySelectorAll('tr').forEach(tr => {
      tr.classList.toggle('rowhide', !!q && !tr.dataset.search.includes(q));
    });
  });
};

/* — Damage class is per move: show it, and show why it matters — */
WIDGETS.moveclass = function(el){
  const pairs = [
    ['Vine Whip','Razor Leaf','Venusaur has 82 Attack and 100 Special Attack, so both of its level-up Grass moves point at the wrong stat. Mega Drain, Sludge Bomb and Solar Beam are the ones it wants.'],
    ['Flare Blitz','Flamethrower','Arcanine can run either — 110 Attack against 100 Special Attack. Flare Blitz hits harder and recoils; Flamethrower is free.'],
    ['Waterfall','Surf','Physical and special Water. Lapras leans special at 85/85; Gyarados is 125 Attack against 60 Special Attack and must go physical.'],
    ['Zippy Zap','Thunderbolt','Your partner is 80 Attack against 75 Special Attack, and Zippy Zap always crits at +2 priority. Physical wins.'],
    ['Rock Slide','Ancient Power','Rock is physical across the board here. Aerodactyl’s 105 Attack matches it; Omastar’s 60 does not.'],
    ['Poison Jab','Sludge Bomb','The same type, one each way. Muk goes physical; Venusaur goes special.'],
    ['Shadow Ball','Sucker Punch','Ghost and Dark both appear on both sides of the split — the old “Ghost is physical, Dark is special” rule is gone.']
  ];
  const cell = m => {
    const d = MOVEDATA[m];
    if (!d) return '<td class="mv">' + esc(m) + '</td>';
    return '<td class="mon">' + esc(m) + '<br>' + tpill(d[0]) + ' ' + dcpill(m) +
      ' <span class="num" style="color:var(--ink3)">' + (d[2] === null ? '—' : d[2]) + '</span></td>';
  };
  el.innerHTML = '<div class="reftable"><div class="tblwrap"><table><thead><tr>' +
    '<th>Move</th><th>Move</th><th>What that means in practice</th></tr></thead><tbody>' +
    pairs.map(p => '<tr>' + cell(p[0]) + cell(p[1]) + '<td class="mv">' + p[2] + '</td></tr>').join('') +
    '</tbody></table></div></div>';
};

/* — Secret Techniques — */
const STECH = [
  ['Chop Down','Cut','grass','Cuts the small trees that block the Vermilion Gym, the Pewter Museum’s employee area, east Cerulean, east Route 2, Route 16’s north house and TM11 in Viridian.','S.S. Anne — the captain, after you help him'],
  ['Light Up','Flash','electric','Lights the dark interior of Rock Tunnel. Not strictly required, but the cave is close to unnavigable without it.','Route 2 — the house by Diglett’s Cave, for 10 species caught'],
  ['Sky Dash','Fly','flying','Flies you to anywhere you have already been. This is the point the game stops being a walking simulator.','Celadon City — the Rocker outside the Game Corner, once you hold the Silph Scope'],
  ['Sea Skim','Surf','water','Surfs across water. If your buddy is a Gyarados or a Lapras you ride that instead of the partner.','Fuchsia City — the Playful Park, from the man by the Lapras exhibit'],
  ['Strong Push','Strength','fighting','Moves the heavy boulders in the Seafoam Islands and Victory Road. Both dungeons are impassable without it.','Fuchsia City — the Safari Zone warden, once you return his Gold Teeth from Route 19']
];
WIDGETS.secret = function(el){
  el.innerHTML = '<div class="stech">' + STECH.map(s =>
    '<div class="st1 ty-' + s[2] + '" style="--tc:var(--indigo)">' +
      '<span class="hm">replaces ' + esc(s[1]) + '</span>' +
      '<h4>' + esc(s[0]) + '</h4>' +
      '<p>' + s[3] + '</p>' +
      '<span class="got">' + esc(s[4]) + '</span>' +
    '</div>').join('') + '</div>' +
    '<p class="footnote">None of the five takes a move slot, and none is used in battle — they are field actions on the partner menu. After the Hall of Fame, riding a Charizard, Aerodactyl or Dragonite through the sky bypasses every Chop Down and Sea Skim obstacle in the game.</p>';
};

/* — Catch Combo ladder — */
const COMBO = [
  ['0',      '×1',   '0', '0%',  '0.5%',  '×1', '1 / 4096'],
  ['1',      '×1.1', '0', '5%',  '0.5%',  '×2', '1 / 4096'],
  ['2–5',    '×1.1', '0', '5%',  '0.75%', '×2', '1 / 4096'],
  ['6–10',   '×1.1', '1', '15%', '1%',    '×3', '1 / 4096'],
  ['11–20',  '×1.5', '2', '30%', '50%',   '×4', '4 / 4096'],
  ['21–30',  '×2',   '3', '40%', '50%',   '×5', '8 / 4096'],
  ['31–40',  '×2.5', '4', '50%', '50%',   '×6', '12 / 4096'],
  ['41+',    '×3',   '4', '50%', '50%',   '×6', '12 / 4096']
];
WIDGETS.combo = function(el){
  el.innerHTML = '<div class="reftable"><div class="combo"><table><thead><tr>' +
    '<th>Chain</th><th>Exp.</th><th>Perfect IVs</th><th>Chained spawn boost</th>' +
    '<th>Rare spawn</th><th>Huge / Tiny</th><th>Shiny (base)</th></tr></thead><tbody>' +
    COMBO.map(r => '<tr' + (r[0] === '31–40' ? ' class="hi"' : '') + '>' +
      r.map(c => '<td>' + esc(c) + '</td>').join('') + '</tr>').join('') +
    '</tbody></table></div></div>' +
    '<p class="footnote">Shiny odds are the base rate with no Lure and no Shiny Charm. A <b>Lure</b> adds one to the numerator, the <b>Shiny Charm</b> adds two, and both together add three — so a chain of 31 or more with a Lure and the Charm is <b>15 / 4096</b>, roughly one in 273. The boost only applies to the next member of the chained species to spawn, so an idle chain is worth nothing.</p>';
};

/* — Awakening Values / Candy — */
WIDGETS.avs = function(el){
  const rows = [
    ['HP','Health Candy','Health Candy L','Health Candy XL'],
    ['Attack','Mighty Candy','Mighty Candy L','Mighty Candy XL'],
    ['Defense','Tough Candy','Tough Candy L','Tough Candy XL'],
    ['Sp. Atk','Smart Candy','Smart Candy L','Smart Candy XL'],
    ['Sp. Def','Courage Candy','Courage Candy L','Courage Candy XL'],
    ['Speed','Quick Candy','Quick Candy L','Quick Candy XL']
  ];
  el.innerHTML =
    '<p style="max-width:70ch">Effort Values do not exist in Let’s Go. In their place every Pokémon has six <b>Awakening Values</b>, capped at <b>200 each</b>. An AV is a flat point added to the finished stat <i>after</i> every other calculation, so 200 AVs is 200 stat points regardless of level, IVs or friendship — which is far more than EVs ever gave you. A Pokémon gains one AV on a random stat at every level-up; everything beyond that comes from Candy.</p>' +
    '<div class="reftable"><div class="tblwrap"><table><thead><tr>' +
    '<th>Stat</th><th>Low AVs</th><th>Middle</th><th>High AVs</th></tr></thead><tbody>' +
    rows.map(r => '<tr><td class="mon">' + esc(r[0]) + '</td><td class="mv">' + esc(r[1]) +
      '</td><td class="mv">' + esc(r[2]) + '</td><td class="mv">' + esc(r[3]) + '</td></tr>').join('') +
    '</tbody></table></div></div>' +
    '<p style="max-width:70ch">Each Candy raises one AV by exactly one point whatever its size — the larger sizes just cost fewer of themselves — and above certain thresholds only the larger sizes work at all. <b>Species Candy</b>, such as Pikachu Candy, raises any AV on that species and is what the Coach Trainers hand out. Candy comes from catching (Pinap Berries double the yield), from transferring Pokémon to Professor Oak, and from the GO Park minigame.</p>' +
    '<p style="max-width:70ch"><b>Friendship matters mechanically here.</b> A Pokémon at high friendship gets up to a <b>10% boost to every stat</b>, on top of AVs. Walk your partner, feed it Candy, and play with it — the same friendship figure also sets the power of Pika Papow.</p>' +
    '<p style="max-width:70ch"><b>Bottle Caps</b> max out a single IV through Hyper Training. They come from daily battles with Mina in Vermilion Port and turn up in the Celadon Game Corner, which no longer has coins or prizes and exists mostly as a hidden-item field.</p>';
};

/* — Master Trainer index — */
WIDGETS.masters = function(el){
  const rows = MASTERS.map(m => {
    const [mon, lv, loc, trainer, moves] = m;
    const id = 'mt-' + mon;
    const on = !!DONE[id];
    return '<tr class="doneRow' + (on ? ' isdone' : '') +
      '" data-search="' + esc([mon, lv, loc, trainer].join(' ').toLowerCase()) + '">' +
      '<td><input class="have" type="checkbox" data-k="' + id + '"' + (on ? ' checked' : '') +
        ' aria-label="Beaten ' + esc(mon) + ' Master"></td>' +
      '<td class="mon">' + monArt(mon, 'ms') + esc(mon) + '</td>' +
      '<td class="num">' + esc(lv) + '</td>' +
      '<td class="mv">' + esc(loc) + '</td>' +
      '<td class="mv">' + esc(trainer) + '</td>' +
      '<td class="mv">' + moves.map(esc).join(', ') + '</td></tr>';
  }).join('');
  el.innerHTML =
    '<div class="reftable"><div class="rh">' +
      '<input id="mtfilter" type="search" placeholder="Filter by species, level, place or trainer…" autocomplete="off" aria-label="Filter Master Trainers">' +
      '<span class="pct mono" id="mtcount"></span>' +
    '</div><div class="tblwrap"><table><thead><tr>' +
      '<th>Beat</th><th>Species</th><th>Lv</th><th>Where</th><th>Trainer</th><th>Its moves</th>' +
    '</tr></thead><tbody id="mtbody">' + rows + '</tbody></table></div></div>';
  const body = el.querySelector('#mtbody'), count = el.querySelector('#mtcount');
  function tally(){
    count.textContent = MASTERS.filter(m => DONE['mt-' + m[0]]).length + ' / ' + MASTERS.length;
  }
  tally();
  body.addEventListener('change', tally);
  el.querySelector('#mtfilter').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    body.querySelectorAll('tr').forEach(tr => tr.classList.toggle('rowhide', !!q && !tr.dataset.search.includes(q)));
  });
};

/* — Generation VII type calculator — */
WIDGETS.types = function(el){
  const opts = TYPES.map(t => '<option value="' + t + '">' + t + '</option>').join('');
  el.innerHTML =
    '<div class="planner"><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">' +
      '<label style="font-family:\'DM Mono\',monospace;font-size:11px;color:var(--ink3)">Attacking move<br><select class="daypick" id="atkT">' + opts + '</select></label>' +
      '<label style="font-family:\'DM Mono\',monospace;font-size:11px;color:var(--ink3)">Defender type 1<br><select class="daypick" id="defA">' + opts + '</select></label>' +
      '<label style="font-family:\'DM Mono\',monospace;font-size:11px;color:var(--ink3)">Defender type 2<br><select class="daypick" id="defB"><option value="">— none —</option>' + opts + '</select></label>' +
    '</div><div id="typeout" style="margin-top:14px"></div></div>';
  const out = el.querySelector('#typeout');
  function calc(){
    const a = el.querySelector('#atkT').value;
    const d1 = el.querySelector('#defA').value;
    const d2 = el.querySelector('#defB').value;
    const defs = d2 ? [d1, d2] : [d1];
    const m = eff(a, defs);
    const label = m === 0 ? 'No effect' : m >= 4 ? 'Devastating' : m >= 2 ? 'Super effective'
                : m <= 0.25 ? 'Almost nothing' : m < 1 ? 'Resisted' : 'Neutral';
    const cls = m >= 2 ? 'ok' : (m < 1 ? 'bad' : '');
    out.innerHTML = '<div class="cvcell ' + cls + '" style="max-width:420px"><div class="cvt">' +
      esc(a) + ' → ' + esc(defs.join(' / ')) + '</div>' +
      '<div class="cvv" style="font-size:20px">×' + m + ' — ' + label + '</div>' +
      '<div style="margin-top:8px;font-size:13.5px;color:var(--ink2)">The multiplier depends only on the types. ' +
      'Whether the move is physical or special is a property of <b>the move itself</b> in this generation, ' +
      'so check it against the attacker’s Attack or Special Attack separately.</div></div>';
  }
  el.querySelectorAll('select').forEach(s => s.addEventListener('change', calc));
  calc();
};

/* — Team planner — */
let TEAM = [];
try { TEAM = JSON.parse(localStorage.getItem(KEY + ':team') || '[]') || []; } catch (e) { TEAM = []; }
WIDGETS.planner = function(el){
  el.innerHTML =
    '<div class="planner"><h3 style="margin-top:0">Team planner</h3>' +
    '<p style="font-size:15px;color:var(--ink2);margin:0 0 4px;max-width:66ch">Pick up to six from what a solo Let’s Go, Pikachu! run can actually field. The panel below counts how many of your six each attacking type hurts, and flags the types nothing on your team hits hard with its own typing.</p>' +
    '<div class="slots" id="slots"></div>' +
    '<div class="pool" id="pool"></div>' +
    '<div id="coverage"></div></div>';
  drawPlanner(el);
  el.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    const rm = e.target.closest('[data-rm]');
    if (add && TEAM.length < 6 && !TEAM.includes(add.dataset.add)) TEAM.push(add.dataset.add);
    else if (rm) TEAM = TEAM.filter(n => n !== rm.dataset.rm);
    else return;
    try { localStorage.setItem(KEY + ':team', JSON.stringify(TEAM)); } catch (err) {}
    drawPlanner(el);
  });
};
function typesOf(name){ const p = POOL.find(x => x[0] === name); return p ? p[1] : []; }
function drawPlanner(el){
  el.querySelector('#slots').innerHTML = Array.from({length:6}, (_, i) => {
    const n = TEAM[i];
    if (!n) return '<div class="slot"><span class="empty">slot ' + (i + 1) + '</span></div>';
    return '<div class="slot filled"><button class="x" data-rm="' + esc(n) + '" aria-label="Remove ' + esc(n) + '">×</button>' +
      monArt(n, 'spr') + '<div class="sn">' + esc(n) + '</div><div class="st">' + tpills(typesOf(n)) + '</div></div>';
  }).join('');

  el.querySelector('#pool').innerHTML = POOL.map(p =>
    '<button data-add="' + esc(p[0]) + '"' +
    (TEAM.includes(p[0]) || TEAM.length >= 6 ? ' disabled' : '') + '>' + esc(p[0]) + '</button>').join('');

  const cov = el.querySelector('#coverage');
  if (!TEAM.length){ cov.innerHTML = ''; return; }
  const members = TEAM.map(n => typesOf(n));
  const weak = TYPES.map(t => [t, members.filter(m => eff(t, m) >= 2).length]);
  const gaps = TYPES.filter(d => !TEAM.some(n => typesOf(n).some(s => eff(s, [d]) >= 2)));

  cov.innerHTML =
    '<h3 style="margin-bottom:6px">Defensive exposure — how many of your six each type hits hard</h3>' +
    '<div class="cover">' + weak.map(w =>
      '<div class="cvcell ' + (w[1] >= 3 ? 'bad' : w[1] === 0 ? 'ok' : '') + '"><div class="cvt">' + w[0] +
      '</div><div class="cvv">' + w[1] + ' of ' + TEAM.length + '</div></div>').join('') + '</div>' +
    '<h3 style="margin-bottom:6px">Types nothing on your team hits for 2× with its own typing</h3>' +
    '<p style="font-size:15.5px;margin:0">' + (gaps.length
      ? gaps.map(tpill).join(' ') + '<br><span style="color:var(--ink3);font-size:14px">This is a same-type check only. A TM plugs any of these — Dazzling Gleam covers Fairy, X-Scissor covers Bug, Earthquake covers Ground, and the Celadon Department Store sells most of the rest.</span>'
      : '<span style="color:var(--good)">Nothing — your six cover every type with same-type moves alone.</span>') + '</p>';
}

/* — Progress backup — */
WIDGETS.backup = function(el){
  el.innerHTML =
    '<details class="backup"><summary>Backup / restore your ticks</summary>' +
    '<textarea id="bkText" spellcheck="false" aria-label="Progress backup data"></textarea>' +
    '<div class="rowbtns"><button class="tbtn" id="bkCopy">Copy backup</button>' +
    '<button class="tbtn" id="bkLoad">Restore from box</button>' +
    '<button class="tbtn" id="bkClear">Clear all progress</button></div>' +
    '<p style="font-size:14px;color:var(--ink3);margin:10px 0 0">Ticks are stored in this browser only. Paste the string into a note if you plan to open the guide on another device.</p></details>';
  const ta = el.querySelector('#bkText');
  ta.value = JSON.stringify({done:DONE, team:TEAM});
  el.querySelector('#bkCopy').addEventListener('click', () => {
    ta.select();
    try { navigator.clipboard.writeText(ta.value); } catch (e) { try { document.execCommand('copy'); } catch (e2) {} }
    el.querySelector('#bkCopy').textContent = 'Copied';
    setTimeout(() => { el.querySelector('#bkCopy').textContent = 'Copy backup'; }, 1400);
  });
  el.querySelector('#bkLoad').addEventListener('click', () => {
    try {
      const parsed = JSON.parse(ta.value);
      DONE = parsed.done || {};
      TEAM = parsed.team || [];
      persist();
      localStorage.setItem(KEY + ':team', JSON.stringify(TEAM));
      location.reload();
    } catch (e) { alert('That is not a valid backup string.'); }
  });
  el.querySelector('#bkClear').addEventListener('click', () => {
    if (!confirm('Clear every tick and your saved team? This cannot be undone.')) return;
    DONE = {}; TEAM = [];
    persist();
    try { localStorage.removeItem(KEY + ':team'); } catch (e) {}
    location.reload();
  });
};
