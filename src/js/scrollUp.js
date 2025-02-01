// import { getRefs } from './refs';
import { throttle } from 'throttle-debounce';
const toTopBtn = document.querySelector('.btn-to-top');
// const refs = getRefs();

// export function scrollCloseModal() {
//     const scrolled = window.pageYOffset;
//     const coords = window.innerHeight / 3;
//     if (scrolled > coords) {
//         refs.toTopBtn.classList.add('btn-to-top--visible');
//     }
// }

// export function scrollOpenModal() {
//     refs.toTopBtn.classList.remove('btn-to-top--visible');
// }

window.addEventListener('scroll', throttle(250, onScroll));
toTopBtn.addEventListener('click', onToTopBtn);

// function onScroll() {
//     setThemOnButtonToTop();
//     const scrolled = window.pageYOffset;
//     const coords = window.innerHeight / 3;
//     if (scrolled > coords) {
//         refs.toTopBtn.classList.add('btn-to-top--visible');
//     }
//     if (scrolled <= coords && refs.toTopBtn) {
//         refs.toTopBtn.classList.remove('btn-to-top--visible');
//     }
// }

function onScroll() {
    const scrolled = window.pageYOffset;
    console.log(scrolled);
    // const scrolled = window.scrollY;
    const coords = window.innerHeight / 3;
    console.log(coords);
    if (scrolled > coords) {
        toTopBtn.classList.add('visible');
    }
    if (scrolled <= coords && toTopBtn) {
        toTopBtn.classList.remove('visible');
    }
}

function onToTopBtn() {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top,
            behavior: 'smooth',
        });
    }
}

// function setThemOnButtonToTop() {
//     if (refs.iconSun.classList.contains('hidden-icon')) {
//         refs.toTopBtn.classList.remove('btn-to-top--dark');
//     } else {
//         refs.toTopBtn.classList.add('btn-to-top--dark');
//     }
// }

onScroll();
onToTopBtn();

///////////////////////////

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//     ) {
//         document.querySelector('.toTopBtn').style.display = 'block';
//     } else {
//         document.querySelector('.toTopBtn').style.display = 'none';
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// const buttonScrollUp = document.querySelector('.button-scroll-up');
// buttonScrollUp.addEventListener('click', topFunction);
