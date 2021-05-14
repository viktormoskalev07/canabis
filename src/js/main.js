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
    body.style.overflow = "hidden";
}

function showscroll() {
    body.style.paddingRight = 0;
    body.style.overflow = "visible"
}

let scrolid = 0;

function togglescroll() {
    if (scrolid == 0) {
        body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
        body.style.overflow = "hidden";
        scrolid = 1;
    } else {
        body.style.paddingRight = 0;
        body.style.overflow = "visible"
        scrolid = 0;
    }
}

// отключить прокрутку

//dropdown

function dropdown() {
    const drop = document.querySelector('.dropdown__activator');
    drop.addEventListener('click', function () {
        drop.classList.toggle("dropdown_open");
    })

}

try {
    dropdown()
} catch (e) {
    console.log(e)
}
//dropdown


// categories swiper
const swiper = new Swiper('.swiper-categories', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 40
        }
    }
})

// categories swiper 


const swiperRev = new Swiper('.swiper-rev__container', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 'auto',
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.swiper-rev__next',
        prevEl: '.swiper-rev__prev',
    },
})

// accordion

window.addEventListener('load', function () {
    const accordion = document.querySelector('.accordion');
    const items = accordion.querySelectorAll('.accordion__item');

    items.forEach((item) => {
        const title = item.querySelector('.accordion__title');

        title.addEventListener('click', (e) => {
            const opened_item = accordion.querySelector('.is-open');

            toggle_item(item);

            if (opened_item && opened_item !== item) {
                toggle_item(opened_item);
            }

        });
    });

    const toggle_item = (item) => {
        const body = item.querySelector('.accordion__body');
        const content = item.querySelector('.accordion__content');

        if (item.classList.contains('is-open')) {
            body.removeAttribute('style');
            item.classList.remove('is-open');
        } else {
            body.style.height = body.scrollHeight + 'px';
            item.classList.add('is-open');
        }
    }

});
// accordion