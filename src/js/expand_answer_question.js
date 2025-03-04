import { refs } from './refs';

refs.listBtnExpand.forEach((elem, index) =>
  elem.setAttribute('data-id', index)
);

refs.listBtnExpand.forEach((elem, index) =>
  elem.addEventListener('click', () => expandItem(index))
);

function expandItem(id) {
  refs.iconPlusBlockQuestion[id].classList.toggle('is-hidden-plus');
  refs.iconMinusBlockQuestion[id].classList.toggle('is-show-minus');
  refs.textAnswer[id].classList.toggle('text_show');
}
