const REVIEW_WIDGET_HTML = String.raw`
<style>
  #aurafx-reviews{position:relative;overflow:hidden;padding:88px 24px 96px;background:linear-gradient(180deg,rgba(16,5,32,0) 0%,rgba(32,9,62,.68) 48%,rgba(10,4,20,.1) 100%);color:#fff;font-family:inherit}
  #aurafx-reviews:before{content:"";position:absolute;inset:auto -120px 12% auto;width:320px;height:320px;border-radius:50%;background:rgba(154,61,255,.18);filter:blur(70px);pointer-events:none}
  .afx-r-wrap{position:relative;z-index:1;max-width:1160px;margin:0 auto}
  .afx-r-kicker{display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border:1px solid rgba(189,104,255,.28);border-radius:999px;background:rgba(255,255,255,.035);color:#d8c7ea;font-size:13px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
  .afx-r-dot{width:8px;height:8px;border-radius:50%;background:#55e8ff;box-shadow:0 0 18px #55e8ff}
  .afx-r-head{display:flex;justify-content:space-between;gap:28px;align-items:end;margin:24px 0 34px}
  .afx-r-title{margin:0;font-size:clamp(38px,6vw,72px);line-height:.98;letter-spacing:-.055em;font-weight:900}
  .afx-r-sub{max-width:520px;margin:0;color:#b8a9c8;font-size:17px;line-height:1.6}
  .afx-r-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:22px;align-items:start}
  .afx-r-panel{border:1px solid rgba(255,255,255,.11);background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025));box-shadow:0 24px 70px rgba(0,0,0,.24);backdrop-filter:blur(18px);border-radius:28px;padding:24px}
  .afx-r-panel h3{margin:0 0 8px;font-size:24px;letter-spacing:-.02em}.afx-r-muted{margin:0 0 20px;color:#9f90b2;line-height:1.5}
  .afx-r-form{display:grid;gap:14px}.afx-r-label{display:grid;gap:7px;color:#d8cfe2;font-size:13px;font-weight:750}
  .afx-r-input,.afx-r-textarea{width:100%;box-sizing:border-box;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(8,3,18,.62);color:#fff;font:inherit;outline:none;padding:14px 15px;transition:.2s ease}
  .afx-r-input:focus,.afx-r-textarea:focus{border-color:rgba(174,80,255,.8);box-shadow:0 0 0 4px rgba(145,55,255,.12)}.afx-r-textarea{min-height:122px;resize:vertical}
  .afx-r-rating{display:flex;gap:7px}.afx-r-star{appearance:none;border:0;background:transparent;color:#675b73;font-size:30px;line-height:1;padding:2px;cursor:pointer;transition:.16s transform,.16s color}.afx-r-star.is-on{color:#ffd45c;text-shadow:0 0 14px rgba(255,212,92,.3)}.afx-r-star:active{transform:scale(.9)}
  .afx-r-submit{border:0;border-radius:17px;padding:15px 18px;background:linear-gradient(135deg,#b247ff,#7027ed);color:#fff;font:inherit;font-size:16px;font-weight:850;cursor:pointer;box-shadow:0 14px 36px rgba(128,46,240,.32)}.afx-r-submit:disabled{opacity:.55;cursor:wait}
  .afx-r-status{min-height:22px;margin:0;font-size:14px;color:#b9aac8}.afx-r-status.ok{color:#77f6c1}.afx-r-status.bad{color:#ff8b9a}
  .afx-r-honey{position:absolute!important;left:-9999px!important;opacity:0!important;pointer-events:none!important}
  .afx-r-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.afx-r-card{min-height:176px;border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:20px;background:rgba(10,4,21,.48);display:flex;flex-direction:column;justify-content:space-between}.afx-r-top{display:flex;align-items:center;justify-content:space-between;gap:12px}.afx-r-name{font-weight:850}.afx-r-stars{color:#ffd45c;font-size:14px;letter-spacing:1px}.afx-r-text{margin:15px 0;color:#ddd4e6;line-height:1.55;overflow-wrap:anywhere}.afx-r-date{font-size:12px;color:#756b80}.afx-r-empty{grid-column:1/-1;padding:34px;border:1px dashed rgba(255,255,255,.12);border-radius:22px;text-align:center;color:#9689a5;background:rgba(255,255,255,.018)}
  @media(max-width:840px){#aurafx-reviews{padding:68px 24px 76px}.afx-r-head{display:block}.afx-r-sub{margin-top:16px}.afx-r-grid{grid-template-columns:1fr}.afx-r-list{grid-template-columns:1fr}.afx-r-panel{border-radius:24px}.afx-r-title{font-size:48px}}
  @media(max-width:420px){#aurafx-reviews{padding-left:18px;padding-right:18px}.afx-r-panel{padding:19px}.afx-r-title{font-size:42px}}
</style>
<section id="aurafx-reviews" aria-labelledby="aurafx-reviews-title">
  <div class="afx-r-wrap">
    <div class="afx-r-kicker"><span class="afx-r-dot"></span>Отзывы клиентов</div>
    <div class="afx-r-head">
      <h2 class="afx-r-title" id="aurafx-reviews-title">Что говорят<br>об AuraFX</h2>
      <p class="afx-r-sub">Оставь честный отзыв о работе. Сообщения проходят автоматическую проверку на мат, ссылки и спам перед публикацией.</p>
    </div>
    <div class="afx-r-grid">
      <div class="afx-r-panel">
        <h3>Оставить отзыв</h3>
        <p class="afx-r-muted">Имя, оценка и пара слов — без регистрации.</p>
        <form class="afx-r-form" id="afx-review-form">
          <label class="afx-r-label">Имя<input class="afx-r-input" name="name" maxlength="40" autocomplete="name" placeholder="Например, Артём" required></label>
          <div class="afx-r-label">Оценка<div class="afx-r-rating" id="afx-rating" aria-label="Оценка от 1 до 5"><button type="button" class="afx-r-star is-on" data-rating="1" aria-label="1 звезда">★</button><button type="button" class="afx-r-star is-on" data-rating="2" aria-label="2 звезды">★</button><button type="button" class="afx-r-star is-on" data-rating="3" aria-label="3 звезды">★</button><button type="button" class="afx-r-star is-on" data-rating="4" aria-label="4 звезды">★</button><button type="button" class="afx-r-star is-on" data-rating="5" aria-label="5 звёзд">★</button></div></div>
          <label class="afx-r-label">Отзыв<textarea class="afx-r-textarea" name="text" minlength="10" maxlength="600" placeholder="Что понравилось в работе?" required></textarea></label>
          <label class="afx-r-honey">Компания<input name="company" tabindex="-1" autocomplete="off"></label>
          <button class="afx-r-submit" type="submit">Отправить отзыв →</button>
          <p class="afx-r-status" id="afx-review-status" aria-live="polite"></p>
        </form>
      </div>
      <div class="afx-r-list" id="afx-review-list"><div class="afx-r-empty">Загружаем отзывы…</div></div>
    </div>
  </div>
</section>
<script>
(()=>{
  const form=document.getElementById('afx-review-form');
  if(!form)return;
  const list=document.getElementById('afx-review-list');
  const status=document.getElementById('afx-review-status');
  const stars=[...document.querySelectorAll('.afx-r-star')];
  let rating=5;
  const paint=()=>stars.forEach((s,i)=>s.classList.toggle('is-on',i<rating));
  stars.forEach(s=>s.addEventListener('click',()=>{rating=Number(s.dataset.rating)||5;paint()}));
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const card=r=>'<article class="afx-r-card"><div><div class="afx-r-top"><span class="afx-r-name">'+esc(r.name)+'</span><span class="afx-r-stars">'+('★'.repeat(r.rating))+'</span></div><p class="afx-r-text">'+esc(r.text)+'</p></div><span class="afx-r-date">'+new Date(r.created_at+'Z').toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'})+'</span></article>';
  async function load(){
    try{const res=await fetch('/api/reviews',{headers:{accept:'application/json'}});const data=await res.json();if(!res.ok)throw new Error(data.error||'Ошибка загрузки');list.innerHTML=data.reviews.length?data.reviews.map(card).join(''):'<div class="afx-r-empty">Пока отзывов нет. Можешь стать первым 👀</div>'}
    catch(e){list.innerHTML='<div class="afx-r-empty">Отзывы временно недоступны. Скоро починим.</div>'}
  }
  form.addEventListener('submit',async e=>{
    e.preventDefault();status.className='afx-r-status';status.textContent='Проверяем отзыв…';const btn=form.querySelector('button[type="submit"]');btn.disabled=true;
    const fd=new FormData(form);const payload={name:fd.get('name'),text:fd.get('text'),company:fd.get('company'),rating};
    try{
      const res=await fetch('/api/reviews',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(payload)});
      const data=await res.json();if(!res.ok)throw new Error(data.error||'Не удалось отправить отзыв');
      status.className='afx-r-status ok';
      status.textContent=data.status==='pending'?'Отзыв отправлен на модерацию ✨':'Готово — отзыв опубликован ✨';
      form.reset();rating=5;paint();await load()
    }catch(err){status.className='afx-r-status bad';status.textContent=err.message||'Не удалось отправить отзыв'}finally{btn.disabled=false}
  });
  load();
})();
</script>`;


