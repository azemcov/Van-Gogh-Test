(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();let c={title:"Встраиваемый светильник Markt",pic:"./src/pics/pic1.png",price:"3490",oldPrice:"5060"},o={title:"Линейный светильник ARG",pic:"./src/pics/pic2.png",price:"6700",oldPrice:"6060"},s={title:"Сведодиодный светильник",pic:"./src/pics/pic3.png",price:"5060",oldPrice:"6060"};function f(r){return(r+1)%3===0?s.pic:(r+1)%3===1?c.pic:o.pic}function u(r){return(r+1)%3===0?s.title:(r+1)%3===1?c.title:o.title}function p(r){return(r+1)%3===0?new Intl.NumberFormat("ru-RU").format(s.price):(r+1)%3===1?new Intl.NumberFormat("ru-RU").format(c.price):new Intl.NumberFormat("ru-RU").format(o.price)}function _(r){return(r+1)%3===0?new Intl.NumberFormat("ru-RU").format(s.oldPrice):(r+1)%3===1?new Intl.NumberFormat("ru-RU").format(c.oldPrice):new Intl.NumberFormat("ru-RU").format(o.oldPrice)}function a(r){return(r+1)%2===0}document.getElementById("search-section_bar_cards").innerHTML=Array(8).fill(0).map((r,e)=>`<div id="card-${e+1}" class="card">
  ${a(e)?"":'<button class="sale-label font_16px white_400">Акция</button>'}
  <div class="pic-section"
    ><img class="pic" src="${f(e)}" alt="" />
    <div class="details-section">
      <button src="" class="white_600 details">Подробнее</button>
    </div></div
  >
  <p class="font_title m-2" id="card-${e+1}_title"
    >${u(e)}</p
  >
  <div class="price m-2">
    <div class="standart-price">
      ${a(e)?`<p class="font_price font_700" id="card-${e+1}_standart-price"
        >${p(e)}</p
      ><p class="font_price font_600">₽</p>`:`<div class="new-price" 
      ><p class="font_price font_700" id="card-${e+1}_new-price">${p(e)}</p
      ><p class="font_price font_600">₽</p></div>
    <div class="old-price"
      ><p class="font_price font_700" id="card-${e+1}_old-price">${_(e)}</p
      ><p class="font_price font_600">₽</p></div>`}
    </div>
  </div>
</div>`).join``;
