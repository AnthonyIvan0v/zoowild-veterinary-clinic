import { refs } from './refs';

refs.openBlockInfoCeoBtn.addEventListener('click', toggle);

function toggle() {
    refs.blockInfoCEO.classList.toggle('is-hidden');
    refs.iconPlus.classList.toggle('is-hidden');
    refs.iconMinus.classList.toggle('is-hidden');
}
