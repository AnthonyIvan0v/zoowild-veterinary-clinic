(() => {
    const refs = {
        listJobVacancy: document.querySelector('[data-list-job-vacancy]'),
        listBtnToggleShowDescr: document.querySelectorAll('[data-show-descr]'),
        itemList: document.querySelectorAll('.item_list_job_vacancy'),
        iconMinus: document.querySelectorAll('.icon_minus_btn_view_job'),
        iconPlus: document.querySelectorAll('.icon_plus_btn_view_job'),
    };

    refs.listBtnToggleShowDescr.forEach((elem, index) =>
        elem.setAttribute('id', index)
    );
    // refs.listJobVacancy.addEventListener('click', showList);

    refs.listBtnToggleShowDescr.forEach((elem, index) =>
        elem.addEventListener('click', () => changeIconBtn(index))
    );

    function changeIconBtn(id) {
        refs.iconPlus[id].classList.toggle('is-scale');
        refs.iconMinus[id].classList.toggle('is-show');
        refs.itemList[id].classList.toggle('show_list');
    }
})();
