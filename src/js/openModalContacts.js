(() => {
    const refs = {
        openModalContactsBtn: document.querySelector(
            '[data-open-modal-contacts]'
        ),
        closeModalContactsBtn: document.querySelector(
            '[data-close-modal-contacts]'
        ),
        modalContacts: document.querySelector('[data-modal-contacts]'),
    };

    refs.openModalContactsBtn.addEventListener('click', toggleModal);
    refs.closeModalContactsBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modalContacts.classList.toggle('is-show-block-cntacts');
    }
})();
