/* ========= Paths & Config ========= */
const BASE = './';                          // خليها نسبية لتفادي مشاكل المسارات
const IMG  = BASE + 'images/';
const DL   = BASE + 'downloads/';

const SPONSOR_EMAIL     = 'iqitg.g@gmail.com';
const EVENT_LOGO        = IMG + 'temp_logo(1).png';
const REGISTRATION_OPEN = false;
const LINKS_HUB_URL     = 'https://bio.link/iqitg?fbclid=PAZXh0bgNhZW0CMTEAAacjFRFchKzOpaupDDnnQI2VZWd5SWuXqpWqm73v32V87BgjbUWLHtDaQulBLA_aem_hcW-cw1_-FUAh_RFIb6SlQ';
const YT_VIDEO_ID       = 'Te1lV7wvG60';

/* ========= Texts (AR/EN) ========= */
const texts = {
  ar: {
    brand: 'IQGC — Iraqi Gamers Connect',
    nav: {home:'الرئيسية',about:'من نحن',recap2025:'نجاحات 2025',gallery:'صور 2025',media:'فيديو وتوثيق',magazine:'المجلة',contact:'تواصل'},
    hero: {
      kicker:'مهرجان الألعاب العراقي',
      title:'IQGC — Iraqi Gamers Connect',
      subtitle:'النسخة القادمة قيد التحضير — تابعنا لتكون أول من يعرف.',
      meta:{where:'الموقع',when:'التاريخ',who:'الحضور المتوقع'},
      venue:'سيُعلن قريبًا', date:'سيُعلن قريبًا', attendees:'+1500 زائر (تقديري)',
      registerClosed:'التسجيل مغلق حالياً', registerNote:'سيفتح قريباً — تابع التحديثات'
    },
    about: {
      title:'من نحن',
      body1:'تجمع تكنولوجيا العراق هي صفحة تقنية تأسست عام 2021، وهي جزء من شبكة "التجمع" التي انطلقت سنة 2011، من تأسيس المهندس حيدر عبد الستار جبار. تقدم الصفحة محتوى تقني مبسّط ومواكب يشمل أخبار، فيديوهات قصيرة، بوستات تعليمية، وكل ما يخص التقنية العامة، الذكاء الاصطناعي، والألعاب وتطويرها. هدفنا إيصال المعلومة بسهولة وخلق تواصل فعّال بين المهتمين بالتقنية داخل العراق.',
      body2:'بالإضافة للصفحة، توجد مجموعة خاصة على فيسبوك تجمع المهتمين والمختصين في مختلف المجالات التقنية، لتبادل المعرفة، طرح الأسئلة، ومشاركة الحلول للمشاكل التقنية اليومية، مما يساهم في خلق مجتمع تفاعلي حقيقي يدعم بعضه البعض.',
      image: IMG + 'aboutus2.jpg',
      linksBtn:'روابطنا'
    },
    what: {
      title:'ماهو IQGC؟',
      p1:'IQGC هو اختصار لـ Iraqi Gamers Connect، حــدث سنــوي يهتــــم بصناعـة الألعاب، يجمع المطورين، الفنانين، اللاعــــبين، والمهتــــمين، للأحتفــــاء بالإبداع المحلي، ومناقشة تطورات القـــطاع، وعــــرض مشاريع الألعاب العراقية، ضمن برنامج متنوع من المعــــارض والجلســـات وورش العمل.',
      p2:'بالنسبة للنسخة الأولى من هذا الحدث 2025 فسيكون أول حــدث مـــن نوعه يُنظّم لتوثيق وعرض تاريخ وتطور صناعة الألعاب في العراق. يأتـي الحدث كمبادرة من تجمع تكنولوجيا العراق بهــدف جمـــع المــــطورين، الباحثين، والمهتــــمين بمجال الألعاب، في مساحة واحدة للاحتفاء بجهود الماضي واستشراف مستقبل هذه الصناعـــة محـــليًا.',
      p3:'يمثل IQGC 2025 محطة محورية في مسيرة توثيق المحتوى الإبداعـي العــراقي، حــيــث يجمع بين المعرض، الجلسات الحوارية، العـروض التفاعــلية، والمـــجالات التعليمية، في تجربة ثقافية وتاريخية فريدة.',
      image: IMG + 'about-us.jpg'
    },
    recap: {
      title:'نسخة 2025 — البداية التاريخية',
      bullets:['+850 تسجيل، أكثر من 240 حضور حضوري','انتشار رقمي تجاوز 3 مليون','تركيز على تاريخ الألعاب بالعراق + معارض وورش عمل','الموقع: The Station — بغداد (11 و 13 تموز 2025)'],
      stats:[{label:'التسجيلات',value:'900+'},{label:'حضور حضوري',value:'250+'},{label:'الوصول الرقمي',value:'3M+'}]
    },
    gallery:{title:'صور من IQGC 2025', more:'عرض المزيد'},
    media:{title:'فيديو توثيقي — إبراز اللحظات', desc:'لقطات من الفعاليات واللقاءات لتوثيق الأجواء'},
    magazine:{title:'مجلة تاريخ الألعاب العراقية',desc:'مجلة شاملة تحتوي مقالات وصور ومقابلات توثق مسيرة الألعاب العراقية من التسعينات حتى اليوم.',download:'حمّل النسخة PDF', note:'المجلة مجانية للتحميل'},
    contact:{title:'تواصل معنا', sponsorLine:'للرعاية والشراكات — راسلونا على'},
    footer:{made:'تم تصميم الموقع بواسطة بكر الجنابي',socials:'تابعنا'}
  },
  en: {
    brand: 'IQGC — Iraqi Gamers Connect',
    nav: {home:'Home',about:'About',recap2025:'2025 Recap',gallery:'Photos',media:'Video',magazine:'Magazine',contact:'Contact'},
    hero: {
      kicker:"Iraq's Games & Dev Festival",
      title:'IQGC — Connecting Gamers & Devs in Iraq',
      subtitle:'Next edition in progress — follow us to stay updated.',
      meta:{where:'Venue',when:'Date',who:'Expected'},
      venue:'TBA', date:'TBA', attendees:'+1500 attendees (est.)',
      registerClosed:'Registration Closed', registerNote:'Opens soon — follow updates.'
    },
    about: {
      title:'Who we are',
      body1:"Iraq Technology Community is a tech page established in 2021, and part of the “Tajammu’” network launched in 2011 by engineer Haider Abdul Sattar Jabbar. We provide simplified, up-to-date tech content including news, short videos, educational posts, and everything related to general technology, AI, and game development. Our goal is to deliver information easily and foster effective communication among tech enthusiasts across Iraq.",
      body2:"In addition, we run a dedicated Facebook group that brings together interested people and specialists in various tech fields to exchange knowledge, ask questions, and share solutions for everyday technical issues — helping build a truly interactive community that supports one another.",
      image: IMG + 'about-us.jpg',
      linksBtn:'Our Links'
    },
    what: {
      title:'What is IQGC?',
      p1:"IQGC (Iraqi Gamers Connect) is an annual event dedicated to the gaming industry, bringing together developers, artists, gamers, and enthusiasts to celebrate local creativity, discuss industry developments, and showcase Iraqi game projects through a diverse program of exhibitions, talks, and workshops.",
      p2:"The first edition, IQGC 2025, is the first of its kind focused on documenting and showcasing the history and evolution of the gaming industry in Iraq. It is an initiative by Iraq Technology Community to gather developers, researchers, and gaming enthusiasts in one space to honor past efforts and explore the future of this industry locally.",
      p3:"IQGC 2025 marks a pivotal milestone in preserving Iraq’s creative content, combining exhibitions, panel discussions, interactive showcases, and educational tracks into a unique cultural and historical experience.",
      image: IMG + 'aboutus2.jpg'
    },
    recap: {
      title:'2025 — The Historic Pilot',
      bullets:['900+ registrations','3M+ digital reach',"Focus on Iraq's game history",'Venue: The Station — Baghdad (July 11 & 13, 2025)'],
      stats:[{label:'Registrations',value:'900+'},{label:'In-person',value:'250+'},{label:'Digital reach',value:'3M+'}]
    },
    gallery:{title:'Photos from 2025', more:'View more'},
    media:{title:'Highlight Video', desc:'Short scenes capturing event vibes'},
    magazine:{title:'Iraqi Games History Magazine',desc:'A magazine with articles, visuals, and interviews documenting Iraqi gaming from the 90s to today.',download:'Download PDF', note:'Free to download'},
    contact:{title:'Get in touch', sponsorLine:'For sponsorships — email us at'},
    footer:{made:'Designed by Bakr Al-Janabi',socials:'Follow us'}
  }
};

