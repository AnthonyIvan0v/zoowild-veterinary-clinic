import Swiper from 'swiper/swiper-bundle.min.mjs';

const cubeSlider = new Swiper('.cube-slider', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    direction: 'vertical',
    speed: 3600,
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
            const currentSlide = document.querySelector(
                '.swiper-pagination-total'
            );
            const slideNumber = (swiper.realIndex + 1)
                .toString()
                .padStart(2, '0');
            if (currentSlide) {
                currentSlide.textContent = slideNumber;
            }
        },
    },
});
