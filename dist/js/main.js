function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),window.onload=function(){pagescroll()},nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav);let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){header.classList.add("fixed-header");let e=0;window.addEventListener("scroll",(function(){e<pageYOffset&pageYOffset>header.offsetHeight?header.style.transform="translateY(-100%)":header.style.transform="none",e=pageYOffset}))}let form=document.querySelectorAll(".order-form");const modal=document.getElementById("modal");function ajaxform(e){gtag("event","submit",{event_category:"Form"}),e.preventDefault();let t=this.querySelector(".formstatus");t.innerHTML='<class="load-form">Соедиенеие ...';let n={desc:this.querySelector('input[name="description"]').value,name:this.querySelector('input[name="name"]').value,phone:this.querySelector('input[name="phone"]').value};console.log(n);let o=new XMLHttpRequest;o.addEventListener("load",(function(){t.innerHTML="Ваша заявка успешно отправлена, ожидайте звонка"})),o.open("POST","/mail.php",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.send("name="+encodeURIComponent(n.name)+"&phone="+encodeURIComponent(n.phone)+"&desc="+encodeURIComponent(n.desc))}for(i=0;i<form.length;i++)form[i].addEventListener("submit",ajaxform);function popup2(e){console.log(document.querySelector(".input-description")),document.querySelector(".input-description").value="Пакет все включено Программа "+e,document.getElementById("overlay2").style.display="block"}function dropdown(){const e=document.querySelector(".dropdown__activator");e.addEventListener("click",(function(){e.classList.toggle("dropdown_open")}))}try{dropdown()}catch(e){console.log(e)}const swiper=new Swiper(".swiper-categories",{slidesPerView:1,spaceBetween:10,breakpoints:{320:{slidesPerView:1,spaceBetween:20},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:6,spaceBetween:40}}}),swiperRev=new Swiper(".swiper-rev__container",{slidesPerView:"auto",spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:"auto",spaceBetween:30}},navigation:{nextEl:".swiper-rev__next",prevEl:".swiper-rev__prev"}});