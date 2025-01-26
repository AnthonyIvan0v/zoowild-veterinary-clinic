import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-licenses', {
    effect: 'slide',
    speed: 500,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    slidesPerGroup: 1,
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
