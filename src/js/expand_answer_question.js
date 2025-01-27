(() => {
    const refs = {
        listBtnExpand: document.querySelectorAll('[data-btn-expand]'),
        itemList: document.querySelectorAll('.item_list_job_vacancy'),
        iconPlus: document.querySelectorAll('.icon_plus_btn_expand'),
        iconMinus: document.querySelectorAll('.icon_minus_btn_expand'),
        textAnswer: document.querySelectorAll('.text_answer_question'),
    };

    refs.listBtnExpand.forEach((elem, index) => elem.setAttribute('id', index));

    refs.listBtnExpand.forEach((elem, index) =>
        elem.addEventListener('click', () => expandItem(index))
    );

    function expandItem(id) {
        refs.iconPlus[id].classList.toggle('is-hidden-plus');
        refs.iconMinus[id].classList.toggle('is-show-minus');
        refs.textAnswer[id].classList.toggle('text_show');
    }
})();