/* =========================
   Helpers
   ========================= */
const $ = id => document.getElementById(id);
const setText = (id, txt)=>{ const el=$(id); if(el) el.textContent = txt; };

function setImageWithFallback(el, candidates, placeholderCSS=true){
  if(!el || !candidates?.length) return;
  let i=0;
  const tryNext = ()=>{
    if(i>=candidates.length){
      if(placeholderCSS){
        el.removeAttribute('src');
        el.style.background='linear-gradient(135deg,#1f1a3e,#16142a)';
        el.style.minHeight='180px';
        el.alt = el.alt || 'image not available';
      }
      return;
    }
    const url = candidates[i++];
    el.src = encodeURI(url);
  };
  el.onerror = tryNext;
  tryNext();
}

/* =========================
   Populate UI
   ========================= */
function populate(lang='en'){
  const t = texts[lang];
  document.documentElement.lang = lang==='ar' ? 'ar' : 'en';
  document.documentElement.dir  = lang==='ar' ? 'rtl' : 'ltr';

  const logoEl = $('event-logo'); if(logoEl) logoEl.src = EVENT_LOGO;

  // Nav
  setText('brand', t.brand);
  setText('nav-home', t.nav.home); setText('nav-about', t.nav.about); setText('nav-recap', t.nav.recap2025);
  setText('nav-gallery', t.nav.gallery); setText('nav-media', t.nav.media); setText('nav-magazine', t.nav.magazine); setText('nav-contact', t.nav.contact);

  const m = document.querySelector('#mobileMenu .m-links');
  if(m){
    const ids=['home','about','recap','gallery','media','magazine','contact'];
    const labels=[t.nav.home,t.nav.about,t.nav.recap2025,'Photos',t.nav.media,t.nav.magazine,t.nav.contact];
    m.innerHTML = ids.map((id,i)=>{
      const href = id==='gallery' ? 'gallery.html' : `#${id}`;
      return `<a href="${href}" data-close>${labels[i]}</a>`;
    }).join('');
  }

  // Hero
  setText('hero-kicker', t.hero.kicker); setText('hero-title', t.hero.title); setText('hero-sub', t.hero.subtitle);
  setText('meta-where', t.hero.meta.where); setText('meta-when', t.hero.meta.when); setText('meta-who', t.hero.meta.who);
  setText('meta-venue', t.hero.venue); setText('meta-date', t.hero.date); setText('meta-att', t.hero.attendees);

  const regBtn=$('registerBtn'); const regNote=$('registerNote');
  if(regBtn){
    if(REGISTRATION_OPEN){
      regBtn.classList.remove('disabled'); regBtn.disabled=false; regBtn.ariaDisabled='false';
      regBtn.textContent = (lang==='ar' ? 'سجل الآن' : 'Register Now');
      regBtn.title = regBtn.textContent; if(regNote) regNote.style.display='none';
    } else {
      regBtn.classList.add('disabled'); regBtn.disabled=true; regBtn.ariaDisabled='true';
      regBtn.textContent = t.hero.registerClosed; regBtn.title = regBtn.textContent;
      if(regNote){ regNote.style.display='inline'; regNote.textContent = t.hero.registerNote; }
    }
  }

  // About
  setText('about-title', t.about.title);
  setText('about-body-1', t.about.body1);
  const ab2=$('about-body-2');
  if(t.about.body2 && t.about.body2.trim().length>0){ ab2.style.display='block'; ab2.textContent=t.about.body2; }
  else { ab2.style.display='none'; ab2.textContent=''; }
  setImageWithFallback($('about-img'), [t.about.image, IMG+'aboutus2.jpg', IMG+'about-us.jpg' ]);

  const linksBtn=$('links-btn'); if(linksBtn){ linksBtn.textContent=t.about.linksBtn; linksBtn.href=LINKS_HUB_URL; }

  // What
  setText('what-title', t.what.title);
  setText('what-body-1', t.what.p1);
  setText('what-body-2', t.what.p2);
  setText('what-body-3', t.what.p3);
  setImageWithFallback($('what-img'), [t.what.image, IMG+'about-us.jpg', IMG+'aboutus2.jpg' ]);

  // Recap
  setText('recap-title', t.recap.title);
  const ul=$('recap-bullets'); if(ul){ ul.innerHTML=''; t.recap.bullets.forEach(b=>{const li=document.createElement('li'); li.textContent=b; ul.appendChild(li)})}
  const stats=$('recap-stats'); if(stats){ stats.innerHTML=''; t.recap.stats.forEach(s=>{const d=document.createElement('div'); d.className='stat'; d.innerHTML=`<div class="v">${s.value}</div><div class="l">${s.label}</div>`; stats.appendChild(d)})}

  // Gallery (preview + button)
  setText('gallery-title', t.gallery.title);
  const moreBtn=$('viewMoreBtn'); if(moreBtn){ moreBtn.textContent=t.gallery.more; moreBtn.href='gallery.html'; }

  // Media & Magazine
  setText('media-title', t.media.title); setText('media-desc', t.media.desc);
  setText('mag-title', t.magazine.title); setText('mag-desc', t.magazine.desc);
  const magBtn=$('mag-btn'); if(magBtn){ magBtn.textContent=t.magazine.download; magBtn.href= DL+'IraqiGamesHistoryMagazine.pdf'; }

  // Contact & Footer
  setText('contact-title', t.contact.title); setText('contact-line', t.contact.sponsorLine);
  const mail=$('contact-email'); if(mail){ mail.textContent=SPONSOR_EMAIL; mail.href=`mailto:${SPONSOR_EMAIL}`; }
  const langBtn=$('langBtn'); if(langBtn) langBtn.textContent = lang==='ar' ? 'EN' : 'AR';
}

