// categories swiper 
const swiper = new Swiper('.swiper-categories', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  })
  
  // categories swiper 
  