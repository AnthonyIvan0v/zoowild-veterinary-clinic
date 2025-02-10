(() => {
    const refs = {
        // openModalFormBTN: document.querySelectorAll('[data-open-modal-form]'),
        // closeModalFormBTN: document.querySelector('[data-close-modal-form]'),
        // closePostModalFormBTN: document.querySelector(
        //     '[data-close-post-modal-form]'
        // ),
        formFooter: document.querySelector('[data-form-footer]'),
        postModalForm: document.querySelector('[data-modal-post-form]'),
        // form: document.querySelector('[data-form]'),
        secondaryBackdrop: document.querySelector('.backdrop_secondary'),
        // linkBack: document.querySelector('.link_back'),
    };

    // refs.openModalFormBTN.forEach(elem =>
    //     elem.addEventListener('click', toggleModal)
    // );
    // refs.closeModalFormBTN.addEventListener('click', toggleModal);

    // refs.linkBack.addEventListener('click', togglePostModalForm);
    // refs.closePostModalFormBTN.addEventListener('click', togglePostModalForm);

    refs.formFooter.addEventListener('submit', checkFormFooter);

    function checkFormFooter(event) {
        event.preventDefault();
        const form = event.target;
        const formElements = event.target.elements;
        const name = formElements.name.value;
        const email = formElements.email.value;
        const phone = formElements.phoneNumber.value;
        const agreePrivacyPolicy = formElements.confirm_policy_footer.value;
        if (
            name === '' ||
            email === '' ||
            phone === '' ||
            agreePrivacyPolicy === ''
        ) {
            return alert('Будь ласка, заповніть всі поля форми');
        }
        form.reset();
        refs.secondaryBackdrop.classList.toggle('is-hidden');
        refs.postModalForm.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }
})();
