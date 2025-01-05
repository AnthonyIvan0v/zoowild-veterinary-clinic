import Swiper from 'swiper/swiper-bundle.min.mjs';

const cubeSlider = new Swiper('.cube-slider', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    direction: 'vertical',
    speed: 2800,
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
        clickable: true,
        dynamicMainBullets: 4,
    },
});

// const initializeSwiper = () => {
//     const swiper = new Swiper('.mySwiper', {

//         autoplay: true, // Отключаем автоплей изначально
//         navigation: {
//             nextEl: '.btnY',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             init: function () {},
//             slideChange: function () {
//                 const swiper = this;
//                 const currentSlide = document.querySelector('.count');
//                 const slideNumber = (swiper.realIndex + 1)
//                     .toString()
//                     .padStart(2, '0');
//                 if (currentSlide) {
//                     currentSlide.textContent = slideNumber;
//                 }
//             },
//             autoplayStart: function () {},
//             autoplayStop: function () {},
//         },
//     });

//     // Запускаем автоплей через 10 секунд
//     setTimeout(() => {
//         swiper.params.autoplay = {
//             delay: 500, // Устанавливаем задержку между сменой слайдов
//             disableOnInteraction: false,
//         };
//         swiper.autoplay.start(); // Запускаем автоплей
//     }, 1000);

//     const slideNumber = 3;
//     const nextButtons = document.querySelectorAll('.moreBtn');
//     nextButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             swiper.slideTo(slideNumber);
//         });
//     });
//     return swiper;
// };

// initializeSwiper();
