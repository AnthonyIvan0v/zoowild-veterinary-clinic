import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-reviews', {
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
