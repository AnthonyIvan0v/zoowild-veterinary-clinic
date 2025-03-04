import { refs } from './refs';

if (refs.openSocialListBtn) {
  refs.openSocialListBtn.addEventListener('click', toggleModal);
}

if (refs.closeSocialListBtn) {
  refs.closeSocialListBtn.addEventListener('click', toggleModal);
}

function toggleModal() {
  refs.socialList.classList.toggle('is-show-social-list');
  refs.openSocialListBtn.classList.toggle('is-hidden');
}
