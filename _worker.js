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
  .afx-price-scope{position:relative}
  .afx-price-card-decor{
    position:relative!important;
    overflow:hidden!important;
    isolation:isolate;
  }
  .afx-price-card-decor > *{position:relative;z-index:2}
  .afx-price-card-decor .afx-price-card-bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
  .afx-price-card-decor .afx-price-card-glow{
    position:absolute;inset:0;
    background:
      radial-gradient(220px 220px at 12% 78%, rgba(88,231,255,.14), transparent 60%),
      radial-gradient(240px 240px at 88% 18%, rgba(178,79,255,.16), transparent 62%),
      linear-gradient(135deg, rgba(255,255,255,.02), rgba(255,255,255,0));
    filter:blur(6px);
    animation:afxCardGlow 9s ease-in-out infinite alternate;
  }
  .afx-price-card-decor .afx-price-card-grid{
    position:absolute;left:-6%;right:-6%;bottom:-12%;height:44%;
    background:
      linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
      linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
    background-size:26px 26px;
    transform:perspective(700px) rotateX(72deg) scale(1.1);
    transform-origin:bottom center;
    mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8) 28%,rgba(0,0,0,.98));
    opacity:.16;
  }
  .afx-price-card-decor .afx-price-card-word{
    position:absolute;left:50%;top:56%;transform:translate(-50%,-50%) perspective(520px) rotateX(22deg);
    width:100%;text-align:center;pointer-events:none;user-select:none;
    font-size:clamp(42px,8vw,110px);font-weight:1000;letter-spacing:-.07em;line-height:1;
    white-space:nowrap;color:rgba(204,153,255,.09);
    -webkit-text-stroke:1px rgba(178,130,255,.16);
    text-shadow:0 0 18px rgba(128,56,255,.10),0 0 36px rgba(85,231,255,.05);
    filter:drop-shadow(0 10px 18px rgba(0,0,0,.18));
    will-change:transform,opacity,filter;
    animation:afxCardWordFloat 8.6s ease-in-out var(--float-delay,0s) infinite;
  }
  .afx-price-card-decor .afx-price-card-word span{
    display:inline-block;transform:translateZ(0);
    background:linear-gradient(180deg,rgba(216,194,255,.20),rgba(93,236,255,.10));
    -webkit-background-clip:text;background-clip:text;color:transparent;
    animation:afxCardWordGlow 8.6s ease-in-out var(--float-delay,0s) infinite;
  }
  .afx-price-card-decor .afx-price-card-orb,
  .afx-price-card-decor .afx-price-card-orb2{
    position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02);
    box-shadow:inset 0 0 24px rgba(153,81,255,.06),0 0 36px rgba(93,233,255,.05);
  }
  .afx-price-card-decor .afx-price-card-orb{width:120px;height:120px;right:-42px;top:-34px;animation:afxCardOrb 12s ease-in-out infinite}
  .afx-price-card-decor .afx-price-card-orb2{width:92px;height:92px;left:-30px;bottom:-26px;animation:afxCardOrb 10s ease-in-out infinite reverse}
  .afx-price-card-decor .afx-price-card-line,
  .afx-price-card-decor .afx-price-card-line2{
    position:absolute;left:-8%;width:116%;height:1px;
    background:linear-gradient(90deg,transparent,rgba(116,232,255,.22),rgba(164,76,255,.22),transparent);
    opacity:.44;filter:blur(.2px)
  }
  .afx-price-card-decor .afx-price-card-line{top:34%;transform:rotate(-8deg);animation:afxCardLine1 8s ease-in-out infinite}
  .afx-price-card-decor .afx-price-card-line2{bottom:22%;transform:rotate(7deg);animation:afxCardLine2 10s ease-in-out infinite}
  .afx-price-card-decor .afx-price-card-spark{
    position:absolute;width:12px;height:12px;opacity:.55;animation:afxCardSpark 5.5s ease-in-out infinite;
  }
  .afx-price-card-decor .afx-price-card-spark::before,
  .afx-price-card-decor .afx-price-card-spark::after{
    content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
    background:linear-gradient(90deg,transparent,rgba(145,235,255,.9),transparent);
    box-shadow:0 0 10px rgba(145,235,255,.28);
  }
  .afx-price-card-decor .afx-price-card-spark::before{width:12px;height:1px}
  .afx-price-card-decor .afx-price-card-spark::after{width:1px;height:12px}
  .afx-price-card-decor .afx-price-card-spark.s1{right:18%;top:18%}
  .afx-price-card-decor .afx-price-card-spark.s2{left:14%;bottom:18%;animation-delay:-2s}
  .afx-price-card-decor .afx-price-card-particle{
    position:absolute;width:4px;height:4px;border-radius:50%;
    background:radial-gradient(circle,#fff 0 32%,#9eeeff 45%,rgba(158,238,255,0) 74%);
    box-shadow:0 0 10px rgba(134,234,255,.4);opacity:.75;
    animation:afxCardParticle var(--dur) ease-in-out var(--delay) infinite;
  }
  .afx-price-card-decor::after{
    content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;
    background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.02));
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
    -webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;opacity:.55;z-index:3;
  }

  @keyframes afxCardGlow{0%{transform:translate3d(0,0,0) scale(1)}100%{transform:translate3d(0,-10px,0) scale(1.03)}}
  @keyframes afxCardOrb{0%,100%{transform:translate3d(0,0,0) scale(1);opacity:.5}50%{transform:translate3d(0,-8px,0) scale(1.08);opacity:.75}}
  @keyframes afxCardLine1{0%,100%{transform:rotate(-8deg) translateX(0);opacity:.2}50%{transform:rotate(-5deg) translateX(3%);opacity:.48}}
  @keyframes afxCardLine2{0%,100%{transform:rotate(7deg) translateX(0);opacity:.14}50%{transform:rotate(10deg) translateX(-3%);opacity:.36}}
  @keyframes afxCardSpark{0%,100%{transform:scale(.9) rotate(0deg);opacity:.22}50%{transform:scale(1.2) rotate(90deg);opacity:.65}}
  @keyframes afxCardParticle{0%{transform:translate3d(0,14px,0) scale(.9);opacity:0}18%{opacity:.8}100%{transform:translate3d(var(--dx),var(--dy),0) scale(1.2);opacity:0}}
  @keyframes afxCardWordFloat{
    0%,100%{transform:translate(-50%,-50%) perspective(520px) rotateX(22deg) translateY(0) scale(1);opacity:.72;filter:drop-shadow(0 10px 18px rgba(0,0,0,.18))}
    25%{transform:translate(calc(-50% + 2px),calc(-50% - 4px)) perspective(520px) rotateX(22deg) scale(1.01);opacity:.82;filter:drop-shadow(0 12px 20px rgba(89,40,180,.18))}
    50%{transform:translate(-50%,calc(-50% - 8px)) perspective(520px) rotateX(22deg) scale(1.025);opacity:.92;filter:drop-shadow(0 14px 24px rgba(98,48,200,.22))}
    75%{transform:translate(calc(-50% - 2px),calc(-50% - 4px)) perspective(520px) rotateX(22deg) scale(1.01);opacity:.84;filter:drop-shadow(0 12px 20px rgba(45,150,255,.12))}
  }
  @keyframes afxCardWordGlow{
    0%,100%{opacity:.72;filter:brightness(1)}
    50%{opacity:1;filter:brightness(1.14)}
  }

  @media(max-width:700px){
    .afx-price-card-decor .afx-price-card-word{font-size:clamp(38px,13vw,78px);top:58%;opacity:1}
    .afx-price-card-decor .afx-price-card-orb{width:92px;height:92px;right:-38px;top:-28px}
    .afx-price-card-decor .afx-price-card-orb2{width:74px;height:74px;left:-24px;bottom:-20px}
  }
  @media(prefers-reduced-motion:reduce){
    .afx-price-card-decor .afx-price-card-glow,
    .afx-price-card-decor .afx-price-card-orb,
    .afx-price-card-decor .afx-price-card-orb2,
    .afx-price-card-decor .afx-price-card-line,
    .afx-price-card-decor .afx-price-card-line2,
    .afx-price-card-decor .afx-price-card-spark,
    .afx-price-card-decor .afx-price-card-particle{animation:none!important}
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
        if(!section) continue;
        var hops=0;
        while(section && section.parentElement && section.clientHeight<320 && hops<4){section=section.parentElement;hops++;}
        return section;
      }
    }
    var fallback=document.querySelector('[id*="tarif"],[class*="tarif"],[id*="price"],[class*="price"],[id*="plan"],[class*="plan"]');
    return fallback ? (fallback.closest('section,article,div')||fallback) : null;
  }

  function findPricingCards(section){
    if(!section) return [];
    var candidates=[].slice.call(section.querySelectorAll('article,li,div'));
    candidates=candidates.filter(function(el){
      if(el.children.length<2) return false;
      var txt=(el.textContent||'').replace(/\s+/g,' ').trim();
      if(!/₽/.test(txt)) return false;
      if(!/выбрать|заказать|купить/i.test(txt)) return false;
      var rect=el.getBoundingClientRect();
      if(rect.height<180 || rect.width<220) return false;
      return true;
    });
    candidates=candidates.filter(function(el){
      return !candidates.some(function(other){ return other!==el && el.contains(other); });
    });
    return candidates;
  }

  function decorateCard(card, index){
    if(!card || card.classList.contains('afx-price-card-decor')) return;
    card.classList.add('afx-price-card-decor');
    if(getComputedStyle(card).position==='static') card.style.position='relative';
    var bg=document.createElement('div');
    bg.className='afx-price-card-bg';
    bg.innerHTML=''
      +'<div class="afx-price-card-glow"></div>'
      +'<div class="afx-price-card-grid"></div>'
      +'<div class="afx-price-card-word"><span>AuraFX</span></div>'
      +'<div class="afx-price-card-orb"></div>'
      +'<div class="afx-price-card-orb2"></div>'
      +'<div class="afx-price-card-line"></div>'
      +'<div class="afx-price-card-line2"></div>'
      +'<div class="afx-price-card-spark s1"></div>'
      +'<div class="afx-price-card-spark s2"></div>';
    card.prepend(bg);
    var word=bg.querySelector('.afx-price-card-word');
    if(word){
      word.style.setProperty('--float-delay',((-index||0)*1.1).toFixed(2)+'s');
    }
    for(var i=0;i<6;i++){
      var p=document.createElement('span');
      p.className='afx-price-card-particle';
      p.style.left=(8+Math.random()*82)+'%';
      p.style.top=(12+Math.random()*70)+'%';
      p.style.setProperty('--dx',((-20)+Math.random()*40).toFixed(0)+'px');
      p.style.setProperty('--dy',((-35)-Math.random()*45).toFixed(0)+'px');
      p.style.setProperty('--dur',(8+Math.random()*5).toFixed(2)+'s');
      p.style.setProperty('--delay',(-Math.random()*6).toFixed(2)+'s');
      bg.appendChild(p);
    }
  }

  function init(){
    var section=findPricingSection();
    if(!section) return;
    section.classList.add('afx-price-scope');
    var cards=findPricingCards(section);
    cards.forEach(decorateCard);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init, {once:true}); else init();
})();
</script>`;


const SITE_TOOLS_HTML = String.raw`
<style>
  #afx-site-tools{
    position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:9998;
    display:flex;gap:8px;align-items:center;justify-content:center;
    font-family:inherit;pointer-events:none;
  }
  .afx-tool-pill{
    pointer-events:auto;display:inline-flex;align-items:center;gap:8px;min-height:42px;
    padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.12);
    background:linear-gradient(180deg,rgba(21,12,35,.88),rgba(11,6,21,.82));
    color:#f6f1fb;box-shadow:0 10px 34px rgba(0,0,0,.28),inset 0 1px rgba(255,255,255,.05);
    backdrop-filter:blur(16px) saturate(125%);-webkit-backdrop-filter:blur(16px) saturate(125%);
    font-size:13px;font-weight:850;letter-spacing:.01em;white-space:nowrap;
  }
  #afx-online-pill{color:#dcd1e8}
  .afx-online-sep{opacity:.42;margin:0 1px}
  #afx-total-text{color:#b8aac8;font-weight:760}
  .afx-online-dot{
    width:8px;height:8px;border-radius:50%;background:#56f4ad;
    box-shadow:0 0 0 4px rgba(86,244,173,.08),0 0 16px rgba(86,244,173,.72);
    animation:afxOnlinePulse 2s ease-in-out infinite;
  }
  #afx-pricing-jump, #afx-channel-jump, #afx-cases-jump, #afx-fortune-jump{
    appearance:none;border:1px solid rgba(162,85,255,.30);cursor:pointer;text-decoration:none;
    background:linear-gradient(135deg,rgba(151,61,255,.88),rgba(90,42,214,.9));
    box-shadow:0 10px 34px rgba(106,43,224,.28),inset 0 1px rgba(255,255,255,.12);
    transition:transform .2s ease,box-shadow .2s ease;
    justify-content:center;
  }
  #afx-channel-jump{
    border-color:rgba(104,205,255,.28);
    background:linear-gradient(135deg,rgba(71,163,255,.85),rgba(126,60,255,.86));
    box-shadow:0 10px 34px rgba(63,110,240,.24),inset 0 1px rgba(255,255,255,.12);
  }
  #afx-cases-jump{
    border-color:rgba(255,176,88,.22);
    background:linear-gradient(135deg,rgba(255,132,62,.82),rgba(158,61,231,.86));
    box-shadow:0 10px 34px rgba(212,90,66,.18),inset 0 1px rgba(255,255,255,.12);
  }
  #afx-pricing-jump:active, #afx-channel-jump:active, #afx-cases-jump:active, #afx-fortune-jump:active{transform:scale(.97)}
  #afx-pricing-jump:hover{box-shadow:0 12px 40px rgba(122,54,239,.38),inset 0 1px rgba(255,255,255,.14)}
  #afx-channel-jump:hover{box-shadow:0 12px 40px rgba(77,132,255,.34),inset 0 1px rgba(255,255,255,.14)}
  #afx-cases-jump:hover{box-shadow:0 12px 40px rgba(222,103,75,.28),inset 0 1px rgba(255,255,255,.14)}
  #afx-fortune-jump{border-color:rgba(255,216,120,.26);background:linear-gradient(135deg,rgba(255,192,81,.88),rgba(163,74,255,.88));box-shadow:0 10px 34px rgba(201,123,48,.24),inset 0 1px rgba(255,255,255,.12)}
  #afx-fortune-jump:hover{box-shadow:0 12px 42px rgba(214,146,65,.34),inset 0 1px rgba(255,255,255,.14)}
  @keyframes afxOnlinePulse{0%,100%{transform:scale(.9);opacity:.72}50%{transform:scale(1.12);opacity:1}}
  @media(max-width:640px){
    #afx-site-tools{bottom:12px;gap:6px;width:calc(100% - 18px);justify-content:flex-start;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:2px}
    #afx-site-tools::-webkit-scrollbar{display:none}
    .afx-tool-pill{min-height:40px;padding:9px 12px;font-size:12px;flex:0 0 auto}
    #afx-online-pill{min-width:max-content;max-width:none}
    #afx-pricing-jump,#afx-channel-jump,#afx-cases-jump,#afx-fortune-jump{padding-left:12px;padding-right:12px}
  }
  @media(prefers-reduced-motion:reduce){.afx-online-dot{animation:none}}
</style>
<div id="afx-site-tools" aria-label="Быстрые действия">
  <div class="afx-tool-pill" id="afx-online-pill" title="Онлайн сейчас и общее число уникальных посетителей">
    <span class="afx-online-dot"></span>
    <span id="afx-online-text">… онлайн</span>
    <span class="afx-online-sep">·</span>
    <span id="afx-total-text">👥 … всего</span>
  </div>
  <button class="afx-tool-pill" id="afx-pricing-jump" type="button">⚡ Тарифы</button>
  <a class="afx-tool-pill" id="afx-channel-jump" href="https://t.me/AuraFX_design" target="_blank" rel="noopener">✈ Канал</a>
  <button class="afx-tool-pill" id="afx-cases-jump" type="button">🔥 Кейсы</button>
  <button class="afx-tool-pill" id="afx-fortune-jump" type="button">🎡 Фортуна</button>
