/* ===================== MAP LIGHTBOX =====================
   The cards are thumbnails; this is where you actually read a map. No zoom
   controls — it opens as large as the viewport allows, and pixel art is scaled
   by whole numbers so the tiles stay sharp instead of going soft. */

const MAGNIFY =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" ' +
  'stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"></circle>' +
  '<path d="M15.5 15.5L21 21M10.5 7.5v6M7.5 10.5h6"></path></svg>';

(function(){
  let box, stage, img, cap, count, prevBtn, nextBtn;
  let group = [], at = 0, lastFocus = null;

  function build(){
    box = document.createElement('div');
    box.className = 'lightbox';
    box.id = 'lightbox';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Map viewer');
    box.innerHTML =
      '<div class="lbbar">' +
        '<b class="lbcap"></b>' +
        '<span class="lbcount"></span>' +
        '<button class="lbbtn lbprev" type="button" aria-label="Previous map">' +
          '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
          'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M15 5l-7 7 7 7"></path></svg></button>' +
        '<button class="lbbtn lbnext" type="button" aria-label="Next map">' +
          '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
          'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M9 5l7 7-7 7"></path></svg></button>' +
        '<button class="lbbtn lbclose" type="button" aria-label="Close map viewer">' +
          '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" ' +
          'stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path>' +
          '</svg></button>' +
      '</div>' +
      '<div class="lbstage"><img alt=""></div>';
    document.body.appendChild(box);

    stage   = box.querySelector('.lbstage');
    img     = box.querySelector('.lbstage img');
    cap     = box.querySelector('.lbcap');
    count   = box.querySelector('.lbcount');
    prevBtn = box.querySelector('.lbprev');
    nextBtn = box.querySelector('.lbnext');

    box.querySelector('.lbclose').addEventListener('click', close);
    prevBtn.addEventListener('click', () => step(-1));
    nextBtn.addEventListener('click', () => step(1));
    /* clicking the backdrop closes; clicking the map itself does not */
    box.addEventListener('click', e => {
      if (e.target === box || e.target === stage) close();
    });
    img.addEventListener('load', fit);
    window.addEventListener('resize', () => { if (!box.hidden) fit(); });
  }

  /* Scale the map up by a whole number so the tile grid stays crisp. Anything
     larger than the stage is simply fitted, which is the tall route maps. */
  function fit(){
    if (!img.naturalWidth) return;
    const pad = 24;
    const w = stage.clientWidth  - pad;
    const h = stage.clientHeight - pad;
    if (w <= 0 || h <= 0) return;
    const room = Math.min(w / img.naturalWidth, h / img.naturalHeight);
    const scale = room >= 1 ? Math.max(1, Math.floor(room)) : room;
    img.style.width  = Math.round(img.naturalWidth  * scale) + 'px';
    img.style.height = Math.round(img.naturalHeight * scale) + 'px';
  }

  function show(i){
    at = (i + group.length) % group.length;
    const m = group[at];
    img.style.width = img.style.height = '';
    img.src = m.src;
    img.alt = 'In-game map of ' + m.loc;
    cap.textContent = m.loc;
    const many = group.length > 1;
    count.textContent = many ? (at + 1) + ' / ' + group.length : '';
    prevBtn.hidden = nextBtn.hidden = !many;
    if (img.complete) fit();
  }
  function step(d){ if (group.length > 1) show(at + d); }

  function open(btn){
    const row = btn.closest('.maprow');
    const btns = [].slice.call(row.querySelectorAll('.mapimg'));
    group = btns.map(b => ({
      src: b.querySelector('img').src,
      loc: b.parentElement.querySelector('figcaption b').textContent
    }));
    lastFocus = btn;
    box.hidden = false;
    document.body.classList.add('lbopen');
    show(btns.indexOf(btn));
    box.querySelector('.lbclose').focus();
  }
  function close(){
    box.hidden = true;
    document.body.classList.remove('lbopen');
    img.removeAttribute('src');
    if (lastFocus) { lastFocus.focus(); lastFocus = null; }
  }

  build();

  document.addEventListener('click', e => {
    const btn = e.target.closest('.mapimg');
    if (btn) { e.preventDefault(); open(btn); }
  });
  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape')     { e.preventDefault(); close(); }
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();
