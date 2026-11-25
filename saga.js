/* Saga Life Stories · codigo a medida de la tienda.
   Se carga desde Codigos externos con una sola linea:
   <script src="https://cdn.jsdelivr.net/gh/josearana85-lang/saga-tienda@main/saga.js"></script>
   Migrado desde Codigos externos el 2026-11-25. */
(function(){var D=document,W=window,dA=D.addEventListener,wA=W.addEventListener;
function late(t,f){if(typeof f!=='function')return false;if(t==='DOMContentLoaded'&&D.readyState!=='loading'){setTimeout(function(){f.call(D,new Event(t))},0);return true}if(t==='load'&&D.readyState==='complete'){setTimeout(function(){f.call(W,new Event(t))},0);return true}return false}
D.addEventListener=function(t,f,o){if(!late(t,f))return dA.call(this,t,f,o)};
W.addEventListener=function(t,f,o){if(!late(t,f))return wA.call(this,t,f,o)};
W.__sagaRestore=function(){D.addEventListener=dA;W.addEventListener=wA;delete W.__sagaRestore}})();
try{

(function(){
var t=window.LS&&LS.template;if(t&&t!=="home"&&t!=="category"){return;}
var css=document.createElement('style');
css.textContent='.sq-trigger{position:fixed;bottom:24px;left:24px;background:#7B2D3B;color:#FAFAF8;border:none;padding:16px 28px;border-radius:50px;font-family:Cormorant Garamond,serif;font-size:17px;font-weight:500;letter-spacing:.5px;cursor:pointer;z-index:9999;box-shadow:0 8px 32px rgba(123,45,59,.35);transition:all .4s cubic-bezier(.16,1,.3,1);display:flex;align-items:center;gap:10px}.sq-trigger:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(123,45,59,.45);background:#943648}.sq-trigger.sq-hidden{transform:translateY(100px);opacity:0;pointer-events:none}.sq-overlay{position:fixed;inset:0;background:rgba(49,49,49,.4);backdrop-filter:blur(4px);z-index:10000;opacity:0;pointer-events:none;transition:opacity .4s ease}.sq-overlay.sq-active{opacity:1;pointer-events:all}.sq-panel{position:fixed;bottom:0;left:0;right:0;max-height:92vh;background:#FAFAF8;border-radius:28px 28px 0 0;z-index:10001;transform:translateY(100%);transition:transform .5s cubic-bezier(.16,1,.3,1),visibility 0s .5s;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;visibility:hidden}.sq-panel.sq-active{transform:translateY(0);visibility:visible;transition:transform .5s cubic-bezier(.16,1,.3,1),visibility 0s}.sq-header{position:sticky;top:0;background:#FAFAF8;padding:20px 24px 12px;display:flex;justify-content:space-between;align-items:center;z-index:10;border-bottom:1px solid rgba(185,171,163,.2)}.sq-header h2{font-family:Cormorant Garamond,serif;font-size:22px;font-weight:400;color:#313131;letter-spacing:.5px;margin:0}.sq-close{width:36px;height:36px;border-radius:50%;border:none;background:#E5E5E5;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s;flex-shrink:0;padding:0}.sq-close:hover{background:#B9ABA3}.sq-close svg{width:16px;height:16px;stroke:#313131}.sq-body{padding:28px 24px 40px;min-height:360px}.sq-step{display:none;animation:sqFade .45s cubic-bezier(.16,1,.3,1)}.sq-step.sq-active{display:block}@keyframes sqFade{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}.sq-question{font-family:Cormorant Garamond,serif;font-size:26px;font-weight:400;line-height:1.35;margin-bottom:28px;color:#313131}.sq-options{display:flex;flex-direction:column;gap:10px}.sq-opt{background:#FAFAF8;border:1.5px solid #E5E5E5;border-radius:16px;padding:18px 20px;cursor:pointer;transition:all .25s ease;display:flex;align-items:center;gap:14px}.sq-opt:hover{border-color:#B9ABA3;background:rgba(185,171,163,.06);transform:translateX(4px)}.sq-opt.sq-sel{border-color:#313131;background:rgba(49,49,49,.04)}.sq-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}.sq-label{font-size:15px;font-weight:400;line-height:1.4;color:#313131}.sq-sub{font-size:13px;color:#888;margin-top:2px}.sq-rcard{background:#FAFAF8;border:1.5px solid #E5E5E5;border-radius:20px;overflow:hidden;margin-bottom:14px;transition:all .3s ease;animation:sqFade .5s cubic-bezier(.16,1,.3,1)}.sq-rcard:hover{box-shadow:0 8px 28px rgba(49,49,49,.08);transform:translateY(-2px)}.sq-rbody{padding:22px}.sq-badge{display:inline-block;background:#D7D8BB;color:#313131;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:5px 12px;border-radius:20px;margin-bottom:14px}.sq-badge.sq-alt{background:#E9DBD2}.sq-rname{font-family:Cormorant Garamond,serif;font-size:22px;font-weight:500;margin-bottom:5px;color:#313131}.sq-rprice{font-size:17px;font-weight:500;color:#B9ABA3;margin-bottom:10px}.sq-rdesc{font-size:14px;line-height:1.6;color:#666;margin-bottom:18px}.sq-rlink{display:inline-flex;align-items:center;gap:8px;background:#313131;color:#FAFAF8;text-decoration:none;padding:13px 26px;border-radius:50px;font-size:14px;font-weight:500;letter-spacing:.3px;transition:all .3s ease}.sq-rlink:hover{background:#454545;transform:translateY(-1px)}.sq-rlink.sq-sec{background:transparent;color:#313131;border:1.5px solid #E5E5E5}.sq-rlink.sq-sec:hover{border-color:#B9ABA3;background:rgba(185,171,163,.06)}.sq-rlink svg{width:16px;height:16px}.sq-rintro{font-family:Cormorant Garamond,serif;font-size:28px;font-weight:400;line-height:1.35;margin-bottom:6px;color:#313131}.sq-rsub{font-size:14px;color:#B9ABA3;margin-bottom:24px;line-height:1.5}.sq-restart{display:block;width:100%;text-align:center;padding:14px;background:none;border:1.5px solid #E5E5E5;border-radius:50px;font-size:14px;color:#B9ABA3;cursor:pointer;margin-top:6px;transition:all .2s}.sq-restart:hover{border-color:#B9ABA3;color:#313131}.sq-welcome{text-align:center;padding:20px 0 10px}.sq-welcome .sq-question{font-size:30px;margin-bottom:12px}.sq-wsub{font-size:15px;color:#B9ABA3;line-height:1.6;margin-bottom:32px;max-width:320px;margin-left:auto;margin-right:auto}.sq-start{display:inline-flex;align-items:center;gap:10px;background:#313131;color:#FAFAF8;border:none;padding:16px 36px;border-radius:50px;font-family:Cormorant Garamond,serif;font-size:18px;font-weight:500;cursor:pointer;transition:all .3s;letter-spacing:.5px}.sq-start:hover{background:#454545;transform:translateY(-2px);box-shadow:0 8px 24px rgba(49,49,49,.2)}.sq-single .sq-rbody{text-align:center;padding:28px 22px}.sq-single .sq-rname{font-size:24px;margin-bottom:8px}.sq-single .sq-rdesc{max-width:340px;margin-left:auto;margin-right:auto}@media(min-width:640px){.sq-panel{max-width:480px;right:auto;left:24px;bottom:24px;border-radius:24px;max-height:85vh}.sq-trigger{bottom:28px;left:28px}}';
document.head.appendChild(css);

var link=document.createElement('link');
link.rel='stylesheet';
link.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap';
document.head.appendChild(link);

var arrow='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';

var R={
libro_bebe:{intro:"Para registrar los primeros a\u00f1os",products:[
{name:"Hola Mundo \u00b7 Personalizado",price:"$98.000",desc:"El libro de recuerdos de tu beb\u00e9, desde el embarazo hasta los 3 a\u00f1os. Con secciones para cada mes, hitos, fotos y datos especiales. Incluye el grabado del nombre en la tapa. Disponible en 6 colores.",url:"https://www.sagalifestories.com/productos/hola-mundo-beige-personalizado/",badge:"Nuestro m\u00e1s vendido"},
{name:"Hola Mundo Full",price:"$151.000",desc:"Incluye el libro Hola Mundo + Pack Embarazo + 10 hojas lisas extra. Todo en un solo combo para tener el registro m\u00e1s completo desde el primer d\u00eda.",url:"https://www.sagalifestories.com/productos/combo-hola-mundo-edicion-full-1og7j/",badge:"Pack completo",alt:true},
{name:"Hola Mundo Full con fotos",price:"$193.000",desc:"El combo m\u00e1s completo: Hola Mundo Full + fotos impresas incluidas. Para empezar a llenar el libro desde el primer momento.",url:"https://www.sagalifestories.com/productos/combo-hola-mundo-edicion-full-con-fotos-m46zt/",badge:"Con fotos incluidas",alt:true}
]},
libro_ninez:{intro:"Para seguir registrando su historia",products:[
{name:"Cr\u00f3nicas de mi Ni\u00f1ez \u00b7 Personalizado",price:"$98.000",desc:"Para registrar los recuerdos de la infancia, de 4 a 6 a\u00f1os. Cada a\u00f1o tiene su secci\u00f3n con fotos, an\u00e9cdotas y datos memorables. Incluye grabado del nombre en la tapa.",url:"https://www.sagalifestories.com/productos/cronicas-de-mi-ninez/",badge:"Ideal para esta etapa"}
]},
album:{intro:"Para preservar tus mejores fotos",products:[
{name:"\u00c1lbum Personalizado",price:"$98.000",desc:"Un \u00e1lbum de fotos premium con tu nombre grabado en la tapa. Ideal para preservar fotos familiares, de viajes o momentos especiales.",url:"https://www.sagalifestories.com/productos/album-personalizado/",badge:"M\u00e1s elegido"},
{name:"\u00c1lbum Personalizado + 24 fotos 10x10",price:"$148.000",desc:"El \u00e1lbum personalizado con grabado + 24 fotos impresas en formato 10x10 listas para pegar. \u00a1La soluci\u00f3n completa!",url:"https://www.sagalifestories.com/productos/album-personalizado-24-fotos-10x10-4xh6n/",badge:"\u00c1lbum + fotos",alt:true}
]},
fotolibro:{intro:"Para que tus fotos no queden en el celular",single:true,products:[
{name:"Fotolibro con grabado personalizado",price:"Desde $223.000",desc:"Vos elegís las fotos y nosotros armamos el diseño. Tapa entelada con lo que quieras grabado en dorado, de 40 a 80 páginas, A4 vertical o apaisado.",url:"https://www.sagalifestories.com/productos/fotolibro-entelado-1omqd/",badge:"Nuevo"}
]},
fotos:{intro:"Imprim\u00ed tus fotos favoritas",single:true,products:[
{name:"Impresi\u00f3n de fotos",price:"Desde $38.000",desc:"Eleg\u00ed entre distintos formatos y cantidades. Papel fotogr\u00e1fico premium.",url:"https://www.sagalifestories.com/fotos/",badge:"Ver todos los formatos",cat:true}
]},
regalos:{intro:"Para regalarle a alguien especial",products:[
{name:"Libro Cumpleaños",price:"$98.000",desc:"Un libro para que familia y amigos lo completen con fotos, anécdotas y mensajes. Con el nombre grabado en la tapa, para cualquier edad.",url:"https://www.sagalifestories.com/productos/libro-cumpleanos/",badge:"Para regalar"},
{name:"Cuaderno A5 con grabado",price:"$65.000",desc:"Tapa de lino con el nombre o la frase que elijas grabados en dorado. 100 hojas lisas para escribir, dibujar o hacer journaling.",url:"https://www.sagalifestories.com/productos/cuaderno-a5-i9pcc/",badge:"Cuaderno",alt:true}
]}
};

var OPT=[
{icon:"\ud83d\udc76",label:"Libro de Beb\u00e9 personalizado",sub:"0 a 3 a\u00f1os",value:"libro_bebe",bg:"#DFD5E8"},
{icon:"\ud83d\udcf8",label:"Fotolibro personalizado",sub:"Nuevo · Tus fotos impresas en un libro, lo diseñamos nosotros",value:"fotolibro",bg:"#E5E5E5"},
{icon:"\ud83e\uddd2",label:"Libro de Ni\u00f1ez personalizado",sub:"4 a 6 a\u00f1os",value:"libro_ninez",bg:"#D7D8BB"},
{icon:"\ud83d\udcd6",label:"\u00c1lbum personalizado con hojas lisas",sub:"Para fotos familiares, viajes, recuerdos",value:"album",bg:"#E9DBD2"},
{icon:"\ud83d\udcf7",label:"Impresi\u00f3n de fotos",sub:"Distintos formatos y cantidades",value:"fotos",bg:"#A6BFC5"},
{icon:"\ud83c\udf81",label:"Otros regalos",sub:"Libro de cumpleaños y cuaderno con grabado",value:"regalos",bg:"#E9DBD2"}
];

var trigger=document.createElement('div');
trigger.className='sq-trigger';
trigger.innerHTML='TE AYUDAMOS A ELEGIR';
document.body.appendChild(trigger);

var overlay=document.createElement('div');
overlay.className='sq-overlay';
document.body.appendChild(overlay);

var panel=document.createElement('div');
panel.className='sq-panel';
panel.innerHTML='<div class="sq-header"><h2></h2><div class="sq-close"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div></div><div class="sq-body"></div>';
document.body.appendChild(panel);

var body=panel.querySelector('.sq-body');
var closeBtn=panel.querySelector('.sq-close');

function gtmEvent(event,data){if(window.dataLayer){var obj={event:event};if(data){for(var k in data){obj[k]=data[k];}}window.dataLayer.push(obj);}}

function open(){overlay.classList.add('sq-active');panel.classList.add('sq-active');trigger.classList.add('sq-hidden');gtmEvent('quiz_opened');question();}
function close(){overlay.classList.remove('sq-active');panel.classList.remove('sq-active');trigger.classList.remove('sq-hidden');}

trigger.addEventListener('click',open);
overlay.addEventListener('click',close);
closeBtn.addEventListener('click',close);

function ajustarTrigger(){
  var cookies=document.querySelector('.js-notification-cookie-banner');
  if(cookies&&cookies.offsetParent!==null){
    trigger.style.bottom=(cookies.offsetHeight+16)+'px';
  }else{
    trigger.style.bottom='24px';
  }
}
ajustarTrigger();
var obs=new MutationObserver(ajustarTrigger);
obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['style','class']});

function welcome(){
body.innerHTML='<div class="sq-step sq-active"><div class="sq-welcome"><div class="sq-question">Encontr\u00e1 tu<br>Saga ideal</div><div class="sq-wsub">Contan\u00f3s qu\u00e9 est\u00e1s buscando y te llevamos al producto perfecto para vos.</div><div class="sq-start">Empezar <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div></div></div>';
body.querySelector('.sq-start').addEventListener('click',question);
}

function question(){
var h='';
for(var i=0;i<OPT.length;i++){
var o=OPT[i];
h+='<div class="sq-opt" data-val="'+o.value+'"><div class="sq-icon" style="background:'+o.bg+'">'+o.icon+'</div><div><div class="sq-label">'+o.label+'</div>'+(o.sub?'<div class="sq-sub">'+o.sub+'</div>':'')+'</div></div>';
}
body.innerHTML='<div class="sq-step sq-active"><div class="sq-question">\u00bfQu\u00e9 est\u00e1s buscando?</div><div class="sq-options">'+h+'</div></div>';
var opts=body.querySelectorAll('.sq-opt');
for(var j=0;j<opts.length;j++){
opts[j].addEventListener('click',function(){
var el=this;el.classList.add('sq-sel');
var val=el.getAttribute('data-val');
gtmEvent('quiz_option_selected',{quiz_option:val});
setTimeout(function(){results(val);},300);
});
}
}

function results(key){
var d=R[key];
var h='<div class="sq-step sq-active"><div class="sq-rintro">'+d.intro+'</div><div class="sq-rsub">Esto es lo que te recomendamos.</div>';
for(var i=0;i<d.products.length;i++){
var p=d.products[i];
var bc=p.alt?'sq-badge sq-alt':'sq-badge';
var cc=d.single?'sq-rcard sq-single':'sq-rcard';
var lc=(i>0&&!d.single)?'sq-rlink sq-sec':'sq-rlink';
var bt=p.cat?'Ver opciones':'Ver producto';
var pr=p.price?'<div class="sq-rprice">'+p.price+'</div>':'';
h+='<div class="'+cc+'"><div class="sq-rbody"><div class="'+bc+'">'+p.badge+'</div><div class="sq-rname">'+p.name+'</div>'+pr+'<div class="sq-rdesc">'+p.desc+'</div><a href="'+p.url+'" target="_blank" class="'+lc+'">'+bt+' '+arrow+'</a></div></div>';
}
h+='<div class="sq-restart">Volver a elegir</div></div>';
body.innerHTML=h;
body.querySelector('.sq-restart').addEventListener('click',question);
var links=body.querySelectorAll('.sq-rlink');
for(var k=0;k<links.length;k++){
links[k].addEventListener('click',function(){
gtmEvent('quiz_product_click',{quiz_product:this.closest('.sq-rcard').querySelector('.sq-rname').textContent,quiz_category:key});
});
}
}
})();

}catch(e){console.error("saga bloque 1",e)}

