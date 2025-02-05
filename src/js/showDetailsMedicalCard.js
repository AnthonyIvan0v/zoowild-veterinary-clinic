(() => {
    const refs = {
        toggleBtnShowDetailsMedicalCard: document.querySelectorAll(
            '[data-btn-show-medical-card]'
        ),
        medicalCard: document.querySelectorAll('[data-medical-card]'),
        detailsMedicalCard: document.querySelectorAll(
            '[data-details-medical-card]'
        ),
    };

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
})();
