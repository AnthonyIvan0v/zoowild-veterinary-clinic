import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-licenses', {
    // spaceBetween: 100,
    // effect: 'slide',
    speed: 500,
    // effect: 'freeMode',
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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
});
// swiper.init();
// const swiper1 = document.querySelector('.creative-effect').swiper;
// // swiper1.init();

// const swiper2 = new Swiper('.creative-effect', {
//     loop: true,
//     effect: 'coverflow',
//     speed: 2000,
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1,
//             // spaceBetween: 20
//         },
//         // when window width is >= 768px
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 14,
//         },
//         // when window width is >= 1200px
//         1200: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         // when window width is >= 1440px
//         1440: {
//             slidesPerView: 3,
//             spaceBetween: 18,
//         },
//     },
//     coverflowEffect: {
//         rotate: 50,
//         slideShadows: false,
//         depth: 100,
//         scale: 1,
//     },
//     // pagination: {
//     //     el: '.pagin-btn-group',
//     //     clickable: true,
//     // },
//     // Navigation arrows
//     // navigation: {
//     //     prevEl: '.swiper-button-prev',
//     //     nextEl: '.swiper-button-next',
//     // },
// });
