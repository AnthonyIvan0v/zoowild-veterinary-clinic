import { throttle } from './libs/throttle_debounce';
import { refs } from './refs';

window.addEventListener('scroll', throttle(250, onScroll));

refs.toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = window.innerHeight / 3;

  if (scrolled > coords) {
    refs.toTopBtn.classList.add('visible');
  }
  if (scrolled <= coords && refs.toTopBtn) {
    refs.toTopBtn.classList.remove('visible');
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
