/* ====== Config ====== */
const BASE = './';                 // اجعلها نسبية لتفادي مشاكل الوصول
const IMG  = BASE + 'images/album/';

// لو أسماءك مختلفة، ضعها هنا. هنا مولّد 143 صورة باسم نمطي:
const FILES = Array.from({length:143}, (_,i)=> `iqgc-2025-${i+1}.jpg`);

// إعدادات التقسيم
const BATCH_SIZE = 24;             // كم صورة بكل دفعة
let loaded = 0;                    // عدد الصور المحمّلة حتى الآن

/* ====== Elements ====== */
const grid = document.getElementById('big-gallery');
const loadMoreBtn = document.getElementById('loadMore');
const statusEl = document.getElementById('status');

/* ====== Lightbox ====== */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = lb.querySelector('.close');

function openLightbox(src){
  lbImg.src = encodeURI(src);
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
}
function closeLightbox(){
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  lbImg.removeAttribute('src');
}
lbClose.addEventListener('click', closeLightbox);
lb.addEventListener('click', (e)=>{ if(e.target === lb) closeLightbox(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && lb.classList.contains('open')) closeLightbox(); });

/* ====== Helpers ====== */
function card(src){
  const d = document.createElement('div');
  d.className = 'frame';
  d.innerHTML = `
    <img
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      src="${encodeURI(src)}"
      alt="IQGC photo"
    >`;
  d.addEventListener('click', ()=> openLightbox(src));
  return d;
}

function updateStatus(){
  statusEl.textContent = `${Math.min(loaded, FILES.length)} / ${FILES.length} photos`;
}

function renderBatch(){
  if(loaded >= FILES.length) return;

  // احسب حدود الدفعة
  const start = loaded;
  const end = Math.min(loaded + BATCH_SIZE, FILES.length);

  // استخدم Fragment لتقليل reflow
  const frag = document.createDocumentFragment();
  for(let i=start; i<end; i++){
    const src = IMG + FILES[i];
    frag.appendChild(card(src));
  }
  grid.appendChild(frag);

  loaded = end;
  updateStatus();

  // عطّل الزر إذا وصلنا للنهاية
  if(loaded >= FILES.length){
    loadMoreBtn.disabled = true;
    loadMoreBtn.classList.add('disabled');
    loadMoreBtn.textContent = 'All loaded';
  }
}

/* ====== Auto-load عند الاقتراب من أسفل الصفحة (اختياري) ====== */
const sentinel = document.createElement('div');
sentinel.style.height = '1px';
grid.after(sentinel);

const io = new IntersectionObserver((entries)=>{
  const ent = entries[0];
  if(ent.isIntersecting && !loadMoreBtn.disabled){
    // حمل دفعة إضافية عند مرور السنتر
    renderBatch();
  }
}, {root:null, rootMargin:'800px 0px', threshold:0});
io.observe(sentinel);

/* ====== Events ====== */
loadMoreBtn.addEventListener('click', renderBatch);

/* ====== Init ====== */
// حمّل دفعتين بالبداية لإحساس أفضل (مثلاً 48 صورة إذا كان BATCH_SIZE=24)
renderBatch();
renderBatch();