</div>
<script>
(function(){
  var onlineText=document.getElementById('afx-online-text');
  var totalText=document.getElementById('afx-total-text');
  var jump=document.getElementById('afx-pricing-jump');
  var channel=document.getElementById('afx-channel-jump');
  var casesJump=document.getElementById('afx-cases-jump');
  var fortuneJump=document.getElementById('afx-fortune-jump');
  if(!onlineText||!totalText||!jump||!channel||!casesJump||!fortuneJump)return;

  function makeVisitorId(){
    try{
      var existing=localStorage.getItem('afx_visitor_id');
      if(existing&&/^[A-Za-z0-9_-]{16,80}$/.test(existing))return existing;
      var bytes=new Uint8Array(18);
      crypto.getRandomValues(bytes);
      var id='v_'+Array.from(bytes,function(b){return b.toString(36).padStart(2,'0')}).join('');
      localStorage.setItem('afx_visitor_id',id);
      return id;
    }catch(e){
      return 'v_'+Math.random().toString(36).slice(2)+Date.now().toString(36);
    }
  }
  var visitorId=makeVisitorId();

  async function heartbeat(){
    if(document.visibilityState==='hidden')return;
    try{
      var res=await fetch('/api/online',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify({visitor_id:visitorId}),cache:'no-store'});
      var data=await res.json();
      if(!res.ok)throw new Error('online');
      var n=Number(data.online||0);
      var total=Number(data.total||0);
      onlineText.textContent=n+' онлайн';
      totalText.textContent='👥 '+total+' всего';
    }catch(e){
      onlineText.textContent='онлайн';
      totalText.textContent='👥 — всего';
    }
  }

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
    return document.querySelector('[id*="tarif"],[class*="tarif"],[id*="price"],[class*="price"],[id*="plan"],[class*="plan"]');
  }

  jump.addEventListener('click',function(){
    var section=findPricingSection();
    if(section)section.scrollIntoView({behavior:'smooth',block:'start'});
  });

  function findCasesSection(){
    var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,h4,strong,.title,.section-title'));
    for(var i=0;i<heads.length;i++){
      var txt=(heads[i].textContent||'').trim().toLowerCase();
      if(/каталог дизайна|детали решают|рассмотри поближе|портфолио|работы|кейсы/i.test(txt)){
        var section=heads[i].closest('section,article,div');
        if(!section)continue;
        var hops=0;
        while(section&&section.parentElement&&section.clientHeight<320&&hops<4){section=section.parentElement;hops++;}
        return section;
      }
    }
    return document.querySelector('[id*="portfolio"],[class*="portfolio"],[id*="case"],[class*="case"]');
  }
  casesJump.addEventListener('click',function(){
    var section=findCasesSection();
    if(section)section.scrollIntoView({behavior:'smooth',block:'start'});
  });

  fortuneJump.addEventListener('click',function(){
    var section=document.getElementById('afx-promo-lab');
    if(!section){
      var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,h4'));
      var head=heads.find(function(el){return /выбей себе|скидк.*aurafx|фортуна/i.test((el.textContent||'').trim())});
      section=head&&head.closest('section,article,div');
    }
    if(section){
      var y=section.getBoundingClientRect().top+window.scrollY-18;
      window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
    }
  });

  heartbeat();
  setInterval(heartbeat,25000);
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')heartbeat()});
})();
</script>`;


const SITE_UPGRADES_HTML = String.raw`
<style>
  #afx-faq{padding:76px 24px 86px;background:linear-gradient(180deg,rgba(9,4,17,0),rgba(23,8,43,.45),rgba(9,4,17,0));color:#fff;font-family:inherit}
  .afx-faq-wrap{max-width:1100px;margin:0 auto}.afx-faq-kicker{font-size:12px;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#c08cff;margin-bottom:16px}
  .afx-faq-title{margin:0 0 28px;font-size:clamp(38px,6vw,64px);line-height:1;letter-spacing:-.045em}.afx-faq-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
  .afx-faq-item{border:1px solid rgba(255,255,255,.1);border-radius:20px;background:rgba(255,255,255,.035);overflow:hidden;backdrop-filter:blur(12px)}
  .afx-faq-item summary{list-style:none;cursor:pointer;padding:18px 20px;font-weight:850;display:flex;justify-content:space-between;gap:16px;align-items:center}
  .afx-faq-item summary::-webkit-details-marker{display:none}.afx-faq-item summary:after{content:'+';font-size:24px;color:#ab64ff;transition:.2s transform}.afx-faq-item[open] summary:after{transform:rotate(45deg)}
  .afx-faq-answer{padding:0 20px 20px;color:#b9adc5;line-height:1.6;font-size:15px}.afx-faq-note{margin-top:16px;color:#776d84;font-size:12px}
  @media(max-width:720px){#afx-faq{padding:60px 20px 70px}.afx-faq-grid{grid-template-columns:1fr}.afx-faq-title{font-size:42px}}
</style>
<section id="afx-faq" aria-labelledby="afx-faq-title">
  <div class="afx-faq-wrap">
    <div class="afx-faq-kicker">Перед заказом</div>
    <h2 class="afx-faq-title" id="afx-faq-title">Коротко о главном</h2>
    <div class="afx-faq-grid">
      <details class="afx-faq-item"><summary>Можно начать с одной карточки?</summary><div class="afx-faq-answer">Да. В тарифах есть стартовый вариант на одну карточку — удобно, если хочешь сначала посмотреть формат работы.</div></details>
      <details class="afx-faq-item"><summary>Нужно нестандартное количество?</summary><div class="afx-faq-answer">Да. На сайте прямо предусмотрен индивидуальный расчёт для задач, которые не подходят под готовые пакеты.</div></details>
      <details class="afx-faq-item"><summary>Что подготовить перед заказом?</summary><div class="afx-faq-answer">Фото или ссылку на товар, основные характеристики и референсы, если они есть. Чем понятнее исходные материалы, тем быстрее можно перейти к дизайну.</div></details>
      <details class="afx-faq-item"><summary>Как быстро перейти к заказу?</summary><div class="afx-faq-answer">Выбери подходящий тариф и используй кнопку связи на сайте. Плавающая кнопка «Тарифы» всегда быстро вернёт тебя к пакетам.</div></details>
    </div>
    <div class="afx-faq-note">AuraFX • дизайн карточек товаров</div>
  </div>
</section>
<script>
(function(){
  function visitorId(){
    try{
      var id=localStorage.getItem('afx_visitor_id');
      if(id&&/^[A-Za-z0-9_-]{16,80}$/.test(id))return id;
      var bytes=new Uint8Array(18);crypto.getRandomValues(bytes);
      id='v_'+Array.from(bytes,function(b){return b.toString(36).padStart(2,'0')}).join('');
      localStorage.setItem('afx_visitor_id',id);return id;
    }catch(e){return 'v_'+Math.random().toString(36).slice(2)+Date.now().toString(36)}
  }
  var vid=visitorId();
  function event(type,meta){
    try{fetch('/api/event',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({visitor_id:vid,type:type,meta:meta||''}),keepalive:true,cache:'no-store'}).catch(function(){})}catch(e){}
  }
  event('page_view',location.pathname);
  document.addEventListener('click',function(e){
    var el=e.target.closest('a,button');if(!el)return;
    var href=(el.getAttribute('href')||'').toLowerCase();
    var label=(el.textContent||'').replace(/\\s+/g,' ').trim().toLowerCase();
    if(href.indexOf('t.me')>-1||href.indexOf('telegram')>-1)event('telegram_click',label.slice(0,80));
    else if(href.indexOf('avito.ru')>-1)event('avito_click',label.slice(0,80));
    else if(/^(выбрать|заказать)/i.test(label))event('pricing_select',label.slice(0,80));
    else if(el.id==='afx-pricing-jump')event('pricing_jump','floating');
  },{passive:true});
})();
</script>`;


const PERFORMANCE_HTML = String.raw`
<style>
  html{
    scroll-behavior:smooth;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }

  /* Keep heavy effects visually intact, but isolate their repaint area. */
  .afx-price-card-decor,
  .afx-r-card,
  .afx-r-panel,
  .afx-faq-item{
    contain:paint style;
  }

  .afx-price-card-bg,
  .afx-price-card-word,
  .afx-price-card-orb,
  .afx-price-card-orb2,
  .afx-price-card-line,
  .afx-price-card-line2,
  .afx-price-card-spark,
  .afx-price-card-particle,
  .afx-online-dot{
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden;
    transform-style:preserve-3d;
  }

  a,button,summary{
    touch-action:manipulation;
    -webkit-tap-highlight-color:transparent;
  }

  /* The visual difference on phones is negligible, while compositing becomes
     noticeably lighter on Android browsers. */
  @media(max-width:720px){
    .afx-r-panel,
    .afx-faq-item,
    .afx-tool-pill{
      backdrop-filter:blur(9px) saturate(115%);
      -webkit-backdrop-filter:blur(9px) saturate(115%);
    }

    .afx-price-card-decor{
      transform:translateZ(0);
    }

    .afx-price-card-bg{
      transform:translateZ(0);
    }
  }

  .afx-price-card-word,
  .afx-price-card-word span,
  .afx-price-card-glow,
  .afx-price-card-orb,
  .afx-price-card-orb2,
  .afx-price-card-line,
  .afx-price-card-line2,
  .afx-price-card-spark,
  .afx-price-card-particle,
  .afx-online-dot{
    animation-play-state:running;
  }

  @media(pointer:coarse){
    #afx-pricing-jump:hover{
      box-shadow:0 10px 34px rgba(106,43,224,.28),inset 0 1px rgba(255,255,255,.12);
    }
  }
</style>
<script>
(function(){
  function idle(fn){
    if('requestIdleCallback' in window){
      requestIdleCallback(fn,{timeout:1200});
    }else{
      setTimeout(fn,120);
    }
  }

  function makeScrollingLighter(){
    var ticking=false;
    window.addEventListener('scroll',function(){
      if(ticking)return;
      ticking=true;
      requestAnimationFrame(function(){ticking=false});
    },{passive:true});
  }

  function optimizeImages(){
    var imgs=document.querySelectorAll('img');
    imgs.forEach(function(img,index){
      if(index>1 && !img.hasAttribute('loading'))img.loading='lazy';
      if(!img.hasAttribute('decoding'))img.decoding='async';
    });
  }

  idle(function(){
    makeScrollingLighter();
    optimizeImages();
  });
})();
</script>`;

const SCROLL_REVEAL_HTML = String.raw`
<style>
  .afx-reveal-prep{
    opacity:0;
    transform:translate3d(0,14px,0);
  }
  @media(prefers-reduced-motion:reduce){
    html:not(.afx-force-motion) .afx-reveal-prep{
      opacity:1!important;
      transform:none!important;
    }
  }
</style>
<script>
(function(){
  var force=false;
  try{force=localStorage.getItem('afx_motion_mode')==='full'}catch(e){}
  var reduced=!force && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced || !('IntersectionObserver' in window))return;

  function uniquePush(arr,el){if(el && arr.indexOf(el)===-1)arr.push(el)}
  function headingSection(pattern){
    var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,.section-title,.title'));
    for(var i=0;i<heads.length;i++){
      var t=(heads[i].textContent||'').replace(/\s+/g,' ').trim();
      if(pattern.test(t))return heads[i].closest('section,article')||heads[i].parentElement;
    }
    return null;
  }

  var sections=[];
  uniquePush(sections,headingSection(/портфолио|работы|кейсы/i));
  uniquePush(sections,headingSection(/тариф|цены|без квеста/i));
  uniquePush(sections,headingSection(/как работаем|четыре шага/i));
  uniquePush(sections,document.getElementById('afx-faq'));
  uniquePush(sections,document.getElementById('aurafx-reviews'));

  function targetsFor(section){
    var list=[];
    var selectors=[
      'h2','h3',
      '.afx-price-card-decor',
      '.afx-faq-kicker','.afx-faq-title','.afx-faq-item',
      '.afx-r-kicker','.afx-r-title','.afx-r-sub','.afx-r-panel','.afx-r-card'
    ];
    selectors.forEach(function(sel){
      [].slice.call(section.querySelectorAll(sel)).forEach(function(el){
        if(list.indexOf(el)===-1 && list.length<14)list.push(el);
      });
    });
    if(!list.length){
      [].slice.call(section.children).slice(0,8).forEach(function(el){list.push(el)});
    }
    return list;
  }

  var groups=[];
  sections.forEach(function(section){
    if(!section)return;
    var targets=targetsFor(section);
    if(!targets.length)return;

    var rect=section.getBoundingClientRect();
    if(rect.top < innerHeight*.84)return;

    targets.forEach(function(el){el.classList.add('afx-reveal-prep')});
    groups.push({section:section,targets:targets});
  });

  var observer=new IntersectionObserver(function(entries,obs){
    entries.forEach(function(entry){
      if(!entry.isIntersecting)return;
      var group=groups.find(function(g){return g.section===entry.target});
      if(!group)return;

      group.targets.forEach(function(el,index){
        var delay=Math.min(index*52,310);
        el.classList.remove('afx-reveal-prep');
        if(typeof el.animate!=='function'){
          el.style.opacity='';
          el.style.transform='';
          return;
        }
        try{
          var anim=el.animate([
            {opacity:0,transform:'translate3d(0,14px,0)'},
            {opacity:1,transform:'translate3d(0,0,0)'}
          ],{
            duration:620,
            delay:delay,
            easing:'cubic-bezier(.16,.84,.28,1)',
            fill:'both'
          });
          if(anim && anim.finished && typeof anim.finished.then==='function'){
            anim.finished.then(function(){
              try{anim.cancel()}catch(e){}
              el.style.opacity='';
              el.style.transform='';
            }).catch(function(){});
          }
        }catch(e){el.style.opacity='';el.style.transform='';}
      });

      obs.unobserve(entry.target);
    });
  },{root:null,rootMargin:'0px 0px -7% 0px',threshold:.06});

  groups.forEach(function(g){observer.observe(g.section)});
})();
</script>`;

const MOTION_OVERRIDE_HTML = String.raw`
<style>
  /* Owner override: full motion on this browser even when the OS requests reduced motion. */
  html.afx-force-motion .afx-price-card-decor .afx-price-card-glow{
    animation:afxCardGlow 9s ease-in-out infinite alternate!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-word{
    animation:afxCardWordFloat 8.6s ease-in-out var(--float-delay,0s) infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-word span{
    animation:afxCardWordGlow 8.6s ease-in-out var(--float-delay,0s) infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-orb{
    animation:afxCardOrb 12s ease-in-out infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-orb2{
    animation:afxCardOrb 10s ease-in-out infinite reverse!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-line{
    animation:afxCardLine1 8s ease-in-out infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-line2{
    animation:afxCardLine2 10s ease-in-out infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-spark{
    animation:afxCardSpark 5.5s ease-in-out infinite!important;
  }
  html.afx-force-motion .afx-price-card-decor .afx-price-card-particle{
    animation:afxCardParticle var(--dur) ease-in-out var(--delay) infinite!important;
  }
  html.afx-force-motion .afx-online-dot{
    animation:afxOnlinePulse 2s ease-in-out infinite!important;
  }

  @media(prefers-reduced-motion:reduce){
    html.afx-force-motion .afx-reveal{
      opacity:0!important;
      transform:translate3d(0,18px,0)!important;
      transition:
        opacity .72s cubic-bezier(.22,.75,.24,1),
        transform .72s cubic-bezier(.22,.75,.24,1)!important;
      will-change:opacity,transform!important;
    }
    html.afx-force-motion .afx-reveal.afx-reveal-visible{
      opacity:1!important;
      transform:translate3d(0,0,0)!important;
    }
    html.afx-force-motion .afx-reveal-item{
      opacity:0!important;
      transform:translate3d(0,12px,0)!important;
      transition:
        opacity .56s cubic-bezier(.22,.75,.24,1),
        transform .56s cubic-bezier(.22,.75,.24,1)!important;
      transition-delay:var(--afx-reveal-delay,0ms)!important;
      will-change:opacity,transform!important;
    }
    html.afx-force-motion .afx-reveal-visible .afx-reveal-item,
    html.afx-force-motion .afx-reveal-item.afx-reveal-visible{
      opacity:1!important;
      transform:translate3d(0,0,0)!important;
    }
  }
</style>
<script>
(function(){
  try{
    var params=new URLSearchParams(location.search);
    if(params.get('motion')==='full')localStorage.setItem('afx_motion_mode','full');
    if(params.get('motion')==='system')localStorage.removeItem('afx_motion_mode');
    if(localStorage.getItem('afx_motion_mode')==='full'){
      document.documentElement.classList.add('afx-force-motion');
    }else{
      document.documentElement.classList.remove('afx-force-motion');
    }
  }catch(e){}
})();
</script>`;

const SMOOTH_MOTION_HTML = String.raw`
<style>
  /* The main floating logo is driven by rAF below. This avoids CSS keyframe
     jumps on some Android GPU/WebView combinations. */
  .afx-price-card-decor .afx-price-card-word,
  html.afx-force-motion .afx-price-card-decor .afx-price-card-word{
    animation:none!important;
    filter:drop-shadow(0 10px 18px rgba(0,0,0,.18));
  }
  .afx-price-card-decor .afx-price-card-word span,
  html.afx-force-motion .afx-price-card-decor .afx-price-card-word span{
    animation:none!important;
    filter:none!important;
  }

  /* Keep glow visual, but animate only cheap transform/opacity properties. */
  .afx-price-card-decor .afx-price-card-glow{
    filter:blur(6px);
  }
</style>
<script>
(function(){
  var force=false;
  try{force=localStorage.getItem('afx_motion_mode')==='full'}catch(e){}
  var reduced=!force && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;

  var words=[];
  var raf=0;
  var start=performance.now();

  function collect(){
    words=[].slice.call(document.querySelectorAll('.afx-price-card-word'));
    words.forEach(function(word,index){
      word.dataset.afxPhase=String(index*1.83);
      word.style.willChange='transform,opacity';
    });
  }

  function frame(now){
    if(document.hidden){
      raf=requestAnimationFrame(frame);
      return;
    }

    var t=(now-start)/1000;
    for(var i=0;i<words.length;i++){
      var word=words[i];
      if(!word.isConnected)continue;

      var phase=Number(word.dataset.afxPhase||0);
      var a=t*(Math.PI*2/7.6)+phase;
      var b=t*(Math.PI*2/11.4)+phase*.7;

      var x=Math.sin(b)*2.3;
      var y=-4.5 + Math.sin(a)*5.2;
      var scale=1.012 + Math.sin(a+1.1)*0.011;
      var opacity=.80 + (Math.sin(a-0.6)+1)*.07;

      word.style.transform=
        'translate(-50%,-50%) perspective(520px) rotateX(22deg) '+
        'translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) '+
        'scale('+scale.toFixed(4)+')';
      word.style.opacity=opacity.toFixed(3);
    }

    raf=requestAnimationFrame(frame);
  }

  function init(){
    collect();
    if(!words.length)return;
    cancelAnimationFrame(raf);
    start=performance.now();
    raf=requestAnimationFrame(frame);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){
      requestAnimationFrame(function(){requestAnimationFrame(init)});
    },{once:true});
  }else{
    requestAnimationFrame(function(){requestAnimationFrame(init)});
  }

  document.addEventListener('visibilitychange',function(){
    if(!document.hidden)start=performance.now();
  });
})();
</script>`;
const SHOWCASE_FLOAT_HTML = String.raw`
<style>
  .afx-showcase-float-card{
    will-change:transform,opacity;
    transform-style:preserve-3d;
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden;
    transition:box-shadow .35s ease;
  }
  .afx-showcase-float-card img{
    will-change:transform,opacity;
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden;
  }
</style>
<script>
(function(){
  var force=false;
  try{force=localStorage.getItem('afx_motion_mode')==='full'}catch(e){}
  var reduced=!force && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function headingSection(pattern){
    var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,.section-title,.title'));
    for(var i=0;i<heads.length;i++){
      var t=(heads[i].textContent||'').replace(/\s+/g,' ').trim();
      if(pattern.test(t)) return heads[i].closest('section,article') || heads[i].parentElement;
    }
    return null;
  }

  function unique(list, el){ if(el && list.indexOf(el)===-1) list.push(el); }

  function findShowcaseCards(section){
    /* The portfolio upgrade marks every real work card with afx-case-ready.
       Prefer those markers: they survive text/layout changes and keep the
       three hero cards animated even after the case-story UI is injected. */
    var ready=[].slice.call(document.querySelectorAll('.afx-case-ready')).filter(function(el){
      var r=el.getBoundingClientRect();
      return r.width>=90 && r.height>=120;
    });
    if(ready.length>=3){
      ready.sort(function(a,b){
        var ra=a.getBoundingClientRect(), rb=b.getBoundingClientRect();
        return (ra.top-rb.top)||(ra.left-rb.left);
      });
      return ready.slice(0,3);
    }
    if(!section) return [];
    var nodes=[].slice.call(section.querySelectorAll('article,div,a,li'));
    nodes=nodes.filter(function(el){
      var r=el.getBoundingClientRect();
      if(r.width<90 || r.height<120 || el.children.length<1) return false;
      return !!el.querySelector('img') || /карточка|слайд|кейс/i.test((el.textContent||''));
    });
    nodes=nodes.filter(function(el){
      return !nodes.some(function(other){ return other!==el && el.contains(other); });
    });
    nodes.sort(function(a,b){
      var ra=a.getBoundingClientRect(), rb=b.getBoundingClientRect();
      return (ra.top-rb.top) || (ra.left-rb.left);
    });
    return nodes.slice(0,3);
  }

  function preloadCardAssets(card){
    [].slice.call(card.querySelectorAll('img')).forEach(function(img, idx){
      try{
        img.loading='eager';
        img.decoding='async';
        if(idx===0) img.fetchPriority='high';
      }catch(e){}
      if(img.currentSrc || img.src){
        var pre=new Image();
        pre.decoding='async';
        pre.src=img.currentSrc || img.src;
      }
    });

    var bg=(getComputedStyle(card).backgroundImage||'');
    var m, re=/url\(["']?([^"')]+)["']?\)/g;
    while((m=re.exec(bg))){
      var pre=new Image();
      pre.decoding='async';
      pre.src=m[1];
    }
  }

  function initFloat(cards){
    if(!cards.length || reduced) return;
    cards.forEach(function(card, index){
      card.classList.add('afx-showcase-float-card');
      card.dataset.afxCardFloatPhase=String(index*1.7);
      card.style.willChange='transform';
    });

    var start=performance.now();
    function frame(now){
      if(document.hidden){ requestAnimationFrame(frame); return; }
      var t=(now-start)/1000;
      cards.forEach(function(card, index){
        if(!card.isConnected) return;
        var ph=Number(card.dataset.afxCardFloatPhase||0);
        var x=Math.sin(t*0.72 + ph)*7;
        var y=Math.sin(t*1.04 + ph*1.18)*9;
        var rz=Math.sin(t*0.58 + ph)*2.4;
        var scale=1 + Math.sin(t*0.88 + ph + 0.6)*0.012;
        card.style.transform='translate3d('+x.toFixed(2)+'px,'+y.toFixed(2)+'px,0) rotate('+rz.toFixed(2)+'deg) scale('+scale.toFixed(4)+')';
      });
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var started=false;
  function init(){
    if(started)return true;
    var sec=headingSection(/детали решают|рассмотри поближе|каталог дизайна|портфолио|работы|кейсы/i);
    var cards=findShowcaseCards(sec);
    if(cards.length<3)return false;
    started=true;
    cards.forEach(preloadCardAssets);
    initFloat(cards);
    return true;
  }

  function boot(){
    if(init())return;
    var tries=0,t=setInterval(function(){
      tries++;
      if(init()||tries>=24)clearInterval(t);
    },250);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
</script>`;

const PREMIUM_STUDIO_HTML = String.raw`
<style>
  #afx-premium-cta{
    position:relative;overflow:hidden;padding:92px 24px;
    color:#fff;font-family:inherit;
  }
  #afx-premium-cta:before{
    content:"";position:absolute;inset:8% 6%;
    border-radius:42px;
    background:
      radial-gradient(520px 280px at 80% 20%,rgba(174,72,255,.16),transparent 68%),
      radial-gradient(430px 260px at 12% 84%,rgba(70,225,255,.08),transparent 70%),
      linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));
    border:1px solid rgba(255,255,255,.09);
    box-shadow:0 28px 90px rgba(0,0,0,.24),inset 0 1px rgba(255,255,255,.035);
    pointer-events:none;
  }
  .afx-premium-wrap{position:relative;z-index:1;max-width:1100px;margin:auto;padding:54px 48px}
  .afx-premium-kicker{font-size:12px;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#b985ff;margin-bottom:18px}
  .afx-premium-title{max-width:850px;margin:0;font-size:clamp(42px,7vw,78px);line-height:.96;letter-spacing:-.055em;font-weight:950}
  .afx-premium-copy{max-width:650px;margin:24px 0 0;color:#a99bb8;font-size:17px;line-height:1.65}
  .afx-premium-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
  .afx-premium-btn{
    appearance:none;border:0;border-radius:17px;padding:15px 19px;font:inherit;font-size:15px;font-weight:900;
    cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:9px;
    color:#fff;background:linear-gradient(135deg,#ad45ff,#6b2aee);box-shadow:0 15px 42px rgba(119,44,232,.28);
    transition:transform .2s ease,box-shadow .2s ease;
  }
  .afx-premium-btn:active{transform:scale(.98)}
  .afx-premium-btn.secondary{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.10);box-shadow:none;color:#dcd2e6}
  .afx-premium-trust{display:flex;gap:18px;flex-wrap:wrap;margin-top:24px;color:#786d84;font-size:12px}
  .afx-premium-trust span:before{content:"•";color:#9d52ff;margin-right:7px}

  .afx-case-ready{position:relative;cursor:pointer}
  .afx-case-ready:after{
    content:"Открыть кейс ↗";position:absolute;z-index:20;right:12px;bottom:12px;
    padding:8px 10px;border-radius:999px;background:rgba(10,5,18,.72);border:1px solid rgba(255,255,255,.12);
    color:#eee7f5;font:800 11px/1 system-ui,sans-serif;letter-spacing:.02em;
    backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    opacity:0;transform:translateY(5px);transition:.2s ease;pointer-events:none;
  }
  .afx-case-ready:hover:after{opacity:1;transform:none}

  .afx-premium-modal{
    position:fixed;inset:0;z-index:10020;display:none;align-items:center;justify-content:center;padding:18px;
    background:rgba(4,2,8,.78);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  }
  .afx-premium-modal.open{display:flex}
  .afx-premium-dialog{
    position:relative;width:min(1060px,100%);max-height:min(880px,calc(100vh - 36px));overflow:auto;
    border:1px solid rgba(255,255,255,.12);border-radius:30px;
    background:linear-gradient(145deg,rgba(20,11,31,.98),rgba(8,4,14,.98));
    box-shadow:0 35px 120px rgba(0,0,0,.55);
    color:#fff;font-family:inherit;
  }
  .afx-modal-close{
    position:sticky;float:right;top:14px;right:14px;z-index:12;margin:14px 14px -54px 0;
    width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.11);
    background:rgba(14,8,23,.78);color:#fff;font-size:23px;cursor:pointer;
    backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  }

  .afx-case-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(330px,.85fr);min-height:620px}
  .afx-case-media{position:relative;display:grid;place-items:center;min-height:620px;padding:34px;background:radial-gradient(circle at 50% 48%,rgba(132,54,244,.18),transparent 54%)}
  .afx-case-media img{display:block;max-width:100%;max-height:74vh;object-fit:contain;border-radius:22px;box-shadow:0 24px 70px rgba(0,0,0,.3)}
  .afx-case-info{padding:54px 42px 44px;border-left:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;justify-content:center}
  .afx-case-kicker{color:#b67aff;font-size:11px;font-weight:900;letter-spacing:.2em;text-transform:uppercase}
  .afx-case-title{margin:14px 0 16px;font-size:clamp(34px,5vw,58px);line-height:.98;letter-spacing:-.045em}
  .afx-case-copy{margin:0;color:#a99db4;line-height:1.65}
  .afx-case-chips{display:flex;gap:8px;flex-wrap:wrap;margin:22px 0 4px}
  .afx-case-chip{padding:7px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.035);color:#aa9cb5;font-size:11px;font-weight:750}
  .afx-case-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:26px}
  .afx-case-nav{display:flex;gap:8px;margin-top:14px}
  .afx-case-nav button{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.045);color:#d9d0e2;border-radius:13px;padding:10px 13px;font:800 12px inherit;cursor:pointer}

  .afx-brief-dialog{width:min(760px,100%);padding:48px}
  .afx-brief-kicker{color:#b67aff;font-size:11px;font-weight:900;letter-spacing:.2em;text-transform:uppercase}
  .afx-brief-title{margin:12px 0 8px;font-size:clamp(36px,6vw,58px);line-height:1;letter-spacing:-.045em}
  .afx-brief-sub{margin:0 0 26px;color:#9c90a9;line-height:1.55}
  .afx-brief-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .afx-field{display:grid;gap:7px;color:#bdb2c6;font-size:12px;font-weight:750}
  .afx-field.full{grid-column:1/-1}
  .afx-field input,.afx-field select,.afx-field textarea{
    width:100%;box-sizing:border-box;border:1px solid rgba(255,255,255,.11);border-radius:15px;
    background:#10081a;color:#fff;font:inherit;padding:13px 14px;outline:none;
  }
  .afx-field textarea{min-height:108px;resize:vertical}
  .afx-field input:focus,.afx-field select:focus,.afx-field textarea:focus{border-color:#a84dff;box-shadow:0 0 0 4px rgba(157,67,255,.11)}
  .afx-brief-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:17px}
  .afx-brief-status{min-height:20px;margin:12px 0 0;color:#83eec2;font-size:12px;line-height:1.45}

  #afx-telegram-channel{padding:20px 24px 8px;color:#fff;font-family:inherit}
  .afx-channel-wrap{max-width:1100px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:24px 26px;border:1px solid rgba(125,92,255,.22);border-radius:24px;background:linear-gradient(135deg,rgba(103,47,223,.11),rgba(30,12,54,.32))}
  .afx-channel-copy{min-width:0}.afx-channel-kicker{font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#9e8cac}.afx-channel-title{margin:7px 0 5px;font-size:24px;font-weight:950;letter-spacing:-.035em}.afx-channel-sub{margin:0;color:#9e92a8;font-size:13px;line-height:1.5}
  .afx-channel-btn{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;font-size:13px;font-weight:900;padding:13px 17px;border-radius:15px;background:linear-gradient(135deg,#9e46ff,#6d2be9);box-shadow:0 10px 28px rgba(112,43,233,.22)}

  #afx-premium-footer{padding:42px 24px 112px;color:#fff;font-family:inherit}
  .afx-footer-inner{max-width:1100px;margin:auto;padding-top:28px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;gap:24px;align-items:flex-end}
  .afx-footer-brand{font-size:30px;font-weight:950;letter-spacing:-.04em}
  .afx-footer-brand span{background:linear-gradient(90deg,#70e9ff,#b34cff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .afx-footer-copy{margin-top:7px;color:#746a7e;font-size:12px}
  .afx-footer-links{display:flex;gap:9px;flex-wrap:wrap}
  .afx-footer-links a{color:#c7bacf;text-decoration:none;font-size:12px;font-weight:800;padding:9px 11px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025)}

  @media(max-width:760px){
    #afx-premium-cta{padding:66px 16px}.afx-premium-wrap{padding:42px 26px}
    .afx-premium-title{font-size:43px}.afx-premium-copy{font-size:15px}
    .afx-case-ready:after{opacity:.86;transform:none;font-size:10px}
    .afx-case-grid{grid-template-columns:1fr;min-height:0}.afx-case-media{min-height:380px;padding:22px}
    .afx-case-info{padding:30px 24px 34px;border-left:0;border-top:1px solid rgba(255,255,255,.08)}
    .afx-brief-dialog{padding:42px 20px 28px}.afx-brief-grid{grid-template-columns:1fr}.afx-field.full{grid-column:auto}
    .afx-channel-wrap{display:block;padding:22px 20px}.afx-channel-btn{margin-top:16px;width:100%;box-sizing:border-box}.afx-channel-title{font-size:22px}
    .afx-footer-inner{display:block}.afx-footer-links{margin-top:20px}
  }

  @media(prefers-reduced-motion:reduce){
    .afx-premium-btn,.afx-case-ready:after{transition:none}
  }
</style>

<section id="afx-premium-cta">
  <div class="afx-premium-wrap">
    <div class="afx-premium-kicker">AuraFX / Start a project</div>
    <h2 class="afx-premium-title">Карточки, которые хочется рассмотреть.</h2>
    <p class="afx-premium-copy">Расскажи о товаре и задаче — короткий бриф соберёт всё нужное в одном сообщении. Без регистрации и длинной переписки на старте.</p>
    <div class="afx-premium-actions">
      <button class="afx-premium-btn" id="afx-open-brief" type="button">Начать проект →</button>
      <a class="afx-premium-btn secondary" href="https://t.me/AuraFX_marketplace" target="_blank" rel="noopener">Telegram ↗</a>
    </div>
    <div class="afx-premium-trust"><span>Бриф ≈ 60 секунд</span><span>Можно начать с одной карточки</span><span>Telegram или Avito</span></div>
  </div>
</section>

<div class="afx-premium-modal" id="afx-case-modal" aria-hidden="true">
  <div class="afx-premium-dialog" role="dialog" aria-modal="true" aria-label="Кейс AuraFX">
    <button class="afx-modal-close" type="button" data-close-modal aria-label="Закрыть">×</button>
    <div class="afx-case-grid">
      <div class="afx-case-media"><img id="afx-case-image" alt=""></div>
      <div class="afx-case-info">
        <div class="afx-case-kicker">AuraFX / Case study</div>
        <h3 class="afx-case-title" id="afx-case-title">Дизайн карточки</h3>
        <p class="afx-case-copy">Демонстрационный концепт AuraFX: акцент на читаемой иерархии, композиции и визуальной подаче преимуществ товара.</p>
        <div class="afx-case-chips"><span class="afx-case-chip">Композиция</span><span class="afx-case-chip">Типографика</span><span class="afx-case-chip">Акценты</span></div>
        <div class="afx-case-actions">
          <button class="afx-premium-btn" id="afx-case-order" type="button">Хочу в таком стиле →</button>
        </div>
        <div class="afx-case-nav"><button id="afx-case-prev" type="button">← Предыдущий</button><button id="afx-case-next" type="button">Следующий →</button></div>
      </div>
    </div>
  </div>
</div>

<div class="afx-premium-modal" id="afx-brief-modal" aria-hidden="true">
  <div class="afx-premium-dialog afx-brief-dialog" role="dialog" aria-modal="true" aria-label="Бриф AuraFX">
    <button class="afx-modal-close" type="button" data-close-modal aria-label="Закрыть">×</button>
    <div class="afx-brief-kicker">Новый проект</div>
    <h3 class="afx-brief-title">Короткий бриф</h3>
    <p class="afx-brief-sub">Заполни главное. После отправки заявка сразу сохранится в AuraFX — дублировать её в Telegram не нужно.</p>
    <form id="afx-brief-form">
      <div class="afx-brief-grid">
        <label class="afx-field">Площадка
          <select name="marketplace"><option>Wildberries</option><option>Ozon</option><option>Avito</option><option>Другое</option></select>
        </label>
        <label class="afx-field">Количество карточек
          <input name="count" type="number" min="1" max="50" value="1" required>
        </label>
        <label class="afx-field full">Что за товар?
          <input name="product" maxlength="100" placeholder="Например, беспроводные наушники" required>
        </label>
        <label class="afx-field">Стиль
          <select name="style"><option>На усмотрение AuraFX</option><option>Премиальный</option><option>Минималистичный</option><option>Яркий marketplace</option><option>Технологичный</option></select>
        </label>
        <label class="afx-field">Желаемый срок
          <input name="deadline" maxlength="60" placeholder="Не срочно / дата">
        </label>
        <label class="afx-field">Как связаться?
          <input name="contact" maxlength="100" placeholder="Telegram @username / Avito" required>
        </label>
        <label class="afx-field full">Комментарий
          <textarea name="comment" maxlength="500" placeholder="Ссылка на товар, пожелания, референсы — если есть"></textarea>
        </label>
      </div>
      <div class="afx-brief-actions">
        <button class="afx-premium-btn" type="submit">Отправить заявку →</button>
        <a class="afx-premium-btn secondary" href="https://t.me/AuraFX_marketplace" target="_blank" rel="noopener">Написать в Telegram ↗</a>
      </div>
      <div class="afx-brief-status" id="afx-brief-status" aria-live="polite"></div>
    </form>
  </div>
</div>

<section id="afx-telegram-channel" aria-label="Telegram-канал AuraFX">
  <div class="afx-channel-wrap">
    <div class="afx-channel-copy">
      <div class="afx-channel-kicker">AuraFX / Telegram</div>
      <div class="afx-channel-title">Наш Telegram-канал</div>
      <p class="afx-channel-sub">Новые работы, кейсы и обновления AuraFX — в одном месте.</p>
    </div>
    <a class="afx-channel-btn" href="https://t.me/AuraFX_design" target="_blank" rel="noopener">Открыть канал ↗</a>
  </div>
</section>

<footer id="afx-premium-footer">
  <div class="afx-footer-inner">
    <div><div class="afx-footer-brand"><span>AuraFX</span></div><div class="afx-footer-copy">Дизайн карточек товаров • 2026</div></div>
    <div class="afx-footer-links"><a href="https://t.me/AuraFX_marketplace" target="_blank" rel="noopener">Написать ↗</a><a href="https://t.me/AuraFX_design" target="_blank" rel="noopener">Telegram-канал ↗</a><a href="https://www.avito.ru/brands/9dc551ff2d81a0ee55cfe8690760f5ca" target="_blank" rel="noopener">Avito ↗</a><a href="/privacy">Конфиденциальность</a><a href="/admin">Admin</a></div>
  </div>
</footer>

<script>
(function(){
  var body=document.body, caseModal=document.getElementById('afx-case-modal'), briefModal=document.getElementById('afx-brief-modal');
  var caseImg=document.getElementById('afx-case-image'), caseTitle=document.getElementById('afx-case-title'), current=0, cases=[];

  function visitorId(){
    try{
      var id=localStorage.getItem('afx_visitor_id');
      if(id&&/^[A-Za-z0-9_-]{16,80}$/.test(id))return id;
      return '';
    }catch(e){return ''}
  }
  function track(type,meta){
    var id=visitorId();if(!id)return;
    try{fetch('/api/event',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({visitor_id:id,type:type,meta:String(meta||'').slice(0,160)}),keepalive:true,cache:'no-store'}).catch(function(){})}catch(e){}
  }
  function attribution(){
    try{
      var key='afx_attribution', existing=null;
      try{existing=JSON.parse(localStorage.getItem(key)||'null')}catch(e){}
      var p=new URLSearchParams(location.search);
      var hasUtm=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].some(function(k){return p.get(k)});
      if(!existing || hasUtm){
        existing={
          source:(p.get('utm_source')||'').slice(0,80),
          medium:(p.get('utm_medium')||'').slice(0,80),
          campaign:(p.get('utm_campaign')||'').slice(0,120),
          content:(p.get('utm_content')||'').slice(0,120),
          term:(p.get('utm_term')||'').slice(0,120),
          referrer:(document.referrer||'').slice(0,300),
          landing:(location.pathname+location.search).slice(0,300),
          captured_at:new Date().toISOString()
        };
        localStorage.setItem(key,JSON.stringify(existing));
      }
      return existing||{};
    }catch(e){return {}}
  }
  attribution();
  function escText(s){return String(s||'').replace(/\s+/g,' ').trim()}
  function headingSection(pattern){
    var heads=[].slice.call(document.querySelectorAll('h1,h2,h3,.section-title,.title'));
    for(var i=0;i<heads.length;i++){
      var t=escText(heads[i].textContent);
      if(pattern.test(t)) return heads[i].closest('section,article')||heads[i].parentElement;
    }
    return null;
  }
  function imageOf(el){
    var img=el.querySelector('img');
    if(img&&(img.currentSrc||img.src))return {src:img.currentSrc||img.src,alt:img.alt||''};
    var all=[el].concat([].slice.call(el.querySelectorAll('*')));
    for(var i=0;i<all.length;i++){
      var bg=getComputedStyle(all[i]).backgroundImage||'',m=bg.match(/url\(["']?([^"')]+)["']?\)/);
      if(m)return {src:m[1],alt:''};
    }
    return null;
  }
  function titleOf(el,info,index){
    var h=el.querySelector('h2,h3,h4,strong,[class*="title"]');
    var t=escText(h?h.textContent:'');
    if(!t)t=escText(info.alt).replace(/^карточка\s*/i,'');
    if(!t)t='Концепт '+(index+1);
    return t.slice(0,90);
  }
  function collectCases(){
    var sec=headingSection(/каталог дизайна|детали решают|рассмотри поближе|портфолио|работы|кейсы/i);
    if(!sec)return;
    var candidates=[].slice.call(sec.querySelectorAll('article,li,a,div')).filter(function(el){
      var r=el.getBoundingClientRect(),info=imageOf(el);
      return !!info && r.width>=120 && r.height>=150 && r.height<=900;
    });
    candidates=candidates.filter(function(el){
      return !candidates.some(function(other){return other!==el&&el.contains(other)&&imageOf(other)});
    });
    var seen={};
    candidates.forEach(function(el){
      if(cases.length>=24)return;
      var info=imageOf(el);if(!info||seen[info.src])return;seen[info.src]=1;
      var item={el:el,src:info.src,title:titleOf(el,info,cases.length)};
      cases.push(item);el.classList.add('afx-case-ready');
      el.setAttribute('role','button');el.setAttribute('tabindex','0');
      el.addEventListener('click',function(e){
        var action=e.target.closest('button,input,select,textarea');if(action)return;
        if(el.tagName==='A')e.preventDefault();
        openCase(cases.indexOf(item));
      });
      el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openCase(cases.indexOf(item))}});
    });
  }
  function openModal(el){el.classList.add('open');el.setAttribute('aria-hidden','false');body.style.overflow='hidden'}
  function closeModal(el){el.classList.remove('open');el.setAttribute('aria-hidden','true');if(!document.querySelector('.afx-premium-modal.open'))body.style.overflow=''}
  function openCase(index){
    if(!cases.length)return;current=(index+cases.length)%cases.length;
    var c=cases[current];caseImg.src=c.src;caseImg.alt=c.title;caseTitle.textContent=c.title;openModal(caseModal);track('case_open',c.title);
  }
  document.getElementById('afx-case-prev').addEventListener('click',function(){openCase(current-1)});
  document.getElementById('afx-case-next').addEventListener('click',function(){openCase(current+1)});
  document.getElementById('afx-case-order').addEventListener('click',function(){
    var c=cases[current];closeModal(caseModal);openBrief(c?c.title:''); 
  });

  function openBrief(caseName){
    var form=document.getElementById('afx-brief-form');
    if(caseName){
      var field=form.elements.comment;
      if(field&&!field.value)field.value='Понравился стиль кейса: '+caseName+'. ';
    }
    openModal(briefModal);track('brief_open',caseName||'direct');
  }
  document.getElementById('afx-open-brief').addEventListener('click',function(){openBrief('')});
  [].slice.call(document.querySelectorAll('[data-close-modal]')).forEach(function(btn){btn.addEventListener('click',function(){closeModal(btn.closest('.afx-premium-modal'))})});
  [caseModal,briefModal].forEach(function(modal){modal.addEventListener('click',function(e){if(e.target===modal)closeModal(modal)})});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){if(caseModal.classList.contains('open'))closeModal(caseModal);if(briefModal.classList.contains('open'))closeModal(briefModal)}
    if(caseModal.classList.contains('open')&&e.key==='ArrowLeft')openCase(current-1);
    if(caseModal.classList.contains('open')&&e.key==='ArrowRight')openCase(current+1);
  });

  document.getElementById('afx-brief-form').addEventListener('submit',async function(e){
    e.preventDefault();
    var form=e.currentTarget, btn=form.querySelector('button[type="submit"]');
    var f=new FormData(form), status=document.getElementById('afx-brief-status');
    var attr=attribution();
    var payload={
      visitor_id:visitorId(),
      marketplace:String(f.get('marketplace')||''),
      count:Number(f.get('count')||1),
      product:String(f.get('product')||''),
      style:String(f.get('style')||''),
      deadline:String(f.get('deadline')||''),
      contact:String(f.get('contact')||''),
      comment:String(f.get('comment')||''),
      source:String(attr.source||''),medium:String(attr.medium||''),campaign:String(attr.campaign||''),
      content:String(attr.content||''),term:String(attr.term||''),referrer:String(attr.referrer||''),landing:String(attr.landing||'')
    };
    btn.disabled=true;status.textContent='Отправляю заявку…';
    try{
      var res=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(payload)});
      var data=await res.json();
      if(!res.ok)throw new Error(data.error||'Не удалось сохранить заявку');
      status.textContent='Заявка №'+data.id+' отправлена ✓ AuraFX получил её и свяжется по указанному контакту.';
      track('brief_submit',payload.marketplace+' / '+payload.count);
    }catch(err){status.textContent=err.message||'Не удалось сохранить заявку. Попробуй ещё раз.'}
    finally{btn.disabled=false}
  });

  function placeCTA(){
    var cta=document.getElementById('afx-premium-cta');
    var pricing=headingSection(/тариф|цены|без квеста/i);
    var portfolio=headingSection(/каталог дизайна|детали решают|портфолио|работы|кейсы/i);
    if(pricing&&pricing.parentNode){pricing.parentNode.insertBefore(cta,pricing)}
    else if(portfolio&&portfolio.parentNode){portfolio.parentNode.insertBefore(cta,portfolio.nextSibling)}
  }

  placeCTA();
  collectCases();
})();
</script>`;


const PROMO_WHEEL_HTML = String.raw`
<style>
  #afx-promo-lab{padding:34px 24px 12px;color:#fff}
  .afx-promo-wrap{max-width:1100px;margin:0 auto}
  .afx-promo-panel{position:relative;overflow:hidden;border:1px solid rgba(165,93,255,.16);border-radius:30px;padding:30px 28px;background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.025));box-shadow:0 24px 70px rgba(0,0,0,.22);backdrop-filter:blur(16px)}
  .afx-promo-panel:before,.afx-promo-panel:after{content:"";position:absolute;border-radius:50%;pointer-events:none;filter:blur(48px)}
  .afx-promo-panel:before{width:250px;height:250px;right:-70px;top:-70px;background:rgba(161,68,255,.18)}
  .afx-promo-panel:after{width:240px;height:240px;left:-80px;bottom:-100px;background:rgba(69,223,255,.09)}
  .afx-promo-kicker{display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;border:1px solid rgba(190,120,255,.26);background:rgba(255,255,255,.045);color:#d8cae9;font-size:12px;font-weight:850;letter-spacing:.13em;text-transform:uppercase}
  .afx-promo-dot{width:8px;height:8px;border-radius:50%;background:#57ebff;box-shadow:0 0 15px rgba(87,235,255,.7)}
  .afx-promo-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.92fr);gap:26px;align-items:center;margin-top:18px}
  .afx-promo-title{margin:0 0 10px;font-size:clamp(34px,5vw,58px);line-height:.98;letter-spacing:-.05em}
  .afx-promo-sub{max-width:580px;margin:0;color:#b6a8c6;font-size:16px;line-height:1.65}
  .afx-promo-badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
  .afx-promo-badges span{padding:9px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.04);color:#ded5e6;font-size:12px;font-weight:760}
  .afx-promo-note{min-height:22px;color:#8de6c8;font-size:13px;line-height:1.5;margin-top:14px}
  .afx-promo-preview{display:flex;justify-content:center}
  .afx-promo-mini{position:relative;width:min(420px,100%);padding:22px 20px 18px;border-radius:30px;border:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.02));box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 22px 60px rgba(0,0,0,.22);display:grid;justify-items:center;gap:16px}
  .afx-promo-mini:before{content:"";position:absolute;inset:18px;border-radius:24px;border:1px solid rgba(255,255,255,.05);pointer-events:none}
  .afx-promo-wheel-wrap{position:relative;width:332px;height:332px;display:grid;place-items:center;animation:afxPromoLevitate 5.6s ease-in-out infinite}
  .afx-promo-wheel-wrap.is-spinning{animation:none}
  .afx-promo-wheel-shadow{position:absolute;inset:26px;border-radius:50%;background:radial-gradient(circle at 50% 58%,rgba(126,55,255,.38),rgba(57,20,104,.18) 52%,transparent 72%);filter:blur(23px);transform:translateY(16px)}
  .afx-promo-rim{position:absolute;inset:-1px;border-radius:50%;z-index:1;pointer-events:none;background:linear-gradient(145deg,rgba(255,255,255,.44),rgba(133,74,222,.2) 22%,rgba(25,14,41,.62) 52%,rgba(92,226,255,.22) 78%,rgba(255,255,255,.36));box-shadow:0 28px 72px rgba(0,0,0,.44),0 0 40px rgba(139,72,255,.25),inset 0 1px 2px rgba(255,255,255,.55);padding:7px}
  .afx-promo-rim:before{content:"";position:absolute;inset:7px;border-radius:50%;background:#0d0716;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),inset 0 0 32px rgba(153,79,255,.1)}
  .afx-promo-rim:after{content:"";position:absolute;inset:13px;border-radius:50%;border:1px solid rgba(255,255,255,.12);box-shadow:0 0 18px rgba(91,229,255,.08),inset 0 0 20px rgba(0,0,0,.35)}
  .afx-promo-pointer{position:absolute;left:50%;top:-9px;transform:translateX(-50%);width:44px;height:50px;z-index:7;filter:drop-shadow(0 8px 14px rgba(0,0,0,.45)) drop-shadow(0 0 18px rgba(180,103,255,.32))}
  .afx-promo-pointer:before{content:"";position:absolute;left:50%;top:4px;transform:translateX(-50%);width:30px;height:38px;clip-path:polygon(50% 100%,0 18%,18% 0,82% 0,100% 18%);background:linear-gradient(160deg,#ffffff 0%,#e4d7ff 38%,#a96cff 68%,#5f2ad6 100%);border-radius:9px;box-shadow:inset 0 1px rgba(255,255,255,.7)}
  .afx-promo-pointer:after{content:"";position:absolute;left:50%;top:0;transform:translateX(-50%);width:15px;height:15px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#d9c9ff 44%,#8b51f6 100%);box-shadow:0 0 0 5px rgba(129,68,229,.22),0 0 18px rgba(255,255,255,.25)}
  .afx-promo-wheel{position:absolute;inset:14px;border-radius:50%;overflow:hidden;z-index:2;border:1px solid rgba(255,255,255,.12);background:
    radial-gradient(circle at 50% 50%,rgba(9,4,17,.02) 0 18%,transparent 18% 64%,rgba(255,255,255,.055) 64% 65%,transparent 65%),
    repeating-conic-gradient(from -90deg,rgba(255,255,255,.24) 0deg .75deg,transparent .75deg 51.4286deg),
    conic-gradient(from -90deg,
      #9b4dff 0 51.4286deg,
      #1d1230 51.4286deg 102.8572deg,
      #39cfff 102.8572deg 154.2858deg,
      #2a1747 154.2858deg 205.7144deg,
      #f56bd8 205.7144deg 257.143deg,
      #6230ee 257.143deg 308.5716deg,
      #f6c85d 308.5716deg 360deg);
    box-shadow:inset 0 0 0 12px rgba(7,3,14,.22),inset 0 0 0 13px rgba(255,255,255,.055),inset 0 0 48px rgba(7,3,16,.26);
    will-change:transform;transform:translateZ(0);transition:transform 6.8s cubic-bezier(.055,.985,.12,1),filter .35s ease,box-shadow .35s ease}
  .afx-promo-wheel:before{content:"";position:absolute;inset:7px;border-radius:50%;border:1px solid rgba(255,255,255,.14);box-shadow:inset 0 1px rgba(255,255,255,.12),0 0 0 1px rgba(8,4,15,.22);pointer-events:none;z-index:3}
  .afx-promo-wheel:after{content:"";position:absolute;inset:0;border-radius:50%;background:linear-gradient(145deg,rgba(255,255,255,.13),transparent 28%,transparent 64%,rgba(255,255,255,.035));mix-blend-mode:screen;pointer-events:none;z-index:1}
  .afx-promo-wheel.is-spinning{filter:saturate(1.18) brightness(1.08);box-shadow:inset 0 0 0 12px rgba(7,3,14,.2),inset 0 0 0 13px rgba(255,255,255,.07),inset 0 0 50px rgba(77,25,143,.18)}
  .afx-promo-labels{position:absolute;inset:0;pointer-events:none;z-index:4}
  .afx-promo-label{position:absolute;left:50%;top:50%;width:82px;margin-left:-41px;margin-top:-18px;display:grid;justify-items:center;gap:1px;text-align:center;color:#fff;text-shadow:0 3px 10px rgba(0,0,0,.5);backface-visibility:hidden}
  .afx-promo-label strong{font-size:16px;line-height:1;font-weight:1000;letter-spacing:-.035em}
  .afx-promo-label small{font-size:8px;line-height:1;font-weight:1000;letter-spacing:.13em;color:#fff4c4;text-transform:uppercase}
  .afx-promo-label.super strong{color:#fff8d8;text-shadow:0 0 11px rgba(255,220,111,.28),0 3px 10px rgba(0,0,0,.5)}
  .afx-promo-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:92px;height:92px;border-radius:50%;display:grid;align-content:center;gap:5px;justify-items:center;z-index:6;text-align:center;background:radial-gradient(circle at 34% 27%,#33214a 0,#171020 48%,#0b0612 100%);border:1px solid rgba(255,255,255,.18);box-shadow:0 0 0 7px rgba(11,6,18,.78),0 0 0 9px rgba(171,91,255,.24),0 14px 30px rgba(0,0,0,.4),inset 0 1px rgba(255,255,255,.12)}
  .afx-promo-center:before{content:"";position:absolute;inset:8px;border-radius:50%;border:1px solid rgba(255,255,255,.07);pointer-events:none}
  .afx-promo-center b{font-size:14px;letter-spacing:.16em;text-transform:uppercase;color:#fff;text-shadow:0 0 16px rgba(179,103,255,.25)}
  .afx-promo-center small{color:#bdaecb;font-size:9px;letter-spacing:.14em;text-transform:uppercase}
  .afx-promo-actions{display:grid;gap:10px;width:min(320px,100%)}
  .afx-promo-btn,.afx-promo-ghost{appearance:none;border:0;cursor:pointer;text-decoration:none;color:#fff;font:inherit;font-size:15px;font-weight:900;padding:16px 18px;border-radius:18px;transition:transform .18s ease,box-shadow .22s ease,opacity .2s ease;display:inline-flex;align-items:center;justify-content:center;gap:10px}
  .afx-promo-btn{background:linear-gradient(135deg,#bb59ff,#6b2bee);box-shadow:0 16px 38px rgba(122,53,238,.34)}
  .afx-promo-btn:hover{box-shadow:0 20px 46px rgba(122,53,238,.42)}
  .afx-promo-ghost{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);color:#d9d1e3}
  .afx-promo-btn:active,.afx-promo-ghost:active{transform:scale(.985)}
  .afx-promo-inline-status{font-size:12px;color:#cdbde0;text-align:center;min-height:18px}
  .afx-promo-result{width:100%;padding:18px 20px;border-radius:22px;border:1px solid rgba(137,80,255,.3);background:linear-gradient(135deg,rgba(182,85,255,.14),rgba(81,30,159,.18));display:none}
  .afx-promo-result.show{display:block}
  .afx-promo-result b{display:block;font-size:24px;letter-spacing:-.03em}
  .afx-promo-result code{display:inline-flex;margin-top:12px;padding:10px 12px;border-radius:12px;background:rgba(8,4,16,.56);border:1px solid rgba(255,255,255,.09);font:800 14px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff}
  .afx-promo-muted{color:#a999b8}
  .afx-promo-actions-2{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
  .afx-promo-actions-2 .afx-promo-ghost,.afx-promo-actions-2 .afx-promo-btn{flex:1 1 180px}
  .afx-promo-countdown{margin-top:12px;padding:10px 12px;border-radius:13px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.035);font-size:12px;font-weight:800;color:#cdbde0;letter-spacing:.02em}
  .afx-promo-result.super{border-color:rgba(255,215,112,.4);background:linear-gradient(135deg,rgba(255,198,72,.16),rgba(150,67,255,.2));box-shadow:0 0 34px rgba(255,206,84,.12)}
  .afx-promo-result.super b{background:linear-gradient(90deg,#fff0a8,#fff,#db9cff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .afx-promo-status{min-height:24px;color:#88ecc1;font-size:13px;line-height:1.5}
  .afx-promo-confetti{position:fixed;left:50%;top:50%;width:9px;height:14px;border-radius:3px;z-index:100;pointer-events:none;animation:afxPromoConfetti 1.45s cubic-bezier(.17,.67,.27,1) forwards;transform:translate(-50%,-50%)}
  @keyframes afxPromoConfetti{0%{opacity:1;transform:translate(-50%,-50%) rotate(0deg) scale(1)}100%{opacity:0;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) rotate(var(--r)) scale(.65)}}
  @keyframes afxPromoLevitate{0%,100%{transform:translateY(0px)}50%{transform:translateY(-8px)}}
  @media(max-width:900px){.afx-promo-grid{grid-template-columns:1fr}.afx-promo-preview{order:-1}.afx-promo-panel{padding:24px 20px}.afx-promo-mini{margin:auto}}
  @media(max-width:480px){#afx-promo-lab{padding-left:18px;padding-right:18px}.afx-promo-title{font-size:40px}.afx-promo-wheel-wrap{width:292px;height:292px}.afx-promo-wheel{inset:13px}.afx-promo-label{width:72px;margin-left:-36px;margin-top:-16px}.afx-promo-label strong{font-size:14px}.afx-promo-label small{font-size:7px}.afx-promo-center{width:80px;height:80px}.afx-promo-center b{font-size:12px}.afx-promo-actions,.afx-promo-actions-2{width:100%}.afx-promo-btn,.afx-promo-ghost{width:100%}.afx-promo-mini{padding:18px 12px 16px}}
</style>
<section id="afx-promo-lab" aria-labelledby="afx-promo-title">
  <div class="afx-promo-wrap">
    <div class="afx-promo-panel">
      <div class="afx-promo-kicker"><span class="afx-promo-dot"></span>Бонус для клиента</div>
      <div class="afx-promo-grid">
        <div>
          <h2 class="afx-promo-title" id="afx-promo-title">Выбей себе<br>скидку на AuraFX</h2>
          <p class="afx-promo-sub">Крути колесо прямо на сайте и получай персональный промокод. Попытка доступна раз в 7 дней, а активный бонус автоматически можно подставить в заявку.</p>
          <div class="afx-promo-badges"><span>1 попытка / 7 дней</span><span>до 20% скидки</span><span>редкий SUPER BONUS</span><span>промокод сохраняется</span></div>
          <div class="afx-promo-note" id="afx-promo-inline-note">Проверяю доступ к колесу…</div>
        </div>
        <div class="afx-promo-preview">
          <div class="afx-promo-mini">
            <div class="afx-promo-wheel-wrap" id="afx-promo-wheel-wrap">
              <div class="afx-promo-wheel-shadow"></div>
              <div class="afx-promo-rim"></div>
              <div class="afx-promo-pointer"></div>
              <div class="afx-promo-wheel" id="afx-promo-wheel">
                <div class="afx-promo-labels" id="afx-promo-labels"></div>
              </div>
              <div class="afx-promo-center"><b>AuraFX</b><small>FORTUNE</small></div>
            </div>
            <div class="afx-promo-actions">
              <button class="afx-promo-btn" id="afx-promo-spin" type="button">🎡 Крутить колесо</button>
              <button class="afx-promo-ghost" id="afx-apply-wheel-code" type="button">Вставить код в заявку</button>
            </div>
            <div class="afx-promo-inline-status" id="afx-promo-status">Подгружаю состояние колеса…</div>
            <div class="afx-promo-result" id="afx-promo-result">
              <b id="afx-promo-win">Ты выбил скидку</b>
              <div class="afx-promo-muted" id="afx-promo-win-copy">Промокод уже ждёт тебя.</div>
              <code id="afx-promo-code">AURAFX-00-XXXX</code>
              <div class="afx-promo-countdown" id="afx-promo-countdown">Следующая попытка: после получения бонуса</div>
              <div class="afx-promo-actions-2">
                <button class="afx-promo-ghost" id="afx-promo-use" type="button">Применить в заявке</button>
                <button class="afx-promo-ghost" id="afx-promo-copy" type="button">Скопировать код</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<script>
(()=>{
  const prizes=[{label:'3%',discount:3},{label:'5%',discount:5},{label:'7%',discount:7},{label:'10%',discount:10},{label:'12%',discount:12},{label:'15%',discount:15},{label:'SUPER 20%',discount:20}];
  const section=document.getElementById('afx-promo-lab'); if(!section)return;
  const spinBtn=document.getElementById('afx-promo-spin');
  const useBtn=document.getElementById('afx-promo-use');
  const copyBtn=document.getElementById('afx-promo-copy');
  const inlineUseBtn=document.getElementById('afx-apply-wheel-code');
  const wheelWrap=document.getElementById('afx-promo-wheel-wrap');
  const wheel=document.getElementById('afx-promo-wheel');
  const result=document.getElementById('afx-promo-result');
  const status=document.getElementById('afx-promo-status');
  const inlineNote=document.getElementById('afx-promo-inline-note');
  const codeEl=document.getElementById('afx-promo-code');
  const winEl=document.getElementById('afx-promo-win');
  const winCopy=document.getElementById('afx-promo-win-copy');
  const countdownEl=document.getElementById('afx-promo-countdown');
  let currentState={can_spin:true}, spinning=false, rotation=-12, countdownTimer=null;
  function renderLabels(){ const host=document.getElementById('afx-promo-labels'); if(!host) return; host.innerHTML=''; const step=360/prizes.length; const size=wheel?wheel.getBoundingClientRect().width:304; const radius=Math.max(94,Math.round(size*.365)); prizes.forEach((prize,index)=>{ const angle=(-90)+(index*step)+(step/2); const label=document.createElement('div'); label.className='afx-promo-label'+(Number(prize.discount)>=20?' super':''); label.innerHTML=Number(prize.discount)>=20?'<small>SUPER</small><strong>20%</strong>':'<strong>'+prize.label+'</strong>'; label.style.transform='rotate('+angle+'deg) translateY(-'+radius+'px) rotate('+(-angle)+'deg)'; host.appendChild(label); }); }
  renderLabels(); if(wheel) wheel.style.transform='rotate('+rotation+'deg)'; let labelResizeTimer=null; window.addEventListener('resize',()=>{clearTimeout(labelResizeTimer);labelResizeTimer=setTimeout(renderLabels,120)},{passive:true});
  function fmtDate(v){ if(!v) return ''; const d=new Date(v); if(isNaN(d)) return ''; return d.toLocaleDateString('ru-RU',{day:'numeric',month:'long'})+' '+d.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}); }
  function setPromoStorage(data){ try{ localStorage.setItem('afx_promo',JSON.stringify(data||{})); }catch(e){} }
  function getPromoStorage(){ try{ return JSON.parse(localStorage.getItem('afx_promo')||'null')||{}; }catch(e){ return {}; } }
  function injectPromoIntoBrief(){ const saved=getPromoStorage(); if(!saved.code) return false; const form=document.getElementById('afx-brief-form'); if(!form) return false; const field=form.elements.comment; if(!field) return false; const line='Промокод на скидку: '+saved.code+' ('+saved.label+'). '; if(String(field.value||'').indexOf(saved.code)===-1){ field.value=line+(field.value||''); } return true; }
  function startCountdown(nextAt){
    if(countdownTimer)clearInterval(countdownTimer);
    function tick(){
      if(!nextAt){countdownEl.textContent='Следующая попытка появится через 7 дней';return;}
      const left=new Date(nextAt).getTime()-Date.now();
      if(left<=0){countdownEl.textContent='Новая попытка уже доступна ✨';currentState.can_spin=true;spinBtn.disabled=false;spinBtn.textContent='🎡 Крутить снова';clearInterval(countdownTimer);status.textContent='Попытка снова доступна.';inlineNote.textContent='Колесо снова активно — можно крутить.';return;}
      const days=Math.floor(left/86400000), hrs=Math.floor((left%86400000)/3600000), mins=Math.floor((left%3600000)/60000), secs=Math.floor((left%60000)/1000);
      countdownEl.textContent='До следующей попытки: '+days+'д '+String(hrs).padStart(2,'0')+'ч '+String(mins).padStart(2,'0')+'м '+String(secs).padStart(2,'0')+'с';
    }
    tick();countdownTimer=setInterval(tick,1000);
  }
  function burst(superBonus){
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const count=superBonus?56:34;
    const colors=superBonus?['#ffd66b','#fff3b0','#c87aff','#59e8ff']:['#b85cff','#5be5ff','#ff87d9','#ffffff'];
    for(let i=0;i<count;i++){
      const p=document.createElement('i');p.className='afx-promo-confetti';p.style.background=colors[i%colors.length];
      const a=(Math.PI*2*i/count)+(Math.random()*.35),dist=(superBonus?230:180)+Math.random()*150;
      p.style.setProperty('--x',(Math.cos(a)*dist).toFixed(0)+'px');p.style.setProperty('--y',(Math.sin(a)*dist+70).toFixed(0)+'px');p.style.setProperty('--r',((Math.random()*900)-450).toFixed(0)+'deg');
      p.style.animationDelay=(Math.random()*.12).toFixed(2)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),1800);
    }
  }
  function showResult(data,already){ if(!data) return; const superBonus=Number(data.discount)>=20; result.classList.toggle('super',superBonus); winEl.textContent=superBonus?(already?'Твой SUPER BONUS — 20%':'SUPER BONUS — 20% 🔥'):(already?('Твоя активная скидка — '+data.label):('Ты выбил скидку '+data.label)); winCopy.textContent=already?('Следующая попытка будет доступна: '+fmtDate(data.next_at)):(superBonus?'Редкий бонус пойман. Промокод уже сохранён за тобой.':'Промокод уже сохранён. Можешь использовать его в заявке.'); codeEl.textContent=data.code||'AURAFX'; result.classList.add('show'); setPromoStorage(data); startCountdown(data.next_at); inlineNote.textContent=already?('Активен бонус '+data.label+' до '+fmtDate(data.next_at)):('Есть свежий бонус: '+data.label+' — можно сразу применить'); }
  function normalizeDeg(v){ return ((Number(v)||0)%360+360)%360; }
  function prizeRotation(index){
    const step=360/prizes.length;
    const sectorCenter=(index*step)+(step/2);
    // The wheel artwork/labels start at -90deg. Bring the selected sector center to the fixed top pointer (0deg).
    return normalizeDeg(90-sectorCenter);
  }
  let spinRaf=0;
  function alignWheelTo(index,animate){
    if(!wheel||index<0)return animate?Promise.resolve():undefined;
    const target=prizeRotation(index);
    if(!animate){
      if(spinRaf)cancelAnimationFrame(spinRaf);
      spinRaf=0;
      wheel.style.transition='none';
      rotation=target;
      wheel.style.transform='rotate('+target+'deg)';
      void wheel.offsetWidth;
      return;
    }
    if(spinRaf)cancelAnimationFrame(spinRaf);
    const startRotation=rotation;
    const current=normalizeDeg(startRotation);
    const delta=normalizeDeg(target-current);
    const finalRotation=startRotation+(360*7)+delta;
    const duration=6600;
    wheel.style.transition='none';
    return new Promise(resolve=>{
      const started=performance.now();
      function frame(now){
        const raw=Math.min(1,(now-started)/duration);
        /* Smooth acceleration, long readable spin, then soft braking. */
        const eased=raw<.18
          ? 4.2*raw*raw
          : 1-Math.pow(1-((raw-.18)/.82),4)*(.864);
        const progress=Math.max(0,Math.min(1,eased));
        const angle=startRotation+(finalRotation-startRotation)*progress;
        wheel.style.transform='rotate('+angle.toFixed(3)+'deg)';
        if(raw<1){spinRaf=requestAnimationFrame(frame);return;}
        rotation=finalRotation;
        wheel.style.transform='rotate('+finalRotation+'deg)';
        spinRaf=0;
        resolve();
      }
      spinRaf=requestAnimationFrame(frame);
    });
  }
  function setState(data){ currentState=data||{can_spin:true}; if(data && data.can_spin){ status.textContent='Колесо готово. Жми кнопку под ним ✨'; inlineNote.textContent='Попытка доступна прямо сейчас.'; result.classList.remove('show'); spinBtn.textContent='🎡 Крутить колесо'; spinBtn.disabled=false; } else if(data){ const idx=prizes.findIndex(p=>Number(p.discount)===Number(data.discount)); if(idx>=0) alignWheelTo(idx,false); status.textContent='Новая попытка будет доступна '+fmtDate(data.next_at)+'. Бонус уже зафиксирован за тобой.'; spinBtn.textContent='⏳ Попытка на перезарядке'; spinBtn.disabled=true; showResult({label:data.label||((data.discount||0)+'%'),discount:data.discount,code:data.code,next_at:data.next_at},true); } }
  async function loadState(){ try{ const res=await fetch('/api/promo',{headers:{accept:'application/json'},cache:'no-store'}); const data=await res.json(); if(!res.ok) throw new Error(data.error||'Не удалось загрузить колесо'); setState(data); }catch(err){ status.textContent=err.message||'Колесо временно недоступно'; inlineNote.textContent='Колесо временно недоступно'; spinBtn.disabled=true; } }
  function animateTo(index){ return alignWheelTo(index,true); }
  async function spin(){
    if(spinning||!currentState.can_spin)return;
    spinning=true;spinBtn.disabled=true;spinBtn.textContent='Кручу…';status.textContent='Колесо разгоняется — ловим бонус ✨';
    wheel.classList.add('is-spinning');if(wheelWrap)wheelWrap.classList.add('is-spinning');
    try{
      const res=await fetch('/api/promo',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:'{}'});
      const data=await res.json();
      if(!res.ok)throw new Error(data.error||'Не удалось прокрутить колесо');
      if(data.already){setState(data);return;}
      const index=Math.max(0,prizes.findIndex(p=>Number(p.discount)===Number(data.discount)));
      await animateTo(index);
      const payload={label:data.label||data.discount+'%',discount:data.discount,code:data.code,next_at:data.next_at};
      showResult(payload,false);burst(Number(data.discount)>=20);
      status.textContent=Number(data.discount)>=20?'Редкий SUPER BONUS пойман 🔥 Скидка зафиксирована.':'Готово. Скидка зафиксирована — можешь использовать код.';
      currentState=Object.assign({can_spin:false},payload);spinBtn.textContent='✅ Скидка получена';spinBtn.disabled=true;
    }catch(err){
      status.textContent=err.message||'Не удалось прокрутить колесо';spinBtn.disabled=false;spinBtn.textContent='🎡 Крутить колесо';
    }finally{
      wheel.classList.remove('is-spinning');if(wheelWrap)wheelWrap.classList.remove('is-spinning');spinning=false;
    }
  }
  async function copyCode(){ const saved=getPromoStorage(); if(!saved.code) { status.textContent='Сначала получи бонус на колесе'; return; } try{ await navigator.clipboard.writeText(saved.code); status.textContent='Промокод скопирован ✔'; inlineNote.textContent='Промокод скопирован — можно отправлять в заявку'; }catch(e){ status.textContent='Не удалось скопировать, но код виден на экране.'; } }
  async function useCode(){ const saved=getPromoStorage(); if(!saved.code){ status.textContent='Сначала выбей скидку'; return; } injectPromoIntoBrief(); await copyCode(); const openBriefBtn=document.getElementById('afx-open-brief'); if(openBriefBtn) openBriefBtn.click(); inlineNote.textContent='Промокод готов. Он уже подставлен в заявку.'; }
  setTimeout(()=>{try{const cta=document.getElementById('afx-premium-cta');const reviews=document.getElementById('aurafx-reviews');if(cta&&cta.parentNode){cta.parentNode.insertBefore(section,cta)}else if(reviews&&reviews.parentNode){reviews.parentNode.insertBefore(section,reviews)}}catch(e){}},0);
  if(spinBtn) spinBtn.addEventListener('click',spin); if(copyBtn) copyBtn.addEventListener('click',copyCode); if(useBtn) useBtn.addEventListener('click',useCode); if(inlineUseBtn) inlineUseBtn.addEventListener('click',useCode); document.addEventListener('focusin',e=>{ if(e.target && e.target.form && e.target.form.id==='afx-brief-form') injectPromoIntoBrief(); }); loadState();
})();
</script>`;



const DIRECT_ORDER_HTML = String.raw`
<style>
  .afx-direct-order-btn{position:relative!important;overflow:hidden!important;box-shadow:0 18px 44px rgba(137,63,242,.32)!important}
  .afx-direct-order-btn:before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 22%,rgba(255,255,255,.16) 45%,transparent 68%);transform:translateX(-120%);transition:transform .55s ease;pointer-events:none}
  .afx-direct-order-btn:hover:before{transform:translateX(120%)}
  .afx-direct-order-status{min-height:20px;margin:10px 0 2px;font-size:13px;line-height:1.45;color:#a99bb6;text-align:center}
  .afx-direct-order-status.ok{color:#7ff1be}.afx-direct-order-status.bad{color:#ff9aaa}
</style>
<script>
(function(){
  function textOf(el){return String(el&&el.textContent||'').replace(/\s+/g,' ').trim()}
  function commonRoot(a,b){
    if(!a||!b)return null;
    var p=a.parentElement;
    while(p&&p!==document.body){if(p.contains(b))return p;p=p.parentElement}
    return null;
  }
  function findFormRoot(avito,tg){
    var root=commonRoot(avito,tg)||avito.parentElement;
    var p=root;
    while(p&&p!==document.body){
      if(p.querySelector('textarea')&&p.querySelectorAll('select').length>=2&&p.querySelector('input'))return p;
      p=p.parentElement;
    }
    return root;
  }
  function getVisibleTextInput(root){
    var arr=[].slice.call(root.querySelectorAll('input'));
    return arr.find(function(i){var t=(i.type||'text').toLowerCase();return !['hidden','submit','button','checkbox','radio'].includes(t)&&!i.id.includes('afx-direct-contact')})||null;
  }
  function cloneContactField(root,nameInput,actions){
    var existing=document.getElementById('afx-direct-contact');if(existing)return existing;
    var wrap=nameInput?nameInput.parentElement:null;
    var tries=0;
    while(wrap&&wrap!==root&&tries<3){
      var s=textOf(wrap).toLowerCase();
      if(s.includes('как вас зовут')||s.includes('имя'))break;
      wrap=wrap.parentElement;tries++;
    }
    var input;
    if(wrap&&wrap!==root){
      var clone=wrap.cloneNode(true);
      input=clone.querySelector('input');
      if(input){
        input.id='afx-direct-contact';input.name='afx_direct_contact';input.value='';input.required=false;input.autocomplete='contact';input.placeholder='Telegram @username / телефон';
        var walker=document.createTreeWalker(clone,NodeFilter.SHOW_TEXT);var n;
        while(n=walker.nextNode()){
          var v=String(n.nodeValue||'');
          if(/как вас зовут|имя/i.test(v)){n.nodeValue=v.replace(/как вас зовут|имя/i,'Как с вами связаться?');break}
        }
        actions.parentNode.insertBefore(clone,actions);
        return input;
      }
    }
    var box=document.createElement('div');box.style.margin='18px 0';
    var label=document.createElement('div');label.textContent='Как с вами связаться?';label.style.cssText='margin:0 0 10px;color:#cfc4d6;font-size:16px';
    input=document.createElement('input');input.id='afx-direct-contact';input.placeholder='Telegram @username / телефон';input.autocomplete='contact';
    if(nameInput)input.className=nameInput.className;
    if(nameInput&&nameInput.getAttribute('style'))input.setAttribute('style',nameInput.getAttribute('style'));
    box.append(label,input);actions.parentNode.insertBefore(box,actions);return input;
  }
  function promoLine(){
    try{var p=JSON.parse(localStorage.getItem('afx_promo')||'null');return p&&p.code?'Промокод на скидку: '+p.code+' ('+(p.label||p.discount+'%')+'). ':''}catch(e){return ''}
  }
  function visitorId(){try{return localStorage.getItem('afx_visitor_id')||''}catch(e){return ''}}
  function attribution(){try{return JSON.parse(localStorage.getItem('afx_attribution')||'{}')||{}}catch(e){return {}}}
  function init(){
    if(document.getElementById('afx-direct-order-btn'))return true;
    var nodes=[].slice.call(document.querySelectorAll('a,button'));
    var avito=nodes.find(function(el){return /написать\s+в\s+avito/i.test(textOf(el))});
    var tg=nodes.find(function(el){return /написать\s+в\s+telegram/i.test(textOf(el))});
    if(!avito||!tg)return false;
    var root=findFormRoot(avito,tg);if(!root)return false;
    var actions=commonRoot(avito,tg)||avito.parentElement;if(!actions)return false;
    var nameInput=getVisibleTextInput(root);
    var contactInput=cloneContactField(root,nameInput,actions);
    var btn=document.createElement('button');
    btn.type='button';btn.id='afx-direct-order-btn';btn.className=(avito.className||'')+' afx-direct-order-btn';
    if(avito.getAttribute('style'))btn.setAttribute('style',avito.getAttribute('style'));
    btn.style.width='100%';btn.style.cursor='pointer';btn.style.marginBottom='14px';
    btn.textContent='Отправить заявку →';
    actions.insertBefore(btn,actions.firstChild);
    var status=document.createElement('div');status.className='afx-direct-order-status';status.id='afx-direct-order-status';actions.appendChild(status);
    btn.addEventListener('click',async function(){
      var selects=[].slice.call(root.querySelectorAll('select'));
      var productEl=root.querySelector('textarea');
      var name=String(nameInput&&nameInput.value||'').trim();
      var contact=String(contactInput&&contactInput.value||'').trim();
      var marketplace=String(selects[0]&&selects[0].value||'').trim();
      var tariff=String(selects[1]&&selects[1].value||'').trim();
      var product=String(productEl&&productEl.value||'').trim();
      status.className='afx-direct-order-status';
      if(!name){status.className+=' bad';status.textContent='Напиши, как тебя зовут.';nameInput&&nameInput.focus();return}
      if(!product||product.length<2){status.className+=' bad';status.textContent='Напиши, что за товар и что нужно показать.';productEl&&productEl.focus();return}
      if(!contact||contact.length<3){status.className+=' bad';status.textContent='Оставь Telegram или телефон, чтобы AuraFX мог ответить.';contactInput&&contactInput.focus();return}
      var m=tariff.match(/(\d+)\s*(?:карточ|шт)/i)||tariff.match(/\d+/);var count=m?Math.max(1,Math.min(50,Number(m[1]||m[0])||1)):1;
      var at=attribution();
      var payload={visitor_id:visitorId(),marketplace:marketplace||'Другое',count:count,product:product.slice(0,100),style:tariff.slice(0,80),deadline:'',contact:contact.slice(0,100),comment:(promoLine()+'Имя: '+name+'. Заявка отправлена через основную форму сайта.').slice(0,600),source:at.source||'',medium:at.medium||'',campaign:at.campaign||'',content:at.content||'',term:at.term||'',referrer:document.referrer||'',landing:location.href};
      btn.disabled=true;btn.textContent='Отправляю…';status.textContent='Сохраняю заявку и отправляю уведомление…';
      try{
        var res=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(payload)});
        var data=await res.json();if(!res.ok)throw new Error(data.error||'Не удалось отправить заявку');
        status.className='afx-direct-order-status ok';status.textContent='Заявка №'+(data.id||'')+' отправлена ✓ AuraFX получил уведомление.';
        btn.textContent='✓ Заявка отправлена';
        setTimeout(function(){btn.disabled=false;btn.textContent='Отправить ещё заявку →'},3200);
      }catch(err){status.className='afx-direct-order-status bad';status.textContent=err.message||'Не удалось отправить заявку';btn.disabled=false;btn.textContent='Отправить заявку →'}
    });
    return true;
  }
  if(!init()){
    var tries=0,t=setInterval(function(){tries++;if(init()||tries>20)clearInterval(t)},350);
  }
})();
</script>`;


const BEFORE_AFTER_HTML = String.raw`
<style>
  #afx-before-after{position:relative;overflow:hidden;padding:92px 24px 96px;color:#fff;background:linear-gradient(180deg,rgba(8,4,14,0),rgba(33,9,63,.52) 46%,rgba(8,4,14,0));font-family:inherit}
  #afx-before-after:before{content:"";position:absolute;width:440px;height:440px;border-radius:50%;right:-170px;top:70px;background:rgba(158,69,255,.16);filter:blur(95px);pointer-events:none}
  #afx-before-after:after{content:"";position:absolute;width:340px;height:340px;border-radius:50%;left:-160px;bottom:20px;background:rgba(83,226,255,.08);filter:blur(105px);pointer-events:none}
  .afx-ba-wrap{position:relative;z-index:2;max-width:1160px;margin:0 auto}
  .afx-ba-kicker{display:inline-flex;align-items:center;gap:9px;padding:9px 13px;border:1px solid rgba(186,103,255,.28);border-radius:999px;background:rgba(255,255,255,.035);color:#d7c5e8;font-size:12px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}
  .afx-ba-kicker i{width:7px;height:7px;border-radius:50%;background:#68e8ff;box-shadow:0 0 16px #68e8ff}
  .afx-ba-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin:20px 0 34px}
  .afx-ba-title{margin:0;font-size:clamp(42px,6vw,78px);line-height:.94;letter-spacing:-.055em;font-weight:950;max-width:760px}
  .afx-ba-title em{font-style:normal;background:linear-gradient(90deg,#d493ff,#74e6ff);-webkit-background-clip:text;background-clip:text;color:transparent}
  .afx-ba-sub{margin:0;max-width:430px;color:#a99db4;font-size:16px;line-height:1.65}
  .afx-ba-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr);gap:20px;align-items:stretch}
  .afx-ba-card{position:relative;border:1px solid rgba(255,255,255,.105);border-radius:28px;background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.024));box-shadow:0 24px 76px rgba(0,0,0,.27);overflow:hidden}
  .afx-ba-main{padding:18px}
  .afx-ba-stage{--afx-ba-pos:52%;position:relative;width:100%;aspect-ratio:4/5;max-height:660px;border-radius:22px;overflow:hidden;background:#0b0711;cursor:ew-resize;touch-action:none;user-select:none;-webkit-user-select:none;isolation:isolate}
  .afx-ba-layer{position:absolute;inset:0;background-position:center;background-size:cover;background-repeat:no-repeat}
  .afx-ba-before{filter:none;background-color:#efefef;background-size:contain;background-repeat:no-repeat}
  .afx-ba-before:after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,rgba(143,143,154,.24),rgba(10,8,14,.28)),linear-gradient(180deg,rgba(255,255,255,.03),rgba(0,0,0,.15));backdrop-filter:blur(.5px)}
  .afx-ba-after{clip-path:inset(0 calc(100% - var(--afx-ba-pos)) 0 0);filter:saturate(1.06) contrast(1.03)}
  .afx-ba-side-label{position:absolute;z-index:5;top:14px;padding:8px 11px;border-radius:999px;font-size:10px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.13)}
  .afx-ba-label-before{left:14px;background:rgba(16,14,19,.68);color:#d5cfd9}.afx-ba-label-after{right:14px;background:linear-gradient(135deg,rgba(173,65,255,.88),rgba(82,62,221,.84));color:#fff}
  .afx-ba-divider{position:absolute;z-index:6;top:0;bottom:0;left:var(--afx-ba-pos);width:2px;transform:translateX(-1px);background:linear-gradient(180deg,transparent,#fff 14%,#d6a8ff 50%,#fff 86%,transparent);box-shadow:0 0 18px rgba(185,103,255,.7);pointer-events:none}
  .afx-ba-handle{position:absolute;z-index:7;left:var(--afx-ba-pos);top:50%;width:48px;height:48px;transform:translate(-50%,-50%);border-radius:50%;display:grid;place-items:center;background:rgba(13,7,21,.88);border:1px solid rgba(255,255,255,.2);box-shadow:0 12px 34px rgba(0,0,0,.35),0 0 28px rgba(166,74,255,.35);font-size:20px;font-weight:900;pointer-events:none}
  .afx-ba-note{position:absolute;z-index:5;left:14px;bottom:14px;max-width:62%;padding:9px 11px;border-radius:13px;background:rgba(8,5,13,.72);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(10px);color:#c8bdcf;font-size:10px;line-height:1.45}
  .afx-ba-range{width:100%;accent-color:#a94cff;margin:14px 0 0}
  .afx-ba-thumbs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:12px 1px 2px}.afx-ba-thumbs::-webkit-scrollbar{display:none}
  .afx-ba-thumb{flex:0 0 auto;width:72px;height:72px;border:1px solid rgba(255,255,255,.09);border-radius:15px;background:#120a1d center/cover no-repeat;cursor:pointer;position:relative;overflow:hidden;transition:.2s transform,.2s border-color,.2s box-shadow}
  .afx-ba-thumb:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(5,3,9,.38))}
  .afx-ba-thumb.active{border-color:rgba(192,112,255,.8);box-shadow:0 0 0 2px rgba(164,69,255,.12),0 10px 30px rgba(105,37,194,.25);transform:translateY(-2px)}
  .afx-ba-side{padding:24px;display:flex;flex-direction:column}
  .afx-ba-side h3{margin:0;font-size:28px;letter-spacing:-.035em}.afx-ba-side p{margin:9px 0 0;color:#9f93ab;line-height:1.55;font-size:14px}
  .afx-ba-points{display:grid;gap:10px;margin:22px 0}.afx-ba-point{display:grid;grid-template-columns:42px 1fr;gap:12px;align-items:center;padding:13px;border-radius:17px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.075)}
  .afx-ba-point i{width:42px;height:42px;display:grid;place-items:center;border-radius:13px;background:linear-gradient(135deg,rgba(171,72,255,.3),rgba(76,221,255,.1));font-style:normal;font-weight:950;color:#fff}.afx-ba-point b{display:block;font-size:13px}.afx-ba-point span{display:block;margin-top:3px;color:#8f839b;font-size:10px;line-height:1.35}
  .afx-ba-disclaimer{margin-top:auto;padding:13px 14px;border:1px dashed rgba(255,255,255,.1);border-radius:16px;color:#80748b;font-size:10px;line-height:1.5;background:rgba(255,255,255,.018)}
  .afx-ba-cta{margin-top:14px;border:0;border-radius:16px;padding:15px 18px;background:linear-gradient(135deg,#b247ff,#6e2ae3);color:#fff;font:850 14px/1 inherit;cursor:pointer;box-shadow:0 14px 36px rgba(123,43,225,.28);transition:.2s transform,.2s box-shadow}.afx-ba-cta:hover{transform:translateY(-2px);box-shadow:0 18px 44px rgba(137,51,242,.36)}
  @media(max-width:850px){#afx-before-after{padding:70px 20px 78px}.afx-ba-head{display:block}.afx-ba-sub{margin-top:15px}.afx-ba-grid{grid-template-columns:1fr}.afx-ba-stage{max-height:none}.afx-ba-side{padding:21px}}
  @media(max-width:520px){#afx-before-after{padding-left:16px;padding-right:16px}.afx-ba-title{font-size:46px}.afx-ba-main{padding:10px}.afx-ba-card{border-radius:23px}.afx-ba-stage{border-radius:17px}.afx-ba-note{max-width:74%;font-size:9px}.afx-ba-thumb{width:62px;height:62px}}
</style>
<section id="afx-before-after" aria-labelledby="afx-ba-title">
  <div class="afx-ba-wrap">
    <div class="afx-ba-kicker"><i></i> До / После</div>
    <div class="afx-ba-head">
      <h2 class="afx-ba-title" id="afx-ba-title">Посмотри, как меняется <em>подача товара</em></h2>
      <p class="afx-ba-sub">Передвигай ползунок. Слева — обычное фото товара без дизайна, справа — полноценная карточка AuraFX с заголовком, акцентами и характеристиками.</p>
    </div>
    <div class="afx-ba-grid">
      <div class="afx-ba-card afx-ba-main">
        <div class="afx-ba-stage" id="afx-ba-stage">
          <div class="afx-ba-layer afx-ba-before" id="afx-ba-before"></div>
          <div class="afx-ba-layer afx-ba-after" id="afx-ba-after"></div>
          <span class="afx-ba-side-label afx-ba-label-before">Обычное фото</span>
          <span class="afx-ba-side-label afx-ba-label-after">Дизайн AuraFX</span>
          <div class="afx-ba-divider"></div><div class="afx-ba-handle">↔</div>
          <div class="afx-ba-note">Слева — обычное фото товара без оформления. Справа — готовая продающая карточка AuraFX с акцентами, текстом и структурой.</div>
        </div>
        <input class="afx-ba-range" id="afx-ba-range" type="range" min="10" max="90" value="52" aria-label="Сравнение до и после">
        <div class="afx-ba-thumbs" id="afx-ba-thumbs" aria-label="Выбрать кейс"></div>
      </div>
      <aside class="afx-ba-card afx-ba-side">
        <h3>Что меняется в дизайне</h3>
        <p>Не просто «делаем красивее». У каждого элемента появляется понятная задача.</p>
        <div class="afx-ba-points">
          <div class="afx-ba-point"><i>01</i><div><b>Фокус на товаре</b><span>Композиция ведёт взгляд к главному объекту.</span></div></div>
          <div class="afx-ba-point"><i>02</i><div><b>Считываемое УТП</b><span>Покупатель быстрее понимает ключевую мысль карточки.</span></div></div>
          <div class="afx-ba-point"><i>03</i><div><b>Цельный стиль серии</b><span>Следующие слайды продолжают одну визуальную историю.</span></div></div>
        </div>
        <div class="afx-ba-disclaimer">Без выдуманных процентов и обещаний: блок показывает разницу именно в визуальной упаковке.</div>
        <button class="afx-ba-cta" id="afx-ba-cta" type="button">Хочу так оформить товар →</button>
      </aside>
    </div>
  </div>
</section>
<script>
(function(){
  var section=document.getElementById('afx-before-after');
  if(!section)return;
  var stage=document.getElementById('afx-ba-stage'),before=document.getElementById('afx-ba-before'),after=document.getElementById('afx-ba-after'),range=document.getElementById('afx-ba-range'),thumbs=document.getElementById('afx-ba-thumbs'),cta=document.getElementById('afx-ba-cta');
  var PRESET_BEFORE=[
    { key:/наушник|headphone|earbud/i, title:'Наушники', before:"data:image/webp;base64,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" },
    { key:/noir|парф|perfume/i, title:'NOIR', before:"data:image/webp;base64,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" },
    { key:/oversize|худи|hoodie/i, title:'Oversize', before:"data:image/webp;base64,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" },
    { key:/смарт|watch|часы/i, title:'Смарт-часы', before:"data:image/webp;base64,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" },
    { key:/колонк|speaker|акустик/i, title:'Портативная колонка', before:"data:image/webp;base64,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" }
  ];
  function setPos(v){v=Math.max(10,Math.min(90,Number(v)||52));stage.style.setProperty('--afx-ba-pos',v+'%');range.value=String(Math.round(v))}
  function srcOf(card){var img=card&&card.querySelector('img');return img&&(img.currentSrc||img.src)||''}
  function nameOf(card,index){var h=card&&card.querySelector('h2,h3,h4,strong');var t=String(h&&h.textContent||'').replace(/\s+/g,' ').trim();return t||('Кейс '+(index+1))}
  function findByPreset(preset,cards){
    for(var i=0;i<cards.length;i++){
      var n=nameOf(cards[i],i);
      if(preset.key.test(n))return cards[i];
    }
    return null;
  }
  function pick(item,index,buttons){
    if(!item||!item.after)return;
    before.style.backgroundImage='url('+JSON.stringify(item.before)+')';
    after.style.backgroundImage='url('+JSON.stringify(item.after)+')';
    buttons.forEach(function(b,i){b.classList.toggle('active',i===index)});
    setPos(52);
  }
  function build(){
    var cards=[].slice.call(document.querySelectorAll('.afx-case-ready')).filter(function(c){return !!srcOf(c)});
    if(!cards.length)return false;
    var dataset=[];
    PRESET_BEFORE.forEach(function(p){
      var card=findByPreset(p,cards);
      if(!card)return;
      dataset.push({ title:p.title || nameOf(card,dataset.length), before:p.before, after:srcOf(card) });
    });
    if(!dataset.length){
      dataset=cards.slice(0,5).map(function(card,i){
        return { title:nameOf(card,i), before:srcOf(card), after:srcOf(card) };
      });
    }
    thumbs.innerHTML='';var buttons=[];
    dataset.forEach(function(item,i){
      var b=document.createElement('button');
      b.type='button';
      b.className='afx-ba-thumb'+(i===0?' active':'');
      b.style.backgroundImage='url('+JSON.stringify(item.after)+')';
      b.title=item.title;
      b.setAttribute('aria-label','Показать кейс '+item.title);
      b.addEventListener('click',function(){pick(item,i,buttons)});
      thumbs.appendChild(b);buttons.push(b);
    });
    pick(dataset[0],0,buttons);return true;
  }
  function place(){
    var card=document.querySelector('.afx-case-ready');
    var host=card&&card.closest('section');
    if(host&&host.parentNode&&host.nextElementSibling!==section)host.parentNode.insertBefore(section,host.nextSibling);
  }
  var dragging=false;
  function fromPointer(e){var r=stage.getBoundingClientRect();setPos(((e.clientX-r.left)/r.width)*100)}
  stage.addEventListener('pointerdown',function(e){dragging=true;try{stage.setPointerCapture(e.pointerId)}catch(_){}fromPointer(e)});
  stage.addEventListener('pointermove',function(e){if(dragging)fromPointer(e)});
  stage.addEventListener('pointerup',function(){dragging=false});stage.addEventListener('pointercancel',function(){dragging=false});
  range.addEventListener('input',function(){setPos(range.value)});
  cta.addEventListener('click',function(){var target=document.getElementById('afx-direct-order-btn');if(target){(target.closest('section,article,div')||target).scrollIntoView({behavior:'smooth',block:'center'});return}var ta=document.querySelector('textarea');if(ta)(ta.closest('section')||ta).scrollIntoView({behavior:'smooth',block:'start'})});
  var tries=0,t=setInterval(function(){tries++;place();if(build()||tries>24)clearInterval(t)},250);setTimeout(place,900);
})();
</script>`;

const CASE_STORY_UPGRADE_HTML = String.raw`
<style>
  .afx-case-ready .afx-pack-badge{position:absolute;left:12px;top:12px;z-index:25;padding:8px 10px;border-radius:999px;background:rgba(11,6,18,.78);border:1px solid rgba(255,255,255,.12);color:#f3edf8;font:850 10px/1 system-ui,sans-serif;letter-spacing:.04em;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);pointer-events:none;box-shadow:0 8px 24px rgba(0,0,0,.2)}
  #afx-case-modal .afx-case-media{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;overflow:hidden}
  .afx-story-stage{position:relative;width:min(520px,100%);aspect-ratio:4/5;border-radius:26px;overflow:hidden;background:#0c0713;border:1px solid rgba(255,255,255,.1);box-shadow:0 28px 80px rgba(0,0,0,.42),0 0 48px rgba(139,72,255,.12);isolation:isolate;touch-action:pan-y}
  .afx-story-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transform:translateX(22px) scale(.985);transition:opacity .28s ease,transform .34s ease,visibility .28s;overflow:hidden;background:linear-gradient(145deg,#160b24,#09050f);pointer-events:none}
  .afx-story-slide.active{opacity:1;visibility:visible;transform:none;pointer-events:auto}
  .afx-story-slide.cover{display:grid;place-items:center;background:radial-gradient(circle at 50% 45%,rgba(142,60,255,.16),rgba(8,4,14,.96) 62%)}
  .afx-story-slide.cover #afx-case-image{position:relative!important;inset:auto!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;object-fit:contain!important;border-radius:0!important;box-shadow:none!important;display:block!important;background:#0b0612}
  .afx-story-bg{position:absolute;inset:-8%;background-position:center;background-size:cover;filter:blur(18px) saturate(.9) brightness(.42);transform:scale(1.12);opacity:.7}
  .afx-story-grid{position:absolute;inset:0;opacity:.12;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:30px 30px;mask-image:linear-gradient(180deg,transparent 2%,#000 26%,#000 85%,transparent)}
  .afx-story-content{position:relative;z-index:2;height:100%;box-sizing:border-box;padding:34px;display:flex;flex-direction:column}
  .afx-story-top{display:flex;align-items:center;justify-content:space-between;gap:12px}.afx-story-num{font:900 10px/1 system-ui,sans-serif;letter-spacing:.18em;color:#c6b5d2;text-transform:uppercase}.afx-story-pill{padding:7px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);font:850 9px/1 system-ui,sans-serif;color:#e9dfef;letter-spacing:.07em;text-transform:uppercase}
  .afx-story-heading{margin:24px 0 9px;font-size:clamp(28px,4.5vw,48px);line-height:.96;letter-spacing:-.045em;font-weight:950;color:#fff}.afx-story-sub{margin:0;color:#b5a8bf;font-size:13px;line-height:1.55;max-width:420px}
  .afx-story-specs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:auto}.afx-story-spec{min-height:92px;padding:15px;border-radius:18px;border:1px solid rgba(255,255,255,.095);background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025));backdrop-filter:blur(8px)}.afx-story-spec b{display:block;font-size:20px;letter-spacing:-.03em}.afx-story-spec span{display:block;margin-top:5px;color:#9d90a7;font-size:10px;line-height:1.35}
  .afx-story-note{margin-top:11px;color:#766b80;font-size:9px;line-height:1.45}
  .afx-story-benefits{display:grid;gap:9px;margin-top:auto}.afx-story-benefit{display:grid;grid-template-columns:36px 1fr;gap:12px;align-items:center;padding:12px 14px;border-radius:17px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.08)}.afx-story-benefit i{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;font-style:normal;font-weight:950;background:linear-gradient(135deg,rgba(168,70,255,.32),rgba(74,220,255,.14));color:#fff}.afx-story-benefit b{display:block;font-size:12px}.afx-story-benefit span{display:block;margin-top:3px;color:#91859b;font-size:9px;line-height:1.35}
  .afx-story-detail-visual{position:relative;margin-top:18px;flex:1;min-height:170px;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.09);background-position:center;background-size:155%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.03)}.afx-story-detail-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(8,4,14,.84))}.afx-story-callouts{position:absolute;inset:auto 14px 14px 14px;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.afx-story-callout{padding:9px;border-radius:12px;background:rgba(10,5,18,.78);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(8px)}.afx-story-callout b{display:block;font-size:9px}.afx-story-callout span{display:block;margin-top:3px;color:#9d90a7;font-size:8px}
  .afx-story-pack{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-top:24px}.afx-story-pack-card{aspect-ratio:4/5;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(145deg,rgba(184,76,255,.18),rgba(62,215,255,.06));display:flex;align-items:flex-end;padding:8px;box-sizing:border-box;position:relative;overflow:hidden}.afx-story-pack-card:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 18%,rgba(255,255,255,.13),transparent 35%)}.afx-story-pack-card span{position:relative;z-index:1;font-size:7px;font-weight:850;color:#d9cfdf;line-height:1.2}
  .afx-story-final{margin-top:auto;padding:18px;border-radius:20px;background:linear-gradient(135deg,rgba(165,69,255,.16),rgba(70,219,255,.07));border:1px solid rgba(255,255,255,.09)}.afx-story-final b{display:block;font-size:18px}.afx-story-final span{display:block;margin-top:7px;color:#a99db4;font-size:11px;line-height:1.5}
  .afx-story-arrow{position:absolute;top:50%;z-index:8;width:42px;height:42px;margin-top:-21px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(9,5,15,.72);color:#fff;font-size:21px;cursor:pointer;display:grid;place-items:center;backdrop-filter:blur(10px);box-shadow:0 10px 26px rgba(0,0,0,.26)}.afx-story-arrow.prev{left:12px}.afx-story-arrow.next{right:12px}.afx-story-arrow:disabled{opacity:.28;cursor:default}
  .afx-story-tabs{width:min(520px,100%);display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding:1px}.afx-story-tabs::-webkit-scrollbar{display:none}.afx-story-tab{flex:0 0 auto;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.035);color:#91869c;border-radius:999px;padding:8px 10px;font:800 9px/1 system-ui,sans-serif;cursor:pointer;white-space:nowrap}.afx-story-tab.active{color:#fff;border-color:rgba(178,83,255,.42);background:linear-gradient(135deg,rgba(171,72,255,.24),rgba(83,43,207,.22));box-shadow:0 6px 18px rgba(111,45,217,.12)}
  .afx-story-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:-5px 0 13px}.afx-story-counter{padding:6px 9px;border-radius:999px;background:rgba(177,76,255,.12);border:1px solid rgba(177,76,255,.2);color:#d7b8f4;font-size:10px;font-weight:850}.afx-story-kind{color:#81758d;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
  @media(max-width:760px){#afx-case-modal .afx-premium-dialog{max-height:calc(100vh - 18px);border-radius:24px}.afx-story-stage{width:min(390px,100%)}#afx-case-modal .afx-case-media{padding:20px 16px 14px;min-height:0}.afx-story-content{padding:25px}.afx-story-heading{font-size:34px}.afx-story-arrow{width:38px;height:38px}.afx-story-arrow.prev{left:8px}.afx-story-arrow.next{right:8px}.afx-story-spec{min-height:76px;padding:12px}.afx-story-callouts{grid-template-columns:1fr}.afx-story-callout:nth-child(n+2){display:none}.afx-story-pack{gap:4px}.afx-story-pack-card{padding:5px}.afx-story-pack-card span{font-size:6px}}
  @media(prefers-reduced-motion:reduce){.afx-story-slide{transition:none}}
</style>
<script>
(function(){
  function initStory(){
    var modal=document.getElementById('afx-case-modal'),media=modal&&modal.querySelector('.afx-case-media'),img=document.getElementById('afx-case-image'),title=document.getElementById('afx-case-title'),info=modal&&modal.querySelector('.afx-case-info'),copy=modal&&modal.querySelector('.afx-case-copy');
    if(!modal||!media||!img||!title||!info||media.querySelector('.afx-story-stage'))return false;
    var stage=document.createElement('div');stage.className='afx-story-stage';stage.setAttribute('aria-label','Полный комплект слайдов кейса');
    var cover=document.createElement('div');cover.className='afx-story-slide cover active';cover.dataset.slide='0';cover.appendChild(img);stage.appendChild(cover);
    function makeSlide(cls,html){var s=document.createElement('div');s.className='afx-story-slide '+cls;s.innerHTML=html;stage.appendChild(s);return s}
    var specs=makeSlide('specs','<div class="afx-story-bg"></div><div class="afx-story-grid"></div><div class="afx-story-content"><div class="afx-story-top"><span class="afx-story-num">02 / 06</span><span class="afx-story-pill">Характеристики</span></div><h4 class="afx-story-heading">Главное —<br>в понятной структуре</h4><p class="afx-story-sub">Ключевые параметры товара раскладываются по блокам, чтобы покупатель считал их за несколько секунд.</p><div class="afx-story-specs"><div class="afx-story-spec"><b>01</b><span>Ключевой параметр / основная цифра</span></div><div class="afx-story-spec"><b>02</b><span>Материал, состав или технология</span></div><div class="afx-story-spec"><b>03</b><span>Размер, формат или совместимость</span></div><div class="afx-story-spec"><b>04</b><span>Особенность, которая влияет на выбор</span></div></div><div class="afx-story-note">Демонстрация структуры. Реальные характеристики берутся из данных конкретного товара клиента.</div></div>');
    var benefits=makeSlide('benefits','<div class="afx-story-bg"></div><div class="afx-story-grid"></div><div class="afx-story-content"><div class="afx-story-top"><span class="afx-story-num">03 / 06</span><span class="afx-story-pill">Преимущества</span></div><h4 class="afx-story-heading">Не просто факты.<br>Причины купить.</h4><p class="afx-story-sub">Следующий слайд переводит характеристики на язык пользы для покупателя.</p><div class="afx-story-benefits"><div class="afx-story-benefit"><i>01</i><div><b>Понятное УТП</b><span>Одно главное преимущество — без визуального шума.</span></div></div><div class="afx-story-benefit"><i>02</i><div><b>Сценарий использования</b><span>Показываем, где и зачем товар пригодится.</span></div></div><div class="afx-story-benefit"><i>03</i><div><b>Снятие возражения</b><span>Закрываем типичный вопрос до того, как его зададут.</span></div></div></div></div>');
    var details=makeSlide('details','<div class="afx-story-bg"></div><div class="afx-story-content"><div class="afx-story-top"><span class="afx-story-num">04 / 06</span><span class="afx-story-pill">Детали</span></div><h4 class="afx-story-heading">Показываем то,<br>что важно рассмотреть</h4><p class="afx-story-sub">Крупные планы, комплектация, материал и важные детали — отдельным понятным слайдом.</p><div class="afx-story-detail-visual"><div class="afx-story-callouts"><div class="afx-story-callout"><b>Материал</b><span>визуальный акцент</span></div><div class="afx-story-callout"><b>Комплектация</b><span>что входит</span></div><div class="afx-story-callout"><b>Особенность</b><span>важная деталь</span></div></div></div></div>');
    var scenario=makeSlide('scenario','<div class="afx-story-bg"></div><div class="afx-story-grid"></div><div class="afx-story-content"><div class="afx-story-top"><span class="afx-story-num">05 / 06</span><span class="afx-story-pill">В использовании</span></div><h4 class="afx-story-heading">Товар в реальном<br>сценарии.</h4><p class="afx-story-sub">Показываем, как продукт выглядит и работает в понятной жизненной ситуации — без перегруза текста.</p><div class="afx-story-detail-visual"></div></div>');
    var finalSlide=makeSlide('final','<div class="afx-story-bg"></div><div class="afx-story-grid"></div><div class="afx-story-content"><div class="afx-story-top"><span class="afx-story-num">06 / 06</span><span class="afx-story-pill">Полный комплект</span></div><h4 class="afx-story-heading">Карточки работают<br>как одна история.</h4><p class="afx-story-sub">Каждый следующий экран продолжает предыдущий: от первого внимания до понимания товара и решения о покупке.</p><div class="afx-story-pack"><div class="afx-story-pack-card"><span>Обложка</span></div><div class="afx-story-pack-card"><span>Характеристики</span></div><div class="afx-story-pack-card"><span>Преимущества</span></div><div class="afx-story-pack-card"><span>Детали</span></div><div class="afx-story-pack-card"><span>Сценарий</span></div><div class="afx-story-pack-card"><span>Финал</span></div></div><div class="afx-story-final"><b>Комплект адаптируется под товар</b><span>Количество и смысл слайдов меняются под задачу: характеристики, комплектация, инструкция, сравнение, инфографика и другие блоки.</span></div></div>');
    var prev=document.createElement('button');prev.type='button';prev.className='afx-story-arrow prev';prev.setAttribute('aria-label','Предыдущий слайд');prev.textContent='‹';
    var next=document.createElement('button');next.type='button';next.className='afx-story-arrow next';next.setAttribute('aria-label','Следующий слайд');next.textContent='›';stage.append(prev,next);
    media.insertBefore(stage,media.firstChild);
    var tabs=document.createElement('div');tabs.className='afx-story-tabs';var labels=['1 · Обложка','2 · Характеристики','3 · Преимущества','4 · Детали','5 · Сценарий','6 · Комплект'];labels.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.className='afx-story-tab'+(i===0?' active':'');b.textContent=t;b.dataset.slide=String(i);tabs.appendChild(b)});media.appendChild(tabs);
    var meta=document.createElement('div');meta.className='afx-story-meta';meta.innerHTML='<span class="afx-story-counter">1 / 6</span><span class="afx-story-kind">Обложка</span>';info.insertBefore(meta,copy);
    var counter=meta.querySelector('.afx-story-counter'),kind=meta.querySelector('.afx-story-kind');
    var copyTexts=['Первый слайд цепляет внимание и сразу показывает товар, позиционирование и главное сообщение.','Характеристики раскладываются по приоритету: покупатель быстро понимает параметры, не читая полотно текста.','Преимущества объясняют, что эти характеристики дают человеку и почему товар стоит выбрать.','Детали и крупные планы помогают рассмотреть материал, комплектацию и важные особенности товара.','Сценарный слайд показывает продукт в использовании и помогает представить его в реальной жизни.','В результате получается связный комплект: обложка плюс пять продолжений, где каждый слайд выполняет свою задачу.'];
    var kinds=['Обложка','Характеристики','Преимущества','Детали','Сценарий','Полный комплект'];var active=0,slides=[cover,specs,benefits,details,scenario,finalSlide];
    function safeBg(el,src){if(!el)return;el.style.backgroundImage='url('+JSON.stringify(String(src||''))+')'}
    function syncBackgrounds(){var src=img.currentSrc||img.src||'';[specs,benefits,details,scenario,finalSlide].forEach(function(s){safeBg(s.querySelector('.afx-story-bg'),src)});safeBg(details.querySelector('.afx-story-detail-visual'),src);safeBg(scenario.querySelector('.afx-story-detail-visual'),src)}
    function go(i){active=Math.max(0,Math.min(slides.length-1,i));slides.forEach(function(s,n){s.classList.toggle('active',n===active)});[].slice.call(tabs.children).forEach(function(b,n){b.classList.toggle('active',n===active);if(n===active)b.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})});prev.disabled=active===0;next.disabled=active===slides.length-1;counter.textContent=(active+1)+' / '+slides.length;kind.textContent=kinds[active];copy.textContent=copyTexts[active]}
    prev.addEventListener('click',function(e){e.stopPropagation();go(active-1)});next.addEventListener('click',function(e){e.stopPropagation();go(active+1)});tabs.addEventListener('click',function(e){var b=e.target.closest('[data-slide]');if(b)go(Number(b.dataset.slide)||0)});
    var sx=0,sy=0;stage.addEventListener('touchstart',function(e){var t=e.touches&&e.touches[0];if(t){sx=t.clientX;sy=t.clientY}},{passive:true});stage.addEventListener('touchend',function(e){var t=e.changedTouches&&e.changedTouches[0];if(!t)return;var dx=t.clientX-sx,dy=t.clientY-sy;if(Math.abs(dx)>52&&Math.abs(dx)>Math.abs(dy)*1.25)go(active+(dx<0?1:-1))},{passive:true});
    document.addEventListener('keydown',function(e){if(!modal.classList.contains('open'))return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopImmediatePropagation();go(active+(e.key==='ArrowRight'?1:-1))}},true);
    function refresh(){syncBackgrounds();go(0)}
    new MutationObserver(refresh).observe(img,{attributes:true,attributeFilter:['src']});new MutationObserver(function(){go(0)}).observe(title,{childList:true,subtree:true});
    var casePrev=document.getElementById('afx-case-prev'),caseNext=document.getElementById('afx-case-next');if(casePrev)casePrev.textContent='← Другой кейс';if(caseNext)caseNext.textContent='Другой кейс →';
    var chips=info.querySelector('.afx-case-chips');if(chips)chips.innerHTML='<span class="afx-case-chip">6 слайдов · полный кейс</span><span class="afx-case-chip">Характеристики</span><span class="afx-case-chip">Преимущества</span><span class="afx-case-chip">Сценарий</span>';
    syncBackgrounds();go(0);return true;
  }
  function addBadges(){[].slice.call(document.querySelectorAll('.afx-case-ready')).forEach(function(el){if(el.querySelector('.afx-pack-badge'))return;var b=document.createElement('span');b.className='afx-pack-badge';b.textContent='6 слайдов · открыть';el.appendChild(b)})}
  var tries=0,t=setInterval(function(){tries++;addBadges();if(initStory()&&tries>4){clearInterval(t)}else if(tries>24){clearInterval(t)}},250);setTimeout(addBadges,1400);
})();
</script>`;

const CASE_REAL_SLIDES_HTML = String.raw`
<style>
  .afx-story-stage{--afx-case-accent:#a95cff;--afx-case-accent2:#55ddff}
  .afx-story-slide.afx-realized{background:linear-gradient(145deg,#12091d,#08050d)}
  .afx-real-art{position:absolute;inset:0;overflow:hidden;pointer-events:none}
  .afx-real-art:before{content:"";position:absolute;width:270px;height:270px;border-radius:50%;right:-90px;top:-80px;background:var(--afx-case-accent);filter:blur(86px);opacity:.18}
  .afx-real-art:after{content:"";position:absolute;width:220px;height:220px;border-radius:50%;left:-90px;bottom:-90px;background:var(--afx-case-accent2);filter:blur(90px);opacity:.1}
  .afx-real-content{position:relative;z-index:3;height:100%;box-sizing:border-box;padding:31px;display:flex;flex-direction:column}
  .afx-real-kicker{display:flex;align-items:center;justify-content:space-between;gap:12px;color:#bdb0c9;font:900 9px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase}
  .afx-real-kicker span:last-child{padding:7px 9px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.045);color:#fff}
  .afx-real-title{margin:22px 0 8px;font-size:clamp(29px,4.6vw,47px);line-height:.94;letter-spacing:-.05em;font-weight:950;color:#fff}
  .afx-real-sub{margin:0;color:#a99db5;font-size:12px;line-height:1.5;max-width:390px}
  .afx-real-product{position:relative;margin:19px 0 0;min-height:160px;flex:1;border-radius:22px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background-position:center;background-size:cover;box-shadow:0 18px 54px rgba(0,0,0,.28)}
  .afx-real-product:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,4,14,.02),rgba(8,4,14,.14) 46%,rgba(8,4,14,.84));z-index:1}
  .afx-real-product:after{content:"";position:absolute;inset:0;border:1px solid rgba(255,255,255,.05);border-radius:inherit;z-index:2;pointer-events:none}
  .afx-real-tags{position:absolute;z-index:3;left:13px;right:13px;bottom:13px;display:flex;gap:7px;flex-wrap:wrap}
  .afx-real-tags span{padding:7px 9px;border-radius:999px;background:rgba(10,5,18,.76);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(9px);color:#eee8f4;font:850 8px/1 system-ui,sans-serif}
  .afx-real-spec-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:auto;padding-top:18px}
  .afx-real-spec{position:relative;overflow:hidden;min-height:86px;padding:14px;border-radius:17px;border:1px solid rgba(255,255,255,.09);background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.024))}
  .afx-real-spec:before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--afx-case-accent);opacity:.75}
  .afx-real-spec b{display:block;font-size:13px;color:#fff}.afx-real-spec span{display:block;margin-top:6px;color:#92869e;font-size:9px;line-height:1.35}
  .afx-real-benefit-list{display:grid;gap:9px;margin-top:auto;padding-top:20px}
  .afx-real-benefit{display:grid;grid-template-columns:40px 1fr;gap:12px;align-items:center;padding:12px 13px;border-radius:17px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.035)}
  .afx-real-benefit i{width:40px;height:40px;display:grid;place-items:center;border-radius:13px;background:linear-gradient(135deg,var(--afx-case-accent),#402079);color:#fff;font:950 11px/1 system-ui,sans-serif;font-style:normal;box-shadow:0 8px 24px rgba(91,36,167,.25)}
  .afx-real-benefit b{display:block;font-size:12px}.afx-real-benefit span{display:block;margin-top:3px;color:#8f8499;font-size:9px;line-height:1.35}
  .afx-real-detail{position:relative;margin-top:19px;flex:1;min-height:218px;border-radius:22px;overflow:hidden;background-position:center;background-size:160%;border:1px solid rgba(255,255,255,.1)}
  .afx-real-detail:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,4,14,.06),rgba(8,4,14,.32) 47%,rgba(8,4,14,.9))}
  .afx-real-callouts{position:absolute;z-index:3;left:12px;right:12px;bottom:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
  .afx-real-callout{padding:10px;border-radius:13px;background:rgba(9,5,15,.78);border:1px solid rgba(255,255,255,.09);backdrop-filter:blur(8px)}
  .afx-real-callout b{display:block;font-size:9px}.afx-real-callout span{display:block;margin-top:3px;color:#8e8299;font-size:7px;line-height:1.3}
  .afx-real-pack{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:22px}
  .afx-real-pack-card{position:relative;aspect-ratio:4/5;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background-position:center;background-size:cover}
  .afx-real-pack-card:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,4,14,.18),rgba(8,4,14,.72))}
  .afx-real-pack-card span{position:absolute;z-index:2;left:7px;right:7px;bottom:7px;color:#f3edf7;font:850 6.5px/1.15 system-ui,sans-serif}
  .afx-real-scenario{position:relative;margin-top:19px;flex:1;min-height:228px;border-radius:22px;overflow:hidden;background-position:center;background-size:cover;border:1px solid rgba(255,255,255,.1);box-shadow:0 18px 54px rgba(0,0,0,.24)}
  .afx-real-scenario:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,4,14,.03),rgba(8,4,14,.22) 45%,rgba(8,4,14,.92));z-index:1}
  .afx-real-scenario-copy{position:absolute;z-index:3;left:15px;right:15px;bottom:15px}
  .afx-real-scenario-copy b{display:block;font-size:18px;color:#fff;letter-spacing:-.025em}.afx-real-scenario-copy span{display:block;margin-top:6px;color:#c7bbd0;font-size:9px;line-height:1.4}
  .afx-real-scenario-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.afx-real-scenario-tags i{font-style:normal;padding:7px 9px;border-radius:999px;background:rgba(9,5,15,.74);border:1px solid rgba(255,255,255,.1);color:#f1eaf6;font:850 8px/1 system-ui,sans-serif;backdrop-filter:blur(8px)}
  .afx-real-final{margin-top:auto;padding:17px;border-radius:19px;border:1px solid rgba(255,255,255,.09);background:linear-gradient(135deg,rgba(169,92,255,.13),rgba(85,221,255,.055))}
  .afx-real-final b{display:block;font-size:17px}.afx-real-final span{display:block;margin-top:7px;color:#9b90a6;font-size:10px;line-height:1.45}
  @media(max-width:760px){.afx-real-content{padding:24px}.afx-real-title{font-size:33px}.afx-real-product{min-height:145px}.afx-real-spec{min-height:74px;padding:11px}.afx-real-callouts{grid-template-columns:1fr}.afx-real-callout:nth-child(n+2){display:none}}
</style>
<script>
(function(){
  function esc(v){return String(v||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function profileFor(name){
    var t=String(name||'').toLowerCase();
    var p={kind:'товар',accent:'#a95cff',accent2:'#55ddff',lead:'Показываем товар последовательно: от ключевых особенностей к деталям и сценарию использования.',specs:['Материал','Конструкция','Комплектация','Сценарий'],benefits:['Главный акцент','Понятная польза','Детали выбора'],details:['Материал','Комплектация','Особенность'],scenarioTitle:'В реальной жизни',scenarioLead:'Финальный сценарный экран помогает представить товар в использовании.',scenarioTags:['Контекст','Масштаб','Эмоция'],final:'Полный комплект раскрывает товар шаг за шагом.'};
    if(/клавиат|keyboard/.test(t))p={kind:'периферия',accent:'#b66cff',accent2:'#e4dcff',lead:'Продолжаем эстетику обложки и раскрываем реальные характеристики клавиатуры без выдуманных цифр.',specs:['68 клавиш','RGB-подсветка','USB-C','Компактный формат'],benefits:['Больше места на столе','Подсветка как часть образа','Понятное подключение'],details:['Кейкапы','Корпус','USB-C'],scenarioTitle:'Работа. Игра. Ритм.',scenarioLead:'Белая клавиатура с лавандовыми акцентами остаётся главным объектом и переходит в рабочий игровой сетап.',scenarioTags:['68 клавиш','RGB','USB-C'],final:'Шесть карточек собирают клавиатуру в цельный техно-кейс: от вау-обложки до сценария использования.'};
    else if(/городск.*рюкзак|рюкзак|backpack/.test(t))p={kind:'рюкзак',accent:'#c9ff24',accent2:'#6dff8f',lead:'Раскрываем вместительность и практичность тем же контрастным языком, что и на обложке.',specs:['Объём 20 л','Ноутбук 15,6″','Водоотталкивающая ткань','Городской формат'],benefits:['Всё по местам','Ноутбук всегда рядом','Готов к погоде'],details:['Основное отделение','Лямки и крепления','Фактура ткани'],scenarioTitle:'Город на весь день',scenarioLead:'Показываем рюкзак в движении: дорога, учёба, работа и ежедневные вещи в одном понятном сценарии.',scenarioTags:['20 л','15,6″','Everyday'],final:'Кейс показывает и характер рюкзака, и его практичность — без скучной таблицы характеристик.'};
    else if(/кросс[- ]?боди|cross.?body/.test(t))p={kind:'аксессуар',accent:'#c96870',accent2:'#f0c6b8',lead:'Продолжаем мягкую fashion-подачу и выводим в центр материал, организацию и посадку сумки.',specs:['Экокожа','2 отделения','Регулируемый ремень','Компактный формат'],benefits:['Собранный образ','Удобная организация','Регулируемая посадка'],details:['Фактура экокожи','Фурнитура','Ремень'],scenarioTitle:'Акцент в образе',scenarioLead:'Сценарный слайд показывает сумку как часть повседневного образа, сохраняя бордово-кремовую эстетику серии.',scenarioTags:['Экокожа','2 отделения','Ремень'],final:'От обложки до lifestyle-финала серия выглядит как единая fashion-история.'};
    else if(/кроссов|ботин|обув|sneaker|shoe/.test(t))p={kind:'обувь',accent:'#ff7442',accent2:'#ffd0a8',lead:'Оранжевая динамика обложки продолжается в карточках с посадкой, материалом и конструкцией.',specs:['Размеры 36–44','Дышащая сетка','Лёгкая подошва','Для движения'],benefits:['Воздух проходит свободно','Лёгкость в каждом шаге','Универсальный силуэт'],details:['Сетка верха','Подошва','Шнуровка'],scenarioTitle:'Движение в ритме',scenarioLead:'Показываем кроссовки в активном городском сценарии, сохраняя яркий оранжевый визуальный код.',scenarioTags:['36–44','Сетка','Лёгкая подошва'],final:'Серия раскрывает кроссовки от ключевых параметров до ощущения движения.'};
    else if(/настольн.*ламп|ламп|светиль|light/.test(t))p={kind:'свет',accent:'#f1c078',accent2:'#fff0d7',lead:'Тёплый интерьерный визуал продолжается через режимы света, управление и форму корпуса.',specs:['3 режима света','Сенсорное управление','Мощность 10 Вт','Интерьерный формат'],benefits:['Свет под настроение','Управление одним касанием','Мягкий акцент в интерьере'],details:['Плафон','Основание','Сенсор'],scenarioTitle:'Свет, который создаёт атмосферу',scenarioLead:'Финальный сценарий переносит лампу на рабочий или вечерний стол и показывает её роль в пространстве.',scenarioTags:['3 режима','Touch','10 Вт'],final:'Шесть слайдов превращают предмет интерьера в цельный атмосферный кейс.'};
    else if(/термо.*бутыл|термос|бутыл|bottle|кружк/.test(t))p={kind:'термобутылка',accent:'#3fd6c6',accent2:'#8cecff',lead:'Сохраняем холодную изумрудную эстетику и последовательно раскрываем материал, объём и крышку.',specs:['Объём 500 мл','Сталь 304','Герметичная крышка','Дорожный формат'],benefits:['Удобно брать с собой','Прочный металлический корпус','Закрывается герметично'],details:['Сталь 304','Крышка','Горлышко'],scenarioTitle:'Всегда под рукой',scenarioLead:'Показываем бутылку в дороге, на прогулке или тренировке — в том же холодном премиальном свете.',scenarioTags:['500 мл','304 steel','Герметично'],final:'Серия соединяет премиальную фактуру металла с понятной демонстрацией повседневного использования.'};
    else if(/кофе|зерн|зерён|coffee/.test(t))p={kind:'кофе',accent:'#d8a05b',accent2:'#ffe0a7',lead:'Тёплая кофейная подача продолжается через сорт, массу, обжарку и визуал самих зёрен.',specs:['100% арабика','Масса 250 г','Средняя обжарка','Кофе в зёрнах'],benefits:['Чистый фокус на продукте','Понятная степень обжарки','Премиальная подача упаковки'],details:['Зёрна','Пакет','Фактура обжарки'],scenarioTitle:'Ритуал начинается с аромата',scenarioLead:'Сценарный экран переносит продукт от упаковки к чашке и помогает связать характеристики с ощущением кофе.',scenarioTags:['Arabica','250 г','Medium roast'],final:'Шесть экранов ведут от упаковки к кофейному ритуалу, сохраняя золотисто-коричневую эстетику.'};
    else if(/колонк|speaker|акустик/.test(t))p={kind:'аудио',accent:'#8e63ff',accent2:'#5ae5ff',lead:'В следующих карточках раскрываем звук, управление и способы подключения без перегруза текста.',specs:['Акустика','Управление','Подключение','Форм-фактор'],benefits:['Звук в центре','Сценарии использования','Удобное управление'],details:['Корпус','Органы управления','Разъёмы'],scenarioTitle:'Музыка в пространстве',scenarioLead:'Показываем акустику в интерьерном сценарии и сохраняем техно-настроение серии.',scenarioTags:['Музыка','Дом','Управление'],final:'Серия ведёт от эмоции на обложке к пониманию аудиосистемы.'};
    else if(/наушник|headphone|earbud|гарнитур/.test(t))p={kind:'наушники',accent:'#9e57ff',accent2:'#52dfff',lead:'Показываем посадку, элементы управления и ключевые зоны, которые покупатель хочет рассмотреть до заказа.',specs:['Посадка','Амбушюры','Управление','Подключение'],benefits:['Комфортный образ','Понятное управление','Сценарий на каждый день'],details:['Чашки','Оголовье','Кнопки'],scenarioTitle:'Твой звук — везде',scenarioLead:'Показываем наушники в дороге, за работой или дома — без ухода от визуального языка обложки.',scenarioTags:['Дом','Дорога','Работа'],final:'Комплект соединяет стиль, комфорт и понятную демонстрацию деталей.'};
    else if(/кепк|бейсбол|cap|шапк|панам/.test(t))p={kind:'аксессуар',accent:'#ff7b66',accent2:'#b26cff',lead:'Карточки показывают посадку, материал и детали отделки так, как их оценивают при выборе аксессуара.',specs:['Материал','Посадка','Форма','Детали'],benefits:['Образ целиком','Посадка','Акцент на отделке'],details:['Ткань','Застёжка','Эмблема'],scenarioTitle:'Финальный штрих образа',scenarioLead:'Показываем аксессуар в повседневном контексте, сохраняя эстетику исходной обложки.',scenarioTags:['Образ','Посадка','Детали'],final:'Серия раскрывает аксессуар от общего образа до мелких деталей.'};
    else if(/час|watch|смарт|браслет|tracker/.test(t))p={kind:'гаджет',accent:'#5fdcff',accent2:'#9f59ff',lead:'Экран, корпус и управление получают отдельные акценты — покупатель быстро понимает устройство.',specs:['Экран','Управление','Корпус','Ремешок'],benefits:['Интерфейс','На руке','Быстрый доступ'],details:['Дисплей','Кнопки','Крепление'],scenarioTitle:'Гаджет в твоём ритме',scenarioLead:'Показываем устройство в ежедневном сценарии и сохраняем чистый технологичный визуал.',scenarioTags:['День','Движение','Контроль'],final:'Комплект ведёт от премиальной обложки к понятному знакомству с гаджетом.'};
    else if(/проект|projector/.test(t))p={kind:'проектор',accent:'#765cff',accent2:'#ff9b7a',lead:'Показываем экран, подключение и компактность так, чтобы сценарий использования считывался сразу.',specs:['Экран','Подключение','Компактность','Сценарий'],benefits:['Кино дома','Легко переносить','Понятное подключение'],details:['Объектив','Порты','Корпус'],scenarioTitle:'Большой экран — где угодно',scenarioLead:'Переносим проектор в вечерний домашний сценарий и показываем масштаб впечатления.',scenarioTags:['Кино','Дом','Мобильность'],final:'Слайды ведут от устройства к эмоции большого экрана.'};
    else if(/крем|сыворот|космет|шампун|beauty/.test(t))p={kind:'beauty',accent:'#ff75b9',accent2:'#b777ff',lead:'Делаем акцент на формате продукта, текстуре, упаковке и понятной последовательности использования.',specs:['Формат','Текстура','Применение','Упаковка'],benefits:['Визуальный эффект','Понятный ритуал','Акцент на продукте'],details:['Флакон','Дозатор','Текстура'],scenarioTitle:'Часть ежедневного ритуала',scenarioLead:'Показываем продукт в аккуратной beauty-сцене и сохраняем визуальную чистоту серии.',scenarioTags:['Ритуал','Текстура','Уход'],final:'Комплект выстраивает аккуратную beauty-историю без перегруза обещаниями.'};
    return p;
  }
  function setBg(el,src){if(el)el.style.backgroundImage='url('+JSON.stringify(String(src||''))+')'}
  function cards(labels,src){return labels.map(function(x){return '<div class="afx-real-pack-card"><span>'+esc(x)+'</span></div>'}).join('')}
  function render(){
    var stage=document.querySelector('#afx-case-modal .afx-story-stage'),title=document.getElementById('afx-case-title'),img=document.getElementById('afx-case-image');
    if(!stage||!title||!img)return false;
    var specs=stage.querySelector('.afx-story-slide.specs'),benefits=stage.querySelector('.afx-story-slide.benefits'),details=stage.querySelector('.afx-story-slide.details'),scenario=stage.querySelector('.afx-story-slide.scenario'),finalSlide=stage.querySelector('.afx-story-slide.final');
    if(!specs||!benefits||!details||!scenario||!finalSlide)return false;
    var name=(title.textContent||'Товар AuraFX').trim(),src=img.currentSrc||img.src||'',p=profileFor(name);
    stage.style.setProperty('--afx-case-accent',p.accent);stage.style.setProperty('--afx-case-accent2',p.accent2);
    specs.classList.add('afx-realized');benefits.classList.add('afx-realized');details.classList.add('afx-realized');scenario.classList.add('afx-realized');finalSlide.classList.add('afx-realized');
    specs.innerHTML='<div class="afx-real-art"></div><div class="afx-story-bg"></div><div class="afx-real-content"><div class="afx-real-kicker"><span>02 / 06 · '+esc(p.kind)+'</span><span>Характеристики</span></div><h4 class="afx-real-title">'+esc(name)+'</h4><p class="afx-real-sub">'+esc(p.lead)+'</p><div class="afx-real-spec-grid">'+p.specs.map(function(x){return '<div class="afx-real-spec"><b>'+esc(x)+'</b><span>Ключевой факт вынесен отдельно — читается за секунду и не теряется в тексте.</span></div>'}).join('')+'</div></div>';
    benefits.innerHTML='<div class="afx-real-art"></div><div class="afx-story-bg"></div><div class="afx-real-content"><div class="afx-real-kicker"><span>03 / 06 · '+esc(p.kind)+'</span><span>Преимущества</span></div><h4 class="afx-real-title">Почему выбирают<br>'+esc(name)+'</h4><p class="afx-real-sub">Не повторяем обложку: превращаем характеристики в понятные причины рассмотреть товар дальше.</p><div class="afx-real-benefit-list">'+p.benefits.map(function(x,i){return '<div class="afx-real-benefit"><i>0'+(i+1)+'</i><div><b>'+esc(x)+'</b><span>Короткий тезис поддерживается визуальным акцентом и продолжает стиль обложки.</span></div></div>'}).join('')+'</div></div>';
    details.innerHTML='<div class="afx-real-art"></div><div class="afx-story-bg"></div><div class="afx-real-content"><div class="afx-real-kicker"><span>04 / 06 · '+esc(p.kind)+'</span><span>Детали</span></div><h4 class="afx-real-title">Рассмотреть ближе.</h4><p class="afx-real-sub">Крупный визуал товара плюс три зоны, которые покупателю важно увидеть отдельно.</p><div class="afx-story-detail-visual afx-real-detail"><div class="afx-real-callouts">'+p.details.map(function(x){return '<div class="afx-real-callout"><b>'+esc(x)+'</b><span>крупный план</span></div>'}).join('')+'</div></div></div>';
    scenario.innerHTML='<div class="afx-real-art"></div><div class="afx-story-bg"></div><div class="afx-real-content"><div class="afx-real-kicker"><span>05 / 06 · '+esc(p.kind)+'</span><span>В использовании</span></div><h4 class="afx-real-title">'+esc(p.scenarioTitle)+'</h4><p class="afx-real-sub">'+esc(p.scenarioLead)+'</p><div class="afx-real-scenario"><div class="afx-real-scenario-copy"><b>'+esc(name)+'</b><span>Сценарий продолжает визуальный язык обложки и показывает товар в понятном контексте.</span><div class="afx-real-scenario-tags">'+p.scenarioTags.map(function(x){return '<i>'+esc(x)+'</i>'}).join('')+'</div></div></div></div>';
    finalSlide.innerHTML='<div class="afx-real-art"></div><div class="afx-story-bg"></div><div class="afx-real-content"><div class="afx-real-kicker"><span>06 / 06 · '+esc(p.kind)+'</span><span>Комплект</span></div><h4 class="afx-real-title">Один товар.<br>Одна цельная история.</h4><p class="afx-real-sub">Обложка цепляет, а пять следующих карточек последовательно раскрывают товар и сценарий использования.</p><div class="afx-real-pack">'+cards(['Обложка',p.specs[0],p.benefits[0],p.details[0],'Сценарий','Финал'],src)+'</div><div class="afx-real-final"><b>'+esc(p.final)+'</b><span>Числа и факты берём только из самой обложки или данных клиента — никаких выдуманных характеристик.</span></div></div>';
    [specs,benefits,details,scenario,finalSlide].forEach(function(slide){setBg(slide.querySelector('.afx-story-bg'),src)});
    setBg(details.querySelector('.afx-real-detail'),src);
    setBg(scenario.querySelector('.afx-real-scenario'),src);
    [].slice.call(finalSlide.querySelectorAll('.afx-real-pack-card')).forEach(function(el){setBg(el,src)});
    return true;
  }
  function boot(){
    var tries=0,t=setInterval(function(){tries++;if(render()||tries>30)clearInterval(t)},200);
    var title=document.getElementById('afx-case-title'),img=document.getElementById('afx-case-image');
    if(title)new MutationObserver(function(){setTimeout(render,0)}).observe(title,{childList:true,subtree:true});
    if(img)new MutationObserver(function(){setTimeout(render,0)}).observe(img,{attributes:true,attributeFilter:['src']});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
</script>`;

const PERFORMANCE_V2_HTML = String.raw`
<style>
  /* Fast perceived loading: paint off-screen sections only when they approach the viewport. */
  #afx-before-after,#afx-wow-transform,#afx-style-lab,#afx-why-studio,#afx-smart-order,#afx-promo-lab,#afx-faq,#aurafx-reviews{content-visibility:auto;contain-intrinsic-size:auto 760px}
  .portfolio-grid img,.afx-case-ready img{background:linear-gradient(120deg,#10091a,#1b0e2b 45%,#10091a);transition:opacity .25s ease}
  .afx-img-pending{opacity:.001!important}.afx-img-ready{opacity:1!important}
  @media(max-width:760px){
    .afx-r-panel,.afx-faq-item,.afx-tool-pill,.afx-case-ready{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
    .afx-price-card-decor .afx-price-card-glow{filter:none!important;opacity:.66}
  }
</style>
<script>
(function(){
  function tune(){
    var imgs=[].slice.call(document.querySelectorAll('img'));
    imgs.forEach(function(img,i){
      try{
        img.decoding='async';
        var inHero=!!img.closest('.showcase');
        var inFirstCases=!!(img.closest('.portfolio-grid') && [].slice.call(document.querySelectorAll('.portfolio-grid img')).indexOf(img)<3);
        if(inHero||inFirstCases){img.loading='eager';img.fetchPriority='high'}
        else{img.loading='lazy';img.fetchPriority='low'}
        if(!img.complete){img.classList.add('afx-img-pending');img.addEventListener('load',function(){img.classList.remove('afx-img-pending');img.classList.add('afx-img-ready')},{once:true});img.addEventListener('error',function(){img.classList.remove('afx-img-pending')},{once:true})}
        else img.classList.add('afx-img-ready');
      }catch(e){}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',tune,{once:true});else tune();
  setTimeout(tune,1200);
})();
</script>`;

const WOW_EXPERIENCE_HTML = String.raw`
<style>
  :root{--afx-wow-purple:#a855f7;--afx-wow-cyan:#62e7ff;--afx-wow-bg:#09050f}
  .afx-wow-wrap{width:min(1160px,calc(100% - 40px));margin:auto}
  .afx-wow-kicker{display:inline-flex;align-items:center;gap:9px;color:#d9cae8;font:850 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase}
  .afx-wow-kicker i{width:8px;height:8px;border-radius:50%;background:#65e7ff;box-shadow:0 0 16px rgba(101,231,255,.65)}
  .afx-wow-title{margin:18px 0 12px;font-size:clamp(38px,6vw,72px);line-height:.94;letter-spacing:-.055em;font-weight:950}
  .afx-wow-title em{font-style:normal;color:#bd7cff}
  .afx-wow-sub{max-width:620px;margin:0;color:#a99db4;font-size:15px;line-height:1.65}
  .afx-wow-card{border:1px solid rgba(255,255,255,.09);background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.022));border-radius:30px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.22)}

  /* 1. Scroll transformation */
  #afx-wow-transform{position:relative;padding:100px 0 110px;background:linear-gradient(180deg,rgba(8,4,14,0),rgba(36,10,67,.34),rgba(8,4,14,0));color:#fff}
  .afx-transform-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:34px;align-items:start;margin-top:34px}
  .afx-transform-copy{padding-top:20px;position:sticky;top:100px}
  .afx-transform-copy h3{font-size:26px;margin:0 0 12px;letter-spacing:-.03em}
  .afx-transform-copy p{color:#94889f;line-height:1.65;margin:0 0 22px}
  .afx-transform-step{display:flex;gap:11px;align-items:center;padding:11px 0;color:#807489;font-size:12px;border-bottom:1px solid rgba(255,255,255,.055)}
  .afx-transform-step b{width:28px;height:28px;border-radius:10px;display:grid;place-items:center;background:rgba(168,85,247,.12);color:#c691ff;font-size:10px}
  .afx-transform-stage-wrap{min-height:125vh}
  .afx-transform-stage{position:sticky;top:88px;aspect-ratio:1/1;border-radius:32px;overflow:hidden;background:#e8e8e8;border:1px solid rgba(255,255,255,.11);box-shadow:0 35px 100px rgba(0,0,0,.34);isolation:isolate}
  .afx-transform-bg{position:absolute;inset:0;background:radial-gradient(circle at 72% 22%,rgba(104,228,255,.34),transparent 28%),radial-gradient(circle at 20% 76%,rgba(171,71,255,.42),transparent 36%),linear-gradient(135deg,#07050c,#160a27 52%,#0b0613);opacity:0;transition:opacity .12s linear}
  .afx-transform-gridlines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:38px 38px;opacity:0}
  .afx-transform-product{position:absolute;width:74%;height:74%;left:13%;top:13%;object-fit:contain;z-index:3;filter:drop-shadow(0 18px 28px rgba(0,0,0,.12));will-change:transform}
  .afx-transform-copyfx{position:absolute;z-index:4;left:7%;right:7%;top:7%;opacity:0;transform:translateY(16px)}
  .afx-transform-copyfx small{font-weight:900;letter-spacing:.17em;text-transform:uppercase;color:#a8f3ff}
  .afx-transform-copyfx h4{margin:10px 0 0;font-size:clamp(38px,7vw,82px);line-height:.84;letter-spacing:-.07em;text-shadow:0 10px 38px rgba(0,0,0,.25)}
  .afx-transform-specs{position:absolute;z-index:5;left:7%;right:7%;bottom:7%;display:flex;gap:8px;flex-wrap:wrap;opacity:0;transform:translateY(14px)}
  .afx-transform-specs span{padding:9px 11px;border-radius:999px;background:rgba(7,4,13,.72);border:1px solid rgba(255,255,255,.11);font-size:10px;font-weight:850;backdrop-filter:blur(8px)}
  .afx-transform-progress{height:4px;margin-top:18px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden}
  .afx-transform-progress i{display:block;width:0;height:100%;background:linear-gradient(90deg,#5de7ff,#ac51ff);border-radius:99px}

  /* 2. Style Lab */
  #afx-style-lab{padding:96px 0;color:#fff}
  .afx-style-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:22px;margin-top:34px;align-items:stretch}
  .afx-style-preview{min-height:590px;position:relative;padding:18px}
  .afx-style-canvas{height:100%;min-height:550px;border-radius:24px;position:relative;overflow:hidden;background:linear-gradient(135deg,#0b0711,#24103a);transition:background .35s ease}
  .afx-style-canvas img{position:absolute;width:72%;height:72%;left:14%;top:15%;object-fit:contain;z-index:2;transition:transform .35s ease,filter .35s ease}
  .afx-style-copy{position:absolute;z-index:4;left:7%;right:7%;top:7%;transition:.3s}
  .afx-style-copy b{display:block;font-size:clamp(36px,5vw,68px);line-height:.88;letter-spacing:-.06em}
  .afx-style-copy span{display:inline-block;margin-top:10px;font-size:11px;font-weight:850;letter-spacing:.15em;text-transform:uppercase}
  .afx-style-chips{position:absolute;z-index:4;left:7%;right:7%;bottom:7%;display:flex;gap:7px;flex-wrap:wrap}
  .afx-style-chips i{font-style:normal;padding:8px 10px;border-radius:999px;font-size:9px;font-weight:850}
  .afx-style-canvas[data-theme="premium"]{background:radial-gradient(circle at 70% 20%,rgba(186,109,255,.38),transparent 30%),linear-gradient(145deg,#09060d,#22132e)}
  .afx-style-canvas[data-theme="premium"] .afx-style-copy b{font-family:Georgia,serif;font-weight:500;letter-spacing:-.045em} .afx-style-canvas[data-theme="premium"] .afx-style-copy span{color:#e6caff} .afx-style-canvas[data-theme="premium"] .afx-style-chips i{background:rgba(26,14,34,.72);border:1px solid rgba(232,204,255,.22)}
  .afx-style-canvas[data-theme="minimal"]{background:#f2f2f0;color:#111} .afx-style-canvas[data-theme="minimal"] img{filter:drop-shadow(0 16px 24px rgba(0,0,0,.12))} .afx-style-canvas[data-theme="minimal"] .afx-style-copy span{color:#555} .afx-style-canvas[data-theme="minimal"] .afx-style-chips i{background:#fff;border:1px solid #d4d4d4;color:#222}
  .afx-style-canvas[data-theme="market"]{background:radial-gradient(circle at 18% 18%,#ff5ac8,transparent 31%),radial-gradient(circle at 82% 74%,#64e5ff,transparent 30%),linear-gradient(135deg,#6b24ff,#16102d)} .afx-style-canvas[data-theme="market"] img{transform:rotate(-6deg) scale(1.04)} .afx-style-canvas[data-theme="market"] .afx-style-copy b{text-transform:uppercase;text-shadow:5px 5px 0 rgba(0,0,0,.22)} .afx-style-canvas[data-theme="market"] .afx-style-chips i{background:#fff;color:#111}
  .afx-style-controls{padding:26px}
  .afx-style-controls h3{font-size:26px;margin:0 0 8px} .afx-style-controls p{color:#998da4;line-height:1.6;margin:0 0 20px}
  .afx-style-tabs{display:grid;gap:9px} .afx-style-tab{text-align:left;border:1px solid rgba(255,255,255,.08);border-radius:17px;padding:15px;background:rgba(255,255,255,.03);color:#d8cfe0;font:850 13px/1.2 inherit;cursor:pointer;transition:.2s}
  .afx-style-tab.active{border-color:rgba(175,85,255,.52);background:linear-gradient(135deg,rgba(167,70,255,.16),rgba(80,217,255,.06));transform:translateX(4px)}
  .afx-style-hint{margin-top:18px;padding:14px;border-radius:16px;background:rgba(255,255,255,.028);color:#82778d;font-size:11px;line-height:1.55}

  /* 3. Why / BTS / lightweight motion reel */
  #afx-why-studio{padding:96px 0;color:#fff;background:linear-gradient(180deg,rgba(8,4,14,0),rgba(25,8,45,.28),rgba(8,4,14,0))}
  .afx-why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:30px}
  .afx-proof-card{border:1px solid rgba(255,255,255,.08);border-radius:21px;padding:20px;background:rgba(255,255,255,.028);cursor:pointer;transition:.22s;min-height:160px}
  .afx-proof-card:hover,.afx-proof-card.active{transform:translateY(-4px);border-color:rgba(172,82,255,.35);background:rgba(168,85,247,.07)}
  .afx-proof-card i{font-style:normal;color:#b77cff;font-size:11px;font-weight:900} .afx-proof-card b{display:block;font-size:17px;margin-top:28px} .afx-proof-card span{display:block;color:#8d8297;font-size:11px;line-height:1.55;margin-top:8px}
  .afx-bts-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px}
  .afx-bts{padding:26px} .afx-bts h3{margin:0 0 18px;font-size:24px}
  .afx-bts-row{display:grid;grid-template-columns:36px 1fr;gap:12px;padding:13px 0;border-top:1px solid rgba(255,255,255,.06)} .afx-bts-row:first-of-type{border-top:0} .afx-bts-row i{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;background:rgba(168,85,247,.11);font-style:normal;font-size:10px;font-weight:900;color:#c696ff} .afx-bts-row b{display:block;font-size:13px} .afx-bts-row span{display:block;margin-top:3px;color:#80758a;font-size:10px;line-height:1.4}
  .afx-reel{position:relative;min-height:390px;background:linear-gradient(145deg,#0b0711,#1e0b35);overflow:hidden}
  .afx-reel img{position:absolute;width:64%;height:64%;left:18%;top:20%;object-fit:contain;transition:.65s ease;z-index:2}
  .afx-reel-scene{position:absolute;inset:0;padding:26px;z-index:3;opacity:0;transition:.5s ease;pointer-events:none} .afx-reel-scene.active{opacity:1} .afx-reel-scene small{font-size:9px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#7beaff} .afx-reel-scene b{position:absolute;left:26px;right:26px;bottom:24px;font-size:32px;line-height:.95;letter-spacing:-.04em}
  .afx-reel-dots{position:absolute;top:24px;right:24px;display:flex;gap:5px;z-index:5} .afx-reel-dots i{width:6px;height:6px;border-radius:50%;background:#4d405a} .afx-reel-dots i.active{background:#68e8ff;box-shadow:0 0 12px #68e8ff}

  /* 4. Smart order + style advisor */
  #afx-smart-order{padding:96px 0 110px;color:#fff}
  .afx-order-shell{display:grid;grid-template-columns:.75fr 1.25fr;gap:18px;margin-top:32px}
  .afx-order-aside{padding:28px} .afx-order-aside h3{font-size:28px;line-height:1;margin:0 0 12px} .afx-order-aside p{color:#91859c;line-height:1.6;margin:0}
  .afx-order-meter{margin-top:24px;display:grid;gap:8px} .afx-order-meter span{height:4px;border-radius:99px;background:rgba(255,255,255,.07)} .afx-order-meter span.done{background:linear-gradient(90deg,#5fe5ff,#a855f7)}
  .afx-order-main{padding:28px;min-height:390px;display:flex;flex-direction:column}
  .afx-order-step{display:none;animation:afxStepIn .3s ease} .afx-order-step.active{display:block} @keyframes afxStepIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  .afx-order-step small{color:#b977ff;font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase} .afx-order-step h3{font-size:30px;margin:9px 0 18px;letter-spacing:-.035em}
  .afx-order-options{display:grid;grid-template-columns:repeat(2,1fr);gap:9px} .afx-order-option{border:1px solid rgba(255,255,255,.08);border-radius:17px;padding:15px;background:rgba(255,255,255,.03);color:#d9d0e1;font:800 13px/1.2 inherit;cursor:pointer;text-align:left} .afx-order-option.selected{border-color:rgba(179,88,255,.55);background:rgba(168,85,247,.12);box-shadow:0 0 0 3px rgba(168,85,247,.06)}
  .afx-order-input{width:100%;box-sizing:border-box;border:1px solid rgba(255,255,255,.1);border-radius:16px;background:#0e0816;color:#fff;padding:14px;font:inherit;outline:none} .afx-order-input:focus{border-color:#a855f7;box-shadow:0 0 0 4px rgba(168,85,247,.1)}
  .afx-order-result{padding:18px;border-radius:18px;background:linear-gradient(135deg,rgba(168,85,247,.13),rgba(95,229,255,.055));border:1px solid rgba(255,255,255,.08);margin-top:12px} .afx-order-result b{font-size:21px} .afx-order-result span{display:block;color:#9d91a7;margin-top:7px;font-size:12px;line-height:1.55}
  .afx-order-nav{display:flex;gap:9px;margin-top:auto;padding-top:22px} .afx-order-nav button{border:0;border-radius:14px;padding:13px 16px;font:850 13px/1 inherit;cursor:pointer} .afx-order-next{background:linear-gradient(135deg,#aa45ff,#6c2ce5);color:#fff} .afx-order-back{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)!important;color:#bbb0c4}

  #afx-pointer-glow{position:fixed;z-index:2;width:260px;height:260px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(149,76,255,.11),rgba(92,226,255,.035) 38%,transparent 70%);transform:translate3d(-999px,-999px,0);will-change:transform;mix-blend-mode:screen}
  @media(pointer:coarse){#afx-pointer-glow{display:none}}
  @media(max-width:900px){.afx-transform-grid,.afx-style-grid,.afx-bts-grid,.afx-order-shell{grid-template-columns:1fr}.afx-transform-copy{position:relative;top:auto}.afx-transform-stage-wrap{min-height:auto}.afx-transform-stage{position:relative;top:auto}.afx-why-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.afx-wow-wrap{width:min(100% - 28px,1160px)}#afx-wow-transform,#afx-style-lab,#afx-why-studio,#afx-smart-order{padding:72px 0}.afx-wow-title{font-size:44px}.afx-why-grid,.afx-order-options{grid-template-columns:1fr}.afx-style-preview{min-height:470px;padding:10px}.afx-style-canvas{min-height:450px}.afx-order-main,.afx-order-aside{padding:20px}}
</style>
<div id="afx-pointer-glow" aria-hidden="true"></div>

<section id="afx-wow-transform" aria-labelledby="afx-transform-title">
  <div class="afx-wow-wrap">
    <div class="afx-wow-kicker"><i></i> WOW-процесс</div>
    <h2 class="afx-wow-title" id="afx-transform-title">Из обычного фото — <em>в карточку</em></h2>
    <p class="afx-wow-sub">Прокрути блок: товар остаётся тем же, а вокруг него постепенно появляется композиция, свет, заголовок и понятные акценты.</p>
    <div class="afx-transform-grid">
      <div class="afx-transform-copy">
        <h3>Дизайн собирается по слоям</h3><p>Так клиент видит не «магический фильтр», а реальное превращение исходника в коммерческую подачу.</p>
        <div class="afx-transform-step"><b>01</b> Чистый исходник товара</div><div class="afx-transform-step"><b>02</b> Фон и визуальный фокус</div><div class="afx-transform-step"><b>03</b> Заголовок и позиционирование</div><div class="afx-transform-step"><b>04</b> Характеристики и преимущества</div>
        <div class="afx-transform-progress"><i id="afx-transform-bar"></i></div>
      </div>
      <div class="afx-transform-stage-wrap"><div class="afx-transform-stage" id="afx-transform-stage"><div class="afx-transform-bg" id="afx-transform-bg"></div><div class="afx-transform-gridlines" id="afx-transform-lines"></div><img class="afx-transform-product" data-wow-product alt="Обычное фото беспроводных наушников"><div class="afx-transform-copyfx" id="afx-transform-copyfx"><small>AuraFX · Audio</small><h4>ТВОЙ ЗВУК.<br>ТВОЙ РИТМ.</h4></div><div class="afx-transform-specs" id="afx-transform-specs"><span>Bluetooth</span><span>Комфортная посадка</span><span>Управление</span><span>Для дома и дороги</span></div></div></div>
    </div>
  </div>
</section>

<section id="afx-style-lab" aria-labelledby="afx-style-title"><div class="afx-wow-wrap"><div class="afx-wow-kicker"><i></i> Style Lab</div><h2 class="afx-wow-title" id="afx-style-title">Один товар. <em>Три характера.</em></h2><p class="afx-wow-sub">Нажми стиль — и один и тот же исходник меняет визуальный язык. Так проще понять, какая подача подходит твоему товару.</p><div class="afx-style-grid"><div class="afx-wow-card afx-style-preview"><div class="afx-style-canvas" id="afx-style-canvas" data-theme="premium"><img data-wow-product alt="Наушники"><div class="afx-style-copy"><span id="afx-style-kicker">AuraFX · Premium</span><b id="afx-style-head">ЗВУК<br>БЕЗ ЛИШНЕГО</b></div><div class="afx-style-chips" id="afx-style-chips"><i>Комфорт</i><i>Чистый фокус</i><i>Premium</i></div></div></div><div class="afx-wow-card afx-style-controls"><h3>Выбери подачу</h3><p>Стиль — не просто цвет. Меняются типографика, контраст, акценты и ощущение бренда.</p><div class="afx-style-tabs"><button class="afx-style-tab active" data-style="premium">✦ Премиальный — спокойный, дорогой, чистый</button><button class="afx-style-tab" data-style="minimal">○ Минимализм — максимум воздуха и продукта</button><button class="afx-style-tab" data-style="market">⚡ Яркий marketplace — быстро цепляет взгляд</button></div><div class="afx-style-hint" id="afx-style-hint">Подходит для товаров, где важны ощущение качества, аккуратная подача и доверие.</div></div></div></div></section>

<section id="afx-why-studio" aria-labelledby="afx-why-title"><div class="afx-wow-wrap"><div class="afx-wow-kicker"><i></i> Почему AuraFX</div><h2 class="afx-wow-title" id="afx-why-title">Красиво — это только <em>половина задачи</em></h2><p class="afx-wow-sub">Каждый элемент должен помогать покупателю быстрее понять товар. Нажми на карточки — они раскрывают логику дизайна.</p><div class="afx-why-grid"><div class="afx-proof-card active"><i>01</i><b>Фокус за 2 секунды</b><span>Первый экран быстро объясняет, что продаётся и куда смотреть.</span></div><div class="afx-proof-card"><i>02</i><b>УТП без перегруза</b><span>Характеристики превращаются в короткие визуальные акценты.</span></div><div class="afx-proof-card"><i>03</i><b>Цельная серия</b><span>Обложка и продолжения говорят на одном визуальном языке.</span></div><div class="afx-proof-card"><i>04</i><b>Под площадку</b><span>Подача адаптируется под Wildberries, Ozon, Avito и задачу товара.</span></div></div><div class="afx-bts-grid"><div class="afx-wow-card afx-bts"><h3>За кулисами</h3><div class="afx-bts-row"><i>01</i><div><b>Иерархия</b><span>Что покупатель увидит первым, вторым и третьим.</span></div></div><div class="afx-bts-row"><i>02</i><div><b>Композиция</b><span>Товар, свободное пространство и текст собираются в один кадр.</span></div></div><div class="afx-bts-row"><i>03</i><div><b>Типографика</b><span>Размеры и контраст помогают читать карточку на маленьком экране.</span></div></div><div class="afx-bts-row"><i>04</i><div><b>Серия</b><span>Следующие слайды продолжают историю, а не повторяют обложку.</span></div></div></div><div class="afx-wow-card afx-reel" id="afx-reel"><img data-wow-product alt="Мини-демо кейса"><div class="afx-reel-dots"><i class="active"></i><i></i><i></i><i></i></div><div class="afx-reel-scene active"><small>01 · Исходник</small><b>Просто товар.</b></div><div class="afx-reel-scene"><small>02 · Фокус</small><b>Добавляем<br>композицию.</b></div><div class="afx-reel-scene"><small>03 · Смысл</small><b>УТП становится<br>понятным.</b></div><div class="afx-reel-scene"><small>04 · Результат</small><b>Получается<br>AuraFX.</b></div></div></div></div></section>

<section id="afx-smart-order" aria-labelledby="afx-order-title"><div class="afx-wow-wrap"><div class="afx-wow-kicker"><i></i> Умная заявка</div><h2 class="afx-wow-title" id="afx-order-title">Собери задачу за <em>30 секунд</em></h2><p class="afx-wow-sub">Ответь на несколько вопросов — сайт предложит стиль и перенесёт ответы в готовую заявку.</p><div class="afx-order-shell"><aside class="afx-wow-card afx-order-aside"><h3>Мини-консультация</h3><p>Не нужно знать дизайнерские термины. Выбирай то, что ближе товару — мы соберём направление.</p><div class="afx-order-meter"><span class="done"></span><span></span><span></span><span></span></div></aside><div class="afx-wow-card afx-order-main"><div class="afx-order-step active" data-step="0"><small>Шаг 1 / 4</small><h3>Где продаёшь?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="Wildberries">Wildberries</button><button class="afx-order-option" data-value="Ozon">Ozon</button><button class="afx-order-option" data-value="Avito">Avito</button><button class="afx-order-option" data-value="Другое">Другая площадка</button></div></div><div class="afx-order-step" data-step="1"><small>Шаг 2 / 4</small><h3>Что за товар?</h3><input class="afx-order-input" id="afx-order-product" maxlength="90" placeholder="Например: беспроводные наушники"><div class="afx-order-options" style="margin-top:10px"><button class="afx-order-option" data-value="tech">Технологичный / гаджет</button><button class="afx-order-option" data-value="fashion">Одежда / аксессуар</button><button class="afx-order-option" data-value="beauty">Beauty / lifestyle</button><button class="afx-order-option" data-value="universal">Универсальный товар</button></div></div><div class="afx-order-step" data-step="2"><small>Шаг 3 / 4</small><h3>Какое впечатление нужно?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="premium">Дорого и спокойно</button><button class="afx-order-option" data-value="minimal">Чисто и минималистично</button><button class="afx-order-option" data-value="market">Ярко и заметно</button><button class="afx-order-option" data-value="auto">Доверяю AuraFX</button></div></div><div class="afx-order-step" data-step="3"><small>Шаг 4 / 4</small><h3>Сколько карточек?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="1">1 карточка</button><button class="afx-order-option" data-value="3">3 карточки</button><button class="afx-order-option" data-value="6">Полный кейс · 6</button><button class="afx-order-option" data-value="10">Большая серия · 10</button></div><div class="afx-order-result" id="afx-order-result" style="display:none"><b></b><span></span></div></div><div class="afx-order-nav"><button class="afx-order-back" id="afx-order-back" type="button">← Назад</button><button class="afx-order-next" id="afx-order-next" type="button">Дальше →</button></div></div></div></div></section>

<script>
(function(){
  var PRODUCT_SRC='data:image/webp;base64,UklGRlIxAABXRUJQVlA4IEYxAACQZgGdASqAAoACPrVapU6nJTepozP6GvAWiWlu187Ie5P9y4EGLn0iP06dnPTtObe5henrX0rDtm/EWtasOdsJ/x/SJ+jeihSJTf3XjE/m/uCOLT+3uF/a/9f0C8j+7z7jzF8DPDj+R18E8R4KPuQZTsiIiIiIiIiIiKXmO6K4bLyV+sgc7IiIej5TLeWYczQUJUKv/nAtSN8P6OlEggB7wMqMREQD1sipQEsXZ+JweRZc/p/cPNfk8ysGMp5LEbqo+CtMRZw5JqOUcNoS/GN7E9Vesv1gmFQIgOJtyOM6RxZ1J9okHBL2Xt//9Hv4P8NDJTZtYNyGjB85NTfkSwNClZRv9um8ql0wpVZPmaCGINl5VLVaiNw+xJEA7s/mY379iGosIZoEdfzS8s+asZkcQbgHmCXpu5sQRsG/74Xav/ZkETVFpVLEsc4tRecqq1Svms7MBahWw3w5PI5Gx1nrPBOAmqb+Six8LJvdkADEdyxZDPYPlDwWMgZRxp/x1KECEWg9Uf7i2zwZQaAR5JFdkSA2xjdiGrYTxrMHDd5giPNKypeDV5TsKjkFZFMms6TAWHxSrGXH2vtsZAb+xduUhKcvJZl3X5YfoA40a77oIVy6s5jFyFuQdMiSmwbNkfVCGo0sXCz/ad268Ni/jWCB6C3L7PbgEJnvqdj5sOstVhCvxHIg1w/k/gZomNHQCXEX1F0S53RbKAmRWH5DYwH7rubE74cLhbPsCHn6Fqj2f17B7kSHMT++t+RarZ2jXy5WBNLDlmOq8jm/T0CEDZfwrhORaA4tLDXlXnO70F9ulb6ZMzMz/ugPexvy8IFwylTwzWjTJphUxL6+TCpArzicIL9AqMA/KrVdc36mlMyeL0107zz05c3qxrXUrF02FeimdMRCWIh+NI8B9aHc6o+4AKsUrhm/QoX67PM19FkW6REQ97lO3eJDuCQQU/qBb5MJpO6rcQTtfClWs1Pi06Hlr9Gx8bgG9DNYmK2UnR3yPjrDH4MYM2mrGgQHOiRzd7LDievTptH6ajURnjEtVN+zDMmIOWEbUyMDU3ovy0LQ0lNCZYaMMmYvn0zMpQIdkdXDl/VrSrH0L48c0OFxdRtMt5nGg5d4H3IKxNbHsPD0caMSXEHIWcwETD4UabToNqcpmaQoDLcYrcNCGirxM3bxPndPyqbShkFgUMXWLBomP/RMxB9lKLEJofXCEQ2EnMmt4W4evA9eSUrgzu4M8YcGEmdIWpUsrGA/djU5zE30vlwFlN12e06c8ibwYPQ8HMOsxKgazNnbEFX3SFMmEvSXPfQEExjG2tN9pb8b3XDsSlEejGl49pDk1Ez+2vmswk8gSpRKFVGvhXB/qnhZ0JYr0DEz9bYcBiTYrujfxL1/sJ63+jayNkCDDJhTadBtT495mxA3b4c6DXoKVc4O3+7bdftlbx7u8Iz/eqTqlwxmAbBASGTuR/LFH279JaZzEKhKWv+oyhTSB/wctor++g6Hcpj0FollUJo/GQsj1iBCjTxN+Lmr4jgObbhSm6IC9pfP6G+J74nMPdYsF5ybcLEgDpfm++aYFiO9mpn7e9APaMdP1afCKWGkPgUnaAUQurz1QYXlZhg9NPmm0K1N2H86VjK4krClKmmgakcg0SC/rmIYzHfIt0qZkJmBdYYk/NVzPNrRzMBPCH218PN0NULHnOppqso7yRkoa/6VUA/cEHNwBDOn3P2BvvfMHACteMR8dV9AnyNKZO7bAcwQYCpgGAgUlGwgQyYjR7R7SIwsgzwSMbY8cPMTt89MnJUo0rr4GJ1Bcvsi7Uv8GHUrEbJ1XzMlxjhTSxBLbdXS+yTyuRD5u0s8Hle2qXNgNltKPzGm3dbhMLDTzcMXF/oazHtGa080kgPGTJhggFeKNTWyoIcQr3ypC1TttAZB/w1hHHOH/wWucV3/6DiunCq4HP0WrcPV31ShnUwIhKRO5EqgtUoxa4Fo3/7WwFUJiM6gb+brsSdmQUG9BGsLIVZoIvL3gwPGiLW3iPYWv5Ma/LmDiFjDEytXrzH/s46+T6q4yJjjckvFPkKAjeMZ4oTnXSiOlyAmjFdrzY8/3e9KmhIvWrgmDlD+jAL3VeZMA6lzmqPp0j6AU9W6s2Y5XOMYUSheXRNJZOULbPtbn+KaPhU0JFdjdYPFmTQUbfBgeSAZ3K8P604JrMRZVay5o+EKXvGBIZg4cEj6TscKtSB0YeVlJelfK0RoGwCqYu4c1EXFPxBkHE2ztHfKfxnNp6OtE6fk5fS3srjEa+FTwrqjeVZJ8ueW8GlHpLz1NUpxhsBlbrvO3Aw/dGFwcPv1g5QeTFCvCrcXiHUBOMHvuTi7R4w6OUzBad7VhdOzNkEd0lqaRVQWn5SfC9Kzl5Xf5oN5DwQMPhRnnJkyyZXCXOkApTblKE/FkIvOMC1DaZ2KcBQLYxk0zW4BqUzqBvO1t6y/aRfj2fy2wW2d8Srl8fyLXCGQ86VB3sTeGTFw4e1ndUUZ7fn9EOwCWj4jMLHoelLHR/Wwoqw+tz6kFaM7w7x3ah7jCSfRcbUuzULy13vJD91cN6KJT6uGwz2ELJQHzJw5D/SlzVG2rfJL5LhD4nbEEw7YqG5e5ZDZrVOVLfH/7BI+LGTe+KTDX8mFZHhl5YZDotT2KtgmV/RxdN2tlH4B6bMdMEN+Cc9upibZ3sJMaNSGemxa9o/yVVKkBWf/u7tKJ4LMYHKPolNfggNWLsX0pUHmzfQdXlEeTIGnCWFJriGXtn7IrmK90nZCdvn0nyFet5NSeZfIw2gm9cgzhLFNuR9X6hU9U+/+QtwpblQ/R8+O/NuJyAQ8L/TXkUETgAREzmATdcoD1OzPu/3++K6yRiX5l4SuRjzOXc8t8XXA+Bg3MrG3L9f0wkMQFox4dzHybjBqdesBV//vFuRSe5bMp8c2HeRY2LzebGaxNjjkJnU2gyqDHTO3rtHaJe76v73Vi+9C7XoukSW78/DOtiOeFIrX4i544+aDuS/3Cflh7grZRghOMYzHsbK6GgzLYmiFPJCgLMBlwqkCwbh8AIzIVHKr6ZtM1VbD1eOE6zZLcg/sm/B8APk10q7YWNEhbwfh+qoc5ux2Pzm2txrb0rrWxi2z44uOlWFOOOhX+yDaIyMc/ntMh72IyfkAPISyGhFW66DddehDilQgeAdLb0J+Qo9QpZTvEoHvvYZ9fZ1aJAfjZeb7FX5HGx/9hbFKBBz6LN4sZhHNPChGY1fEQhDRw+XLtQxKdKcm2QAUGXiNRQpf3hqc7euCyYz4vsr2L6y57m3tVK1a6AhqhqzSCCu9iC13KevWTBxIIYLBhswnr8Osq9XCTfok8LA/YzjJk+tIoNL8fmaxtF0gTt6LII9ab9pHIxtgxJW+49jDIb2uu2dh/TNwXWdPnvT97tQiqlJyw7j3H0x/U3IxujPvCSDDuzW5+GiiHnvLdxqRVgBI4VPqbx6lr/c99YvCZiRiZT5jm1JSzdao1w9t96xqAhQVREtEIbMC1AorccDOxHf4MnnTrfaKiCwgTyW1usOAR5zAdVB2if2snOL/+po1WwfYkLiRjYQK7tCAnOMSffeYW3/pvS+GMd8C+LmhUtrDCsjRW6z4zwC535QRAgBxbgWDVpagF8daoTvUFxhLb79zR+syC0ufIqsUWXUGQCqofj93dLrFnMdk0EMiWipk9+sxwbSYX3fiZ/+XWDtSlIzrPLAxCV1Qt/2l85tDlQLJp9ueedhbcSCjA5asRCTFLLxYoKNbezTiwCQUAW5lAcaKWYpeM3ppiMI9GryKcxztPn6XhtEV2cR0DRosFigAurm7galckjD/3vSv7wWsaznGkgAA/tuhkM054GXJsQG9jRDZDI3p9PmKwvugv4fI0x0IpGscjwGO0TAVCndaJKXp8LMzBTDK/hgakjaiL0Pf2nLSUta/cn8kG85ZcHAwukHs9U73675FdobmL5sgkMuJNOqi3sNgBiISeQBYQYnkJeTZdh96pOD9LHCrVMKh3az1Y2l+2FFEoXrxwq2BpUsY17AUlXX2zhr6XUyPURUpAOv7dFHdB4xE9TqkpZIB4p9XHsOL00YotkbNmP27Iys9cWo56N9Cy1BkyACI0Ql3KksULQ5lqnl5sW9m2l35LtJpeuyz0E32nAbvAaiBiUofF1IsLsI7XIrFQVMIbdEnisGo861V5ZBNR0Du3GeCU6yhAXgQo8Au0WmEOn1/9coGdWKgyALwYkh9acJ2fJyZaiBSHnK7bdcSUVv4DLtxFbnkbLLq7HvocRRLuGdOVSU+310XZU8QyJl9mfHPJ838u1HdfxomnJOpZpa5xCUCXjn/k+2lfViNJLj2hkX2m63logtYih9mFZXceMNoA8w8nWh/hx154c/dfqlAZ+6z+vh2P6JRsb8Q9+ycwJyskouZCt4CxhwmYj9iimt5PGMjFXcKXuRIJNuGYczh841NobRycdZ7XGFRg6taRfkDBjR/PCdA7pffNurf99oiz7RyzQOQV1+rq/ozck7nxlg3COwsGX7ZmIG78+5N4zBwMaZpiDof7hbNpWQGpjAPyVq39DFBwlaKp7f2ojXdvzESEOh0mKQxz0Und2xqliqE6Aoqn7tp0TigQBro+7oozO3Jml7FE33WaUTZ6mcpTASV/e02Yb6wDcBj2+UIGftaocw5MnOboVSaPsRSSC8HGDYXNkiWzPC0CjkV0x7QWGDR6pAe5sNufnhB1OZZcuKW049cJCJJwR+JbLEg51bN2Vmob5DAQ7UsWXHWtMoEF04In1AyRLfSe+48jLg96+k0F9WGL5mkzp9wgqpLcpHe75Zc3RbPm2s2yrLzl887hHBPtHSx7nc8Zvq09Kmf1N+/89U9SgtaIh/VfmgDIEV7xin71GTVT3ho0MIPhkpMI+e3ACj28EEOd33yWz+q0J11jfkI/6rpLOi+atGgvJNkyQpzNCsU2g+BHacUH/F6yQcQU+wnh/TgaCXW+fWBqS40hXEwzwRnq2lJc4JQGyhqZB0guCAYn275Dhto/w8AyJhGDBzQxK4IQlTDNi8KdLN5D8dYC1clC0hl0evtG6NH7No7GuorkMZH1/oaTLZa4bEdtVJ7+e/szpFTHB1PCdcnG4uOzYrR0DRNjWfUZo0fEIx4l//OUnmLIZJ69z8otqxf/ua288zpBjkDPeHhD4C9Fjlwee7D+hqqU6cDNPPa65D9IfOor8A9w8T14QxxxsJVIyBywGfGGD0o2dKFSWpH3pgn0e5FhrrcjZW44y/U1LJZREqzPaE84WnvcqKoxPZofJiABsXVt3e/8Vc9Vi8QxO2i43ucirnym8z8mgGWL9xMGNEb60QuhA1fsReubTe8YR8Bsu9CQaEU1qJ5L2Zg3rvGNmQiH0N9ezOm/tjTfZ8vvK/w0QIFBIVH6lWbt0RhuH67csQ37zepjUc44ZFIV4ZzRe5d9tHjTNsoTGGsnQOHAc44spBRmWYccOqog2yjiQNyJhO+Y/48ktrMgE6iio63eVOsqjJdrvf/wbR1AYJup+5+2E51OQ4a7PqprW1E+kDXMXQQqxpojjVr0n0HISX4QPZQR4ND+Mhzc4ex4xlI00TS1Yl8Jo/uMA2eI8irgMUBRmAfinaD8BSfKPNfZ/j4bU5QIqt4IAqswcvZatRK5wQnqdpijzfQ9bASgcq3qUMht5YYPMba3+Zqts5+RxCkmOEs4c4Rh/3ljHEv72mstM+BLBY69WIXivmElW7FHPnqowzpwlT4nRrZSOXKQMrWNTiGpMA4sWMoi4xtiiM8UagdKUZwf/yjcL/oClaHQy4aev8nL7vqoACN8Xqum4BEbegZmVjyULh9ieMQpsWScc15QHM7P6R71BuKH/nZI7Rrd9dDmUVHFZPqiwSdkfAJNkVEPaOXaWYoW/buUd5serusZMud71zV9is565Q3+WyUn4CCBsCABmdZeXaXBUURkX8r/CEGji4fZo9tI+JOj4EKQdBu2xKPG07fSiMPcExbyvQSKimPy3X4tjFub1P0wLrHjzJ0XxSjCYrw4O3M8f0kjFjTMf/vFaLGhRBDLwvzv1BMOqZLcNE//sLibe7FELnFZcta2TcgDprVtrje87pX7mhCEjhQdYwwZoqoxgp51ri6CTwZ0qEbXCgwjLt6SrnR2viO3+J1OfdJKhfxHjqr7PurQ0VxS6HSBPv4ATl9x/dqABali2raCb7FoxZ/+fK4Y5KSd9nxb9kw3QB1tHlxlBKEKGP3SXHonEP9y+1NJFFi2aA0NYE6ETW0sCvJ/wc6k+9xpo2ISUpGspiwb3SVZeigIbKSdTHzE8YXjqss06kUUSvIcMHLV30epaHiI1EMesiDFjTxH9KkIqyNoMU70RPKsAYTcCafiEKDPMe99qfFGQkIYFlTKxmgL25hU3luMfUQ3VAnUApHOoUXFpeB8LF8zTHb0RoGY3b87q5UNCSgZwt65iLUxDclhk+dLD9Fm8EwM/aGEI6U/ZiKc01sbDYVz7FOSVJu813e0eV8G68sVicqZI6d/yGWygloDPLuqmgNCp5PqYULHUgbKOqfxtmCTclqG50B4YNOlGXHjGhvEu4+ZKFmnmrXBTy0rgfohSFtiFBEkLFdUBk9hLxp41mG3qgZsZ2IBUsE5QiP8GYBVt2M/UrxrBzUanEOnQELcBAsN3CGdSmu8kJ7IzGZUfikcqQhRNz5KLcPvlIBiNDfj46WsEs7XTjOEmJ0XFlxReZgd3cOPCDkm4/TfuR6vnVwi6Hwj9tNGKpjIg5oov5t0Fd8kLG7KhN1KtyfE00iyX6yb8M9cKAAkyMKNDaN5C7B6wxuoacMMfPxGUjD58MadgNuhYjHQ+xO3LcGTlN9NaxR0Ap/4zX1nLjMrNu+xcWJfWnGqWfF8Z0g90qNnE4AYkJ1RUU9weLg1iUYuyGR2ZE8CEE5LzblMTXOlGkkQRwp+MQkudmetI+qjbQMTO/8lZPa5kzY6xP9t8P6JCmYds9JvRtQzsVh8t7vrw+rLS+lYc8+ulZ8acawqMeyO+urQLA72bLb2A4Eqtl2e6+HhsoQTlqUk/NwSeTfw5BvF6htK+JZ17NpzR1cmd2zicr31o4hzI22QyzR4F5j+Q4OVaECXzkbLpPMpLZY60rL6CD1rvxhHf3vOLuj549bgfnuexXbTNPgPYmhpG2wOs9YnQdv+Pd9pshzYIS4o3To0p0l0R+mDNSU2bCxqkro3uBQnY6ZRQHZTN8+LmNBAL00jbX5B7W7AWYbf7YrR3qIl69QS1GjASa/AwUXA8C6f3xdP/Y6ThrX7wUuwIS68zNljmOLhSNfYgcis1kLQGlKx45Rr6rFPIww8yeKO1vcnRcwJZFmumSU/OPgy8oB9dSE53xhv/4UwE5rAODIBGLCWASetBwoZIqym0DEkwXMlJg4npncUs9No9LFUvh/aW2WzMk4BwL5xdnaJcyDNvkyiqyOhjWFbkdh8M+ibEo9Kalpde2K9ctuy3QpnCchlsAiklWfiX0gHuvq44+nj73ZXyHU83u5mN6Er2eqyxpUQYECP10yntI7Y22K+Pz4utjmFms00iXx2apnNsCs4Vp1PbqNiCFuDUe06du0RlGvi7sN3IgvHcXeg8fKEu+y/xZKjOG+eeMb6Q9sbJTbZZHB9pgeyjTEAXAo35OY0Ktcwg5G78w4L+5CjYdWkWEB365/T2bI1oyPiph7qGyYA0bU/jhqUDKn4YGaC04R+OxsBsz7WjuG3ORKuucByOsx3pfh3PoEir6MVUQt2EecTU9190IcTFvNboF0rrGSrmuf1YPcIhybP+7mfYHmqOxkTMxtnoHQebWtVx8ESe6QijGTSJFm+wckZHOvKnRsLd9lMRBd7onNKjG+tyNwinAWB3t/3fXuMmlUfgyVK6BJeZNWIG/BnfSwHaCRXpIK3OlYK7xNkcT4Jhzi6B7Z3/kdrvswYTBD0UosFiuZxRioYJ6RYcA4duRC7pVfVRzv+csP7sNGyYYjVo5+br+aMfH/S46SFiCM8qLAJ3wAHC6CSCVpCW1SwEw4hjUYXcINF8E7kPzcaGj2mjBzsJAvuhm5kDpKdRvItIrxalzqrur5C9yKqcyGzbwuBLc6Mb912YS6VvDh7lAizzTgh24VNtFX8Ml9smLMHsLQBhOBAahXC67/qiP2yae0hSyoCQtSQE9XPkCoGEF6oA2S2bTThu1o/KZiEUjddMnblCET0w02tO/2foQWHxoAbRvDopNVX9Qjnqb4CLF0pYrKs+2fwPByJHQ2/nllq+2f26D1EyY6CJE5nslWr1TqFWoBUBou110DAWvF7TQ5gLHKmBOE/qHv9fVDtPWxk0AeTT5QtoT2q4ODD+lBCiEQwHsSFxkdfc9qgQ7KKmsE00dm1vSPGHp1LJwjqxC88gryjbcPC8+JVJTIwqjwZcIK/u0ylayfdPXmlJ0MaHPuJDkI9y6Lg+MeTQ68QRpusBWMaoWw27c7slzIlzBaEu5fl5xaj0+svAK+SmHBsmIEW06CkRCIgXF4BQyR4rhFyOMCgq7Ygt9RGT2MHRB3CjCfeNRp/3LlEui057KbrSB+OOTVH5THvg0gVB+TCNIjInI2OI9R67v8/l+NysqE5f+yJLyPpif+9QToq6cDdAJ5z9voq8rEdVIWVkDnTEJsggd1N/n/V6wbsb64fi7Kih3qOrQGvBtpOpiUtTk8PU1gIq5pC4SYh20cYeYAUZj05Jv8/oGMPkBJLB/tqO3W4jFZV4OGKuwF7nRpvvq7pfvKFV6xM3Yrm3QEOHqIVv94kE2jbfw8hJmqF74D9iIIBPagCYZP8j/uc+b2vutJvE+olMlf3PdKsh6k9BzlBQXLzGvbfZPybIbV8X2lCCHNDGYo7T4+S0cXESUWOHVHy20SywRfdi8yCTfh4pKA4fpPjFrYMim+ZdC9aCP0NEALteWtWM4AQ/evOtjHX9tjt+1jS/MCuNH63YhA5cwhbEYRBNmY7WXc8wUTeN0fH8ZFU2MU8iPR0NmgeOiW49eacxkHfw4t20S6toZJpTlBqf+u8wgrr6dT0aa45DSqeF3y5J6wsi4vqLhfufEYVDy4tpRmYubOZown2N4Y4oDDvWQFqCe7G6Y70SBuAAYzFoP1XS9be5+Wt8ra40GAc7QR9+rXROckk3wBQyFU8pRSqt5hm7KhDInurzOjAxMmcoRnITOAEkqzT/1D/lJGUmCxvWx54EiD66EgVqxtndCz3Fs90PBwhR4wYeoueEVja7YFJ4KxvMi/yzszBBOAsEV71tefz/XdA4WhVb9foLz4DFXw0MrdT8SmNWH6rN1Y6ftYzgY3X9JIKClObv5W9a7hfSfyI8hY9foz9hUMdLk7mY9dWvFn0Da8/iHxADo+qvIsK8AzGnYP0FCDgaKwtMOk/nl3vy1SSJE7/SFMkrF0Py2rHNjuG6BIFcWkPCugLcVbk/mtaMrOJ79kQQPNvKvl3I+f2FRxa33Hctyr6cwmI2CALdGuYUszyYl/rlgSSaPVOpyi5IUx6TZ1IZq9iOR7lIX/uLOid65Kql1xIRkD2bvvp13z2fuNaXkBMibsM1kyMy/mFIeBQxOwnYLC82HG4tkTThGhwXU6s9bBQdkoszVy2+iIo8605R11eLO6BB2W5KNUI3P7KIx6vF1zo93VVMxGW9B4I98GuSzudJWHPmVdwlHsMsC58A6PZMlbi0dOo/sTiu9UDYZHjVCUvb52D6bTJLjqH+PfW0lZtmy+nKk4XOgX6oH03aaoEVqdzBERObO3m3KdRfI65ScDULCmXBb/+QI2ZM3zi9t1027nJj+e9P2k0z/WoIQoQbl3H9Mh5Tk4f6VN6bWgzMDoXQgkLW5GRUkCVSRQC4Q6AYsJ/ZCXmfAQhNjoLFhSZBGsYAAfKAR8icn5ynG908+spL2EuRA/Yj3SSvNJEOTqmE0S0lZs8XTtW25tkLEV7axcECiOkVJPA5TAkNZvohWLW5mlPlSAaoqkg6WKyHVxP2cN+6bG9NnZILwya5TFCHg1jZkSxxOgbb2MDEajB+gP2BYm4WEcUbjXabcqahKlF3mEcUCsnb3zq8I7aXLYFh25fxQPBG1rWm5v/A6FIistOKBD6ETjK+571v2Gh9zKhycJsC85zqbnFBwzTqp7E5YEBbfY1WQa+6y9plffG9TiEKXk2x/M/WzLp6S+OlDzRgihm4NAyb2evbkhRjWArSdE1IbwgmuL3/1tIDg2A9ks+5hjFBQSIzgqBeTql5kJrLHSF+lSbkozjIVk/Mebeh4KRL5MjSi4FXuJT/1XeoNfKztWr4yh63KLsCttrNOg+XljgXAUYiADLnXRP3a6L6I26CloybV0KwPI58E275E6CETmpDVhVx6a0Mkj9XPE6yq6fWy3WN9dywf1rvpUOgwJ+WbynMlqhqmkufTazW46hu6tG4/nQEIkBppA6gFcx59EqjYpa6N/32GmEjaoTqjynt0IojNjfPG/NWcrGlHbjG2XwM0TtUZTCRcHFv8trBAxs4LiCtqA8sj2lcxdZEQ6/T82yQT/yV9HXFqVmU/G3+fmDG0OQG8DK3rknUAdRfdgDpPsZ3VCRmwXSOh/t4jTFFVrx6iH9sr5G13eJxLeCtWQL7NU5yvsqzKbyCJaYlViXee9YSBjDoAP2ucIVPxL9V0BhzRwqsYMCxr5I2ohQriWhVLMXGtR3uR2DTCEXtIGDaH8ZDCEPOnBezdtAmQkemIVgca7Bc6pY3vdFJXYZhQSB5wu+HU4eao5vkXgJdn0tEPDYVKxMZBLMFFPl4Q3gfhY9KK/l64ms4CqQD7V1z4gMStj0BLj74BYnCpsrJhvWTFQPaJNuJMNDZymOhzJr7Li70xeLR9RX/Q9n1hW+9MuTADyF0eSewC/FE91x65ca39EHfPgFGMIgdDzCeck0tvM2KJ19LysqoLMYHBaSJFeW6bHuLCzDxM0coYv9Wkx+n1PwMIuY+E0lHOG1eL7Myrl1GJqeQCiulFdTPPg/a5WCHbW9eBW8/PCcs8ygVrKqZl23Ge8SmeQaLRCqFYWpbKc3gZnnzzRbpldRAFmBkF79YKAbJzvsqdAtiT4mVk4gL3tWc431bJD67V7fBJLYvVuz583f1kglCUiBWNzopDkI12kfDEeaXwVz/QaqjpC9RdgbaO0ql7CKr3iROMkDTy8WYbxe5/NH55BBUDjYabvRWEQWxCn2xqIm5OEbSNZSzokb/1upy3cc092z54Jlfh/qUKb7eIZ+yoW1kDKySKtdYK135PLFKJ+2ufs++BdEK/ssKtN+FBncEdDqPBnsJ3BshYANuDdB0TTW2+B4wgk4t1Dn1dYxRf0kDpVMlc989UhvcNR3FJhMcxBW0zNoFYXCpNxxrpaSgrDuvXYw7xCWItHg/5Lu5oa/+WkSneQIIsH1ltcFbx80oPHVuCMnm1UqfrEN0cNC36Ee/2VS4/YUw1tpZKFD95ZmsJfyIQO1SDwX/6878l7mf8GQMUa/3exDYGqDB2lytbilaYu2YugyZ3LoCptb1MlPAhilKcATYoVut+77yt57+rrVmrZUkwAJyOz0Ed8qPgH2RmAfaARxyme89DB4EY4J7p0M9GsCTIMwyTyPXFSjmGtmBtKE5aOkuoOYb0fVo1idyBSWsDFxP7rbgKM5CZNZbRVoZ80kEfsEV3CP0deqTPl6ApRN03GU83fGQbLr5gYPCUgeK2BepCobCgryhEQmv79kAteI3FMD3Y3zRJhDuQW48a1K5zilEoqdMBw1XUhCGqQTVQuo2Eaah2Zgz/Uats5MI3N0gUxX2A7NpQsEVg9dHa3G0xzhZQgjbc1zohL8Oef43RQYzRNp7GuVByY5PMqcdrPn4OExx24vPlynqLgdSXH9+/qwUmCnYcb4B9uK7fAZ1ec75nVhC+8YZww+WwTkmUZ1r7m2Xhg1eqXlnT02q5EpmkCQeI3BGCUkbk6v5WzHW+O0jM1qQWkA52IGodhHztsBhyFzRuO0f8ZqO5zst6sceUCP98lHvFecanlmIJHbJccjdOijSzOD7jMgacRpmR2FZrwuuP+UolkT92WbcLlBuDIYZidHbZVGqBW0R8cy/+S20DWazSxwutJ561gmDNbn6gkCN/0uEDBZzxAbq8ffGMV3VuAEc0kdnahMOLp+6aEljJFvQI8vxc6DTBOnzyWDIyl8TDT460xtOF+HZwrUuLPeOlMEuger7PhKGiX7hyOGj7O8dlVEJcsBj4QlxqQFiu5kKI8zGYNWdqJmB9+tenpEvCow6ke3swAYgJQ8IWpM4xHaTuUHtnSkdX3yNiVYoDLRpfk97gFspHLEDOT0XiX7V6j3FqUVaRCvi0WjHsaU2AAQgPBbZfimAqyoU+O/W6r5ISWNUeDy/Ve9fh9v60HoveHquK7MdN7KL19Nc1w3cWcO0H/RYpTU1E2hDaGn/IEhwp8HYo8tI4ni71mT82gPNMR7ZRQu7Tr9sPdK5XV5VT875hvETzzkip1X2FGBds7jsqyQksflG2SOyH1XRTrskXqx1Kgj0OUIAHvmL6Me//K2DAh/e0H3A1nR5/GWznaVWzjHGqe5pKM2+bvIqWCUn2gQ/nvURKJBA9W4P4W/eAcDPxZAbipcZwiDMP5/jyT5YSAzoc3dmi6xgmhXZYLD1s0/0hSKxJBOj+Wamzk8fEpyFnxYh4Pai3uDWnQgfiHYaSY7MtFqTZi1QWBcQY9FHRMhRklsx5kWgXjl+CO1Ul5Cx6KNtdSOno2IhkjVd01XQeYytVC/IDM1mHRZ1XuLOllvIGCk/OkPJFjIZ+RC2q9LVoxGAvSHQfbxCNxK2vJZpe2n7LIunS3K4Rr7Hy0DLaBgJRw509+YQYpsAU/r7og64GUrMQJfTVJ+tEm5Lb6H2JvchRWoIEBlLNtVSWkrDScqc5wxaysqJjvL/NQJ7q97vZyudU5S15DplSbDGgNNqeXMNiDcFpiyLj2JNcEUr2E71GRpveblMWo5PWuGtMmTbX2mgweaaXUrfwDX9vYHbfTl+K4uM+vaXQZw9qLDerucXlKDfyLNIWGX2cUAEP2+LSCqL+z4z+PFYFLQ1+JotcoVS2bvyjTB7rt69euwLa7AoHcUd7FLnu+vqKeIuGTIMhibvrnQd3hdvfhoQttphYSh8e1YNViTvvBHmXBU6VmFD7HsGLx8/Ng8HAuyz75T5AI3OTzVWA94dLX+T0eRc3ExwGBHaM/nCn3zJ7Gf6bjBLW0LgJz/PNsi107juYb99C/Eb2tQc6fQULavZQs79QqMxj5FIuPyiLE7bCZqRb0Q7rkluoTLSUO+gKHJG6tLvfj7xf0aFgqbuDJgh559eQlPM+5SJtn2Gdb4mItf66I1/T+T7EMn+7ee4yYiJKzMkUIam59TvRyGv/i3MS3S5oL7yIV+JyrgbsUitatHHoCCuUBfsOvIYsJO5uyF/BaBVHfPQSMIqzinDWARStx3+2Kr2Pq+EURvzeN0KuG92pN1GkAJOgK/ofV5Kr0RnhlSNJZCCqiYdZhE5Km3TwwfbG48lOkbCkT8ITnAl88+qb+k4/PgAqf6kysuyy/XkCtnDNV/0QDcTHbpncyjjVg853C40nOr/ldp+aVET/q61VJOsXtK6TwstLMB0a/MDH4RzbmonQ0+MbFvFOWzoELWEgPUleWPE3Fh3k8iqxeZhA6/RXa+OP9cHPeq5M+T7qkWDmJe8trUq7O97IYm6+4oAypHwSKw4lOzyP8MZXh9+VLYA+8E+yhBIe0yOWJwDKkC4GWFDqgDmHqxuGEAYoo9V28CoaDiGgxF5iPtNsXR8VGf1beDugCZSBAT0yYmoR0U9JIHafXD216qEgx62EdKzOrQg7H6CQtfN2FIMy8RLC6Eh4LpvyqX/WKPTTc/3RDqCtNMams5ANvd26oEwB66vmbdw8HadTqLEK/5GDIH7kMvt0Ep20/4MzzeMpJ3eL9QEMtEUQrptKCh10CzimFQZOJOjbcHEzt+2pLHlA1hDP1TKT13JFcbouyj5l20xhtEAQIeSFFNwvGojRA+HqoMsvDzm4IWcCWGbyAZx/xsktC/H3RmErndYdkUKh3zWYGd9HY6WJQ2rlEE+Ow2M5t9XUSWZJb2yq6xcC8y2pkH4V74PRpM04C25Uj26jpts49dwWKOgLbUYGv2T5cQyMKZ6ja+9auBG+wvL4FruTVd4HY8irhDM6sThTzlIOSllSUGz9ec8JGi6gJZpgrdZtGUkgnSQJdZd0aPoYz/PbBBLRRXA1yEKVp3mJpc6v/y2k9Q829uWTtsvWA6S98bGX0CvTz1uB605JuKSoy2YppJZE+ZO+EopiC1x4GFNnuNPfKX+9EMo5kk6JOSDIXZIHJS9BasrgkPWet9Zh7yc8wqzKbebEccQpC6z+OTOLqkjPxtNQlWCiuvp/FH0ptBATxA6JPPUPkEQCT7jmA0GPJtaLsTUtP+N6HGoX3J3magr1kaByiiJZShO2++2HckolQRF5E8I9LfRq4SdgQWZ6HvLRCTSVceDoCFqyyn6tJA7Hr7ZAzNWGjOmnFLF1hHXti4fDZqknkchRITscnuWOBzo0ywFGJMkjZ5KmyT/DrXTjd5MzYBhlNv3tEEftyePT6UBodxIk5bC8eZkSk3pZ8AM6TTfz3TvlHFZ8dgAdZV9oLn+xScotP8tJ+mE+vHizYzH7yQZYV1pHJTzyrC+h+3Y/boUiNKaLIVf/6EVZVko0amRlcY1see7/TMFEe7ieY+VcJ+MzhzPvAU/2sC1fKXAZgrNG2AyIA4fi3vcTKxEKAYDWbK22hGg5DZvz27xQP+tE4HK2fdCFfkYo058jm9J8ZdB1b1vYp7g3SvAOELx7+3Cj1xN8h4q0+NjBUl3jhActkx6U5G0tJw0cx75ea1I7KuGhUYkv8NxpRv23s3lLXbOBSvma+RO2TlP5W0fsYukTcFbTw23hIUeI3sakzjpW8QffYCYw4SN79IrJHtwZKonl7ggm6bOtQ58sfhcBs0zu59DxDSyzoDPFuskXgFYb9M+xMp0ZKry2l4Q83vC/FlJeALARSLJ0S3Ueg/4ho1ZicN15JEWZxdqId95/nXDCqwWh5eI2XaHvI6mZNTDFsk9jcwANOAxnuAk1U/j1Ltz4D1dHqSVeznlZI8hfq3t/4UdesFal6kf3qBJ/hA0qunRtn5nZSJo5Z8zp18BEJePtOpoH7407j+gltQPZ+0lnQG/Q/tCO+57iUHoqFJyTho7KmyG+Pmsmkspa1fby8OlEw/xLsL/8BFbD4I4OCXkofkUqEACIMIoJoPau9WtimXPZTRq34O0xEHWWaRUb6P459oslD/pCxcaCKaAMrQIVPHVnikUJ44yOO+IO1IfKcd+5mm34GNXsAWQbLT4OjugZvvmbFm1Nhfg8gLzAkK5JKsB9KCiqKpTl/Q9GMJUxkj0TNMFvSm7ezM/vNzIfUGkt2rQ9glUKXMxofTs1832HaSOFXZp0Dg8aWH1Axt7FSwNeurDK4AUvuOmwO2AO+zvYrCxLkdvnK+VLtag4BDWtgio5wU62G1b37Qder1eAjvgOSAxiEli7m7Hzak6onxWzKlug297L4TtY7P4gZSiVQx9wG/OKPhOVrah9qNHbrrl8LCot4a0q6L9zaKwP1Y1cR9HQWACh+uu2+XxJm+WKuF15eE24UoFzz5OxeqHuwg4pHdM/1dNYWM3icynrc9ODjkQIYeqfOe3KwVVi7VXhoE/psuqDgJnzFilLaubz0MYbBIgyaL8baxMgcB96xPhrVmAa9sgYUuMQcJODp48ih5Tz5k6Nmt3wPE9kAGFcTdUs5KxJxKO4BH/s4yvxHY8xEWA/RdqawXGYZrTZeeyBEt1/EN4jow96+RNEdfW8oU3F96M0NoYQiAX2Sc7Grw74TsJm2GJgn2shjgcylN870Ga+nWQGomJO67/188NEGkz8tyVrueusGmCSnFO8lSji5VG+HmVdG9JAxrG7OfbXLjahqUwwcytuCb9NO5zFOl8fuok8z0e2umFiQZcRf/LPYy1Eia8zbBrWYr/TQ5B6MtUXcoFSIQi1gnAnQjOeeP8xDHzXkEvdaxdA+sRwwJS325XyjUT/hc/HUUFaqBRD+NtrKFMG5686EHZBKnrRovuhl3/d+iFaO90eUp8WWWbSWTWtJ7kwQmrkr+/pQ90u6+VucttxqpIQnq8opbCUebMQ/3TaVW/2+vOaJ5UbsMJgyj7fWn1uGGYh1xd1fbE83M56pV8sODQJULFXQSZeu8zMfw7nt/p7GKlVJBxZTqaNTHCeSw2NRvZm2dxQmqo6RpcPWjjaWgPav6u1WizqBrjVbNSq11JzbcxLaCtQJ9KZmTr2IBB2MlstObsbdVtrXFATvI1bxMUq8dIizGeT6K3gX+sq3LmLsouj4/UC+DFqXfytDTD3QXcKFktK6JUm7JZrHnWrZAXNOslTvNyPvYIzrWLSlr993XKIRembzFEQwrfCt+UG7+gcFwf0xHwLoLo623ft2RzugYncR44I8kXYEeajahxydr3H0Y4VvWUNlfcf7UD11GX/2a4nI1xQg5eYlXerpKqBzTymAEK/2ZAVeXq62iTevfnrQO/FAi5DrnH81DgpnxsxfYmUZ7obss1vpxMONZgz3r0Ty2btk5dBc1C9qt/Rg3xcnabjQFbfSMMb6DjX1Ik0ZrPZA/becUG0ToHVtmwNW0i9fi4dYzPY9kUGUEemV3ODHLNzzevSJz367WDcB4ssbUCZDBUiwtyjG7I6UEatYU+QXS+LZgSgGzf5BO+qTkp3zbayJ+u0jNJZ/jjm4EVuuzYtoAWapO+802tdL/1cMJLs46BieV4AAAA==';
  [].slice.call(document.querySelectorAll('[data-wow-product]')).forEach(function(img){img.src=PRODUCT_SRC;img.decoding='async';img.loading='lazy'});

  /* Keep the WOW blocks directly after Before/After even though all upgrades are injected at the end of body. */
  function placeWow(){var anchor=document.getElementById('afx-before-after');if(!anchor||!anchor.parentNode)return;var parent=anchor.parentNode,ref=anchor.nextSibling;['afx-wow-transform','afx-style-lab','afx-why-studio','afx-smart-order'].forEach(function(id){var el=document.getElementById(id);if(el&&el.parentNode===parent)parent.insertBefore(el,ref)});}
  setTimeout(placeWow,350);setTimeout(placeWow,1050);setTimeout(placeWow,1800);

  /* Scroll transformation only runs while its section is near the viewport. */
  var section=document.getElementById('afx-wow-transform'),stage=document.getElementById('afx-transform-stage'),bg=document.getElementById('afx-transform-bg'),lines=document.getElementById('afx-transform-lines'),copyfx=document.getElementById('afx-transform-copyfx'),specs=document.getElementById('afx-transform-specs'),bar=document.getElementById('afx-transform-bar'),product=stage&&stage.querySelector('.afx-transform-product');
  var raf=0,near=false;
  function clamp(v){return Math.max(0,Math.min(1,v))}
  function paintTransform(){raf=0;if(!near||!section||!stage)return;var r=section.getBoundingClientRect();var p=clamp((innerHeight*.55-r.top)/(Math.max(360,r.height-innerHeight*.5)));if(bg)bg.style.opacity=String(clamp(p*1.65));if(lines)lines.style.opacity=String(clamp((p-.1)*1.25)*.35);if(product){var scale=1-(p*.16),y=p*48;product.style.transform='translate3d(0,'+y.toFixed(1)+'px,0) scale('+scale.toFixed(3)+')';product.style.filter='drop-shadow(0 26px 34px rgba(0,0,0,'+(0.12+p*.24).toFixed(2)+'))'}if(copyfx){copyfx.style.opacity=String(clamp((p-.23)*2.2));copyfx.style.transform='translateY('+(16-16*clamp((p-.23)*2.2)).toFixed(1)+'px)'}if(specs){var sp=clamp((p-.56)*2.4);specs.style.opacity=String(sp);specs.style.transform='translateY('+(14-14*sp).toFixed(1)+'px)'}if(bar)bar.style.width=(p*100).toFixed(1)+'%'}
  function requestPaint(){if(!raf)raf=requestAnimationFrame(paintTransform)}
  if(section&&'IntersectionObserver' in window){new IntersectionObserver(function(entries){near=!!entries[0].isIntersecting;if(near)requestPaint()},{rootMargin:'40% 0px 40% 0px'}).observe(section)}else near=true;
  addEventListener('scroll',requestPaint,{passive:true});addEventListener('resize',requestPaint,{passive:true});requestPaint();

  /* Style lab */
  var canvas=document.getElementById('afx-style-canvas'),head=document.getElementById('afx-style-head'),kick=document.getElementById('afx-style-kicker'),chips=document.getElementById('afx-style-chips'),hint=document.getElementById('afx-style-hint');
  var styles={premium:{head:'ЗВУК<br>БЕЗ ЛИШНЕГО',kick:'AuraFX · Premium',chips:['Комфорт','Чистый фокус','Premium'],hint:'Подходит для товаров, где важны ощущение качества, аккуратная подача и доверие.'},minimal:{head:'ЧИСТАЯ<br>ПОДАЧА',kick:'AuraFX · Minimal',chips:['Воздух','Форма','Функция'],hint:'Хороший выбор, когда сам продукт уже сильный и ему не нужен визуальный шум.'},market:{head:'ЗАБИРАЙ<br>ВНИМАНИЕ',kick:'AuraFX · Marketplace',chips:['WOW','УТП','Быстро читается'],hint:'Для конкурентной выдачи, где карточка должна заметно выделиться на маленьком экране.'}};
  [].slice.call(document.querySelectorAll('.afx-style-tab')).forEach(function(btn){btn.addEventListener('click',function(){var s=btn.dataset.style,d=styles[s];if(!d)return;[].slice.call(document.querySelectorAll('.afx-style-tab')).forEach(function(x){x.classList.toggle('active',x===btn)});canvas.dataset.theme=s;head.innerHTML=d.head;kick.textContent=d.kick;chips.innerHTML=d.chips.map(function(x){return '<i>'+x+'</i>'}).join('');hint.textContent=d.hint})});

  /* Interactive reasons */
  [].slice.call(document.querySelectorAll('.afx-proof-card')).forEach(function(c){c.addEventListener('click',function(){[].slice.call(document.querySelectorAll('.afx-proof-card')).forEach(function(x){x.classList.toggle('active',x===c)})})});

  /* Lightweight mini-video style demo: no MP4 download. */
  var scenes=[].slice.call(document.querySelectorAll('.afx-reel-scene')),dots=[].slice.call(document.querySelectorAll('.afx-reel-dots i')),scene=0,reel=document.getElementById('afx-reel'),timer=0;
  function advance(){scene=(scene+1)%scenes.length;scenes.forEach(function(x,i){x.classList.toggle('active',i===scene)});dots.forEach(function(x,i){x.classList.toggle('active',i===scene)})}
  if(reel&&'IntersectionObserver' in window){new IntersectionObserver(function(es){if(es[0].isIntersecting&&!timer)timer=setInterval(advance,1800);else if(!es[0].isIntersecting&&timer){clearInterval(timer);timer=0}},{threshold:.2}).observe(reel)}

  /* Smart order + recommendation + prefill existing brief */
  var order=document.getElementById('afx-smart-order');if(order){var state={step:0,market:'',kind:'',style:'',count:''},steps=[].slice.call(order.querySelectorAll('.afx-order-step')),meter=[].slice.call(order.querySelectorAll('.afx-order-meter span')),back=document.getElementById('afx-order-back'),next=document.getElementById('afx-order-next'),productInput=document.getElementById('afx-order-product'),result=document.getElementById('afx-order-result');
    function recommendation(){if(state.style==='premium')return 'Премиальный';if(state.style==='minimal')return 'Минималистичный';if(state.style==='market')return 'Яркий marketplace';if(state.kind==='tech')return 'Технологичный';if(state.kind==='fashion')return 'Премиальный';return 'На усмотрение AuraFX'}
    function renderOrder(){steps.forEach(function(s,i){s.classList.toggle('active',i===state.step)});meter.forEach(function(m,i){m.classList.toggle('done',i<=state.step)});back.style.visibility=state.step?'visible':'hidden';next.textContent=state.step===3?'Открыть готовую заявку →':'Дальше →';if(state.step===3&&state.count){result.style.display='block';result.querySelector('b').textContent='Рекомендация: '+recommendation();result.querySelector('span').textContent='Площадка: '+(state.market||'—')+' · Серия: '+state.count+' карточек. Мы перенесём это в бриф.'}}
    order.addEventListener('click',function(e){var b=e.target.closest('.afx-order-option');if(!b)return;var st=Number(b.closest('.afx-order-step').dataset.step),v=b.dataset.value;[].slice.call(b.parentElement.children).forEach(function(x){x.classList.toggle('selected',x===b)});if(st===0)state.market=v;else if(st===1)state.kind=v;else if(st===2)state.style=v;else if(st===3)state.count=v;renderOrder()});
    back.addEventListener('click',function(){state.step=Math.max(0,state.step-1);renderOrder()});
    next.addEventListener('click',function(){if(state.step===0&&!state.market)return;if(state.step===1){state.product=(productInput.value||'').trim();if(!state.product||!state.kind)return}if(state.step===2&&!state.style)return;if(state.step===3&&!state.count)return;if(state.step<3){state.step++;renderOrder();return}var opener=document.getElementById('afx-open-brief');if(opener)opener.click();setTimeout(function(){var form=document.getElementById('afx-brief-form');if(!form)return;var mp=form.querySelector('[name="marketplace"]'),cnt=form.querySelector('[name="count"]'),prod=form.querySelector('[name="product"]'),sty=form.querySelector('[name="style"]'),comment=form.querySelector('[name="comment"]');if(mp)mp.value=state.market;if(cnt)cnt.value=state.count;if(prod)prod.value=state.product;if(sty){var rec=recommendation();[].slice.call(sty.options).some(function(o){if(o.textContent===rec){sty.value=o.value;return true}return false})}if(comment&&!comment.value)comment.value='Подбор с сайта AuraFX: '+recommendation()+'. Категория: '+state.kind+'.';},80)});renderOrder();}

  /* Premium pointer glow only for precise pointer devices. */
  var glow=document.getElementById('afx-pointer-glow');if(glow&&matchMedia&&matchMedia('(pointer:fine)').matches){var gx=-999,gy=-999,gr=0;addEventListener('pointermove',function(e){gx=e.clientX-130;gy=e.clientY-130;if(!gr)gr=requestAnimationFrame(function(){gr=0;glow.style.transform='translate3d('+gx+'px,'+gy+'px,0)'})},{passive:true})}
})();
</script>`;

const PRIVACY_HTML = String.raw`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>AuraFX — конфиденциальность</title><style>*{box-sizing:border-box}body{margin:0;background:#0b0612;color:#eee7f5;font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif}.wrap{max-width:820px;margin:auto;padding:54px 20px 80px}a{color:#b77cff}h1{font-size:clamp(38px,7vw,64px);letter-spacing:-.05em;margin:0 0 12px}.sub{color:#91849f;margin-bottom:38px}.card{padding:26px;border:1px solid rgba(255,255,255,.09);border-radius:24px;background:rgba(255,255,255,.035);line-height:1.65;color:#c6bacf}.card h2{color:#fff;margin:26px 0 8px;font-size:20px}.card h2:first-child{margin-top:0}.back{display:inline-flex;margin-top:20px;text-decoration:none;padding:11px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04)}</style></head><body><main class="wrap"><h1>Конфиденциальность</h1><div class="sub">Коротко и понятным языком.</div><div class="card"><h2>Какие данные использует сайт</h2><p>AuraFX хранит технический анонимный идентификатор браузера для счётчика посещений и аналитики действий на сайте. При отправке брифа сохраняются данные, которые посетитель вводит сам: информация о проекте и контакт для связи.</p><h2>Для чего это нужно</h2><p>Чтобы показать статистику посещений, понять эффективность рекламы, обработать заявку и связаться по проекту.</p><h2>Что не делаем</h2><p>Данные не продаются и не публикуются. Пароль администратора хранится отдельно в Cloudflare Secrets.</p><h2>Реклама и UTM</h2><p>При переходе по рекламной ссылке сайт может сохранять UTM-метки и адрес источника перехода, чтобы определить, какая рекламная кампания привела посетителя или заявку. Для ограничения промо-колеса одной попыткой в 7 дней используется технический хэш сетевого адреса — исходный адрес в таблицу промо не записывается.</p><h2>Удаление данных</h2><p>Если нужно удалить отправленную заявку или связанные с ней контактные данные, напиши владельцу AuraFX через Telegram.</p><p>Политика может обновляться вместе с функционалом сайта.</p></div><a class="back" href="/">← Вернуться на AuraFX</a></main></body></html>`;

const HEADER_EXCLUSIVE_LOGO_HTML = String.raw`
<style>
  .afx-logo-safe-target{position:relative!important;overflow:hidden!important;color:transparent!important;font-size:0!important;}
  .afx-logo-safe-target::before,.afx-logo-safe-target::after{display:none!important;content:none!important;}
  .afx-logo-safe-target > *:not(.afx-logo-safe-img){display:none!important;}
  .afx-logo-safe-img{position:absolute!important;inset:2px!important;width:calc(100% - 4px)!important;height:calc(100% - 4px)!important;object-fit:contain!important;border-radius:inherit!important;display:block!important;z-index:5!important;pointer-events:none!important;}

  /* Safari/iPhone safety: never let reveal/effects keep content invisible. */
  html.afx-ios .afx-reveal-prep,
  html.afx-ios .afx-reveal,
  html.afx-ios .afx-reveal-item{opacity:1!important;transform:none!important;}
  html.afx-ios .afx-r-panel,
  html.afx-ios .afx-faq-item,
  html.afx-ios .afx-tool-pill{-webkit-backdrop-filter:none!important;backdrop-filter:none!important;}
  html.afx-ios .afx-price-card-decor,
  html.afx-ios .afx-r-card,
  html.afx-ios .afx-r-panel,
  html.afx-ios .afx-faq-item{contain:none!important;}
</style>
<script>
(function(){
  var LOGO_SRC="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%2210%22%20y1%3D%2254%22%20x2%3D%2254%22%20y2%3D%2210%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2359e7ff%22%2F%3E%3Cstop%20offset%3D%22.48%22%20stop-color%3D%22%239d59ff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23ff72d7%22%2F%3E%3C%2FlinearGradient%3E%3Cfilter%20id%3D%22s%22%3E%3CfeGaussianBlur%20stdDeviation%3D%221.2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2260%22%20height%3D%2260%22%20rx%3D%2217%22%20fill%3D%22%230a0611%22%20stroke%3D%22%238f4fff%22%20stroke-opacity%3D%22.48%22%2F%3E%3Cpath%20d%3D%22M16%2047%2029%2016h7l12%2031h-8l-2.8-7H26.4l-2.8%207Zm13.2-14h5.4L32%2025.2Z%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cpath%20d%3D%22M43%2016h6v6%22%20fill%3D%22none%22%20stroke%3D%22%2369eaff%22%20stroke-width%3D%223.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Ccircle%20cx%3D%2249%22%20cy%3D%2215%22%20r%3D%222.2%22%20fill%3D%22%23fff%22%20opacity%3D%22.9%22%20filter%3D%22url%28%23s%29%22%2F%3E%3C%2Fsvg%3E";
  var ua=navigator.userAgent||'';
  var isiOS=/iP(?:hone|ad|od)/.test(ua) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  if(isiOS)document.documentElement.classList.add('afx-ios');

  function favicon(){
    try{
      var link=document.querySelector('link[rel="icon"]')||document.createElement('link');
      link.rel='icon';link.type='image/webp';link.href=LOGO_SRC;
      if(!link.parentNode)document.head.appendChild(link);
    }catch(e){}
  }

  function installLogo(){
    try{
      /* Prefer the real brand mark. The old heuristic searched for any exact
         letter \"A\" near the top-left and could occasionally pick the wrong
         node after portfolio/layout upgrades. */
      var best=document.querySelector('header .brand .mark, nav .brand .mark, .nav .brand .mark, .brand .mark');

      if(!best){
        var nodes=document.querySelectorAll('header *, nav *');
        var bestScore=1e9;
        for(var i=0;i<nodes.length && i<220;i++){
          var el=nodes[i];
          if(el.dataset && el.dataset.afxLogoSafe==='1')return true;
          var t=(el.textContent||'').replace(/\s+/g,' ').trim();
          if(t!=='A')continue;
          var r=el.getBoundingClientRect();
          if(r.top<0||r.top>190||r.left<0||r.left>190)continue;
          if(r.width<30||r.width>96||r.height<30||r.height>96)continue;
          var s=Math.abs(r.width-r.height)+Math.abs(r.width-36)+r.left*.05+r.top*.05;
          if(s<bestScore){best=el;bestScore=s}
        }
      }

      if(!best)return false;
      if(best.dataset && best.dataset.afxLogoSafe==='1')return true;

      /* Keep the original A visible until the custom image has actually
         decoded. If the image ever fails, the header never becomes blank. */
      var probe=new Image();
      probe.decoding='async';
      probe.onload=function(){
        try{
          if(!best || !best.isConnected)return;
          best.dataset.afxLogoSafe='1';
          best.classList.add('afx-logo-safe-target');
          best.innerHTML='';
          var logo=document.createElement('img');
          logo.className='afx-logo-safe-img';
          logo.src=LOGO_SRC;
          logo.alt='AuraFX';
          logo.decoding='async';
          logo.onerror=function(){
            try{
              best.classList.remove('afx-logo-safe-target');
              delete best.dataset.afxLogoSafe;
              best.innerHTML='A';
            }catch(e){}
          };
          best.appendChild(logo);
        }catch(e){}
      };
      probe.onerror=function(){
        try{
          best.classList.remove('afx-logo-safe-target');
          delete best.dataset.afxLogoSafe;
          if(!(best.textContent||'').trim())best.textContent='A';
        }catch(e){}
      };
      probe.src=LOGO_SRC;
      return true;
    }catch(e){return false}
  }

  favicon();
  function start(){
    /* First paint wins. Logo is secondary and must never block the page. */
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        if(installLogo())return;
        setTimeout(installLogo,900);
      });
    });
    /* Absolute reveal fail-safe for Safari/WebViews. */
    setTimeout(function(){
      try{
        document.querySelectorAll('.afx-reveal-prep').forEach(function(el){el.classList.remove('afx-reveal-prep')});
      }catch(e){}
    },1400);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
</script>`;

const ADMIN_HTML = String.raw`<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AuraFX Admin</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#09050f;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;min-height:100vh}body:before{content:"";position:fixed;inset:-25%;background:radial-gradient(circle at 80% 15%,rgba(139,49,255,.18),transparent 27%),radial-gradient(circle at 15% 82%,rgba(66,224,255,.07),transparent 24%);pointer-events:none}
.wrap{position:relative;max-width:1180px;margin:auto;padding:28px 18px 70px}.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px}.brand{font-size:25px;font-weight:950}.brand span{background:linear-gradient(90deg,#67e8ff,#b44dff);-webkit-background-clip:text;color:transparent}.sub{color:#8f839d;font-size:13px;margin-top:4px}.top-actions,.actions,.filters{display:flex;gap:8px;flex-wrap:wrap}
.panel,.card{border:1px solid rgba(255,255,255,.095);background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.025));backdrop-filter:blur(18px);box-shadow:0 18px 60px rgba(0,0,0,.22);border-radius:22px}.login{max-width:440px;margin:12vh auto 0;padding:26px}.login h1{margin:0 0 8px;font-size:32px}.login p{margin:0 0 22px;color:#a99db5;line-height:1.55}
input{width:100%;border:1px solid rgba(255,255,255,.12);background:#100819;color:#fff;border-radius:14px;padding:14px 15px;font:inherit;outline:none}input:focus{border-color:#a64bff;box-shadow:0 0 0 4px rgba(164,72,255,.12)}button,a.btn{border:0;border-radius:13px;padding:11px 14px;font:inherit;font-size:13px;font-weight:850;cursor:pointer;color:#fff;background:#251630;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:7px}button:disabled{opacity:.5;cursor:wait}.primary{background:linear-gradient(135deg,#b247ff,#7027ed)}.danger{background:#39151d;color:#ff9cab}.warn{background:#352713;color:#ffd783}.ghost{background:rgba(255,255,255,.06)}.ok{background:#123126;color:#8ff3c6}
.msg{min-height:20px;margin:12px 0 0;color:#ff9aaa;font-size:13px}.section-title{display:flex;justify-content:space-between;align-items:end;gap:12px;margin:30px 0 12px}.section-title h2{margin:0;font-size:22px}.section-title p{margin:0;color:#81758e;font-size:12px}.metrics{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.metric{padding:16px}.metric small{color:#92869e;font-size:11px}.metric b{display:block;font-size:27px;margin-top:6px;letter-spacing:-.03em}.metric em{display:block;color:#746b7f;font-style:normal;font-size:11px;margin-top:3px}
.overview-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:12px}.chart{padding:18px}.bars{height:150px;display:flex;align-items:end;gap:8px;margin-top:18px}.bar-wrap{flex:1;min-width:0;text-align:center}.bar{width:100%;min-height:4px;border-radius:9px 9px 3px 3px;background:linear-gradient(180deg,#b14cff,#6330de);box-shadow:0 0 18px rgba(135,59,240,.18)}.bar-wrap span{display:block;color:#746a80;font-size:10px;margin-top:7px}.quick{padding:18px}.quick h3{margin:0 0 12px}.quick .actions{display:grid;grid-template-columns:1fr 1fr}.system{margin-top:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;color:#9f93aa;font-size:12px}.status-dot{width:8px;height:8px;border-radius:50%;background:#59eeb2;box-shadow:0 0 14px rgba(89,238,178,.7);display:inline-block;margin-right:7px}
.toolbar{display:flex;gap:10px;justify-content:space-between;align-items:center;margin:0 0 12px;flex-wrap:wrap}.filters button.active{background:#7629ee}.review-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}.review-stat{padding:14px}.review-stat b{display:block;font-size:22px;margin-top:4px}.review-stat small{color:#8f839b}.list{display:grid;gap:10px}.card{padding:18px}.cardtop{display:flex;justify-content:space-between;gap:14px;align-items:start}.name{font-weight:900;font-size:17px}.stars{color:#ffd45c;letter-spacing:1px}.text{color:#ddd5e4;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}.meta{display:flex;gap:8px;align-items:center;flex-wrap:wrap;color:#786e82;font-size:11px}.badge{display:inline-flex;padding:5px 9px;border-radius:999px;font-size:10px;font-weight:850}.approved{background:rgba(55,220,151,.12);color:#82f0be}.pending{background:rgba(255,188,61,.12);color:#ffd06f}.hidden{background:rgba(255,103,128,.12);color:#ff9bac}.new{background:rgba(102,213,255,.12);color:#83e7ff}.contacted{background:rgba(177,91,255,.14);color:#d3a6ff}.done{background:rgba(55,220,151,.12);color:#82f0be}.spam{background:rgba(255,103,128,.12);color:#ff9bac}.empty{text-align:center;padding:40px 20px;color:#8f829c}.hidden-ui{display:none!important}.toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(20px);background:#171020;border:1px solid rgba(255,255,255,.1);padding:11px 15px;border-radius:999px;opacity:0;pointer-events:none;transition:.22s;z-index:20;font-size:12px}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.promo-check{padding:18px}.promo-form{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px}.promo-note{margin-top:10px}.promo-result{margin-top:12px;padding:16px;border-radius:17px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025)}.promo-result.empty{color:#8f829c}.promo-code{font:900 16px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.03em;overflow-wrap:anywhere}.promo-main{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.promo-info{margin-top:10px;color:#b7aabd;font-size:12px;line-height:1.65}.promo-history{display:grid;gap:8px;margin-top:12px}.promo-row{display:grid;grid-template-columns:minmax(0,1.25fr) 80px 110px minmax(0,.8fr);gap:10px;align-items:center;padding:12px 14px;border:1px solid rgba(255,255,255,.075);border-radius:15px;background:rgba(255,255,255,.025);font-size:12px}.promo-row .promo-code{font-size:12px}.promo-status-active{background:rgba(55,220,151,.12);color:#82f0be}.promo-status-redeemed{background:rgba(102,213,255,.12);color:#83e7ff}.promo-status-expired{background:rgba(255,103,128,.12);color:#ff9bac}.promo-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.promo-actions button{flex:0 0 auto}
.tg-panel{padding:18px}.tg-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:14px}.tg-box{padding:16px;border:1px solid rgba(255,255,255,.075);border-radius:17px;background:rgba(255,255,255,.025)}.tg-box h3{margin:0 0 7px;font-size:16px}.tg-box p{margin:0;color:#9e92a8;font-size:12px;line-height:1.65}.tg-state{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.tg-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.tg-step{display:flex;gap:10px;margin-top:10px;color:#bcb1c5;font-size:12px;line-height:1.55}.tg-step b{width:22px;height:22px;flex:0 0 22px;display:grid;place-items:center;border-radius:50%;background:rgba(166,75,255,.14);color:#d5b6ff}.tg-command{font:800 12px/1.3 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;background:#100819;border:1px solid rgba(255,255,255,.09);padding:8px 10px;border-radius:10px;display:inline-block;margin-top:8px}
@media(max-width:860px){.tg-grid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}.overview-grid{grid-template-columns:1fr}.review-stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:620px){.wrap{padding:20px 14px 60px}.top{align-items:flex-start}.top-actions{justify-content:flex-end}.metrics{grid-template-columns:repeat(2,1fr)}.quick .actions{grid-template-columns:1fr}.cardtop{display:block}.stars{margin-top:6px}.promo-form{grid-template-columns:1fr}.promo-row{grid-template-columns:1fr 70px}.promo-row>*:nth-child(3),.promo-row>*:nth-child(4){grid-column:1/-1}.promo-main{display:block}.promo-main .badge{margin-top:8px}}
</style></head><body><div class="wrap">
<div class="top"><div><div class="brand"><span>AuraFX</span> Admin Pro</div><div class="sub">Аналитика, отзывы и управление сайтом</div></div><div class="top-actions"><a class="btn ghost hidden-ui" id="openSite" href="/" target="_blank">↗ Сайт</a><button id="logout" class="ghost hidden-ui">Выйти</button></div></div>
<section id="loginBox" class="panel login"><h1>Вход</h1><p>Панель доступна только владельцу. Пароль хранится в Cloudflare Secrets.</p><form id="loginForm"><input id="password" type="password" autocomplete="current-password" placeholder="Пароль администратора" required><button class="primary" style="width:100%;margin-top:12px">Войти →</button><div class="msg" id="loginMsg"></div></form></section>
<section id="dash" class="hidden-ui">
  <div class="section-title"><div><h2>Обзор</h2><p>Что происходит на сайте прямо сейчас</p></div><button id="refreshAll" class="ghost">↻ Обновить</button></div>
  <div class="metrics">
    <div class="panel metric"><small>Онлайн сейчас</small><b id="mOnline">0</b><em>активны за ~70 сек</em></div>
    <div class="panel metric"><small>Уникальных всего</small><b id="mTotal">0</b><em>уникальные браузеры</em></div>
    <div class="panel metric"><small>Уникальных сегодня</small><b id="mToday">0</b><em>за текущие сутки UTC</em></div>
    <div class="panel metric"><small>Просмотров сегодня</small><b id="mViews">0</b><em>загрузки страниц</em></div>
    <div class="panel metric"><small>Клики по связи сегодня</small><b id="mContact">0</b><em>Telegram + Avito</em></div>
    <div class="panel metric"><small>Выбор тарифа сегодня</small><b id="mPricing">0</b><em>клики «Выбрать»</em></div>
    <div class="panel metric"><small>Средняя оценка</small><b id="mRating">—</b><em>по опубликованным отзывам</em></div>
    <div class="panel metric"><small>Ждут модерации</small><b id="mPending">0</b><em>отзывы на проверке</em></div>
    <div class="panel metric"><small>Открытия кейсов сегодня</small><b id="mCases">0</b><em>просмотры работ крупно</em></div>
    <div class="panel metric"><small>Брифы сегодня</small><b id="mBriefs">0</b><em>готовые заявки</em></div>
    <div class="panel metric"><small>Заявки сегодня</small><b id="mLeads">0</b><em>сохранены в базе</em></div>
    <div class="panel metric"><small>Главный источник</small><b id="mSource">—</b><em>по заявкам</em></div>
  </div>
  <div class="overview-grid" style="margin-top:12px">
    <div class="panel chart"><div><b>Уникальные посетители за 7 дней</b><div class="sub">по дням</div></div><div id="bars" class="bars"></div></div>
    <div class="panel quick"><h3>Быстрые действия</h3><div class="actions"><button id="copyLink" class="ghost">⧉ Скопировать ссылку</button><button id="motionToggle" class="primary">✨ Полные анимации</button><button id="clearOnline" class="warn">Очистить онлайн</button><button id="resetTraffic" class="danger">Сбросить статистику</button><button id="exportReviews" class="ghost">↓ Экспорт отзывов CSV</button><button id="exportLeads" class="ghost">↓ Экспорт заявок CSV</button></div><div class="panel system"><span><span class="status-dot"></span>D1 и API</span><b id="sysStatus">OK</b></div></div>
  </div>

  <div class="section-title"><div><h2>Telegram-уведомления</h2><p>Новые заявки и важные события сразу в личку</p></div><button id="tgRefresh" class="ghost">Проверить статус</button></div>
  <div class="panel tg-panel">
    <div class="tg-grid">
      <div class="tg-box">
        <h3>Состояние подключения</h3>
        <p id="tgStatusText">Проверяю настройки Telegram…</p>
        <div class="tg-state"><span id="tgTokenBadge" class="badge pending">BOT TOKEN: …</span><span id="tgChatBadge" class="badge pending">Чат: …</span></div>
        <div class="tg-actions"><button id="tgConnect" class="primary">🔗 Подключить мой Telegram</button><button id="tgTest" class="ok">✉ Тест</button><button id="tgDisconnect" class="danger">Отключить чат</button></div>
      </div>
      <div class="tg-box">
        <h3>Настройка один раз</h3>
        <div class="tg-step"><b>1</b><span>Создай бота через <a href="https://t.me/BotFather" target="_blank" rel="noopener" style="color:#c899ff">@BotFather</a> и добавь его токен в Cloudflare Secret с именем <strong>TELEGRAM_BOT_TOKEN</strong>.</span></div>
        <div class="tg-step"><b>2</b><span>Открой своего нового бота и отправь ему команду:<br><span class="tg-command">/start aurafx_setup</span></span></div>
        <div class="tg-step"><b>3</b><span>Вернись сюда и нажми «Подключить мой Telegram». Chat ID сохранится только на сервере.</span></div>
        <div class="tg-actions"><button id="tgCopyCommand" class="ghost">⧉ Скопировать команду</button></div>
      </div>
    </div>
    <div class="sub" style="margin-top:12px">Будут приходить: 🔥 новые заявки, ⭐ отзывы, 🎁 SUPER 20% и ✅ погашение промокода. Заявка сохраняется в D1 даже если Telegram временно недоступен.</div>
  </div>

  <div class="section-title"><div><h2>Промокоды</h2><p>Проверка скидок из колеса Фортуны</p></div><button id="refreshPromos" class="ghost">Обновить историю</button></div>
  <div class="panel promo-check">
    <div class="promo-form"><input id="promoInput" autocomplete="off" spellcheck="false" placeholder="Например: AURAFX-10-ABCD"><button id="promoCheckBtn" class="primary" type="button">Проверить код</button></div>
    <input class="promo-note" id="promoRedeemNote" maxlength="120" placeholder="Заметка при погашении — например: Заказ #12 / Иван (необязательно)">
    <div id="promoCheckResult" class="promo-result empty">Введи промокод клиента — я проверю его по базе AuraFX.</div>
    <div class="promo-actions"><button id="promoRedeemBtn" class="ok hidden-ui" type="button">✓ Погасить промокод</button><button id="promoResetMineBtn" class="warn" type="button">♻️ Сбросить мою Фортуну</button><button id="promoResetCodeBtn" class="danger hidden-ui" type="button">Сбросить по промокоду</button></div>
    <div class="sub" style="margin-top:18px">Последние выданные промокоды</div>
    <div id="promoHistory" class="promo-history"><div class="empty">Загружаем промокоды…</div></div>
  </div>

  <div class="section-title"><div><h2>Заявки</h2><p>Лиды с сайта и источник рекламы</p></div><button id="refreshLeads" class="ghost">Обновить заявки</button></div>
  <div id="leadList" class="list"></div>

  <div class="section-title"><div><h2>Отзывы</h2><p>Публикуй, скрывай и удаляй</p></div></div>
  <div class="review-stats"><div class="panel review-stat"><small>Всего</small><b id="sAll">0</b></div><div class="panel review-stat"><small>Опубликовано</small><b id="sApproved">0</b></div><div class="panel review-stat"><small>На проверке</small><b id="sPending">0</b></div><div class="panel review-stat"><small>Скрыто</small><b id="sHidden">0</b></div></div>
  <div class="toolbar"><div class="filters" id="filters"><button data-filter="all" class="active">Все</button><button data-filter="approved">Опубликованные</button><button data-filter="pending">На проверке</button><button data-filter="hidden">Скрытые</button></div><button id="refreshReviews" class="ghost">Обновить отзывы</button></div>
  <div id="list" class="list"></div>
</section></div><div id="toast" class="toast"></div>
<script>
(function(){
  var $=function(s){return document.querySelector(s)},reviews=[],leads=[],promos=[],checkedPromo=null,filter='all';
  var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
  var labels={approved:'Опубликован',pending:'На проверке',hidden:'Скрыт'};
  function toast(t){var el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(function(){el.classList.remove('show')},1800)}
  function showLogin(msg){$('#loginBox').classList.remove('hidden-ui');$('#dash').classList.add('hidden-ui');$('#logout').classList.add('hidden-ui');$('#openSite').classList.add('hidden-ui');$('#loginMsg').textContent=msg||''}
  function showDash(){$('#loginBox').classList.add('hidden-ui');$('#dash').classList.remove('hidden-ui');$('#logout').classList.remove('hidden-ui');$('#openSite').classList.remove('hidden-ui')}
  async function api(url,opt){opt=opt||{};var headers=Object.assign({accept:'application/json','content-type':'application/json'},opt.headers||{});var r=await fetch(url,Object.assign({},opt,{headers:headers}));var d={};try{d=await r.json()}catch(e){}if(r.status===401){showLogin('Сессия закончилась. Войди снова.');throw new Error('AUTH')}if(!r.ok)throw new Error(d.error||'Ошибка');return d}
  function renderBars(days){var max=1;(days||[]).forEach(function(d){max=Math.max(max,Number(d.n||0))});$('#bars').innerHTML=(days||[]).map(function(d){var h=Math.max(4,Math.round((Number(d.n||0)/max)*132));return '<div class="bar-wrap"><div class="bar" style="height:'+h+'px" title="'+d.n+'"></div><span>'+esc(d.label)+'</span></div>'}).join('')||'<div class="empty">Данных пока нет</div>'}
  async function loadDashboard(){var d=await api('/api/admin/dashboard');var m=d.metrics||{};$('#mOnline').textContent=m.online||0;$('#mTotal').textContent=m.total||0;$('#mToday').textContent=m.today_unique||0;$('#mViews').textContent=m.views_today||0;$('#mContact').textContent=m.contact_today||0;$('#mPricing').textContent=m.pricing_today||0;$('#mRating').textContent=m.avg_rating?Number(m.avg_rating).toFixed(1):'—';$('#mPending').textContent=m.pending_reviews||0;$('#mCases').textContent=m.case_opens_today||0;$('#mBriefs').textContent=m.briefs_today||0;$('#mLeads').textContent=m.leads_today||0;$('#mSource').textContent=m.top_source||'—';renderBars(d.days||[]);$('#sysStatus').textContent='OK'}
  function renderTelegramStatus(d){
    d=d||{};var token=$('#tgTokenBadge'),chat=$('#tgChatBadge'),txt=$('#tgStatusText'),test=$('#tgTest'),disc=$('#tgDisconnect');
    token.textContent=d.token_configured?'BOT TOKEN: готов':'BOT TOKEN: не задан';token.className='badge '+(d.token_configured?'approved':'pending');
    chat.textContent=d.chat_connected?('Чат: '+(d.chat_label||'подключён')):'Чат: не подключён';chat.className='badge '+(d.chat_connected?'approved':'pending');
    txt.textContent=d.ready?'Всё готово — уведомления включены ✅':(!d.token_configured?'Сначала добавь TELEGRAM_BOT_TOKEN в Cloudflare Secrets.':'Токен найден. Отправь боту /start aurafx_setup и подключи чат.');
    test.disabled=!d.ready;disc.disabled=!d.chat_connected;
  }
  async function loadTelegramStatus(){var d=await api('/api/admin/telegram/status');renderTelegramStatus(d);return d}
  function promoStatusLabel(status){return status==='active'?'Активен':status==='redeemed'?'Погашен':'Истёк'}
  function promoStatusClass(status){return status==='active'?'promo-status-active':status==='redeemed'?'promo-status-redeemed':'promo-status-expired'}
  function renderPromoHistory(){
    var host=$('#promoHistory');if(!host)return;
    if(!promos.length){host.innerHTML='<div class="empty">Промокодов пока нет.</div>';return}
    host.innerHTML=promos.map(function(p){
      return '<div class="promo-row"><div class="promo-code">'+esc(p.code)+'</div><b>'+esc(String(p.discount))+'%</b><span class="badge '+promoStatusClass(p.status)+'">'+promoStatusLabel(p.status)+'</span><span>'+new Date(p.created_at+'Z').toLocaleString('ru-RU')+'</span></div>'
    }).join('')
  }
  async function loadPromos(){var d=await api('/api/admin/promos');promos=d.promos||[];renderPromoHistory()}
  function renderPromoCheck(p){
    checkedPromo=p||null;var box=$('#promoCheckResult'),redeem=$('#promoRedeemBtn'),resetCode=$('#promoResetCodeBtn');
    if(!p){box.className='promo-result empty';box.textContent='Промокод не найден в базе AuraFX. Скорее всего, клиент придумал его сам.';redeem.classList.add('hidden-ui');resetCode&&resetCode.classList.add('hidden-ui');return}
    var status=p.status||'expired',badge='<span class="badge '+promoStatusClass(status)+'">'+promoStatusLabel(status)+'</span>';
    var html='<div class="promo-main"><div><div class="promo-code">'+esc(p.code)+'</div><div class="promo-info">Скидка: <b>'+esc(String(p.discount))+'%</b><br>Выдан: '+new Date(p.created_at+'Z').toLocaleString('ru-RU')+'<br>Действует до: '+new Date(p.expires_at+'Z').toLocaleString('ru-RU');
    if(p.redeemed_at)html+='<br>Погашен: '+new Date(p.redeemed_at+'Z').toLocaleString('ru-RU');
    if(p.redeemed_note)html+='<br>Заметка: '+esc(p.redeemed_note);
    html+='</div></div>'+badge+'</div>';
    box.className='promo-result';box.innerHTML=html;
    redeem.classList.toggle('hidden-ui',status!=='active');
    if(resetCode)resetCode.classList.remove('hidden-ui');
  }
  async function checkPromo(){
    var code=String($('#promoInput').value||'').trim().toUpperCase();if(!code){renderPromoCheck(null);$('#promoCheckResult').textContent='Сначала введи промокод.';return}
    $('#promoCheckBtn').disabled=true;$('#promoCheckResult').className='promo-result empty';$('#promoCheckResult').textContent='Проверяю по базе…';
    try{var d=await api('/api/admin/promo/check?code='+encodeURIComponent(code));renderPromoCheck(d.promo||null)}catch(err){if(err.message!=='AUTH'){renderPromoCheck(null);$('#promoCheckResult').textContent=err.message}}finally{$('#promoCheckBtn').disabled=false}
  }
  function renderLeads(){
    if(!leads.length){$('#leadList').innerHTML='<div class="panel empty">Заявок пока нет.</div>';return}
    $('#leadList').innerHTML=leads.map(function(l){
      var src=[l.source,l.campaign,l.content].filter(Boolean).join(' • ')||'прямой переход';
      var meta=[new Date(l.created_at+'Z').toLocaleString('ru-RU'),'#'+l.id,src].join(' · ');
      var html='<article class="card" data-lead-id="'+l.id+'"><div class="cardtop"><div><div class="name">'+esc(l.product)+'</div><div class="meta"><span class="badge '+esc(l.status)+'">'+esc(l.status)+'</span><span>'+esc(meta)+'</span></div></div><div class="stars">'+esc(String(l.count))+' шт.</div></div>';
      html+='<p class="text"><b>'+esc(l.marketplace)+'</b> · '+esc(l.style)+'<br>Связь: <b>'+esc(l.contact)+'</b><br>Срок: '+esc(l.deadline||'—')+'<br>'+esc(l.comment||'')+'</p>';
      html+='<div class="actions"><button class="ghost" data-lead-status="contacted">В работе</button><button class="ok" data-lead-status="done">Готово</button><button class="danger" data-lead-status="spam">Спам</button></div></article>';return html
    }).join('')
  }
  async function loadLeads(){var d=await api('/api/admin/leads');leads=d.leads||[];renderLeads()}
  function renderReviews(){var c={all:reviews.length,approved:0,pending:0,hidden:0};reviews.forEach(function(r){c[r.status]=(c[r.status]||0)+1});$('#sAll').textContent=c.all;$('#sApproved').textContent=c.approved;$('#sPending').textContent=c.pending;$('#sHidden').textContent=c.hidden;var data=filter==='all'?reviews:reviews.filter(function(r){return r.status===filter});if(!data.length){$('#list').innerHTML='<div class="panel empty">Здесь пока пусто.</div>';return}$('#list').innerHTML=data.map(function(r){var html='<article class="card" data-id="'+r.id+'"><div class="cardtop"><div><div class="name">'+esc(r.name)+'</div><div class="meta"><span class="badge '+esc(r.status)+'">'+(labels[r.status]||esc(r.status))+'</span><span>'+new Date(r.created_at+'Z').toLocaleString('ru-RU')+'</span><span>#'+r.id+'</span></div></div><div class="stars">'+'★'.repeat(r.rating)+'</div></div><p class="text">'+esc(r.text)+'</p><div class="actions">';if(r.status!=='approved')html+='<button class="ok" data-action="approved">Опубликовать</button>';if(r.status!=='hidden')html+='<button class="ghost" data-action="hidden">Скрыть</button>';html+='<button class="danger" data-action="delete">Удалить</button></div></article>';return html}).join('')}
  async function loadReviews(){var d=await api('/api/admin/reviews');reviews=d.reviews||[];renderReviews()}
  async function loadAll(){await Promise.all([loadDashboard(),loadReviews(),loadLeads(),loadPromos(),loadTelegramStatus()]);showDash()}
  $('#loginForm').addEventListener('submit',async function(e){e.preventDefault();$('#loginMsg').textContent='Проверяем…';try{await api('/api/admin/login',{method:'POST',body:JSON.stringify({password:$('#password').value})});$('#password').value='';await loadAll()}catch(err){if(err.message!=='AUTH')$('#loginMsg').textContent=err.message}});
  $('#logout').addEventListener('click',async function(){try{await api('/api/admin/logout',{method:'POST',body:'{}'})}catch(e){}showLogin('Ты вышел из панели.')});
  $('#refreshAll').addEventListener('click',async function(){await loadAll();toast('Обновлено')});$('#refreshReviews').addEventListener('click',async function(){await loadReviews();toast('Отзывы обновлены')});
  $('#filters').addEventListener('click',function(e){var b=e.target.closest('button[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('#filters button').forEach(function(x){x.classList.toggle('active',x===b)});renderReviews()});
  $('#refreshLeads').addEventListener('click',async function(){await loadLeads();toast('Заявки обновлены')});
  $('#tgRefresh').addEventListener('click',async function(){await loadTelegramStatus();toast('Статус Telegram обновлён')});
  $('#tgCopyCommand').addEventListener('click',async function(){try{await navigator.clipboard.writeText('/start aurafx_setup');toast('Команда скопирована')}catch(e){toast('/start aurafx_setup')}});
  $('#tgConnect').addEventListener('click',async function(){var b=this;b.disabled=true;try{var d=await api('/api/admin/telegram/connect',{method:'POST',body:'{}'});await loadTelegramStatus();toast(d.test_sent?'Telegram подключён — сообщение уже отправлено':'Telegram подключён')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#tgTest').addEventListener('click',async function(){var b=this;b.disabled=true;try{await api('/api/admin/telegram/test',{method:'POST',body:'{}'});toast('Тест отправлен в Telegram')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#tgDisconnect').addEventListener('click',async function(){if(!confirm('Отключить Telegram-уведомления для этого чата?'))return;var b=this;b.disabled=true;try{await api('/api/admin/telegram/disconnect',{method:'POST',body:'{}'});await loadTelegramStatus();toast('Telegram отключён')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#refreshPromos').addEventListener('click',async function(){await loadPromos();toast('Промокоды обновлены')});
  $('#promoCheckBtn').addEventListener('click',checkPromo);
  $('#promoInput').addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();checkPromo()}});
  $('#promoRedeemBtn').addEventListener('click',async function(){
    if(!checkedPromo||checkedPromo.status!=='active')return;
    if(!confirm('Погасить '+checkedPromo.code+' на '+checkedPromo.discount+'%? После этого код нельзя будет использовать повторно.'))return;
    var b=this;b.disabled=true;
    try{var d=await api('/api/admin/promo/redeem',{method:'POST',body:JSON.stringify({code:checkedPromo.code,note:$('#promoRedeemNote').value})});renderPromoCheck(d.promo);await loadPromos();toast('Промокод погашен')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}
  });
  $('#promoResetMineBtn').addEventListener('click',async function(){
    if(!confirm('Сбросить твою текущую попытку Фортуны? Активные тестовые промокоды с этого подключения за последние 7 дней будут удалены, и колесо можно будет крутить снова.'))return;
    var b=this;b.disabled=true;
    try{
      var d=await api('/api/admin/promo/reset-mine',{method:'POST',body:'{}'});
      try{localStorage.removeItem('afx_promo')}catch(e){}
      checkedPromo=null;$('#promoInput').value='';$('#promoRedeemNote').value='';
      $('#promoCheckResult').className='promo-result empty';
      $('#promoCheckResult').textContent=d.removed?('Готово. Удалено тестовых попыток: '+d.removed+'. Колесо снова доступно.'):'Для текущего подключения активной попытки не найдено. Если крутил колесо с другого IP, используй «Сбросить по промокоду».';
      $('#promoRedeemBtn').classList.add('hidden-ui');$('#promoResetCodeBtn').classList.add('hidden-ui');
      await loadPromos();toast(d.removed?'Фортуна сброшена':'Активная попытка не найдена');
    }catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}
  });
  $('#promoResetCodeBtn').addEventListener('click',async function(){
    if(!checkedPromo||!checkedPromo.code)return;
    var code=checkedPromo.code;
    if(!confirm('Удалить '+code+' из тестовой истории и снять связанную с ним перезарядку? Это действие нельзя отменить.'))return;
    var b=this;b.disabled=true;
    try{
      var d=await api('/api/admin/promo/reset-code',{method:'POST',body:JSON.stringify({code:code})});
      try{var p=JSON.parse(localStorage.getItem('afx_promo')||'null');if(p&&String(p.code||'').toUpperCase()===String(code).toUpperCase())localStorage.removeItem('afx_promo')}catch(e){}
      checkedPromo=null;$('#promoInput').value='';$('#promoRedeemNote').value='';
      $('#promoCheckResult').className='promo-result empty';$('#promoCheckResult').textContent='Промокод '+code+' удалён. Связанная попытка Фортуны снова доступна.';
      $('#promoRedeemBtn').classList.add('hidden-ui');b.classList.add('hidden-ui');
      await loadPromos();toast('Промокод сброшен');
    }catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}
  });
  $('#leadList').addEventListener('click',async function(e){var b=e.target.closest('button[data-lead-status]');if(!b)return;var card=b.closest('[data-lead-id]');b.disabled=true;try{await api('/api/admin/leads/'+card.dataset.leadId,{method:'PATCH',body:JSON.stringify({status:b.dataset.leadStatus})});await Promise.all([loadLeads(),loadDashboard()]);toast('Статус обновлён')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#list').addEventListener('click',async function(e){var b=e.target.closest('button[data-action]');if(!b)return;var card=b.closest('[data-id]'),id=card.dataset.id,action=b.dataset.action;if(action==='delete'&&!confirm('Удалить отзыв навсегда?'))return;b.disabled=true;try{if(action==='delete')await api('/api/admin/reviews/'+id,{method:'DELETE'});else await api('/api/admin/reviews/'+id,{method:'PATCH',body:JSON.stringify({status:action})});await Promise.all([loadReviews(),loadDashboard()])}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#copyLink').addEventListener('click',async function(){try{await navigator.clipboard.writeText(location.origin+'/');toast('Ссылка скопирована')}catch(e){toast(location.origin+'/')}});
  function syncMotionButton(){
    var on=false;
    try{on=localStorage.getItem('afx_motion_mode')==='full'}catch(e){}
    var b=$('#motionToggle');
    if(!b)return;
    b.textContent=on?'✨ Полные анимации: ВКЛ':'✨ Полные анимации: СИСТЕМА';
    b.className=on?'ok':'primary';
  }
  $('#motionToggle').addEventListener('click',function(){
    var on=false;
    try{
      on=localStorage.getItem('afx_motion_mode')==='full';
      if(on)localStorage.removeItem('afx_motion_mode');
      else localStorage.setItem('afx_motion_mode','full');
    }catch(e){}
    syncMotionButton();
    toast(on?'Системный режим анимаций':'Полные анимации включены');
  });
  syncMotionButton();
  $('#clearOnline').addEventListener('click',async function(){if(!confirm('Очистить только текущий онлайн? Общая статистика останется.'))return;await api('/api/admin/stats/reset',{method:'POST',body:JSON.stringify({scope:'online'})});await loadDashboard();toast('Онлайн очищен')});
  $('#resetTraffic').addEventListener('click',async function(){if(!confirm('Сбросить ВСЮ статистику посетителей и кликов? Отзывы не удалятся.'))return;if(!confirm('Точно? Это действие нельзя отменить.'))return;await api('/api/admin/stats/reset',{method:'POST',body:JSON.stringify({scope:'traffic'})});await loadDashboard();toast('Статистика сброшена')});
  $('#exportLeads').addEventListener('click',function(){var rows=[['id','status','created_at','marketplace','count','product','style','deadline','contact','comment','source','medium','campaign','content','referrer','landing']].concat(leads.map(function(l){return [l.id,l.status,l.created_at,l.marketplace,l.count,l.product,l.style,l.deadline,l.contact,l.comment,l.source,l.medium,l.campaign,l.content,l.referrer,l.landing]}));var csv=rows.map(function(row){return row.map(function(v){return '"'+String(v==null?'':v).replace(/"/g,'""')+'"'}).join(',')}).join('\\n');var blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='aurafx-leads.csv';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},500);toast('CSV заявок готов')});
  $('#exportReviews').addEventListener('click',function(){var rows=[['id','name','rating','status','created_at','text']].concat(reviews.map(function(r){return [r.id,r.name,r.rating,r.status,r.created_at,r.text]}));var csv=rows.map(function(row){return row.map(function(v){return '"'+String(v==null?'':v).replace(/"/g,'""')+'"'}).join(',')}).join('\\n');var blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='aurafx-reviews.csv';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},500);toast('CSV готов')});
  loadAll().catch(function(e){if(e.message!=='AUTH')showLogin('Войди, чтобы открыть панель.')});
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
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS online_visitors (
    visitor_id TEXT PRIMARY KEY,
    last_seen TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_online_visitors_last_seen ON online_visitors(last_seen DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_visitors (
    visitor_id TEXT PRIMARY KEY,
    first_seen TEXT NOT NULL DEFAULT (datetime('now')),
    last_seen TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_site_visitors_first_seen ON site_visitors(first_seen DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS daily_visitors (
    day TEXT NOT NULL,
    visitor_id TEXT NOT NULL,
    last_seen TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (day, visitor_id)
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_daily_visitors_day ON daily_visitors(day DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS site_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    meta TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_site_events_type_created ON site_events(event_type, created_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT,
    marketplace TEXT NOT NULL,
    count INTEGER NOT NULL,
    product TEXT NOT NULL,
    style TEXT,
    deadline TEXT,
    contact TEXT NOT NULL,
    comment TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    source TEXT,
    medium TEXT,
    campaign TEXT,
    content TEXT,
    term TEXT,
    referrer TEXT,
    landing TEXT,
    ip_hash TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_leads_status_created ON leads(status, created_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS promo_spins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_hash TEXT NOT NULL,
    discount_percent INTEGER NOT NULL,
    prize_label TEXT NOT NULL,
    promo_code TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_promo_spins_ip_created ON promo_spins(ip_hash, created_at DESC)").run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_promo_spins_code ON promo_spins(promo_code)").run();
  const promoInfo = await env.DB.prepare("PRAGMA table_info(promo_spins)").all();
  const promoCols = new Set((promoInfo.results || []).map(c => String(c.name)));
  if (!promoCols.has("redeemed_at")) await env.DB.prepare("ALTER TABLE promo_spins ADD COLUMN redeemed_at TEXT").run();
  if (!promoCols.has("redeemed_note")) await env.DB.prepare("ALTER TABLE promo_spins ADD COLUMN redeemed_note TEXT").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS app_settings (
    key TEXT PRIMARY KEY,
    value TEXT,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
}

function normalize(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

async function getAppSetting(env, key) {
  if (!env.DB) return "";
  const row = await env.DB.prepare("SELECT value FROM app_settings WHERE key = ? LIMIT 1").bind(String(key)).first();
  return String(row?.value || "");
}

async function setAppSetting(env, key, value) {
  await env.DB.prepare(`INSERT INTO app_settings (key, value, updated_at) VALUES (?, ?, datetime('now'))
    ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=datetime('now')`).bind(String(key), String(value ?? "")).run();
}

async function deleteAppSetting(env, key) {
  await env.DB.prepare("DELETE FROM app_settings WHERE key = ?").bind(String(key)).run();
}

async function telegramChatId(env) {
  const secretChat = String(env.TELEGRAM_CHAT_ID || "").trim();
  if (secretChat) return secretChat;
  return (await getAppSetting(env, "telegram_chat_id")).trim();
}

async function telegramApi(env, method, payload = {}) {
  const token = String(env.TELEGRAM_BOT_TOKEN || "").trim();
  if (!token) throw new Error("TELEGRAM_TOKEN_MISSING");
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok || data.ok !== true) throw new Error("TELEGRAM_API_ERROR");
  return data.result;
}

async function sendTelegram(env, text, chatIdOverride = "") {
  const chatId = String(chatIdOverride || await telegramChatId(env)).trim();
  if (!String(env.TELEGRAM_BOT_TOKEN || "").trim() || !chatId) return { sent: false, reason: "not_configured" };
  const safeText = String(text || "").slice(0, 3900);
  try {
    await telegramApi(env, "sendMessage", {
      chat_id: chatId,
      text: safeText,
      disable_web_page_preview: true
    });
    return { sent: true };
  } catch {
    return { sent: false, reason: "telegram_error" };
  }
}

function queueTelegram(ctx, env, text) {
  const job = sendTelegram(env, text).catch(() => ({ sent:false }));
  if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(job);
  return job;
}

function adminLink(request) {
  try { return new URL("/admin", request.url).toString(); }
  catch { return "https://aurafx-site.pages.dev/admin"; }
}

function extractPromoCode(value) {
  const match = String(value || "").toUpperCase().match(/\bAURAFX-(?:SUPER20|\d{1,2})-[A-Z0-9]{4,12}\b/);
  return match ? match[0] : "";
}

async function promoCheckForNotification(env, code) {
  if (!code) return null;
  return await env.DB.prepare(`SELECT promo_code AS code, discount_percent AS discount, created_at, redeemed_at,
    CASE WHEN redeemed_at IS NOT NULL THEN 'redeemed'
         WHEN datetime(created_at, '+7 days') <= datetime('now') THEN 'expired'
         ELSE 'active' END AS status
    FROM promo_spins WHERE upper(promo_code)=? LIMIT 1`).bind(String(code).toUpperCase()).first();
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

async function handlePublicReviews(request, env, ctx) {
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
  const inserted = await env.DB.prepare("INSERT INTO reviews (name, rating, text, status, ip_hash) VALUES (?, ?, ?, ?, ?)").bind(name, rating, text, status, ipHash).run();
  const reviewId = Number(inserted.meta?.last_row_id || 0);
  const reviewText = [
    "⭐ Новый отзыв AuraFX" + (reviewId ? " #" + reviewId : ""),
    "Имя: " + name,
    "Оценка: " + "★".repeat(rating) + " (" + rating + "/5)",
    "Статус: " + (status === "pending" ? "на модерации" : "опубликован"),
    "",
    text,
    "",
    "Админка: " + adminLink(request)
  ].join("\n");
  queueTelegram(ctx, env, reviewText);
  return json({ ok: true, status }, 201);
}


async function handleOnline(request, env) {
  try { await ensureDb(env); }
  catch { return json({ error: "Счётчик временно недоступен." }, 503); }

  if (!sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);

  if (request.method === "POST") {
    let body = {};
    try { body = await request.json(); } catch {}
    const visitorId = String(body.visitor_id || "").trim();
    if (!/^[A-Za-z0-9_-]{16,80}$/.test(visitorId)) {
      return json({ error: "Некорректный идентификатор." }, 400);
    }
    await env.DB.prepare(`INSERT INTO online_visitors (visitor_id, last_seen)
      VALUES (?, datetime('now'))
      ON CONFLICT(visitor_id) DO UPDATE SET last_seen = datetime('now')`).bind(visitorId).run();
    await env.DB.prepare(`INSERT INTO site_visitors (visitor_id, first_seen, last_seen)
      VALUES (?, datetime('now'), datetime('now'))
      ON CONFLICT(visitor_id) DO UPDATE SET last_seen = datetime('now')`).bind(visitorId).run();
    await env.DB.prepare(`INSERT INTO daily_visitors (day, visitor_id, last_seen)
      VALUES (date('now'), ?, datetime('now'))
      ON CONFLICT(day, visitor_id) DO UPDATE SET last_seen = datetime('now')`).bind(visitorId).run();
  } else if (request.method !== "GET") {
    return json({ error: "Метод не поддерживается." }, 405);
  }

  // Cleanup is deliberately lazy; this keeps the table tiny without a cron job.
  await env.DB.prepare("DELETE FROM online_visitors WHERE datetime(last_seen) < datetime('now', '-10 minutes')").run();
  // Seed currently-known active visitors into the permanent counter on upgrade.
  await env.DB.prepare(`INSERT OR IGNORE INTO site_visitors (visitor_id, first_seen, last_seen)
    SELECT visitor_id, last_seen, last_seen FROM online_visitors`).run();

  const onlineRow = await env.DB.prepare("SELECT COUNT(*) AS n FROM online_visitors WHERE datetime(last_seen) >= datetime('now', '-70 seconds')").first();
  const totalRow = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_visitors").first();
  return json({ online: Number(onlineRow?.n || 0), total: Number(totalRow?.n || 0) });
}


async function handleSiteEvent(request, env) {
  try { await ensureDb(env); }
  catch { return json({ ok: false }, 503); }
  if (request.method !== "POST") return json({ error: "Метод не поддерживается." }, 405);
  if (!sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);
  let body = {};
  try { body = await request.json(); } catch {}
  const visitorId = String(body.visitor_id || "").trim();
  const type = String(body.type || "").trim();
  const meta = String(body.meta || "").trim().slice(0, 160);
  const allowed = new Set(["page_view","telegram_click","avito_click","pricing_select","pricing_jump","case_open","brief_open","brief_submit"]);
  if (!/^[A-Za-z0-9_-]{16,80}$/.test(visitorId) || !allowed.has(type)) return json({ error: "Некорректные данные." }, 400);
  await env.DB.prepare("INSERT INTO site_events (visitor_id, event_type, meta) VALUES (?, ?, ?)").bind(visitorId, type, meta).run();
  await env.DB.prepare(`INSERT INTO site_visitors (visitor_id, first_seen, last_seen) VALUES (?, datetime('now'), datetime('now')) ON CONFLICT(visitor_id) DO UPDATE SET last_seen=datetime('now')`).bind(visitorId).run();
  await env.DB.prepare(`INSERT INTO daily_visitors (day, visitor_id, last_seen) VALUES (date('now'), ?, datetime('now')) ON CONFLICT(day, visitor_id) DO UPDATE SET last_seen=datetime('now')`).bind(visitorId).run();
  return json({ ok: true }, 201);
}


async function handlePromo(request, env, ctx) {
  try { await ensureDb(env); }
  catch { return json({ error: "Колесо временно недоступно." }, 503); }
  if (!["GET","POST"].includes(request.method)) return json({ error: "Метод не поддерживается." }, 405);
  if (request.method === "POST" && !sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);

  const ipHash = await hashIp(request);
  const recent = await env.DB.prepare("SELECT discount_percent, prize_label, promo_code, created_at FROM promo_spins WHERE ip_hash = ? AND datetime(created_at) > datetime('now', '-7 days') ORDER BY datetime(created_at) DESC, id DESC LIMIT 1").bind(ipHash).first();
  const nextAt = createdAt => {
    const d = new Date(String(createdAt || '') + 'Z');
    if (Number.isNaN(d.getTime())) return null;
    d.setUTCDate(d.getUTCDate() + 7);
    return d.toISOString();
  };

  if (recent) {
    return json({
      can_spin: false,
      discount: Number(recent.discount_percent || 0),
      label: String(recent.prize_label || (String(recent.discount_percent || 0) + '%')),
      code: String(recent.promo_code || ''),
      next_at: nextAt(recent.created_at),
      already: true
    });
  }

  if (request.method === "GET") return json({ can_spin: true });

  const weighted = [3,3,3,3,3,3,3,3,5,5,5,5,5,5,5,7,7,7,7,7,7,10,10,10,10,12,12,15,15,20];
  const discount = weighted[Math.floor(Math.random() * weighted.length)] || 5;
  const label = `${discount}%`;
  const stamp = Math.random().toString(36).slice(2, 6).toUpperCase();
  const promoCode = discount === 20 ? `AURAFX-SUPER20-${stamp}` : `AURAFX-${discount}-${stamp}`;
  await env.DB.prepare("INSERT INTO promo_spins (ip_hash, discount_percent, prize_label, promo_code) VALUES (?, ?, ?, ?)").bind(ipHash, discount, label, promoCode).run();
  const row = await env.DB.prepare("SELECT created_at FROM promo_spins WHERE ip_hash = ? ORDER BY id DESC LIMIT 1").bind(ipHash).first();
  if (discount >= 20) {
    queueTelegram(ctx, env, [
      "🔥 SUPER BONUS 20% выпал на AuraFX",
      "Промокод: " + promoCode,
      "Срок действия: 7 дней",
      "",
      "Проверить код: " + adminLink(request)
    ].join("\n"));
  }
  return json({ ok: true, can_spin: false, discount, label, code: promoCode, next_at: nextAt(row?.created_at) }, 201);
}


async function handleLead(request, env, ctx) {
  try { await ensureDb(env); } catch { return json({ error:"База данных недоступна." },503); }
  if (request.method !== "POST") return json({ error:"Метод не поддерживается." },405);
  if (!sameOrigin(request)) return json({ error:"Запрос отклонён." },403);
  let b={}; try{ b=await request.json(); }catch{}
  const visitorId=String(b.visitor_id||"").trim();
  const marketplace=normalize(b.marketplace).slice(0,50), product=normalize(b.product).slice(0,100), style=normalize(b.style).slice(0,80);
  const deadline=normalize(b.deadline).slice(0,80), contact=normalize(b.contact).slice(0,100), comment=String(b.comment||"").trim().slice(0,600);
  const count=Math.max(1,Math.min(50,Number(b.count)||1));
  if (!product || product.length<2 || !contact || contact.length<3 || !marketplace) return json({ error:"Заполни товар и контакт для связи." },400);
  if (visitorId && !/^[A-Za-z0-9_-]{16,80}$/.test(visitorId)) return json({ error:"Некорректные данные." },400);
  const ipHash=await hashIp(request);
  const recent=await env.DB.prepare("SELECT id FROM leads WHERE ip_hash=? AND datetime(created_at)>datetime('now','-2 minutes') LIMIT 1").bind(ipHash).first();
  if(recent) return json({ error:"Заявка уже сохранена. Подожди пару минут перед новой." },429);
  const fields=['source','medium','campaign','content','term'].map(k=>normalize(b[k]).slice(0,120));
  const referrer=String(b.referrer||"").trim().slice(0,300), landing=String(b.landing||"").trim().slice(0,300);
  const result=await env.DB.prepare(`INSERT INTO leads (visitor_id,marketplace,count,product,style,deadline,contact,comment,status,source,medium,campaign,content,term,referrer,landing,ip_hash)
    VALUES (?,?,?,?,?,?,?,?, 'new',?,?,?,?,?,?,?,?)`).bind(visitorId||null,marketplace,count,product,style,deadline,contact,comment,...fields,referrer,landing,ipHash).run();
  const leadId = Number(result.meta?.last_row_id || 0);
  const promoCode = extractPromoCode(comment);
  const promo = promoCode ? await promoCheckForNotification(env, promoCode) : null;
  let promoLine = "Промокод: —";
  if (promoCode && !promo) promoLine = "Промокод: " + promoCode + " ❌ НЕ НАЙДЕН в базе";
  if (promo) {
    const promoState = promo.status === "active" ? "✅ активен" : promo.status === "redeemed" ? "⚠️ уже погашен" : "⌛ истёк";
    promoLine = "Промокод: " + promo.code + " · " + promo.discount + "% · " + promoState;
  }
  const sourceLine = fields[0] ? (fields[0] + (fields[2] ? " / " + fields[2] : "")) : "прямой переход";
  const leadMessage = [
    "🔥 Новая заявка AuraFX" + (leadId ? " #" + leadId : ""),
    "Маркетплейс: " + marketplace,
    "Карточек: " + count,
    "Товар: " + product,
    "Стиль: " + (style || "—"),
    "Срок: " + (deadline || "—"),
    "Контакт: " + contact,
    promoLine,
    "Источник: " + sourceLine,
    "",
    "Комментарий: " + (comment || "—"),
    "",
    "Админка: " + adminLink(request)
  ].join("\n");
  queueTelegram(ctx, env, leadMessage);
  return json({ok:true,id:leadId},201);
}

async function handleAdminApi(request, env, url, ctx) {
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

  if (url.pathname === "/api/admin/telegram/status" && request.method === "GET") {
    const tokenConfigured = Boolean(String(env.TELEGRAM_BOT_TOKEN || "").trim());
    const envChat = String(env.TELEGRAM_CHAT_ID || "").trim();
    const savedChat = envChat || (await getAppSetting(env, "telegram_chat_id")).trim();
    const label = envChat ? "Chat ID из Cloudflare Secret" : (await getAppSetting(env, "telegram_chat_label")).trim();
    return json({
      token_configured: tokenConfigured,
      chat_connected: Boolean(savedChat),
      ready: tokenConfigured && Boolean(savedChat),
      chat_label: label || "",
      chat_source: envChat ? "secret" : (savedChat ? "connected" : "none")
    });
  }

  if (url.pathname === "/api/admin/telegram/connect" && request.method === "POST") {
    if (!String(env.TELEGRAM_BOT_TOKEN || "").trim()) return json({ error:"Сначала добавь TELEGRAM_BOT_TOKEN в Cloudflare Secrets." },503);
    if (String(env.TELEGRAM_CHAT_ID || "").trim()) return json({ error:"TELEGRAM_CHAT_ID уже задан через Cloudflare Secret — подключение не требуется." },409);
    let updates;
    try { updates = await telegramApi(env, "getUpdates", { limit:100, timeout:0, allowed_updates:["message"] }); }
    catch { return json({ error:"Не удалось связаться с Telegram. Проверь токен бота в Cloudflare Secret." },502); }
    const list = Array.isArray(updates) ? updates.slice().reverse() : [];
    const setup = list.find(u => {
      const m = u && u.message;
      const txt = String(m?.text || "").trim();
      return m?.chat?.type === "private" && /^\/start(?:@\w+)?\s+aurafx[_-]setup$/i.test(txt);
    });
    if (!setup) return json({ error:"Не вижу команду /start aurafx_setup. Отправь её своему боту в Telegram и нажми подключить ещё раз." },404);
    const chat = setup.message.chat;
    const chatId = String(chat.id || "").trim();
    if (!chatId) return json({ error:"Не удалось определить Telegram chat_id." },500);
    const label = chat.username ? "@" + chat.username : [chat.first_name, chat.last_name].filter(Boolean).join(" ") || "Личный Telegram";
    await setAppSetting(env, "telegram_chat_id", chatId);
    await setAppSetting(env, "telegram_chat_label", label);
    const sent = await sendTelegram(env, [
      "✅ AuraFX подключён к Telegram",
      "Теперь сюда будут приходить новые заявки и важные события сайта.",
      "",
      "Админка: " + adminLink(request)
    ].join("\n"), chatId);
    return json({ ok:true, connected:true, chat_label:label, test_sent:Boolean(sent.sent) });
  }

  if (url.pathname === "/api/admin/telegram/test" && request.method === "POST") {
    const result = await sendTelegram(env, [
      "🟣 Тест AuraFX",
      "Telegram-уведомления работают ✅",
      "",
      "Админка: " + adminLink(request)
    ].join("\n"));
    if (!result.sent) return json({ error: result.reason === "not_configured" ? "Telegram ещё не подключён." : "Telegram не принял сообщение. Проверь настройки бота." },502);
    return json({ ok:true });
  }

  if (url.pathname === "/api/admin/telegram/disconnect" && request.method === "POST") {
    if (String(env.TELEGRAM_CHAT_ID || "").trim()) return json({ error:"Chat ID задан через Cloudflare Secret. Удали TELEGRAM_CHAT_ID в настройках Cloudflare, чтобы отключить его." },409);
    await deleteAppSetting(env, "telegram_chat_id");
    await deleteAppSetting(env, "telegram_chat_label");
    return json({ ok:true });
  }

  if (url.pathname === "/api/admin/dashboard" && request.method === "GET") {
    const online = await env.DB.prepare("SELECT COUNT(*) AS n FROM online_visitors WHERE datetime(last_seen) >= datetime('now', '-70 seconds')").first();
    const total = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_visitors").first();
    const today = await env.DB.prepare("SELECT COUNT(*) AS n FROM daily_visitors WHERE day = date('now')").first();
    const views = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_events WHERE event_type='page_view' AND date(created_at)=date('now')").first();
    const contact = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_events WHERE event_type IN ('telegram_click','avito_click') AND date(created_at)=date('now')").first();
    const pricing = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_events WHERE event_type='pricing_select' AND date(created_at)=date('now')").first();
    const caseOpens = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_events WHERE event_type='case_open' AND date(created_at)=date('now')").first();
    const briefs = await env.DB.prepare("SELECT COUNT(*) AS n FROM site_events WHERE event_type='brief_submit' AND date(created_at)=date('now')").first();
    const leadsToday = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads WHERE date(created_at)=date('now')").first();
    const topSource = await env.DB.prepare("SELECT COALESCE(NULLIF(source,''),'Прямой') AS source, COUNT(*) AS n FROM leads GROUP BY COALESCE(NULLIF(source,''),'Прямой') ORDER BY n DESC LIMIT 1").first();
    const pending = await env.DB.prepare("SELECT COUNT(*) AS n FROM reviews WHERE status='pending'").first();
    const rating = await env.DB.prepare("SELECT AVG(rating) AS n FROM reviews WHERE status='approved'").first();
    const rows = await env.DB.prepare("SELECT day, COUNT(*) AS n FROM daily_visitors WHERE day >= date('now','-6 days') GROUP BY day ORDER BY day ASC").all();
    const byDay = new Map((rows.results || []).map(r => [r.day, Number(r.n || 0)]));
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = d.toISOString().slice(0,10);
      days.push({ day:key, label:d.toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit'}), n:byDay.get(key)||0 });
    }
    return json({ metrics:{ online:Number(online?.n||0), total:Number(total?.n||0), today_unique:Number(today?.n||0), views_today:Number(views?.n||0), contact_today:Number(contact?.n||0), pricing_today:Number(pricing?.n||0), case_opens_today:Number(caseOpens?.n||0), briefs_today:Number(briefs?.n||0), leads_today:Number(leadsToday?.n||0), top_source:String(topSource?.source||''), pending_reviews:Number(pending?.n||0), avg_rating:rating?.n == null ? null : Number(rating.n) }, days });
  }

  if (url.pathname === "/api/admin/stats/reset" && request.method === "POST") {
    let body = {}; try { body = await request.json(); } catch {}
    const scope = String(body.scope || "");
    if (scope === "online") {
      await env.DB.prepare("DELETE FROM online_visitors").run();
      return json({ ok:true, scope });
    }
    if (scope === "traffic") {
      await env.DB.prepare("DELETE FROM online_visitors").run();
      await env.DB.prepare("DELETE FROM site_visitors").run();
      await env.DB.prepare("DELETE FROM daily_visitors").run();
      await env.DB.prepare("DELETE FROM site_events").run();
      return json({ ok:true, scope });
    }
    return json({ error:"Неизвестный тип сброса." }, 400);
  }

  if (url.pathname === "/api/admin/promos" && request.method === "GET") {
    const result = await env.DB.prepare(`SELECT id, promo_code AS code, discount_percent AS discount, prize_label AS label, created_at,
      datetime(created_at, '+7 days') AS expires_at, redeemed_at, redeemed_note,
      CASE WHEN redeemed_at IS NOT NULL THEN 'redeemed' WHEN datetime(created_at, '+7 days') <= datetime('now') THEN 'expired' ELSE 'active' END AS status
      FROM promo_spins ORDER BY datetime(created_at) DESC, id DESC LIMIT 50`).all();
    return json({ promos: result.results || [] });
  }

  if (url.pathname === "/api/admin/promo/check" && request.method === "GET") {
    const code = String(url.searchParams.get("code") || "").trim().toUpperCase();
    if (!code || code.length > 80) return json({ error:"Введи корректный промокод." },400);
    const promo = await env.DB.prepare(`SELECT id, promo_code AS code, discount_percent AS discount, prize_label AS label, created_at,
      datetime(created_at, '+7 days') AS expires_at, redeemed_at, redeemed_note,
      CASE WHEN redeemed_at IS NOT NULL THEN 'redeemed' WHEN datetime(created_at, '+7 days') <= datetime('now') THEN 'expired' ELSE 'active' END AS status
      FROM promo_spins WHERE upper(promo_code)=? LIMIT 1`).bind(code).first();
    return json({ promo: promo || null });
  }

  if (url.pathname === "/api/admin/promo/redeem" && request.method === "POST") {
    let body={};try{body=await request.json()}catch{}
    const code=String(body.code||"").trim().toUpperCase();
    const note=normalize(body.note).slice(0,120);
    if(!code||code.length>80)return json({error:"Некорректный промокод."},400);
    const row=await env.DB.prepare(`SELECT id,promo_code,discount_percent,created_at,redeemed_at FROM promo_spins WHERE upper(promo_code)=? LIMIT 1`).bind(code).first();
    if(!row)return json({error:"Промокод не существует."},404);
    if(row.redeemed_at)return json({error:"Этот промокод уже был погашен."},409);
    const expired=await env.DB.prepare("SELECT CASE WHEN datetime(?, '+7 days') <= datetime('now') THEN 1 ELSE 0 END AS expired").bind(row.created_at).first();
    if(Number(expired?.expired||0)===1)return json({error:"Срок действия этого промокода уже истёк."},409);
    await env.DB.prepare("UPDATE promo_spins SET redeemed_at=datetime('now'), redeemed_note=? WHERE id=? AND redeemed_at IS NULL").bind(note||null,Number(row.id)).run();
    const promo=await env.DB.prepare(`SELECT id,promo_code AS code,discount_percent AS discount,prize_label AS label,created_at,datetime(created_at,'+7 days') AS expires_at,redeemed_at,redeemed_note,'redeemed' AS status FROM promo_spins WHERE id=?`).bind(Number(row.id)).first();
    queueTelegram(ctx, env, [
      "✅ Промокод погашен",
      "Код: " + promo.code,
      "Скидка: " + promo.discount + "%",
      "Заметка: " + (promo.redeemed_note || "—"),
      "",
      "Админка: " + adminLink(request)
    ].join("\n"));
    return json({ok:true,promo});
  }

  if (url.pathname === "/api/admin/promo/reset-mine" && request.method === "POST") {
    const ipHash = await hashIp(request);
    const rows = await env.DB.prepare(`SELECT id,promo_code FROM promo_spins WHERE ip_hash=? AND datetime(created_at) > datetime('now','-7 days') ORDER BY datetime(created_at) DESC,id DESC`).bind(ipHash).all();
    const items = rows.results || [];
    if (items.length) await env.DB.prepare("DELETE FROM promo_spins WHERE ip_hash=? AND datetime(created_at) > datetime('now','-7 days')").bind(ipHash).run();
    return json({ok:true,removed:items.length,codes:items.map(x=>x.promo_code)});
  }

  if (url.pathname === "/api/admin/promo/reset-code" && request.method === "POST") {
    let body={};try{body=await request.json()}catch{}
    const code=String(body.code||"").trim().toUpperCase();
    if(!code||code.length>80)return json({error:"Некорректный промокод."},400);
    const row=await env.DB.prepare("SELECT id,promo_code,ip_hash FROM promo_spins WHERE upper(promo_code)=? LIMIT 1").bind(code).first();
    if(!row)return json({error:"Промокод не найден."},404);
    await env.DB.prepare("DELETE FROM promo_spins WHERE id=?").bind(Number(row.id)).run();
    return json({ok:true,removed:1,code:String(row.promo_code||code)});
  }

  if (url.pathname === "/api/admin/leads" && request.method === "GET") {
    const result=await env.DB.prepare("SELECT id,marketplace,count,product,style,deadline,contact,comment,status,source,medium,campaign,content,referrer,landing,created_at FROM leads ORDER BY datetime(created_at) DESC,id DESC LIMIT 300").all();
    return json({leads:result.results||[]});
  }
  const leadMatch=url.pathname.match(/^\/api\/admin\/leads\/(\d+)$/);
  if(leadMatch && request.method==="PATCH"){
    let body={};try{body=await request.json()}catch{}
    if(!["new","contacted","done","spam"].includes(body.status))return json({error:"Недопустимый статус."},400);
    await env.DB.prepare("UPDATE leads SET status=? WHERE id=?").bind(body.status,Number(leadMatch[1])).run();
    return json({ok:true});
  }

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
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/reviews") return handlePublicReviews(request, env, ctx);
    if (url.pathname === "/api/online") return handleOnline(request, env);
    if (url.pathname === "/api/event") return handleSiteEvent(request, env);
    if (url.pathname === "/api/promo") return handlePromo(request, env, ctx);
    if (url.pathname === "/api/lead") return handleLead(request, env, ctx);
    if (url.pathname.startsWith("/api/admin/")) return handleAdminApi(request, env, url, ctx);

    if (url.pathname === "/privacy" || url.pathname === "/privacy/") {
      return new Response(PRIVACY_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600" } });
    }

    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      return new Response(ADMIN_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }

    const response = await env.ASSETS.fetch(request);
    if ((url.pathname === "/" || url.pathname === "/index.html") && response.headers.get("content-type")?.includes("text/html")) {
      return new HTMLRewriter()
        .on("head", { element(element) { element.append(`<meta name="description" content="AuraFX — дизайн карточек товаров для маркетплейсов. Портфолио, тарифы, отзывы и быстрый заказ."><meta name="theme-color" content="#0b0612"><meta name="color-scheme" content="dark"><meta property="og:site_name" content="AuraFX"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop stop-color=%22%2358e6ff%22/%3E%3Cstop offset=%221%22 stop-color=%22%23a53cff%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%2264%22 height=%2264%22 rx=%2218%22 fill=%22%230b0612%22/%3E%3Cpath d=%22M16 46 29 16h6l13 30h-8l-2.5-6H26L23.5 46zm12.5-13h6.4L31.7 24z%22 fill=%22url(%23g)%22/%3E%3C/svg%3E"><meta property="og:title" content="AuraFX — дизайн карточек товаров"><meta property="og:description" content="Дизайн карточек товаров: портфолио, тарифы и заказ онлайн."><meta property="og:type" content="website"><meta property="og:url" content="https://aurafx-site.pages.dev/">`, { html: true }); } })
        .on("body", { element(element) { element.append(PRICING_EFFECT_HTML + PROMO_WHEEL_HTML + SITE_UPGRADES_HTML + REVIEW_WIDGET_HTML + SITE_TOOLS_HTML + PERFORMANCE_HTML + PERFORMANCE_V2_HTML + SCROLL_REVEAL_HTML + MOTION_OVERRIDE_HTML + SMOOTH_MOTION_HTML + SHOWCASE_FLOAT_HTML + PREMIUM_STUDIO_HTML + CASE_STORY_UPGRADE_HTML + CASE_REAL_SLIDES_HTML + BEFORE_AFTER_HTML + WOW_EXPERIENCE_HTML + DIRECT_ORDER_HTML + HEADER_EXCLUSIVE_LOGO_HTML, { html: true }); } })
        .transform(response);
    }
    return response;
  }
};

// direct order button upgrade

// AuraFX Fortune V3.1: exact prize alignment + Fortune quick-jump fix

// AuraFX Admin Fortune Reset: reset current IP cooldown + reset by promo code


// AuraFX Case Story Upgrade: 5-slide case walkthrough with swipe/navigation

// AuraFX Motion + Case Pack V2: rAF Fortune spin, restored top-card float, product-specific 5-slide stories
