import { refs } from './refs';

refs.links.forEach(element => element.addEventListener('click', toggleModal));
refs.openMenuBtn.addEventListener('click', toggleModal);
refs.closeMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.menu.classList.toggle('allow-scroll');
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('not-scroll');
}
