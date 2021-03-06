body = document.querySelector("body");
html = document.querySelector("html");
header = document.querySelector("header");
btnMenu = document.querySelector(".btn-menu");

// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click", togglenav);

function closenav() {
  nav.classList.remove("nav-open");
  // btnMenu.style.marginRight="0";
  showscroll();
}

function togglenav() {
  nav.classList.toggle("nav-open");
  if (nav.classList.contains("nav-open")) {
    // btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
    hidescroll();
  } else {
    showscroll();
    // btnMenu.style.marginRight="0";
  }
}

// мобильное меню

// отключить прокрутку
function hidescroll() {
  body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
  body.classList.add('overflov-nav')
}

function showscroll() {
  body.style.paddingRight = 0;
  body.classList.remove('overflov-nav')
}

let scrolid = 0;

function togglescroll() {
  if (scrolid == 0) {
    body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
    body.classList.add('overflov-nav')
    scrolid = 1;
  } else {
    body.style.paddingRight = 0;
    body.classList.remove('overflov-nav')
    scrolid = 0;
  }
}

// отключить прокрутку

//dropdown

function dropdown() {
  const drop = document.querySelector(".dropdown__activator");
  drop.addEventListener("click", function () {
    drop.classList.toggle("dropdown_open");
  });
}

try {
  dropdown();
} catch (e) {
  console.log(e);
}
//dropdown

// categories swiper
const swiper = new Swiper(".swiper-categories", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

// categories swiper

const swiperRev = new Swiper(".swiper-rev__container", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-rev__next",
    prevEl: ".swiper-rev__prev",
  },
});

// accordion

function accordionInit () {
	window.addEventListener("load", function () {
		const accordion = document.querySelector(".accordion");
		const items = accordion.querySelectorAll(".accordion__item");
	
		items.forEach((item) => {
			const title = item.querySelector(".accordion__title");
	
			title.addEventListener("click", (e) => {
				const opened_item = accordion.querySelector(".is-open");
	
				toggle_item(item);
	
				if (opened_item && opened_item !== item) {
					toggle_item(opened_item);
				}
			});
		});
	
		const toggle_item = (item) => {
			const body = item.querySelector(".accordion__body");
			const content = item.querySelector(".accordion__content");
	
			if (item.classList.contains("is-open")) {
				body.removeAttribute("style");
				item.classList.remove("is-open");
			} else {
				body.style.height = body.scrollHeight + "px";
				item.classList.add("is-open");
			}
		};
	});
}

if (document.querySelector('.accordion')) {
	accordionInit()
}
// accordion


//popup
const popupAge =document.querySelector('.popup-age');
if(!localStorage.getItem('age')){
  document.body.classList.add('bloked-by-popup-age');
  popupAge.style.display="flex";
} else {
  document.body.classList.remove('bloked-by-popup-age');
}
const popupAgeText =document.querySelector('.popup-age__text');
document.querySelector('.button-age__yes-js').addEventListener('click' , closePopupAge);
document.querySelector('.button-age__no-js').addEventListener('click' , noPopupAge);
function closePopupAge(){
  localStorage.setItem('age', 'true');
  popupAge.style.display='none';
  document.body.classList.remove('bloked-by-popup-age');
}
function noPopupAge(){
  popupAgeText.innerHTML="Sorry, come back when you're 19."
  document.querySelector('.buttons-age-js').innerHTML="";
}
//popup