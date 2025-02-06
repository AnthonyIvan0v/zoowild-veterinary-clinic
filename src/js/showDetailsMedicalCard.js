(() => {
    const refs = {
        toggleBtnShowDetailsMedicalCard: document.querySelectorAll(
            '[data-btn-show-medical-card]'
        ),
        medicalCard: document.querySelectorAll('[data-medical-card]'),
        detailsMedicalCard: document.querySelectorAll(
            '[data-details-medical-card]'
        ),
        textDescrDetailsMedicalCard: document.querySelectorAll(
            '[data-text-descr-details]'
        ),
        toggleBtnShowTextDescrDetailsMedicalCard:
            document.querySelectorAll('[data-show-text]'),
    };

    refs.textDescrDetailsMedicalCard.forEach((elem, index) =>
        elem.setAttribute('id', index)
    );
    refs.toggleBtnShowTextDescrDetailsMedicalCard.forEach((elem, index) =>
        elem.setAttribute('id', index)
    );
    refs.toggleBtnShowTextDescrDetailsMedicalCard.forEach((elem, index) =>
        elem.addEventListener('click', () => toggleShowText(index))
    );

    refs.medicalCard.forEach((elem, index) => elem.setAttribute('id', index));
    refs.toggleBtnShowDetailsMedicalCard.forEach((elem, index) =>
        elem.setAttribute('id', index)
    );

    refs.toggleBtnShowDetailsMedicalCard.forEach((elem, index) =>
        elem.addEventListener('click', () => toggleClassOnElement(index))
    );

    function toggleClassOnElement(id) {
        const medicalCardArray = Array.from(refs.medicalCard);
        medicalCardArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('visible_details_medical_card');
            } else {
                elem.classList.remove('visible_details_medical_card');
            }
        });

        const detailsMedicalCardArray = Array.from(refs.detailsMedicalCard);
        detailsMedicalCardArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('show_details');
            } else {
                elem.classList.remove('show_details');
            }
        });

        const toggleBtnShowDetailsMedicalCardArray = Array.from(
            refs.toggleBtnShowDetailsMedicalCard
        );
        toggleBtnShowDetailsMedicalCardArray.forEach((elem, index) => {
            if (index === id) {
                elem.classList.toggle('rotate_btn_show_descr');
            } else {
                elem.classList.remove('rotate_btn_show_descr');
            }
        });
    }

    function toggleShowText(id) {
        refs.textDescrDetailsMedicalCard[id].classList.toggle(
            'show_text_descr_details'
        );
        if (
            refs.toggleBtnShowTextDescrDetailsMedicalCard[
                id
            ].textContent.includes('Читати')
        ) {
            refs.toggleBtnShowTextDescrDetailsMedicalCard[id].textContent =
                'Приховати';
        } else {
            refs.toggleBtnShowTextDescrDetailsMedicalCard[id].textContent =
                'Читати більше';
        }
    }
})();
