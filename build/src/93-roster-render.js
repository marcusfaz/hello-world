
/* ---- attach a roster board to the top of every stage that has one ---- */
STAGES.forEach(s => { if (ROSTERS[s.id]) s.body.unshift(["roster", s.id]); });

/* ---- render ---- */
const PSTAT = {add:"Add here", keep:"Keep", swap:"Swap out", bench:"Swap in just for this"};
function starterTok(str, nm){ return String(str).split("%S%").join(nm); }

function rosterHTML(id){
  const r = ROSTERS[id];
  if (!r) return "";
  const S = STARTERS[STARTER];
  const nm = (r.form && S[r.form]) ? S[r.form] : S.final;
  const flow = FLOW[id];
  const slots = flow ? flow.slots
                     : r.slots.filter(sl => !sl.only || sl.only.indexOf(STARTER) !== -1);
  const note = r.notes && r.notes[STARTER];
  const nameOf = sl => sl.name !== undefined ? sl.name : (sl.n === "%S%" ? nm : sl.n);

  /* the six you are actually carrying out of this stage: everything kept or added */
  /* Never draw a "box it" card: with six in the party the game sends every catch,
     gift and revived fossil to the PC on its own, so there is no action to give. */
  const shown    = slots.filter(sl => !sl.carried && sl.st !== "box");
  const carrying = slots.filter(sl => sl.st === "keep" || sl.st === "add").map(nameOf);
  const leaving  = shown.filter(sl => sl.st === "swap").map(nameOf);
  const benched  = shown.filter(sl => sl.st === "bench").map(nameOf);

  const haveStrip =
    '<div class="have">' +
      '<div class="haverow"><span class="hlbl ok">Carrying now</span><span class="hlist">' +
        (carrying.length ? carrying.map(n => '<span class="hmon">' + monArt(n, 'hspr') + esc(n) + '</span>').join('') 
                         : '<span class="hnone">—</span>') + '</span></div>' +
      (leaving.length ? '<div class="haverow"><span class="hlbl out">Leaving the party</span><span class="hlist">' +
        leaving.map(n => '<span class="hmon out">' + monArt(n, 'hspr') + esc(n) + '</span>').join('') + '</span></div>' : '') +
      (benched.length ? '<div class="haverow"><span class="hlbl rest">Swap in just for this</span><span class="hlist">' +
        benched.map(n => '<span class="hmon box">' + monArt(n, 'hspr') + esc(n) + '</span>').join('') + '</span></div>' : '') +
    '</div>';

  const mvRows = (r.mv || []).filter(m => !m.only || m.only.indexOf(STARTER) !== -1);
  const mv = mvRows.length
    ? '<div class="mvwrap"><div class="mvhead">Move changes due here</div>' +
      '<div class="tblwrap"><table class="mvtable"><thead><tr>' +
      '<th>Pokémon</th><th>Learns</th><th>At</th><th>Replace</th><th>Why</th></tr></thead><tbody>' +
      mvRows.map(m => {
        const who = starterTok(m.p, nm);
        return '<tr><td class="mon">' + monArt(who, 'ms') + esc(who) + '</td>' +
          '<td class="mvnew">' + m.learn + '</td>' +
          '<td class="num">' + (m.lv ? 'Lv ' + esc(String(m.lv)) : esc(m.at || '—')) + '</td>' +
          '<td class="mvold">' + (m.drop ? m.drop : '<i>nothing — free slot</i>') + '</td>' +
          '<td class="mv">' + starterTok(m.why || '', nm) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>'
    : '';

  return (r.now ? '<div class="donow"><span class="lbl">Do this now</span><p>' + starterTok(r.now, nm) + '</p></div>' : "") +
    '<div class="party">' +
    '<div class="ph"><h4>Your party at this point</h4>' +
      '<span class="lv">target Lv ' + esc(r.lv) + '</span>' +
      '<span class="who">' + esc(nm) + ' run</span></div>' +
    haveStrip +
    (r.sum ? '<p class="psum">' + starterTok(r.sum, nm) + '</p>' : "") +
    (note ? '<div class="pnote"><span class="lbl">If you took ' + esc(S.base) + '</span><p>' + starterTok(note, nm) + '</p></div>' : "") +
    '<div class="pgrid">' + shown.map(sl => {
      const name = nameOf(sl);
      const types = sl.types !== undefined ? sl.types : (sl.n === "%S%" ? S.t : (sl.t || []));
      let pair = '';
      if (sl.st === "swap" && sl.forName)
        pair = '<div class="ppair out"><span>Swap out</span> ' + esc(starterTok(sl.forName, nm)) + ' takes this slot</div>';
      else if (sl.st === "add" && sl.replaces)
        pair = '<div class="ppair in"><span>Takes over from</span> ' + esc(starterTok(sl.replaces, nm)) + '</div>';
      return '<div class="pslot ' + sl.st + (monSrc(name) ? ' hasart' : '') + '">' +
        monArt(name, 'sprbg') + monArt(name, 'spr') +
        '<span class="pst">' + PSTAT[sl.st] + '</span>' +
        '<div class="pn">' + esc(name) + ' ' + tpills(types) + '</div>' +
        '<div class="prole">' + esc(sl.role) + '</div>' +
        (sl.w ? '<div class="pw">' + starterTok(sl.w, nm) + '</div>' : "") +
        pair +
      '</div>';
    }).join("") + '</div>' + mv + '</div>';
}

function mapHTML(id){
  const rows = (typeof IMG !== 'undefined') && IMG.map[id];
  if (!rows || !rows.length) return "";
  /* the in-game area maps for everywhere this stage takes you, in walking order */
  return '<div class="maprow">' + rows.map(m =>
    '<figure class="mapfig">' +
      '<button class="mapimg" type="button" data-zoom="' + esc(m.loc) + '" ' +
        'aria-label="Zoom in on the map of ' + esc(m.loc) + '">' +
        '<img src="' + m.src + '" alt="In-game map of ' + esc(m.loc) + '" loading="lazy">' +
        '<span class="maghint" aria-hidden="true">' + MAGNIFY + '</span>' +
      '</button>' +
      '<figcaption><b>' + esc(m.loc) + '</b><span>Emerald · Bulbapedia</span></figcaption>' +
    '</figure>'
  ).join('') + '</div>';
}
function renderRosters(){
  buildFlow();
  document.querySelectorAll("[data-roster]").forEach(el => {
    el.innerHTML = rosterHTML(el.dataset.roster) + mapHTML(el.dataset.roster);
  });
  document.querySelectorAll("[data-map]").forEach(el => {
    el.innerHTML = mapHTML(el.dataset.map);
  });
  document.querySelectorAll("[data-starter-name]").forEach(el => {
    el.textContent = STARTERS[STARTER].base;
  });
}

function setStarter(k){
  if (!STARTERS[k]) return;
  STARTER = k;
  try { localStorage.setItem(KEY + ":starter", k); } catch (e) {}
  renderRosters();
}


/* ---- attach the move-change tables and swap pairings authored above ---- */
Object.keys(MOVEPLAN).forEach(k => { if (ROSTERS[k]) ROSTERS[k].mv = MOVEPLAN[k]; });
Object.keys(PAIRS).forEach(k => {
  const r = ROSTERS[k]; if (!r) return;
  r.slots.forEach(sl => { if (sl.st === "swap" && PAIRS[k][sl.n]) sl.forName = PAIRS[k][sl.n]; });
});
