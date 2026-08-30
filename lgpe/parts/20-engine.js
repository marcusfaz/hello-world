
/* ============================================================
   Engine: data containers, persistence, rendering, widgets.
   Content is appended by the DATA scripts that follow.
   ============================================================ */
const CHAPTERS = [];
const STAGES = [];
const WIDGETS = {};                 // id -> function(mountEl)

/* ---- persistence (per-browser; export/import below) ---- */
const KEY = 'volt-circuit-lgp-v1';
let DONE = {};
try { DONE = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { DONE = {}; }
function persist(){ try { localStorage.setItem(KEY, JSON.stringify(DONE)); } catch (e) {} }

/* stable id from text so progress survives edits elsewhere in the page */
function key(scope, text){
  let h = 5381;
  const s = scope + '|' + text;
  for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
  return scope + '-' + h.toString(36);
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tpill = t => '<span class="t ty-' + String(t).toLowerCase() + '">' + esc(t) + '</span>';
/* imagery: Let's Go has no 2D game sprites, so these are the 3D model
   renders, re-encoded to WebP and embedded as data URIs */
/* Display names map to PokeAPI slugs: "Nidoran♀" -> nidoran-f, "Mr. Mime" -> mr-mime,
   "Alolan Sandslash" -> sandslash-alola. */
const SLUG_FIX = {"Nidoran♀":"nidoran-f","Nidoran♂":"nidoran-m","Mr. Mime":"mr-mime",
  "Farfetch'd":"farfetchd","Farfetch’d":"farfetchd","Mime Jr.":"mime-jr","Ho-Oh":"ho-oh"};
function slugOf(n){
  if (SLUG_FIX[n]) return SLUG_FIX[n];
  let s = String(n).trim();
  const al = /^Alolan\s+(.+)$/.exec(s);
  if (al) return slugOf(al[1]) + '-alola';
  return s.toLowerCase().replace(/[.'’]/g, '').replace(/\s+/g, '-');
}
const monSrc = n => (typeof IMG !== 'undefined' && n && IMG.mon[slugOf(n)]) || null;
function monArt(name, cls){
  const src = monSrc(name);
  return src ? '<img class="' + cls + '" src="' + src + '" alt="" loading="lazy" aria-hidden="true">' : '';
}
function itemArt(kind, name){
  if (typeof IMG === 'undefined') return '';
  let src = null;
  const mach = /^TM(\d+)$/.exec(kind);
  if (mach){
    src = null;   /* LGPE ships no 2D bag sprites in any open dataset */
  }
  if (!src) src = monSrc(name);
  return src ? '<img class="isp" src="' + src + '" alt="" loading="lazy" aria-hidden="true">' : '';
}
const tpills = a => (a || []).map(tpill).join(' ');

/* ---- Let's Go is Generation VII: the physical/special split is per MOVE.
       A move's own damage class is data, so it is carried on the move, never
       derived from its type. MOVECLASS is filled from LGPE move data. ---- */
const MOVECLASS = {};                 // "Move Name" -> physical|special|status
const dclass = m => MOVECLASS[m] || null;
const DCLBL = {physical:'Phys', special:'Spec', status:'Status'};
const DCCLS = {physical:'phy', special:'spe', status:'sta'};
function dcpill(move){
  const c = dclass(move);
  return c ? '<span class="dc ' + DCCLS[c] + '">' + DCLBL[c] + '</span>' : '';
}

/* ---- block renderers ---- */
function renderBlock(b, stageId){
  const kind = b[0], v = b[1];
  switch (kind){
    case 'p':    return '<p>' + v + '</p>';
    case 'h':    return '<h3>' + esc(v) + '</h3>';
    case 'ul':   return '<ul class="plain">' + v.map(x => '<li>' + x + '</li>').join('') + '</ul>';
    case 'tip':  return '<div class="note tip"><span class="lbl">Worth knowing</span><p>' + v + '</p></div>';
    case 'warn': return '<div class="note warn"><span class="lbl">Don\'t miss / can\'t undo</span><p>' + v + '</p></div>';
    case 'team': return '<div class="note team"><span class="lbl">Team call</span><p>' + v + '</p></div>';
    case 'ver':  return '<div class="note ver"><span class="lbl">Let\'s Go, Pikachu! version difference</span><p>' + v + '</p></div>';
    case 'lgpe': return '<div class="note ver"><span class="lbl">Not like the old games</span><p>' + v + '</p></div>';
    case 'html': return v;
    case 'mount':return '<div data-widget="' + esc(v) + '"></div>';
    case 'roster':return '<div data-roster="' + esc(v) + '"></div>';

    /* The route and the checklist are the same list: an ordered walk, ticked as
       you go.  Items carrying `at` open a new leg; the rest continue the last one. */
    case 'do': {
      const isRoute = v.some(x => typeof x === 'object' && x.at);
      let leg = null, step = 0, legIdx = 0, out = '';
      v.forEach(item => {
        const t = typeof item === 'string' ? item : item.t;
        const sub = (typeof item === 'object' && item.sub) ? '<span class="sub">' + item.sub + '</span>' : '';
        const at = (typeof item === 'object' && item.at) || null;
        if (at && at !== leg){
          leg = at; legIdx++;
          out += '<li class="leg" data-leg="' + legIdx + '"><span class="legn">' + legIdx +
                 '</span><span class="legname">' + at + '</span></li>';
        }
        step++;
        const id = key(stageId, t);
        const on = !!DONE[id];
        out += '<li class="doneRow' + (on ? ' isdone' : '') + '" data-k="' + id + '"' +
          (isRoute ? ' data-inleg="' + legIdx + '"' : '') + '>' +
          '<input type="checkbox" id="' + id + '" data-k="' + id + '"' + (on ? ' checked' : '') + '>' +
          (isRoute ? '<span class="stepn">' + step + '</span>' : '') +
          '<label for="' + id + '">' + t + sub + '</label></li>';
      });
      return '<ul class="checks' + (isRoute ? ' route' : '') + '">' + out + '</ul>';
    }

    case 'catch': return '<div class="grid">' + v.map(c =>
        '<div class="card' + (monSrc(c.n) ? ' hasart' : '') + '">' +
        monArt(c.n, 'sprbg') + monArt(c.n, 'spr') +
        '<div class="nm">' + esc(c.n) + ' ' + tpills(c.t) + (c.lg ? ' <span class="lgx">Pikachu only</span>'
                : c.lgv ? ' <span class="lgx spawn">this spawn, Pikachu only</span>' : '') + '</div>' +
        '<span class="loc">' + esc(c.where) + '</span>' +
        (c.why ? '<div class="why">' + c.why + '</div>' : '') + '</div>').join('') + '</div>';

    case 'loot': return '<div class="grid">' + v.map(i => {
        const cls = /^TM/.test(i.k) ? 'tm' : /^HM/.test(i.k) ? 'hm' : i.k === 'Key' ? 'key' : '';
        return '<div class="card"><div class="nm">' + itemArt(i.k, i.n) + '<span class="kchip ' + cls + '">' + esc(i.k) + '</span> ' + esc(i.n) + '</div>' +
          '<span class="loc">' + esc(i.where) + '</span>' + (i.why ? '<div class="why">' + i.why + '</div>' : '') + '</div>';
      }).join('') + '</div>';

    case 'table': return '<div class="reftable"><div class="tblwrap"><table><thead><tr>' +
        v.cols.map(c => '<th>' + esc(c) + '</th>').join('') + '</tr></thead><tbody>' +
        v.rows.map(r => '<tr>' + r.map((c, i) => '<td' + (i ? ' class="mv"' : ' class="mon"') + '>' + c + '</td>').join('') + '</tr>').join('') +
        '</tbody></table></div></div>';

    case 'boss': {
      const b2 = v;
      const roleType = String(b2.role).split('·').pop().trim().toLowerCase();
      const bhType = TYPES.some(t => t.toLowerCase() === roleType) ? ' ty-' + roleType : '';
      const por = (typeof IMG !== 'undefined' && IMG.trn[b2.name])
        ? '<img class="por" src="' + IMG.trn[b2.name] + '" alt="" loading="lazy" aria-hidden="true">' : '';
      return '<div class="boss"><div class="bh' + bhType + (por ? ' haspor' : '') + '">' + por + '<h4>' + esc(b2.name) + '</h4>' +
        '<span class="role">' + esc(b2.role) + '</span>' +
        (b2.badge ? '<span class="badge">' + esc(b2.badge) + '</span>' : '') + '</div>' +
        '<div class="tblwrap"><table><thead><tr><th>Pokémon</th><th>Lv</th><th>Type</th><th>Threatening moves</th></tr></thead><tbody>' +
        b2.team.map(m => '<tr><td class="mon">' + monArt(m.m, 'ms') + esc(m.m) + '</td><td class="num">' + esc(m.l) +
          '</td><td>' + tpills(m.t) + '</td><td class="mv">' + (m.note || '') + '</td></tr>').join('') +
        '</tbody></table></div>' +
        '<div class="plan"><span class="lbl">How you win</span><ul>' +
        b2.plan.map(p => '<li>' + p + '</li>').join('') + '</ul>' +
        (b2.reward ? '<p style="margin:12px 0 0;font-size:15px;color:var(--ink2)"><b>Reward:</b> ' + b2.reward + '</p>' : '') +
        '</div></div>';
    }
  }
  return '';
}

/* ---- page render ---- */
/* The data files load in whatever order the build concatenates them; the page
   follows the chapter list, so moving a chapter moves its stages with it. */
function orderStages(){
  const rank = id => { const i = CHAPTERS.findIndex(c => c.id === id); return i < 0 ? 999 : i; };
  STAGES.sort((a, b) => rank(a.ch) - rank(b.ch));
}
function renderAll(){
  orderStages();
  const content = document.getElementById('content');
  content.innerHTML = STAGES.map(s => {
    const band = (s.band || []).length
      ? '<dl class="band">' + s.band.map(x => '<div><dt>' + esc(x.k) + '</dt><dd>' + x.v + '</dd></div>').join('') + '</dl>'
      : '';
    return '<section class="stage" id="' + s.id + '"><div class="wrap' + (s.wide ? ' wide' : '') + '">' +
      '<div class="eyebrow"><span class="tag">' + esc(s.tag || chapterOf(s).name) + '</span>' +
      (s.place ? '<span class="where">' + esc(s.place) + '</span>' : '') + '</div>' +
      '<h2>' + esc(s.title) + '</h2>' +
      (s.lede ? '<p class="lede">' + s.lede + '</p>' : '') + band +
      s.body.map(b => renderBlock(b, s.id)).join('') +
      '</div></section>';
  }).join('');

  content.querySelectorAll('[data-widget]').forEach(el => {
    const fn = WIDGETS[el.dataset.widget];
    if (fn) fn(el);
  });
  renderRosters();

  content.addEventListener('change', e => {
    const cb = e.target.closest('input[type=checkbox][data-k]');
    if (!cb) return;
    if (cb.checked) DONE[cb.dataset.k] = 1; else delete DONE[cb.dataset.k];
    persist();
    const row = cb.closest('.doneRow');
    if (row) row.classList.toggle('isdone', cb.checked);
    updateProgress();
    applyHideDone();
  });

  renderNav();
  updateProgress();
}
function chapterOf(s){ return CHAPTERS.find(c => c.id === s.ch) || {name:''}; }

function renderNav(){
  const nav = document.getElementById('nav');
  nav.innerHTML = CHAPTERS.map(c => {
    const list = STAGES.filter(s => s.ch === c.id);
    return '<div class="navgroup"><div class="ghead">' + esc(c.name) +
      '<span class="gcount" data-chcount="' + c.id + '"></span></div><ul class="navlist">' +
      list.map(s => '<li><a href="#' + s.id + '" data-nav="' + s.id + '">' +
        '<span class="tick"></span><span>' + esc(s.title) + '</span></a></li>').join('') +
      '</ul></div>';
  }).join('');
  nav.addEventListener('click', e => {
    if (e.target.closest('a') && window.innerWidth <= 960) closeRail();
  });
}

function stageStats(s){
  let total = 0, done = 0;
  document.querySelectorAll('#' + CSS.escape(s.id) + ' input[type=checkbox][data-k]').forEach(cb => {
    total++; if (cb.checked) done++;
  });
  return {total, done};
}
function updateProgress(){
  let gT = 0, gD = 0;
  const perCh = {};
  STAGES.forEach(s => {
    const st = stageStats(s);
    gT += st.total; gD += st.done;
    perCh[s.ch] = perCh[s.ch] || {t:0, d:0, stages:0, full:0};
    perCh[s.ch].t += st.total; perCh[s.ch].d += st.done; perCh[s.ch].stages++;
    if (st.total && st.done === st.total) perCh[s.ch].full++;
    const a = document.querySelector('[data-nav="' + s.id + '"]');
    if (a) a.classList.toggle('done', st.total > 0 && st.done === st.total);
  });
  CHAPTERS.forEach(c => {
    const el = document.querySelector('[data-chcount="' + c.id + '"]');
    const p = perCh[c.id];
    if (el && p) el.textContent = p.t ? (p.full + '/' + p.stages) : '';
  });
  const pct = gT ? Math.round(gD / gT * 100) : 0;
  document.getElementById('globalbar').style.width = pct + '%';
  document.getElementById('globalpct').textContent = pct + '%';
  document.getElementById('globalpct').title = gD + ' of ' + gT + ' steps';
}

/* ---- search ---- */
function runSearch(q){
  q = q.trim().toLowerCase();
  const stages = document.querySelectorAll('.stage');
  let shown = 0;
  stages.forEach(el => {
    const hit = !q || el.textContent.toLowerCase().includes(q);
    el.classList.toggle('hide', !hit);
    if (hit) shown++;
  });
  let msg = document.getElementById('nores');
  if (!msg){
    msg = document.createElement('div');
    msg.id = 'nores'; msg.className = 'wrap nores';
    document.getElementById('content').appendChild(msg);
  }
  msg.style.display = shown ? 'none' : 'block';
  msg.textContent = 'Nothing matches “' + q + '”.';
  document.querySelectorAll('[data-nav]').forEach(a => {
    const s = document.getElementById(a.dataset.nav);
    a.parentElement.style.display = (!s || s.classList.contains('hide')) ? 'none' : '';
  });
}

/* ---- hide done ---- */
let HIDE = false;
function applyHideDone(){
  document.querySelectorAll('.doneRow').forEach(li => {
    li.classList.toggle('hidden', HIDE && li.classList.contains('isdone'));
  });
  /* a route leg with nothing left to do in it goes too, or the heading floats alone */
  document.querySelectorAll('.checks.route .leg').forEach(leg => {
    const n = leg.dataset.leg;
    const rows = leg.closest('.checks').querySelectorAll('.doneRow[data-inleg="' + n + '"]');
    let live = 0;
    rows.forEach(r => { if (!r.classList.contains('hidden')) live++; });
    leg.classList.toggle('hidden', rows.length > 0 && live === 0);
  });
}

/* ---- theme ---- */
function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem(KEY + ':theme'); } catch (e) {}
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themebtn').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = cur ? (cur === 'dark' ? 'light' : 'dark') : (sysDark ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY + ':theme', next); } catch (e) {}
  });
}

