import { refs } from './refs';

refs.itemsScrolltoSectionAbout.forEach((elem) =>
  elem.addEventListener('click', onToSectionAboutBtn)
);

function onToSectionAboutBtn() {
  refs.sectionAbout.scrollIntoView({ behavior: 'smooth' });
}
