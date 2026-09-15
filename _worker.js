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
  .afx-logo-safe-img{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:inherit!important;display:block!important;z-index:5!important;pointer-events:none!important;}

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
      /* Fast bounded search: only elements near the top-left, once after first paint. */
      var nodes=document.querySelectorAll('header *, nav *, body > *');
      var best=null,bestScore=1e9;
      for(var i=0;i<nodes.length && i<180;i++){
        var el=nodes[i];
        if(el.dataset && el.dataset.afxLogoSafe==='1')return true;
        var t=(el.textContent||'').replace(/\s+/g,' ').trim();
        if(t!=='A')continue;
        var r=el.getBoundingClientRect();
        if(r.top<0||r.top>180||r.left<0||r.left>170)continue;
        if(r.width<34||r.width>90||r.height<34||r.height>90)continue;
        var s=Math.abs(r.width-r.height)+Math.abs(r.width-58)+r.left*.05+r.top*.05;
        if(s<bestScore){best=el;bestScore=s}
      }
      if(!best)return false;
      best.dataset.afxLogoSafe='1';
      best.classList.add('afx-logo-safe-target');
      best.innerHTML='<img class="afx-logo-safe-img" src="'+LOGO_SRC+'" alt="AuraFX" decoding="async">';
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
        .on("body", { element(element) { element.append(PRICING_EFFECT_HTML + PROMO_WHEEL_HTML + SITE_UPGRADES_HTML + REVIEW_WIDGET_HTML + SITE_TOOLS_HTML + PERFORMANCE_HTML + SCROLL_REVEAL_HTML + MOTION_OVERRIDE_HTML + SMOOTH_MOTION_HTML + SHOWCASE_FLOAT_HTML + PREMIUM_STUDIO_HTML + CASE_STORY_UPGRADE_HTML + CASE_REAL_SLIDES_HTML + DIRECT_ORDER_HTML + HEADER_EXCLUSIVE_LOGO_HTML, { html: true }); } })
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
