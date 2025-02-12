import { refs } from './refs';
refs.openSocialListBtn.addEventListener('click', toggleModal);
refs.closeSocialListBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.socialList.classList.toggle('is-show-social-list');
    refs.openSocialListBtn.classList.toggle('is-hidden');
}
