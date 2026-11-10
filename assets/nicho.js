(function(){
  var b=document.getElementById("burger"),m=document.getElementById("mnav");
  if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",String(o));b.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú")});}
  var h=document.querySelector(".hero");
  if(h&&"IntersectionObserver" in window){new IntersectionObserver(function(es){es.forEach(function(e){document.body.classList.toggle("hero-in",e.isIntersecting)})},{rootMargin:"0px 0px -15% 0px"}).observe(h);}
  var c=document.getElementById("chat");if(c)c.classList.add("play");
})();
