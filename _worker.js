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
  #afx-audit-jump, #afx-pricing-jump, #afx-channel-jump, #afx-cases-jump, #afx-fortune-jump{
    appearance:none;border:1px solid rgba(162,85,255,.30);cursor:pointer;text-decoration:none;
    background:linear-gradient(135deg,rgba(151,61,255,.88),rgba(90,42,214,.9));
    box-shadow:0 10px 34px rgba(106,43,224,.28),inset 0 1px rgba(255,255,255,.12);
    transition:transform .2s ease,box-shadow .2s ease;
    justify-content:center;
  }
  #afx-audit-jump{
    border-color:rgba(104,238,194,.32);
    background:linear-gradient(135deg,rgba(50,202,155,.92),rgba(121,66,238,.92));
    box-shadow:0 10px 34px rgba(64,189,157,.22),inset 0 1px rgba(255,255,255,.14);
  }
  #afx-audit-jump:hover{box-shadow:0 12px 42px rgba(66,211,171,.30),inset 0 1px rgba(255,255,255,.16)}
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
  #afx-audit-jump:active, #afx-pricing-jump:active, #afx-channel-jump:active, #afx-cases-jump:active, #afx-fortune-jump:active{transform:scale(.97)}
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
    #afx-audit-jump,#afx-pricing-jump,#afx-channel-jump,#afx-cases-jump,#afx-fortune-jump{padding-left:12px;padding-right:12px}
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
  <button class="afx-tool-pill" id="afx-audit-jump" type="button">🎁 Бесплатный разбор</button>
  <button class="afx-tool-pill" id="afx-pricing-jump" type="button">⚡ Тарифы</button>
  <a class="afx-tool-pill" id="afx-channel-jump" href="https://t.me/AuraFX_design" target="_blank" rel="noopener">✈ Канал</a>
  <button class="afx-tool-pill" id="afx-cases-jump" type="button">🔥 Кейсы</button>
  <button class="afx-tool-pill" id="afx-fortune-jump" type="button">🎡 Фортуна</button>
