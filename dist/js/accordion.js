window.addEventListener("load",(function(){const t=document.getElementsByClassName("accordion");let e;if(!t)return null;for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");const t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))}));