const PRICING_EFFECT_HTML = String.raw`
<style>
  .afx-price-animated{
    position:relative!important;
    overflow:hidden!important;
    isolation:isolate;
    background:
      radial-gradient(1200px 600px at 50% 0%,rgba(127,66,255,.12),transparent 55%),
      linear-gradient(180deg,#0a0612 0%,#0c0715 100%)!important;
  }
  .afx-price-animated > *{position:relative;z-index:2}
  .afx-price-animated .afx-price-bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
  .afx-price-animated .afx-price-bg::before{
    content:"";position:absolute;inset:0;
    background:
      radial-gradient(520px 520px at 12% 30%,rgba(92,224,255,.14),transparent 60%),
      radial-gradient(640px 640px at 88% 20%,rgba(165,77,255,.16),transparent 60%),
      radial-gradient(620px 620px at 50% 88%,rgba(110,52,255,.12),transparent 62%);
    filter:blur(8px);
    animation:afxPriceGlow 14s ease-in-out infinite alternate;
  }
  .afx-price-animated .afx-price-bg::after{
    content:"";position:absolute;left:0;right:0;bottom:0;height:42%;
    background:
      linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
    background-size:32px 32px;
    mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,.72) 25%,rgba(0,0,0,.96));
    opacity:.18;
    transform:perspective(900px) rotateX(72deg) scale(1.1);
    transform-origin:bottom center;
  }
  .afx-price-animated .afx-price-line,
  .afx-price-animated .afx-price-line2{
    position:absolute;left:-12%;width:124%;height:1px;
    background:linear-gradient(90deg,transparent,rgba(124,231,255,.22),rgba(172,84,255,.26),transparent);
    filter:blur(.2px);opacity:.55;
  }
  .afx-price-animated .afx-price-line{top:33%;transform:rotate(-8deg);animation:afxPriceLine1 10s ease-in-out infinite}
  .afx-price-animated .afx-price-line2{top:68%;transform:rotate(7deg);animation:afxPriceLine2 12s ease-in-out infinite}
  .afx-price-animated .afx-price-orb,
  .afx-price-animated .afx-price-orb2{
    position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02);
    box-shadow:inset 0 0 34px rgba(150,76,255,.06),0 0 55px rgba(101,221,255,.04);
  }
  .afx-price-animated .afx-price-orb{width:290px;height:290px;right:-100px;top:10%;animation:afxPriceOrb 16s ease-in-out infinite}
  .afx-price-animated .afx-price-orb2{width:210px;height:210px;left:-70px;bottom:8%;animation:afxPriceOrb 18s ease-in-out infinite reverse}
  .afx-price-animated .afx-price-spark{
    position:absolute;width:14px;height:14px;opacity:.5;animation:afxPriceSpark 5.5s ease-in-out infinite;
  }
  .afx-price-animated .afx-price-spark::before,
  .afx-price-animated .afx-price-spark::after{
    content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    background:linear-gradient(90deg,transparent,rgba(146,234,255,.92),transparent);
    box-shadow:0 0 14px rgba(146,234,255,.28);
  }
  .afx-price-animated .afx-price-spark::before{width:14px;height:1px}
  .afx-price-animated .afx-price-spark::after{width:1px;height:14px}
  .afx-price-animated .afx-price-spark.s1{right:20%;top:22%}
  .afx-price-animated .afx-price-spark.s2{left:18%;bottom:19%;animation-delay:-2s}
  .afx-price-animated .afx-price-tag{
    position:absolute;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;
    border-radius:999px;border:1px solid rgba(255,255,255,.1);
    background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02));
    color:rgba(233,225,244,.72);font-size:10px;font-weight:900;letter-spacing:.18em;
    backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
    box-shadow:0 10px 30px rgba(0,0,0,.14);
  }
  .afx-price-animated .afx-price-tag span{display:block;width:7px;height:7px;border-radius:50%;background:#7aeaff;box-shadow:0 0 12px rgba(122,234,255,.7)}
  .afx-price-animated .afx-price-tag.t1{left:5%;top:8%}
  .afx-price-animated .afx-price-tag.t2{right:7%;bottom:10%}
  .afx-price-animated .afx-price-particle{
    position:absolute;width:5px;height:5px;border-radius:50%;
    background:radial-gradient(circle,#fff 0 30%,#9aefff 42%,rgba(154,239,255,0) 72%);
    box-shadow:0 0 14px rgba(135,235,255,.42);
    opacity:.72;
    animation:afxPriceParticle var(--dur) ease-in-out var(--delay) infinite;
  }

  .afx-price-animated [class*="card"],
  .afx-price-animated [class*="plan"],
  .afx-price-animated [class*="tariff"],
  .afx-price-animated [class*="package"]{
    position:relative;z-index:3;
    backdrop-filter:blur(10px) saturate(118%);
    -webkit-backdrop-filter:blur(10px) saturate(118%);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 14px 34px rgba(0,0,0,.18);
  }
  .afx-price-animated [class*="card"]::before,
  .afx-price-animated [class*="plan"]::before,
  .afx-price-animated [class*="tariff"]::before,
  .afx-price-animated [class*="package"]::before{
    content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;
    background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.02));
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
    -webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:.45;
  }

  @keyframes afxPriceGlow{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(0,-12px,0) scale(1.03)}}
  @keyframes afxPriceLine1{0%,100%{transform:rotate(-8deg) translateX(0);opacity:.25}50%{transform:rotate(-5deg) translateX(4%);opacity:.55}}
  @keyframes afxPriceLine2{0%,100%{transform:rotate(7deg) translateX(0);opacity:.18}50%{transform:rotate(10deg) translateX(-4%);opacity:.45}}
  @keyframes afxPriceOrb{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.45}50%{transform:translate3d(0,-12px,0) scale(1.08);opacity:.7}}
  @keyframes afxPriceSpark{0%,100%{transform:scale(.85) rotate(0deg);opacity:.22}50%{transform:scale(1.24) rotate(90deg);opacity:.65}}
  @keyframes afxPriceParticle{0%{transform:translate3d(0,16px,0) scale(.9);opacity:0}18%{opacity:.82}100%{transform:translate3d(var(--dx),var(--dy),0) scale(1.25);opacity:0}}

  @media(max-width:700px){
    .afx-price-animated .afx-price-orb{width:210px;height:210px;right:-105px;top:18%}
    .afx-price-animated .afx-price-orb2{width:150px;height:150px;left:-75px;bottom:14%}
    .afx-price-animated .afx-price-tag{font-size:9px;padding:7px 10px}
    .afx-price-animated .afx-price-tag.t1{left:4%;top:10%}
    .afx-price-animated .afx-price-tag.t2{right:4%;bottom:11%}
  }
  @media(prefers-reduced-motion:reduce){
    .afx-price-animated .afx-price-bg::before,
    .afx-price-animated .afx-price-line,
    .afx-price-animated .afx-price-line2,
    .afx-price-animated .afx-price-orb,
    .afx-price-animated .afx-price-orb2,
    .afx-price-animated .afx-price-spark,
    .afx-price-animated .afx-price-particle{animation:none!important}
  }
</style>
<script>
(function(){
  function findPricingSection(){
    var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,h4,strong,.title,.section-title'));
    for(var i=0;i<heads.length;i++){
      var txt=(heads[i].textContent||'').trim().toLowerCase();
      if(/тариф|пакет|стоим|цена|pricing|plans?/i.test(txt)){
        var section=heads[i].closest('section,article,div');
        if(!section)continue;
        var hops=0;
        while(section&&section.parentElement&&section.clientHeight<320&&hops<4){section=section.parentElement;hops++;}
        return section;
      }
    }
    var fallback=document.querySelector('[id*="tarif"],[class*="tarif"],[id*="price"],[class*="price"],[id*="plan"],[class*="plan"]');
    return fallback?(fallback.closest('section,article,div')||fallback):null;
  }
  function decorate(section){
    if(!section||section.classList.contains('afx-price-animated'))return;
    section.classList.add('afx-price-animated');
    if(getComputedStyle(section).position==='static')section.style.position='relative';
    var bg=document.createElement('div');
    bg.className='afx-price-bg';
    bg.innerHTML=''
      +'<div class="afx-price-line"></div>'
      +'<div class="afx-price-line2"></div>'
      +'<div class="afx-price-orb"></div>'
      +'<div class="afx-price-orb2"></div>'
      +'<div class="afx-price-spark s1"></div>'
      +'<div class="afx-price-spark s2"></div>'
      +'<div class="afx-price-tag t1"><span></span> PREMIUM</div>'
      +'<div class="afx-price-tag t2"><span></span> AURAFX</div>';
    section.prepend(bg);
    for(var i=0;i<12;i++){
      var p=document.createElement('span');
      p.className='afx-price-particle';
      p.style.left=(6+Math.random()*88)+'%';
      p.style.top=(12+Math.random()*76)+'%';
      p.style.setProperty('--dx',((-36)+Math.random()*72).toFixed(0)+'px');
      p.style.setProperty('--dy',((-70)-Math.random()*90).toFixed(0)+'px');
      p.style.setProperty('--dur',(8+Math.random()*7).toFixed(2)+'s');
      p.style.setProperty('--delay',(-Math.random()*8).toFixed(2)+'s');
      bg.appendChild(p);
    }
  }
  function init(){decorate(findPricingSection())}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
</script>`;