</div>
<script>
(function(){
  var onlineText=document.getElementById('afx-online-text');
  var totalText=document.getElementById('afx-total-text');
  var auditJump=document.getElementById('afx-audit-jump');
  var jump=document.getElementById('afx-pricing-jump');
  var channel=document.getElementById('afx-channel-jump');
  var casesJump=document.getElementById('afx-cases-jump');
  var fortuneJump=document.getElementById('afx-fortune-jump');
  if(!onlineText||!totalText||!auditJump||!jump||!channel||!casesJump||!fortuneJump)return;

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

  auditJump.addEventListener('click',function(){
    var open=document.getElementById('afx-open-brief');
    if(open){open.click();return}
    var cta=document.getElementById('afx-premium-cta');
    if(cta)cta.scrollIntoView({behavior:'smooth',block:'center'});
  });

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
    <div class="afx-premium-kicker">AuraFX / Бесплатный mini-audit</div>
    <h2 class="afx-premium-title">Покажи карточку — найдём, что мешает ей цеплять.</h2>
    <p class="afx-premium-copy">Пришли ссылку, название товара или текущую карточку. AuraFX сделает бесплатный мини-разбор: 3 точки роста, идея первого слайда и рекомендации по визуальной подаче. Без оплаты и обязательств.</p>
    <div class="afx-premium-actions">
      <button class="afx-premium-btn" id="afx-open-brief" type="button">Получить бесплатный разбор →</button>
      <a class="afx-premium-btn secondary" href="https://t.me/AuraFX_marketplace" target="_blank" rel="noopener">Сразу заказать дизайн ↗</a>
    </div>
    <div class="afx-premium-trust"><span>Бесплатно</span><span>Форма ≈ 60 секунд</span><span>WB / Ozon / Avito</span><span>Без регистрации</span></div>
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
          <button class="afx-premium-btn" id="afx-case-order" type="button">Разобрать мою карточку →</button>
        </div>
        <div class="afx-case-nav"><button id="afx-case-prev" type="button">← Предыдущий</button><button id="afx-case-next" type="button">Следующий →</button></div>
      </div>
    </div>
  </div>
</div>

<div class="afx-premium-modal" id="afx-brief-modal" aria-hidden="true">
  <div class="afx-premium-dialog afx-brief-dialog" role="dialog" aria-modal="true" aria-label="Бриф AuraFX">
    <button class="afx-modal-close" type="button" data-close-modal aria-label="Закрыть">×</button>
    <div class="afx-brief-kicker">Бесплатный разбор AuraFX</div>
    <h3 class="afx-brief-title">Разберём твою карточку</h3>
    <p class="afx-brief-sub">Оставь товар и контакт. Мы посмотрим, где теряется внимание, и подскажем, как усилить первый экран и визуальную подачу.</p>
    <form id="afx-brief-form">
      <div class="afx-brief-grid">
        <label class="afx-field">Площадка
          <select name="marketplace"><option>Wildberries</option><option>Ozon</option><option>Avito</option><option>Другое</option></select>
        </label>
        <label class="afx-field">Как связаться?
          <input name="contact" maxlength="100" placeholder="Telegram @username / Avito" required>
        </label>
        <label class="afx-field full">Ссылка или название товара
          <input name="product" maxlength="180" placeholder="Ссылка на карточку или, например, беспроводные наушники" required>
        </label>
        <input name="count" type="hidden" value="1">
        <input name="style" type="hidden" value="Бесплатный мини-разбор">
        <input name="deadline" type="hidden" value="">
        <label class="afx-field full">Что хочешь улучшить? <span style="opacity:.55;font-weight:600">необязательно</span>
          <textarea name="comment" maxlength="500" placeholder="Например: мало кликов, карточка выглядит просто, нужен сильнее первый слайд"></textarea>
        </label>
      </div>
      <div class="afx-brief-actions">
        <button class="afx-premium-btn" type="submit">Получить бесплатный разбор →</button>
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
      if(field&&!field.value)field.value='Понравился стиль кейса: '+caseName+'. Хочу понять, как применить похожую логику к моей карточке. ';
    }
    openModal(briefModal);track('brief_open',caseName||'free_audit');track('audit_open',caseName||'free_audit');
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
      count:1,
      product:String(f.get('product')||''),
      style:'Бесплатный мини-разбор',
      deadline:'',
      contact:String(f.get('contact')||''),
      comment:('[Бесплатный мини-разбор] '+String(f.get('comment')||'')).slice(0,500),
      source:String(attr.source||'site'),medium:String(attr.medium||'website'),campaign:String(attr.campaign||'free_audit'),
      content:String(attr.content||''),term:String(attr.term||''),referrer:String(attr.referrer||''),landing:String(attr.landing||''),referral_code:(()=>{try{return localStorage.getItem('afx_referral_code')||''}catch(e){return ''}})()
    };
    btn.disabled=true;status.textContent='Отправляю заявку…';
    try{
      var res=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(payload)});
      var data=await res.json();
      if(!res.ok)throw new Error(data.error||'Не удалось сохранить заявку');
      status.textContent='Заявка №'+data.id+' на бесплатный разбор отправлена ✓ AuraFX получил её и свяжется по указанному контакту.';
      track('brief_submit',payload.marketplace+' / free_audit');track('audit_submit',payload.marketplace);
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
    try{var activeReward=localStorage.getItem('afx_referral_reward_code')||'';if(activeReward){var rb=document.createElement('div');rb.style.cssText='margin:0 0 12px;padding:11px 13px;border:1px solid rgba(83,225,177,.22);border-radius:13px;background:rgba(34,167,119,.08);color:#a9f5d7;font-size:12px;font-weight:800';rb.textContent='🎁 Реферальный бонус активирован: 1 карточка бесплатно · '+activeReward;actions.insertBefore(rb,btn)}}catch(e){}
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
      var payload={visitor_id:visitorId(),marketplace:marketplace||'Другое',count:count,product:product.slice(0,100),style:tariff.slice(0,80),deadline:'',contact:contact.slice(0,100),comment:(promoLine()+'Имя: '+name+'. Заявка отправлена через основную форму сайта.').slice(0,600),source:at.source||'',medium:at.medium||'',campaign:at.campaign||'',content:at.content||'',term:at.term||'',referrer:document.referrer||'',landing:location.href,referral_code:(function(){try{return localStorage.getItem('afx_referral_code')||''}catch(e){return ''}})(),referral_reward_code:(function(){try{return localStorage.getItem('afx_referral_reward_code')||''}catch(e){return ''}})()};
      btn.disabled=true;btn.textContent='Отправляю…';status.textContent='Сохраняю заявку и отправляю уведомление…';
      try{
        var res=await fetch('/api/lead',{method:'POST',headers:{'content-type':'application/json',accept:'application/json'},body:JSON.stringify(payload)});
        var data=await res.json();if(!res.ok)throw new Error(data.error||'Не удалось отправить заявку');
        status.className='afx-direct-order-status ok';status.textContent='Заявка №'+(data.id||'')+' отправлена ✓ AuraFX получил уведомление.'+(data.reward_applied?' 🎁 Реферальный бонус применён.':'');
        if(data.reward_applied){try{localStorage.removeItem('afx_referral_reward_code')}catch(e){}}
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
        <button class="afx-ba-cta" id="afx-ba-cta" type="button">Получить бесплатный разбор →</button>
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
  cta.addEventListener('click',function(){var open=document.getElementById('afx-open-brief');if(open){open.click();return}var target=document.getElementById('afx-premium-cta');if(target)target.scrollIntoView({behavior:'smooth',block:'center'})});
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
  #afx-before-after,#afx-why-studio,#afx-smart-order,#afx-promo-lab,#afx-faq,#aurafx-reviews{content-visibility:auto;contain-intrinsic-size:auto 760px}
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

const PREMIUM_INTERACTIVE_HTML = String.raw`
<style>
  :root{--afx-wow-purple:#a855f7;--afx-wow-cyan:#62e7ff;--afx-wow-bg:#09050f}
  .afx-wow-wrap{width:min(1160px,calc(100% - 40px));margin:auto}
  .afx-wow-kicker{display:inline-flex;align-items:center;gap:9px;color:#d9cae8;font:850 11px/1 system-ui,sans-serif;letter-spacing:.16em;text-transform:uppercase}
  .afx-wow-kicker i{width:8px;height:8px;border-radius:50%;background:#65e7ff;box-shadow:0 0 16px rgba(101,231,255,.65)}
  .afx-wow-title{margin:18px 0 12px;font-size:clamp(38px,6vw,72px);line-height:.94;letter-spacing:-.055em;font-weight:950}
  .afx-wow-title em{font-style:normal;color:#bd7cff}
  .afx-wow-sub{max-width:620px;margin:0;color:#a99db4;font-size:15px;line-height:1.65}
  .afx-wow-card{border:1px solid rgba(255,255,255,.09);background:linear-gradient(145deg,rgba(255,255,255,.05),rgba(255,255,255,.022));border-radius:30px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.22)}

  /* 3. Why / BTS / lightweight motion reel */
  #afx-why-studio{padding:96px 0;color:#fff;background:linear-gradient(180deg,rgba(8,4,14,0),rgba(25,8,45,.28),rgba(8,4,14,0))}
  .afx-why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:30px}
  .afx-proof-card{border:1px solid rgba(255,255,255,.08);border-radius:21px;padding:20px;background:rgba(255,255,255,.028);cursor:pointer;transition:.22s;min-height:160px}
  .afx-proof-card:hover,.afx-proof-card.active{transform:translateY(-4px);border-color:rgba(172,82,255,.35);background:rgba(168,85,247,.07)}
  .afx-proof-card i{font-style:normal;color:#b77cff;font-size:11px;font-weight:900} .afx-proof-card b{display:block;font-size:17px;margin-top:28px} .afx-proof-card span{display:block;color:#8d8297;font-size:11px;line-height:1.55;margin-top:8px}
  .afx-bts-grid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:18px}
  .afx-bts{padding:26px} .afx-bts h3{margin:0 0 18px;font-size:24px}
  .afx-bts-row{display:grid;grid-template-columns:36px 1fr;gap:12px;padding:13px 0;border-top:1px solid rgba(255,255,255,.06)} .afx-bts-row:first-of-type{border-top:0} .afx-bts-row i{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;background:rgba(168,85,247,.11);font-style:normal;font-size:10px;font-weight:900;color:#c696ff} .afx-bts-row b{display:block;font-size:13px} .afx-bts-row span{display:block;margin-top:3px;color:#80758a;font-size:10px;line-height:1.4}

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
  .afx-transform-step{transition:color .22s ease,transform .22s ease,background .22s ease,padding-left .22s ease;border-color .22s ease}.afx-transform-step.active{color:#fff;transform:translateX(4px);padding-left:7px;border-color:rgba(171,81,255,.24);background:linear-gradient(90deg,rgba(168,85,247,.09),transparent)}.afx-transform-step.active b{background:linear-gradient(135deg,#b25cff,#6d38e9);color:#fff;box-shadow:0 0 18px rgba(168,85,247,.28)}
  @media(max-width:900px){.afx-bts-grid,.afx-order-shell{grid-template-columns:1fr}.afx-why-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.afx-wow-wrap{width:min(100% - 28px,1160px)}#afx-why-studio,#afx-smart-order{padding:72px 0}.afx-wow-title{font-size:44px}.afx-why-grid,.afx-order-options{grid-template-columns:1fr}.afx-order-main,.afx-order-aside{padding:20px}}
</style>
<div id="afx-pointer-glow" aria-hidden="true"></div>

<section id="afx-why-studio" aria-labelledby="afx-why-title"><div class="afx-wow-wrap"><div class="afx-wow-kicker"><i></i> Почему AuraFX</div><h2 class="afx-wow-title" id="afx-why-title">Красиво — это только <em>половина задачи</em></h2><p class="afx-wow-sub">Каждый элемент должен помогать покупателю быстрее понять товар. Нажми на карточки — они раскрывают логику дизайна.</p><div class="afx-why-grid"><div class="afx-proof-card active"><i>01</i><b>Фокус за 2 секунды</b><span>Первый экран быстро объясняет, что продаётся и куда смотреть.</span></div><div class="afx-proof-card"><i>02</i><b>УТП без перегруза</b><span>Характеристики превращаются в короткие визуальные акценты.</span></div><div class="afx-proof-card"><i>03</i><b>Цельная серия</b><span>Обложка и продолжения говорят на одном визуальном языке.</span></div><div class="afx-proof-card"><i>04</i><b>Под площадку</b><span>Подача адаптируется под Wildberries, Ozon, Avito и задачу товара.</span></div></div><div class="afx-bts-grid afx-bts-grid-single"><div class="afx-wow-card afx-bts"><h3>За кулисами</h3><div class="afx-bts-row"><i>01</i><div><b>Иерархия</b><span>Что покупатель увидит первым, вторым и третьим.</span></div></div><div class="afx-bts-row"><i>02</i><div><b>Композиция</b><span>Товар, свободное пространство и текст собираются в один кадр.</span></div></div><div class="afx-bts-row"><i>03</i><div><b>Типографика</b><span>Размеры и контраст помогают читать карточку на маленьком экране.</span></div></div><div class="afx-bts-row"><i>04</i><div><b>Серия</b><span>Следующие слайды продолжают историю, а не повторяют обложку.</span></div></div></div></div></div></section>

<section id="afx-smart-order" aria-labelledby="afx-order-title"><div class="afx-wow-wrap"><div class="afx-wow-kicker"><i></i> Умная заявка</div><h2 class="afx-wow-title" id="afx-order-title">Собери задачу за <em>30 секунд</em></h2><p class="afx-wow-sub">Ответь на несколько вопросов — сайт предложит стиль и перенесёт ответы в готовую заявку.</p><div class="afx-order-shell"><aside class="afx-wow-card afx-order-aside"><h3>Мини-консультация</h3><p>Не нужно знать дизайнерские термины. Выбирай то, что ближе товару — мы соберём направление.</p><div class="afx-order-meter"><span class="done"></span><span></span><span></span><span></span></div></aside><div class="afx-wow-card afx-order-main"><div class="afx-order-step active" data-step="0"><small>Шаг 1 / 4</small><h3>Где продаёшь?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="Wildberries">Wildberries</button><button class="afx-order-option" data-value="Ozon">Ozon</button><button class="afx-order-option" data-value="Avito">Avito</button><button class="afx-order-option" data-value="Другое">Другая площадка</button></div></div><div class="afx-order-step" data-step="1"><small>Шаг 2 / 4</small><h3>Что за товар?</h3><input class="afx-order-input" id="afx-order-product" maxlength="90" placeholder="Например: беспроводные наушники"><div class="afx-order-options" style="margin-top:10px"><button class="afx-order-option" data-value="tech">Технологичный / гаджет</button><button class="afx-order-option" data-value="fashion">Одежда / аксессуар</button><button class="afx-order-option" data-value="beauty">Beauty / lifestyle</button><button class="afx-order-option" data-value="universal">Универсальный товар</button></div></div><div class="afx-order-step" data-step="2"><small>Шаг 3 / 4</small><h3>Какое впечатление нужно?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="premium">Дорого и спокойно</button><button class="afx-order-option" data-value="minimal">Чисто и минималистично</button><button class="afx-order-option" data-value="market">Ярко и заметно</button><button class="afx-order-option" data-value="auto">Доверяю AuraFX</button></div></div><div class="afx-order-step" data-step="3"><small>Шаг 4 / 4</small><h3>Сколько карточек?</h3><div class="afx-order-options"><button class="afx-order-option" data-value="1">1 карточка</button><button class="afx-order-option" data-value="3">3 карточки</button><button class="afx-order-option" data-value="6">Полный кейс · 6</button><button class="afx-order-option" data-value="10">Большая серия · 10</button></div><div class="afx-order-result" id="afx-order-result" style="display:none"><b></b><span></span></div></div><div class="afx-order-nav"><button class="afx-order-back" id="afx-order-back" type="button">← Назад</button><button class="afx-order-next" id="afx-order-next" type="button">Дальше →</button></div></div></div></div></section>

<script>
(function(){
  var DESIGN_SRC='data:image/webp;base64,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';
  [].slice.call(document.querySelectorAll('[data-wow-design]')).forEach(function(img){img.src=DESIGN_SRC;img.decoding='async';img.loading='lazy'});

  /* Keep premium interactive blocks directly after Before/After. */
  function placePremium(){var anchor=document.getElementById('afx-before-after');if(!anchor||!anchor.parentNode)return;var parent=anchor.parentNode,ref=anchor.nextSibling;['afx-why-studio','afx-smart-order'].forEach(function(id){var el=document.getElementById(id);if(el&&el.parentNode===parent)parent.insertBefore(el,ref)});}
  setTimeout(placePremium,350);setTimeout(placePremium,1050);setTimeout(placePremium,1800);

  /* Interactive reasons */
  [].slice.call(document.querySelectorAll('.afx-proof-card')).forEach(function(c){c.addEventListener('click',function(){[].slice.call(document.querySelectorAll('.afx-proof-card')).forEach(function(x){x.classList.toggle('active',x===c)})})});

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

const FUNCTION_NAV_HTML = String.raw`
<style>
  #afx-function-nav{position:fixed;left:50%;top:82px;transform:translate(-50%,-14px);width:min(1120px,calc(100% - 24px));z-index:46;opacity:0;pointer-events:none;transition:opacity .24s ease,transform .28s cubic-bezier(.2,.8,.2,1);font-family:inherit}
  #afx-function-nav.is-visible{opacity:1;pointer-events:auto;transform:translate(-50%,0)}
  .afx-fnav-shell{display:flex;align-items:center;gap:8px;padding:8px;min-width:0;overflow:hidden;border-radius:20px;border:1px solid rgba(255,255,255,.11);background:rgba(12,7,20,.80);box-shadow:0 16px 54px rgba(0,0,0,.34),inset 0 1px rgba(255,255,255,.055);backdrop-filter:blur(20px) saturate(1.2);-webkit-backdrop-filter:blur(20px) saturate(1.2)}
  .afx-fnav-brand{flex:0 0 auto;display:flex;align-items:center;gap:8px;padding:0 9px 0 7px;color:#cabbd8;font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
  .afx-fnav-brand i{width:8px;height:8px;border-radius:50%;background:#b962ff;box-shadow:0 0 18px rgba(185,98,255,.8)}
  .afx-fnav-scroll{display:flex;gap:7px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;touch-action:pan-y;min-width:0;width:0;max-width:100%;flex:1 1 0;cursor:grab;user-select:none;-webkit-user-select:none;mask-image:linear-gradient(90deg,transparent 0,#000 14px,#000 calc(100% - 14px),transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 14px,#000 calc(100% - 14px),transparent 100%);padding:1px 14px}
  .afx-fnav-scroll.is-dragging{cursor:grabbing;scroll-behavior:auto}
  .afx-fnav-scroll::-webkit-scrollbar{display:none}
  .afx-fnav-chip{appearance:none;border:1px solid rgba(255,255,255,.085);background:rgba(255,255,255,.04);color:#c8bdcf;border-radius:14px;padding:10px 12px;display:inline-flex;align-items:center;gap:7px;white-space:nowrap;font:800 12px/1 inherit;cursor:pointer;text-decoration:none;transition:transform .16s ease,background .2s ease,border-color .2s ease,color .2s ease,box-shadow .2s ease;flex:0 0 auto}
  .afx-fnav-chip:hover{background:rgba(255,255,255,.075);border-color:rgba(190,121,255,.24);color:#fff;transform:translateY(-1px)}
  .afx-fnav-chip.is-active{color:#fff;border-color:rgba(191,110,255,.44);background:linear-gradient(135deg,rgba(179,83,255,.25),rgba(86,45,188,.21));box-shadow:0 8px 24px rgba(112,54,217,.18),inset 0 1px rgba(255,255,255,.08)}
  .afx-fnav-chip span{font-size:13px;line-height:1}
  .afx-fnav-close{flex:0 0 auto;width:36px;height:36px;border-radius:12px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.035);color:#9f93aa;display:grid;place-items:center;cursor:pointer;font:900 18px/1 inherit;transition:.18s ease}
  .afx-fnav-close:hover{color:#fff;background:rgba(255,255,255,.07)}
  #afx-function-nav.is-collapsed{width:auto;left:auto;right:12px;transform:translateY(0);opacity:1;pointer-events:auto}
  #afx-function-nav.is-collapsed .afx-fnav-shell{padding:6px;border-radius:17px}
  #afx-function-nav.is-collapsed .afx-fnav-brand,#afx-function-nav.is-collapsed .afx-fnav-scroll{display:none}
  #afx-function-nav.is-collapsed .afx-fnav-close{width:auto;padding:0 12px;font-size:12px;gap:6px}
  #afx-function-nav.is-collapsed .afx-fnav-close:before{content:'☰';font-size:15px}
  #afx-function-nav.is-collapsed .afx-fnav-close:after{content:'Навигация'}
  [data-afx-nav-target],#prices,#services,#portfolio,#contact{scroll-margin-top:160px}
  @media(max-width:760px){
    #afx-function-nav{top:68px;width:calc(100% - 16px)}
    .afx-fnav-shell{border-radius:17px;padding:6px;gap:4px}
    .afx-fnav-brand{display:none}
    .afx-fnav-scroll{padding:1px 7px;gap:6px;min-width:0;width:0;max-width:100%;touch-action:pan-y;overscroll-behavior-x:contain;mask-image:linear-gradient(90deg,transparent 0,#000 8px,#000 calc(100% - 8px),transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 8px,#000 calc(100% - 8px),transparent 100%)}
    .afx-fnav-chip{padding:9px 10px;border-radius:12px;font-size:11px}
    .afx-fnav-chip span{font-size:12px}
    .afx-fnav-close{width:34px;height:34px;border-radius:11px}
    #afx-function-nav.is-collapsed{top:70px;right:8px}
  }
  @media(prefers-reduced-motion:reduce){#afx-function-nav,.afx-fnav-chip{transition:none}}
</style>
<nav id="afx-function-nav" aria-label="Навигация по функциям AuraFX">
  <div class="afx-fnav-shell">
    <div class="afx-fnav-brand"><i></i>Навигатор</div>
    <div class="afx-fnav-scroll" id="afx-fnav-scroll"></div>
    <button class="afx-fnav-close" id="afx-fnav-toggle" type="button" aria-label="Свернуть навигацию">×</button>
  </div>
</nav>
<script>
(function(){
  var nav=document.getElementById('afx-function-nav');
  var strip=document.getElementById('afx-fnav-scroll');
  var toggle=document.getElementById('afx-fnav-toggle');
  if(!nav||!strip||!toggle)return;

  function byText(rx){
    var all=[].slice.call(document.querySelectorAll('section,main,div'));
    for(var i=0;i<all.length;i++){
      var el=all[i];
      if(el.id==='afx-function-nav'||el.closest&&el.closest('#afx-function-nav'))continue;
      var h=el.querySelector&&el.querySelector(':scope > h1,:scope > h2,:scope > h3,.section-title,.pricing-title');
      var txt=(h?h.textContent:el.getAttribute&&el.getAttribute('aria-label')||'').trim();
      if(txt&&rx.test(txt))return el;
    }
    return null;
  }
  function first(){for(var i=0;i<arguments.length;i++){var el=arguments[i];if(el)return el}return null}
  var items=[
    {icon:'⌂',label:'Главная',el:first(document.querySelector('main'),document.body.firstElementChild)},
    {icon:'✦',label:'Услуги',el:document.getElementById('services')},
    {icon:'▣',label:'Кейсы',el:document.getElementById('portfolio')},
    {icon:'↔',label:'До / после',el:document.getElementById('afx-before-after')},
    {icon:'◎',label:'Почему AuraFX',el:document.getElementById('afx-why-studio')},
    {icon:'🎡',label:'Фортуна',el:document.getElementById('afx-promo-lab')},
    {icon:'₽',label:'Тарифы',el:first(document.getElementById('afx-pricing-section'),byText(/тариф|цены|пакет|стоим/i))},
    {icon:'★',label:'Отзывы',el:document.getElementById('aurafx-reviews')},
    {icon:'?',label:'FAQ',el:document.getElementById('afx-faq')},
    {icon:'⚡',label:'Заявка',el:document.getElementById('afx-smart-order')},
    {icon:'✈',label:'Telegram',el:document.getElementById('afx-telegram-channel')},
    {icon:'→',label:'Контакты',el:document.getElementById('contact')}
  ].filter(function(x){return !!x.el});

  items.forEach(function(item,idx){
    if(!item.el.id)item.el.id='afx-nav-section-'+idx;
    item.el.setAttribute('data-afx-nav-target','1');
    if(item.label==='Тарифы'&&item.el.id!=='afx-pricing-section')item.el.setAttribute('data-afx-pricing-target','1');
    var b=document.createElement('button');
    b.type='button'; b.className='afx-fnav-chip'; b.dataset.target=item.el.id;
    b.innerHTML='<span>'+item.icon+'</span>'+item.label;
    b.addEventListener('click',function(){
      var t=document.getElementById(this.dataset.target); if(!t)return;
      t.scrollIntoView({behavior:'smooth',block:'start'});
    });
    strip.appendChild(b); item.btn=b;
  });

  var collapsed=false;
  try{
    var savedNavState=sessionStorage.getItem('afx_nav_collapsed');
    collapsed=savedNavState===null?matchMedia('(max-width:760px)').matches:savedNavState==='1';
  }catch(e){collapsed=matchMedia('(max-width:760px)').matches}
  function applyCollapsed(){
    nav.classList.toggle('is-collapsed',collapsed);
    toggle.setAttribute('aria-label',collapsed?'Открыть навигацию':'Свернуть навигацию');
    toggle.textContent=collapsed?'':'×';
  }
  applyCollapsed();
  toggle.addEventListener('click',function(){
    collapsed=!collapsed; applyCollapsed();
    try{sessionStorage.setItem('afx_nav_collapsed',collapsed?'1':'0')}catch(e){}
  });

  /* AuraFX Mobile Nav Swipe V2: explicit drag so Android/iOS webviews cannot steal horizontal navigation. */
  var suppressNavClick=false,mouseDragging=false,mouseStartX=0,mouseStartLeft=0;
  strip.addEventListener('mousedown',function(e){
    if(e.button!==0)return;
    mouseDragging=true;suppressNavClick=false;mouseStartX=e.clientX;mouseStartLeft=strip.scrollLeft;strip.classList.add('is-dragging');
    e.preventDefault();
  });
  window.addEventListener('mousemove',function(e){
    if(!mouseDragging)return;
    var dx=e.clientX-mouseStartX;
    if(Math.abs(dx)>4)suppressNavClick=true;
    strip.scrollLeft=mouseStartLeft-dx;
  });
  function stopMouseDrag(){if(!mouseDragging)return;mouseDragging=false;strip.classList.remove('is-dragging');if(suppressNavClick)setTimeout(function(){suppressNavClick=false},220)}
  window.addEventListener('mouseup',stopMouseDrag);window.addEventListener('blur',stopMouseDrag);

  var touchStartX=0,touchStartY=0,touchStartLeft=0,touchHorizontal=false,touchMoved=false;
  strip.addEventListener('touchstart',function(e){
    if(!e.touches||e.touches.length!==1)return;
    var t=e.touches[0];touchStartX=t.clientX;touchStartY=t.clientY;touchStartLeft=strip.scrollLeft;touchHorizontal=false;touchMoved=false;
  },{passive:true});
  strip.addEventListener('touchmove',function(e){
    if(!e.touches||e.touches.length!==1)return;
    var t=e.touches[0],dx=t.clientX-touchStartX,dy=t.clientY-touchStartY;
    if(!touchHorizontal&&Math.abs(dx)>6&&Math.abs(dx)>Math.abs(dy)*1.08)touchHorizontal=true;
    if(!touchHorizontal)return;
    touchMoved=true;strip.scrollLeft=touchStartLeft-dx;
    if(e.cancelable)e.preventDefault();
  },{passive:false});
  strip.addEventListener('touchend',function(){if(touchMoved){suppressNavClick=true;setTimeout(function(){suppressNavClick=false},260)}touchHorizontal=false;touchMoved=false},{passive:true});
  strip.addEventListener('touchcancel',function(){touchHorizontal=false;touchMoved=false},{passive:true});
  strip.addEventListener('click',function(e){if(suppressNavClick){e.preventDefault();e.stopPropagation()}},true);
  strip.addEventListener('wheel',function(e){
    if(Math.abs(e.deltaY)>Math.abs(e.deltaX)&&strip.scrollWidth>strip.clientWidth){strip.scrollLeft+=e.deltaY;if(e.cancelable)e.preventDefault()}
  },{passive:false});

  function visibility(){
    if(collapsed){nav.classList.add('is-visible');return}
    nav.classList.toggle('is-visible',window.scrollY>150);
  }
  visibility(); window.addEventListener('scroll',visibility,{passive:true});

  var active=-1, raf=0;
  function updateActive(){
    raf=0; var probe=Math.min(220,innerHeight*.30); var best=-1,dist=1e9;
    items.forEach(function(item,i){
      var r=item.el.getBoundingClientRect();
      var inView=r.top<=probe&&r.bottom>probe;
      var d=inView?0:Math.min(Math.abs(r.top-probe),Math.abs(r.bottom-probe));
      if(d<dist){dist=d;best=i}
    });
    if(best!==active){
      active=best;
      items.forEach(function(x,i){x.btn.classList.toggle('is-active',i===active)});
      var btn=items[active]&&items[active].btn;
      if(btn&&nav.classList.contains('is-visible'))btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    }
  }
  function schedule(){if(!raf)raf=requestAnimationFrame(updateActive)}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  setTimeout(updateActive,80);
})();
</script>
`;

// Approved AuraFX orbit emblem, embedded so the header never depends on external images or client scripts.
const AURAFX_BRAND_LOGO_DATA_URL = "/aurafx-logo.png";
const AURAFX_FAVICON_DATA_URL = "/favicon-64.png";
const AURAFX_BRAND_LOGO_HTML = `<img class="afx-brand-logo" src="${AURAFX_BRAND_LOGO_DATA_URL}" width="36" height="36" alt="" decoding="sync" loading="eager" draggable="false" style="display:block;width:100%;height:100%;object-fit:contain">`;

const HEADER_EXCLUSIVE_LOGO_HTML = String.raw`
<style>
  /* The approved logo is inserted server-side by HTMLRewriter, before the page reaches the browser. */
  .brand .mark{display:block!important;flex:0 0 36px!important;width:36px!important;height:36px!important;border-radius:12px!important;overflow:hidden!important;line-height:0!important;color:inherit!important;font-size:inherit!important;position:relative!important;}
  .brand .mark img{display:block!important;width:100%!important;height:100%!important;object-fit:contain!important;opacity:1!important;}

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
  var ua=navigator.userAgent||'';
  var isiOS=/iP(?:hone|ad|od)/.test(ua) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  if(isiOS)document.documentElement.classList.add('afx-ios');
  setTimeout(function(){
    try{document.querySelectorAll('.afx-reveal-prep').forEach(function(el){el.classList.remove('afx-reveal-prep')})}catch(e){}
  },1400);
})();
</script>`;

const ADMIN_HTML = String.raw`<!doctype html>
<html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AuraFX Admin</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#09050f;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;min-height:100vh}body:before{content:"";position:fixed;inset:-25%;background:radial-gradient(circle at 80% 15%,rgba(139,49,255,.18),transparent 27%),radial-gradient(circle at 15% 82%,rgba(66,224,255,.07),transparent 24%);pointer-events:none}
.wrap{position:relative;max-width:1180px;margin:auto;padding:28px 18px 70px}.top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px}.brand{font-size:25px;font-weight:950}.brand span{background:linear-gradient(90deg,#67e8ff,#b44dff);-webkit-background-clip:text;color:transparent}.sub{color:#8f839d;font-size:13px;margin-top:4px}.top-actions,.actions,.filters{display:flex;gap:8px;flex-wrap:wrap}
.panel,.card{border:1px solid rgba(255,255,255,.095);background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.025));backdrop-filter:blur(18px);box-shadow:0 18px 60px rgba(0,0,0,.22);border-radius:22px}.login{max-width:440px;margin:12vh auto 0;padding:26px}.login h1{margin:0 0 8px;font-size:32px}.login p{margin:0 0 22px;color:#a99db5;line-height:1.55}.remember-login{display:flex;align-items:flex-start;gap:10px;margin:14px 0;padding:12px 13px;border:1px solid rgba(255,255,255,.09);border-radius:14px;background:rgba(255,255,255,.03);color:#ddd3e6;font-size:13px;cursor:pointer}.remember-login input{width:18px;height:18px;flex:0 0 18px;margin:1px 0 0;padding:0;accent-color:#a64bff}.remember-login small{display:block;color:#85798f;margin-top:3px;line-height:1.4}
input,textarea,select{width:100%;border:1px solid rgba(255,255,255,.12);background:#100819;color:#fff;border-radius:14px;padding:14px 15px;font:inherit;outline:none}textarea{resize:vertical;min-height:150px;line-height:1.55}select{appearance:none}input:focus,textarea:focus,select:focus{border-color:#a64bff;box-shadow:0 0 0 4px rgba(164,72,255,.12)}button,a.btn{border:0;border-radius:13px;padding:11px 14px;font:inherit;font-size:13px;font-weight:850;cursor:pointer;color:#fff;background:#251630;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:7px}button:disabled{opacity:.5;cursor:wait}.primary{background:linear-gradient(135deg,#b247ff,#7027ed)}.danger{background:#39151d;color:#ff9cab}.warn{background:#352713;color:#ffd783}.ghost{background:rgba(255,255,255,.06)}.ok{background:#123126;color:#8ff3c6}
.msg{min-height:20px;margin:12px 0 0;color:#ff9aaa;font-size:13px}.section-title{display:flex;justify-content:space-between;align-items:end;gap:12px;margin:30px 0 12px}.section-title h2{margin:0;font-size:22px}.section-title p{margin:0;color:#81758e;font-size:12px}.metrics{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.metric{padding:16px}.metric small{color:#92869e;font-size:11px}.metric b{display:block;font-size:27px;margin-top:6px;letter-spacing:-.03em}.metric em{display:block;color:#746b7f;font-style:normal;font-size:11px;margin-top:3px}
.overview-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:12px}.chart{padding:18px}.bars{height:150px;display:flex;align-items:end;gap:8px;margin-top:18px}.bar-wrap{flex:1;min-width:0;text-align:center}.bar{width:100%;min-height:4px;border-radius:9px 9px 3px 3px;background:linear-gradient(180deg,#b14cff,#6330de);box-shadow:0 0 18px rgba(135,59,240,.18)}.bar-wrap span{display:block;color:#746a80;font-size:10px;margin-top:7px}.quick{padding:18px}.quick h3{margin:0 0 12px}.quick .actions{display:grid;grid-template-columns:1fr 1fr}.system{margin-top:12px;padding:14px;display:flex;justify-content:space-between;align-items:center;color:#9f93aa;font-size:12px}.status-dot{width:8px;height:8px;border-radius:50%;background:#59eeb2;box-shadow:0 0 14px rgba(89,238,178,.7);display:inline-block;margin-right:7px}
.toolbar{display:flex;gap:10px;justify-content:space-between;align-items:center;margin:0 0 12px;flex-wrap:wrap}.filters button.active{background:#7629ee}.review-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px}.review-stat{padding:14px}.review-stat b{display:block;font-size:22px;margin-top:4px}.review-stat small{color:#8f839b}.list{display:grid;gap:10px}.card{padding:18px}.cardtop{display:flex;justify-content:space-between;gap:14px;align-items:start}.name{font-weight:900;font-size:17px}.stars{color:#ffd45c;letter-spacing:1px}.text{color:#ddd5e4;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}.meta{display:flex;gap:8px;align-items:center;flex-wrap:wrap;color:#786e82;font-size:11px}.badge{display:inline-flex;padding:5px 9px;border-radius:999px;font-size:10px;font-weight:850}.approved{background:rgba(55,220,151,.12);color:#82f0be}.pending{background:rgba(255,188,61,.12);color:#ffd06f}.hidden{background:rgba(255,103,128,.12);color:#ff9bac}.new{background:rgba(102,213,255,.12);color:#83e7ff}.contacted{background:rgba(177,91,255,.14);color:#d3a6ff}.review{background:rgba(255,188,61,.12);color:#ffd06f}.revision{background:rgba(255,126,86,.13);color:#ffb08e}.done{background:rgba(55,220,151,.12);color:#82f0be}.spam{background:rgba(255,103,128,.12);color:#ff9bac}.empty{text-align:center;padding:40px 20px;color:#8f829c}.hidden-ui{display:none!important}.toast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(20px);background:#171020;border:1px solid rgba(255,255,255,.1);padding:11px 15px;border-radius:999px;opacity:0;pointer-events:none;transition:.22s;z-index:20;font-size:12px}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.promo-check{padding:18px}.promo-form{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px}.promo-note{margin-top:10px}.promo-result{margin-top:12px;padding:16px;border-radius:17px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025)}.promo-result.empty{color:#8f829c}.promo-code{font:900 16px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.03em;overflow-wrap:anywhere}.promo-main{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.promo-info{margin-top:10px;color:#b7aabd;font-size:12px;line-height:1.65}.promo-history{display:grid;gap:8px;margin-top:12px}.promo-row{display:grid;grid-template-columns:minmax(0,1.25fr) 80px 110px minmax(0,.8fr);gap:10px;align-items:center;padding:12px 14px;border:1px solid rgba(255,255,255,.075);border-radius:15px;background:rgba(255,255,255,.025);font-size:12px}.promo-row .promo-code{font-size:12px}.promo-status-active{background:rgba(55,220,151,.12);color:#82f0be}.promo-status-redeemed{background:rgba(102,213,255,.12);color:#83e7ff}.promo-status-expired{background:rgba(255,103,128,.12);color:#ff9bac}.promo-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.promo-actions button{flex:0 0 auto}
.tg-panel{padding:18px}.tg-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr);gap:14px}.tg-box{padding:16px;border:1px solid rgba(255,255,255,.075);border-radius:17px;background:rgba(255,255,255,.025)}.tg-box h3{margin:0 0 7px;font-size:16px}.tg-box p{margin:0;color:#9e92a8;font-size:12px;line-height:1.65}.tg-state{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.tg-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.tg-step{display:flex;gap:10px;margin-top:10px;color:#bcb1c5;font-size:12px;line-height:1.55}.tg-step b{width:22px;height:22px;flex:0 0 22px;display:grid;place-items:center;border-radius:50%;background:rgba(166,75,255,.14);color:#d5b6ff}.tg-command{font:800 12px/1.3 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;background:#100819;border:1px solid rgba(255,255,255,.09);padding:8px 10px;border-radius:10px;display:inline-block;margin-top:8px}
.tg-publisher{padding:18px}.tg-pub-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(300px,.9fr);gap:14px}.tg-pub-box{padding:17px;border:1px solid rgba(255,255,255,.075);border-radius:18px;background:rgba(255,255,255,.025)}.tg-pub-box h3{margin:0 0 7px;font-size:16px}.tg-pub-box p{margin:0 0 13px;color:#9e92a8;font-size:12px;line-height:1.65}.tg-pub-fields{display:grid;gap:11px}.tg-pub-label{display:grid;gap:6px;color:#cfc4d6;font-size:12px;font-weight:750}.tg-pub-meta{display:flex;justify-content:space-between;gap:10px;align-items:center;color:#776d80;font-size:11px}.tg-pub-preview{min-height:210px;border:1px solid rgba(255,255,255,.075);border-radius:17px;padding:17px;background:linear-gradient(145deg,rgba(49,25,68,.34),rgba(8,5,14,.65));white-space:pre-wrap;overflow-wrap:anywhere;color:#e9e3ee;line-height:1.55}.tg-pub-preview.empty{display:grid;place-items:center;text-align:center;color:#756a80}.tg-pub-photo{width:100%;max-height:260px;object-fit:cover;border-radius:14px;margin:0 0 12px;display:none}.tg-pub-photo.show{display:block}.tg-pub-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.tg-pub-status{min-height:20px;margin-top:10px;color:#9e92a8;font-size:12px}.tg-pub-status.good{color:#82f0be}.tg-pub-status.bad{color:#ff9bac}.tg-pub-check{display:flex;gap:8px;align-items:center;color:#a99db5;font-size:12px}.tg-pub-check input{width:auto;accent-color:#9f4bff}.tg-pub-upload{position:relative;display:grid;gap:8px;padding:14px;border:1px dashed rgba(185,116,255,.28);border-radius:15px;background:rgba(157,67,255,.045)}.tg-pub-upload input[type=file]{width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:#100819;color:#cfc4d6;font:inherit}.tg-pub-filemeta{min-height:17px;color:#85798f;font-size:11px;line-height:1.45}.tg-pub-filemeta.good{color:#82f0be}.tg-pub-filemeta.bad{color:#ff9bac}

@media(max-width:860px){.tg-grid,.tg-pub-grid{grid-template-columns:1fr}.metrics{grid-template-columns:repeat(2,1fr)}.overview-grid{grid-template-columns:1fr}.review-stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:620px){.wrap{padding:20px 14px 60px}.top{align-items:flex-start}.top-actions{justify-content:flex-end}.metrics{grid-template-columns:repeat(2,1fr)}.quick .actions{grid-template-columns:1fr}.cardtop{display:block}.stars{margin-top:6px}.promo-form{grid-template-columns:1fr}.promo-row{grid-template-columns:1fr 70px}.promo-row>*:nth-child(3),.promo-row>*:nth-child(4){grid-column:1/-1}.promo-main{display:block}.promo-main .badge{margin-top:8px}}
</style></head><body><div class="wrap">
<div class="top"><div><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Admin Pro</div><div class="sub">Аналитика, отзывы и управление сайтом</div></div><div class="top-actions"><a class="btn ghost hidden-ui" id="openSite" href="/" target="_blank">↗ Сайт</a><button id="logout" class="ghost hidden-ui">Выйти</button></div></div>
<section id="loginBox" class="panel login"><h1>Вход</h1><p>Если Telegram уже привязан к владельцу AuraFX — вход откроет админку автоматически.</p><a class="btn primary" id="adminTelegramLogin" href="/auth/telegram?next=/admin" style="width:100%;padding:14px 16px;font-size:14px">✈ Войти через Telegram</a><label class="remember-login"><input id="rememberAdmin" type="checkbox" checked><span><b>Запомнить меня</b><small>Сохранить вход в админку на этом устройстве на 90 дней.</small></span></label><div style="display:flex;align-items:center;gap:10px;margin:18px 0;color:#706777;font-size:11px"><span style="height:1px;background:rgba(255,255,255,.08);flex:1"></span><span>или резервный вход</span><span style="height:1px;background:rgba(255,255,255,.08);flex:1"></span></div><form id="loginForm"><input id="password" type="password" autocomplete="current-password" placeholder="Пароль администратора" required><button class="ghost" style="width:100%;margin-top:12px">Войти по паролю →</button><div class="msg" id="loginMsg"></div></form></section>
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
    <div class="panel quick"><h3>Быстрые действия</h3><div class="actions"><button id="copyLink" class="ghost">⧉ Скопировать ссылку</button><button id="motionToggle" class="primary">✨ Полные анимации</button><button id="clearOnline" class="warn">Очистить онлайн</button><button id="resetTraffic" class="danger">Сбросить статистику</button><button id="exportReviews" class="ghost">↓ Экспорт отзывов CSV</button><button id="exportLeads" class="ghost">↓ Экспорт заявок CSV</button><a class="btn primary" href="/admin/support">💬 Техподдержка</a></div><div class="panel system"><span><span class="status-dot"></span>D1 и API</span><b id="sysStatus">OK</b></div></div>
  </div>

  <div class="section-title"><div><h2>Telegram-уведомления</h2><p>Новые заявки и важные события сразу в личку</p></div><button id="tgRefresh" class="ghost">Проверить статус</button></div>
  <div class="panel tg-panel">
    <div class="tg-grid">
      <div class="tg-box">
        <h3>Состояние подключения</h3>
        <p id="tgStatusText">Проверяю настройки Telegram…</p>
        <div class="tg-state"><span id="tgTokenBadge" class="badge pending">BOT TOKEN: …</span><span id="tgChatBadge" class="badge pending">Чат: …</span></div>
        <div class="tg-actions"><button id="tgConnect" class="primary">🔗 Подключить мой Telegram</button><button id="tgTest" class="ok">✉ Тест</button><button id="tgDisconnect" class="danger">Отключить чат</button><a class="btn ghost" href="/auth/telegram?next=/admin&bind_admin=1">🔐 Привязать Telegram-вход</a></div>
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

  <div class="section-title"><div><h2>Публикации в Telegram</h2><p>@AuraFXPostBot → только разрешённые каналы и группы</p></div><button id="tgPubCheck" class="ghost">Проверить бота</button></div>
  <div class="panel tg-publisher">
    <div class="tg-pub-grid">
      <div class="tg-pub-box">
        <h3>Новый пост</h3>
        <p>Публикация идёт через отдельного <b>@AuraFXPostBot</b>. Токен остаётся только в Cloudflare Secret и никогда не отправляется в браузер.</p>
        <div class="tg-pub-fields">
          <label class="tg-pub-label">Куда публикуем<select id="tgPubTarget"><option value="@AuraFX_design">@AuraFX_design</option></select></label>
          <label class="tg-pub-label">Текст поста<textarea id="tgPubText" maxlength="4000" placeholder="Напиши пост для AuraFX…"></textarea></label>
          <div class="tg-pub-meta"><span id="tgPubCounter">0 / 4000</span><span>обычный текст + эмодзи + ссылки</span></div>
          <div class="tg-pub-upload">
            <label class="tg-pub-label">Загрузить фото <span style="font-weight:500;color:#786e82">JPG/PNG · до 10 МБ · необязательно</span><input id="tgPubPhoto" type="file" accept="image/jpeg,image/png,.jpg,.jpeg,.png"></label>
            <div class="tg-pub-filemeta" id="tgPubPhotoMeta">Фото можно выбрать прямо с телефона или компьютера.</div>
          </div>
          <label class="tg-pub-check"><input id="tgPubPreviewLink" type="checkbox" checked> Показывать превью ссылок в текстовом посте</label>
        </div>
        <div class="tg-pub-actions"><button id="tgPubPublish" class="primary">🚀 Опубликовать</button><button id="tgPubClear" class="ghost">Очистить</button></div>
        <div class="tg-pub-status" id="tgPubStatus">Проверяю подключение @AuraFXPostBot…</div>
      </div>
      <div class="tg-pub-box">
        <h3>Предпросмотр</h3>
        <p>Так будет выглядеть содержание поста. Telegram может немного иначе оформить превью ссылок.</p>
        <div class="tg-pub-preview empty" id="tgPubPreview"><img id="tgPubPreviewPhoto" class="tg-pub-photo" alt=""><span id="tgPubPreviewText">Начни писать текст слева.</span></div>
        <div class="tg-state"><span id="tgPubTokenBadge" class="badge pending">POST BOT: …</span><span id="tgPubChannelBadge" class="badge pending">@AuraFX_design: …</span></div>
        <div class="sub" style="margin-top:12px">Дополнительные группы добавим только в белый список — бот не сможет отправлять посты в произвольные чаты.</div>
      </div>
    </div>
  </div>

  <div class="section-title"><div><h2>Автопубликация ChatGPT</h2><p>Отдельный ключ без доступа к паролю админки и токену Telegram-бота</p></div><span id="autoKeyBadge" class="badge pending">AUTOMATION: …</span></div>
  <div class="panel tg-publisher">
    <div class="tg-pub-grid">
      <div class="tg-pub-box">
        <h3>Ключ автоматизации</h3>
        <p>Создай отдельный ключ для автоматизированных публикаций. На сервере хранится только SHA-256 хэш. Сам ключ показывается один раз — его можно сохранить в защищённом хранилище браузерной автоматизации.</p>
        <div class="tg-pub-fields">
          <label class="tg-pub-label">Ключ<input id="autoKeyValue" type="text" readonly autocomplete="off" placeholder="Нажми «Создать новый ключ»"></label>
        </div>
        <div class="tg-pub-actions"><button id="autoKeyCreate" class="primary">🔑 Создать новый ключ</button><button id="autoKeyCopy" class="ghost" disabled>⧉ Скопировать</button><button id="autoKeyRevoke" class="danger">Отозвать ключ</button></div>
        <div class="tg-pub-status" id="autoKeyStatus">Проверяю состояние ключа…</div>
      </div>
      <div class="tg-pub-box">
        <h3>Что получает автоматизация</h3>
        <p>Только право публиковать через <b>@AuraFXPostBot</b> в белый список чатов. Ключ не открывает админку, заявки, отзывы, Cloudflare Secrets или токен бота.</p>
        <div class="tg-pub-preview" style="min-height:0">
          <span><b>POST</b> /api/automation/telegram/publish<br><br>Канал по умолчанию: <b>@AuraFX_design</b><br>Защита от дублей: <b>Idempotency-Key</b><br>Лимит: <b>20 публикаций/час</b></span>
        </div>
        <div class="sub" style="margin-top:12px">Если ключ потеряется — просто отзови его здесь и создай новый. Старый сразу перестанет работать.</div>
      </div>
    </div>
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
  async function apiForm(url,form){var r=await fetch(url,{method:'POST',headers:{accept:'application/json'},body:form});var d={};try{d=await r.json()}catch(e){}if(r.status===401){showLogin('Сессия закончилась. Войди снова.');throw new Error('AUTH')}if(!r.ok)throw new Error(d.error||'Ошибка');return d}
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
  function renderTelegramPublisherStatus(d){
    d=d||{};var token=$('#tgPubTokenBadge'),channel=$('#tgPubChannelBadge'),status=$('#tgPubStatus'),select=$('#tgPubTarget'),pub=$('#tgPubPublish');
    token.textContent=d.token_configured?'POST BOT: готов':'POST BOT: нет токена';token.className='badge '+(d.token_configured?'approved':'pending');
    var targets=Array.isArray(d.targets)&&d.targets.length?d.targets:['@AuraFX_design'];
    select.innerHTML=targets.map(function(t){return '<option value="'+esc(t)+'"'+(t===d.default_target?' selected':'')+'>'+esc(t)+'</option>'}).join('');
    channel.textContent=(d.channel_ready?'Канал: готов':'Канал: требует проверки');channel.className='badge '+(d.channel_ready?'approved':'pending');
    status.className='tg-pub-status '+(d.ready?'good':(d.token_configured?'':'bad'));
    status.textContent=d.ready?('Готово: '+(d.bot_username?'@'+d.bot_username:'@AuraFXPostBot')+' может публиковать в '+(d.default_target||'@AuraFX_design')):(!d.token_configured?'Добавь TELEGRAM_POST_BOT_TOKEN в Cloudflare Secrets.':(d.error||'Бот найден. Нажми «Проверить бота», чтобы проверить права канала.'));
    pub.disabled=!d.ready;
  }
  async function loadTelegramPublisherStatus(){try{var d=await api('/api/admin/telegram-post/status');renderTelegramPublisherStatus(d);return d}catch(e){if(e.message!=='AUTH'){renderTelegramPublisherStatus({error:e.message})}return null}}
  async function loadAutomationKeyStatus(){try{var d=await api('/api/admin/automation-key/status');var badge=$('#autoKeyBadge'),st=$('#autoKeyStatus');badge.textContent=d.configured?'AUTOMATION: ВКЛ':'AUTOMATION: НЕТ КЛЮЧА';badge.className='badge '+(d.configured?'approved':'pending');st.className='tg-pub-status '+(d.configured?'good':'');st.textContent=d.configured?'Ключ активен. Автоматизация может публиковать только в разрешённые чаты.':'Создай отдельный ключ автоматизации.';return d}catch(e){if(e.message!=='AUTH')$('#autoKeyStatus').textContent=e.message;return null}}
  var tgPubPhotoFile=null,tgPubPhotoObjectUrl='';
  function clearTelegramPublisherPhoto(resetInput){
    if(tgPubPhotoObjectUrl){try{URL.revokeObjectURL(tgPubPhotoObjectUrl)}catch(e){}tgPubPhotoObjectUrl=''}
    tgPubPhotoFile=null;var input=$('#tgPubPhoto'),meta=$('#tgPubPhotoMeta');if(resetInput!==false&&input)input.value='';if(meta){meta.className='tg-pub-filemeta';meta.textContent='Фото можно выбрать прямо с телефона или компьютера.'}
  }
  function renderTelegramPublisherPreview(){
    var text=$('#tgPubText').value||'',hasPhoto=!!tgPubPhotoFile,box=$('#tgPubPreview'),txt=$('#tgPubPreviewText'),img=$('#tgPubPreviewPhoto');
    $('#tgPubCounter').textContent=text.length+' / '+(hasPhoto?'1000':'4000');
    txt.textContent=text||'Начни писать текст слева.';box.classList.toggle('empty',!text&&!hasPhoto);
    if(hasPhoto&&tgPubPhotoObjectUrl){img.src=tgPubPhotoObjectUrl;img.classList.add('show')}else{img.removeAttribute('src');img.classList.remove('show')}
  }
  function selectTelegramPublisherPhoto(file){
    var meta=$('#tgPubPhotoMeta');
    clearTelegramPublisherPhoto(false);
    if(!file){renderTelegramPublisherPreview();return true}
    var type=String(file.type||'').toLowerCase(),name=String(file.name||''),okType=type==='image/jpeg'||type==='image/png'||(!type&&/\.(?:jpe?g|png)$/i.test(name));
    if(!okType){meta.className='tg-pub-filemeta bad';meta.textContent='Нужен JPG или PNG.';renderTelegramPublisherPreview();return false}
    if(Number(file.size||0)<=0){meta.className='tg-pub-filemeta bad';meta.textContent='Файл пустой или повреждён.';renderTelegramPublisherPreview();return false}
    if(Number(file.size)>10*1024*1024){meta.className='tg-pub-filemeta bad';meta.textContent='Фото больше 10 МБ. Выбери файл поменьше.';renderTelegramPublisherPreview();return false}
    tgPubPhotoFile=file;tgPubPhotoObjectUrl=URL.createObjectURL(file);meta.className='tg-pub-filemeta good';meta.textContent=name+' · '+(file.size/1024/1024).toFixed(2)+' МБ · готово к отправке';renderTelegramPublisherPreview();return true
  }
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
    var leadLabels={new:'Заявка принята',contacted:'В работе',review:'На согласовании',revision:'Правки',done:'Готово',spam:'Закрыта'};
    $('#leadList').innerHTML=leads.map(function(l){
      var src=[l.source,l.campaign,l.content].filter(Boolean).join(' • ')||'прямой переход';
      var meta=[new Date(l.created_at+'Z').toLocaleString('ru-RU'),'#'+l.id,src].join(' · ');
      var html='<article class="card" data-lead-id="'+l.id+'"><div class="cardtop"><div><div class="name">'+esc(l.product)+'</div><div class="meta"><span class="badge '+esc(l.status)+'">'+esc(leadLabels[l.status]||l.status)+'</span><span>'+esc(meta)+'</span></div></div><div class="stars">'+esc(String(l.count))+' шт.</div></div>';
      html+='<p class="text"><b>'+esc(l.marketplace)+'</b> · '+esc(l.style)+'<br>Связь: <b>'+esc(l.contact)+'</b><br>Срок: '+esc(l.deadline||'—')+(l.referral_code?'<br>💜 Реферал: <b>'+esc(l.referral_code)+'</b>':'')+(l.referral_reward_code?'<br>🎁 Бонус: <b>'+esc(l.referral_reward_code)+'</b> · 1 карточка':'')+'<br>'+esc(l.comment||'')+'</p>';
      if(l.client_decision||l.client_comment){html+='<p class="text" style="margin-top:8px;padding:11px 12px;border:1px solid rgba(176,93,255,.13);border-radius:13px;background:rgba(148,65,255,.04)"><b>Решение клиента:</b> '+esc(l.client_decision==='approved'?'Макет принят':l.client_decision==='revision'?'Нужны правки':l.client_decision||'—')+(l.client_decision_at?'<br><small>'+new Date(l.client_decision_at+'Z').toLocaleString('ru-RU')+'</small>':'')+(l.client_comment?'<br>'+esc(l.client_comment):'')+'</p>'}
      html+='<div class="actions">';
      if(l.status!=='new')html+='<button class="ghost" data-lead-status="new">Принята</button>';
      if(l.status!=='contacted')html+='<button class="ghost" data-lead-status="contacted">В работе</button>';
      if(l.status!=='review')html+='<button class="warn" data-lead-status="review">На согласование</button>';
      if(l.status!=='revision')html+='<button class="warn" data-lead-status="revision">Правки</button>';
      if(l.status!=='done')html+='<button class="ok" data-lead-status="done">Готово</button>';
      if(l.status!=='spam')html+='<button class="danger" data-lead-status="spam">Закрыть</button>';
      html+='</div></article>';return html
    }).join('')
  }
  async function loadLeads(){var d=await api('/api/admin/leads');leads=d.leads||[];renderLeads()}
  function renderReviews(){var c={all:reviews.length,approved:0,pending:0,hidden:0};reviews.forEach(function(r){c[r.status]=(c[r.status]||0)+1});$('#sAll').textContent=c.all;$('#sApproved').textContent=c.approved;$('#sPending').textContent=c.pending;$('#sHidden').textContent=c.hidden;var data=filter==='all'?reviews:reviews.filter(function(r){return r.status===filter});if(!data.length){$('#list').innerHTML='<div class="panel empty">Здесь пока пусто.</div>';return}$('#list').innerHTML=data.map(function(r){var html='<article class="card" data-id="'+r.id+'"><div class="cardtop"><div><div class="name">'+esc(r.name)+'</div><div class="meta"><span class="badge '+esc(r.status)+'">'+(labels[r.status]||esc(r.status))+'</span><span>'+new Date(r.created_at+'Z').toLocaleString('ru-RU')+'</span><span>#'+r.id+'</span></div></div><div class="stars">'+'★'.repeat(r.rating)+'</div></div><p class="text">'+esc(r.text)+'</p><div class="actions">';if(r.status!=='approved')html+='<button class="ok" data-action="approved">Опубликовать</button>';if(r.status!=='hidden')html+='<button class="ghost" data-action="hidden">Скрыть</button>';html+='<button class="danger" data-action="delete">Удалить</button></div></article>';return html}).join('')}
  async function loadReviews(){var d=await api('/api/admin/reviews');reviews=d.reviews||[];renderReviews()}
  async function loadAll(){await Promise.all([loadDashboard(),loadReviews(),loadLeads(),loadPromos(),loadTelegramStatus(),loadTelegramPublisherStatus(),loadAutomationKeyStatus()]);showDash();renderTelegramPublisherPreview()}
  var rememberAdmin=$('#rememberAdmin'),adminTelegramLogin=$('#adminTelegramLogin');try{rememberAdmin.checked=localStorage.getItem('afx_remember_admin')!=='0'}catch(e){}function syncAdminRemember(){var on=rememberAdmin.checked;adminTelegramLogin.href='/auth/telegram?next=/admin&remember='+(on?'1':'0');try{localStorage.setItem('afx_remember_admin',on?'1':'0')}catch(e){}}rememberAdmin.addEventListener('change',syncAdminRemember);syncAdminRemember();$('#loginForm').addEventListener('submit',async function(e){e.preventDefault();$('#loginMsg').textContent='Проверяем…';try{await api('/api/admin/login',{method:'POST',body:JSON.stringify({password:$('#password').value,remember:rememberAdmin.checked})});$('#password').value='';await loadAll()}catch(err){if(err.message!=='AUTH')$('#loginMsg').textContent=err.message}});
  $('#logout').addEventListener('click',async function(){try{await api('/api/admin/logout',{method:'POST',body:'{}'})}catch(e){}showLogin('Ты вышел из панели.')});
  $('#refreshAll').addEventListener('click',async function(){await loadAll();toast('Обновлено')});$('#refreshReviews').addEventListener('click',async function(){await loadReviews();toast('Отзывы обновлены')});
  $('#filters').addEventListener('click',function(e){var b=e.target.closest('button[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('#filters button').forEach(function(x){x.classList.toggle('active',x===b)});renderReviews()});
  $('#refreshLeads').addEventListener('click',async function(){await loadLeads();toast('Заявки обновлены')});
  $('#tgRefresh').addEventListener('click',async function(){await loadTelegramStatus();toast('Статус Telegram обновлён')});
  $('#tgCopyCommand').addEventListener('click',async function(){try{await navigator.clipboard.writeText('/start aurafx_setup');toast('Команда скопирована')}catch(e){toast('/start aurafx_setup')}});
  $('#tgConnect').addEventListener('click',async function(){var b=this;b.disabled=true;try{var d=await api('/api/admin/telegram/connect',{method:'POST',body:'{}'});await loadTelegramStatus();toast(d.test_sent?'Telegram подключён — сообщение уже отправлено':'Telegram подключён')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#tgTest').addEventListener('click',async function(){var b=this;b.disabled=true;try{await api('/api/admin/telegram/test',{method:'POST',body:'{}'});toast('Тест отправлен в Telegram')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#tgDisconnect').addEventListener('click',async function(){if(!confirm('Отключить Telegram-уведомления для этого чата?'))return;var b=this;b.disabled=true;try{await api('/api/admin/telegram/disconnect',{method:'POST',body:'{}'});await loadTelegramStatus();toast('Telegram отключён')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  var tgPubConfirmUntil=0,tgPubConfirmTimer=0,tgPubConfirmPayload='';
  function resetTgPubConfirm(){tgPubConfirmUntil=0;tgPubConfirmPayload='';clearTimeout(tgPubConfirmTimer);var b=$('#tgPubPublish');if(b&&!b.disabled)b.textContent='Опубликовать сейчас'}
  $('#tgPubText').addEventListener('input',function(){resetTgPubConfirm();renderTelegramPublisherPreview()});
  $('#tgPubPhoto').addEventListener('change',function(){resetTgPubConfirm();var file=this.files&&this.files[0]?this.files[0]:null;if(file&&!selectTelegramPublisherPhoto(file))this.value='';else if(!file){clearTelegramPublisherPhoto();renderTelegramPublisherPreview()}});
  $('#tgPubTarget').addEventListener('change',resetTgPubConfirm);
  $('#tgPubPreviewLink').addEventListener('change',resetTgPubConfirm);
  $('#tgPubClear').addEventListener('click',function(){if($('#tgPubText').value||tgPubPhotoFile){if(!confirm('Очистить черновик поста?'))return}$('#tgPubText').value='';clearTelegramPublisherPhoto();resetTgPubConfirm();$('#tgPubStatus').className='tg-pub-status';$('#tgPubStatus').textContent='Черновик очищен.';renderTelegramPublisherPreview()});
  $('#tgPubCheck').addEventListener('click',async function(){var b=this;b.disabled=true;$('#tgPubStatus').className='tg-pub-status';$('#tgPubStatus').textContent='Проверяю @AuraFXPostBot и права канала…';try{var d=await api('/api/admin/telegram-post/check',{method:'POST',body:JSON.stringify({target:$('#tgPubTarget').value})});renderTelegramPublisherStatus(d);toast('Telegram PostBot проверен')}catch(err){if(err.message!=='AUTH'){var s=$('#tgPubStatus');s.className='tg-pub-status bad';s.textContent=err.message;alert(err.message)}}finally{b.disabled=false}});
  $('#tgPubPublish').addEventListener('click',async function(){var b=this,text=$('#tgPubText').value.trim(),photo=tgPubPhotoFile,target=$('#tgPubTarget').value,preview=$('#tgPubPreviewLink').checked,s=$('#tgPubStatus');if(!text&&!photo){alert('Добавь текст или фото.');return}if(photo&&text.length>1000){alert('Для поста с фото оставь до 1000 символов текста.');return}if(!photo&&text.length>4000){alert('Текст слишком длинный.');return}if(photo&&(photo.size>10*1024*1024)){alert('Фото больше 10 МБ. Выбери файл поменьше.');return}var payloadKey=JSON.stringify({target:target,text:text,photo:photo?{name:photo.name,size:photo.size,type:photo.type,lastModified:photo.lastModified}:null,link_preview:preview});if(Date.now()>tgPubConfirmUntil||payloadKey!==tgPubConfirmPayload){tgPubConfirmUntil=Date.now()+15000;tgPubConfirmPayload=payloadKey;b.textContent='Подтвердить публикацию';s.className='tg-pub-status';s.textContent='Проверь превью и нажми «Подтвердить публикацию» — пост уйдёт в '+target+'.';clearTimeout(tgPubConfirmTimer);tgPubConfirmTimer=setTimeout(resetTgPubConfirm,15000);return}tgPubConfirmUntil=0;tgPubConfirmPayload='';clearTimeout(tgPubConfirmTimer);b.disabled=true;b.textContent='Публикую…';s.className='tg-pub-status';s.textContent=photo?'Загружаю фото и публикую…':'Публикую…';try{var form=new FormData();form.append('target',target);form.append('text',text);form.append('link_preview',preview?'true':'false');if(photo)form.append('photo',photo,photo.name||'aurafx-photo.jpg');var d=await apiForm('/api/admin/telegram-post/publish',form);if(d.ok!==true||d.telegram_confirmed!==true||!Number.isInteger(Number(d.message_id))||Number(d.message_id)<=0)throw new Error('Telegram не подтвердил публикацию. Зелёный статус не показан.');s.className='tg-pub-status good';s.textContent='Telegram подтвердил публикацию ✅ '+(d.chat_username||target)+' · message_id '+d.message_id;toast('Пост подтверждён Telegram в '+(d.chat_username||target))}catch(err){if(err.message!=='AUTH'){s.className='tg-pub-status bad';s.textContent=err.message;alert(err.message)}}finally{b.disabled=false;b.textContent='Опубликовать сейчас'}});
  $('#autoKeyCreate').addEventListener('click',async function(){if(!confirm('Создать новый ключ автоматизации? Старый ключ, если он был, сразу перестанет работать.'))return;var b=this;b.disabled=true;try{var d=await api('/api/admin/automation-key/create',{method:'POST',body:'{}'});$('#autoKeyValue').value=d.key||'';$('#autoKeyCopy').disabled=!d.key;await loadAutomationKeyStatus();var st=$('#autoKeyStatus');st.className='tg-pub-status good';st.textContent='Новый ключ создан. Скопируй его сейчас — повторно сервер его не покажет.';toast('Ключ автоматизации создан')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
  $('#autoKeyCopy').addEventListener('click',async function(){var v=$('#autoKeyValue').value;if(!v)return;try{await navigator.clipboard.writeText(v);toast('Ключ скопирован')}catch(e){alert('Не удалось скопировать автоматически. Выдели ключ вручную.')}});
  $('#autoKeyRevoke').addEventListener('click',async function(){if(!confirm('Отозвать ключ автоматизации? Все системы, где он сохранён, сразу потеряют доступ к публикациям.'))return;var b=this;b.disabled=true;try{await api('/api/admin/automation-key/revoke',{method:'POST',body:'{}'});$('#autoKeyValue').value='';$('#autoKeyCopy').disabled=true;await loadAutomationKeyStatus();toast('Ключ автоматизации отозван')}catch(err){if(err.message!=='AUTH')alert(err.message)}finally{b.disabled=false}});
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
  $('#exportLeads').addEventListener('click',function(){var rows=[['id','status','created_at','marketplace','count','product','style','deadline','contact','comment','client_decision','client_comment','client_decision_at','referral_code','referral_reward_code','source','medium','campaign','content','referrer','landing']].concat(leads.map(function(l){return [l.id,l.status,l.created_at,l.marketplace,l.count,l.product,l.style,l.deadline,l.contact,l.comment,l.client_decision,l.client_comment,l.client_decision_at,l.referral_code,l.referral_reward_code,l.source,l.medium,l.campaign,l.content,l.referrer,l.landing]}));var csv=rows.map(function(row){return row.map(function(v){return '"'+String(v==null?'':v).replace(/"/g,'""')+'"'}).join(',')}).join('\\n');var blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='aurafx-leads.csv';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},500);toast('CSV заявок готов')});
  $('#exportReviews').addEventListener('click',function(){var rows=[['id','name','rating','status','created_at','text']].concat(reviews.map(function(r){return [r.id,r.name,r.rating,r.status,r.created_at,r.text]}));var csv=rows.map(function(row){return row.map(function(v){return '"'+String(v==null?'':v).replace(/"/g,'""')+'"'}).join(',')}).join('\\n');var blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='aurafx-reviews.csv';a.click();setTimeout(function(){URL.revokeObjectURL(a.href)},500);toast('CSV готов')});
  loadAll().catch(function(e){if(e.message!=='AUTH')showLogin('Войди, чтобы открыть панель.')});
})();
</script></body></html>`;



const AURAFX_PWA_MANIFEST = JSON.stringify({
  name:"AuraFX — кабинет клиента",
  short_name:"AuraFX",
  description:"Заказы, согласование макетов и инструменты AuraFX в одном приложении.",
  start_url:"/client?source=pwa",
  scope:"/",
  display:"standalone",
  background_color:"#09050f",
  theme_color:"#0b0612",
  orientation:"portrait-primary",
  icons:[
    {src:"/icon-192.png",sizes:"192x192",type:"image/png",purpose:"any"},
    {src:"/icon-512.png",sizes:"512x512",type:"image/png",purpose:"any"},
    {src:"/aurafx-app-icon.svg",sizes:"any",type:"image/svg+xml",purpose:"maskable"}
  ],
  shortcuts:[
    {name:"AuraFX Client",short_name:"Client",url:"/client"},
    {name:"Мои заявки",short_name:"Заявки",url:"/client?tab=orders"},
    {name:"AuraFX",short_name:"Сайт",url:"/"},
    {name:"Пригласить друга",short_name:"Реферал",url:"/referral"},
    {name:"Техподдержка",short_name:"Support",url:"/support"}
  ]
});

const AURAFX_APP_ICON_SVG = String.raw`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image width="512" height="512" href="data:image/png;base64,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"/>
</svg>`;

const AURAFX_SW_JS = String.raw`const CACHE='aurafx-pwa-v3';
const CORE=['/','/client','/manifest.webmanifest','/aurafx-app-icon.svg','/aurafx-logo-128.png','/apple-touch-icon.png','/icon-192.png','/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('aurafx-pwa-')).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin)return;
  if(/^\/(?:api|auth|admin|account|referral|support)(?:\/|$)/.test(u.pathname))return;
  if(e.request.mode==='navigate'){
    const fallback=(u.pathname==='/client'||u.pathname==='/client.html')?'/client':'/';
    e.respondWith(fetch(e.request).then(r=>{
      if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}
      return r
    }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||caches.match(fallback))));
    return
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{
    if(r.ok)caches.open(CACHE).then(c=>c.put(e.request,r.clone())).catch(()=>{});
    return r
  })))
});`;

const PWA_INSTALL_HTML = String.raw`
<style>
  #afx-pwa-install{position:fixed;left:14px;bottom:72px;z-index:9997;display:none;max-width:min(330px,calc(100vw - 28px));padding:12px;border:1px solid rgba(181,104,255,.24);border-radius:18px;background:rgba(13,7,23,.94);backdrop-filter:blur(18px);box-shadow:0 18px 55px rgba(0,0,0,.36);color:#fff;font-family:inherit}
  #afx-pwa-install.show{display:block}.afx-pwa-row{display:flex;gap:10px;align-items:center}.afx-pwa-icon{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#58e6ff,#9d43ff);display:grid;place-items:center;font-weight:950;font-size:20px;box-shadow:0 8px 28px rgba(125,67,255,.28)}.afx-pwa-text{min-width:0;flex:1}.afx-pwa-text b{display:block;font-size:13px}.afx-pwa-text span{display:block;margin-top:3px;color:#9e91aa;font-size:10px;line-height:1.35}.afx-pwa-actions{display:flex;gap:7px;margin-top:10px}.afx-pwa-actions button{border:0;border-radius:11px;padding:9px 11px;font:inherit;font-size:11px;font-weight:850;cursor:pointer}.afx-pwa-go{background:linear-gradient(135deg,#ad49ff,#6a2bea);color:#fff}.afx-pwa-later{background:rgba(255,255,255,.06);color:#b8acbf}
  @media(max-width:640px){#afx-pwa-install{bottom:68px;left:9px;right:9px;max-width:none}}
</style>
<div id="afx-pwa-install"><div class="afx-pwa-row"><div class="afx-pwa-icon"><img src="/aurafx-logo.png" alt="AuraFX" style="width:100%;height:100%;object-fit:contain"></div><div class="afx-pwa-text"><b>AuraFX как приложение</b><span id="afx-pwa-hint">Установи кабинет на главный экран — заказы и согласование будут под рукой.</span></div></div><div class="afx-pwa-actions"><button class="afx-pwa-go" id="afx-pwa-go" type="button">Установить</button><button class="afx-pwa-later" id="afx-pwa-later" type="button">Позже</button></div></div>
<script>
(()=>{if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(()=>{});const box=document.getElementById('afx-pwa-install'),go=document.getElementById('afx-pwa-go'),later=document.getElementById('afx-pwa-later'),hint=document.getElementById('afx-pwa-hint');if(!box||!go)return;let prompt=null;const standalone=window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;if(standalone)return;try{if(sessionStorage.getItem('afx_pwa_later')==='1')return}catch(e){}window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();prompt=e;box.classList.add('show')});const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);if(ios){hint.textContent='На iPhone: нажми «Поделиться» → «На экран Домой».';go.textContent='Как установить';box.classList.add('show')}go.addEventListener('click',async()=>{if(prompt){prompt.prompt();try{await prompt.userChoice}catch(e){}prompt=null;box.classList.remove('show');return}if(ios){alert('В Safari нажми кнопку «Поделиться», затем «На экран Домой». AuraFX появится как приложение.')}});later.addEventListener('click',()=>{box.classList.remove('show');try{sessionStorage.setItem('afx_pwa_later','1')}catch(e){}});window.addEventListener('appinstalled',()=>box.classList.remove('show'))})();
</script>`;

const REFERRAL_CAPTURE_HTML = String.raw`<script>(()=>{try{const p=new URLSearchParams(location.search),code=String(p.get('ref')||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,24);if(/^AFX[A-Z0-9]{6,20}$/.test(code)){localStorage.setItem('afx_referral_code',code);localStorage.setItem('afx_referral_at',String(Date.now()))}}catch(e){}})();</script>`;

const SELLER_TOOL_HTML = String.raw`
<style>
  #afx-seller-tool{position:relative;padding:92px 24px;color:#fff;background:linear-gradient(180deg,rgba(9,4,16,0),rgba(25,8,47,.62),rgba(9,4,16,0));font-family:inherit;overflow:hidden}#afx-seller-tool:before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;right:-170px;top:60px;background:rgba(149,61,255,.15);filter:blur(95px);pointer-events:none}.afx-tool-wrap{position:relative;z-index:1;max-width:1120px;margin:auto}.afx-tool-kicker{display:inline-flex;padding:8px 12px;border:1px solid rgba(112,231,255,.22);border-radius:999px;color:#89ecff;background:rgba(95,226,255,.04);font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.afx-tool-head{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:end;margin:18px 0 28px}.afx-tool-head h2{margin:0;font-size:clamp(40px,6vw,72px);line-height:.95;letter-spacing:-.055em}.afx-tool-head p{margin:0;color:#a99cb5;line-height:1.65}.afx-tool-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:16px}.afx-tool-panel{border:1px solid rgba(255,255,255,.1);border-radius:26px;padding:22px;background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.025));box-shadow:0 24px 70px rgba(0,0,0,.23);backdrop-filter:blur(16px)}.afx-tool-form{display:grid;gap:12px}.afx-tool-label{display:grid;gap:6px;color:#d8cfdf;font-size:12px;font-weight:800}.afx-tool-input,.afx-tool-textarea,.afx-tool-select{width:100%;border:1px solid rgba(255,255,255,.11);border-radius:14px;background:#0e0816;color:#fff;padding:12px 13px;font:inherit;outline:none}.afx-tool-textarea{min-height:105px;resize:vertical}.afx-tool-input:focus,.afx-tool-textarea:focus,.afx-tool-select:focus{border-color:#9f49ff;box-shadow:0 0 0 3px rgba(159,73,255,.11)}.afx-tool-build{border:0;border-radius:14px;padding:13px 15px;background:linear-gradient(135deg,#b04aff,#6a2ce9);color:#fff;font:inherit;font-weight:900;cursor:pointer}.afx-tool-note{color:#746b7d;font-size:10px;line-height:1.5}.afx-tool-output{display:grid;gap:9px}.afx-tool-empty{min-height:260px;display:grid;place-items:center;text-align:center;color:#796e83;border:1px dashed rgba(255,255,255,.1);border-radius:18px;padding:24px}.afx-tool-slide{padding:13px 14px;border:1px solid rgba(255,255,255,.08);border-radius:15px;background:rgba(255,255,255,.025)}.afx-tool-slide b{display:block;font-size:12px;color:#d9baff}.afx-tool-slide span{display:block;margin-top:5px;color:#d8d0de;font-size:12px;line-height:1.5}.afx-tool-copy{display:none;margin-top:12px;border:1px solid rgba(255,255,255,.1);border-radius:13px;padding:11px 13px;background:rgba(255,255,255,.055);color:#fff;font:inherit;font-weight:850;cursor:pointer}.afx-tool-copy.show{display:inline-flex}.afx-tool-status{margin-top:8px;min-height:16px;color:#83e7ff;font-size:11px}@media(max-width:780px){#afx-seller-tool{padding:70px 18px}.afx-tool-head,.afx-tool-grid{grid-template-columns:1fr}.afx-tool-head p{margin-top:4px}}
</style>
<section id="afx-seller-tool"><div class="afx-tool-wrap"><div class="afx-tool-kicker">Бесплатный инструмент</div><div class="afx-tool-head"><h2>Собери структуру карточки за минуту</h2><p>Введи товар и реальные преимущества — AuraFX Quick Plan предложит логику пяти слайдов. Ничего не отправляется на сервер.</p></div><div class="afx-tool-grid"><div class="afx-tool-panel"><div class="afx-tool-form"><label class="afx-tool-label">Маркетплейс<select class="afx-tool-select" id="afx-tool-market"><option>Wildberries</option><option>Ozon</option><option>Avito</option><option>Другое</option></select></label><label class="afx-tool-label">Товар<input class="afx-tool-input" id="afx-tool-product" maxlength="80" placeholder="Например: беспроводные наушники"></label><label class="afx-tool-label">Реальные преимущества<textarea class="afx-tool-textarea" id="afx-tool-benefits" maxlength="500" placeholder="Например: 40 часов работы, шумоподавление, быстрая зарядка"></textarea></label><button class="afx-tool-build" id="afx-tool-build" type="button">⚡ Собрать план</button><div class="afx-tool-note">Важно: не придумывай характеристики. В карточке используй только проверяемые данные товара.</div></div></div><div class="afx-tool-panel"><div id="afx-tool-output" class="afx-tool-output"><div class="afx-tool-empty">Здесь появятся заголовок и структура 5 слайдов ✨</div></div><button class="afx-tool-copy" id="afx-tool-copy" type="button">⧉ Скопировать план</button><div class="afx-tool-status" id="afx-tool-status"></div></div></div></div></section>
<script>
(()=>{const q=id=>document.getElementById(id),build=q('afx-tool-build'),out=q('afx-tool-output'),copy=q('afx-tool-copy'),status=q('afx-tool-status');if(!build||!out)return;let plain='';const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));build.addEventListener('click',()=>{const product=q('afx-tool-product').value.trim(),market=q('afx-tool-market').value,raw=q('afx-tool-benefits').value.trim();if(product.length<2){status.textContent='Сначала напиши товар.';q('afx-tool-product').focus();return}const benefits=raw.split(/[\\n,;•]+/).map(x=>x.trim()).filter(Boolean).slice(0,5);const b1=benefits[0]||'главное преимущество товара',b2=benefits[1]||'важная характеристика',b3=benefits[2]||'сценарий использования';const slides=[['1 · Обложка',product+' — '+b1+'. Один сильный визуальный акцент, минимум лишнего текста.'],['2 · Выгоды','Покажи 2–3 причины выбрать товар: '+[b1,b2,b3].join(' · ')+'.'],['3 · В использовании','Объясни, где и как товар помогает покупателю. Добавь '+b3+' и конкретный сценарий.'],['4 · Факты и доверие','Дай реальные цифры, материалы, комплектацию, совместимость или гарантию. Не используй неподтверждённые обещания.'],['5 · Закрытие','Собери ключевые преимущества в один экран и помоги покупателю понять, какой вариант ему подходит.']];plain='AuraFX Quick Plan — '+market+'\\nТовар: '+product+'\\n\\nЗаголовок: '+product+' — '+b1+'\\n\\n'+slides.map(x=>x[0]+'\\n'+x[1]).join('\\n\\n');out.innerHTML='<div class="afx-tool-slide"><b>Вариант заголовка</b><span>'+esc(product+' — '+b1)+'</span></div>'+slides.map(x=>'<div class="afx-tool-slide"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>').join('');copy.classList.add('show');status.textContent='План готов. Его можно скопировать и использовать как основу для ТЗ.'});copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(plain);status.textContent='План скопирован ✓'}catch(e){status.textContent='Не удалось скопировать автоматически — выдели текст вручную.'}})})();
</script>`;

const ACCOUNT_WIDGET_HTML = String.raw`
<style>
  #afx-account-shell{position:fixed;top:84px;right:max(20px,calc((100vw - 1180px)/2));z-index:9998;display:flex;align-items:center;gap:7px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}.afx-account-btn[hidden]{display:none!important}
  .afx-account-btn{min-height:42px;display:inline-flex;align-items:center;gap:9px;padding:7px 12px;border:1px solid rgba(255,255,255,.12);border-radius:999px;background:rgba(14,7,24,.78);backdrop-filter:blur(18px);box-shadow:0 10px 34px rgba(0,0,0,.28);color:#fff;text-decoration:none;font-size:12px;font-weight:850;cursor:pointer}
  .afx-account-btn:hover{border-color:rgba(177,82,255,.42)}
  .afx-client-launch{border-color:rgba(93,229,255,.28);background:radial-gradient(circle at 22% 18%,rgba(89,235,255,.16),transparent 34%),linear-gradient(135deg,rgba(42,18,70,.92),rgba(94,34,154,.9));box-shadow:0 10px 34px rgba(0,0,0,.28),0 0 20px rgba(88,226,255,.10),0 0 26px rgba(162,71,255,.12)}.afx-client-launch:hover{border-color:rgba(107,238,255,.52);box-shadow:0 10px 34px rgba(0,0,0,.28),0 0 24px rgba(88,226,255,.18),0 0 32px rgba(162,71,255,.18)}
  .afx-account-avatar{width:28px;height:28px;border-radius:50%;object-fit:cover;background:linear-gradient(135deg,#58e6ff,#9d43ff);display:grid;place-items:center;font-size:12px;font-weight:950;overflow:hidden}
  .afx-account-menu{position:absolute;right:0;top:50px;width:min(280px,calc(100vw - 28px));padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(12,6,22,.96);backdrop-filter:blur(22px);box-shadow:0 24px 70px rgba(0,0,0,.42);display:none}
  .afx-account-menu.open{display:block}.afx-account-name{padding:9px 10px 11px;color:#fff;font-size:13px;font-weight:900}.afx-account-user{color:#91859e;font-size:11px;font-weight:650;margin-top:3px}
  .afx-account-menu a,.afx-account-menu button{width:100%;border:0;background:transparent;color:#dcd3e5;text-decoration:none;text-align:left;padding:10px;border-radius:11px;font:inherit;font-size:12px;font-weight:780;cursor:pointer;display:block}.afx-account-menu a:hover,.afx-account-menu button:hover{background:rgba(255,255,255,.06)}
  .afx-account-admin{color:#d5b3ff!important}.afx-account-dot{width:7px;height:7px;border-radius:50%;background:#58e6ff;box-shadow:0 0 12px #58e6ff}
  @media(max-width:720px){#afx-account-shell{top:73px;right:14px}.hero{padding-top:72px}.afx-account-label{max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.afx-client-launch .afx-account-label{max-width:58px}}@media(max-width:430px){.afx-client-launch{width:42px;padding:7px;justify-content:center}.afx-client-launch .afx-account-label{display:none}}
</style>
<div id="afx-account-shell"><a class="afx-account-btn afx-client-launch" href="/client" aria-label="Открыть AuraFX Client">✦ <span class="afx-account-label">Client</span></a><a class="afx-account-btn" id="afx-account-login" href="/auth/telegram?next=/"><span class="afx-account-dot"></span><span class="afx-account-label">Войти через Telegram</span></a><button class="afx-account-btn" id="afx-account-user" type="button" hidden><span class="afx-account-avatar" id="afx-account-avatar">A</span><span class="afx-account-label" id="afx-account-label">Аккаунт</span></button><div class="afx-account-menu" id="afx-account-menu"><div class="afx-account-name"><div id="afx-account-fullname">AuraFX</div><div class="afx-account-user" id="afx-account-username"></div></div><a href="/client">✦ AuraFX Client</a><a href="/account">Личный кабинет</a><a href="/support">💬 Техподдержка</a><a href="/referral">💜 Пригласить друга</a><a href="/admin" class="afx-account-admin" id="afx-account-admin" hidden>Админ-панель</a><button id="afx-account-logout" type="button">Выйти</button></div></div>
<script>
(()=>{const login=document.getElementById('afx-account-login'),user=document.getElementById('afx-account-user'),menu=document.getElementById('afx-account-menu'),label=document.getElementById('afx-account-label'),name=document.getElementById('afx-account-fullname'),username=document.getElementById('afx-account-username'),avatar=document.getElementById('afx-account-avatar'),admin=document.getElementById('afx-account-admin'),logout=document.getElementById('afx-account-logout');if(!login||!user)return;fetch('/api/auth/me',{headers:{accept:'application/json'}}).then(r=>r.json()).then(d=>{if(!d.authenticated||!d.user)return;login.hidden=true;user.hidden=false;label.textContent=d.user.name||d.user.username||'Аккаунт';name.textContent=d.user.name||'Telegram';username.textContent=d.user.username?'@'+d.user.username:'Telegram ID '+d.user.id;if(d.user.picture){const img=document.createElement('img');img.src=d.user.picture;img.alt='';img.referrerPolicy='no-referrer';img.style.cssText='width:100%;height:100%;object-fit:cover';avatar.textContent='';avatar.appendChild(img)}else avatar.textContent=(d.user.name||'A').slice(0,1).toUpperCase();admin.hidden=d.user.role!=='admin'}).catch(()=>{});user.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open')});document.addEventListener('click',()=>menu.classList.remove('open'));menu.addEventListener('click',e=>e.stopPropagation());logout.addEventListener('click',async()=>{try{await fetch('/api/auth/logout',{method:'POST',headers:{'content-type':'application/json'},body:'{}'})}catch(e){}location.href='/'})})();
</script>`;

const REFERRAL_HTML = String.raw`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b0612"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><link rel="manifest" href="/manifest.webmanifest"><link rel="icon" href="/aurafx-app-icon.svg"><title>AuraFX — пригласи друга</title><style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#08040e;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}body:before{content:"";position:fixed;inset:-15%;background:radial-gradient(circle at 75% 8%,rgba(168,67,255,.22),transparent 29%),radial-gradient(circle at 12% 76%,rgba(73,229,255,.10),transparent 25%);pointer-events:none}.wrap{position:relative;max-width:1040px;margin:auto;padding:28px 18px 80px}.top{display:flex;justify-content:space-between;gap:12px;align-items:center}.brand{font-size:23px;font-weight:950}.brand span{background:linear-gradient(90deg,#64e8ff,#b34cff);-webkit-background-clip:text;color:transparent}.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:11px 14px;background:rgba(255,255,255,.055);color:#fff;text-decoration:none;font:inherit;font-size:13px;font-weight:850;cursor:pointer}.btn.primary{border:0;background:linear-gradient(135deg,#b247ff,#7027ed)}.btn.tg{border:0;background:#229ed9}.hero{margin-top:30px;padding:34px;border:1px solid rgba(255,255,255,.1);border-radius:30px;background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025));box-shadow:0 26px 90px rgba(0,0,0,.28);overflow:hidden}.kicker{display:inline-flex;padding:7px 11px;border:1px solid rgba(107,232,255,.22);border-radius:999px;color:#8deeff;font-size:10px;font-weight:950;letter-spacing:.14em;text-transform:uppercase}.hero h1{max-width:760px;margin:16px 0 12px;font-size:clamp(40px,7vw,76px);line-height:.95;letter-spacing:-.055em}.hero h1 em{font-style:normal;background:linear-gradient(90deg,#6cecff,#c45cff);-webkit-background-clip:text;color:transparent}.hero p{max-width:690px;margin:0;color:#a99cb5;line-height:1.65;font-size:15px}.reward{margin-top:20px;display:inline-flex;align-items:center;gap:10px;padding:12px 15px;border:1px solid rgba(91,232,183,.22);border-radius:16px;background:rgba(38,180,129,.08);color:#b2f7dc;font-weight:900}.grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:14px;margin-top:14px}.card{border:1px solid rgba(255,255,255,.09);border-radius:24px;background:rgba(255,255,255,.04);backdrop-filter:blur(18px);padding:20px}.card h2{margin:0 0 8px;font-size:20px}.muted{color:#95899f;line-height:1.55}.linkrow{display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:15px}.linkrow input{min-width:0;border:1px solid rgba(255,255,255,.1);border-radius:13px;background:#100819;color:#ddd3e5;padding:11px;font:inherit;font-size:11px}.actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:16px}.stat{padding:14px;border:1px solid rgba(255,255,255,.07);border-radius:16px;background:rgba(255,255,255,.025)}.stat b{display:block;font-size:25px}.stat span{color:#897d92;font-size:10px}.rewards{display:grid;gap:9px;margin-top:14px}.r{padding:14px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.025)}.rtop{display:flex;justify-content:space-between;gap:10px;align-items:center}.rcode{font:900 12px ui-monospace,SFMono-Regular,Menlo,monospace}.badge{padding:5px 8px;border-radius:999px;font-size:9px;font-weight:950}.available{background:rgba(62,219,157,.12);color:#8df2c3}.reserved{background:rgba(255,190,76,.12);color:#ffd479}.used{background:rgba(255,255,255,.07);color:#91879b}.r button{margin-top:10px}.how{display:grid;gap:11px;margin-top:14px}.step{display:grid;grid-template-columns:32px 1fr;gap:10px;align-items:start}.n{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,#7c31ef,#b44fff);display:grid;place-items:center;font-weight:950}.step b{display:block;font-size:13px}.step span{display:block;color:#93869e;font-size:11px;line-height:1.45;margin-top:3px}.login{text-align:center;padding:36px}.hidden{display:none!important}.msg{min-height:18px;margin-top:10px;color:#91edc8;font-size:11px}@media(max-width:760px){.grid{grid-template-columns:1fr}.hero{padding:24px}.stats{grid-template-columns:1fr 1fr 1fr}.top{align-items:flex-start}.linkrow{grid-template-columns:1fr}.linkrow .btn{width:100%}}
</style></head><body><main class="wrap"><header class="top"><div><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Referral</div><div class="muted" style="font-size:11px">Реферальный центр</div></div><div class="actions" style="margin:0"><a class="btn" href="/account">Личный кабинет</a><a class="btn" href="/">На сайт</a></div></header><section class="hero"><span class="kicker">AuraFX Referral</span><h1>Пригласи клиента.<br><em>Получи карточку бесплатно.</em></h1><p>Отправь персональную ссылку продавцу маркетплейса. Когда приглашённый пользователь войдёт через Telegram и завершит первый заказ в AuraFX, тебе автоматически начислится бонус.</p><div class="reward">🎁 1 успешный друг = 1 бесплатная карточка</div></section><section id="login" class="card login hidden"><h2>Войди через Telegram</h2><p class="muted">Так мы создадим твою персональную ссылку и будем считать бонусы.</p><a class="btn primary" href="/auth/telegram?next=/referral">✈ Войти через Telegram</a></section><section id="app" class="grid hidden"><div><div class="card"><h2>Твоя ссылка</h2><p class="muted">Отправь её другу. Реферальный код сохранится автоматически.</p><div class="linkrow"><input id="link" readonly value="Загружаем…"><button class="btn" id="copy" type="button">⧉ Копировать</button></div><div class="actions"><button class="btn tg" id="share" type="button">✈ Поделиться в Telegram</button></div><div class="stats"><div class="stat"><b id="total">0</b><span>заявок по ссылке</span></div><div class="stat"><b id="completed">0</b><span>успешных</span></div><div class="stat"><b id="available">0</b><span>бонусов доступно</span></div></div><div class="msg" id="msg"></div></div><div class="card" style="margin-top:14px"><h2>Как это работает</h2><div class="how"><div class="step"><div class="n">1</div><div><b>Отправляешь ссылку</b><span>Лучше отправить её прямо в Telegram через кнопку выше.</span></div></div><div class="step"><div class="n">2</div><div><b>Друг входит в AuraFX</b><span>Для начисления бонуса заказ должен быть оформлен после входа через Telegram.</span></div></div><div class="step"><div class="n">3</div><div><b>Первый заказ завершён</b><span>Система начисляет тебе одну бонусную карточку автоматически.</span></div></div><div class="step"><div class="n">4</div><div><b>Используешь бонус</b><span>Активируй его здесь и отправь следующую заявку обычным способом.</span></div></div></div></div></div><div class="card"><h2>Мои бонусы</h2><p class="muted">Каждый бонус действует на одну карточку в следующем заказе.</p><div class="rewards" id="rewards"><div class="muted">Загружаем…</div></div></div></section></main><script>
(()=>{const $=id=>document.getElementById(id);async function api(u){const r=await fetch(u,{headers:{accept:'application/json'}});let d={};try{d=await r.json()}catch(e){}if(!r.ok)throw new Error(d.error||'Ошибка');return d}function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}function statusLabel(s){return s==='available'?'Доступен':s==='reserved'?'В заявке':'Использован'}async function init(){let me={};try{me=await fetch('/api/auth/me').then(r=>r.json())}catch(e){}if(!me.authenticated){$('login').classList.remove('hidden');return}$('app').classList.remove('hidden');let d;try{d=await api('/api/account/referral')}catch(e){$('msg').textContent='Не удалось загрузить реферальные данные.';return}$('link').value=d.link||'';$('total').textContent=Number(d.total||0);$('completed').textContent=Number(d.completed||0);$('available').textContent=Number(d.available||0);const list=$('rewards'),rs=Array.isArray(d.rewards)?d.rewards:[];if(!rs.length){list.innerHTML='<div class="muted">Пока бонусов нет. Отправь персональную ссылку первому другу 💜</div>'}else{list.innerHTML=rs.map(r=>'<div class="r"><div class="rtop"><span class="rcode">'+esc(r.reward_code)+'</span><span class="badge '+esc(r.status)+'">'+statusLabel(r.status)+'</span></div><div class="muted" style="font-size:10px;margin-top:5px">1 карточка бесплатно · источник #'+Number(r.source_lead_id||0)+'</div>'+(r.status==='available'?'<button class="btn primary use" type="button" data-code="'+esc(r.reward_code)+'">Использовать в заказе →</button>':'')+'</div>').join('');list.querySelectorAll('.use').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('afx_referral_reward_code',b.dataset.code||'')}catch(e){}location.href='/?bonus=referral#contact'}))}$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(d.link||'');$('msg').textContent='Ссылка скопирована ✓'}catch(e){$('link').select()}});$('share').addEventListener('click',()=>{const text='Попробуй AuraFX — дизайн карточек товаров для маркетплейсов 💜';location.href='https://t.me/share/url?url='+encodeURIComponent(d.link||'')+'&text='+encodeURIComponent(text)})}init()})();
</script></body></html>`;

const SUPPORT_WIDGET_HTML = String.raw`
<style>
  #afx-support-fab{position:fixed;right:20px;bottom:44px;z-index:9998;width:62px;height:62px;border:1px solid rgba(112,235,255,.48);border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 28%,rgba(108,244,255,.20),transparent 30%),linear-gradient(145deg,rgba(26,13,44,.98),rgba(64,22,108,.98));color:#fff;box-shadow:inset 0 0 0 1px rgba(191,103,255,.22),inset 0 0 20px rgba(126,61,255,.18),0 16px 48px rgba(35,10,66,.52),0 0 18px rgba(79,230,255,.36),0 0 40px rgba(170,70,255,.30);cursor:pointer;font:900 25px/1 system-ui,-apple-system,Segoe UI,sans-serif;transition:.22s transform,.22s box-shadow,.22s border-color;-webkit-tap-highlight-color:transparent;isolation:isolate;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}
  #afx-support-fab:before{content:"";position:absolute;inset:-6px;border-radius:50%;border:1px solid rgba(115,236,255,.26);box-shadow:0 0 18px rgba(85,228,255,.22),0 0 34px rgba(166,71,255,.18);opacity:.72;animation:afxSupNeonPulse 2.7s ease-in-out infinite;pointer-events:none}
  #afx-support-fab:after{content:"";position:absolute;inset:4px;border-radius:50%;background:linear-gradient(145deg,rgba(255,255,255,.10),transparent 34%,rgba(119,64,255,.08));pointer-events:none;z-index:-1}
  #afx-support-fab:hover{transform:translateY(-3px) scale(1.045);border-color:rgba(145,244,255,.70);box-shadow:inset 0 0 0 1px rgba(201,124,255,.27),0 20px 58px rgba(36,10,70,.56),0 0 24px rgba(80,235,255,.48),0 0 52px rgba(173,70,255,.38)}
  .afx-sup-neon-icon{width:31px;height:31px;display:block;filter:drop-shadow(0 0 4px rgba(123,239,255,.95)) drop-shadow(0 0 9px rgba(171,92,255,.78));position:relative;z-index:2}.afx-sup-neon-icon path{vector-effect:non-scaling-stroke}
  @keyframes afxSupNeonPulse{0%,100%{transform:scale(.98);opacity:.52}50%{transform:scale(1.055);opacity:1}}
  #afx-support-fab .afx-sup-badge{position:absolute;right:-3px;top:-4px;z-index:4;min-width:20px;height:20px;padding:0 5px;border-radius:999px;background:#ff4c7e;border:2px solid #100719;color:#fff;display:none;place-items:center;font:900 10px/1 system-ui,-apple-system,Segoe UI,sans-serif;box-shadow:0 0 14px rgba(255,76,126,.48)}
  #afx-support-fab.has-unread .afx-sup-badge{display:grid}
  #afx-support-mini{position:fixed;right:20px;bottom:118px;z-index:9999;width:min(400px,calc(100vw - 24px));height:min(610px,calc(100dvh - 148px));display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.11);border-radius:26px;background:rgba(11,6,19,.97);box-shadow:0 30px 90px rgba(0,0,0,.58),0 0 50px rgba(129,48,220,.16);backdrop-filter:blur(24px) saturate(1.15);-webkit-backdrop-filter:blur(24px) saturate(1.15);color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;transform-origin:bottom right}
  #afx-support-mini.open{display:flex;animation:afxSupIn .18s ease-out}
  @keyframes afxSupIn{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}
  .afx-sup-head{flex:0 0 auto;display:flex;align-items:center;gap:10px;padding:14px 14px 12px;border-bottom:1px solid rgba(255,255,255,.075);background:linear-gradient(180deg,rgba(165,69,255,.10),rgba(255,255,255,0))}
  .afx-sup-logo{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,#5be6ff,#9f43ff);box-shadow:0 8px 24px rgba(115,62,220,.24);font-size:17px}
  .afx-sup-headtext{min-width:0;flex:1}.afx-sup-headtext b{display:block;font-size:14px;letter-spacing:-.01em}.afx-sup-headtext span{display:block;margin-top:3px;color:#968aa1;font-size:10px}
  .afx-sup-iconbtn{width:35px;height:35px;border:1px solid rgba(255,255,255,.08);border-radius:11px;background:rgba(255,255,255,.045);color:#b9adbf;display:grid;place-items:center;cursor:pointer;font:900 17px/1 inherit;padding:0}.afx-sup-iconbtn:hover{color:#fff;background:rgba(255,255,255,.075)}
  .afx-sup-body{min-height:0;flex:1;display:flex;flex-direction:column;overflow:hidden}.afx-sup-screen{min-height:0;flex:1;display:none;flex-direction:column}.afx-sup-screen.active{display:flex}
  .afx-sup-toolbar{padding:12px 12px 8px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}.afx-sup-search{width:100%;min-width:0;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:#100818;color:#fff;padding:11px 12px;font:inherit;font-size:12px;outline:none}.afx-sup-search:focus{border-color:rgba(172,83,255,.55);box-shadow:0 0 0 3px rgba(164,72,255,.10)}
  .afx-sup-primary,.afx-sup-secondary{border:0;border-radius:13px;padding:10px 12px;color:#fff;font:850 11px/1 inherit;cursor:pointer}.afx-sup-primary{background:linear-gradient(135deg,#aa45ff,#6b2be3)}.afx-sup-secondary{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
  .afx-sup-list{min-height:0;flex:1;overflow:auto;padding:4px 12px 12px;display:grid;align-content:start;gap:8px;overscroll-behavior:contain}.afx-sup-thread{width:100%;text-align:left;border:1px solid rgba(255,255,255,.075);border-radius:15px;background:rgba(255,255,255,.028);padding:12px;color:#fff;cursor:pointer}.afx-sup-thread:hover{border-color:rgba(170,89,255,.28);background:rgba(151,62,238,.07)}.afx-sup-threadtop{display:flex;gap:8px;align-items:center}.afx-sup-subject{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:900}.afx-sup-dot{min-width:19px;height:19px;padding:0 5px;border-radius:999px;background:#a443ff;display:grid;place-items:center;font-size:9px;font-weight:950}.afx-sup-meta{display:flex;justify-content:space-between;gap:8px;margin-top:7px;color:#7f7389;font-size:9px}.afx-sup-status{font-weight:900;color:#bfaed0}
  .afx-sup-empty{margin:auto;padding:26px;text-align:center;color:#86798f;font-size:12px;line-height:1.55}.afx-sup-login{margin:auto;padding:28px 22px;text-align:center}.afx-sup-login b{display:block;font-size:20px}.afx-sup-login p{color:#92869d;font-size:12px;line-height:1.55;margin:8px 0 14px}.afx-sup-login a{display:inline-flex;text-decoration:none}
  .afx-sup-chathead{flex:0 0 auto;display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.07)}.afx-sup-chatname{min-width:0;flex:1}.afx-sup-chatname b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}.afx-sup-chatname span{display:block;margin-top:3px;color:#82768d;font-size:9px}.afx-sup-messages{min-height:0;flex:1;overflow:auto;padding:13px;display:flex;flex-direction:column;gap:8px;overscroll-behavior:contain}.afx-sup-bubble{max-width:84%;padding:10px 12px;border-radius:15px;line-height:1.45;font-size:12px;white-space:pre-wrap;overflow-wrap:anywhere}.afx-sup-bubble.client{align-self:flex-end;background:linear-gradient(135deg,#8737e8,#6525bd);border-bottom-right-radius:5px}.afx-sup-bubble.admin{align-self:flex-start;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.08);border-bottom-left-radius:5px}.afx-sup-bubble small{display:block;margin-top:5px;opacity:.55;font-size:8px}.afx-sup-compose{flex:0 0 auto;padding:10px;border-top:1px solid rgba(255,255,255,.07);display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px}.afx-sup-compose textarea,.afx-sup-new input,.afx-sup-new select,.afx-sup-new textarea{width:100%;min-width:0;border:1px solid rgba(255,255,255,.09);border-radius:13px;background:#100818;color:#fff;padding:11px 12px;font:inherit;font-size:12px;outline:none}.afx-sup-compose textarea{resize:none;min-height:44px;max-height:96px}.afx-sup-compose button{align-self:end;height:44px}
  .afx-sup-new{padding:13px;display:grid;gap:9px;overflow:auto}.afx-sup-new textarea{min-height:110px;resize:vertical}.afx-sup-newstatus{min-height:18px;color:#a294aa;font-size:10px}.afx-sup-newactions{display:flex;justify-content:flex-end;gap:8px}.afx-sup-resolve{border:0;border-radius:10px;background:rgba(53,194,139,.12);color:#8af0c0;padding:8px 10px;font:850 10px/1 inherit;cursor:pointer}
  @media(max-width:620px){#afx-support-fab{right:14px;bottom:32px;width:58px;height:58px}.afx-sup-neon-icon{width:29px;height:29px}#afx-support-mini{left:8px;right:8px;bottom:102px;width:auto;height:min(72dvh,620px);border-radius:23px}.afx-sup-toolbar{grid-template-columns:1fr}.afx-sup-toolbar .afx-sup-primary{width:100%}}
</style>
<button id="afx-support-fab" type="button" aria-label="Открыть техподдержку AuraFX" aria-expanded="false"><svg class="afx-sup-neon-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M7.2 7.4h17.6a3.6 3.6 0 0 1 3.6 3.6v8.6a3.6 3.6 0 0 1-3.6 3.6H15l-6.2 4.2.9-4.2H7.2a3.6 3.6 0 0 1-3.6-3.6V11a3.6 3.6 0 0 1 3.6-3.6Z" fill="rgba(118,66,255,.10)" stroke="#c9fbff" stroke-width="1.65" stroke-linejoin="round"/><path d="M10 13.1h12M10 17.7h8.2" fill="none" stroke="#bca2ff" stroke-width="1.8" stroke-linecap="round"/></svg><span class="afx-sup-badge" id="afx-sup-badge">0</span></button>
<section id="afx-support-mini" aria-label="Мини-чат техподдержки AuraFX" aria-hidden="true">
  <div class="afx-sup-head"><div class="afx-sup-logo"><svg class="afx-sup-neon-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M7.2 7.4h17.6a3.6 3.6 0 0 1 3.6 3.6v8.6a3.6 3.6 0 0 1-3.6 3.6H15l-6.2 4.2.9-4.2H7.2a3.6 3.6 0 0 1-3.6-3.6V11a3.6 3.6 0 0 1 3.6-3.6Z" fill="rgba(118,66,255,.10)" stroke="#c9fbff" stroke-width="1.65" stroke-linejoin="round"/><path d="M10 13.1h12M10 17.7h8.2" fill="none" stroke="#bca2ff" stroke-width="1.8" stroke-linecap="round"/></svg></div><div class="afx-sup-headtext"><b>AuraFX Support</b><span>Техподдержка прямо на сайте</span></div><button class="afx-sup-iconbtn" id="afx-sup-open-full" type="button" title="Открыть полный центр">↗</button><button class="afx-sup-iconbtn" id="afx-sup-close" type="button" aria-label="Закрыть">×</button></div>
  <div class="afx-sup-body">
    <div class="afx-sup-screen active" id="afx-sup-home"><div class="afx-sup-toolbar"><input class="afx-sup-search" id="afx-sup-search" type="search" placeholder="Найти переписку по вопросу…" autocomplete="off"><button class="afx-sup-primary" id="afx-sup-newbtn" type="button">+ Новый вопрос</button></div><div class="afx-sup-list" id="afx-sup-list"><div class="afx-sup-empty">Загружаем обращения…</div></div></div>
    <div class="afx-sup-screen" id="afx-sup-chat"><div class="afx-sup-chathead"><button class="afx-sup-iconbtn" id="afx-sup-back" type="button" aria-label="Назад">←</button><div class="afx-sup-chatname"><b id="afx-sup-chat-title">Обращение</b><span id="afx-sup-chat-meta"></span></div><button class="afx-sup-resolve" id="afx-sup-resolve" type="button">✓ Решено</button></div><div class="afx-sup-messages" id="afx-sup-messages"><div class="afx-sup-empty">Загружаем сообщения…</div></div><div class="afx-sup-compose" id="afx-sup-compose"><textarea id="afx-sup-input" maxlength="1500" placeholder="Написать сообщение…"></textarea><button class="afx-sup-primary" id="afx-sup-send" type="button">Отправить</button></div></div>
    <div class="afx-sup-screen" id="afx-sup-new"><div class="afx-sup-chathead"><button class="afx-sup-iconbtn" id="afx-sup-newback" type="button" aria-label="Назад">←</button><div class="afx-sup-chatname"><b>Новый вопрос</b><span>Опиши проблему — ответ появится здесь</span></div></div><div class="afx-sup-new"><input id="afx-sup-subject" maxlength="100" placeholder="Тема вопроса"><select id="afx-sup-category"><option value="technical">Техническая проблема</option><option value="order">Вопрос по заказу</option><option value="payment">Оплата</option><option value="general">Другое</option></select><textarea id="afx-sup-firstmsg" maxlength="1500" placeholder="Что произошло?"></textarea><div class="afx-sup-newstatus" id="afx-sup-newstatus"></div><div class="afx-sup-newactions"><button class="afx-sup-secondary" id="afx-sup-cancelnew" type="button">Отмена</button><button class="afx-sup-primary" id="afx-sup-create" type="button">Создать обращение</button></div></div></div>
  </div>
</section>
<script>
(()=>{
  const q=s=>document.querySelector(s),fab=q('#afx-support-fab'),panel=q('#afx-support-mini'),badge=q('#afx-sup-badge'),list=q('#afx-sup-list'),search=q('#afx-sup-search');
  if(!fab||!panel)return;
  let threads=[],activeId=0,opened=false,timer=0,authenticated=null,lastMessageCount=0;
  const labels={open:'Открыт',waiting_client:'Ждём тебя',resolved:'Решён'},cats={technical:'Техническая проблема',order:'Вопрос по заказу',payment:'Оплата',general:'Другое'};
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=v=>{try{return new Date(String(v)+'Z').toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}catch(e){return ''}};
  const screens=['#afx-sup-home','#afx-sup-chat','#afx-sup-new'];
  function show(sel){screens.forEach(x=>{const el=q(x);if(el)el.classList.toggle('active',x===sel)})}
  async function api(url,opt){opt=opt||{};const r=await fetch(url,{...opt,headers:{accept:'application/json','content-type':'application/json',...(opt.headers||{})}});let d={};try{d=await r.json()}catch(e){}if(r.status===401){authenticated=false;throw new Error('AUTH')}if(!r.ok)throw new Error(d.error||'Ошибка');return d}
  function loginView(){show('#afx-sup-home');list.innerHTML='<div class="afx-sup-login"><b>Войди через Telegram</b><p>После входа переписка будет храниться в твоём аккаунте и доступна с других устройств.</p><a class="afx-sup-primary" href="/auth/telegram?next=/">✈ Войти через Telegram</a></div>';q('#afx-sup-newbtn').style.display='none';search.style.display='none'}
  async function ensureAuth(){if(authenticated!==null)return authenticated;try{const me=await fetch('/api/auth/me',{headers:{accept:'application/json'}}).then(r=>r.json());authenticated=!!(me&&me.authenticated&&me.user)}catch(e){authenticated=false}return authenticated}
  function totalUnread(){return threads.reduce((n,t)=>n+Number(t.unread||0),0)}
  function paintBadge(){const n=totalUnread();badge.textContent=n>99?'99+':String(n);fab.classList.toggle('has-unread',n>0)}
  function renderList(){const term=String(search.value||'').trim().toLowerCase();const a=threads.filter(t=>!term||String(t.subject||'').toLowerCase().includes(term)||String(cats[t.category]||t.category||'').toLowerCase().includes(term));if(!a.length){list.innerHTML='<div class="afx-sup-empty">'+(term?'Ничего не найдено по этому вопросу.':'Пока обращений нет.<br>Нажми «+ Новый вопрос».')+'</div>';return}list.innerHTML=a.map(t=>'<button class="afx-sup-thread" type="button" data-id="'+Number(t.id)+'"><div class="afx-sup-threadtop"><span class="afx-sup-subject">'+esc(t.subject)+'</span>'+(Number(t.unread)>0?'<span class="afx-sup-dot">'+Number(t.unread)+'</span>':'')+'</div><div class="afx-sup-meta"><span class="afx-sup-status">'+esc(labels[t.status]||t.status)+'</span><span>'+esc(fmt(t.updated_at))+'</span></div></button>').join('');list.querySelectorAll('.afx-sup-thread').forEach(b=>b.addEventListener('click',()=>openThread(Number(b.dataset.id))))}
  async function loadThreads(){if(!(await ensureAuth())){loginView();return}q('#afx-sup-newbtn').style.display='';search.style.display='';try{const d=await api('/api/account/support');threads=d.threads||[];paintBadge();renderList()}catch(e){if(e.message==='AUTH')loginView();else list.innerHTML='<div class="afx-sup-empty">Не удалось загрузить обращения.</div>'}}
  function renderMessages(d){const t=d.thread,m=d.messages||[];q('#afx-sup-chat-title').textContent=t.subject;q('#afx-sup-chat-meta').textContent=(cats[t.category]||t.category)+' · '+(labels[t.status]||t.status)+' · #'+t.id;q('#afx-sup-resolve').style.display=t.status==='resolved'?'none':'';const box=q('#afx-sup-messages');box.innerHTML=m.length?m.map(x=>'<div class="afx-sup-bubble '+(x.sender_role==='admin'?'admin':'client')+'">'+esc(x.body)+'<small>'+(x.sender_role==='admin'?'AuraFX Support':'Вы')+' · '+esc(fmt(x.created_at))+'</small></div>').join(''):'<div class="afx-sup-empty">Сообщений пока нет.</div>';if(m.length!==lastMessageCount){box.scrollTop=box.scrollHeight;lastMessageCount=m.length}}
  async function openThread(id){activeId=id;show('#afx-sup-chat');q('#afx-sup-messages').innerHTML='<div class="afx-sup-empty">Загружаем сообщения…</div>';try{const d=await api('/api/account/support/'+id);renderMessages(d);await loadThreads()}catch(e){if(e.message==='AUTH')loginView();else q('#afx-sup-messages').innerHTML='<div class="afx-sup-empty">Не удалось открыть переписку.</div>'}}
  async function send(){const input=q('#afx-sup-input'),body=input.value.trim();if(!body||!activeId)return;q('#afx-sup-send').disabled=true;try{await api('/api/account/support/'+activeId+'/messages',{method:'POST',body:JSON.stringify({body})});input.value='';await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}finally{q('#afx-sup-send').disabled=false}}
  function startTimer(){clearInterval(timer);timer=setInterval(async()=>{if(!opened||!authenticated)return;try{await loadThreads();if(activeId&&q('#afx-sup-chat').classList.contains('active')&&document.activeElement!==q('#afx-sup-input')){const d=await api('/api/account/support/'+activeId);renderMessages(d)}}catch(e){}},5000)}
  fab.addEventListener('click',async()=>{opened=!opened;panel.classList.toggle('open',opened);panel.setAttribute('aria-hidden',opened?'false':'true');fab.setAttribute('aria-expanded',opened?'true':'false');if(opened){show('#afx-sup-home');await loadThreads();startTimer()}else clearInterval(timer)});
  q('#afx-sup-close').onclick=()=>fab.click();q('#afx-sup-open-full').onclick=()=>{location.href='/support'};q('#afx-sup-back').onclick=()=>{activeId=0;show('#afx-sup-home');renderList()};q('#afx-sup-newback').onclick=q('#afx-sup-cancelnew').onclick=()=>show('#afx-sup-home');q('#afx-sup-newbtn').onclick=()=>{show('#afx-sup-new');setTimeout(()=>q('#afx-sup-subject').focus(),0)};search.addEventListener('input',renderList);
  q('#afx-sup-send').onclick=send;q('#afx-sup-input').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});
  q('#afx-sup-resolve').onclick=async()=>{if(!activeId)return;try{await api('/api/account/support/'+activeId,{method:'PATCH',body:JSON.stringify({status:'resolved'})});await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}};
  q('#afx-sup-create').onclick=async()=>{const subject=q('#afx-sup-subject').value.trim(),category=q('#afx-sup-category').value,message=q('#afx-sup-firstmsg').value.trim(),st=q('#afx-sup-newstatus');st.textContent='Создаём обращение…';q('#afx-sup-create').disabled=true;try{const d=await api('/api/account/support',{method:'POST',body:JSON.stringify({subject,category,message})});q('#afx-sup-subject').value='';q('#afx-sup-firstmsg').value='';st.textContent='';await loadThreads();await openThread(Number(d.id))}catch(e){if(e.message==='AUTH')loginView();else st.textContent=e.message}finally{q('#afx-sup-create').disabled=false}};
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&opened)fab.click()});
  setTimeout(async()=>{if(await ensureAuth())loadThreads().catch(()=>{})},1200);
})();
</script>`;

const SUPPORT_HTML = String.raw`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AuraFX — техподдержка</title><meta name="theme-color" content="#0b0612"><link rel="manifest" href="/manifest.webmanifest"><link rel="icon" href="/aurafx-app-icon.svg"><style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#09050f;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}body:before{content:"";position:fixed;inset:-20%;background:radial-gradient(circle at 80% 10%,rgba(151,61,255,.19),transparent 26%),radial-gradient(circle at 10% 88%,rgba(70,226,255,.08),transparent 23%);pointer-events:none}.wrap{position:relative;max-width:1160px;margin:auto;padding:24px 16px 48px}.top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}.brand{font-weight:950;font-size:24px}.brand span{background:linear-gradient(90deg,#64e8ff,#b64fff);-webkit-background-clip:text;color:transparent}.muted{color:#91859d}.btn,button{border:0;border-radius:13px;padding:11px 14px;background:#251630;color:#fff;text-decoration:none;font:850 13px/1.1 inherit;cursor:pointer}.primary{background:linear-gradient(135deg,#b247ff,#6d2bea)}.ghost{background:rgba(255,255,255,.06)}.ok{background:#123126;color:#8ff3c6}.danger{background:#39151d;color:#ff9cab}.hidden{display:none!important}.card{border:1px solid rgba(255,255,255,.095);background:linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.025));border-radius:22px;box-shadow:0 18px 60px rgba(0,0,0,.22);backdrop-filter:blur(18px)}.login{max-width:520px;margin:12vh auto 0;padding:28px}.login h1{margin:0 0 8px;font-size:34px}.login p{line-height:1.6}.shell{display:grid;grid-template-columns:330px minmax(0,1fr);gap:14px;min-height:680px}.side{padding:16px;display:flex;flex-direction:column;min-height:0}.side-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:13px}.side-head h2{margin:0;font-size:18px}.thread-list{display:grid;gap:8px;overflow:auto}.thread{width:100%;text-align:left;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.025);border-radius:15px;padding:12px;cursor:pointer}.thread.active{border-color:rgba(172,83,255,.52);background:rgba(139,55,232,.11)}.thread-top{display:flex;justify-content:space-between;gap:8px;align-items:center}.thread-title{font-weight:900;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.thread-meta{margin-top:6px;color:#82768d;font-size:10px;display:flex;justify-content:space-between;gap:8px}.badge{display:inline-flex;align-items:center;padding:5px 8px;border-radius:999px;font-size:9px;font-weight:900}.st-open{background:rgba(102,213,255,.12);color:#83e7ff}.st-waiting_client{background:rgba(255,188,61,.12);color:#ffd06f}.st-resolved{background:rgba(55,220,151,.12);color:#82f0be}.unread{min-width:19px;height:19px;border-radius:999px;background:#a344ff;display:grid;place-items:center;font-size:9px;font-weight:950}.chat{display:flex;flex-direction:column;min-height:680px;overflow:hidden}.chat-head{padding:17px 18px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;justify-content:space-between;align-items:center;gap:12px}.chat-head h2{margin:0;font-size:17px}.messages{flex:1;overflow:auto;padding:18px;display:flex;flex-direction:column;gap:10px;min-height:360px}.bubble{max-width:min(76%,650px);padding:11px 13px;border-radius:16px;line-height:1.5;font-size:13px;white-space:pre-wrap;overflow-wrap:anywhere}.bubble.client{align-self:flex-end;background:linear-gradient(135deg,#8737e8,#6625be);border-bottom-right-radius:5px}.bubble.admin{align-self:flex-start;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.08);border-bottom-left-radius:5px}.bubble small{display:block;margin-top:6px;opacity:.55;font-size:9px}.compose{padding:13px;border-top:1px solid rgba(255,255,255,.07);display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px}.compose textarea,.newbox input,.newbox select,.newbox textarea{width:100%;border:1px solid rgba(255,255,255,.1);background:#100819;color:#fff;border-radius:13px;padding:12px 13px;font:inherit;outline:none}.compose textarea{resize:none;min-height:46px;max-height:130px}.newbox{padding:15px;margin-bottom:12px;border:1px solid rgba(164,75,255,.18);border-radius:17px;background:rgba(157,67,255,.045);display:grid;gap:9px}.newbox textarea{min-height:90px;resize:vertical}.new-actions{display:flex;gap:8px;justify-content:flex-end}.empty{margin:auto;text-align:center;color:#85798f;padding:28px;line-height:1.6}.statusline{min-height:18px;color:#8b7f95;font-size:11px;padding:0 2px}.intro{margin:0 0 15px;color:#a99db5;font-size:12px;line-height:1.55}
@media(max-width:780px){.shell{grid-template-columns:1fr;min-height:auto}.side{max-height:none;overflow:visible;position:relative;z-index:2}.thread-list{max-height:260px;overflow:auto}.chat{min-height:520px;position:relative;z-index:1}.bubble{max-width:88%}.top{align-items:flex-start}.top>div:last-child{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}}
</style></head><body><div class="wrap"><div class="top"><div><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Support</div><div class="muted" style="font-size:12px;margin-top:4px">Техническая поддержка прямо на сайте</div></div><div style="display:flex;gap:8px"><a class="btn ghost" href="/account">Личный кабинет</a><a class="btn ghost" href="/">На сайт</a></div></div>
<section id="needLogin" class="card login hidden"><h1>Войди через Telegram</h1><p class="muted">Так история обращений останется привязана только к твоему аккаунту и никто другой её не увидит.</p><a class="btn primary" href="/auth/telegram?next=/support">✈ Войти через Telegram</a></section>
<section id="supportApp" class="shell hidden"><aside class="card side"><div class="side-head"><h2>Обращения</h2><button class="primary" id="newThreadBtn" type="button">+ Новое</button></div><p class="intro">Ответ придёт сюда. Если Telegram-бот AuraFX доступен, он также сообщит о новом ответе.</p><div id="newThreadBox" class="newbox hidden"><input id="newSubject" maxlength="100" placeholder="Кратко опиши вопрос"><select id="newCategory"><option value="technical">Техническая проблема</option><option value="order">Вопрос по заказу</option><option value="payment">Оплата</option><option value="general">Другое</option></select><textarea id="newMessage" maxlength="1500" placeholder="Расскажи подробнее, что произошло"></textarea><div class="statusline" id="newStatus"></div><div class="new-actions"><button class="ghost" id="cancelNew" type="button">Отмена</button><button class="primary" id="createThread" type="button">Создать обращение</button></div></div><div class="thread-list" id="threadList"><div class="empty">Загружаем…</div></div></aside><main class="card chat"><div class="chat-head"><div><h2 id="chatTitle">Выбери обращение</h2><div class="muted" id="chatMeta" style="font-size:10px;margin-top:4px"></div></div><button class="ok hidden" id="resolveBtn" type="button">✓ Решено</button></div><div class="messages" id="messages"><div class="empty">Создай обращение или выбери существующее.</div></div><div class="compose hidden" id="composer"><textarea id="messageInput" maxlength="1500" placeholder="Написать сообщение…"></textarea><button class="primary" id="sendMessage" type="button">Отправить</button></div></main></section></div><script>
(()=>{const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let threads=[],activeId=0,lastMessageCount=0;const labels={open:'Открыт',waiting_client:'Ждём тебя',resolved:'Решён'},cats={technical:'Техническая проблема',order:'Вопрос по заказу',payment:'Оплата',general:'Другое'};function fmt(v){try{return new Date(String(v)+'Z').toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}catch{return ''}}async function api(url,opt){const r=await fetch(url,{headers:{accept:'application/json','content-type':'application/json'},...opt});let d={};try{d=await r.json()}catch{}if(r.status===401){$('#needLogin').classList.remove('hidden');$('#supportApp').classList.add('hidden');throw new Error('AUTH')}if(!r.ok)throw new Error(d.error||'Ошибка');return d}
function renderList(){const el=$('#threadList');if(!threads.length){el.innerHTML='<div class="empty">Пока обращений нет.<br>Нажми «+ Новое».</div>';return}el.innerHTML=threads.map(t=>'<button class="thread '+(Number(t.id)===Number(activeId)?'active':'')+'" data-id="'+t.id+'"><div class="thread-top"><span class="thread-title">'+esc(t.subject)+'</span>'+(Number(t.unread)>0?'<span class="unread">'+Number(t.unread)+'</span>':'')+'</div><div class="thread-meta"><span class="badge st-'+esc(t.status)+'">'+esc(labels[t.status]||t.status)+'</span><span>'+esc(fmt(t.updated_at))+'</span></div></button>').join('');el.querySelectorAll('.thread').forEach(b=>b.onclick=()=>openThread(Number(b.dataset.id)))}
async function loadThreads(selectFirst){const d=await api('/api/account/support');threads=d.threads||[];renderList();if(selectFirst&&!activeId&&threads[0])await openThread(Number(threads[0].id))}
function renderMessages(d){const t=d.thread,m=d.messages||[];$('#chatTitle').textContent=t.subject;$('#chatMeta').textContent=(cats[t.category]||t.category)+' · '+(labels[t.status]||t.status)+' · #'+t.id;$('#resolveBtn').classList.toggle('hidden',t.status==='resolved');$('#composer').classList.remove('hidden');const box=$('#messages');if(!m.length)box.innerHTML='<div class="empty">Сообщений пока нет.</div>';else box.innerHTML=m.map(x=>'<div class="bubble '+(x.sender_role==='admin'?'admin':'client')+'">'+esc(x.body)+'<small>'+(x.sender_role==='admin'?'AuraFX Support':'Вы')+' · '+esc(fmt(x.created_at))+'</small></div>').join('');if(m.length!==lastMessageCount){box.scrollTop=box.scrollHeight;lastMessageCount=m.length}}
async function openThread(id){activeId=id;renderList();try{const d=await api('/api/account/support/'+id);renderMessages(d);await loadThreads(false)}catch(e){if(e.message!=='AUTH')alert(e.message)}}
$('#newThreadBtn').onclick=()=>{$('#newThreadBox').classList.remove('hidden');$('#newSubject').focus()};$('#cancelNew').onclick=()=>$('#newThreadBox').classList.add('hidden');$('#createThread').onclick=async()=>{const subject=$('#newSubject').value.trim(),message=$('#newMessage').value.trim(),category=$('#newCategory').value,s=$('#newStatus');s.textContent='Создаём…';try{const d=await api('/api/account/support',{method:'POST',body:JSON.stringify({subject,category,message})});$('#newSubject').value='';$('#newMessage').value='';$('#newThreadBox').classList.add('hidden');s.textContent='';await loadThreads(false);await openThread(Number(d.id))}catch(e){if(e.message!=='AUTH')s.textContent=e.message}};async function send(){const input=$('#messageInput'),body=input.value.trim();if(!body||!activeId)return;$('#sendMessage').disabled=true;try{await api('/api/account/support/'+activeId+'/messages',{method:'POST',body:JSON.stringify({body})});input.value='';await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}finally{$('#sendMessage').disabled=false}}$('#sendMessage').onclick=send;$('#messageInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});$('#resolveBtn').onclick=async()=>{if(!activeId)return;try{await api('/api/account/support/'+activeId,{method:'PATCH',body:JSON.stringify({status:'resolved'})});await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}};
(async()=>{try{const me=await fetch('/api/auth/me',{headers:{accept:'application/json'}}).then(r=>r.json());if(!me.user){$('#needLogin').classList.remove('hidden');return}$('#supportApp').classList.remove('hidden');await loadThreads(true);setInterval(async()=>{try{await loadThreads(false);if(activeId&&document.activeElement!==$('#messageInput')){const d=await api('/api/account/support/'+activeId);renderMessages(d)}}catch{}},5000)}catch{$('#needLogin').classList.remove('hidden')}})()})();
</script></body></html>`;

const SUPPORT_ADMIN_HTML = String.raw`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AuraFX Admin — Support</title><meta name="theme-color" content="#0b0612"><style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#09050f;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}body:before{content:"";position:fixed;inset:-20%;background:radial-gradient(circle at 80% 12%,rgba(151,61,255,.18),transparent 27%),radial-gradient(circle at 10% 90%,rgba(70,226,255,.07),transparent 22%);pointer-events:none}.wrap{position:relative;max-width:1220px;margin:auto;padding:24px 16px 50px}.top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:18px}.brand{font-size:24px;font-weight:950}.brand span{background:linear-gradient(90deg,#64e8ff,#b64fff);-webkit-background-clip:text;color:transparent}.muted{color:#91859d}.btn,button{border:0;border-radius:13px;padding:11px 14px;background:#251630;color:#fff;text-decoration:none;font:850 12px/1.1 inherit;cursor:pointer}.primary{background:linear-gradient(135deg,#b247ff,#6d2bea)}.ghost{background:rgba(255,255,255,.06)}.ok{background:#123126;color:#8ff3c6}.warn{background:#352713;color:#ffd783}.hidden{display:none!important}.card{border:1px solid rgba(255,255,255,.095);background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.025));border-radius:22px;backdrop-filter:blur(18px);box-shadow:0 18px 60px rgba(0,0,0,.22)}.login{max-width:480px;margin:12vh auto 0;padding:28px}.login h1{margin:0 0 8px}.shell{display:grid;grid-template-columns:360px minmax(0,1fr);gap:14px;min-height:720px}.side{padding:14px;display:flex;flex-direction:column;min-height:0}.toolbar{display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap}.toolbar button.active{background:#7629ee}.list{display:grid;gap:8px;overflow:auto}.item{border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.025);border-radius:15px;padding:12px;text-align:left;cursor:pointer}.item.active{border-color:rgba(172,83,255,.52);background:rgba(139,55,232,.11)}.item-top{display:flex;justify-content:space-between;gap:8px}.item-title{font-weight:900;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-user{margin-top:5px;color:#b7aabd;font-size:10px}.item-meta{margin-top:7px;display:flex;justify-content:space-between;align-items:center;color:#776c80;font-size:9px}.badge{display:inline-flex;padding:5px 8px;border-radius:999px;font-size:9px;font-weight:900}.st-open{background:rgba(102,213,255,.12);color:#83e7ff}.st-waiting_client{background:rgba(255,188,61,.12);color:#ffd06f}.st-resolved{background:rgba(55,220,151,.12);color:#82f0be}.unread{min-width:20px;height:20px;border-radius:999px;background:#a344ff;display:grid;place-items:center;font-size:9px;font-weight:950}.chat{display:flex;flex-direction:column;overflow:hidden}.chat-head{padding:16px 17px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;justify-content:space-between;gap:10px;align-items:center}.chat-head h2{margin:0;font-size:17px}.actions{display:flex;gap:6px;flex-wrap:wrap}.messages{flex:1;overflow:auto;padding:18px;display:flex;flex-direction:column;gap:10px;min-height:390px}.bubble{max-width:min(78%,680px);padding:11px 13px;border-radius:16px;line-height:1.5;font-size:13px;white-space:pre-wrap;overflow-wrap:anywhere}.bubble.client{align-self:flex-start;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.08);border-bottom-left-radius:5px}.bubble.admin{align-self:flex-end;background:linear-gradient(135deg,#8737e8,#6625be);border-bottom-right-radius:5px}.bubble small{display:block;margin-top:6px;opacity:.55;font-size:9px}.compose{padding:13px;border-top:1px solid rgba(255,255,255,.07);display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px}.compose textarea{width:100%;min-height:48px;max-height:150px;resize:none;border:1px solid rgba(255,255,255,.1);background:#100819;color:#fff;border-radius:13px;padding:12px 13px;font:inherit;outline:none}.empty{margin:auto;text-align:center;color:#85798f;padding:28px;line-height:1.6}.count{padding:7px 10px;border-radius:999px;background:rgba(164,75,255,.11);color:#d8b7ff;font-size:10px;font-weight:900}
@media(max-width:820px){.shell{grid-template-columns:1fr;min-height:auto}.side{max-height:360px}.chat{min-height:620px}.bubble{max-width:90%}.top{align-items:flex-start}}
</style></head><body><div class="wrap"><div class="top"><div><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Support Admin</div><div class="muted" style="font-size:12px;margin-top:4px">Входящие обращения клиентов</div></div><div style="display:flex;gap:8px"><a class="btn ghost" href="/admin">← Админка</a><a class="btn ghost" href="/support" target="_blank">Клиентский вид ↗</a></div></div><section id="loginBox" class="card login hidden"><h1>Нужен вход в админку</h1><p class="muted">Открой основную админ-панель и войди, затем вернись сюда.</p><a class="btn primary" href="/admin">Открыть админку</a></section><section id="app" class="shell hidden"><aside class="card side"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px"><b>Диалоги</b><span class="count" id="totalCount">0</span></div><div class="toolbar" id="filters"><button class="active" data-filter="all">Все</button><button data-filter="open">Открытые</button><button data-filter="waiting_client">Ждём клиента</button><button data-filter="resolved">Решённые</button></div><div class="list" id="list"><div class="empty">Загружаем…</div></div></aside><main class="card chat"><div class="chat-head"><div><h2 id="title">Выбери обращение</h2><div id="meta" class="muted" style="font-size:10px;margin-top:4px"></div></div><div class="actions hidden" id="statusActions"><button class="ghost" data-status="open">Открыт</button><button class="warn" data-status="waiting_client">Ждём клиента</button><button class="ok" data-status="resolved">Решён</button></div></div><div class="messages" id="messages"><div class="empty">Выбери диалог слева.</div></div><div class="compose hidden" id="composer"><textarea id="reply" maxlength="2000" placeholder="Ответить клиенту…"></textarea><button class="primary" id="send" type="button">Отправить</button></div></main></section></div><script>
(()=>{const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let threads=[],activeId=0,filter='all',lastCount=0;const labels={open:'Открыт',waiting_client:'Ждём клиента',resolved:'Решён'},cats={technical:'Техническая проблема',order:'Вопрос по заказу',payment:'Оплата',general:'Другое'};function fmt(v){try{return new Date(String(v)+'Z').toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}catch{return ''}}async function api(url,opt){const r=await fetch(url,{headers:{accept:'application/json','content-type':'application/json'},...opt});let d={};try{d=await r.json()}catch{}if(r.status===401){$('#loginBox').classList.remove('hidden');$('#app').classList.add('hidden');throw new Error('AUTH')}if(!r.ok)throw new Error(d.error||'Ошибка');return d}
function visible(){return filter==='all'?threads:threads.filter(t=>t.status===filter)}function renderList(){const a=visible(),el=$('#list');$('#totalCount').textContent=threads.length;if(!a.length){el.innerHTML='<div class="empty">Нет обращений в этом разделе.</div>';return}el.innerHTML=a.map(t=>'<button class="item '+(Number(t.id)===Number(activeId)?'active':'')+'" data-id="'+t.id+'"><div class="item-top"><span class="item-title">#'+t.id+' · '+esc(t.subject)+'</span>'+(Number(t.unread)>0?'<span class="unread">'+Number(t.unread)+'</span>':'')+'</div><div class="item-user">'+esc(t.name||'Telegram')+(t.username?' · @'+esc(t.username):'')+'</div><div class="item-meta"><span class="badge st-'+esc(t.status)+'">'+esc(labels[t.status]||t.status)+'</span><span>'+esc(fmt(t.updated_at))+'</span></div></button>').join('');el.querySelectorAll('.item').forEach(b=>b.onclick=()=>openThread(Number(b.dataset.id)))}async function loadList(selectFirst){const d=await api('/api/admin/support');threads=d.threads||[];renderList();if(selectFirst&&!activeId&&visible()[0])await openThread(Number(visible()[0].id))}
function renderDetail(d){const t=d.thread,m=d.messages||[];$('#title').textContent='#'+t.id+' · '+t.subject;$('#meta').textContent=(t.name||'Telegram')+(t.username?' · @'+t.username:'')+' · '+(cats[t.category]||t.category)+' · '+(labels[t.status]||t.status);$('#statusActions').classList.remove('hidden');$('#composer').classList.remove('hidden');const box=$('#messages');box.innerHTML=m.length?m.map(x=>'<div class="bubble '+(x.sender_role==='admin'?'admin':'client')+'">'+esc(x.body)+'<small>'+(x.sender_role==='admin'?'Вы':'Клиент')+' · '+esc(fmt(x.created_at))+'</small></div>').join(''):'<div class="empty">Нет сообщений.</div>';if(m.length!==lastCount){box.scrollTop=box.scrollHeight;lastCount=m.length}}
async function openThread(id){activeId=id;renderList();try{const d=await api('/api/admin/support/'+id);renderDetail(d);await loadList(false)}catch(e){if(e.message!=='AUTH')alert(e.message)}}$('#filters').querySelectorAll('button').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;$('#filters').querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));renderList()});async function send(){const input=$('#reply'),body=input.value.trim();if(!activeId||!body)return;$('#send').disabled=true;try{await api('/api/admin/support/'+activeId+'/messages',{method:'POST',body:JSON.stringify({body})});input.value='';await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}finally{$('#send').disabled=false}}$('#send').onclick=send;$('#reply').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}});$('#statusActions').querySelectorAll('button').forEach(b=>b.onclick=async()=>{if(!activeId)return;try{await api('/api/admin/support/'+activeId,{method:'PATCH',body:JSON.stringify({status:b.dataset.status})});await openThread(activeId)}catch(e){if(e.message!=='AUTH')alert(e.message)}});
(async()=>{try{$('#app').classList.remove('hidden');await loadList(true);setInterval(async()=>{try{await loadList(false);if(activeId&&document.activeElement!==$('#reply')){const d=await api('/api/admin/support/'+activeId);renderDetail(d)}}catch{}},4500)}catch(e){if(e.message!=='AUTH')$('#loginBox').classList.remove('hidden')}})()})();
</script></body></html>`;

const ACCOUNT_HTML = String.raw`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AuraFX — личный кабинет</title><meta name="theme-color" content="#0b0612"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" href="/aurafx-app-icon.svg"><style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#09050f;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}body:before{content:"";position:fixed;inset:-20%;background:radial-gradient(circle at 80% 10%,rgba(153,65,255,.18),transparent 28%),radial-gradient(circle at 15% 80%,rgba(74,225,255,.08),transparent 24%);pointer-events:none}.wrap{position:relative;max-width:980px;margin:auto;padding:30px 18px 80px}.top{display:flex;justify-content:space-between;align-items:center;gap:12px}.brand{font-size:24px;font-weight:950}.brand span{background:linear-gradient(90deg,#64e8ff,#b34cff);-webkit-background-clip:text;color:transparent}.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid rgba(255,255,255,.1);border-radius:13px;padding:11px 14px;background:rgba(255,255,255,.055);color:#fff;text-decoration:none;font-weight:850;font-size:13px;cursor:pointer}.primary{background:linear-gradient(135deg,#af48ff,#6e29ed);border:0}.grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:14px;margin-top:28px}.card{border:1px solid rgba(255,255,255,.1);border-radius:24px;background:rgba(255,255,255,.045);backdrop-filter:blur(18px);padding:22px;box-shadow:0 22px 70px rgba(0,0,0,.25)}.profile{text-align:center}.avatar{width:88px;height:88px;margin:3px auto 14px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#58e6ff,#a33cff);font-size:30px;font-weight:950;overflow:hidden}.avatar img{width:100%;height:100%;object-fit:cover}.profile h1{font-size:25px;margin:0}.muted{color:#96899f;line-height:1.55}.role{display:inline-flex;margin-top:12px;padding:6px 10px;border-radius:999px;background:rgba(164,72,255,.12);color:#d8baff;font-size:11px;font-weight:850}.orders h2{margin:0 0 4px;font-size:22px}.order-list{display:grid;gap:10px;margin-top:16px}.order{border:1px solid rgba(255,255,255,.08);border-radius:17px;padding:15px;background:rgba(255,255,255,.025)}.order-top{display:flex;justify-content:space-between;gap:10px}.order b{font-size:14px}.order small{color:#7f7489}.status{font-size:10px;font-weight:900;padding:5px 8px;border-radius:999px;background:rgba(102,213,255,.12);color:#83e7ff;white-space:nowrap}.status.contacted{background:rgba(177,91,255,.14);color:#d3a6ff}.status.review{background:rgba(255,188,61,.13);color:#ffd06f}.status.revision{background:rgba(255,126,86,.13);color:#ffb08e}.status.done{background:rgba(55,220,151,.12);color:#82f0be}.status.spam{background:rgba(255,103,128,.12);color:#ff9bac}.track{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:5px;margin-top:14px}.step{position:relative;padding-top:12px;color:#675d70;font-size:9px;line-height:1.25;text-align:center}.step:before{content:"";position:absolute;top:0;left:50%;width:7px;height:7px;border-radius:50%;transform:translateX(-50%);background:#3b3145;box-shadow:0 0 0 3px #17101d}.step:after{content:"";position:absolute;top:3px;right:50%;width:100%;height:1px;background:#302638}.step:first-child:after{display:none}.step.on{color:#dcd1e6}.step.on:before{background:#a64bff;box-shadow:0 0 0 3px rgba(166,75,255,.14),0 0 14px rgba(166,75,255,.45)}.step.done-step{color:#9c90a7}.step.done-step:before{background:#5dd9b1}.step.done-step:after,.step.on:after{background:#67507e}.decision{margin-top:13px;padding:13px;border:1px solid rgba(176,93,255,.14);border-radius:15px;background:rgba(148,65,255,.045)}.decision-title{font-size:12px;font-weight:900}.decision-note{margin-top:6px;color:#a79aad;font-size:12px;line-height:1.5;white-space:pre-wrap}.decision-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:11px}.decision .ok{background:#123126;color:#8ff3c6}.decision .warn{background:#352713;color:#ffd783}.revision-form{display:none;margin-top:10px}.revision-form.open{display:block}.revision-form textarea{width:100%;min-height:90px;resize:vertical;border:1px solid rgba(255,255,255,.11);border-radius:13px;background:#100819;color:#fff;padding:11px 12px;font:inherit;outline:none}.revision-form textarea:focus{border-color:#a64bff;box-shadow:0 0 0 3px rgba(164,72,255,.1)}.revision-form .btn{margin-top:8px}.order-msg{min-height:16px;margin-top:8px;color:#9d91a7;font-size:11px}.order-msg.bad{color:#ff9bac}.order-msg.good{color:#82f0be}.refbox{margin-top:18px;padding-top:17px;border-top:1px solid rgba(255,255,255,.08);text-align:left}.refbox b{font-size:13px}.refbox p{margin:6px 0 10px;color:#8f8399;font-size:11px;line-height:1.45}.refrow{display:flex;gap:7px}.refrow input{min-width:0;flex:1;border:1px solid rgba(255,255,255,.1);border-radius:11px;background:#0e0816;color:#d7cce0;padding:9px 10px;font:inherit;font-size:10px}.refstats{margin-top:8px;color:#b69acb;font-size:10px}.empty{padding:26px;border:1px dashed rgba(255,255,255,.1);border-radius:17px;color:#8d8197;text-align:center}.login{max-width:520px;margin:16vh auto;text-align:center}.login h1{font-size:36px;margin:0 0 10px}.login .btn{margin-top:12px}.hidden{display:none!important}@media(max-width:760px){.grid{grid-template-columns:1fr}.wrap{padding-top:20px}.top{align-items:flex-start}}
</style></head><body><div class="wrap"><div class="top"><div><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Account</div><div class="muted" style="font-size:12px">Личный кабинет клиента</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn primary" href="/client">✦ AuraFX Client</a><a class="btn" href="/">← На сайт</a><a class="btn" href="/support">💬 Поддержка</a><a class="btn hidden" id="adminLink" href="/admin">Админка</a></div></div><section id="needLogin" class="card login hidden"><h1>Войди через Telegram</h1><p class="muted">Без паролей и отдельной регистрации. После входа здесь будут твои заявки, этапы работы и согласование макета.</p><a class="btn primary" href="/auth/telegram?next=/account">✈ Войти через Telegram</a></section><section id="account" class="grid hidden"><div class="card profile"><div class="avatar" id="avatar">A</div><h1 id="name">Telegram</h1><div class="muted" id="username"></div><div class="role" id="role">Клиент AuraFX</div><div style="margin-top:18px"><button class="btn" id="logout">Выйти</button></div><div class="refbox"><b>💜 Пригласи друга — получи бонус</b><p>За первого завершённого заказа каждого приглашённого клиента получаешь <b>1 карточку бесплатно</b>.</p><div class="refrow"><input id="refLink" readonly value="Загружаем…"><button class="btn" id="refCopy" type="button">Копировать</button></div><div class="refstats" id="refStats">Считаем приглашения…</div><div class="refstats" id="refBonus">Проверяем бонусы…</div><a class="btn primary" style="margin-top:10px;width:100%" href="/referral">Открыть реферальный центр →</a></div></div><div class="card orders"><h2>Мои заявки</h2><p class="muted" style="margin:0">Следи за этапом заказа и согласовывай готовый макет прямо здесь.</p><div class="order-list" id="orders"><div class="empty">Загружаем…</div></div></div></section></div><script>
(()=>{const statusMeta={new:{label:'Заявка принята',step:0},contacted:{label:'В работе',step:1},review:{label:'На согласовании',step:2},revision:{label:'Правки',step:3},done:{label:'Готово',step:4},spam:{label:'Закрыта',step:-1}};const stepLabels=['Заявка принята','В работе','На согласовании','Правки','Готово'];const byId=id=>document.getElementById(id);async function api(url,opt){opt=opt||{};const headers=Object.assign({accept:'application/json','content-type':'application/json'},opt.headers||{});const r=await fetch(url,Object.assign({},opt,{headers:headers}));let d={};try{d=await r.json()}catch(e){}if(!r.ok)throw new Error(d.error||'Ошибка');return d}function makeTrack(status){const meta=statusMeta[status]||{step:0};const box=document.createElement('div');box.className='track';stepLabels.forEach((label,i)=>{const s=document.createElement('div');s.className='step';if(meta.step>=0&&i<meta.step)s.classList.add('done-step');if(i===meta.step)s.classList.add('on');s.textContent=label;box.appendChild(s)});return box}async function loadOrders(){let data={orders:[]};try{data=await api('/api/account/leads')}catch(e){}const list=byId('orders');if(!data.orders||!data.orders.length){list.innerHTML='<div class="empty">Пока здесь нет заявок. Отправь новую заявку на сайте после входа — она появится здесь.</div>';return}list.textContent='';data.orders.forEach(o=>{const info=statusMeta[o.status]||{label:o.status||'Заявка',step:0};const card=document.createElement('div');card.className='order';const top=document.createElement('div');top.className='order-top';const title=document.createElement('b');title.textContent='#'+o.id+' · '+o.product;const st=document.createElement('span');st.className='status '+(o.status||'');st.textContent=info.label;top.append(title,st);const meta=document.createElement('div');meta.className='muted';meta.style='font-size:12px;margin-top:7px';meta.textContent=(o.marketplace||'')+' · '+(o.count||1)+' карточ.'+(o.deadline?' · срок '+o.deadline:'')+(o.created_at?' · '+new Date(o.created_at+'Z').toLocaleDateString('ru-RU'):'');card.append(top,meta);if(o.status!=='spam')card.appendChild(makeTrack(o.status));if(o.client_comment){const old=document.createElement('div');old.className='decision';const h=document.createElement('div');h.className='decision-title';h.textContent=o.client_decision==='revision'?'Запрошенные правки':'Последний комментарий';const note=document.createElement('div');note.className='decision-note';note.textContent=o.client_comment;old.append(h,note);card.appendChild(old)}if(o.status==='review'){const dec=document.createElement('div');dec.className='decision';const h=document.createElement('div');h.className='decision-title';h.textContent='Макет готов к согласованию';const p=document.createElement('div');p.className='decision-note';p.textContent='Если всё устраивает — прими макет. Если нужны изменения, опиши их максимально конкретно.';const actions=document.createElement('div');actions.className='decision-actions';const approve=document.createElement('button');approve.className='btn ok';approve.type='button';approve.textContent='✓ Принять макет';const revise=document.createElement('button');revise.className='btn warn';revise.type='button';revise.textContent='✎ Нужны правки';actions.append(approve,revise);const form=document.createElement('div');form.className='revision-form';const ta=document.createElement('textarea');ta.maxLength=800;ta.placeholder='Например: увеличить заголовок, заменить акцентный цвет, перенести характеристику выше…';const send=document.createElement('button');send.className='btn primary';send.type='button';send.textContent='Отправить правки';const msg=document.createElement('div');msg.className='order-msg';form.append(ta,send);dec.append(h,p,actions,form,msg);card.appendChild(dec);revise.addEventListener('click',()=>{form.classList.toggle('open');if(form.classList.contains('open'))ta.focus()});approve.addEventListener('click',async()=>{approve.disabled=true;revise.disabled=true;msg.className='order-msg';msg.textContent='Сохраняем решение…';try{await api('/api/account/leads/'+o.id+'/decision',{method:'POST',body:JSON.stringify({action:'approve'})});msg.className='order-msg good';msg.textContent='Макет принят ✓';await loadOrders()}catch(err){msg.className='order-msg bad';msg.textContent=err.message;approve.disabled=false;revise.disabled=false}});send.addEventListener('click',async()=>{const comment=ta.value.trim();if(comment.length<3){msg.className='order-msg bad';msg.textContent='Опиши правки хотя бы в нескольких словах.';return}send.disabled=true;approve.disabled=true;revise.disabled=true;msg.className='order-msg';msg.textContent='Отправляем правки…';try{await api('/api/account/leads/'+o.id+'/decision',{method:'POST',body:JSON.stringify({action:'revision',comment:comment})});msg.className='order-msg good';msg.textContent='Правки отправлены ✓';await loadOrders()}catch(err){msg.className='order-msg bad';msg.textContent=err.message;send.disabled=false;approve.disabled=false;revise.disabled=false}})}list.appendChild(card)})}async function loadReferral(){try{const d=await api('/api/account/referral');byId('refLink').value=d.link||'';byId('refStats').textContent='Заявок по ссылке: '+Number(d.total||0)+' · успешных друзей: '+Number(d.completed||0);byId('refBonus').textContent='🎁 Доступно бонусных карточек: '+Number(d.available||0)}catch(e){byId('refStats').textContent='Реферальная ссылка временно недоступна.';byId('refBonus').textContent=''}}async function init(){if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(()=>{});let me={};try{me=await fetch('/api/auth/me').then(r=>r.json())}catch(e){}if(!me.authenticated){byId('needLogin').classList.remove('hidden');return}const u=me.user;byId('account').classList.remove('hidden');byId('name').textContent=u.name||'Telegram';byId('username').textContent=u.username?'@'+u.username:'Telegram ID '+u.id;byId('role').textContent=u.role==='admin'?'Владелец · Admin':'Клиент AuraFX';if(u.role==='admin')byId('adminLink').classList.remove('hidden');if(u.picture){const img=document.createElement('img');img.src=u.picture;img.alt='';img.referrerPolicy='no-referrer';byId('avatar').textContent='';byId('avatar').appendChild(img)}await Promise.all([loadOrders(),loadReferral()])}byId('refCopy').addEventListener('click',async()=>{const link=byId('refLink').value;try{await navigator.clipboard.writeText(link);byId('refStats').textContent='Ссылка скопирована ✓'}catch(e){byId('refLink').select()}});byId('logout').addEventListener('click',async()=>{await fetch('/api/auth/logout',{method:'POST',headers:{'content-type':'application/json'},body:'{}'}).catch(()=>{});location.href='/'});init()})();
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
  const leadInfo = await env.DB.prepare("PRAGMA table_info(leads)").all();
  const leadCols = new Set((leadInfo.results || []).map(c => String(c.name)));
  if (!leadCols.has("telegram_id")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN telegram_id TEXT").run();
  if (!leadCols.has("client_decision")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN client_decision TEXT").run();
  if (!leadCols.has("client_comment")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN client_comment TEXT").run();
  if (!leadCols.has("client_decision_at")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN client_decision_at TEXT").run();
  if (!leadCols.has("referral_code")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN referral_code TEXT").run();
  if (!leadCols.has("referrer_telegram_id")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN referrer_telegram_id TEXT").run();
  if (!leadCols.has("referral_reward_code")) await env.DB.prepare("ALTER TABLE leads ADD COLUMN referral_reward_code TEXT").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_leads_telegram_created ON leads(telegram_id, created_at DESC)").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_leads_referrer_created ON leads(referrer_telegram_id, created_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS telegram_users (
    telegram_id TEXT PRIMARY KEY,
    name TEXT,
    username TEXT,
    picture TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    last_login TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS referral_codes (
    telegram_id TEXT PRIMARY KEY,
    code TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_referral_codes_code ON referral_codes(code)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS referral_rewards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    referrer_telegram_id TEXT NOT NULL,
    invited_telegram_id TEXT NOT NULL UNIQUE,
    source_lead_id INTEGER NOT NULL UNIQUE,
    reward_code TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'available',
    reserved_lead_id INTEGER,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    reserved_at TEXT,
    used_at TEXT
  )`).run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_referral_rewards_code ON referral_rewards(reward_code)").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_referral_rewards_owner_status ON referral_rewards(referrer_telegram_id,status,created_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS support_threads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telegram_id TEXT NOT NULL,
    subject TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    status TEXT NOT NULL DEFAULT 'open',
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    client_last_read_at TEXT,
    admin_last_read_at TEXT
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_support_threads_user_updated ON support_threads(telegram_id, updated_at DESC)").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_support_threads_status_updated ON support_threads(status, updated_at DESC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS support_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    thread_id INTEGER NOT NULL,
    sender_role TEXT NOT NULL,
    sender_telegram_id TEXT,
    body TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_support_messages_thread_created ON support_messages(thread_id, created_at ASC, id ASC)").run();
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS telegram_login_tokens (
    token TEXT PRIMARY KEY,
    next_path TEXT NOT NULL DEFAULT '/',
    bind_admin INTEGER NOT NULL DEFAULT 0,
    telegram_id TEXT,
    login_code TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    expires_at INTEGER NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();
  const tgLoginInfo = await env.DB.prepare("PRAGMA table_info(telegram_login_tokens)").all();
  const tgLoginCols = new Set((tgLoginInfo.results || []).map(c => String(c.name)));
  if (!tgLoginCols.has("login_code")) await env.DB.prepare("ALTER TABLE telegram_login_tokens ADD COLUMN login_code TEXT").run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_tg_login_expires ON telegram_login_tokens(expires_at)").run();
  await env.DB.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_tg_login_code ON telegram_login_tokens(login_code)").run();
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
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS automation_publish_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idempotency_key TEXT UNIQUE,
    target TEXT NOT NULL,
    message_id INTEGER,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    ip_hash TEXT
  )`).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS idx_automation_publish_created ON automation_publish_log(created_at DESC)").run();
}

function normalize(value) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

async function referralCodeFor(env, telegramId) {
  const id = String(telegramId || "").trim();
  if (!id) return "";
  const existing = await env.DB.prepare("SELECT code FROM referral_codes WHERE telegram_id=? LIMIT 1").bind(id).first();
  if (existing?.code) return String(existing.code);
  const seed = id + ":" + authSecret(env) + ":aurafx-referral-v1";
  const bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(seed)));
  const code = "AFX" + [...bytes.slice(0,6)].map(b=>b.toString(16).padStart(2,"0")).join("").toUpperCase();
  await env.DB.prepare("INSERT OR IGNORE INTO referral_codes (telegram_id,code) VALUES (?,?)").bind(id,code).run();
  const row = await env.DB.prepare("SELECT code FROM referral_codes WHERE telegram_id=? LIMIT 1").bind(id).first();
  return String(row?.code || code);
}

async function referralRewardCode(env, referrerId, invitedId, sourceLeadId) {
  const seed = [String(referrerId||""),String(invitedId||""),String(sourceLeadId||""),authSecret(env),"aurafx-referral-reward-v1"].join(":");
  const bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(seed)));
  return "AFXB" + [...bytes.slice(0,7)].map(b=>b.toString(16).padStart(2,"0")).join("").toUpperCase();
}

async function ensureReferralRewardForLead(env, leadId, origin) {
  const id=Number(leadId||0);if(!id)return {created:false};
  const lead=await env.DB.prepare("SELECT id,status,telegram_id,referrer_telegram_id,campaign,comment FROM leads WHERE id=? LIMIT 1").bind(id).first();
  const owner=String(lead?.referrer_telegram_id||"").trim(), invited=String(lead?.telegram_id||"").trim();
  if(!lead||String(lead.status)!=="done"||!owner||!invited||owner===invited||String(lead.campaign||"")==="free_audit"||String(lead.comment||"").startsWith("[Бесплатный мини-разбор]"))return {created:false};
  const rewardCode=await referralRewardCode(env,owner,invited,id);
  const result=await env.DB.prepare(`INSERT OR IGNORE INTO referral_rewards (referrer_telegram_id,invited_telegram_id,source_lead_id,reward_code,status) VALUES (?,?,?,?, 'available')`).bind(owner,invited,id,rewardCode).run();
  const created=Number(result?.meta?.changes||0)>0;
  if(created&&String(env.TELEGRAM_LOGIN_BOT_TOKEN||"").trim()){
    try{await telegramLoginApi(env,"sendMessage",{chat_id:owner,text:"🎁 AuraFX: реферальный бонус готов!\n\nПриглашённый клиент завершил первый заказ. Ты получил 1 карточку бесплатно на следующий заказ.\n\nБонус: "+rewardCode,reply_markup:{inline_keyboard:[[{text:"Открыть реферальный центр",url:String(origin||"").replace(/\/$/,"")+"/referral"}]]}})}catch{}
  }
  return {created,reward_code:rewardCode};
}

async function syncReferralRewardForLead(env, leadId, status) {
  const id=Number(leadId||0);if(!id)return;
  if(status==="done"){
    const lead=await env.DB.prepare("SELECT referral_reward_code FROM leads WHERE id=? LIMIT 1").bind(id).first();
    const code=String(lead?.referral_reward_code||"");
    if(code)await env.DB.prepare("UPDATE referral_rewards SET status='used',used_at=datetime('now') WHERE reward_code=? AND reserved_lead_id=? AND status='reserved'").bind(code,id).run();
    return;
  }
  if(status==="spam"){
    const lead=await env.DB.prepare("SELECT referral_reward_code FROM leads WHERE id=? LIMIT 1").bind(id).first();
    const code=String(lead?.referral_reward_code||"");
    if(code){
      await env.DB.prepare("UPDATE referral_rewards SET status='available',reserved_lead_id=NULL,reserved_at=NULL WHERE reward_code=? AND reserved_lead_id=? AND status='reserved'").bind(code,id).run();
      await env.DB.prepare("UPDATE leads SET referral_reward_code=NULL WHERE id=?").bind(id).run();
    }
  }
}

async function sendClientStatusTelegram(env, telegramId, leadId, product, status, origin) {
  const id=String(telegramId||"").trim();
  if(!id||!String(env.TELEGRAM_LOGIN_BOT_TOKEN||"").trim())return false;
  const labels={new:"Заявка принята",contacted:"В работе",review:"На согласовании",revision:"Правки",done:"Готово",spam:"Закрыта"};
  const extra=status==="review"?"\n\nМакет ждёт твоего решения — можно принять его или отправить правки в личном кабинете.":status==="done"?"\n\nЗаказ отмечен как готовый ✅":"";
  try{
    await telegramLoginApi(env,"sendMessage",{chat_id:id,text:"AuraFX · заявка #"+leadId+"\n"+(product||"Заказ")+"\n\nСтатус: "+(labels[status]||status)+extra,reply_markup:{inline_keyboard:[[{text:status==="review"?"Открыть согласование":"Открыть личный кабинет",url:String(origin||"").replace(/\/$/,"")+"/account"}]]}});
    return true;
  }catch{return false}
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

const AURAFX_DEFAULT_POST_CHANNEL = "@AuraFX_design";

function telegramPostTargets(env) {
  const extra = String(env.TELEGRAM_POST_ALLOWED_CHATS || "").split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
  const all = [AURAFX_DEFAULT_POST_CHANNEL, ...extra];
  return [...new Set(all)].filter(v => /^@[A-Za-z0-9_]{5,32}$/.test(v) || /^-100\d{5,20}$/.test(v));
}

async function telegramPostApi(env, method, payload = {}) {
  const token = String(env.TELEGRAM_POST_BOT_TOKEN || "").trim();
  if (!token) throw new Error("POST_BOT_TOKEN_MISSING");
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload)
  });
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok || data.ok !== true) {
    const err = new Error(String(data?.description || "Telegram API error"));
    err.code = "POST_BOT_API_ERROR";
    throw err;
  }
  return data.result;
}

async function telegramPostPhotoUpload(env, target, photo, caption = "") {
  const token = String(env.TELEGRAM_POST_BOT_TOKEN || "").trim();
  if (!token) throw new Error("POST_BOT_TOKEN_MISSING");
  const form = new FormData();
  form.append("chat_id", String(target));
  form.append("photo", photo, String(photo?.name || "aurafx-photo.jpg"));
  if (caption) form.append("caption", String(caption));
  const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, { method:"POST", body:form });
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok || data.ok !== true) {
    const err = new Error(String(data?.description || "Telegram API error"));
    err.code = "POST_BOT_API_ERROR";
    throw err;
  }
  return data.result;
}

function verifiedTelegramPost(result, target) {
  const messageId = Number(result?.message_id || 0);
  const chat = result?.chat;
  if (!Number.isSafeInteger(messageId) || messageId <= 0 || !chat || chat.id == null) {
    throw new Error("Telegram не подтвердил публикацию: в ответе нет message_id или данных канала.");
  }

  const expected = String(target || "").trim();
  const actualUsername = String(chat.username || "").trim();
  const actualId = String(chat.id || "").trim();
  if (expected.startsWith("@") && actualUsername.toLowerCase() !== expected.slice(1).toLowerCase()) {
    throw new Error(`Telegram вернул другой канал: @${actualUsername || "unknown"} вместо ${expected}.`);
  }
  if (expected.startsWith("-100") && actualId !== expected) {
    throw new Error(`Telegram вернул другой chat_id: ${actualId || "unknown"} вместо ${expected}.`);
  }

  return {
    message_id: messageId,
    chat_id: actualId,
    chat_username: actualUsername ? `@${actualUsername}` : "",
    chat_type: String(chat.type || "")
  };
}

async function telegramPostCheck(env, target = AURAFX_DEFAULT_POST_CHANNEL) {
  const allowed = telegramPostTargets(env);
  if (!allowed.includes(target)) throw new Error("Этот чат не добавлен в белый список AuraFX.");
  const me = await telegramPostApi(env, "getMe", {});
  const chat = await telegramPostApi(env, "getChat", { chat_id: target });
  const member = await telegramPostApi(env, "getChatMember", { chat_id: target, user_id: me.id });
  const admin = member && (member.status === "administrator" || member.status === "creator");
  const canPost = admin && member.can_post_messages !== false;
  return {
    bot_username: String(me?.username || "AuraFXPostBot"),
    target,
    chat_title: String(chat?.title || chat?.username || target),
    channel_ready: Boolean(canPost),
    member_status: String(member?.status || "unknown")
  };
}

const AURAFX_AUTOMATION_KEY_SETTING = "automation_api_key_hash";

function constantTimeTextEqual(a, b) {
  a = String(a || ""); b = String(b || "");
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function automationKeyConfigured(env) {
  return Boolean((await getAppSetting(env, AURAFX_AUTOMATION_KEY_SETTING)).trim());
}

async function createAutomationKey(env) {
  const token = "afx_auto_" + randomUrlSafe(36);
  const hash = await sha256UrlSafe(token);
  await setAppSetting(env, AURAFX_AUTOMATION_KEY_SETTING, hash);
  return token;
}

async function validAutomationRequest(request, env) {
  const stored = (await getAppSetting(env, AURAFX_AUTOMATION_KEY_SETTING)).trim();
  if (!stored) return false;
  const auth = String(request.headers.get("authorization") || "");
  let token = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
  if (!token) token = String(request.headers.get("x-aurafx-automation-key") || "").trim();
  if (!token || token.length < 32 || token.length > 160) return false;
  return constantTimeTextEqual(await sha256UrlSafe(token), stored);
}

async function automationPublishAllowed(env) {
  const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM automation_publish_log WHERE datetime(created_at) > datetime('now','-1 hour')").first();
  return Number(row?.n || 0) < 20;
}

async function handleAutomationApi(request, env, url) {
  try { await ensureDb(env); } catch { return json({ error:"База данных недоступна." },503); }
  if (!(await validAutomationRequest(request, env))) return json({ error:"Неверный ключ автоматизации." },401);

  if (url.pathname === "/api/automation/telegram/status" && request.method === "GET") {
    if (!String(env.TELEGRAM_POST_BOT_TOKEN || "").trim()) return json({ error:"TELEGRAM_POST_BOT_TOKEN не настроен." },503);
    const target = String(url.searchParams.get("target") || AURAFX_DEFAULT_POST_CHANNEL).trim();
    if (!telegramPostTargets(env).includes(target)) return json({ error:"Этот чат не разрешён для публикаций AuraFX." },403);
    try {
      const details = await telegramPostCheck(env,target);
      return json({ok:true,ready:Boolean(details.channel_ready),targets:telegramPostTargets(env),...details});
    } catch (e) { return json({error:String(e?.message || "Не удалось проверить Telegram.")},502); }
  }

  if (url.pathname === "/api/automation/telegram/publish" && request.method === "POST") {
    if (!String(env.TELEGRAM_POST_BOT_TOKEN || "").trim()) return json({ error:"TELEGRAM_POST_BOT_TOKEN не настроен." },503);
    if (!(await automationPublishAllowed(env))) return json({ error:"Лимит автоматических публикаций: до 20 в час." },429);
    let body={}; try { body=await request.json(); } catch { return json({error:"Некорректные данные."},400); }
    const target=String(body.target || AURAFX_DEFAULT_POST_CHANNEL).trim();
    if (!telegramPostTargets(env).includes(target)) return json({error:"Этот чат не разрешён для публикаций AuraFX."},403);
    const text=String(body.text || "").trim();
    const photoUrl=String(body.photo_url || "").trim();
    if (!text && !photoUrl) return json({error:"Добавь текст или фото."},400);
    if (text.length > (photoUrl ? 1000 : 4000)) return json({error:photoUrl?"Для поста с фото текст должен быть до 1000 символов.":"Текст должен быть до 4000 символов."},400);
    if (photoUrl) {
      let parsed; try { parsed=new URL(photoUrl); } catch { return json({error:"Некорректная ссылка на фото."},400); }
      if (parsed.protocol !== "https:") return json({error:"Фото должно быть доступно по HTTPS-ссылке."},400);
    }
    let idem=String(request.headers.get("idempotency-key") || body.idempotency_key || "").trim().slice(0,120);
    if (idem && !/^[A-Za-z0-9._:-]{8,120}$/.test(idem)) return json({error:"Некорректный Idempotency-Key."},400);
    if (idem) {
      const old=await env.DB.prepare("SELECT target,message_id,created_at FROM automation_publish_log WHERE idempotency_key=? LIMIT 1").bind(idem).first();
      if (old) return json({ok:true,duplicate:true,target:String(old.target),message_id:Number(old.message_id||0),created_at:String(old.created_at||"")});
    }
    try {
      const check=await telegramPostCheck(env,target);
      if (!check.channel_ready) return json({error:`@${check.bot_username || 'AuraFXPostBot'} не имеет права публиковать в ${target}.`},409);
      let result;
      if (photoUrl) result=await telegramPostApi(env,"sendPhoto",{chat_id:target,photo:photoUrl,caption:text || undefined});
      else result=await telegramPostApi(env,"sendMessage",{chat_id:target,text,link_preview_options:{is_disabled:body.link_preview === false}});
      const confirmation=verifiedTelegramPost(result,target);
      const messageId=confirmation.message_id;
      const ip=await hashIp(request);
      try {
        await env.DB.prepare("INSERT INTO automation_publish_log (idempotency_key,target,message_id,ip_hash) VALUES (?,?,?,?)").bind(idem || null,target,messageId,ip).run();
      } catch (e) {
        if (idem) {
          const old=await env.DB.prepare("SELECT target,message_id,created_at FROM automation_publish_log WHERE idempotency_key=? LIMIT 1").bind(idem).first();
          if (old) return json({ok:true,duplicate:true,target:String(old.target),message_id:Number(old.message_id||0),created_at:String(old.created_at||"")});
        }
      }
      return json({ok:true,telegram_confirmed:true,target,bot_username:check.bot_username,...confirmation});
    } catch (e) { return json({error:`Не удалось опубликовать: ${String(e?.message || 'Telegram не принял публикацию.')}`},502); }
  }

  return json({error:"Метод не поддерживается."},405);
}

function adminLink(request) {
  try { return new URL("/admin", request.url).toString(); }
  catch { return "https://aurafx-design.ru/admin"; }
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


function b64urlEncodeBytes(bytes) {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function b64urlEncodeText(value) { return b64urlEncodeBytes(new TextEncoder().encode(String(value))); }
function b64urlDecodeText(value) {
  let s = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s); const out = new Uint8Array(bin.length);
  for (let i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i);
  return new TextDecoder().decode(out);
}
function randomUrlSafe(size = 32) { const b = new Uint8Array(size); crypto.getRandomValues(b); return b64urlEncodeBytes(b); }
function randomLoginCode(size = 8) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const b = new Uint8Array(size); crypto.getRandomValues(b);
  let out = ""; for (const n of b) out += alphabet[n % alphabet.length];
  return out;
}
async function sha256UrlSafe(value) { return b64urlEncodeBytes(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value))))); }
function authSecret(env) { return String(env.AUTH_SESSION_SECRET || env.ADMIN_SESSION_SECRET || "").trim(); }
async function signedCompact(secret, payload) {
  const body = b64urlEncodeText(JSON.stringify(payload));
  const sig = await hmacHex(secret, body);
  return body + "." + sig;
}
async function verifyCompact(secret, token) {
  if (!secret || !token) return null;
  const i = String(token).lastIndexOf("."); if (i < 1) return null;
  const body = token.slice(0,i), sig = token.slice(i+1), expected = await hmacHex(secret, body);
  if (expected.length !== sig.length) return null; let diff=0;
  for (let n=0;n<expected.length;n++) diff |= expected.charCodeAt(n)^sig.charCodeAt(n);
  if (diff) return null;
  try { const payload=JSON.parse(b64urlDecodeText(body)); if (Number(payload.exp||0) < Math.floor(Date.now()/1000)) return null; return payload; } catch { return null; }
}
async function adminTelegramId(env) {
  const fixed = String(env.ADMIN_TELEGRAM_ID || "").trim();
  if (fixed) return fixed;
  try { return String(await getAppSetting(env, "admin_telegram_id") || "").trim(); } catch { return ""; }
}
async function isAdminTelegram(env, telegramId) { const id = await adminTelegramId(env); return Boolean(id && String(telegramId) === id); }
async function makeUserSession(env, telegramId, remember = false) {
  const secret = authSecret(env); if (!secret) throw new Error("AUTH_SECRET_MISSING");
  const ttl = remember ? 60*60*24*90 : 60*60*12;
  return signedCompact(secret, { id:String(telegramId), exp:Math.floor(Date.now()/1000)+ttl });
}
function sessionCookie(name, token, remember, sameSite = "Lax") {
  const maxAge = remember ? "; Max-Age=7776000" : "";
  return `${name}=${token}; Path=/${maxAge}; HttpOnly; Secure; SameSite=${sameSite}`;
}
async function sessionTelegramId(request, env) {
  const token = parseCookies(request).afx_user; const payload = await verifyCompact(authSecret(env), token); return payload ? String(payload.id||"") : "";
}
async function currentUser(request, env) {
  const id = await sessionTelegramId(request, env); if (!id) return null;
  try { await ensureDb(env); } catch { return null; }
  const row = await env.DB.prepare("SELECT telegram_id,name,username,picture FROM telegram_users WHERE telegram_id=? LIMIT 1").bind(id).first();
  if (!row) return null;
  return { id:String(row.telegram_id), name:String(row.name||""), username:String(row.username||""), picture:String(row.picture||""), role:(await isAdminTelegram(env,id))?"admin":"user" };
}
async function sha256Bytes(value) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value))));
}
async function hmacHexBytes(keyBytes, message) {
  const key = await crypto.subtle.importKey("raw", keyBytes, { name:"HMAC", hash:"SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(String(message)));
  return [...new Uint8Array(sig)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
function secureHexEqual(a,b){
  a=String(a||"").toLowerCase(); b=String(b||"").toLowerCase();
  if(a.length!==b.length) return false; let diff=0;
  for(let i=0;i<a.length;i++) diff|=a.charCodeAt(i)^b.charCodeAt(i);
  return diff===0;
}
function safeNext(value) { const v=String(value||""); return /^\/[A-Za-z0-9_\-\/?=&.%]*$/.test(v)&&!v.startsWith("//")?v:"/"; }
function escAttr(value){return String(value||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
async function verifyTelegramWidgetPayload(url, botToken){
  const hash=String(url.searchParams.get("hash")||"").trim().toLowerCase();
  const id=String(url.searchParams.get("id")||"").trim();
  const authDate=Number(url.searchParams.get("auth_date")||0);
  if(!hash||!/^[a-f0-9]{64}$/.test(hash)||!/^\d{3,30}$/.test(id)||!Number.isFinite(authDate)) throw new Error("TG_DATA");
  const now=Math.floor(Date.now()/1000);
  if(authDate>now+120 || now-authDate>900) throw new Error("TG_EXPIRED");
  const ignored=new Set(["hash","next","bind_token"]);
  const pairs=[];
  for(const [k,v] of url.searchParams.entries()) if(!ignored.has(k)) pairs.push([k,v]);
  pairs.sort((a,b)=>a[0].localeCompare(b[0]));
  const check=pairs.map(([k,v])=>`${k}=${v}`).join("\n");
  const secretKey=await sha256Bytes(botToken);
  const expected=await hmacHexBytes(secretKey,check);
  if(!secureHexEqual(expected,hash)) throw new Error("TG_SIGNATURE");
  const first=String(url.searchParams.get("first_name")||"").slice(0,80);
  const last=String(url.searchParams.get("last_name")||"").slice(0,80);
  const name=(first+" "+last).trim()||"Telegram";
  return {id,name,username:String(url.searchParams.get("username")||"").slice(0,80),picture:String(url.searchParams.get("photo_url")||"").slice(0,1000)};
}
async function verifyTelegramWebAppInitData(initData, botToken){
  const raw=String(initData||"");
  if(!raw || raw.length>12000) throw new Error("TG_WEBAPP_DATA");
  const params=new URLSearchParams(raw);
  const hash=String(params.get("hash")||"").trim().toLowerCase();
  const authDate=Number(params.get("auth_date")||0);
  if(!/^[a-f0-9]{64}$/.test(hash)||!Number.isFinite(authDate)) throw new Error("TG_WEBAPP_DATA");
  const now=Math.floor(Date.now()/1000);
  if(authDate>now+120 || now-authDate>3600) throw new Error("TG_WEBAPP_EXPIRED");
  const pairs=[];
  for(const [k,v] of params.entries()) if(k!=="hash"&&k!=="signature") pairs.push([k,v]);
  pairs.sort((a,b)=>a[0].localeCompare(b[0]));
  const check=pairs.map(([k,v])=>`${k}=${v}`).join("\n");
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode("WebAppData"),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  const secretKey=new Uint8Array(await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(String(botToken))));
  const expected=await hmacHexBytes(secretKey,check);
  if(!secureHexEqual(expected,hash)) throw new Error("TG_WEBAPP_SIGNATURE");
  let user={};try{user=JSON.parse(String(params.get("user")||"{}"))}catch{throw new Error("TG_WEBAPP_USER")}
  const id=String(user&&user.id||"");
  if(!/^\d{3,30}$/.test(id)) throw new Error("TG_WEBAPP_USER");
  const name=[user.first_name,user.last_name].filter(Boolean).join(" ").trim().slice(0,160)||"Telegram";
  return {id,name,username:String(user.username||"").slice(0,80),picture:String(user.photo_url||"").slice(0,1000)};
}
async function ensureTelegramClientMenu(env, request, chatId){
  const clientUrl=new URL("/client",request.url).toString();
  const menu_button={type:"web_app",text:"AuraFX Client",web_app:{url:clientUrl}};
  try{await telegramLoginApi(env,"setChatMenuButton",chatId?{chat_id:Number(chatId),menu_button}:{menu_button})}catch{}
  return clientUrl;
}
async function telegramLoginApi(env, method, payload = {}) {
  const token = String(env.TELEGRAM_LOGIN_BOT_TOKEN || "").trim();
  if (!token) throw new Error("LOGIN_BOT_TOKEN_MISSING");
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok || data.ok !== true) throw new Error("LOGIN_BOT_API_ERROR");
  return data.result;
}
async function loginWebhookSecret(env) {
  const source = `${String(env.TELEGRAM_LOGIN_BOT_TOKEN || "")}:${authSecret(env)}`;
  const bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source)));
  return [...bytes].map(b => b.toString(16).padStart(2,"0")).join("").slice(0,64);
}
async function ensureTelegramLoginWebhook(request, env) {
  const secretToken = await loginWebhookSecret(env);
  const webhookUrl = new URL("/api/auth/telegram/webhook", request.url).toString();
  await telegramLoginApi(env, "setWebhook", {
    url: webhookUrl,
    secret_token: secretToken,
    allowed_updates: ["message"]
  });
  return { webhookUrl, secretToken };
}
async function handleTelegramAuthStart(request, env, url) {
  const botToken = String(env.TELEGRAM_LOGIN_BOT_TOKEN || "").trim(), secret = authSecret(env);
  const rawBot = String(env.TELEGRAM_LOGIN_BOT_USERNAME || "AuraFXAuthBot").trim().replace(/^@/,"");
  const botUsername = /^[A-Za-z0-9_]{5,64}$/.test(rawBot) ? rawBot : "AuraFXAuthBot";
  if (!botToken || !secret) return new Response("Telegram Login ещё не настроен. Добавь TELEGRAM_LOGIN_BOT_TOKEN и ADMIN_SESSION_SECRET в Cloudflare Secrets.", {status:503, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  await ensureDb(env);

  let bindAdmin = url.searchParams.get("bind_admin") === "1" ? 1 : 0;
  if (bindAdmin && !(await validAdmin(request, env))) {
    return new Response("Для привязки Telegram сначала войди в админку по резервному паролю.", {status:403, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }

  let token = String(url.searchParams.get("resume") || "");
  let next = safeNext(url.searchParams.get("next") || (bindAdmin ? "/admin" : "/account"));
  const now = Math.floor(Date.now()/1000);
  let row = null, loginCode = "";

  if (/^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    row = await env.DB.prepare("SELECT token,next_path,bind_admin,telegram_id,login_code,status,expires_at FROM telegram_login_tokens WHERE token=? LIMIT 1").bind(token).first();
    if (!row || Number(row.expires_at||0) < now) {
      if (row) await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE token=?").bind(token).run();
      row = null; token = "";
    } else {
      next = safeNext(row.next_path || next);
      bindAdmin = Number(row.bind_admin||0)===1 ? 1 : 0;
      loginCode = String(row.login_code || "").toUpperCase();
      if (!/^[A-HJ-NP-Z2-9]{8}$/.test(loginCode)) {
        loginCode = randomLoginCode(8);
        await env.DB.prepare("UPDATE telegram_login_tokens SET login_code=? WHERE token=?").bind(loginCode, token).run();
      }
    }
  }

  if (!row) {
    token = randomUrlSafe(24);
    const expiresAt = now + 600;
    await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE expires_at < ?").bind(now-60).run();
    for (let i=0;i<8;i++) {
      loginCode = randomLoginCode(8);
      const exists = await env.DB.prepare("SELECT token FROM telegram_login_tokens WHERE login_code=? LIMIT 1").bind(loginCode).first();
      if (!exists) break;
    }
    await env.DB.prepare("INSERT INTO telegram_login_tokens (token,next_path,bind_admin,login_code,status,expires_at) VALUES (?,?,?,?,'pending',?)")
      .bind(token, next, bindAdmin, loginCode, expiresAt).run();
    const resumeUrl = new URL("/auth/telegram", request.url);
    resumeUrl.searchParams.set("resume", token);
    resumeUrl.searchParams.set("next", next);
    if (bindAdmin) resumeUrl.searchParams.set("bind_admin", "1");
    return new Response(null,{status:302,headers:{location:resumeUrl.pathname+resumeUrl.search,"cache-control":"no-store"}});
  }

  try { await ensureTelegramLoginWebhook(request, env); }
  catch {
    return new Response("Не удалось подключить @AuraFXAuthBot к сайту. Проверь TELEGRAM_LOGIN_BOT_TOKEN в Cloudflare и повтори.", {status:502, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }

  const deepLink = `https://t.me/${botUsername}?start=login_${token}`;
  const launchUrl = `/auth/telegram/launch?token=${encodeURIComponent(token)}`;
  const statusUrl = `/api/auth/telegram/status?token=${encodeURIComponent(token)}`;
  const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b0612"><title>Вход в AuraFX</title><style>
  *{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at 50% 0,#2a0f48 0,#0b0612 52%,#07040c 100%);color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}.card{width:min(440px,calc(100vw - 32px));padding:28px;border:1px solid rgba(255,255,255,.1);border-radius:28px;background:rgba(20,10,34,.86);box-shadow:0 28px 90px rgba(0,0,0,.42);text-align:center}.brand{font-weight:950;font-size:30px;letter-spacing:-.04em}.brand span{background:linear-gradient(90deg,#5de8ff,#ba5cff);-webkit-background-clip:text;color:transparent}.muted{color:#a99db5;line-height:1.55;margin:10px 0 22px}.btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:15px 18px;border:0;border-radius:16px;background:linear-gradient(135deg,#2ca5e0,#1686c8);color:white;text-decoration:none;font-weight:900;font-size:15px;box-shadow:0 14px 34px rgba(24,142,207,.28)}.btn2{margin-top:10px;background:rgba(255,255,255,.06);box-shadow:none;border:1px solid rgba(255,255,255,.1);cursor:pointer}.steps{margin:18px 0 0;padding:15px;border:1px solid rgba(255,255,255,.08);border-radius:18px;background:rgba(255,255,255,.03);text-align:left;color:#c8bdd1;font-size:13px;line-height:1.55}.status{margin-top:16px;min-height:22px;color:#77f6c1;font-size:13px}.status.wait{color:#bbaec8}.back{display:inline-block;margin-top:18px;color:#bbaec8;text-decoration:none;font-size:13px}.tiny{margin-top:10px;color:#746a7e;font-size:11px;line-height:1.45}.manual{margin:14px 0 0;padding:14px;border:1px solid rgba(93,232,255,.24);border-radius:18px;background:rgba(93,232,255,.055)}.manual b{display:block;font-size:12px;color:#c7bacf;margin-bottom:8px}.code{font:950 26px/1.1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.14em;color:#fff;user-select:all}.manual small{display:block;margin-top:8px;color:#9f92aa;line-height:1.4}.remember{display:flex;align-items:flex-start;gap:10px;margin:0 0 16px;padding:12px 13px;border:1px solid rgba(255,255,255,.09);border-radius:15px;background:rgba(255,255,255,.035);text-align:left;color:#ddd3e6;font-size:13px;cursor:pointer}.remember input{width:18px;height:18px;flex:0 0 18px;margin:1px 0 0;accent-color:#a64bff}.remember small{display:block;color:#8f829a;margin-top:3px;line-height:1.4}</style></head><body><main class="card"><div class="brand"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))"><span>AuraFX</span> Account</div><p class="muted">Подтверди вход через @${escAttr(botUsername)}. Сам вход завершится именно в этом браузере, поэтому сессия не потеряется.</p><label class="remember"><input id="rememberMe" type="checkbox" checked><span><b>Запомнить меня</b><small>Не придётся снова входить через Telegram на этом устройстве в течение 90 дней.</small></span></label><button class="btn" id="openTg" type="button">✈ Открыть @${escAttr(botUsername)}</button><button class="btn btn2" id="checkNow" type="button">✓ Я подтвердил — проверить вход</button><div class="manual"><b>TinyFish / встроенный браузер</b><div class="code">${escAttr(loginCode)}</div><small>Открой @${escAttr(botUsername)} в обычном Telegram на телефоне и отправь боту этот код одним сообщением. Затем вернись сюда.</small></div><div class="steps"><b>Обычный вход:</b><br>1. Кнопка откроет Telegram через отдельное временное окно браузера.<br>2. В боте нажми <b>Start / Запустить</b>.<br>3. Когда вернёшься в браузер, эта страница завершит вход автоматически.<br><br>Если встроенный браузер не открывает Telegram — используй код выше.</div><div class="status wait" id="status">Ждём подтверждение в Telegram…</div><div class="tiny">Код и ссылка действуют 10 минут. Пароль создавать не нужно.</div><a class="back" href="${escAttr(next)}">← Вернуться на сайт</a></main><script>
  (()=>{const s=document.getElementById('status'),check=document.getElementById('checkNow'),open=document.getElementById('openTg'),remember=document.getElementById('rememberMe');let stopped=false,busy=false,tries=0,launchWin=null;try{remember.checked=localStorage.getItem('afx_remember_login')!=='0'}catch(e){}remember.addEventListener('change',()=>{try{localStorage.setItem('afx_remember_login',remember.checked?'1':'0')}catch(e){}});
    async function poll(){if(stopped||busy)return;busy=true;tries++;try{const r=await fetch(${JSON.stringify(statusUrl)}+(remember.checked?'&remember=1':'&remember=0'),{headers:{accept:'application/json'},cache:'no-store',credentials:'same-origin'});const d=await r.json();if(r.ok&&d.authenticated){stopped=true;s.className='status';s.textContent='Готово. Входим…';try{if(launchWin&&!launchWin.closed)launchWin.close()}catch(e){}location.replace(d.next||${JSON.stringify(next)});return}if(d.status==='expired'){stopped=true;s.className='status wait';s.textContent='Ссылка истекла. Начни вход заново.';return}s.className='status wait';s.textContent='Ждём подтверждение в Telegram…'}catch(e){s.className='status wait';s.textContent='Проверяем соединение…'}finally{busy=false}if(!stopped&&tries<500)setTimeout(poll,900)}
    open.addEventListener('click',()=>{s.className='status wait';s.textContent='Открываем Telegram…';launchWin=window.open(${JSON.stringify(launchUrl)},'afxTelegramAuth','popup=yes,width=460,height=700');if(!launchWin){window.open(${JSON.stringify(deepLink)},'_blank');}setTimeout(()=>{tries=0;poll()},700)});
    check.addEventListener('click',()=>{tries=0;poll()});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!stopped){try{if(launchWin&&!launchWin.closed)launchWin.close()}catch(e){}tries=0;setTimeout(poll,80)}});
    window.addEventListener('focus',()=>{if(!stopped){try{if(launchWin&&!launchWin.closed)launchWin.close()}catch(e){}tries=0;setTimeout(poll,80)}});
    window.addEventListener('pageshow',()=>{if(!stopped){tries=0;setTimeout(poll,80)}});
    poll();
  })();
</script></body></html>`;
  return new Response(html, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, must-revalidate","pragma":"no-cache","content-security-policy":"default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; base-uri 'none'; frame-ancestors 'self'"}});
}

async function handleTelegramAuthLaunch(request, env, url) {
  const token = String(url.searchParams.get("token") || "");
  const rawBot = String(env.TELEGRAM_LOGIN_BOT_USERNAME || "AuraFXAuthBot").trim().replace(/^@/,"");
  const botUsername = /^[A-Za-z0-9_]{5,64}$/.test(rawBot) ? rawBot : "AuraFXAuthBot";
  if (!/^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    return new Response("Некорректная ссылка Telegram.", {status:400, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }
  await ensureDb(env);
  const row = await env.DB.prepare("SELECT status,expires_at FROM telegram_login_tokens WHERE token=? LIMIT 1").bind(token).first();
  const now = Math.floor(Date.now()/1000);
  if (!row || Number(row.expires_at||0) < now) {
    return new Response("Ссылка входа истекла. Закрой эту вкладку и начни вход заново.", {status:410, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }
  const tgScheme = `tg://resolve?domain=${encodeURIComponent(botUsername)}&start=${encodeURIComponent("login_"+token)}`;
  const tgWeb = `https://t.me/${botUsername}?start=login_${token}`;
  const html = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0b0612"><title>AuraFX → Telegram</title><style>
  *{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0612;color:#fff;font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif}.c{width:min(420px,calc(100vw - 28px));padding:26px;border:1px solid rgba(255,255,255,.1);border-radius:24px;background:#160d23;text-align:center}.logo{font-size:26px;font-weight:950}.muted{color:#a99db5;line-height:1.55}.btn{display:flex;align-items:center;justify-content:center;width:100%;padding:14px 16px;border-radius:15px;background:#229ed9;color:#fff;text-decoration:none;font-weight:900;margin-top:14px}.tiny{font-size:11px;color:#776d80;margin-top:12px;line-height:1.45}</style></head><body><main class="c"><div class="logo"><img src="/aurafx-logo.png" alt="" aria-hidden="true" style="width:36px;height:36px;object-fit:contain;vertical-align:middle;margin-right:8px;filter:drop-shadow(0 0 10px rgba(174,71,255,.35))">AuraFX × Telegram</div><p class="muted">Открываем @${escAttr(botUsername)}. После подтверждения просто вернись в браузер — это временное окно закроется автоматически.</p><a class="btn" id="manual" href="${escAttr(tgWeb)}">Открыть Telegram вручную</a><div class="tiny">Если Telegram уже открылся, ничего здесь нажимать не нужно.</div></main><script>
  (()=>{let left=false;
    function closeMe(){try{window.close()}catch(e){}}
    document.addEventListener('visibilitychange',()=>{if(document.hidden){left=true}else if(left){setTimeout(closeMe,60)}});
    window.addEventListener('pagehide',()=>{left=true});
    setTimeout(()=>{try{location.href=${JSON.stringify(tgScheme)}}catch(e){}},80);
    setTimeout(()=>{if(!document.hidden&&!left){document.getElementById('manual').focus()}},1400);
    window.addEventListener('focus',()=>{if(left)setTimeout(closeMe,80)});
  })();
</script></body></html>`;
  return new Response(html,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, must-revalidate","pragma":"no-cache","content-security-policy":"default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; base-uri 'none'; frame-ancestors 'self'"}});
}

async function handleTelegramAuthCallback(request, env, url) {
  const botToken=String(env.TELEGRAM_LOGIN_BOT_TOKEN||env.TELEGRAM_BOT_TOKEN||"").trim(), secret=authSecret(env);
  if(!botToken||!secret) return new Response("Telegram Login не настроен.",{status:503});
  let tg; try{tg=await verifyTelegramWidgetPayload(url,botToken)}catch(e){return new Response(e&&e.message==="TG_EXPIRED"?"Ссылка Telegram устарела. Попробуй войти ещё раз.":"Подпись Telegram не прошла проверку.",{status:401,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}
  await ensureDb(env);
  await env.DB.prepare(`INSERT INTO telegram_users (telegram_id,name,username,picture,last_login) VALUES (?,?,?,?,datetime('now')) ON CONFLICT(telegram_id) DO UPDATE SET name=excluded.name,username=excluded.username,picture=excluded.picture,last_login=datetime('now')`).bind(tg.id,tg.name,tg.username||null,tg.picture||null).run();
  const bindRaw=String(url.searchParams.get("bind_token")||"");
  if(bindRaw){const bind=await verifyCompact(secret,bindRaw);if(bind&&bind.purpose==="bind_admin") await setAppSetting(env,"admin_telegram_id",tg.id);}
  const remember=url.searchParams.get("remember")!=="0";
  const session=await makeUserSession(env,tg.id,remember), next=safeNext(url.searchParams.get("next")||"/");
  const headers=new Headers({location:next,"cache-control":"no-store"});
  headers.append("set-cookie",sessionCookie("afx_user",session,remember,"Lax"));
  return new Response(null,{status:302,headers});
}

async function handleTelegramAuthComplete(request, env, url) {
  const token = String(url.searchParams.get("token") || "");
  if (!/^[A-Za-z0-9_-]{20,64}$/.test(token)) {
    return new Response("Некорректная ссылка входа.", {status:400, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }
  await ensureDb(env);
  const row = await env.DB.prepare("SELECT token,next_path,bind_admin,telegram_id,status,expires_at FROM telegram_login_tokens WHERE token=? LIMIT 1").bind(token).first();
  if (!row) return new Response("Ссылка входа уже использована или недействительна. Вернись на сайт и войди через Telegram ещё раз.", {status:410, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  const now = Math.floor(Date.now()/1000);
  if (Number(row.expires_at||0) < now) {
    await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE token=?").bind(token).run();
    return new Response("Ссылка входа истекла. Вернись на сайт и войди через Telegram ещё раз.", {status:410, headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});
  }
  if (row.status !== "approved" || !row.telegram_id) {
    const retry = `/auth/telegram?next=${encodeURIComponent(safeNext(row.next_path || "/account"))}`;
    return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AuraFX — вход</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0612;color:#fff;font-family:system-ui}.c{width:min(440px,calc(100vw - 32px));padding:28px;border:1px solid #ffffff18;border-radius:24px;background:#150c22;text-align:center}.c a{display:block;margin-top:18px;padding:14px;border-radius:14px;background:#7a32ee;color:#fff;text-decoration:none;font-weight:800}</style><div class="c"><h2>Подтверждение ещё не пришло</h2><p>Вернись в @AuraFXAuthBot и нажми Start / Запустить, затем открой ссылку из сообщения бота.</p><a href="${escAttr(retry)}">Начать вход заново</a></div>`, {status:409, headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
  }
  const remember = url.searchParams.get("remember") !== "0";
  const session = await makeUserSession(env, String(row.telegram_id), remember);
  const next = Number(row.bind_admin||0)===1 ? "/admin" : safeNext(row.next_path || "/account");
  await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE token=?").bind(token).run();
  const headers = new Headers({location:next,"cache-control":"no-store"});
  headers.append("set-cookie",sessionCookie("afx_user",session,remember,"Lax"));
  return new Response(null,{status:302,headers});
}
async function handleAuthApi(request, env, url) {
  if(url.pathname==="/api/auth/telegram/webapp"&&request.method==="POST"){
    const botToken=String(env.TELEGRAM_LOGIN_BOT_TOKEN||"").trim();
    if(!botToken||!authSecret(env))return json({error:"Telegram Mini App не настроен."},503);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректный запрос."},400)}
    let tg;try{tg=await verifyTelegramWebAppInitData(body.init_data,botToken)}catch(e){return json({error:e.message==="TG_WEBAPP_EXPIRED"?"Сессия Telegram устарела. Открой AuraFX Client заново из бота.":"Не удалось подтвердить Telegram Mini App."},401)}
    await ensureDb(env);
    await env.DB.prepare(`INSERT INTO telegram_users (telegram_id,name,username,picture,last_login)
      VALUES (?,?,?,?,datetime('now'))
      ON CONFLICT(telegram_id) DO UPDATE SET name=excluded.name,username=excluded.username,picture=COALESCE(excluded.picture,telegram_users.picture),last_login=datetime('now')`)
      .bind(tg.id,tg.name,tg.username||null,tg.picture||null).run();
    const session=await makeUserSession(env,tg.id,true);
    const headers=new Headers({"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
    headers.append("set-cookie",sessionCookie("afx_user",session,true,"Lax"));
    return new Response(JSON.stringify({authenticated:true,user:{id:tg.id,name:tg.name,username:tg.username,picture:tg.picture,role:(await isAdminTelegram(env,tg.id))?"admin":"user"}}),{status:200,headers});
  }
  if (url.pathname === "/api/auth/telegram/webhook" && request.method === "POST") {
    const expected = await loginWebhookSecret(env);
    const got = String(request.headers.get("X-Telegram-Bot-Api-Secret-Token") || "");
    if (!expected || !got || !secureHexEqual(expected, got)) return new Response("forbidden", {status:403});
    let update = {}; try { update = await request.json(); } catch {}
    const msg = update && update.message;
    const from = msg && msg.from;
    const text = String(msg && msg.text || "").trim();
    const startMatch = text.match(/^\/start(?:@\w+)?\s+login_([A-Za-z0-9_-]{20,64})$/);
    const codeMatch = text.toUpperCase().match(/^([A-HJ-NP-Z2-9]{8})$/);
    if (!from || !from.id) return json({ok:true});

    const plainStart=/^\/start(?:@\w+)?$/i.test(text);
    const ordersCmd=/^\/(?:orders|status)(?:@\w+)?$/i.test(text)||/^мои\s+(?:заказы|заявки)$/i.test(text);
    const helpCmd=/^\/help(?:@\w+)?$/i.test(text);
    const refCmd=/^\/ref(?:@\w+)?$/i.test(text);
    const supportCmd=/^\/support(?:@\w+)?$/i.test(text);
    const appCmd=/^\/(?:app|client)(?:@\w+)?$/i.test(text);
    if (plainStart || ordersCmd || helpCmd || refCmd || supportCmd || appCmd) {
      await ensureDb(env);
      const tgId=String(from.id), chatId=String(msg.chat&&msg.chat.id||from.id), accountUrl=new URL("/account",request.url).toString(), clientUrl=await ensureTelegramClientMenu(env,request,chatId);
      if (ordersCmd) {
        const rows=await env.DB.prepare("SELECT id,product,status FROM leads WHERE telegram_id=? ORDER BY datetime(created_at) DESC,id DESC LIMIT 5").bind(tgId).all();
        const labels={new:"Заявка принята",contacted:"В работе",review:"На согласовании",revision:"Правки",done:"Готово",spam:"Закрыта"};
        const items=rows.results||[];
        const body=items.length?"📦 Твои последние заявки AuraFX:\n\n"+items.map(x=>"#"+x.id+" · "+String(x.product||"Заказ").slice(0,70)+"\n"+(labels[x.status]||x.status)).join("\n\n"):"У тебя пока нет заявок AuraFX. Когда отправишь заказ с сайта после входа через Telegram, он появится здесь.";
        try{await telegramLoginApi(env,"sendMessage",{chat_id:chatId,text:body,reply_markup:{inline_keyboard:[[{text:"✦ Открыть AuraFX Client",web_app:{url:clientUrl}}],[{text:"Личный кабинет в браузере",url:accountUrl}]]}})}catch{}
        return json({ok:true});
      }
      if (supportCmd) {
        const supportUrl=new URL("/support",request.url).toString();
        try{await telegramLoginApi(env,"sendMessage",{chat_id:chatId,text:"💬 Техподдержка AuraFX работает прямо на сайте. Там сохраняется история переписки и можно продолжить диалог в любое время.",reply_markup:{inline_keyboard:[[{text:"💬 Поддержка в Client",web_app:{url:clientUrl+"?tab=support"}}],[{text:"Полный центр поддержки",url:supportUrl}]]}})}catch{}
        return json({ok:true});
      }
      if (refCmd) {
        const code=await referralCodeFor(env,tgId), link=new URL("/?ref="+encodeURIComponent(code),request.url).toString(), center=new URL("/referral",request.url).toString();
        const rs=await env.DB.prepare("SELECT COUNT(*) AS earned,SUM(CASE WHEN status='available' THEN 1 ELSE 0 END) AS available FROM referral_rewards WHERE referrer_telegram_id=?").bind(tgId).first();
        try{await telegramLoginApi(env,"sendMessage",{chat_id:chatId,text:"💜 Твоя реферальная ссылка AuraFX:\n"+link+"\n\nЗа первого завершённого заказа каждого приглашённого клиента — 1 карточка бесплатно.\n\nПолучено бонусов: "+Number(rs?.earned||0)+" · доступно: "+Number(rs?.available||0),reply_markup:{inline_keyboard:[[{text:"💜 Бонусы в Client",web_app:{url:clientUrl+"?tab=bonus"}}],[{text:"Реферальный центр",url:center}]]}})}catch{}
        return json({ok:true});
      }
      if(appCmd){try{await telegramLoginApi(env,"sendMessage",{chat_id:chatId,text:"✦ AuraFX Client готов. Открой приложение — заказы, поддержка и бонусы будут в одном месте.",reply_markup:{inline_keyboard:[[{text:"Открыть AuraFX Client",web_app:{url:clientUrl}}]]}})}catch{}return json({ok:true});}
      const welcome=plainStart?"Привет! Это клиентский центр AuraFX 💜\n\nТеперь всё можно открыть прямо внутри Telegram через AuraFX Client.":"Команды AuraFX:\n/app — открыть AuraFX Client\n/orders — мои заявки\n/ref — моя реферальная ссылка\n/support — техподдержка\n/help — помощь";
      try{await telegramLoginApi(env,"sendMessage",{chat_id:chatId,text:welcome+"\n\n/app — открыть AuraFX Client\n/orders — мои заявки\n/ref — реферальная ссылка\n/support — техподдержка\n/help — помощь",reply_markup:{inline_keyboard:[[{text:"✦ Открыть AuraFX Client",web_app:{url:clientUrl}}],[{text:"Открыть сайт",url:new URL("/",request.url).toString()}]]}})}catch{}
      return json({ok:true});
    }
    if ((!startMatch && !codeMatch)) return json({ok:true});

    await ensureDb(env);
    let token = "", row = null;
    if (startMatch) {
      token = startMatch[1];
      row = await env.DB.prepare("SELECT token,next_path,bind_admin,status,expires_at FROM telegram_login_tokens WHERE token=? LIMIT 1").bind(token).first();
    } else {
      const loginCode = codeMatch[1];
      row = await env.DB.prepare("SELECT token,next_path,bind_admin,status,expires_at FROM telegram_login_tokens WHERE login_code=? AND status='pending' ORDER BY created_at DESC LIMIT 1").bind(loginCode).first();
      token = row ? String(row.token || "") : "";
    }
    const now = Math.floor(Date.now()/1000);
    if (!row || row.status !== "pending" || Number(row.expires_at||0) < now) {
      try { await telegramLoginApi(env,"sendMessage",{chat_id:String(msg.chat && msg.chat.id || from.id),text:codeMatch?"Код входа AuraFX неверный или уже истёк. Получи новый код на странице входа.":"Ссылка входа AuraFX уже истекла. Вернись на сайт и нажми «Войти через Telegram» ещё раз."}); } catch {}
      return json({ok:true});
    }

    const tgId = String(from.id);
    const name = [from.first_name, from.last_name].filter(Boolean).join(" ").trim().slice(0,160) || "Telegram";
    const username = String(from.username || "").slice(0,80);
    await env.DB.prepare(`INSERT INTO telegram_users (telegram_id,name,username,picture,last_login)
      VALUES (?,?,?,NULL,datetime('now'))
      ON CONFLICT(telegram_id) DO UPDATE SET name=excluded.name,username=excluded.username,last_login=datetime('now')`)
      .bind(tgId,name,username||null).run();

    if (Number(row.bind_admin||0) === 1) await setAppSetting(env,"admin_telegram_id",tgId);
    await env.DB.prepare("UPDATE telegram_login_tokens SET telegram_id=?, status='approved' WHERE token=?").bind(tgId,token).run();
    try {
      await telegramLoginApi(env,"sendMessage",{
        chat_id:String(msg.chat && msg.chat.id || from.id),
        text:Number(row.bind_admin||0)===1
          ? "✅ Telegram привязан к владельцу AuraFX. Теперь вернись в тот браузер, где открыта страница AuraFX — админка откроется автоматически."
          : "✅ Вход в AuraFX подтверждён. Теперь вернись в тот браузер, где открыта страница AuraFX — вход завершится автоматически."
      });
    } catch {}
    return json({ok:true});
  }

  if (url.pathname === "/api/auth/telegram/status" && request.method === "GET") {
    const token = String(url.searchParams.get("token") || "");
    if (!/^[A-Za-z0-9_-]{20,64}$/.test(token)) return json({status:"invalid"},400);
    await ensureDb(env);
    const row = await env.DB.prepare("SELECT token,next_path,bind_admin,telegram_id,status,expires_at FROM telegram_login_tokens WHERE token=? LIMIT 1").bind(token).first();
    if (!row) return json({status:"invalid"},404);
    const now = Math.floor(Date.now()/1000);
    if (Number(row.expires_at||0) < now) {
      await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE token=?").bind(token).run();
      return json({status:"expired"});
    }
    if (row.status !== "approved" || !row.telegram_id) return json({status:"pending"});
    const remember = url.searchParams.get("remember") === "1";
    const session = await makeUserSession(env,String(row.telegram_id),remember);
    const next = Number(row.bind_admin||0)===1 ? "/admin" : safeNext(row.next_path || "/");
    await env.DB.prepare("DELETE FROM telegram_login_tokens WHERE token=?").bind(token).run();
    const headers = new Headers({"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
    headers.append("set-cookie",sessionCookie("afx_user",session,remember,"Lax"));
    return new Response(JSON.stringify({authenticated:true,next}),{status:200,headers});
  }

  if(url.pathname==="/api/auth/me"&&request.method==="GET"){const user=await currentUser(request,env);return json(user?{authenticated:true,user}:{authenticated:false});}
  if(url.pathname==="/api/auth/logout"&&request.method==="POST"){const h=new Headers({"content-type":"application/json; charset=utf-8","cache-control":"no-store"});h.append("set-cookie","afx_user=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax");h.append("set-cookie","afx_admin=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict");return new Response(JSON.stringify({ok:true}),{status:200,headers:h});}
  return json({error:"Не найдено."},404);
}
async function handleAccountApi(request,env,url,ctx){
  const user=await currentUser(request,env);
  if(!user)return json({error:"Требуется вход."},401);
  await ensureDb(env);
  if(url.pathname==="/api/account/leads"&&request.method==="GET"){
    const r=await env.DB.prepare("SELECT id,marketplace,count,product,style,deadline,status,client_decision,client_comment,client_decision_at,created_at FROM leads WHERE telegram_id=? ORDER BY datetime(created_at) DESC,id DESC LIMIT 100").bind(user.id).all();
    return json({orders:r.results||[]});
  }
  if(url.pathname==="/api/account/referral"&&request.method==="GET"){
    const code=await referralCodeFor(env,user.id);
    const leadStats=await env.DB.prepare("SELECT COUNT(*) AS total FROM leads WHERE referrer_telegram_id=? AND status!='spam'").bind(user.id).first();
    const rewardStats=await env.DB.prepare("SELECT COUNT(*) AS completed,SUM(CASE WHEN status='available' THEN 1 ELSE 0 END) AS available,SUM(CASE WHEN status='reserved' THEN 1 ELSE 0 END) AS reserved,SUM(CASE WHEN status='used' THEN 1 ELSE 0 END) AS used FROM referral_rewards WHERE referrer_telegram_id=?").bind(user.id).first();
    const rewards=await env.DB.prepare("SELECT id,reward_code,status,source_lead_id,reserved_lead_id,created_at,reserved_at,used_at FROM referral_rewards WHERE referrer_telegram_id=? ORDER BY datetime(created_at) DESC,id DESC LIMIT 50").bind(user.id).all();
    return json({code,link:new URL("/?ref="+encodeURIComponent(code),request.url).toString(),total:Number(leadStats?.total||0),completed:Number(rewardStats?.completed||0),available:Number(rewardStats?.available||0),reserved:Number(rewardStats?.reserved||0),used:Number(rewardStats?.used||0),rewards:rewards.results||[]});
  }
  if(url.pathname==="/api/account/support"&&request.method==="GET"){
    const r=await env.DB.prepare(`SELECT t.id,t.subject,t.category,t.status,t.created_at,t.updated_at,
      (SELECT COUNT(*) FROM support_messages m WHERE m.thread_id=t.id AND m.sender_role='admin' AND datetime(m.created_at)>datetime(COALESCE(t.client_last_read_at,'1970-01-01'))) AS unread
      FROM support_threads t WHERE t.telegram_id=? ORDER BY datetime(t.updated_at) DESC,t.id DESC LIMIT 100`).bind(user.id).all();
    return json({threads:r.results||[]});
  }
  if(url.pathname==="/api/account/support"&&request.method==="POST"){
    if(!sameOrigin(request))return json({error:"Запрос отклонён."},403);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}
    const subject=normalize(body.subject).slice(0,100),message=String(body.message||"").trim(),category=String(body.category||"general").trim();
    if(subject.length<3)return json({error:"Тема обращения должна быть не короче 3 символов."},400);
    if(message.length<2||message.length>1500)return json({error:"Сообщение должно быть от 2 до 1500 символов."},400);
    if(!["technical","order","payment","general"].includes(category))return json({error:"Некорректная категория."},400);
    const active=await env.DB.prepare("SELECT COUNT(*) AS n FROM support_threads WHERE telegram_id=? AND status!='resolved'").bind(user.id).first();
    if(Number(active?.n||0)>=5)return json({error:"У тебя уже 5 активных обращений. Закрой одно из них перед созданием нового."},429);
    const ins=await env.DB.prepare("INSERT INTO support_threads (telegram_id,subject,category,status,client_last_read_at) VALUES (?,?,?,'open',datetime('now'))").bind(user.id,subject,category).run();
    const id=Number(ins.meta?.last_row_id||0);if(!id)return json({error:"Не удалось создать обращение."},500);
    await env.DB.prepare("INSERT INTO support_messages (thread_id,sender_role,sender_telegram_id,body) VALUES (?,'client',?,?)").bind(id,user.id,message).run();
    const notify="💬 AuraFX Support · новое обращение #"+id+"\n"+subject+"\n\n"+message.slice(0,900)+"\n\nОткрыть: "+new URL("/admin/support",request.url).toString();
    if(ctx&&typeof ctx.waitUntil==="function")ctx.waitUntil(sendTelegram(env,notify).catch(()=>({sent:false})));
    return json({ok:true,id,status:"open"},201);
  }
  const supportDetail=url.pathname.match(/^\/api\/account\/support\/(\d+)$/);
  if(supportDetail&&request.method==="GET"){
    const id=Number(supportDetail[1]);const thread=await env.DB.prepare("SELECT id,telegram_id,subject,category,status,created_at,updated_at FROM support_threads WHERE id=? AND telegram_id=? LIMIT 1").bind(id,user.id).first();
    if(!thread)return json({error:"Обращение не найдено."},404);
    await env.DB.prepare("UPDATE support_threads SET client_last_read_at=datetime('now') WHERE id=? AND telegram_id=?").bind(id,user.id).run();
    const messages=await env.DB.prepare("SELECT id,sender_role,body,created_at FROM support_messages WHERE thread_id=? ORDER BY datetime(created_at) ASC,id ASC LIMIT 300").bind(id).all();
    return json({thread,messages:messages.results||[]});
  }
  const supportMessage=url.pathname.match(/^\/api\/account\/support\/(\d+)\/messages$/);
  if(supportMessage&&request.method==="POST"){
    if(!sameOrigin(request))return json({error:"Запрос отклонён."},403);
    const id=Number(supportMessage[1]);const thread=await env.DB.prepare("SELECT id,telegram_id,subject FROM support_threads WHERE id=? AND telegram_id=? LIMIT 1").bind(id,user.id).first();
    if(!thread)return json({error:"Обращение не найдено."},404);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}const text=String(body.body||"").trim();
    if(text.length<1||text.length>1500)return json({error:"Сообщение должно быть от 1 до 1500 символов."},400);
    const recent=await env.DB.prepare("SELECT id FROM support_messages WHERE thread_id=? AND sender_role='client' AND datetime(created_at)>datetime('now','-2 seconds') LIMIT 1").bind(id).first();if(recent)return json({error:"Слишком быстро. Подожди пару секунд."},429);
    await env.DB.prepare("INSERT INTO support_messages (thread_id,sender_role,sender_telegram_id,body) VALUES (?,'client',?,?)").bind(id,user.id,text).run();
    await env.DB.prepare("UPDATE support_threads SET status='open',updated_at=datetime('now'),client_last_read_at=datetime('now') WHERE id=? AND telegram_id=?").bind(id,user.id).run();
    const notify="💬 AuraFX Support · сообщение в #"+id+"\n"+String(thread.subject||"")+"\n\n"+text.slice(0,900)+"\n\nОткрыть: "+new URL("/admin/support",request.url).toString();
    if(ctx&&typeof ctx.waitUntil==="function")ctx.waitUntil(sendTelegram(env,notify).catch(()=>({sent:false})));
    return json({ok:true,status:"open"});
  }
  if(supportDetail&&request.method==="PATCH"){
    if(!sameOrigin(request))return json({error:"Запрос отклонён."},403);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}
    if(String(body.status)!=="resolved")return json({error:"Недопустимое действие."},400);
    const result=await env.DB.prepare("UPDATE support_threads SET status='resolved',updated_at=datetime('now'),client_last_read_at=datetime('now') WHERE id=? AND telegram_id=?").bind(Number(supportDetail[1]),user.id).run();
    if(Number(result.meta?.changes||0)<1)return json({error:"Обращение не найдено."},404);
    return json({ok:true,status:"resolved"});
  }
  const decisionMatch=url.pathname.match(/^\/api\/account\/leads\/(\d+)\/decision$/);
  if(decisionMatch&&request.method==="POST"){
    if(!sameOrigin(request))return json({error:"Запрос отклонён."},403);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}
    const action=String(body.action||"").trim();
    const comment=String(body.comment||"").trim();
    if(!["approve","revision"].includes(action))return json({error:"Недопустимое действие."},400);
    if(action==="revision"&&(comment.length<3||comment.length>800))return json({error:"Комментарий к правкам должен быть от 3 до 800 символов."},400);
    const id=Number(decisionMatch[1]);
    const lead=await env.DB.prepare("SELECT id,status FROM leads WHERE id=? AND telegram_id=? LIMIT 1").bind(id,user.id).first();
    if(!lead)return json({error:"Заявка не найдена."},404);
    if(String(lead.status)!=="review")return json({error:"Эта заявка сейчас не ожидает согласования."},409);
    if(action==="approve"){
      await env.DB.prepare("UPDATE leads SET status='done',client_decision='approved',client_comment=NULL,client_decision_at=datetime('now') WHERE id=? AND telegram_id=? AND status='review'").bind(id,user.id).run();
      await syncReferralRewardForLead(env,id,"done");
      await ensureReferralRewardForLead(env,id,new URL(request.url).origin);
      return json({ok:true,status:"done",decision:"approved"});
    }
    await env.DB.prepare("UPDATE leads SET status='revision',client_decision='revision',client_comment=?,client_decision_at=datetime('now') WHERE id=? AND telegram_id=? AND status='review'").bind(comment,id,user.id).run();
    return json({ok:true,status:"revision",decision:"revision"});
  }
  return json({error:"Не найдено."},404);
}

async function makeAdminToken(env, remember = false) {
  const exp = Math.floor(Date.now() / 1000) + (remember ? 60 * 60 * 24 * 90 : 60 * 60 * 12);
  const sig = await hmacHex(env.ADMIN_SESSION_SECRET, `aurafx-admin:${exp}`);
  return `${exp}.${sig}`;
}

async function validAdmin(request, env) {
  if (env.ADMIN_SESSION_SECRET) {
    const token = parseCookies(request).afx_admin;
    if (token) {
      const [expRaw, sig] = token.split(".");
      const exp = Number(expRaw);
      if (Number.isInteger(exp) && exp >= Math.floor(Date.now() / 1000) && sig) {
        const expected = await hmacHex(env.ADMIN_SESSION_SECRET, `aurafx-admin:${exp}`);
        if (expected.length === sig.length) { let diff = 0; for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i); if (diff === 0) return true; }
      }
    }
  }
  const telegramId = await sessionTelegramId(request, env);
  return telegramId ? await isAdminTelegram(env, telegramId) : false;
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
  const loggedTelegramId = await sessionTelegramId(request, env);
  const referralCode=normalize(b.referral_code).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,24);
  let referrerTelegramId="";
  if(referralCode&&/^AFX[A-Z0-9]{6,20}$/.test(referralCode)){
    const refRow=await env.DB.prepare("SELECT telegram_id FROM referral_codes WHERE code=? LIMIT 1").bind(referralCode).first();
    if(refRow?.telegram_id&&String(refRow.telegram_id)!==String(loggedTelegramId||""))referrerTelegramId=String(refRow.telegram_id);
  }
  const referralRewardCode=normalize(b.referral_reward_code).toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,32);
  let rewardRow=null,rewardApplied=false;
  if(referralRewardCode){
    if(!loggedTelegramId)return json({error:"Чтобы применить реферальный бонус, войди через Telegram."},401);
    rewardRow=await env.DB.prepare("SELECT id,reward_code,status FROM referral_rewards WHERE reward_code=? AND referrer_telegram_id=? LIMIT 1").bind(referralRewardCode,loggedTelegramId).first();
    if(!rewardRow||String(rewardRow.status)!=="available")return json({error:"Этот реферальный бонус уже использован или недоступен."},409);
  }
  const result=await env.DB.prepare(`INSERT INTO leads (visitor_id,marketplace,count,product,style,deadline,contact,comment,status,source,medium,campaign,content,term,referrer,landing,ip_hash,telegram_id)
    VALUES (?,?,?,?,?,?,?,?, 'new',?,?,?,?,?,?,?,?,?)`).bind(visitorId||null,marketplace,count,product,style,deadline,contact,comment,...fields,referrer,landing,ipHash,loggedTelegramId||null).run();
  const leadId = Number(result.meta?.last_row_id || 0);
  if(leadId&&referrerTelegramId){await env.DB.prepare("UPDATE leads SET referral_code=?,referrer_telegram_id=? WHERE id=?").bind(referralCode,referrerTelegramId,leadId).run();}
  if(leadId&&rewardRow){
    const reserved=await env.DB.prepare("UPDATE referral_rewards SET status='reserved',reserved_lead_id=?,reserved_at=datetime('now') WHERE id=? AND status='available'").bind(leadId,Number(rewardRow.id)).run();
    if(Number(reserved?.meta?.changes||0)>0){rewardApplied=true;await env.DB.prepare("UPDATE leads SET referral_reward_code=? WHERE id=?").bind(referralRewardCode,leadId).run();}
  }
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
    "Реферал: " + (referrerTelegramId ? referralCode : "—"),
    "Бонус: " + (rewardApplied ? referralRewardCode + " · 1 карточка" : "—"),
    "Источник: " + sourceLine,
    "",
    "Комментарий: " + (comment || "—"),
    "",
    "Админка: " + adminLink(request)
  ].join("\n");
  queueTelegram(ctx, env, leadMessage);
  return json({ok:true,id:leadId,reward_applied:rewardApplied},201);
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
    const remember = body.remember === true;
    const token = await makeAdminToken(env, remember);
    return json({ ok: true }, 200, {
      "set-cookie": sessionCookie("afx_admin", token, remember, "Strict")
    });
  }

  if (url.pathname === "/api/admin/logout" && request.method === "POST") {
    const h = new Headers({"content-type":"application/json; charset=utf-8","cache-control":"no-store"});
    h.append("set-cookie","afx_admin=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict");
    h.append("set-cookie","afx_user=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax");
    return new Response(JSON.stringify({ok:true}),{status:200,headers:h});
  }

  if (!(await validAdmin(request, env))) return json({ error: "Требуется вход." }, 401);
  if (["POST","PATCH","PUT","DELETE"].includes(request.method) && !sameOrigin(request)) return json({ error: "Запрос отклонён." }, 403);

  if(url.pathname==="/api/admin/support"&&request.method==="GET"){
    const r=await env.DB.prepare(`SELECT t.id,t.telegram_id,t.subject,t.category,t.status,t.created_at,t.updated_at,u.name,u.username,
      (SELECT COUNT(*) FROM support_messages m WHERE m.thread_id=t.id AND m.sender_role='client' AND datetime(m.created_at)>datetime(COALESCE(t.admin_last_read_at,'1970-01-01'))) AS unread
      FROM support_threads t LEFT JOIN telegram_users u ON u.telegram_id=t.telegram_id
      ORDER BY CASE t.status WHEN 'open' THEN 0 WHEN 'waiting_client' THEN 1 ELSE 2 END,datetime(t.updated_at) DESC,t.id DESC LIMIT 200`).all();
    return json({threads:r.results||[]});
  }
  const adminSupportDetail=url.pathname.match(/^\/api\/admin\/support\/(\d+)$/);
  if(adminSupportDetail&&request.method==="GET"){
    const id=Number(adminSupportDetail[1]);const thread=await env.DB.prepare(`SELECT t.id,t.telegram_id,t.subject,t.category,t.status,t.created_at,t.updated_at,u.name,u.username FROM support_threads t LEFT JOIN telegram_users u ON u.telegram_id=t.telegram_id WHERE t.id=? LIMIT 1`).bind(id).first();
    if(!thread)return json({error:"Обращение не найдено."},404);
    await env.DB.prepare("UPDATE support_threads SET admin_last_read_at=datetime('now') WHERE id=?").bind(id).run();
    const messages=await env.DB.prepare("SELECT id,sender_role,sender_telegram_id,body,created_at FROM support_messages WHERE thread_id=? ORDER BY datetime(created_at) ASC,id ASC LIMIT 500").bind(id).all();
    return json({thread,messages:messages.results||[]});
  }
  const adminSupportMessage=url.pathname.match(/^\/api\/admin\/support\/(\d+)\/messages$/);
  if(adminSupportMessage&&request.method==="POST"){
    const id=Number(adminSupportMessage[1]);const thread=await env.DB.prepare("SELECT id,telegram_id,subject FROM support_threads WHERE id=? LIMIT 1").bind(id).first();if(!thread)return json({error:"Обращение не найдено."},404);
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}const text=String(body.body||"").trim();if(text.length<1||text.length>2000)return json({error:"Ответ должен быть от 1 до 2000 символов."},400);
    await env.DB.prepare("INSERT INTO support_messages (thread_id,sender_role,body) VALUES (?,'admin',?)").bind(id,text).run();
    await env.DB.prepare("UPDATE support_threads SET status='waiting_client',updated_at=datetime('now'),admin_last_read_at=datetime('now') WHERE id=?").bind(id).run();
    const tg=String(thread.telegram_id||"").trim();if(tg&&String(env.TELEGRAM_LOGIN_BOT_TOKEN||"").trim()){const origin=new URL(request.url).origin;const job=telegramLoginApi(env,"sendMessage",{chat_id:tg,text:"💬 AuraFX Support ответил в обращении #"+id+"\n\n"+text.slice(0,1200),reply_markup:{inline_keyboard:[[{text:"Открыть поддержку",url:origin+"/support"}]]}}).catch(()=>{});if(ctx&&typeof ctx.waitUntil==="function")ctx.waitUntil(job)}
    return json({ok:true,status:"waiting_client"});
  }
  if(adminSupportDetail&&request.method==="PATCH"){
    let body={};try{body=await request.json()}catch{return json({error:"Некорректные данные."},400)}const status=String(body.status||"");if(!["open","waiting_client","resolved"].includes(status))return json({error:"Недопустимый статус."},400);
    const thread=await env.DB.prepare("SELECT id,telegram_id FROM support_threads WHERE id=? LIMIT 1").bind(Number(adminSupportDetail[1])).first();if(!thread)return json({error:"Обращение не найдено."},404);
    await env.DB.prepare("UPDATE support_threads SET status=?,updated_at=datetime('now'),admin_last_read_at=datetime('now') WHERE id=?").bind(status,Number(adminSupportDetail[1])).run();
    if(status==="resolved"&&String(thread.telegram_id||"").trim()&&String(env.TELEGRAM_LOGIN_BOT_TOKEN||"").trim()){const origin=new URL(request.url).origin;const job=telegramLoginApi(env,"sendMessage",{chat_id:String(thread.telegram_id),text:"✅ AuraFX Support отметил обращение #"+Number(adminSupportDetail[1])+" как решённое. Если вопрос остался, просто напиши снова — диалог откроется автоматически.",reply_markup:{inline_keyboard:[[{text:"Открыть поддержку",url:origin+"/support"}]]}}).catch(()=>{});if(ctx&&typeof ctx.waitUntil==="function")ctx.waitUntil(job)}
    return json({ok:true,status});
  }

  if (url.pathname === "/api/admin/automation-key/status" && request.method === "GET") {
    return json({configured:await automationKeyConfigured(env)});
  }

  if (url.pathname === "/api/admin/automation-key/create" && request.method === "POST") {
    const key=await createAutomationKey(env);
    return json({ok:true,key});
  }

  if (url.pathname === "/api/admin/automation-key/revoke" && request.method === "POST") {
    await deleteAppSetting(env,AURAFX_AUTOMATION_KEY_SETTING);
    return json({ok:true});
  }

  if (url.pathname === "/api/admin/telegram-post/status" && request.method === "GET") {
    const tokenConfigured = Boolean(String(env.TELEGRAM_POST_BOT_TOKEN || "").trim());
    const targets = telegramPostTargets(env);
    const defaultTarget = targets[0] || AURAFX_DEFAULT_POST_CHANNEL;
    let details = { channel_ready:false, bot_username:"", error:"" };
    if (tokenConfigured) {
      try { details = await telegramPostCheck(env, defaultTarget); }
      catch (e) { details.error = e && e.message ? e.message : "Не удалось проверить PostBot."; }
    }
    return json({ token_configured:tokenConfigured, targets, default_target:defaultTarget, ready:tokenConfigured && Boolean(details.channel_ready), ...details });
  }

  if (url.pathname === "/api/admin/telegram-post/check" && request.method === "POST") {
    if (!String(env.TELEGRAM_POST_BOT_TOKEN || "").trim()) return json({ error:"Добавь TELEGRAM_POST_BOT_TOKEN в Cloudflare Secrets." },503);
    let body = {}; try { body = await request.json(); } catch {}
    const target = String(body.target || AURAFX_DEFAULT_POST_CHANNEL).trim();
    try {
      const details = await telegramPostCheck(env,target);
      if (!details.channel_ready) return json({ error:`@${details.bot_username || 'AuraFXPostBot'} найден, но у него нет права публиковать в ${target}. Добавь бота администратором канала с правом публикации.` },409);
      return json({ ok:true, token_configured:true, ready:true, targets:telegramPostTargets(env), default_target:target, ...details });
    } catch (e) {
      const msg = e && e.message ? String(e.message) : "Не удалось проверить Telegram.";
      return json({ error: msg.includes('chat not found') ? `Telegram не видит ${target}. Проверь username канала и добавь @AuraFXPostBot администратором.` : `Проверка PostBot: ${msg}` },502);
    }
  }

  if (url.pathname === "/api/admin/telegram-post/publish" && request.method === "POST") {
    if (!String(env.TELEGRAM_POST_BOT_TOKEN || "").trim()) return json({ error:"TELEGRAM_POST_BOT_TOKEN не настроен в Cloudflare Secrets." },503);
    const contentType = String(request.headers.get("content-type") || "").toLowerCase();
    let target = AURAFX_DEFAULT_POST_CHANNEL, text = "", photoUrl = "", photoFile = null, linkPreview = true;
    if (contentType.includes("multipart/form-data")) {
      let form; try { form = await request.formData(); } catch { return json({error:"Не удалось прочитать загруженный файл."},400); }
      target = String(form.get("target") || AURAFX_DEFAULT_POST_CHANNEL).trim();
      text = String(form.get("text") || "").trim();
      photoUrl = String(form.get("photo_url") || "").trim();
      const candidate = form.get("photo");
      if (candidate && typeof candidate === "object" && typeof candidate.arrayBuffer === "function" && Number(candidate.size || 0) > 0) photoFile = candidate;
      linkPreview = String(form.get("link_preview") || "true") !== "false";
    } else {
      let body = {}; try { body = await request.json(); } catch { return json({error:"Некорректные данные."},400); }
      target = String(body.target || AURAFX_DEFAULT_POST_CHANNEL).trim();
      text = String(body.text || "").trim();
      photoUrl = String(body.photo_url || "").trim();
      linkPreview = body.link_preview !== false;
    }
    if (!telegramPostTargets(env).includes(target)) return json({ error:"Этот чат не разрешён для публикаций AuraFX." },403);
    if (photoFile) {
      const type = String(photoFile.type || "").toLowerCase();
      const name = String(photoFile.name || "");
      const validType = type === "image/jpeg" || type === "image/png" || (!type && /\.(?:jpe?g|png)$/i.test(name));
      if (!validType) return json({error:"Поддерживаются только JPG и PNG."},415);
      if (Number(photoFile.size || 0) > 10 * 1024 * 1024) return json({error:"Фото больше 10 МБ. Выбери файл поменьше."},413);
    }
    const hasPhoto = Boolean(photoFile || photoUrl);
    if (!text && !hasPhoto) return json({ error:"Добавь текст или фото." },400);
    if (text.length > (hasPhoto ? 1000 : 4000)) return json({ error:hasPhoto?"Для поста с фото текст должен быть до 1000 символов.":"Текст должен быть до 4000 символов." },400);
    if (photoUrl) {
      let parsed; try { parsed = new URL(photoUrl); } catch { return json({error:"Некорректная ссылка на фото."},400); }
      if (parsed.protocol !== "https:") return json({error:"Фото должно быть доступно по HTTPS-ссылке."},400);
    }
    try {
      const check = await telegramPostCheck(env,target);
      if (!check.channel_ready) return json({error:`@${check.bot_username || 'AuraFXPostBot'} не имеет права публиковать в ${target}.`},409);
      let result;
      if (photoFile) {
        result = await telegramPostPhotoUpload(env,target,photoFile,text);
      } else if (photoUrl) {
        result = await telegramPostApi(env,"sendPhoto",{chat_id:target,photo:photoUrl,caption:text || undefined});
      } else {
        result = await telegramPostApi(env,"sendMessage",{chat_id:target,text,link_preview_options:{is_disabled:!linkPreview}});
      }
      const confirmation = verifiedTelegramPost(result,target);
      return json({ok:true,telegram_confirmed:true,target,bot_username:check.bot_username,...confirmation});
    } catch (e) {
      const msg = e && e.message ? String(e.message) : "Telegram не принял публикацию.";
      return json({error:`Не удалось опубликовать: ${msg}`},502);
    }
  }

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
    const result=await env.DB.prepare("SELECT id,marketplace,count,product,style,deadline,contact,comment,status,client_decision,client_comment,client_decision_at,referral_code,referrer_telegram_id,referral_reward_code,source,medium,campaign,content,referrer,landing,created_at FROM leads ORDER BY datetime(created_at) DESC,id DESC LIMIT 300").all();
    return json({leads:result.results||[]});
  }
  const leadMatch=url.pathname.match(/^\/api\/admin\/leads\/(\d+)$/);
  if(leadMatch && request.method==="PATCH"){
    let body={};try{body=await request.json()}catch{}
    if(!["new","contacted","review","revision","done","spam"].includes(body.status))return json({error:"Недопустимый статус."},400);
    const leadId=Number(leadMatch[1]);
    if(body.status==="review"){
      await env.DB.prepare("UPDATE leads SET status=?,client_decision=NULL,client_decision_at=NULL WHERE id=?").bind(body.status,leadId).run();
    }else{
      await env.DB.prepare("UPDATE leads SET status=? WHERE id=?").bind(body.status,leadId).run();
    }
    await syncReferralRewardForLead(env,leadId,body.status);
    if(body.status==="done")await ensureReferralRewardForLead(env,leadId,new URL(request.url).origin);
    const lead=await env.DB.prepare("SELECT id,telegram_id,product FROM leads WHERE id=? LIMIT 1").bind(leadId).first();
    if(lead?.telegram_id)await sendClientStatusTelegram(env,lead.telegram_id,leadId,String(lead.product||"Заказ"),body.status,new URL(request.url).origin);
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

    // Keep the public Pages hostname only as a deployment endpoint. Browser
    // navigations always land on the canonical AuraFX domain, including paths,
    // query parameters and hashes handled by the client.
    if (url.hostname === "aurafx-site.pages.dev" && (request.method === "GET" || request.method === "HEAD") && (request.headers.get("accept") || "").includes("text/html")) {
      url.hostname = "aurafx-design.ru";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname === "/manifest.webmanifest" && request.method === "GET") return new Response(AURAFX_PWA_MANIFEST,{headers:{"content-type":"application/manifest+json; charset=utf-8","cache-control":"public, max-age=3600"}});
    if (url.pathname === "/sw.js" && request.method === "GET") return new Response(AURAFX_SW_JS,{headers:{"content-type":"application/javascript; charset=utf-8","cache-control":"no-cache","service-worker-allowed":"/"}});
    if (url.pathname === "/aurafx-app-icon.svg" && request.method === "GET") return new Response(AURAFX_APP_ICON_SVG,{headers:{"content-type":"image/svg+xml; charset=utf-8","cache-control":"public, max-age=86400"}});

    if (url.pathname === "/auth/telegram" && request.method === "GET") return handleTelegramAuthStart(request, env, url);
    if (url.pathname === "/auth/telegram/launch" && request.method === "GET") return handleTelegramAuthLaunch(request, env, url);
    if (url.pathname === "/auth/telegram/complete" && request.method === "GET") return handleTelegramAuthComplete(request, env, url);
    if (url.pathname === "/auth/telegram/callback" && request.method === "GET") return handleTelegramAuthCallback(request, env, url);
    if (url.pathname.startsWith("/api/auth/")) return handleAuthApi(request, env, url);
    if (url.pathname.startsWith("/api/account/")) return handleAccountApi(request, env, url, ctx);
    if (url.pathname === "/api/reviews") return handlePublicReviews(request, env, ctx);
    if (url.pathname === "/api/online") return handleOnline(request, env);
    if (url.pathname === "/api/event") return handleSiteEvent(request, env);
    if (url.pathname === "/api/promo") return handlePromo(request, env, ctx);
    if (url.pathname === "/api/lead") return handleLead(request, env, ctx);
    if (url.pathname.startsWith("/api/automation/")) return handleAutomationApi(request, env, url);
    if (url.pathname.startsWith("/api/admin/")) return handleAdminApi(request, env, url, ctx);

    if (url.pathname === "/privacy" || url.pathname === "/privacy/") {
      return new Response(PRIVACY_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600" } });
    }

    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      return new Response(ADMIN_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }
    if (url.pathname === "/account" || url.pathname === "/account/") {
      return new Response(ACCOUNT_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }
    if (url.pathname === "/referral" || url.pathname === "/referral/") {
      return new Response(REFERRAL_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }

    if (url.pathname === "/support" || url.pathname === "/support/") {
      return new Response(SUPPORT_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }
    if (url.pathname === "/admin/support" || url.pathname === "/admin/support/") {
      return new Response(SUPPORT_ADMIN_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
    }

    const response = await env.ASSETS.fetch(request);
    if ((url.pathname === "/" || url.pathname === "/index.html") && response.headers.get("content-type")?.includes("text/html")) {
      return new HTMLRewriter()
        .on("header .brand .mark", { element(element) { element.setAttribute("data-aurafx-logo", "crown-v2"); element.setInnerContent(AURAFX_BRAND_LOGO_HTML, { html: true }); } })
        .on('head link[rel~="icon"]', { element(element) { element.remove(); } })
        .on("head", { element(element) { element.append(`<meta name="description" content="AuraFX — дизайн карточек товаров для маркетплейсов. Портфолио, кейсы и бесплатные инструменты для продавцов."><meta name="theme-color" content="#0b0612"><meta name="color-scheme" content="dark"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta property="og:site_name" content="AuraFX"><link rel="icon" type="image/png" sizes="48x48" href="${AURAFX_FAVICON_DATA_URL}"><meta property="og:title" content="AuraFX — дизайн карточек товаров"><meta property="og:description" content="Дизайн карточек товаров: портфолио, кейсы и бесплатный мини-разбор карточки."><meta property="og:type" content="website"><meta property="og:url" content="https://aurafx-design.ru/">`, { html: true }); } })
        .on("body", { element(element) { element.append(PRICING_EFFECT_HTML + PROMO_WHEEL_HTML + SITE_UPGRADES_HTML + REVIEW_WIDGET_HTML + SITE_TOOLS_HTML + PERFORMANCE_HTML + PERFORMANCE_V2_HTML + SCROLL_REVEAL_HTML + MOTION_OVERRIDE_HTML + SMOOTH_MOTION_HTML + SHOWCASE_FLOAT_HTML + PREMIUM_STUDIO_HTML + CASE_STORY_UPGRADE_HTML + CASE_REAL_SLIDES_HTML + BEFORE_AFTER_HTML + PREMIUM_INTERACTIVE_HTML + FUNCTION_NAV_HTML + DIRECT_ORDER_HTML + HEADER_EXCLUSIVE_LOGO_HTML + SELLER_TOOL_HTML + REFERRAL_CAPTURE_HTML + PWA_INSTALL_HTML + SUPPORT_WIDGET_HTML + ACCOUNT_WIDGET_HTML, { html: true }); } })
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

// AuraFX Automation Publish API V1: scoped hashed key + allowlist + rate limit + idempotency
// AuraFX Client Order Workflow V1: 5-stage tracker + client approval/revisions + admin status controls
// AuraFX Growth Pack V2: referral rewards + referral center + Telegram sharing + PWA + client center + seller quick-plan tool
// redeploy-20260916-1502

// AuraFX Support Center V1: authenticated client chat + admin inbox + Telegram reply alerts

// AuraFX Support Mini Chat V2 + mobile function-nav swipe fix
