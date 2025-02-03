(() => {
    const refs = {
        openFotoLicenses: document.querySelectorAll(
            '[data-open-foto-licenses]'
        ),
        closeFotoLicensesBTN: document.querySelector('[data-close-licenses]'),
        modalLicenses: document.querySelector('[data-modal-foto-licenses]'),
        thumbFotoLicenses: document.querySelector('[data-thumb-foto]'),
        imgModalLicenses: document.querySelector('[data-img-modal-lisenses]'),
        backdrop: document.querySelector('.backdrop'),
    };

    refs.closeFotoLicensesBTN.addEventListener('click', toggleModalLicenses);

    refs.openFotoLicenses.forEach(img => {
        img.addEventListener('click', toggleModalLicenses);
    });

    function toggleModalLicenses(event) {
        if (event.currentTarget.getAttribute('src')) {
            const srcImg = event.currentTarget.getAttribute('src');
            refs.imgModalLicenses.src = srcImg;
        }
        refs.modalLicenses.classList.toggle('is-hidden');
        refs.backdrop.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }
})();
