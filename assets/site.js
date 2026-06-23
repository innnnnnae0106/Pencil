/* ===========================================================
   PENCIL — BOLD interactions
   square cursor · delayed floating thumb · reveals · i18n
   =========================================================== */
(function(){
  'use strict';
  var fine = window.matchMedia('(pointer:fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- i18n ---------- */
  var lang = localStorage.getItem('pcl_lang') || 'ko';
  function applyLang(l){
    lang = l; localStorage.setItem('pcl_lang', l);
    document.body.classList.toggle('lang-en', l === 'en');
    document.documentElement.lang = l;
    document.querySelectorAll('[data-ko]').forEach(function(el){
      var v = el.getAttribute('data-' + l); if(v !== null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-set]').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-set') === l);
    });
  }
  document.querySelectorAll('[data-set]').forEach(function(b){
    b.addEventListener('click', function(){ applyLang(b.getAttribute('data-set')); });
  });
  applyLang(lang);

  /* ---------- reveal (render-loop aware) ---------- */
  var alive = false; requestAnimationFrame(function(){ alive = true; });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:0.16, rootMargin:'0px 0px -8% 0px' });
  function commitVisible(){
    document.documentElement.classList.add('static');
    document.documentElement.classList.remove('armed');
  }
  if(reduce){ commitVisible(); }
  else {
    document.querySelectorAll('.rl,.fade').forEach(function(el){ io.observe(el); });
    setTimeout(function(){
      document.querySelectorAll('.hero .rl,.hero .fade').forEach(function(el){ el.classList.add('in'); });
    }, 60);
    setTimeout(function(){
      var sp = document.querySelector('.hero .rl > span');
      if(sp){ var t = getComputedStyle(sp).transform;
        if(t !== 'none'){ var p = t.slice(t.indexOf('(')+1).split(','); var ty = parseFloat(p[5]);
          if(isFinite(ty) && Math.abs(ty) > 2) commitVisible(); } }
      if(!alive) commitVisible();
    }, 1400);
  }

  /* ---------- square cursor ---------- */
  if(fine && !reduce){
    document.body.classList.add('cursor-on');
    var cur = document.getElementById('cur');
    var cx=innerWidth/2, cy=innerHeight/2, tx=cx, ty=cy;
    window.addEventListener('mousemove', function(e){ tx=e.clientX; ty=e.clientY; });
    (function loop(){ cx+=(tx-cx)*0.25; cy+=(ty-cy)*0.25;
      cur.style.transform='translate('+cx+'px,'+cy+'px) translate(-50%,-50%)'; requestAnimationFrame(loop); })();
    document.addEventListener('mouseleave', function(){ cur.classList.add('hide'); });
    document.addEventListener('mouseenter', function(){ cur.classList.remove('hide'); });
    document.querySelectorAll('a,button,.work-row,.svc-row,.nl').forEach(function(el){
      el.addEventListener('mouseenter', function(){ cur.classList.add('big'); });
      el.addEventListener('mouseleave', function(){ cur.classList.remove('big'); });
    });
  }

  /* ---------- floating square thumbnail (delayed follow) ---------- */
  if(fine){
    var thumb = document.getElementById('thumb');
    var tile = thumb.querySelector('.tile');
    var tBig = thumb.querySelector('.big');
    var tTag = thumb.querySelector('.tag');
    var mx=innerWidth/2, my=innerHeight/2, thx=mx, thy=my, vis=false;
    window.addEventListener('mousemove', function(e){ mx=e.clientX; my=e.clientY; }, {passive:true});
    (function follow(){ thx+=(mx-thx)*0.12; thy+=(my-thy)*0.12;
      thumb.style.left=thx+'px'; thumb.style.top=thy+'px'; requestAnimationFrame(follow); })();
    document.querySelectorAll('.work-row').forEach(function(row){
      row.addEventListener('mouseenter', function(){
        var img = row.getAttribute('data-thumb');
        if(img){
          tile.style.background = '#0E0E0E';
          tile.style.backgroundImage = 'url("' + img + '")';
          tile.style.backgroundSize = 'cover';
          tile.style.backgroundPosition = 'center';
          tBig.textContent = '';
        } else {
          tile.style.backgroundImage = 'none';
          tile.style.background = row.getAttribute('data-color');
          tBig.textContent = row.getAttribute('data-en-name') || '';
        }
        tTag.textContent = row.getAttribute('data-tag') || 'Project Visual';
        vis = true; thumb.classList.add('show');
      });
      row.addEventListener('mouseleave', function(){ vis=false; thumb.classList.remove('show'); });
    });
  }

  /* ---------- mobile nav ---------- */
  var burger = document.querySelector('.burger');
  var mobnav = document.querySelector('.mobnav');
  if(burger){
    burger.addEventListener('click', function(){
      var open = mobnav.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobnav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mobnav.classList.remove('open'); document.body.style.overflow=''; });
    });
  }

  /* ---------- header hide-on-scroll ---------- */
  var hd = document.querySelector('header'), last=0;
  hd.style.transition='transform .5s cubic-bezier(.16,1,.3,1)';
  window.addEventListener('scroll', function(){
    var y=window.scrollY;
    hd.style.transform = (y>200 && y>last) ? 'translateY(-100%)' : 'translateY(0)';
    last=y;
  }, {passive:true});

  /* ---------- year ---------- */
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  /* ---------- floating scroll-to-top ---------- */
  var toTop=document.getElementById('toTop');
  if(toTop){
    var onScrollTop=function(){ toTop.classList.toggle('show', (window.scrollY||window.pageYOffset) > 600); };
    window.addEventListener('scroll', onScrollTop, {passive:true});
    onScrollTop();
    toTop.addEventListener('click', function(){
      window.scrollTo({ top:0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* ---------- parallax (fixed-image reveal, vikoone-style) ---------- */
  var px = [].slice.call(document.querySelectorAll('[data-parallax]'));
  if(px.length && !reduce){
    var ticking = false;
    function updPx(){
      var vh = window.innerHeight;
      px.forEach(function(el){
        var f = el.parentElement.getBoundingClientRect();
        var prog = (f.top + f.height/2 - vh/2) / (vh/2 + f.height/2); // ~ -1..1
        prog = Math.max(-1, Math.min(1, prog));
        el.style.transform = 'translateY(' + (prog * 14) + '%)';
      });
      ticking = false;
    }
    function onPx(){ if(!ticking){ ticking = true; requestAnimationFrame(updPx); } }
    window.addEventListener('scroll', onPx, {passive:true});
    window.addEventListener('resize', onPx);
    updPx();
  }

  /* ---------- page transition ---------- */
  if(!reduce){
    var pf=document.createElement('div'); pf.className='page-fade'; document.body.appendChild(pf);
    setTimeout(function(){ pf.classList.add('out'); }, 20);
    setTimeout(function(){ pf.classList.add('gone'); }, 640);
    document.addEventListener('click', function(e){
      var a=e.target.closest && e.target.closest('a'); if(!a) return;
      var href=a.getAttribute('href'); if(!href || a.target==='_blank') return;
      if(href.charAt(0)==='#' || /^(mailto:|tel:|https?:)/.test(href)) return;
      if(!/\.html(\?|#|$)/.test(href)) return;
      if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0) return;
      e.preventDefault();
      pf.classList.remove('gone'); void pf.offsetWidth; pf.classList.remove('out');
      setTimeout(function(){ window.location.href=href; }, 360);
    });
    window.addEventListener('pageshow', function(ev){ if(ev.persisted){ pf.classList.add('out','gone'); } });
  }
})();