/* SAGA · BARRA ANUNCIOS FIJA */
try{

(function(){
var css=document.createElement('style');
css.textContent='.js-promotional-banner{position:sticky;top:0;z-index:9998 !important}';
document.head.appendChild(css);
})();

}catch(e){console.error("saga bloque 2",e)}

/* SAGA · BENEFICIOS DEBAJO DEL BANNER (reemplaza section-welcome del template) */
try{

(function(){
if(window.location.pathname!=='/') return;

var link=document.createElement('link');
link.rel='stylesheet';
link.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Outfit:wght@300;400;500&display=swap';
document.head.appendChild(link);

var css=document.createElement('style');
css.textContent='section.section-welcome{display:none!important}'
+'#saga-beneficios{background:#FBF9F6;border-top:1px solid #E6E1DB;border-bottom:1px solid #E6E1DB;padding:34px 20px;font-family:Outfit,sans-serif}'
+'#saga-beneficios .sgb-in{max-width:1265px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:26px}'
+'#saga-beneficios .sgb-it{display:flex;gap:14px;align-items:flex-start}'
+'#saga-beneficios .sgb-ic{width:46px;height:46px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center}'
+'#saga-beneficios .sgb-ic svg{width:23px;height:23px;fill:none;stroke:#2E2B28;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round}'
+'#saga-beneficios .sgb-it:nth-child(1) .sgb-ic{background:#E9DBD2}'
+'#saga-beneficios .sgb-it:nth-child(2) .sgb-ic{background:#D7D8BB}'
+'#saga-beneficios .sgb-it:nth-child(3) .sgb-ic{background:#A6BFC5}'
+'#saga-beneficios .sgb-it:nth-child(4) .sgb-ic{background:#DFD5E8}'
+'#saga-beneficios h5{font-family:Cormorant Garamond,serif;font-size:19px;font-weight:500;line-height:1.2;color:#2E2B28;margin:0}'
+'#saga-beneficios p{font-size:12px;line-height:1.6;color:#4A4540;margin:4px 0 0}'
+'@media(max-width:760px){'
+' #saga-beneficios{padding:34px 18px}'
+' #saga-beneficios .sgb-in{grid-template-columns:1fr 1fr;gap:34px 18px}'
+' #saga-beneficios .sgb-it{flex-direction:column;align-items:center;text-align:center;gap:11px}'
+' #saga-beneficios .sgb-ic{width:48px;height:48px}'
+' #saga-beneficios h5{font-size:17px}'
+' #saga-beneficios p{font-size:11.5px;line-height:1.65}'
+'}';
document.head.appendChild(css);

var newHTML='<div class="sgb-in">'
+'<div class="sgb-it"><div class="sgb-ic"><svg viewBox="0 0 24 24"><path d="M11.8 3H20a1 1 0 0 1 1 1v8.2L12 21.2 2.8 12z"/><circle cx="16.6" cy="7.4" r="1.3"/></svg></div><div><h5>Nombre grabado</h5><p>En dorado sobre la tapa, sin costo extra.</p></div></div>'
+'<div class="sgb-it"><div class="sgb-ic"><svg viewBox="0 0 24 24"><path d="M12 20.3s-7.2-4.7-7.2-9.6A4.2 4.2 0 0 1 12 7.8a4.2 4.2 0 0 1 7.2 2.9c0 4.9-7.2 9.6-7.2 9.6z"/></svg></div><div><h5>Para toda la vida</h5><p>Abrilo m\u00e1s adelante y volv\u00e9 a vivir cada momento.</p></div></div>'
+'<div class="sgb-it"><div class="sgb-ic"><svg viewBox="0 0 24 24"><path d="M6.6 8h10.8l1.3 11.2a1.4 1.4 0 0 1-1.4 1.6H6.7a1.4 1.4 0 0 1-1.4-1.6z"/><path d="M9 8V6.2a3 3 0 0 1 6 0V8"/></svg></div><div><h5>Bolsa de lienzo</h5><p>Para guardarlo y que te acompa\u00f1e siempre.</p></div></div>'
+'<div class="sgb-it"><div class="sgb-ic"><svg viewBox="0 0 24 24"><path d="M20 4 7.5 16.5"/><circle cx="20.7" cy="3.3" r="1.15"/><path d="M7.5 16.5c-1.7 1-2.6 2.1-2.6 3.2 1.3 0 2.5-.9 3.2-2.1"/></svg></div><div><h5>Hecho a mano</h5><p>Tapa dura forrada en tela, papel grueso y cada detalle cuidado.</p></div></div>'
+'</div>';

function inject(){
  if(document.getElementById('saga-beneficios')) return;
  var target=document.querySelector('section.section-welcome');
  if(target){
    var div=document.createElement('div');
    div.id='saga-beneficios';
    div.innerHTML=newHTML;
    target.parentNode.insertBefore(div,target);
  }
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',inject);
}else{
  inject();
}
})();

}catch(e){console.error("saga bloque 3",e)}
try{

(function() {
  var PRODUCT_URL = 'https://www.sagalifestories.com/productos/el-mejor-papa/';

  function makeBannerClickable() {
    var firstSlide = document.querySelector('.swiper-slide[data-swiper-slide-index="0"]');
    if (!firstSlide || firstSlide.dataset.clickable) return;

    firstSlide.dataset.clickable = 'true';
    firstSlide.style.cursor = 'pointer';

    firstSlide.addEventListener('click', function(e) {
      if (e.target.closest('a, button')) return;
      window.location.href = PRODUCT_URL;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeBannerClickable);
  } else {
    setTimeout(makeBannerClickable, 500);
  }
})();

}catch(e){console.error("saga bloque 4",e)}

/* SAGA · DISENO DE PRODUCTOS DESTACADOS (home) */
try{

(function(){
if(window.location.pathname!=='/') return;
if(window.__sgDestacados) return; window.__sgDestacados=true;

var css=document.createElement('style');
css.textContent=
 '.section-featured-home .js-item-product{padding:0 8px 16px}'
+'.section-featured-home .js-product-container{background:#fff;border:1px solid #E6E1DB;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .18s,border-color .18s}'
+'.section-featured-home .js-product-container:hover{border-color:#D5CEC6;box-shadow:0 12px 30px rgba(0,0,0,.07)}'
+'.section-featured-home .labels{transform:none!important;writing-mode:horizontal-tb!important;top:11px!important;left:11px!important;right:auto!important;bottom:auto!important;display:flex!important;flex-direction:column!important;gap:5px!important;align-items:flex-start!important}'
+'.section-featured-home .labels .label{background:#2E2B28;color:#fff;font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;padding:5px 11px;border-radius:99px;writing-mode:horizontal-tb;transform:none;font-family:Outfit,sans-serif}'
+'.section-featured-home .sg-ahorro{background:#6E2E23;color:#fff;font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;padding:5px 11px;border-radius:99px;font-family:Outfit,sans-serif;display:inline-block}'
+'.section-featured-home .js-item-name{font-family:Cormorant Garamond,serif!important;font-size:20px!important;font-weight:500!important;line-height:1.22!important;color:#2E2B28!important;opacity:1!important;margin-bottom:8px!important;text-align:left}'
+'.section-featured-home .js-insta-variant{width:14px!important;height:14px!important;border-radius:50%!important;border:1px solid #D5CEC6!important;padding:0!important;margin:0 4px 0 0!important;min-width:0!important}'
+'.section-featured-home .js-price-display{font-family:Cormorant Garamond,serif!important;font-size:25px!important;font-weight:500!important;color:#2E2B28!important}'
+'.section-featured-home .js-compare-price-display{color:#635D57!important;font-size:12.5px!important;font-family:Outfit,sans-serif!important}'
+'.section-featured-home .js-offer-label-private{display:none!important}'
+'.section-featured-home .js-payment-discount-price-prod,.section-featured-home .js-payment-discount-name-product{color:#3F6B4F!important;font-size:12px!important;font-family:Outfit,sans-serif!important}'
+'.section-featured-home .sg-cuotas{font-size:11.5px;color:#635D57;font-family:Outfit,sans-serif;margin-top:3px;display:block}'
+'.section-featured-home .js-item-product{display:flex!important;flex-direction:column!important}'
+'.section-featured-home .js-item-product > .item{display:flex!important;flex-direction:column!important;flex:1!important;height:auto!important}'
+'.section-featured-home .js-product-container{flex:1!important;height:auto!important}'
+'.section-featured-home .item-description{padding:16px 16px 18px;flex:1!important;display:flex!important;flex-direction:column!important}'
+'.section-featured-home .item-description > .item-link{display:flex!important;flex-direction:column!important;flex:1!important}'
+'.section-featured-home .item-actions{display:block!important;width:100%!important;margin-top:auto!important;padding-top:14px}'
+'.section-featured-home .item-actions .btn,.section-featured-home .js-open-quickshop{display:block!important;width:100%!important;background:#2E2B28!important;border:1px solid #2E2B28!important;color:#fff!important;border-radius:99px!important;padding:13px 10px!important;font-family:Outfit,sans-serif!important;font-size:9.5px!important;letter-spacing:.14em!important;text-transform:uppercase!important;text-align:center!important}'
+'.section-featured-home .item-actions .btn:hover{background:#1C1A18!important;border-color:#1C1A18!important}'
+'@media(max-width:760px){'
+' .section-featured-home .item-description{padding:13px}'
+' .section-featured-home .js-item-name{font-size:16.5px!important}'
+' .section-featured-home .js-price-display{font-size:20px!important}'
+' .section-featured-home .item-actions .btn{font-size:8.5px!important;letter-spacing:.05em!important;padding:12px 6px!important}'
+'}';
document.head.appendChild(css);

/* las 12 cuotas sin interes arrancan recien en este monto */
var MIN_CUOTAS=140000;

function num(t){ return parseInt(String(t).replace(/[^0-9]/g,''),10)||0; }
function pesos(n){ return '$'+n.toLocaleString('es-AR'); }

function mejorar(){
  var tit=document.querySelector('.js-products-featured-title');
  if(tit && tit.textContent.indexOf('vendidos')===-1) tit.textContent='Nuestros productos m\u00e1s vendidos';
  var cards=document.querySelectorAll('.section-featured-home .js-item-product');
  if(!cards.length) return false;
  for(var i=0;i<cards.length;i++){
    var c=cards[i];
    if(c.dataset.sgOk) continue;
    var precio=c.querySelector('.js-price-display');
    var tach=c.querySelector('.js-compare-price-display');
    if(!precio) continue;
    var p=num(precio.textContent);
    if(!p) continue;
    c.dataset.sgOk='1';

    if(tach){
      var t=num(tach.textContent);
      if(t>p){
        var cont=c.querySelector('.labels');
        if(cont && !cont.querySelector('.sg-ahorro')){
          var s=document.createElement('span');
          s.className='sg-ahorro';
          s.textContent='Ahorras '+pesos(t-p);
          cont.appendChild(s);
        }
      }
    }

    /* 12 cuotas sin interes: SOLO desde $140.000 */
    var caja=precio.closest('.item-price-container') || precio.parentNode;
    if(p>=MIN_CUOTAS && caja && !caja.querySelector('.sg-cuotas')){
      var q=document.createElement('span');
      q.className='sg-cuotas';
      q.textContent='Hasta 12 cuotas sin interes de '+pesos(Math.round(p/12));
      caja.appendChild(q);
    }

    var w=c.querySelector('.js-open-quickshop-wording');
    if(w) w.textContent='Agregar al carrito';
  }
  return true;
}

if(!mejorar()){
  var n=0,t=setInterval(function(){ if(mejorar()||++n>50) clearInterval(t); },200);
}
})();

}catch(e){console.error("saga bloque 5",e)}

/* SAGA · COMO SE ARMA TU LIBRO DE BEBE (home, debajo de la barra de ofertas) */
try{

(function(){
if(window.location.pathname!=='/') return;
if(window.__sgEscalera) return; window.__sgEscalera=true;

var css=document.createElement('style');
css.textContent=
 '#saga-escalera{background:#fff;padding:70px 20px;font-family:Outfit,sans-serif}'
+'#saga-escalera .sge-in{max-width:1240px;margin:0 auto}'
+'#saga-escalera .sge-top{text-align:center;margin-bottom:34px}'
+'#saga-escalera .sge-eye{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#635D57;display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:16px}'
+'#saga-escalera .sge-eye:before,#saga-escalera .sge-eye:after{content:"";height:1px;background:#D5CEC6;width:56px}'
+'#saga-escalera h2{font-family:Cormorant Garamond,serif;font-size:44px;font-weight:400;line-height:1.05;color:#2E2B28;margin:0;letter-spacing:-.015em}'
+'#saga-escalera h2 i{font-style:italic;font-weight:300}'
+'#saga-escalera .sge-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #E6E1DB;border-radius:16px;overflow:hidden}'
+'#saga-escalera .sge-col{padding:28px 26px;border-right:1px solid #E6E1DB;position:relative;background:#fff;display:flex;flex-direction:column}'
+'#saga-escalera .sge-col:last-child{border-right:none}'
+'#saga-escalera .sge-col.sge-hl{background:#E9DBD2}'
+'#saga-escalera .sge-step{font-size:9.5px;letter-spacing:.2em;text-transform:uppercase;color:#635D57}'
+'#saga-escalera .sge-hl .sge-step{color:#453F3A}'
+'#saga-escalera .sge-step b{color:#6E2E23;font-weight:500}'
+'#saga-escalera h4{font-family:Cormorant Garamond,serif;font-size:25px;font-weight:500;margin:10px 0 0;line-height:1.2;color:#2E2B28}'
+'#saga-escalera .sge-pz{font-family:Cormorant Garamond,serif;font-size:27px;font-weight:500;margin-top:12px;color:#2E2B28}'
+'#saga-escalera .sge-tr{font-size:12px;color:#3F6B4F;margin-top:5px}'
+'#saga-escalera .sge-hl .sge-tr{color:#25482F}'
+'#saga-escalera ul{margin:14px 0 0 17px;padding:0;font-size:12.5px;color:#4A4540;line-height:1.85}'
+'#saga-escalera .sge-hl ul{color:#453F3A}'
+'#saga-escalera .sge-tot{font-size:12.5px;font-weight:500;color:#2E2B28;margin-top:11px;padding-top:11px;border-top:1px solid #E6E1DB}'
+'#saga-escalera .sge-hl .sge-tot{color:#2E2B28;border-top-color:rgba(46,43,40,.18)}'
+'#saga-escalera .sge-tags{margin-top:14px}'
+'#saga-escalera .sge-tag{display:inline-block;margin:0 7px 6px 0;background:#2E2B28;color:#fff;font-size:10px;letter-spacing:.13em;text-transform:uppercase;padding:6px 13px;border-radius:99px}'
+'#saga-escalera .sge-cta{margin-top:auto;padding-top:16px}'
+'#saga-escalera .sge-btn{display:block;text-align:center;text-decoration:none;border-radius:99px;padding:14px 18px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;border:1px solid #2E2B28;background:transparent;color:#2E2B28;transition:.15s}'
+'#saga-escalera .sge-btn:hover{background:#2E2B28;color:#fff}'
+'#saga-escalera .sge-btn.sge-full{background:#2E2B28;color:#fff}'
+'#saga-escalera .sge-btn.sge-full:hover{background:#1C1A18}'
+'#saga-escalera .sge-arrow{position:absolute;top:50%;right:-14px;transform:translateY(-50%);z-index:3;background:#2E2B28;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px}'
+'@media(max-width:760px){'
+' #saga-escalera{padding:46px 20px}'
+' #saga-escalera h2{font-size:30px}'
+' #saga-escalera .sge-grid{grid-template-columns:1fr}'
+' #saga-escalera .sge-col{border-right:none;border-bottom:1px solid #E6E1DB}'
+' #saga-escalera .sge-col:last-child{border-bottom:none}'
+' #saga-escalera .sge-arrow{top:auto;bottom:-14px;right:50%;transform:translateX(50%) rotate(90deg)}'
+'}';
document.head.appendChild(css);

var U1='/productos/hola-mundo-beige-personalizado/';
var U2='/productos/combo-hola-mundo-edicion-full-1og7j/';
var U3='/productos/combo-hola-mundo-edicion-full-con-fotos-m46zt/';

var html=''
+'<div class="sge-in">'
+'<div class="sge-top">'
+'<h2>Una historia,<br><i>tres formas de empezarla</i></h2>'
+'</div>'
+'<div class="sge-grid">'

+'<div class="sge-col">'
+'<div class="sge-step">Punto de partida</div>'
+'<h4>Libro Hola Mundo</h4>'
+'<div class="sge-pz">$98.000</div>'
+'<div class="sge-tr">$68.600 por transferencia</div>'
+'<ul><li>30 hojas dise\u00f1adas</li><li>Del nacimiento a los 3 a\u00f1os</li></ul>'
+'<div class="sge-cta"><a class="sge-btn" href="'+U1+'">Comprar</a></div>'
+'<div class="sge-arrow">&rarr;</div>'
+'</div>'

+'<div class="sge-col sge-hl">'
+'<div class="sge-step">Sum\u00e1s <b>$53.000</b></div>'
+'<h4>Combo FULL</h4>'
+'<div class="sge-pz">$151.000</div>'
+'<div class="sge-tr">$105.700 por transferencia</div>'
+'<ul><li>+ Pack Embarazo</li><li>+ Pack de hojas lisas</li></ul>'
+'<div class="sge-tot">Total 50 hojas</div>'
+'<div class="sge-tags"><span class="sge-tag">+ Env\u00edo gratis</span><span class="sge-tag">+ Ahorr\u00e1s $26.000</span></div>'
+'<div class="sge-cta"><a class="sge-btn sge-full" href="'+U2+'">Llevar el combo</a></div>'
+'<div class="sge-arrow">&rarr;</div>'
+'</div>'

+'<div class="sge-col">'
+'<div class="sge-step">Sum\u00e1s <b>$42.000</b> m\u00e1s</div>'
+'<h4>FULL + 24 fotos</h4>'
+'<div class="sge-pz">$193.000</div>'
+'<div class="sge-tr">$135.100 por transferencia</div>'
+'<ul><li>+ 24 fotos 10x10 impresas</li><li>Papel fotogr\u00e1fico</li></ul>'
+'<div class="sge-tot">Total 50 hojas</div>'
+'<div class="sge-tags"><span class="sge-tag">+ Ahorr\u00e1s $42.000</span></div>'
+'<div class="sge-cta"><a class="sge-btn" href="'+U3+'">Comprar</a></div>'
+'</div>'

+'</div></div>';

function inject(){
  if(document.getElementById('saga-escalera')) return true;
  var barra=document.querySelector('.section-informative-banners');
  if(!barra || !barra.parentNode) return false;
  var d=document.createElement('div');
  d.id='saga-escalera';
  d.innerHTML=html;
  barra.parentNode.insertBefore(d, barra.nextSibling);
  return true;
}

if(!inject()){
  var n=0,t=setInterval(function(){ if(inject()||++n>50) clearInterval(t); },200);
}
})();

}catch(e){console.error("saga bloque 6",e)}

/* SAGA · DISENO DE LAS RESENAS (app Revie) · formato "3 columnas" */
try{

(function(){
if(window.__sgRevie4) return; window.__sgRevie4=true;

var css=document.createElement('style');
css.id='sg-revie';
css.textContent=
 '#revie-tn-widget{max-width:1180px!important;margin:52px auto 16px!important;padding:0 16px!important;font-family:Outfit,sans-serif!important}'
+'#revie-tn-widget:before{content:"Miles de historias que ya se est\u00e1n escribiendo";display:block;font-family:Cormorant Garamond,serif;font-size:34px;font-weight:400;line-height:1.05;letter-spacing:-.015em;color:#2E2B28;text-align:center;margin-bottom:8px}'
+'#revie-tn-widget .topTest{font-family:Outfit,sans-serif!important;font-size:11px!important;font-weight:400!important;letter-spacing:.22em!important;text-transform:uppercase!important;color:#635D57!important;text-align:center!important;padding:0 0 26px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;flex-wrap:wrap!important}'
+'#revie-tn-widget .topTest > div{display:inline-flex!important;align-items:center!important}'
+'#revie-tn-widget [data-star]::before{color:#D5CEC6!important}'
+'#revie-tn-widget [data-star]::after{color:#7F5525!important}'
+'#revie-tn-widget .titleRevie [data-star]{font-size:16px!important}'
+'#revie-tn-widget .tm-revie-review [data-star]{font-size:14px!important}'
+'#revie-tn-widget .gridTestimoniales{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:16px!important;align-items:stretch!important;position:static!important;height:auto!important}'
+'#revie-tn-widget .p-test,#revie-tn-widget .tt-rev-it{position:static!important;top:auto!important;left:auto!important;transform:none!important;width:auto!important;max-width:none!important;min-width:0!important;flex:none!important;margin:0!important;padding:0!important;display:flex!important;height:auto!important}'
+'#revie-tn-widget .tm-revie-review{width:100%!important;height:100%!important;background:#fff!important;border:1px solid #E6E1DB!important;border-radius:14px!important;overflow:hidden!important;transition:box-shadow .18s,border-color .18s}'
+'#revie-tn-widget .tm-revie-review:hover{border-color:#D5CEC6!important;box-shadow:0 10px 26px rgba(0,0,0,.06)!important}'
+'#revie-tn-widget .tm-revie-review > div:first-of-type{position:static!important;opacity:1!important;background:transparent!important;color:inherit!important;width:auto!important;height:auto!important;flex:1 1 auto!important;padding:17px 18px 18px!important;gap:4px!important}'
+'#revie-tn-widget .tm-rev-img,#revie-tn-widget .imgTest,#revie-tn-widget .reviesimage,#revie-tn-widget .emptyimg{display:none!important}'
+'#revie-tn-widget .tm-revie-hr,#revie-tn-widget .cont-tm-product,#revie-tn-widget .tm-revie-product{display:none!important}'
+'#revie-tn-widget .tm-rev-cus{font-family:Outfit,sans-serif!important;font-size:10.5px!important;font-weight:500!important;letter-spacing:.16em!important;text-transform:uppercase!important;color:#2E2B28!important}'
+'#revie-tn-widget .svg-revie svg{width:13px!important;height:13px!important;margin-left:5px!important}'
+'#revie-tn-widget .svg-revie circle{fill:#3F6B4F!important}'
+'#revie-tn-widget .time{display:none!important}'
+'#revie-tn-widget .tm-rev-com{font-family:Cormorant Garamond,serif!important;font-size:18px!important;line-height:1.45!important;font-weight:400!important;color:#2E2B28!important;margin-top:9px!important;display:-webkit-box!important;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden!important}'
+'#revie-tn-widget .centerTM{margin-top:20px!important;margin-bottom:0!important}'
+'#revie-tn-widget .centerTM > div{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;background:transparent!important;color:#2E2B28!important;border:1px solid #2E2B28!important;border-radius:99px!important;padding:13px 28px!important;font-family:Outfit,sans-serif!important;font-size:10px!important;letter-spacing:.16em!important;text-transform:uppercase!important;transition:.15s}'
+'#revie-tn-widget .centerTM > div:hover{background:#2E2B28!important;color:#fff!important}'
+'#revie-tn-widget .centerTM > div:hover .button-text{color:#fff!important}'
+'#revie-tn-widget .button-text{color:inherit!important}'
+'#revie-tn-widget .icon-Testimoniales{display:none!important}'
+'.modalTcontent,.div-modal-content-TM{border-radius:16px!important;font-family:Outfit,sans-serif!important}'
+'.div-modal-content-TM .tm-rev-com{font-family:Cormorant Garamond,serif!important;font-size:20px!important;color:#2E2B28!important;display:block!important;-webkit-line-clamp:none!important;overflow:visible!important}'
+'.div-modal-content-TM .tm-rev-img,.div-modal-content-TM .imgTest{display:block!important}'
+'.div-modal-content-TM [data-star]::before{color:#D5CEC6!important}'
+'.div-modal-content-TM [data-star]::after{color:#7F5525!important}'
+'[data-starlist]:before{color:#D5CEC6!important}'
+'[data-starlist]:after{color:#7F5525!important}'
+'.cont-revie-tn{max-width:1180px;margin:52px auto 0;padding:0 20px;font-family:Outfit,sans-serif}'
+'#revieList{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:stretch;max-width:1180px;margin:0 auto}'
+'#revieList > *:not(.detail-star){grid-column:1/-1}'
+'#revieList hr{display:none}'
+'#revieList .summary{align-items:center!important;background:#FBF8F5;border:1px solid #E6E1DB;border-radius:14px;padding:18px 24px;margin-bottom:22px!important}'
+'#revieList .opinions-text{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#635D57}'
+'#revieList .table{border:none;margin:0}'
+'#revieList .table td,#revieList .table th{border:none;padding:0 0 0 2px;font-size:12px;color:#635D57;vertical-align:middle}'
+'#revieList .table-start{background:none!important;font-family:Cormorant Garamond,serif;font-size:38px;line-height:1;color:#2E2B28;padding:0 16px 0 0!important;margin-right:0!important}'
+'#revieList .detail-star{background:#fff;border:1px solid #E6E1DB;border-radius:14px;padding:18px;margin:0!important;display:flex;flex-direction:column}'
+'#revieList .detail-star:hover{border-color:#D5CEC6;box-shadow:0 10px 26px rgba(0,0,0,.06)}'
+'#revieList .detail-star [data-starlist]{font-size:14px}'
+'#revieList .detail-star label{display:none!important}'
+'#revieList .detail-star b{font-family:Outfit,sans-serif;font-size:10.5px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:#2E2B28;margin-right:8px!important}'
+'#revieList .detail-star span{font-size:11px!important;color:#635D57!important}'
+'#revieList .detail-star span:before{background:#3F6B4F!important;color:#fff!important}'
+'#revieList .commentRevie{font-family:Cormorant Garamond,serif;font-size:18px;line-height:1.45;font-weight:400;color:#2E2B28;margin-top:9px}'
+'#revieList .content-media-revie{margin-top:12px;display:flex;flex-wrap:wrap;gap:8px}'
+'#revieList .imagen-revie img,#revieList .vid-revie{border-radius:10px!important;max-height:88px!important;width:auto!important}'
+'.paginationRevie{gap:6px;margin-top:26px}'
+'.paginationRevie a{float:none!important;border:1px solid #E6E1DB!important;border-radius:99px!important;color:#2E2B28!important;font-family:Outfit,sans-serif;font-size:11px;padding:9px 15px!important;line-height:1!important}'
+'.paginationRevie a.active{background:#2E2B28!important;border-color:#2E2B28!important;color:#fff!important}'
+'.boton-show-description{background:transparent!important;color:#2E2B28!important;border:1px solid #2E2B28!important;border-radius:99px!important;font-family:Outfit,sans-serif;font-size:10px;letter-spacing:.16em;text-transform:uppercase;padding:13px 28px!important;max-width:260px!important;margin-top:22px!important}'
+'.boton-show-description:hover{background:#2E2B28!important;color:#fff!important}'
+'#revieList .review-revie{font-size:10px;color:#B9ABA3;text-align:center;margin-top:24px;display:flex;align-items:center;justify-content:center;gap:6px}'
+'#revieList .review-revie svg{opacity:.55}'
+'@media(max-width:1000px){'
+' #revie-tn-widget .gridTestimoniales{grid-template-columns:repeat(2,1fr)!important}'
+' #revieList{grid-template-columns:repeat(2,1fr)}'
+'}'
+'@media(max-width:700px){'
+' #revie-tn-widget{margin-top:38px!important}'
+' #revie-tn-widget:before{font-size:24px}'
+' #revie-tn-widget .topTest{padding-bottom:20px!important}'
+' #revie-tn-widget .gridTestimoniales{grid-template-columns:1fr!important;gap:12px!important}'
+' #revie-tn-widget .tm-rev-com{font-size:17px!important;-webkit-line-clamp:3}'
+' #revie-tn-widget .tm-revie-review > div:first-of-type{padding:15px 16px 16px!important}'
+' #revieList{grid-template-columns:1fr;gap:12px}'
+' .cont-revie-tn{margin-top:38px}'
+' #revieList .commentRevie{font-size:17px}'
+' #revieList .table-start{font-size:31px}'
+'}';

document.head.appendChild(css);

if(window.location.pathname==='/'){
  var listo=false;

  function mover(){
    if(listo) return true;
    var w=document.getElementById('revie-tn-widget');
    var esc=document.getElementById('saga-escalera');
    if(!w || !esc || !esc.parentNode) return false;
    var p=w.parentElement;
    var nodo=(p && p.tagName==='DIV' && !p.id && !p.className) ? p : w;
    if(nodo===esc || nodo.contains(esc)) return false;
    if(nodo.previousElementSibling!==esc){
      esc.parentNode.insertBefore(nodo, esc.nextSibling);
    }
    listo=true;
    return true;
  }

  if(!mover()){
    var obs=new MutationObserver(function(){ if(mover() && obs) obs.disconnect(); });
    obs.observe(document.body,{childList:true,subtree:true});
    var n=0, t=setInterval(function(){ if(mover() || ++n>150){ clearInterval(t); } },400);
  }
}
})();

}catch(e){console.error("saga bloque 7",e)}

/* SAGA · BARRA DE BENEFICIOS (reemplaza la barra .sg-mq del tema, sin tocarla) */
try{

(function(){
if(window.__sgBarra) return; window.__sgBarra=true;

var css=document.createElement('style');
css.id='sg-barra';
css.textContent=
 '.sg-mq{display:none!important}'
+'#saga-mq{background:#2E2B28;color:#fff;overflow:hidden;padding:12px 0;white-space:nowrap;position:relative;font-family:Outfit,sans-serif}'
+'#saga-mq .sgm-track{display:inline-flex;align-items:center;animation:sgmv 60s linear infinite;will-change:transform}'
+'#saga-mq:hover .sgm-track{animation-play-state:paused}'
+'#saga-mq span{font-size:11px;letter-spacing:.19em;text-transform:uppercase;padding:0 24px;font-weight:300;color:#fff}'
+'#saga-mq span b{font-weight:500}'
+'#saga-mq i{font-style:normal;color:#B9ABA3;font-size:11px}'
+'@keyframes sgmv{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}'
+'@media(max-width:760px){'
+' #saga-mq{padding:10px 0}'
+' #saga-mq span{font-size:10px;padding:0 16px;letter-spacing:.16em}'
+' #saga-mq i{font-size:10px}'
+' #saga-mq .sgm-track{animation-duration:42s}'
+'}'
+'@media(prefers-reduced-motion:reduce){ #saga-mq .sgm-track{animation:none} }';
document.head.appendChild(css);

var items=[
  '<span><b>30% OFF</b> por transferencia</span>',
  '<span><b>Hasta 12 cuotas</b> sin inter\u00e9s desde $140.000</span>',
  '<span><b>Env\u00edo gratis</b> desde $120.000</span>',
  '<span><b>Grabado personalizado</b> de la tapa</span>',
  '<span>Eleg\u00ed entre <b>varios colores</b></span>',
  '<span><b>Terminaci\u00f3n artesanal</b></span>'
];

var unidad=items.join('<i>\u2733</i>')+'<i>\u2733</i>';
var pista=unidad+unidad+unidad;

function poner(){
  if(document.getElementById('saga-mq')) return true;
  var vieja=document.querySelector('.sg-mq');
  if(!vieja || !vieja.parentNode) return false;
  var d=document.createElement('div');
  d.id='saga-mq';
  d.setAttribute('aria-hidden','true');
  d.innerHTML='<div class="sgm-track">'+pista+'</div>';
  vieja.parentNode.insertBefore(d, vieja);
  return true;
}

if(!poner()){
  var n=0,t=setInterval(function(){ if(poner()||++n>50) clearInterval(t); },200);
}
})();

}catch(e){console.error("saga bloque 8",e)}

/* INICIO SAGA CAMPOS CUADRO (datos del bebé, cuadro de nacimiento) */
try{
!function(){var e=375947890,t=["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"],o=[{k:"Nombre y apellido",l:"Nombre y apellido",ph:"Ej: Jazmín Arana",max:40,req:!0},{k:"Fecha de nacimiento",l:"Fecha de nacimiento",ph:"Ej: 26/06/2022",max:10,req:!0},{k:"Hora",l:"Hora (opcional)",ph:"Ej: 20:22",max:5,req:!1},{k:"Peso",l:"Peso (opcional)",ph:"Ej: 3,400 kg",max:10,req:!1},{k:"Talla",l:"Talla (opcional)",ph:"Ej: 48 cm",max:10,req:!1},{k:"Signo",l:"Signo del zodíaco",ph:"Elegí el signo",req:!0,sel:!0}];function r(){return window.LS&&LS.product&&Number(LS.product.id)===e}function a(){if(r()){var e=document.getElementById("product_form");if(e&&!e.querySelector(".sgc")){var a=e.querySelector(".js-addtocart"),c=e.querySelector(".form-quantity");if(a){for(var s=c||a;s&&s.parentElement!==e&&!s.contains(a);)s=s.parentElement;!function(){if(!document.getElementById("sgc-css")){var e=document.createElement("style");e.id="sgc-css",e.textContent='.sgc{margin:8px 0 22px;padding:20px;background:#F7F2EE;border-radius:14px}.sgc-t{font-family:"Cormorant Garamond",Georgia,serif;font-size:22px;font-weight:500;color:#313131;margin:0 0 4px}.sgc-s{font-size:12.5px;color:#6E655F;margin:0 0 16px;line-height:1.45}.sgc-g{display:grid;grid-template-columns:1fr 1fr;gap:12px}.sgc-f label{display:block;font-size:12px;font-weight:600;color:#313131;margin-bottom:5px}.sgc-f input,.sgc-f select{width:100%;box-sizing:border-box;height:44px;padding:0 13px;border:1.5px solid #E2D8D0;border-radius:10px;background:#fff;font-size:14px;color:#313131;outline:none;-webkit-appearance:none;appearance:none}.sgc-f select{background-image:url("data:image/svg+xml,%3Csvg xmlns=%27https://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27%3E%3Cpath d=%27M1 1l5 5 5-5%27 fill=%27none%27 stroke=%27%23B9ABA3%27 stroke-width=%271.5%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 13px center;padding-right:34px}.sgc-f select.sgc-vacio{color:#B9ABA3}.sgc-f input:focus,.sgc-f select:focus{border-color:#B9ABA3}.sgc-f input::placeholder{color:#B9ABA3}.sgc-f.sgc-err input,.sgc-f.sgc-err select{border-color:#C0584B}.sgc-m{display:none;font-size:12.5px;color:#C0584B;margin-top:12px}.sgc-m.on{display:block}@media(max-width:480px){.sgc-g{grid-template-columns:1fr}}',document.head.appendChild(e)}}();var n=document.createElement("div");n.className="sgc";var i='<p class="sgc-t">Datos para el cuadro</p><p class="sgc-s">Los escribimos tal cual los cargás, así que revisá tildes y mayúsculas.</p><div class="sgc-g">';o.forEach(function(e,o){var r=' id="sgc-'+o+'" name="properties['+e.k+']"'+(e.req?' data-req="1"':"");i+='<div class="sgc-f"><label for="sgc-'+o+'">'+e.l+"</label>",e.sel?i+="<select"+r+' class="sgc-vacio"><option value="">'+e.ph+"</option>"+t.map(function(e){return'<option value="'+e+'">'+e+"</option>"}).join("")+"</select>":i+="<input"+r+' type="text" autocomplete="off" maxlength="'+e.max+'" placeholder="'+e.ph+'">',i+="</div>"}),i+='</div><p class="sgc-m">Completá los datos marcados para poder agregarlo al carrito.</p>',n.innerHTML=i,s.parentElement.insertBefore(n,s);var l=n.querySelector('[name="properties[Fecha de nacimiento]"]'),d=n.querySelector("select"),g=!1;d.addEventListener("change",function(){g=!0,d.classList.toggle("sgc-vacio",!d.value)}),l.addEventListener("input",function(){if(!g){var e=function(e){var o=/^\s*(\d{1,2})[\/\-.](\d{1,2})/.exec(e||"");if(!o)return"";var r=+o[1],a=+o[2];if(!r||!a||a>12||r>31)return"";var c=[10,11,0,1,2,3,4,5,6,7,8,9];return t[r>=[20,19,21,20,21,21,23,23,23,23,22,22][a-1]?c[a-1]:c[(a+10)%12]]}(l.value);e&&(d.value=e,d.classList.remove("sgc-vacio"),d.closest(".sgc-f").classList.remove("sgc-err"))}}),n.addEventListener("input",function(e){var t=e.target.closest(".sgc-f");t&&e.target.value.trim()&&t.classList.remove("sgc-err")})}}}}function c(e){var t=e.querySelector(".sgc");if(!t)return!0;var o=!0,r=null;return t.querySelectorAll("[data-req]").forEach(function(e){"INPUT"===e.tagName&&(e.value=e.value.replace(/\s+/g," ").trim());var t=e.closest(".sgc-f");e.value?t.classList.remove("sgc-err"):(o=!1,t.classList.add("sgc-err"),r||(r=e))}),t.querySelector(".sgc-m").classList.toggle("on",!o),r&&(r.scrollIntoView({behavior:"smooth",block:"center"}),r.focus({preventScroll:!0})),o}document.addEventListener("click",function(e){var t=e.target.closest&&e.target.closest("#product_form .js-addtocart");if(t&&r())return c(t.form)?void t.form.querySelectorAll(".sgc input:not([data-req])").forEach(function(e){e.value.trim()||(e.disabled=!0,setTimeout(function(){e.disabled=!1},1500))}):(e.preventDefault(),void e.stopImmediatePropagation())},!0),document.addEventListener("submit",function(e){e.target&&"product_form"===e.target.id&&r()&&!c(e.target)&&(e.preventDefault(),e.stopImmediatePropagation())},!0),document.addEventListener("click",function(t){t.target.closest&&(t.target.closest('[data-quickshop-id="quick'+e+'"]')&&t.target.closest(".js-quickshop-modal-open, .js-addtocart, .item-actions")&&(t.preventDefault(),t.stopImmediatePropagation(),window.location.href="/productos/cuadro-nacimiento-personalizado/"))},!0),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a(),window.addEventListener("load",a)}();
}catch(e){console.error("saga bloque 9",e)}

/* FIN SAGA CAMPOS CUADRO */

/* INICIO SAGA GRABADO (campo Grabado personalizado; IDs de productos en el objeto del inicio) */
try{
!function(){var e={112658582:"hola-mundo-beige-personalizado",341919111:"combo-hola-mundo-edicion-full-1og7j",307729804:"combo-hola-mundo-edicion-full-con-fotos-m46zt",238906245:"album-personalizado",317829645:"album-personalizado-24-fotos-10x10-4xh6n",318056486:"cuaderno-a5-i9pcc",295848695:"lona-de-crecimiento-personalizada",285921652:"libro-cumpleanos",296446493:"la-mejor-mama",260798871:"cronicas-de-mi-ninez",382673137:"fotolibro-entelado-1omqd"};function t(){return!!e[window.LS&&LS.product?Number(LS.product.id):0]}function o(e){return!!e.querySelector('[name^="properties[campo_text"]')}function r(e){var t=e.querySelector(".sgg");t&&t.remove()}function a(){if(t()){var e=document.getElementById("product_form");if(e)if(o(e))r(e);else if(!e.querySelector(".sgg")){var a=e.querySelector(".js-addtocart");if(a){for(var n=e.querySelector(".form-quantity")||a;n&&n.parentElement!==e&&!n.contains(a);)n=n.parentElement;!function(){if(!document.getElementById("sgg-css")){var e=document.createElement("style");e.id="sgg-css",e.textContent=".sgg{margin:8px 0 22px;padding:18px 20px;background:#F7F2EE;border-radius:14px}.sgg label{display:block;font-size:13px;font-weight:600;color:#313131;margin:0 0 7px}.sgg input{width:100%;box-sizing:border-box;height:46px;padding:0 14px;border:1.5px solid #E2D8D0;border-radius:10px;background:#fff;font-size:15px;letter-spacing:.06em;text-transform:uppercase;color:#313131;outline:none}.sgg input:focus{border-color:#B9ABA3}.sgg input::placeholder{color:#B9ABA3;letter-spacing:.02em}.sgg-a{display:flex;justify-content:space-between;gap:10px;font-size:12px;color:#6E655F;margin-top:7px;line-height:1.4}.sgg-c{white-space:nowrap;color:#B9ABA3}.sgg.sgg-err input{border-color:#C0584B}.sgg-m{display:none;font-size:12.5px;color:#C0584B;margin-top:8px}.sgg.sgg-err .sgg-m{display:block}",document.head.appendChild(e)}}();var i=document.createElement("div");i.className="sgg",i.innerHTML='<label for="sgg-in">Grabado personalizado:</label><input id="sgg-in" type="text" autocomplete="off" name="properties[Grabado personalizado]" placeholder="Por ej: EMMA"><div class="sgg-m">Escribí el texto del grabado para agregarlo al carrito.</div>',n.parentElement.insertBefore(i,n);var c=i.querySelector("input");c.addEventListener("input",function(){c.value.trim()&&i.classList.remove("sgg-err")})}}}}function n(e){var t=e.querySelector(".sgg");if(!t)return!0;var o=t.querySelector("input");return o.value=o.value.replace(/\s+/g," ").trim().toLocaleUpperCase("es-AR"),!!o.value||(t.classList.add("sgg-err"),o.scrollIntoView({behavior:"smooth",block:"center"}),o.focus({preventScroll:!0}),!1)}function i(){if(t()){setTimeout(a,1200);var e=document.getElementById("product_form");e&&window.MutationObserver&&new MutationObserver(function(){o(e)&&r(e);var n=e.querySelector(".saga-engrave-note"),m="Se graba en imprenta mayúscula.";295848695==LS.product.id&&n&&n.textContent!==m&&(n.textContent=m)}).observe(e,{childList:!0,subtree:!0})}}document.addEventListener("click",function(e){e.target.closest&&e.target.closest("#product_form .js-addtocart, #product_form #wallet-buy-now-panel button")&&t()&&(n(document.getElementById("product_form"))||(e.preventDefault(),e.stopImmediatePropagation()))},!0),document.addEventListener("submit",function(e){e.target&&"product_form"===e.target.id&&t()&&!n(e.target)&&(e.preventDefault(),e.stopImmediatePropagation())},!0),document.addEventListener("click",function(t){if(t.target.closest){var o=t.target.closest('[data-quickshop-id^="quick"]');if(o){var r=Number(o.getAttribute("data-quickshop-id").replace("quick",""));e[r]&&(document.querySelector('script[src*="CampoPersonalizado"]')||t.target.closest(".js-quickshop-modal-open, .js-addtocart, .item-actions")&&(t.preventDefault(),t.stopImmediatePropagation(),window.location.href="/productos/"+e[r]+"/"))}}},!0),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()}();
}catch(e){console.error("saga bloque 10",e)}

/* FIN SAGA GRABADO */

/* INICIO SAGA CARRITO DATOS (muestra grabado y datos en el carrito) */
try{
!function(){var e=!1,t=null;function n(e){return String(e).replace(/[&<>"]/g,function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[e]})}function r(){var t=document.querySelectorAll(".js-cart-item[data-item-id]");t.length&&fetch("/comprar/",{credentials:"same-origin"}).then(function(e){return e.text()}).then(function(e){for(var t,n={},r=/\bid:\s*(\d+),(?:(?!\bid:)[\s\S])*?properties:\s*\{([\s\S]*?)\}/g;t=r.exec(e);){for(var i,o=[],a=/"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"/g;i=a.exec(t[2]);)try{o.push([JSON.parse('"'+i[1]+'"'),JSON.parse('"'+i[2]+'"')])}catch(e){}o.length&&(n[t[1]]=o)}return n}).then(function(r){e=!0,function(){if(!document.getElementById("sgx-css")){var e=document.createElement("style");e.id="sgx-css",e.textContent=".sgx{margin:4px 0 6px;font-size:12px;line-height:1.5;color:#6E655F}.sgx b{font-weight:600;color:#313131}",document.head.appendChild(e)}}(),t.forEach(function(e){var t=r[e.getAttribute("data-item-id")],i=e.querySelector(".sgx");if(t){var o=e.querySelector(".cart-item-name-container")||e,a=o.textContent;if(i||!(a.indexOf(t[0][1])>-1)){var c=t.map(function(e){return"<div><b>"+n(e[0])+":</b> "+n(e[1])+"</div>"}).join("");if(i)i.innerHTML!==c&&(i.innerHTML=c);else{var s=document.createElement("div");s.className="sgx",s.innerHTML=c;var u=o.querySelector(".cart-item-name");u&&u.nextSibling?o.insertBefore(s,u.nextSibling):o.appendChild(s)}}}else i&&i.remove()}),setTimeout(function(){e=!1},50)}).catch(function(){})}function i(){e||(clearTimeout(t),t=setTimeout(r,500))}function o(){r();var e=document.querySelectorAll('.js-ajax-cart-panel, .js-cart-table, [data-store="cart-page"]');window.MutationObserver&&e.forEach(function(e){new MutationObserver(function(e){for(var t=0;t<e.length;t++){var n=e[t].target;if(!n.closest||!n.closest(".sgx"))return void i()}}).observe(e,{childList:!0,subtree:!0})})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o()}();
}catch(e){console.error("saga bloque 11",e)}

/* FIN SAGA CARRITO DATOS */

/* Saga: ajuste bloque Combina al 30% transferencia (Cyber nov-2026) */
try{
(function(){var OLD=0.75,NEW=0.70;function fix(){var els=document.querySelectorAll('.sg-combina-tr');for(var i=0;i<els.length;i++){var tr=els[i];if(tr.getAttribute('data-t30'))continue;var m=tr.textContent.match(/\$\s?([\d.]+)/);if(!m)continue;var v=parseInt(m[1].replace(/\./g,''),10);if(!v)continue;var n=Math.round(Math.round(v/OLD)*NEW);tr.textContent='$'+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' con transferencia';tr.setAttribute('data-t30','1');}}if(document.readyState!=='loading'){fix();}else{document.addEventListener('DOMContentLoaded',fix);}var obs=new MutationObserver(fix);obs.observe(document.documentElement,{childList:true,subtree:true});})();
}catch(e){console.error("saga bloque 12",e)}

/* SAGA parche precios tema nov26 */
try{
(function(){var A='95,98,148,151,190,193,145,148,174,177,232,235,153,156,71.25,68.6,111,105.7,142.5,135.1,108.75,103.6,100,120'.split(','),M={},F=function(x){return String(Math.round(x*1e3)).replace(/\B(?=(\d{3})+$)/g,'.')},V=new WeakMap,H=new WeakMap,N=/\$(\s?)(\d+\.\d{3})/g,S=/\$\s?(95|190|145|174|232|71|111|142|108|100)\.[0257]{3}/,P=/El (libro|Álbum) solo, a \$\s?9[58]\.000, no llega por poco\./,Q=/(Sale \$\s?116\.000), así que el envío te queda gratis\./,t;for(var i=0;i<24;i+=2)M[F(A[i])]=F(A[i+1]);function g(e){return/(^|\s)sg[a-z]*-/.test(e.getAttribute('class'))}function r(e){var x;for(;e&&e!=document.body;e=e.parentElement)if(g(e))x=e;return x}function n(R,s){var w=document.createTreeWalker(R,4),x,v;while(x=w.nextNode()){if(H.get(x)===x.nodeValue)continue;v=x.nodeValue.replace(P,function(a,b){return b=='libro'?'El libro con el Pack Embarazo o el Pack de 10 hojas, también.':'El Álbum con un Pack de 10 hojas o fotos impresas, también.'}).replace(Q,'$1.').replace(/\b25% (OFF|off|de descuento)/g,'30% $1');if(s)v=v.replace(N,function(a,p,k){return M[k]?'$'+p+M[k]:a});if(v!=x.nodeValue)x.nodeValue=v;H.set(x,v)}}function c(){try{[].forEach.call(document.querySelectorAll('[class*=sg]'),function(e){if(g(e)&&r(e)==e){var s=V.get(e)||S.test(e.textContent);if(s)V.set(e,1);n(e,s)}})}catch(z){}}function o(){c();new MutationObserver(function(){clearTimeout(t);t=setTimeout(c,60)}).observe(document.body,{childList:1,subtree:1,characterData:1})}document.body?o():addEventListener('DOMContentLoaded',o)})()
}catch(e){console.error("saga bloque 13",e)}

/* SAGA fotolibro: desplegable del menu y portada de la categoria */
try{
(function(){var P='/productos/fotolibro-entelado-1omqd/',IM='//acdn-us.mitiendanube.com/stores/414/455/products/family-album-with-golden-rabbit-3999d31dd6deb594d117952890851157-';
function menu(){var a=[].find.call(document.querySelectorAll('.js-desktop-nav-item>a'),function(x){return/fotolibro/.test(x.pathname)});if(!a)return 0;var li=a.parentElement;if(li.querySelector('.sg-mega'))return 1;li.classList.add('sg-has-mega');var m=document.createElement('div');m.className='sg-mega';m.innerHTML='<div class="sgm-intro">Vos elegís las fotos y nosotros armamos el diseño. Tapa entelada con lo que quieras grabado en dorado.</div><a class="sgm-it" href="'+P+'"><div class="sgm-th"><img src="'+IM+'480-0.webp" alt="" loading="lazy"></div><div><div class="sgm-nm">Fotolibro con grabado</div><div class="sgm-dt">Desde <b>$223.000</b> · 40 a 80 páginas</div></div></a><a class="sgm-pie" href="'+P+'#como-funciona">Ver cómo funciona<span>→</span></a>';li.appendChild(m);m.style.left=Math.round((li.offsetWidth-400)/2)+'px';return 1}
function go(){var n=0,t=setInterval(function(){if(menu()||++n>40)clearInterval(t)},250)}document.readyState=='loading'?document.addEventListener('DOMContentLoaded',go):go()})()
}catch(e){console.error("saga bloque 14",e)}

/* SAGA estilos nov26 */
(function(){var s=document.createElement("style");s.textContent=".js-addtocart.btn-primary:not([disabled]):not(.nostock){background:#7B2D3B!important;border-color:#7B2D3B!important;color:#fff!important}.js-addtocart.btn-primary:not([disabled]):not(.nostock):hover{background:#943648!important;border-color:#943648!important}@media(max-width:767px){.template-product .js-big-search-mobile,.template-product .product-thumbs-container{display:none!important}}";(document.head||document.documentElement).appendChild(s)})();
try{
(function(){var t;function f(){[].forEach.call(document.querySelectorAll('.sgm-dt'),function(d){var b=d.querySelector('b'),p=b&&+b.textContent.replace(/\D/g,''),s=d.querySelector('.sgxf');if(!p)return;if(!s){s=document.createElement('span');s.className='sgxf';s.style.cssText='display:block;color:#3A7D5C;font-size:11px';d.appendChild(s)}var x=(/Desde/.test(d.textContent)?'Desde ':'')+'$'+String(Math.round(p*.7)).replace(/\B(?=(\d{3})+$)/g,'.')+' por transferencia';if(s.textContent!=x)s.textContent=x})}f();new MutationObserver(function(){clearTimeout(t);t=setTimeout(f,120)}).observe(document.body,{childList:1,subtree:1,characterData:1})})()
}catch(e){console.error("saga bloque 15",e)}

/* SAGA ficha disenada: secciones de la descripcion con diseño de categoria */
try{
(function(){function R(){var D=document.querySelector('#single-product .user-content');if(!D||document.getElementById('sgc'))return;var H=[].slice.call(D.querySelectorAll('h3'));if(!H.length)return;
var s=[].find.call(document.scripts,function(x){return x.textContent.indexOf('sgc-hin'+'{')>0});if(!s)return;var t=s.textContent,a=t.indexOf('css.textContent=')+16,h=t.indexOf('appendChild(css)',a),c;try{c=new Function('return ('+t.slice(a,t.lastIndexOf(';',h))+')')()}catch(e){return}
var L=document.createElement('link');L.rel='stylesheet';L.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Outfit:wght@300;400;500&display=swap';document.head.appendChild(L);
c=c.replace(/section\.page-header[^}]*\}/g,'');var st=document.createElement('style');st.textContent=c+'#sgc .sfp-p{max-width:1180px;margin:56px auto;padding:0 24px}#sgc .sfp-p h2{font-family:Cormorant Garamond,serif;font-weight:400;font-size:36px;text-align:center;margin:0 0 28px;color:#2E2B28}.sfp-g{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.sfp-g>div{background:#FBF8F5;border-radius:16px;padding:26px}.sfp-g b{display:block;font-family:Cormorant Garamond,serif;font-size:42px;font-weight:300;color:#7B2D3B;line-height:1}.sfp-g h3{font-family:Outfit,sans-serif;font-size:15px;font-weight:500;margin:12px 0 8px;color:#2E2B28}.sfp-g p{font-family:Outfit,sans-serif;font-size:13.5px;line-height:1.6;color:#4A4540;margin:0}@media(max-width:767px){.sfp-g{grid-template-columns:1fr;gap:14px}#sgc .sfp-p{margin:40px auto}#sgc .sfp-p h2{font-size:30px}}.sfp-m{display:none}@media(max-width:767px){#sgc .sgc-tabla table{display:none}.sfp-m{display:grid;gap:10px}.sfp-m>div{display:grid;gap:3px;border:1px solid #E6E1DB;border-radius:14px;padding:14px 16px;background:#fff;font-family:Outfit,sans-serif;font-size:13.5px;color:#4A4540}.sfp-m b{color:#2E2B28}.sfp-m .sfp-t{color:#7B2D3B;font-weight:600}}';document.head.appendChild(st);
var V=[];try{V=JSON.parse(document.getElementById('single-product').getAttribute('data-variants'))||[]}catch(e){}
function pz(n){var b=null;V.forEach(function(v){var k=[v.option0,v.option1,v.option2].filter(function(z){return/p[aá]gina/i.test(z||'')})[0];if(k&&parseInt(k)==n&&(!b||v.price_number<b.price_number))b=v});return b}
var g='',f='',w='';H.forEach(function(h3,i){var n=[],x=h3.nextElementSibling;while(x&&x.tagName!='H3'){n.push(x);x=x.nextElementSibling}var T=h3.textContent,id=h3.id?' id="'+h3.id+'"':'',tb=n.filter(function(e){return e.tagName=='TABLE'})[0];
if(tb){var R=[].slice.call(tb.rows),r='',hd=[],ml='';R.forEach(function(row,j){var cs=[].slice.call(row.cells);r+='<tr>'+cs.map(function(td,k){if(!j&&k)hd.push(parseInt(td.textContent));return'<td'+(k?(j?'':' class="sgc-cab"'):' class="sgc-lbl"')+'>'+td.textContent+'</td>'}).join('')+'</tr>'});
if(/p[aá]gina/i.test(R[0].cells[0].textContent)&&V.length){var p1='<tr><td class="sgc-lbl">Precio</td>',p2='<tr><td class="sgc-lbl">Por transferencia</td>';hd.forEach(function(q){var v=pz(q);p1+='<td><b>'+(v?v.price_short:'')+'</b><br><small>(hasta 12 cuotas sin interés)</small></td>';p2+='<td><b style="color:#7B2D3B">'+(v?v.price_with_payment_discount_short:'')+'</b></td>'});r+=p1+'</tr>'+p2+'</tr>';hd.forEach(function(q,k){var v=pz(q),fo=R[1]?R[1].cells[k+1].textContent:'';ml+='<div><b>'+q+' páginas</b><span>'+fo+' fotos</span><span><b>'+(v?v.price_short:'')+'</b> · hasta 12 cuotas sin interés</span><span class="sfp-t">'+(v?v.price_with_payment_discount_short:'')+' por transferencia</span></div>'})}
g+='<div class="sgc-tabla"'+id+'><div class="sgc-tin"><h2>'+T+'</h2><table><tbody>'+r+'</tbody></table>'+(ml?'<div class="sfp-m">'+ml+'</div>':'')+'</div></div>';n.forEach(function(e){e.remove()})}
else if(n.length&&n.every(function(e){var b=e.querySelector('strong');return b&&/^\d+\./.test(b.textContent)})){g+='<div class="sfp-p"'+id+'><h2>'+T+'</h2><div class="sfp-g">'+n.map(function(e){var b=e.querySelector('strong'),m=b.textContent.match(/^(\d+)\.\s*(.*?)\.?$/);b.remove();return'<div><b>'+m[1]+'</b><h3>'+m[2]+'</h3><p>'+e.innerHTML.trim()+'</p></div>'}).join('')+'</div></div>';n.forEach(function(e){e.remove()})}
else{var q='';n.forEach(function(e){var b=e.querySelector('strong'),l=e.querySelector('a[href*="wa.me"]');if(l){w='<div class="sgf-wsp"><div class="sgf-wtx"><div class="sgf-wh">¿Tenés alguna duda?</div><div class="sgf-ws">Escribinos y te la resolvemos.</div></div><a class="sgf-wb" href="'+l.href+'" target="_blank" rel="noopener">Escribinos por WhatsApp</a></div>';e.remove()}else if(b&&e.querySelector('br')){var qq=b.textContent;b.remove();q+='<details><summary>'+qq+'</summary><p class="sgf-r">'+e.innerHTML.replace(/^\s*<br>/,'')+'</p></details>';e.remove()}});f+='<h2>'+T+'</h2>'+q}h3.remove()});
var C=D.closest('.container'),o=document.createElement('div');o.id='sgc';o.innerHTML=g;C.parentNode.insertBefore(o,C.nextSibling);if(f||w){var z=document.createElement('div');z.id='sgc-faq';z.innerHTML='<div class="sgf-in">'+w+f+'</div>';o.parentNode.insertBefore(z,o.nextSibling)}}document.readyState=='loading'?addEventListener('DOMContentLoaded',R):R()})()
}catch(e){console.error("saga bloque 16",e)}
window.__sagaRestore&&window.__sagaRestore();
window.__sagaLoaded=true;

/* SAGA ficha Hola Mundo unificada */
try{
/* SAGA ficha Hola Mundo unificada: tarjetas "Elegí tu versión".
   Se activa solo si el producto tiene una opción con los valores de VERS.
   Los precios se leen de data-variants (no hay precios fijos en el código). */
(function(){
var VERS={
 '30 hojas':{n:'Hola Mundo (30 hojas)',s:'El libro con el nombre grabado en la tapa'},
 'FULL':{n:'Hola Mundo FULL (50 hojas)',s:'Incluye Pack Embarazo y 10 hojas lisas',bd:'El más elegido',def:1},
 'FULL + 24 fotos':{n:'Hola Mundo FULL + 24 fotos',s:'Todo lo del FULL, más 24 fotos 10x10 impresas'}
};
var ORDEN=['30 hojas','FULL','FULL + 24 fotos'],ENVIO=120000,TRANSF=0.7;
function money(n){return '$'+Math.round(n).toLocaleString('es-AR')}
function run(){
 var sp=document.getElementById('single-product');if(!sp||document.getElementById('sgv'))return;
 var V;try{V=JSON.parse(sp.getAttribute('data-variants'))}catch(e){return}
 if(!V||!V.length)return;
 var k=-1;for(var i=0;i<3;i++){if(V.some(function(v){return VERS[v['option'+i]]})){k=i;break}}
 if(k<0)return;
 var form=document.getElementById('product_form');if(!form)return;
 var sel=form.querySelector('select[name="variation['+k+']"]');if(!sel)return;
 var css='#sgv{margin:4px 0 18px}#sgv .sgv-t{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7a6d66;margin:0 0 8px}#sgv .sgv-o{position:relative;display:flex;gap:12px;align-items:flex-start;border:1px solid #d9cfc8;border-radius:10px;padding:12px 14px;margin-bottom:8px;background:#fff;cursor:pointer;transition:border-color .15s,box-shadow .15s}#sgv .sgv-o.on{border-color:#7B2D3B;box-shadow:0 0 0 1px #7B2D3B;background:#fdf9f7}#sgv .sgv-r{flex:0 0 18px;height:18px;border-radius:50%;border:1.5px solid #b9aba3;margin-top:2px;position:relative}#sgv .on .sgv-r{border-color:#7B2D3B}#sgv .on .sgv-r:after{content:"";position:absolute;inset:3px;border-radius:50%;background:#7B2D3B}#sgv .sgv-b{flex:1;min-width:0}#sgv .sgv-n{font-size:15px;color:#313131;font-weight:600;line-height:1.25}#sgv .sgv-s{font-size:12.5px;color:#7a6d66;margin-top:2px;line-height:1.35}#sgv .sgv-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}#sgv .sgv-tag{font-size:11px;padding:2px 8px;border-radius:20px;background:#E9DBD2;color:#313131}#sgv .sgv-tag.g{background:#e3efe8;color:#2f6b4c}#sgv .sgv-p{text-align:right;flex:0 0 auto}#sgv .sgv-pr{font-size:15px;color:#313131;font-weight:600;white-space:nowrap}#sgv .sgv-ls{font-size:11.5px;color:#9b8f88;text-decoration:line-through}#sgv .sgv-tr{font-size:12px;color:#3A7D5C;white-space:nowrap;margin-top:2px}#sgv .sgv-bd{display:table;margin:0 0 6px;background:#7B2D3B;color:#fff;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;padding:2px 8px;border-radius:20px}.sgv-hide{display:none!important}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 /* ocultar el selector nativo de Versión (select y botones) */
 var grp=sel.closest('.js-product-variants-group')||sel.closest('.form-group')||sel.parentNode;
 if(grp&&!grp.querySelector('[name^="variation"]:not([name="variation['+k+']"])'))grp.classList.add('sgv-hide');
 var w=document.createElement('div');w.id='sgv';
 var vars=form.querySelector('.js-product-variants');(vars||form.firstChild).parentNode.insertBefore(w,vars||form.firstChild);
 function pick(ver){
  /* variante de esa versión con los demás valores actuales */
  var want={};for(var i=0;i<3;i++){var s=form.querySelector('select[name="variation['+i+']"]');if(s)want[i]=s.value}
  want[k]=ver;
  var m=V.filter(function(v){for(var i in want){if(v['option'+i]!=null&&v['option'+i]!==want[i])return false}return true})[0];
  if(!m)m=V.filter(function(v){return v['option'+k]===ver&&v.available})[0]||V.filter(function(v){return v['option'+k]===ver})[0];
  return m}
 function draw(){
  var on=sel.value;
  w.innerHTML='<div class="sgv-t">Elegí tu versión</div>'+ORDEN.filter(function(o){return V.some(function(v){return v['option'+k]===o})}).map(function(o){
   var c=VERS[o],v=pick(o)||{},p=v.price_number||0,l=v.compare_at_price_number||0,tags=[];
   if(l>p)tags.push('<span class="sgv-tag">Ahorrás '+money(l-p)+'</span>');
   if(p>=ENVIO)tags.push('<span class="sgv-tag g">Envío gratis</span>');
   return '<div class="sgv-o'+(o===on?' on':'')+'" data-v="'+o+'">'+'<span class="sgv-r"></span><div class="sgv-b">'+(c.bd?'<span class="sgv-bd">'+c.bd+'</span>':'')+'<div class="sgv-n">'+c.n+'</div><div class="sgv-s">'+c.s+'</div>'+(tags.length?'<div class="sgv-tags">'+tags.join('')+'</div>':'')+'</div><div class="sgv-p">'+(l>p?'<div class="sgv-ls">'+money(l)+'</div>':'')+'<div class="sgv-pr">'+money(p)+'</div><div class="sgv-tr">'+money(p*TRANSF)+' transf.</div></div></div>'}).join('')}
 function choose(o){
  if(sel.value===o)return;
  var b=form.querySelector('.js-insta-variant[data-option="'+o.replace(/"/g,'\\"')+'"]');
  if(b&&grp&&grp.contains(b)){b.click()}else{sel.value=o;if(window.jQuery)jQuery(sel).trigger('change');else sel.dispatchEvent(new Event('change',{bubbles:true}))}
 }
 w.addEventListener('click',function(e){var o=e.target.closest('.sgv-o');if(o){choose(o.getAttribute('data-v'));setTimeout(draw,50)}});
 form.addEventListener('change',function(){setTimeout(draw,50)});
 /* por defecto, FULL (salvo que el link traiga una variante elegida) */
 if(!/[?&]variant=/.test(location.search)){for(var d in VERS){if(VERS[d].def&&sel.value!==d&&V.some(function(v){return v['option'+k]===d})){choose(d);break}}}
 draw();
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',run):run();
})();
}catch(e){console.error("saga sgv",e)}

/* SAGA links a fichas viejas del Hola Mundo -> ficha unificada */
try{(function(){var N='/productos/combo-hola-mundo-edicion-full-1og7j/',M={'hola-mundo-beige-personalizado':N+'?variant=1646632302','combo-hola-mundo-edicion-full-con-fotos-m46zt':N+'?variant=1646632309'};function fix(r){(r||document).querySelectorAll('a[href*="/productos/"]').forEach(function(a){for(var k in M){if(a.getAttribute('href').indexOf('/productos/'+k)>-1){a.setAttribute('href',M[k]);break}}})}function go(){fix();new MutationObserver(function(m){m.forEach(function(x){x.addedNodes.forEach(function(n){if(n.querySelectorAll)fix(n)})})}).observe(document.body,{childList:true,subtree:true})}document.readyState==='loading'?document.addEventListener('DOMContentLoaded',go):go()})()}catch(e){console.error('saga links',e)}

/* SAGA menu Bebe: Libro Hola Mundo, lona y cuadro */
try{(function(){var C='https://acdn-us.mitiendanube.com/stores/414/455/products/',I=[
{u:'/productos/combo-hola-mundo-edicion-full-1og7j/',n:'Libro Hola Mundo',p:'Desde <b>$98.000</b> \u00b7 30 o 50 hojas',t:'Desde $68.600 por transferencia',keep:1},
{u:'/productos/lona-de-crecimiento-personalizada/',n:'Lona de crecimiento',p:'<b>$70.000</b> \u00b7 con su nombre',t:'$49.000 por transferencia',img:C+'chatgpt-image-sep-30-2026-11_25_16-am-b434ccccf7ff7ed23d17907923313915-240-0.webp'},
{u:'/productos/cuadro-nacimiento-personalizado/',n:'Cuadro de nacimiento',p:'<b>$50.000</b> \u00b7 6 motivos',t:'$35.000 por transferencia',img:C+'2a-02398c9b5b45680b8917926845565721-240-0.webp'}];
function run(){var li=[].slice.call(document.querySelectorAll('.sg-has-mega')).filter(function(l){var a=l.querySelector('a');return a&&/^\s*Beb/.test(a.textContent)})[0];var m=li&&li.querySelector('.sg-mega');if(!m)return false;if(m.getAttribute('data-sgb'))return true;var its=m.querySelectorAll('a.sgm-it');if(!its.length)return false;var keepImg=its[0].querySelector('img');keepImg=keepImg&&(keepImg.getAttribute('src')||'');var pie=m.querySelector('.sgm-pie');[].forEach.call(its,function(a){a.parentNode.removeChild(a)});I.forEach(function(x){var a=document.createElement('a');a.className='sgm-it';a.href=x.u;a.innerHTML='<div class="sgm-th"><img src="'+(x.keep?keepImg:x.img)+'" alt="'+x.n+'" loading="lazy"></div><div><div class="sgm-nm">'+x.n+'</div><div class="sgm-dt">'+x.p+'<span class="sgxf" style="display:block;color:#3A7D5C;font-size:12px">'+x.t+'</span></div></div>';m.insertBefore(a,pie)});m.setAttribute('data-sgb','1');return true}
var n=0,iv=setInterval(function(){if(run()||++n>40)clearInterval(iv)},250)})()}catch(e){console.error('saga menu bebe',e)}

/* SAGA categoria Bebe: sin recuadro de upsell; colores actualizados */
try{(function(){function run(){var ok=false;if(/^\/bebe(\/|$)/.test(location.pathname)){var u=document.querySelector('#sgc .sgc-up');if(u){u.style.display='none';ok=true}}
[].forEach.call(document.querySelectorAll('.sgc-nota2'),function(p){if(p.textContent.indexOf('7 colores de tapa')>-1)p.textContent=p.textContent.replace('7 colores de tapa','4 colores de tapa')});
[].forEach.call(document.querySelectorAll('.sgf-r'),function(p){if(p.textContent.indexOf('hay 7 colores')>-1)p.innerHTML=p.innerHTML.replace(/S\u00ed, hay <b>7 colores<\/b>: beige, verde, violeta, celeste, mostaza, gris y bord\u00f3\./,'S\u00ed, hoy hay <b>4 colores</b>: beige, gris, mostaza y bord\u00f3.')});return ok}
var n=0,iv=setInterval(function(){if(run()||++n>40)clearInterval(iv)},250)})()}catch(e){console.error('saga bebe cat',e)}

/* SAGA ficha Hola Mundo: bloque "Sumale a tu libro" (agregados segun la version) */
try{(function(){
var P={emb:{id:79706593,n:'Pack Embarazo',s:'Hojas para la dulce espera, semana a semana',p:45000},
hoj:{id:61732119,n:'10 hojas lisas',s:'Para intercalar donde quieras',p:34000},
fot:{id:55135863,n:'24 fotos 10x10 impresas',s:'Listas para pegar, papel fotográfico',p:58000}};
var POR={'30 hojas':['emb','hoj','fot'],'FULL':['hoj','fot'],'FULL + 24 fotos':['hoj','fot']};
var TRANSF=0.7;
function money(n){return '$'+Math.round(n).toLocaleString('es-AR')}
function run(){
 var sgv=document.getElementById('sgv'),form=document.getElementById('product_form');
 if(!sgv||!form||document.getElementById('sga'))return !!document.getElementById('sga');
 if(!form.querySelector('.sgg')&&n<30)return false;
 var sp=document.getElementById('single-product'),V;try{V=JSON.parse(sp.getAttribute('data-variants'))}catch(e){return true}
 var sel=form.querySelector('select[name="variation[0]"]');if(!sel)return true;
 var css='body.sg-hm section.sg-combina{display:none!important}#sga{margin:6px 0 18px;border:1px solid #e6ddd6;border-radius:10px;padding:14px;background:#fdfbf9}#sga .sga-t{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7a6d66;margin:0 0 10px}#sga label{display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-top:1px solid #f0e9e4;cursor:pointer;margin:0}#sga label:first-of-type{border-top:0}#sga input{width:18px;height:18px;margin-top:2px;accent-color:#7B2D3B;flex:0 0 18px}#sga .sga-b{flex:1;min-width:0}#sga .sga-n{font-size:14px;color:#313131;font-weight:600}#sga .sga-s{font-size:12px;color:#7a6d66}#sga .sga-p{font-size:14px;color:#313131;font-weight:600;white-space:nowrap}#sga .sga-tip{margin-top:10px;background:#e3efe8;color:#2f6b4c;border-radius:8px;padding:10px 12px;font-size:13px;display:flex;gap:10px;align-items:center;justify-content:space-between}#sga .sga-tip button{background:#2f6b4c;color:#fff;border:0;border-radius:20px;padding:6px 12px;font-size:12px;white-space:nowrap;cursor:pointer}#sga .sga-tot{margin-top:10px;padding-top:10px;border-top:1px solid #e6ddd6;display:flex;justify-content:space-between;align-items:baseline;font-size:14px;color:#313131}#sga .sga-tot b{font-size:16px}#sga .sga-tot span{color:#3A7D5C;font-size:12.5px;display:block;text-align:right}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var box=document.createElement('div');box.id='sga';
 var anchor=form.querySelector('.sgg')||sgv;anchor.parentNode.insertBefore(box,anchor.nextSibling);
 /* sacar el bloque Combina de esta ficha */
 document.body.classList.add('sg-hm');
 var chk={};
 function price(ver){var c=form.querySelector('select[name="variation[1]"]'),cv=c?c.value:null;var m=V.filter(function(v){return v.option0===ver&&(!cv||v.option1===cv)})[0]||V.filter(function(v){return v.option0===ver})[0];return m?m.price_number:0}
 function draw(){
  var ver=sel.value,list=POR[ver]||[],base=price(ver);
  Object.keys(chk).forEach(function(k){if(list.indexOf(k)<0)delete chk[k]});
  var add=0;list.forEach(function(k){if(chk[k])add+=P[k].p});
  var qb=form.querySelector('button.btn-primary.btn-big');if(qb)qb.style.display=add?'none':'';
  var tip='';
  if(ver==='30 hojas'&&chk.emb&&chk.hoj){var d=base+P.emb.p+P.hoj.p-price('FULL');if(d>0)tip='Con el FULL te sale '+money(d)+' menos, con lo mismo.<button type="button" data-go="FULL" data-off="emb,hoj">Cambiar al FULL</button>'}
  if(ver==='FULL'&&chk.fot){var d2=base+P.fot.p-price('FULL + 24 fotos');if(d2>0)tip='Con FULL + 24 fotos ahorrás '+money(d2)+'.<button type="button" data-go="FULL + 24 fotos" data-off="fot">Cambiar</button>'}
  box.innerHTML='<div class="sga-t">Sumale a tu libro</div>'+list.map(function(k){var x=P[k],nm=(k==='fot'&&ver==='FULL + 24 fotos')?'24 fotos 10x10 más':x.n;return '<label><input type="checkbox" data-k="'+k+'"'+(chk[k]?' checked':'')+'><span class="sga-b"><span class="sga-n">'+nm+'</span><br><span class="sga-s">'+x.s+'</span></span><span class="sga-p">+'+money(x.p)+'</span></label>'}).join('')+(tip?'<div class="sga-tip"><span>'+tip.replace(/<button[\s\S]*$/,'')+'</span>'+tip.slice(tip.indexOf('<button'))+'</div>':'')+(add?'<div class="sga-tot"><span style="color:#313131;font-size:14px;text-align:left">Total con agregados</span><div><b>'+money(base+add)+'</b><span>'+money((base+add)*TRANSF)+' por transferencia</span></div></div>':'');
 }
 box.addEventListener('change',function(e){var k=e.target.getAttribute('data-k');if(k){chk[k]=e.target.checked;draw()}});
 box.addEventListener('click',function(e){var b=e.target.closest('button[data-go]');if(!b)return;(b.getAttribute('data-off')||'').split(',').forEach(function(k){delete chk[k]});var c=document.querySelector('#sgv .sgv-o[data-v="'+b.getAttribute('data-go')+'"]');if(c)c.click();setTimeout(draw,120)});
 form.addEventListener('change',function(){setTimeout(draw,80)});
 sgv.addEventListener('click',function(){setTimeout(draw,120)});
 /* al agregar al carrito, sumar los agregados marcados */
 var busy=false;
 document.addEventListener('click',function(e){
  var b=e.target.closest('.js-addtocart');if(!b||busy||b.getAttribute('data-sga-pass'))return;
  var ks=Object.keys(chk).filter(function(k){return chk[k]});if(!ks.length)return;
  var g=form.querySelector('[name="properties[Grabado personalizado]"]');if(g&&!g.value.trim())return;
  e.preventDefault();e.stopImmediatePropagation();busy=true;
  var url=form.getAttribute('action');
  ks.reduce(function(pr,k){return pr.then(function(){var fd=new FormData();fd.append('add_to_cart',P[k].id);fd.append('quantity','1');return fetch(url,{method:'POST',body:fd,credentials:'same-origin'})})},Promise.resolve())
  .then(function(){},function(err){console.error('saga agregados',err)})
  .then(function(){busy=false;b.setAttribute('data-sga-pass','1');b.click();setTimeout(function(){b.removeAttribute('data-sga-pass')},500);chk={};setTimeout(draw,300)});
 },true);
 draw();return true;
}
var n=0,iv=setInterval(function(){if(run()||++n>40)clearInterval(iv)},250);
})()}catch(e){console.error('saga agregados',e)}
