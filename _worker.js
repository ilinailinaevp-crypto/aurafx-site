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
  var LOGO_SRC="data:image/webp;base64,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";
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
        .on("body", { element(element) { element.append(PRICING_EFFECT_HTML + PROMO_WHEEL_HTML + SITE_UPGRADES_HTML + REVIEW_WIDGET_HTML + SITE_TOOLS_HTML + PERFORMANCE_HTML + SCROLL_REVEAL_HTML + MOTION_OVERRIDE_HTML + SMOOTH_MOTION_HTML + SHOWCASE_FLOAT_HTML + PREMIUM_STUDIO_HTML + CASE_STORY_UPGRADE_HTML + CASE_REAL_SLIDES_HTML + BEFORE_AFTER_HTML + DIRECT_ORDER_HTML + HEADER_EXCLUSIVE_LOGO_HTML, { html: true }); } })
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
