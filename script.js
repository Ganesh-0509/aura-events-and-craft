/* ══════════════════════════════════════════════════════════════
   AURA EVENTS & CRAFT — behaviour

   1. The bag opens as you scroll (a sticky stage; --p goes 0→1).
   2. The jute thread draws itself down the page.
   3. "Pack a bag" composes a WhatsApp message; no backend.
   4. Prints: reads assets/photos/photos.js, shows a labelled
      placeholder row when empty, opens a lightbox on tap.
   5. Menu sheet, thumb bar, small niceties.
   Everything degrades: without JS the page is static and readable.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const WA_NUMBER = '919884922946';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* ── 1 + 2: scroll-driven bag and thread ── */
  const stage = $('.stage');
  const threaded = $('.threaded');
  const thumbBar = $('#thumb-bar');
  let ticking = false;

  function frame() {
    ticking = false;
    const vh = window.innerHeight;

    if (stage) {
      if (reduce) {
        stage.style.setProperty('--p', '1');
      } else {
        const r = stage.getBoundingClientRect();
        const travel = stage.offsetHeight - vh;
        const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 1;
        stage.style.setProperty('--p', p.toFixed(4));
      }
    }

    if (threaded) {
      const r = threaded.getBoundingClientRect();
      // the thread is always drawn down to the bottom of the viewport, so it is
      // continuous wherever you are and visibly grows as you scroll
      const seen = (vh - r.top) / r.height;
      const t = 1 - Math.min(1, Math.max(0, seen));
      threaded.style.setProperty('--t', t.toFixed(4));
    }

    if (thumbBar) {
      const pastHero = window.scrollY > vh * 0.9;
      thumbBar.hidden = !(pastHero && !packInView);
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  let packInView = false;
  const pack = $('#pack');
  if (pack && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { packInView = e.isIntersecting; onScroll(); }, { threshold: 0.15 }).observe(pack);
  }
  frame();

  /* ── arrivals: things below the hero come toward you once, when first seen ── */
  const arrivals = $$('.arrive');
  if (arrivals.length && 'IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    arrivals.forEach(el => io.observe(el));
  } else {
    arrivals.forEach(el => el.classList.add('in'));
  }

  /* ── 5: menu sheet ── */
  const menuBtn = $('.menu-btn');
  const sheet = $('#sheet');
  if (menuBtn && sheet) {
    const close = () => { sheet.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.textContent = 'Menu'; };
    menuBtn.addEventListener('click', () => {
      const open = sheet.hidden;
      sheet.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.textContent = open ? 'Close' : 'Menu';
    });
    $$('a', sheet).forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ── 3: pack a bag → WhatsApp ── */
  const packer = $('#packer');
  if (packer) {
    const note = $('#note-body');
    const send = $('#send-wa');
    const mini = $('#mini-items');
    const icons = { 'Decoration': '#it-decor', 'Photography': '#it-photo', 'Videography': '#it-photo', 'Return gifts': '#it-gift', 'Craft items': '#it-clip' };

    function fmtDate(v) {
      if (!v) return '';
      const d = new Date(v + 'T00:00:00');
      if (isNaN(d)) return v;
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    function joinList(arr) {
      if (arr.length <= 1) return arr.join('');
      return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
    }
    function compose() {
      const f = new FormData(packer);
      const event = f.get('event') || 'function';
      const items = f.getAll('item');
      const date = fmtDate(f.get('date'));
      const guests = f.get('guests');
      const name = (f.get('name') || '').trim();
      const venue = (f.get('venue') || '').trim();

      const lines = [];
      const ev = event.toLowerCase();
      const article = /^[aeiou]/.test(ev) ? 'an' : 'a';
      lines.push('Vanakkam Aura! ' + (name ? 'This is ' + name + '. ' : '') + 'I am planning ' + article + ' ' + ev + (date ? ' on ' + date : '') + (guests ? ' for about ' + guests + ' guests' : '') + '.');
      lines.push(items.length ? 'Please pack: ' + joinList(items) + '.' : 'I have not picked items yet, can you suggest?');
      if (venue) lines.push('Venue / area: ' + venue + '.');
      lines.push('Can you share what it would cost?');
      const msg = lines.join('\n');

      if (note) note.textContent = msg;
      if (send) send.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);

      if (mini) {
        const want = items.map(i => icons[i]).filter(Boolean);
        const seen = new Set();
        const uniq = want.filter(h => (seen.has(h) ? false : seen.add(h)));
        const have = $$('svg', mini).map(s => s.dataset.h);
        if (have.join() !== uniq.join()) {
          mini.innerHTML = '';
          uniq.forEach((h, i) => {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.dataset.h = h;
            svg.style.animationDelay = (i * 60) + 'ms';
            const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttribute('href', h);
            svg.appendChild(use);
            mini.appendChild(svg);
          });
        }
      }
    }
    packer.addEventListener('input', compose);
    packer.addEventListener('change', compose);
    packer.addEventListener('submit', e => { e.preventDefault(); send && send.click(); });
    const dateEl = $('#date');
    if (dateEl) dateEl.min = new Date().toISOString().slice(0, 10);
    compose();
  }

  /* ── 4: prints ── */
  const row = $('#prints-row');
  const empty = $('#prints-empty');
  const lightbox = $('#lightbox');
  const lbImg = $('#lightbox-img');
  if (row) {
    const photos = Array.isArray(window.AURA_PHOTOS) ? window.AURA_PHOTOS.filter(p => p && p.file) : [];
    if (!photos.length) {
      if (empty) empty.hidden = false;
      const labels = ['Stage decoration photo goes here', 'Function photo goes here', 'Return gifts photo goes here', 'Craft items photo goes here'];
      labels.forEach(l => {
        const fig = document.createElement('figure');
        fig.className = 'print placeholder';
        fig.innerHTML = '<div class="ph">' + l + '<br><small>assets/photos/</small></div><figcaption>Placeholder</figcaption>';
        row.appendChild(fig);
      });
    } else {
      photos.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'print';
        btn.setAttribute('aria-label', 'Open photo: ' + (p.caption || p.file));
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = 'assets/photos/' + p.file;
        img.alt = p.caption || '';
        img.addEventListener('error', () => btn.remove());
        const cap = document.createElement('figcaption');
        cap.textContent = p.caption || '';
        btn.append(img, cap);
        btn.addEventListener('click', () => {
          if (!lightbox || !lbImg) return;
          lbImg.src = img.src; lbImg.alt = img.alt;
          lightbox.hidden = false;
          $('.lightbox-close', lightbox).focus();
        });
        row.appendChild(btn);
      });
    }
  }
  if (lightbox) {
    const close = () => { lightbox.hidden = true; if (lbImg) lbImg.src = ''; };
    $('.lightbox-close', lightbox).addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) close(); });
  }
})();