const ADMIN_HTML = String.raw`<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AuraFX — модерация отзывов</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#0b0612;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;min-height:100vh}
body:before{content:"";position:fixed;inset:-20%;background:radial-gradient(circle at 75% 20%,rgba(138,42,255,.22),transparent 28%),radial-gradient(circle at 20% 80%,rgba(66,225,255,.08),transparent 26%);pointer-events:none}
.wrap{position:relative;max-width:1100px;margin:auto;padding:34px 18px 70px}.top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:28px}
.brand{font-size:26px;font-weight:900}.brand span{background:linear-gradient(90deg,#5be7ff,#b14bff);-webkit-background-clip:text;color:transparent}.muted{color:#9d91ad}
.panel,.card{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.045);backdrop-filter:blur(18px);box-shadow:0 18px 60px rgba(0,0,0,.22);border-radius:24px}
.login{max-width:430px;margin:12vh auto 0;padding:26px}.login h1{margin:0 0 8px;font-size:32px}.login p{margin:0 0 22px;color:#a99cb8;line-height:1.5}
input{width:100%;border:1px solid rgba(255,255,255,.12);background:#10081a;color:#fff;border-radius:14px;padding:14px 15px;font:inherit;outline:none}
input:focus{border-color:#a448ff;box-shadow:0 0 0 4px rgba(164,72,255,.12)}
button{border:0;border-radius:14px;padding:12px 15px;font:inherit;font-weight:800;cursor:pointer;color:#fff;background:#251631}
button:disabled{opacity:.55}.primary{background:linear-gradient(135deg,#b24aff,#7027ed)}.danger{background:#39151d;color:#ff9caa}.ghost{background:rgba(255,255,255,.06)}.ok{background:#123126;color:#8ff3c6}
.msg{min-height:21px;margin:12px 0 0;color:#ff9aaa;font-size:14px}
.toolbar{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap}.filters{display:flex;gap:8px;flex-wrap:wrap}
.filters button.active{background:#7629ee}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 18px}.stat{padding:18px}.stat b{display:block;font-size:28px;margin-top:5px}.stat small{color:#9f91ae}
.list{display:grid;gap:12px}.card{padding:20px}.cardtop{display:flex;justify-content:space-between;gap:14px;align-items:start}.name{font-weight:900;font-size:18px}.stars{color:#ffd45c;letter-spacing:1px}.text{color:#ddd5e4;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}.meta{display:flex;gap:9px;align-items:center;flex-wrap:wrap;color:#807486;font-size:12px}
.badge{display:inline-flex;padding:5px 9px;border-radius:999px;font-size:11px;font-weight:850}.approved{background:rgba(55,220,151,.12);color:#82f0be}.pending{background:rgba(255,188,61,.12);color:#ffd06f}.hidden{background:rgba(255,103,128,.12);color:#ff9bac}
.actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.empty{text-align:center;padding:48px 20px;color:#8f829c}
.hidden-ui{display:none!important}
@media(max-width:700px){.stats{grid-template-columns:repeat(2,1fr)}.top{align-items:flex-start}.toolbar{align-items:stretch}.cardtop{display:block}.stars{margin-top:6px}}
</style></head>
<body><div class="wrap">
<div class="top"><div><div class="brand"><span>AuraFX</span> Admin</div><div class="muted">Модерация отзывов</div></div><button id="logout" class="ghost hidden-ui">Выйти</button></div>

<section id="loginBox" class="panel login">
<h1>Вход</h1><p>Панель доступна только владельцу. Пароль хранится в Cloudflare Secrets и не попадает в код сайта.</p>
<form id="loginForm"><input id="password" type="password" autocomplete="current-password" placeholder="Пароль администратора" required><button class="primary" style="width:100%;margin-top:12px">Войти →</button><div class="msg" id="loginMsg"></div></form>
</section>

<section id="dash" class="hidden-ui">
<div class="stats">
<div class="panel stat"><small>Всего</small><b id="sAll">0</b></div>
<div class="panel stat"><small>Опубликовано</small><b id="sApproved">0</b></div>
<div class="panel stat"><small>На проверке</small><b id="sPending">0</b></div>
<div class="panel stat"><small>Скрыто</small><b id="sHidden">0</b></div>
</div>
<div class="toolbar">
<div class="filters" id="filters"><button data-filter="all" class="active">Все</button><button data-filter="approved">Опубликованные</button><button data-filter="pending">На проверке</button><button data-filter="hidden">Скрытые</button></div>
<button id="refresh" class="ghost">Обновить</button>
</div>
<div id="list" class="list"></div>
</section>
</div>
<script>
(function(){
  var $=function(s){return document.querySelector(s)};
  var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
  var reviews=[],filter='all';
  var labels={approved:'Опубликован',pending:'На проверке',hidden:'Скрыт'};

  function showLogin(msg){
    $('#loginBox').classList.remove('hidden-ui');
    $('#dash').classList.add('hidden-ui');
    $('#logout').classList.add('hidden-ui');
    $('#loginMsg').textContent=msg||'';
  }
  function showDash(){
    $('#loginBox').classList.add('hidden-ui');
    $('#dash').classList.remove('hidden-ui');
    $('#logout').classList.remove('hidden-ui');
  }
  function render(){
    var c={all:reviews.length,approved:0,pending:0,hidden:0};
    reviews.forEach(function(r){c[r.status]=(c[r.status]||0)+1});
    $('#sAll').textContent=c.all;$('#sApproved').textContent=c.approved;$('#sPending').textContent=c.pending;$('#sHidden').textContent=c.hidden;
    var data=filter==='all'?reviews:reviews.filter(function(r){return r.status===filter});
    if(!data.length){$('#list').innerHTML='<div class="panel empty">Здесь пока пусто.</div>';return}
    $('#list').innerHTML=data.map(function(r){
      var html='<article class="card" data-id="'+r.id+'">';
      html+='<div class="cardtop"><div><div class="name">'+esc(r.name)+'</div><div class="meta"><span class="badge '+esc(r.status)+'">'+(labels[r.status]||esc(r.status))+'</span><span>'+new Date(r.created_at+'Z').toLocaleString('ru-RU')+'</span><span>#'+r.id+'</span></div></div><div class="stars">'+'★'.repeat(r.rating)+'</div></div>';
      html+='<p class="text">'+esc(r.text)+'</p><div class="actions">';
      if(r.status!=='approved')html+='<button class="ok" data-action="approved">Опубликовать</button>';
      if(r.status!=='hidden')html+='<button class="ghost" data-action="hidden">Скрыть</button>';
      html+='<button class="danger" data-action="delete">Удалить</button></div></article>';
      return html;
    }).join('');
  }
  async function api(url,opt){
    opt=opt||{};
    var headers=Object.assign({accept:'application/json','content-type':'application/json'},opt.headers||{});
    var r=await fetch(url,Object.assign({},opt,{headers:headers}));
    var d={};try{d=await r.json()}catch(e){}
    if(r.status===401){showLogin('Сессия закончилась. Войди снова.');throw new Error('AUTH')}
    if(!r.ok)throw new Error(d.error||'Ошибка');
    return d;
  }
  async function load(){
    try{var d=await api('/api/admin/reviews');reviews=d.reviews||[];showDash();render()}
    catch(e){if(e.message!=='AUTH')showLogin('Войди, чтобы открыть панель.')}
  }
  $('#loginForm').addEventListener('submit',async function(e){
    e.preventDefault();$('#loginMsg').textContent='Проверяем…';
    try{await api('/api/admin/login',{method:'POST',body:JSON.stringify({password:$('#password').value})});$('#password').value='';await load()}
    catch(err){if(err.message!=='AUTH')$('#loginMsg').textContent=err.message}
  });
  $('#logout').addEventListener('click',async function(){try{await api('/api/admin/logout',{method:'POST',body:'{}'})}catch(e){}showLogin('Ты вышел из панели.')});
  $('#refresh').addEventListener('click',load);
  $('#filters').addEventListener('click',function(e){
    var b=e.target.closest('button[data-filter]');if(!b)return;filter=b.dataset.filter;
    document.querySelectorAll('#filters button').forEach(function(x){x.classList.toggle('active',x===b)});render();
  });
  $('#list').addEventListener('click',async function(e){
    var b=e.target.closest('button[data-action]');if(!b)return;
    var card=b.closest('[data-id]'),id=card.dataset.id,action=b.dataset.action;
    if(action==='delete'&&!confirm('Удалить отзыв навсегда?'))return;
    b.disabled=true;
    try{
      if(action==='delete')await api('/api/admin/reviews/'+id,{method:'DELETE'});
      else await api('/api/admin/reviews/'+id,{method:'PATCH',body:JSON.stringify({status:action})});
      await load();
    }catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}
  });
  load();
})();
</script></body></html>`;

