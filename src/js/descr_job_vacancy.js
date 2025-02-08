(() => {
    const refs = {
        itemslistJobVacancy: document.querySelectorAll(
            '[data-item-list-job-vacancy]'
        ),
        listBtnToggleShowDescr: document.querySelectorAll('[data-show-descr]'),
        itemsVacancyDescr: document.querySelectorAll('[data-vacancy-descr]'),
        iconMinus: document.querySelectorAll('.icon_minus_btn_view_job'),
        iconPlus: document.querySelectorAll('.icon_plus_btn_view_job'),
    };

    refs.listBtnToggleShowDescr.forEach((elem, index) =>
        elem.setAttribute('id', index)
    );
    refs.listBtnToggleShowDescr.forEach((elem, index) =>
        elem.addEventListener('click', () => toggleClassOnItemVacancy(index))
    );

    function toggleClassOnItemVacancy(id) {
        const iconPlusArray = Array.from(refs.iconPlus);
        iconPlusArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('is-scale');
            } else {
                elem.classList.remove('is-scale');
            }
        });

        const iconMinusArray = Array.from(refs.iconMinus);
        iconMinusArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('is-show');
            } else {
                elem.classList.remove('is-show');
            }
        });

        const itemslistJobVacancyArray = Array.from(refs.itemslistJobVacancy);
        itemslistJobVacancyArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('active_item_list_job_vacancy');
            } else {
                elem.classList.remove('active_item_list_job_vacancy');
            }
        });

        const itemsVacancyDescrArray = Array.from(refs.itemsVacancyDescr);
        itemsVacancyDescrArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('show_vacancy_descr_wrapper');
            } else {
                elem.classList.remove('show_vacancy_descr_wrapper');
            }
        });
    }
})();
