(() => {
    const refs = {
        openModalFormBTN: document.querySelectorAll('[data-open-modal-form]'),
        closeModalFormBTN: document.querySelector('[data-close-modal-form]'),
        closePostModalFormBTN: document.querySelector(
            '[data-close-post-modal-form]'
        ),
        modalForm: document.querySelector('[data-modal-form]'),
        postModalForm: document.querySelector('[data-modal-post-form]'),
        form: document.querySelector('[data-form]'),
        secondaryBackdrop: document.querySelector('.backdrop_secondary'),
        linkBack: document.querySelector('.link_back'),
    };

    refs.openModalFormBTN.forEach(elem =>
        elem.addEventListener('click', toggleModal)
    );
    refs.closeModalFormBTN.addEventListener('click', toggleModal);

    refs.linkBack.addEventListener('click', togglePostModalForm);
    refs.closePostModalFormBTN.addEventListener('click', togglePostModalForm);

    refs.form.addEventListener('submit', checkForm);

    function checkForm(event) {
        event.preventDefault();
        const form = event.target;
        const formElements = event.target.elements;
        const name = formElements.name.value;
        const email = formElements.email.value;
        const phone = formElements.phoneNumber.value;
        const agreePrivacyPolicy = formElements.confirm.value;
        if (
            name === '' ||
            email === '' ||
            phone === '' ||
            agreePrivacyPolicy === ''
        ) {
            return alert('Будь ласка, заповніть всі поля форми');
        }
        refs.modalForm.classList.toggle('is-hidden');
        refs.postModalForm.classList.toggle('is-hidden');
        form.reset();
    }

    function toggleModal() {
        refs.secondaryBackdrop.classList.toggle('is-hidden');
        refs.modalForm.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }

    function togglePostModalForm() {
        refs.secondaryBackdrop.classList.toggle('is-hidden');
        refs.postModalForm.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }
})();
