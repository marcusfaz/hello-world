/* ---- attach a roster board to the top of every stage that has one ---- */
STAGES.forEach(s => { if (ROSTERS[s.id]) s.body.unshift(["roster", s.id]); });

const PSTAT = {add:"Add here", keep:"Keep", swap:"Swap out", sit:"Sit this one out"};

function rosterHTML(id){
  const r = ROSTERS[id];
  if (!r) return "";
  const flow = FLOW[id];
  const slots = flow ? flow.slots : r.slots;

  const shown    = slots.filter(sl => !sl.carried);
  /* "sit" is still one of your six — it is only being kept out of this stage's fight */
  const carrying = slots.filter(sl => sl.st === "keep" || sl.st === "add" || sl.st === "sit").map(sl => sl.name || sl.n);
  const leaving  = shown.filter(sl => sl.st === "swap").map(sl => sl.name || sl.n);
  const benched  = shown.filter(sl => sl.st === "sit").map(sl => sl.name || sl.n);

  const haveStrip =
    '<div class="have">' +
      '<div class="haverow"><span class="hlbl ok">Carrying now</span><span class="hlist">' +
        (carrying.length ? carrying.map(n => '<span class="hmon">' + monArt(n, 'hspr') + esc(n) + '</span>').join('')
                         : '<span class="hnone">—</span>') + '</span></div>' +
      (leaving.length ? '<div class="haverow"><span class="hlbl out">Leaving the party</span><span class="hlist">' +
        leaving.map(n => '<span class="hmon out">' + monArt(n, 'hspr') + esc(n) + '</span>').join('') + '</span></div>' : '') +
      (benched.length ? '<div class="haverow"><span class="hlbl rest">Keep out of this fight</span><span class="hlist">' +
        benched.map(n => '<span class="hmon box">' + monArt(n, 'hspr') + esc(n) + '</span>').join('') + '</span></div>' : '') +
    '</div>';

  const mvRows = r.mv || [];
  const mv = mvRows.length
    ? '<div class="mvwrap"><div class="mvhead">Move changes due here</div>' +
      '<div class="tblwrap"><table class="mvtable"><thead><tr>' +
      '<th>Pokémon</th><th>Learns</th><th>At</th><th>Replace</th><th>Why</th></tr></thead><tbody>' +
      mvRows.map(m =>
        '<tr><td class="mon">' + monArt(m.p, 'ms') + esc(m.p) + '</td>' +
        '<td class="mvnew">' + m.learn + '</td>' +
        '<td class="num">' + (m.lv ? 'Lv ' + esc(String(m.lv)) : esc(m.at || '—')) + '</td>' +
        '<td class="mvold">' + (m.drop ? m.drop : '<i>nothing — free slot</i>') + '</td>' +
        '<td class="mv">' + (m.why || '') + '</td></tr>').join('') +
      '</tbody></table></div></div>'
    : '';

  return (r.now ? '<div class="donow"><span class="lbl">Do this now</span><p>' + r.now + '</p></div>' : "") +
    '<div class="party">' +
    '<div class="ph"><h4>Your party at this point</h4>' +
      '<span class="lv">target Lv ' + esc(r.lv) + '</span>' +
      '<span class="who">' + esc(r.badges === undefined ? 'Partner Pikachu run' : r.badges) + '</span></div>' +
    haveStrip +
    (r.sum ? '<p class="psum">' + r.sum + '</p>' : "") +
    '<div class="pgrid">' + shown.map(sl => {
      const name = sl.name !== undefined ? sl.name : sl.n;
      const types = sl.types !== undefined ? sl.types : (sl.t || []);
      let pair = '';
      if (sl.st === "swap" && sl.forName)
        pair = '<div class="ppair out"><span>Swap out</span> ' + esc(sl.forName) + ' takes this slot</div>';
      else if (sl.st === "add" && sl.replaces)
        pair = '<div class="ppair in"><span>Takes over from</span> ' + esc(sl.replaces) + '</div>';
      return '<div class="pslot ' + sl.st + (monSrc(name) ? ' hasart' : '') + '">' +
        monArt(name, 'sprbg') + monArt(name, 'spr') +
        '<span class="pst">' + PSTAT[sl.st] + '</span>' +
        '<div class="pn">' + esc(name) + ' ' + tpills(types) + '</div>' +
        '<div class="prole">' + esc(sl.role) + '</div>' +
        (sl.w ? '<div class="pw">' + sl.w + '</div>' : "") +
        pair +
      '</div>';
    }).join("") + '</div>' + mv + '</div>';
}

function mapHTML(id){
  const m = (typeof IMG !== 'undefined') && IMG.map[id];
  if (!m) return "";
  return '<figure class="mapfig"><img src="' + m.src + '" alt="Map of ' + esc(m.loc) + '" loading="lazy">' +
    '<figcaption><b>' + esc(m.loc) + '</b><span>map · Bulbapedia</span></figcaption></figure>';
}
function renderRosters(){
  buildFlow();
  document.querySelectorAll("[data-roster]").forEach(el => {
    el.innerHTML = rosterHTML(el.dataset.roster) + mapHTML(el.dataset.roster);
  });
}
