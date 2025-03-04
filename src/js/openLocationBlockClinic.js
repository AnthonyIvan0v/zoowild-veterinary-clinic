import { refs } from './refs';

refs.openLocationBlockBtn.addEventListener('click', toggleModal);
refs.closeLocationBlockBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.locationBlock.classList.toggle('is-show-block-location');
}
