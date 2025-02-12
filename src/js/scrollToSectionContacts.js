import { refs } from './refs';

refs.itemsScrollToSectionContacts.forEach(elem =>
    elem.addEventListener('click', onToSectionContacts)
);

function onToSectionContacts() {
    refs.sectionContacts.scrollIntoView({ behavior: 'smooth' });
}
