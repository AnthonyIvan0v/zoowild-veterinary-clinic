import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Flip from 'gsap/Flip';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.titleAbout', {
    scrollTrigger: '.titleAbout', // start animation when ".box" enters the viewport
    x: 0,
});
// import anime from 'animejs/lib/anime.es.js';

// anime({
//     targets: '.css-selector-demo',
//     translateX: 250,
//     easing: 'easeInOutQuad',
// });
