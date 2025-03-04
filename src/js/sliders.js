import Swiper from './libs/swiper';

const swiperCubeSlider = new Swiper('.cube-slider', {
  effect: 'cube',
  grabCursor: true,
  loop: true,
  direction: 'vertical',
  speed: 3600,
  //   centeredSlides: true,

  cubeEffect: {
    shadow: true,
    slideShadows: false,
    shadowOffset: 40,
    shadowScale: 1,
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicMainBullets: 4,
    currentClass: '.active',
    totalClass: '.swiper-pagination-total',
  },

  on: {
    init: function () {},
    slideChange: function () {
      const swiper = this;
      const currentSlide = document.querySelector('.swiper-pagination-total');
      const slideNumber = (swiper.realIndex + 1).toString().padStart(2, '0');
      if (currentSlide) {
        currentSlide.textContent = slideNumber;
      }
    },
  },
});

const swiperReviews = new Swiper('.swiper-reviews', {
  effect: 'slide',
  speed: 500,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  //   slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
  },
  navigation: {
    nextEl: '.btn_nav_slide_next',
    prevEl: '.btn_nav_slide_prev',
  },
});

const swiperLicenses = new Swiper('.swiper-licenses', {
  effect: 'slide',
  speed: 500,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  //   slidesPerGroup: 1,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
  navigation: {
    nextEl: '.btn_nav_slide_next',
    prevEl: '.btn_nav_slide_prev',
  },
});
