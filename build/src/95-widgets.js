/* ===================== WIDGETS ===================== */

/* — TM / HM index — */
WIDGETS.tmindex = function(el){
  const rows = MACHINES.map(m => {
    const id = 'mach-' + m[0];
    const on = !!DONE[id];
    return '<tr class="doneRow' + (on ? ' isdone' : '') + '" data-search="' + esc((m[0] + ' ' + m[1] + ' ' + m[2] + ' ' + m[3]).toLowerCase()) + '">' +
      '<td><input class="have" type="checkbox" data-k="' + id + '"' + (on ? ' checked' : '') + ' aria-label="Have ' + esc(m[0]) + '"></td>' +
      '<td class="num">' + esc(m[0]) + '</td>' +
      '<td class="mon">' + esc(m[1]) + '</td>' +
      '<td>' + tpill(m[2]) + ' ' + dcpill(m[2]) + '</td>' +
      '<td class="mv">' + esc(m[3]) + '</td></tr>';
  }).join('');
  el.innerHTML =
    '<div class="reftable"><div class="rh">' +
      '<input id="tmfilter" type="search" placeholder="Filter by number, move, type or place…" autocomplete="off" aria-label="Filter machines">' +
      '<span class="pct mono" id="tmcount"></span>' +
    '</div><div class="tblwrap"><table><thead><tr><th>Have</th><th>#</th><th>Move</th><th>Type · class</th><th>Where it comes from</th></tr></thead>' +
    '<tbody id="tmbody">' + rows + '</tbody></table></div></div>';

  const body = el.querySelector('#tmbody');
  const count = el.querySelector('#tmcount');
  function tally(){
    const have = MACHINES.filter(m => DONE['mach-' + m[0]]).length;
    count.textContent = have + ' / ' + MACHINES.length;
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

/* — Gen III damage-class reference — */
WIDGETS.dctable = function(el){
  el.innerHTML =
    '<div class="reftable"><div class="tblwrap"><table><thead><tr>' +
      '<th>Type</th><th>Damage class</th><th>Runs off</th><th>What that means in practice</th>' +
    '</tr></thead><tbody>' +
    [
      ['Normal','Attack','Facade on Swellow and Return on Slaking are real damage; on Gardevoir they are not.'],
      ['Fighting','Attack','Breloom’s Sky Uppercut and Hariyama’s 144 Attack are the stat that matters.'],
      ['Flying','Attack','Aerial Ace on Swellow works; Gust on a special body does not.'],
      ['Ground','Attack','Earthquake belongs on Aggron or Swampert, never on Manectric.'],
      ['Rock','Attack','Rock Slide wants Aggron’s 110 Attack. On a Lunatone it is wasted.'],
      ['Bug','Attack','Megahorn on Heracross. There is no good special Bug attacker in Hoenn.'],
      ['Ghost','Attack','<b>Shadow Ball is physical</b> — it is strong off Banette’s 115 Attack and weak off Dusclops’ 70. This is why Phoebe hits softer than she looks.'],
      ['Poison','Attack','Sludge Bomb is fine on Muk and wasted on Roselia.'],
      ['Steel','Attack','Iron Tail and Meteor Mash want a physical body — Aggron and Metagross, not Magneton.'],
      ['Fire','Sp. Attack','Overheat and Flamethrower on Camerupt or Torkoal, never on Blaziken’s Attack stat.'],
      ['Water','Sp. Attack','Swampert’s Surf runs off its 85 Sp. Atk, not its 110 Attack. Gyarados has the same problem, worse.'],
      ['Grass','Sp. Attack','Giga Drain on Sceptile or Breloom’s Special Attack, not on its Attack.'],
      ['Electric','Sp. Attack','Thunderbolt belongs on Manectric’s 105 Sp. Atk. <b>Spark is special too</b>, and weaker.'],
      ['Psychic','Sp. Attack','Gardevoir’s 125 Sp. Atk is why Calm Mind wins games.'],
      ['Ice','Sp. Attack','Ice Beam on Swampert or Walrein. Ice Punch, from the Frontier tutor, is the physical alternative.'],
      ['Dragon','Sp. Attack','<b>Dragon Claw is special in Gen 3.</b> Put it on Kingdra or Altaria, not on Salamence’s 135 Attack.'],
      ['Dark','Sp. Attack','<b>Crunch and Bite are special.</b> They belong on Manectric or Houndoom, not on Sharpedo’s 120 Attack or Absol’s 130.']
    ].map(r => '<tr><td class="mon">' + tpill(r[0]) + '</td><td>' + dcpill(r[0]) + ' ' + esc(dclass(r[0])) +
      '</td><td class="num">' + esc(r[1]) + '</td><td class="mv">' + r[2] + '</td></tr>').join('') +
    '</tbody></table></div></div>';
};

/* — Gen III type calculator — */
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
    const label = m === 0 ? 'No effect' : m >= 4 ? 'Devastating' : m >= 2 ? 'Super effective' : m <= 0.25 ? 'Almost nothing' : m < 1 ? 'Resisted' : 'Neutral';
    const cls = m >= 2 ? 'ok' : (m < 1 ? 'bad' : '');
    out.innerHTML = '<div class="cvcell ' + cls + '" style="max-width:380px"><div class="cvt">' +
      esc(a) + ' → ' + esc(defs.join(' / ')) + '</div><div class="cvv" style="font-size:20px">×' + m + ' — ' + label + '</div>' +
      '<div style="margin-top:8px;font-size:13.5px;color:var(--ink2)">' + dcpill(a) +
      ' In Gen 3 a <b>' + esc(a) + '</b> move is always <b>' + esc(dclass(a)) + '</b> — it runs off ' +
      (dclass(a) === 'Physical' ? 'Attack' : 'Special Attack') + '.</div></div>';
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
    '<p style="font-size:15px;color:var(--ink2);margin:0 0 4px;max-width:66ch">Pick up to six from what Emerald actually gives you. The panel below counts how many of your team each attacking type hurts, flags the types nothing on your team hits hard, and — because this is Gen 3 — checks whether your six are lopsided towards physical or special.</p>' +
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
  const slots = el.querySelector('#slots');
  slots.innerHTML = Array.from({length:6}, (_, i) => {
    const n = TEAM[i];
    if (!n) return '<div class="slot"><span class="empty">slot ' + (i + 1) + '</span></div>';
    return '<div class="slot filled"><button class="x" data-rm="' + esc(n) + '" aria-label="Remove ' + esc(n) + '">×</button>' +
      monArt(n, 'spr') + '<div class="sn">' + esc(n) + '</div><div class="st">' + tpills(typesOf(n)) + '</div></div>';
  }).join('');

  el.querySelector('#pool').innerHTML = POOL.map(p =>
    '<button data-add="' + esc(p[0]) + '"' + (TEAM.includes(p[0]) || TEAM.length >= 6 ? ' disabled' : '') + '>' + esc(p[0]) + '</button>').join('');

  const cov = el.querySelector('#coverage');
  if (!TEAM.length){ cov.innerHTML = ''; return; }
  const members = TEAM.map(n => typesOf(n));
  const weak = TYPES.map(t => [t, members.filter(m => eff(t, m) >= 2).length]);
  const gaps = TYPES.filter(d => !TEAM.some(n => typesOf(n).some(s => eff(s, [d]) >= 2)));

  /* Gen 3 split check: which side does each member's own STAB fall on? */
  let phy = 0, spe = 0, both = 0;
  members.forEach(m => {
    const hasP = m.some(t => dclass(t) === 'Physical');
    const hasS = m.some(t => dclass(t) === 'Special');
    if (hasP && hasS) both++; else if (hasP) phy++; else spe++;
  });
  const lop = (phy + both / 2) >= TEAM.length * 0.8 || (spe + both / 2) >= TEAM.length * 0.8;

  cov.innerHTML =
    '<h3 style="margin-bottom:6px">Defensive exposure — how many of your six each type hits hard</h3>' +
    '<div class="cover">' + weak.map(w =>
      '<div class="cvcell ' + (w[1] >= 3 ? 'bad' : w[1] === 0 ? 'ok' : '') + '"><div class="cvt">' + w[0] +
      '</div><div class="cvv">' + w[1] + ' of ' + TEAM.length + '</div></div>').join('') + '</div>' +
    '<h3 style="margin-bottom:6px">Gen 3 split — where your team’s own STAB lands</h3>' +
    '<div class="cover" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">' +
      '<div class="cvcell"><div class="cvt">Physical STAB only</div><div class="cvv">' + phy + '</div></div>' +
      '<div class="cvcell"><div class="cvt">Special STAB only</div><div class="cvv">' + spe + '</div></div>' +
      '<div class="cvcell"><div class="cvt">Both available</div><div class="cvv">' + both + '</div></div>' +
    '</div>' +
    '<p style="font-size:15px;margin:8px 0 0;max-width:66ch">' + (lop
      ? '<span style="color:var(--ember);font-weight:700">Lopsided.</span> Almost every member’s own STAB lands on the same stat, so a single high-Defence or high-Special-Defence wall will stop your whole team. Add a body from the other column.'
      : '<span style="color:var(--good);font-weight:700">Balanced.</span> Your six threaten from both sides of the Gen 3 split, so no single defensive wall shuts you down.') + '</p>' +
    '<h3 style="margin-bottom:6px">Types nothing on your team hits for 2× with its own typing</h3>' +
    '<p style="font-size:15.5px;margin:0">' + (gaps.length
      ? gaps.map(tpill).join(' ') + '<br><span style="color:var(--ink3);font-size:14px">This is a same-type check only — a TM can plug any of these. Ice Beam, Thunderbolt, Flamethrower and Psychic from the Mauville Game Corner cover most gaps a Hoenn team has.</span>'
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
  ta.value = JSON.stringify({done:DONE, team:TEAM, starter:STARTER});
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
      if (parsed.starter && STARTERS[parsed.starter]) localStorage.setItem(KEY + ':starter', parsed.starter);
      location.reload();
    } catch (e) {
      alert('That is not a valid backup string.');
    }
  });
  el.querySelector('#bkClear').addEventListener('click', () => {
    if (!confirm('Clear every tick and your saved team? This cannot be undone.')) return;
    DONE = {}; TEAM = [];
    persist();
    try { localStorage.removeItem(KEY + ':team'); } catch (e) {}
    location.reload();
  });
};

