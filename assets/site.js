// Reno Fresh — Fencing Wellington landing page
(function(){
  var CFG = window.RF_CONFIG || {};
  var PHONE = '04 888 9788', TEL = 'tel:+6448889788', EMAIL = 'hi@renofresh.nz';
  window.dataLayer = window.dataLayer || [];
  var track = function(ev, data){ var o = { event: ev }; for(var k in data) o[k] = data[k]; window.dataLayer.push(o); };

  var I = {
    paling:'<path d="M4 21V6l2-3 2 3v15M10 21V6l2-3 2 3v15M16 21V6l2-3 2 3v15M2 10h20M2 16h20"/>',
    slat:'<path d="M3 3v18M21 3v18M3 6h18M3 10h18M3 14h18M3 18h18"/>',
    alu:'<path d="M3 21V4M21 21V4M3 7h18M3 18h18M7 7v11M11 7v11M15 7v11M19 7v11"/>',
    pvc:'<path d="M4 21V8l3-4 3 4v13M14 21V8l3-4 3 4v13M4 11h16M4 17h16"/>',
    repair:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z"/>',
    gate:'<path d="M3 21V5M21 21V5M3 8h18M3 19h18M6 8l6 11 6-11"/><circle cx="12" cy="13" r="1"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    swap:'<path d="M7 16H3v4M17 8h4V4M3 20l6-6M21 4l-6 6M14 20h7v-7M10 4H3v7"/>',
    ruler:'<path d="M3 17 17 3l4 4L7 21l-4-4ZM7 13l2 2M10 10l2 2M13 7l2 2"/>',
    flat:'<path d="M2 18h20M5 18V10M19 18V10M5 12h14"/>',
    slope:'<path d="M2 20 22 8v12H2ZM6 17.6V12M12 14V8.5M18 10.4V5"/>',
    wall:'<path d="M2 20h20M4 20v-6h16v6M4 17h16M9 14v3M15 14v3M14 20v-3M8 20v-3M6 14V6M18 14V4"/>',
    q:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8ZM7.5 7.5h.01"/>',
    lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'
  };
  var svg = function(k){ return '<svg class="ico" viewBox="0 0 24 24">'+I[k]+'</svg>'; };

  var STEPS = [
    { field:'Fence Type', title:'What do you need?', sub:'Tap one — takes about 30 seconds.', cls:'three', opts:[
      ['Timber Paling','paling','Timber paling'],['Hit & Miss / Slat','slat','Hit &amp; miss / slat'],['Aluminium','alu','Aluminium'],
      ['PVC','pvc','PVC'],['Fence Repair','repair','Repair / storm damage'],['Gate','gate','Gate']]},
    { field:'Job', title:'Is this a new or replacement fence?', sub:'Helps us plan removal and materials.', skipIf:{ 'Fence Type':'Fence Repair' }, opts:[
      ['New fence','plus','New fence'],['Replace old fence','swap','Replace an old fence'],['Extend existing','ruler','Extend existing'],['Not sure','q','Not sure yet']]},
    { field:'Approx Length', title:'Roughly how long?', sub:'A best guess is fine — we measure on site.', opts:[
      ['Under 10m','ruler','Under 10m'],['10–30m','ruler','10–30m'],['30m+','ruler','30m+'],['Not sure','q','Not sure']]},
    { field:'Ground', title:'What\'s the ground like?', sub:'Wellington sections are rarely flat — we\'re used to it.', opts:[
      ['Flat','flat','Mostly flat'],['Sloped','slope','Sloped'],['Retaining wall','wall','Retaining wall involved'],['Not sure','q','Not sure']]},
    { field:'Timeline', title:'When would you like it done?', sub:'No pressure — pricing-only enquiries are welcome.', opts:[
      ['ASAP','bolt','ASAP'],['Within a month','cal','Within a month'],['1–3 months','clock','1–3 months'],['Just getting prices','tag','Just getting prices']]}
  ];
  var TOTAL = STEPS.length + 1;

  var renderForm = function(el, n){
    var h = '<div class="qf-top"><h3>'+(el.dataset.title || 'Get your free fence quote')+'</h3><span class="qf-count">Step 1 of '+TOTAL+'</span></div><div class="qf-bar"><span></span></div>';
    STEPS.forEach(function(s, i){
      h += '<div class="fslide'+(i===0?' active':'')+'" data-s="'+(i+1)+'" data-field="'+s.field+'"><h4>'+s.title+'</h4><p class="fsub">'+s.sub+'</p><div class="og '+(s.cls||'')+'">';
      s.opts.forEach(function(o){ h += '<button type="button" class="ob" data-v="'+o[0]+'"><span class="oico">'+svg(o[1])+'</span><span class="olbl">'+o[2]+'</span></button>'; });
      h += '</div><div class="fnav">'+(i>0?'<button type="button" class="fb">&larr; Back</button>':'')+'</div></div>';
    });
    h += '<form class="fslide" data-s="'+TOTAL+'" novalidate><h4>Where should we send your quote?</h4><p class="fsub">We\'ll be in touch to confirm details and book a measure.</p>'+
      '<input class="finp" name="Name" placeholder="Your name *" autocomplete="name" required aria-label="Name">'+
      '<div class="frow"><input class="finp" name="Phone" type="tel" placeholder="Phone *" autocomplete="tel" required aria-label="Phone"><input class="finp" name="Email" type="email" placeholder="Email *" autocomplete="email" required aria-label="Email"></div>'+
      '<input class="finp" name="Suburb" placeholder="Suburb *" autocomplete="address-level2" required aria-label="Suburb">'+
      '<textarea class="finp" name="Notes" placeholder="Anything else? e.g. shared boundary, dog, old fence removal" aria-label="Notes"></textarea>'+
      '<input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="display:none">'+
      '<div class="fnav"><button type="button" class="fb">&larr; Back</button><button type="submit" class="fn">Get My Free Quote &rarr;</button></div></form>';
    h += '<div class="fslide" data-s="done"><div class="qf-done"><div class="ok">&#10003;</div><h4>Thanks — you\'re all set!</h4><p>Your fence details are with the Reno Fresh team and we\'ll be in touch shortly. Want to talk it through now?</p><a class="btn btn-p" href="'+TEL+'">Call '+PHONE+'</a></div></div>';
    h += '<div class="qf-foot">'+svg('lock')+' Free, no-obligation quote. We respect your privacy.</div>';
    el.innerHTML = h;
  };

  var forms = [];
  document.querySelectorAll('.qform').forEach(function(el, n){
    renderForm(el, n);
    var cs = 1, fd = {}, started = false;
    var bar = el.querySelector('.qf-bar span'), count = el.querySelector('.qf-count');
    var skipped = function(step){
      var s = STEPS[step-1]; if(!s || !s.skipIf) return false;
      for(var k in s.skipIf){ if(fd[k] === s.skipIf[k]) return true; }
      return false;
    };
    var show = function(step){
      cs = step;
      el.querySelectorAll('.fslide').forEach(function(s){ s.classList.toggle('active', s.dataset.s === String(step)); });
      var shown = step === 'done' ? TOTAL : step;
      bar.style.width = (step === 'done' ? 100 : ((shown-1)/TOTAL*100 + 6)) + '%';
      count.textContent = step === 'done' ? 'Done' : (step === TOTAL ? 'Last step' : 'Step '+shown+' of '+TOTAL);
    };
    var next = function(){ var s = cs+1; while(s < TOTAL && skipped(s)) s++; show(s); };
    var back = function(){ var s = cs-1; while(s > 1 && skipped(s)) s--; show(Math.max(1,s)); };
    var pick = function(field, value, advance){
      fd[field] = value;
      var slide = el.querySelector('.fslide[data-field="'+field+'"]');
      if(slide) slide.querySelectorAll('.ob').forEach(function(b){ b.classList.toggle('sel', b.dataset.v === value); });
      if(!started){ started = true; track('quote_form_start', { form_location: el.dataset.loc || 'page' }); }
      if(advance){ if(slide) cs = +slide.dataset.s; next(); }
    };
    el.querySelectorAll('.ob').forEach(function(b){
      b.addEventListener('click', function(){
        var field = b.closest('.fslide').dataset.field;
        b.classList.add('sel');
        setTimeout(function(){ pick(field, b.dataset.v, true); }, 220);
      });
    });
    el.querySelectorAll('.fb').forEach(function(b){ b.addEventListener('click', back); });

    var form = el.querySelector('form');
    var err = function(msg){
      var e = form.querySelector('.qf-err');
      if(!e){ e = document.createElement('div'); e.className = 'qf-err'; form.appendChild(e); }
      e.innerHTML = msg;
    };
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var bad = false;
      form.querySelectorAll('[required]').forEach(function(i){
        var ok = i.value.trim() && (i.type !== 'email' || /\S+@\S+\.\S+/.test(i.value));
        i.classList.toggle('err', !ok); if(!ok) bad = true;
      });
      if(bad){ err('Please fill in the highlighted fields so we can send your quote.'); return; }
      if(form.botcheck.checked){ show('done'); return; }
      var fallback = 'Sorry, that didn\'t send. Please call <a href="'+TEL+'">'+PHONE+'</a> or email <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>.';
      var payload = { subject:'New fencing quote request — '+(fd['Fence Type']||'Fencing')+' ('+form.Suburb.value.trim()+')', from_name:'Reno Fresh Fencing Landing Page', Page: location.href };
      STEPS.forEach(function(s){ if(fd[s.field]) payload[s.field] = fd[s.field]; });
      ['Name','Phone','Email','Suburb','Notes'].forEach(function(k){ if(form[k].value.trim()) payload[k] = form[k].value.trim(); });
      payload.email = payload.Email; payload.replyto = payload.Email;
      if(!CFG.web3formsKey){ console.warn('RF_CONFIG.web3formsKey is not set'); err(fallback); return; }
      payload.access_key = CFG.web3formsKey;
      var btn = form.querySelector('.fn'), txt = btn.innerHTML;
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch('https://api.web3forms.com/submit', { method:'POST', headers:{ 'Content-Type':'application/json', Accept:'application/json' }, body: JSON.stringify(payload) })
        .then(function(r){ return r.json(); })
        .then(function(j){
          btn.disabled = false; btn.innerHTML = txt;
          if(j && j.success){ track('generate_lead', { form_location: el.dataset.loc || 'page', fence_type: fd['Fence Type'] || '' }); show('done'); }
          else err(fallback);
        })
        .catch(function(){ btn.disabled = false; btn.innerHTML = txt; err(fallback); });
    });
    forms.push({ el: el, pick: pick });
  });

  // "Quote this fence" buttons: preselect fence type in the nearest form and jump to it
  document.querySelectorAll('[data-quote]').forEach(function(b){
    b.addEventListener('click', function(ev){
      ev.preventDefault();
      var f = forms[0]; if(!f) return;
      f.pick('Fence Type', b.dataset.quote, true);
      f.el.scrollIntoView({ behavior:'smooth', block:'center' });
    });
  });

  // Project gallery thumbs
  document.querySelectorAll('.proj-img').forEach(function(box){
    var main = box.querySelector(':scope > img');
    box.querySelectorAll('.thumbs button').forEach(function(t){
      t.addEventListener('click', function(){
        main.src = t.dataset.src; main.alt = t.querySelector('img').alt;
        box.querySelectorAll('.thumbs button').forEach(function(x){ x.classList.toggle('on', x === t); });
      });
    });
  });

  // Nav shadow + floating CTA (after hero, hidden while a form or the footer is on screen)
  var nav = document.getElementById('nav'), flt = document.querySelector('.float'), hero = document.querySelector('.hero');
  var blockers = Array.prototype.slice.call(document.querySelectorAll('.qform, .foot'));
  var inView = function(e){ var r = e.getBoundingClientRect(); return r.top < innerHeight - 40 && r.bottom > 80; };
  var onScroll = function(){
    nav.classList.toggle('scrolled', scrollY > 20);
    if(flt){
      var past = scrollY > hero.offsetHeight - 120;
      flt.classList.toggle('show', past && !blockers.some(inView));
    }
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive:true });
  addEventListener('resize', onScroll, { passive:true });

  // Track calls
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a){ a.addEventListener('click', function(){ track('phone_click', { link_location: a.dataset.loc || 'page' }); }); });

  // Fade-in
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('vis'); io.unobserve(x.target); } }); }, { threshold:.08, rootMargin:'0px 0px -30px 0px' });
    document.querySelectorAll('.fade').forEach(function(e){ io.observe(e); });
  } else document.querySelectorAll('.fade').forEach(function(e){ e.classList.add('vis'); });
})();