const json = (data, status = 200, extraHeaders = {}) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extraHeaders }
});

async function ensureDb(env) {
  if (!env.DB) throw new Error("DB_NOT_BOUND");
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    text TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'approved',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    ip_hash TEXT
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_reviews_status_created ON reviews(status, created_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS admin_login_attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_admin_login_ip_created ON admin_login_attempts(ip_hash, created_at DESC)").run();
}

function normalize(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

function moderationReason(name, text) {
  const value = `${name} ${text}`.toLowerCase().replace(/ё/g, "е");
  const badWords = /(?:^|[^а-яa-z0-9])(?:бля(?:д|т|ха)?|бляд\w*|сука|сучк\w*|хуй\w*|хуе\w*|хуя\w*|пизд\w*|еба\w*|ебл\w*|ёб\w*|мудак\w*|гандон\w*|долбоеб\w*)(?:$|[^а-яa-z0-9])/iu;
  if (badWords.test(value)) return "content";
  if (/(?:https?:\/\/|www\.|t\.me\/|@\w{4,})/iu.test(value)) return "links";
  if (/(.)\1{7,}/u.test(value)) return "spam";
  const letters = value.replace(/[^а-яa-z]/giu, "");
  if (letters.length > 20 && new Set(letters).size < 4) return "spam";
  return null;
}

async function hashIp(request) {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function parseCookies(request) {
  const out = {};
  const raw = request.headers.get("cookie") || "";
  for (const part of raw.split(";")) {
    const i = part.indexOf("=");
    if (i > -1) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

async function hmacHex(secret, message) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function makeAdminToken(env) {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 12;
  const sig = await hmacHex(env.ADMIN_SESSION_SECRET, `aurafx-admin:${exp}`);
  return `${exp}.${sig}`;
}

async function validAdmin(request, env) {
  if (!env.ADMIN_SESSION_SECRET) return false;
  const token = parseCookies(request).afx_admin;
  if (!token) return false;
  const [expRaw, sig] = token.split(".");
  const exp = Number(expRaw);
  if (!Number.isInteger(exp) || exp < Math.floor(Date.now() / 1000) || !sig) return false;
  const expected = await hmacHex(env.ADMIN_SESSION_SECRET, `aurafx-admin:${exp}`);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  return origin === new URL(request.url).origin;
}

async function handlePublicReviews(request, env) {
  try { await ensureDb(env); }
  catch { return json({ error: "База отзывов ещё не подключена." }, 503); }

  if (request.method === "GET") {
    const result = await env.DB.prepare("SELECT id, name, rating, text, created_at FROM reviews WHERE status = 'approved' ORDER BY datetime(created_at) DESC, id DESC LIMIT 20").all();
    return json({ reviews: result.results || [] });
  }

  if (request.method !== "POST") return json({ error: "Метод не поддерживается." }, 405);
  if (!sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);

  let body;
  try { body = await request.json(); }
  catch { return json({ error: "Некорректные данные." }, 400); }

  if (normalize(body.company)) return json({ error: "Отзыв отклонён как спам." }, 400);

  const name = normalize(body.name);
  const text = normalize(body.text);
  const rating = Number(body.rating);

  if (name.length < 2 || name.length > 40) return json({ error: "Имя должно быть от 2 до 40 символов." }, 400);
  if (text.length < 10 || text.length > 600) return json({ error: "Отзыв должен быть от 10 до 600 символов." }, 400);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return json({ error: "Выбери оценку от 1 до 5." }, 400);

  const flagged = moderationReason(name, text);
  const ipHash = await hashIp(request);
  const recent = await env.DB.prepare("SELECT id FROM reviews WHERE ip_hash = ? AND datetime(created_at) > datetime('now', '-60 seconds') LIMIT 1").bind(ipHash).first();
  if (recent) return json({ error: "Слишком быстро 🙂 Подожди минуту перед следующим отзывом." }, 429);

  const status = flagged ? "pending" : "approved";
  await env.DB.prepare("INSERT INTO reviews (name, rating, text, status, ip_hash) VALUES (?, ?, ?, ?, ?)").bind(name, rating, text, status, ipHash).run();
  return json({ ok: true, status }, 201);
}

async function handleAdminApi(request, env, url) {
  try { await ensureDb(env); }
  catch { return json({ error: "База данных недоступна." }, 503); }

  if (url.pathname === "/api/admin/login" && request.method === "POST") {
    if (!sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);
    if (!env.ADMIN_PASSWORD || !env.ADMIN_SESSION_SECRET) return json({ error: "Админ-панель ещё не настроена в Cloudflare Secrets." }, 503);

    const ipHash = await hashIp(request);
    await env.DB.prepare("DELETE FROM admin_login_attempts WHERE datetime(created_at) < datetime('now', '-24 hours')").run();
    const attempts = await env.DB.prepare("SELECT COUNT(*) AS n FROM admin_login_attempts WHERE ip_hash = ? AND datetime(created_at) > datetime('now', '-15 minutes')").bind(ipHash).first();
    if (Number(attempts?.n || 0) >= 5) return json({ error: "Слишком много попыток. Попробуй через 15 минут." }, 429);

    let body = {};
    try { body = await request.json(); } catch {}
    if (String(body.password || "") !== String(env.ADMIN_PASSWORD)) {
      await env.DB.prepare("INSERT INTO admin_login_attempts (ip_hash) VALUES (?)").bind(ipHash).run();
      return json({ error: "Неверный пароль." }, 401);
    }

    await env.DB.prepare("DELETE FROM admin_login_attempts WHERE ip_hash = ?").bind(ipHash).run();
    const token = await makeAdminToken(env);
    return json({ ok: true }, 200, {
      "set-cookie": `afx_admin=${token}; Path=/; Max-Age=43200; HttpOnly; Secure; SameSite=Strict`
    });
  }

  if (url.pathname === "/api/admin/logout" && request.method === "POST") {
    return json({ ok: true }, 200, {
      "set-cookie": "afx_admin=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict"
    });
  }

  if (!(await validAdmin(request, env))) return json({ error: "Требуется вход." }, 401);
  if (["POST","PATCH","PUT","DELETE"].includes(request.method) && !sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);

  if (url.pathname === "/api/admin/reviews" && request.method === "GET") {
    const result = await env.DB.prepare("SELECT id, name, rating, text, status, created_at FROM reviews ORDER BY datetime(created_at) DESC, id DESC LIMIT 500").all();
    return json({ reviews: result.results || [] });
  }

  const match = url.pathname.match(/^\/api\/admin\/reviews\/(\d+)$/);
  if (!match) return json({ error: "Не найдено." }, 404);
  const id = Number(match[1]);

  if (request.method === "DELETE") {
    await env.DB.prepare("DELETE FROM reviews WHERE id = ?").bind(id).run();
    return json({ ok: true });
  }

  if (request.method === "PATCH") {
    let body = {};
    try { body = await request.json(); } catch {}
    if (!["approved", "hidden"].includes(body.status)) return json({ error: "Недопустимый статус." }, 400);
    await env.DB.prepare("UPDATE reviews SET status = ? WHERE id = ?").bind(body.status, id).run();
    return json({ ok: true });
  }

  return json({ error: "Метод не поддерживается." }, 405);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/reviews") return handlePublicReviews(request, env);
    if (url.pathname.startsWith("/api/admin/")) return handleAdminApi(request, env, url);

    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      return new Response(ADMIN_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }

    const response = await env.ASSETS.fetch(request);
    if ((url.pathname === "/" || url.pathname === "/index.html") && response.headers.get("content-type")?.includes("text/html")) {
      return new HTMLRewriter().on("body", {
        element(element) { element.append(PRICING_EFFECT_HTML + REVIEW_WIDGET_HTML, { html: true }); }
      }).transform(response);
    }
    return response;
  }
};
