function closenav(){nav.classList.remove("nav-open"),showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?hidescroll():showscroll()}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav);let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function dropdown(){const e=document.querySelector(".dropdown__activator");e.addEventListener("click",(function(){e.classList.toggle("dropdown_open")}))}try{dropdown()}catch(e){console.log(e)}const swiper=new Swiper(".swiper-categories",{slidesPerView:1,spaceBetween:10,breakpoints:{320:{slidesPerView:1,spaceBetween:20},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:6,spaceBetween:40}}}),swiperRev=new Swiper(".swiper-rev__container",{slidesPerView:"auto",grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:"auto",spaceBetween:30}},navigation:{nextEl:".swiper-rev__next",prevEl:".swiper-rev__prev"}});window.addEventListener("load",(function(){const e=document.getElementsByClassName("accordion");let t;if(!e)return null;for(t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");const e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}));