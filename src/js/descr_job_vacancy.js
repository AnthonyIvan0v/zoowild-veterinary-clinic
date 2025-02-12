import { refs } from './refs';

refs.listBtnToggleShowDescr.forEach((elem, index) =>
    elem.setAttribute('data-id', index)
);
refs.listBtnToggleShowDescr.forEach((elem, index) =>
    elem.addEventListener('click', () => toggleClassOnItemVacancy(index))
);

function toggleClassOnItemVacancy(index_elem) {
    const iconPlusArray = Array.from(refs.iconPlusBlockVacancy);
    iconPlusArray.forEach((elem, index) => {
        if (index === index_elem) {
            elem.classList.toggle('is-scale');
        } else {
            elem.classList.remove('is-scale');
        }
    });

    const iconMinusArray = Array.from(refs.iconMinusBlockVacancy);
    iconMinusArray.forEach((elem, index) => {
        if (index === index_elem) {
            elem.classList.toggle('is-show');
        } else {
            elem.classList.remove('is-show');
        }
    });

    const itemslistJobVacancyArray = Array.from(refs.itemslistJobVacancy);
    itemslistJobVacancyArray.forEach((elem, index) => {
        if (index === index_elem) {
            elem.classList.toggle('active_item_list_job_vacancy');
        } else {
            elem.classList.remove('active_item_list_job_vacancy');
        }
    });

    const itemsVacancyDescrArray = Array.from(refs.itemsVacancyDescr);
    itemsVacancyDescrArray.forEach((elem, index) => {
        if (index === index_elem) {
            elem.classList.toggle('show_vacancy_descr_wrapper');
        } else {
            elem.classList.remove('show_vacancy_descr_wrapper');
        }
    });
}