/* =========================
   Static mounts (4 صور في الصفحة الرئيسية)
   ========================= */
function mountStatic(){
  const g=$('gallery-grid'); if(g){
    [1,2,3,4].map(n=>`${IMG}iqgc-2025-${n}.jpg`).forEach(src=>{
      const f=document.createElement('div'); f.className='frame';
      f.innerHTML=`<img loading="lazy" src="${encodeURI(src)}" alt="">`;
      g.appendChild(f);
    });
  }
  const m=$('mag-grid'); if(m){
    [ 'magazine-cover.jpg','mag1.jpg','mag2.jpg' ].map(n=>IMG+n).forEach(src=>{
      const d=document.createElement('div'); d.className='mag';
      d.innerHTML=`<img loading="lazy" src="${encodeURI(src)}" alt="">`;
      m.appendChild(d);
    });
  }
  const s=$('sponsors'); if(s){
    ['sponsor1.png','sponsor2.png','sponsor3.png','sponsor4.png','sponsor5.png','sponsor6.png','sponsor7.png','sponsor8.png']
      .map(n=>IMG+n).forEach(src=>{
        const d=document.createElement('div'); d.className='s-logo';
        d.innerHTML=`<img loading="lazy" src="${encodeURI(src)}" alt="sponsor">`;
        s.appendChild(d);
      });
  }
}