/* ---- rail (mobile) ---- */
function closeRail(){
  document.getElementById('rail').classList.remove('open');
  document.getElementById('scrim').classList.remove('on');
}
/* ---- scrollspy ---- */
function initSpy(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      document.querySelectorAll('[data-nav]').forEach(a => a.classList.remove('on'));
      const a = document.querySelector('[data-nav="' + en.target.id + '"]');
      if (a){ a.classList.add('on'); }
    });
  }, {rootMargin:'-56px 0px -70% 0px', threshold:0});
  document.querySelectorAll('.stage').forEach(s => obs.observe(s));
}

/* ---- Generation VII type chart. Fairy exists; Steel no longer resists
       Ghost or Dark; Ghost and Dark are neutral into Steel; Fairy beats
       Dragon, Dark and Fighting and is walled by Steel, Fire and Poison. ---- */
const TYPES = ['Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison','Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark','Steel','Fairy'];
const CHART = {
  Normal:{Rock:.5,Ghost:0,Steel:.5},
  Fire:{Fire:.5,Water:.5,Grass:2,Ice:2,Bug:2,Rock:.5,Dragon:.5,Steel:2},
  Water:{Fire:2,Water:.5,Grass:.5,Ground:2,Rock:2,Dragon:.5},
  Electric:{Water:2,Electric:.5,Grass:.5,Ground:0,Flying:2,Dragon:.5},
  Grass:{Fire:.5,Water:2,Grass:.5,Poison:.5,Ground:2,Flying:.5,Bug:.5,Rock:2,Dragon:.5,Steel:.5},
  Ice:{Fire:.5,Water:.5,Grass:2,Ice:.5,Ground:2,Flying:2,Dragon:2,Steel:.5},
  Fighting:{Normal:2,Ice:2,Poison:.5,Flying:.5,Psychic:.5,Bug:.5,Rock:2,Ghost:0,Dark:2,Steel:2,Fairy:.5},
  Poison:{Grass:2,Poison:.5,Ground:.5,Rock:.5,Ghost:.5,Steel:0,Fairy:2},
  Ground:{Fire:2,Electric:2,Grass:.5,Poison:2,Flying:0,Bug:.5,Rock:2,Steel:2},
  Flying:{Electric:.5,Grass:2,Fighting:2,Bug:2,Rock:.5,Steel:.5},
  Psychic:{Fighting:2,Poison:2,Psychic:.5,Dark:0,Steel:.5},
  Bug:{Fire:.5,Grass:2,Fighting:.5,Poison:.5,Flying:.5,Psychic:2,Ghost:.5,Dark:2,Steel:.5,Fairy:.5},
  Rock:{Fire:2,Ice:2,Fighting:.5,Ground:.5,Flying:2,Bug:2,Steel:.5},
  Ghost:{Normal:0,Psychic:2,Ghost:2,Dark:.5},
  Dragon:{Dragon:2,Steel:.5,Fairy:0},
  Dark:{Fighting:.5,Psychic:2,Ghost:2,Dark:.5,Fairy:.5},
  Steel:{Fire:.5,Water:.5,Electric:.5,Ice:2,Rock:2,Steel:.5,Fairy:2},
  Fairy:{Fire:.5,Fighting:2,Poison:.5,Dragon:2,Dark:2,Steel:.5}
};
function eff(atk, defTypes){
  return defTypes.reduce((m, d) => m * (CHART[atk] && CHART[atk][d] !== undefined ? CHART[atk][d] : 1), 1);
}

/* ---- boot ---- */
function boot(){
  initTheme();
  renderAll();
  initSpy();
  document.getElementById('search').addEventListener('input', e => runSearch(e.target.value));
  document.getElementById('hidedone').addEventListener('click', e => {
    HIDE = !HIDE;
    e.currentTarget.setAttribute('aria-pressed', String(HIDE));
    applyHideDone();
  });
  document.getElementById('menubtn').addEventListener('click', () => {
    document.getElementById('rail').classList.add('open');
    document.getElementById('scrim').classList.add('on');
  });
  document.getElementById('scrim').addEventListener('click', closeRail);
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT'){
      e.preventDefault(); document.getElementById('search').focus();
    }
    if (e.key === 'Escape') closeRail();
  });
  applyHideDone();
}

