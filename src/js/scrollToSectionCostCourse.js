import { refs } from './refs';

if (refs.itemScrollToSectionPriceCourse) {
  refs.itemScrollToSectionPriceCourse.addEventListener('click', onToCardsCostCourse)
}

  
  function onToCardsCostCourse() {
    refs.cardsCostCourse.scrollIntoView({ behavior: 'smooth' });
  }