/* =========================
   YouTube Autoplay + fade-in
   ========================= */
function mountAutoplayVideo(){
  const wrap = $('videoWrap');
  if(!wrap || !YT_VIDEO_ID) return;
  const params = new URLSearchParams({
    autoplay:'0', mute:'0', playsinline:'1', controls:'1',
    rel:'0', modestbranding:'1', loop:'1', playlist:YT_VIDEO_ID
  });
  wrap.innerHTML = `<iframe width="100%" height="100%"
      src="https://www.youtube.com/embed/${YT_VIDEO_ID}?${params.toString()}"
      title="IQGC Highlights" frameborder="0"
      allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`;
  const ifr = wrap.querySelector('iframe');
  ifr.addEventListener('load', ()=> wrap.classList.add('loaded'));
}

/* =========================
   Scroll Reveal
   ========================= */
function mountReveal(){
  const els = document.querySelectorAll('.reveal, .reveal-stagger');

  // فعّل مباشرة العناصر الظاهرة عند التحميل (مثل الهيدر)
  els.forEach(el=>{
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if(inView) el.classList.add('show');
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, {root:null, rootMargin:'0px', threshold:0}); // 👈 عتبة 0 وأسهل تقاطع

  els.forEach(el=>{
    if(!el.classList.contains('show')) io.observe(el);
  });
}

/* =========================
   Counters for Recap
   ========================= */
function animateCounter(el, target, duration=900){
  const start = 0; const t0 = performance.now();
  const step = (now)=>{
    const p = Math.min(1, (now - t0)/duration);
    el.textContent = Math.floor(start + (target - start) * p).toLocaleString();
    if(p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function mountRecapCounters(){
  const counters = document.querySelectorAll('.stat .v');
  counters.forEach(el=>{
    const text = el.textContent.trim();
    const suffix = text.replace(/[0-9]/g,'');   // يجيب أي شيء مو رقم (مثل + أو M)
    const target = parseInt(text);              // الرقم نفسه

    let current = 0;
    const step = Math.ceil(target / 600);        // سرعة العد

    const update = ()=>{
      current += step;
      if(current >= target){
        el.textContent = target + suffix;       // رجّع suffix
      } else {
        el.textContent = current + suffix;
        requestAnimationFrame(update);
      }
    };
    update();
  });
}

/* =========================
   Simple Hero Parallax
   ========================= */
function mountParallax(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  let ticking = false;
  window.addEventListener('scroll', ()=>{
    if(ticking) return;
    requestAnimationFrame(()=>{
      const y = window.scrollY || 0;
      hero.style.backgroundPosition = `center ${-y*0.08}px`;
      ticking = false;
    });
    ticking = true;
  }, {passive:true});
}

/* =========================
   Lang toggle + Mobile menu
   ========================= */
function mountHeaderUX(){
  let current = 'en';
  const langBtn=$('langBtn');
  if(langBtn){
    langBtn.addEventListener('click', ()=>{ current = current==='ar' ? 'en':'ar'; populate(current); });
  }
  const menuBtn=$('menuBtn');
  const mobileMenu=$('mobileMenu');
  if(menuBtn && mobileMenu){
    const closeMenu=()=>mobileMenu.classList.remove('open');
    menuBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
    mobileMenu.addEventListener('click',(e)=>{ if(e.target.matches('[data-close]')) closeMenu(); });
  }
}

/* =========================
   Init
   ========================= */
document.addEventListener('DOMContentLoaded', ()=>{
  mountStatic();
  populate('en');
  mountAutoplayVideo();
  mountReveal();
  mountRecapCounters();
  mountParallax();
  mountHeaderUX();
});