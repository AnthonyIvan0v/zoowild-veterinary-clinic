import { refs } from './refs';

refs.openModalContactsBtn.addEventListener('click', toggleModal);
refs.closeModalContactsBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modalContacts.classList.toggle('is-show-block-cntacts');
}
