(() => {
    const refs = {
        openFotoLicenses: document.querySelectorAll(
            '[data-open-foto-licenses]'
        ),
        closeFotoLicensesBTN: document.querySelector('[data-close-licenses]'),
        thumbFotoLicenses: document.querySelector('[data-thumb-foto]'),
        backdrop: document.querySelector('.backdrop'),
    };

    refs.openFotoLicenses.forEach(elem =>
        elem.addEventListener('click', toggleModalLicenses)
    );
    refs.closeFotoLicensesBTN.addEventListener('click', toggleModalLicenses);

    function toggleModalLicenses(event) {
        const typelicenses = event.currentTarget.getAttribute('licenses');
        console.log(typelicenses);
        switch (typelicenses) {
            case 'diploma':
                // refs.thumbFotoLicenses.innerHTML = `<img src="./images/content-images/licenses/diploma_1920.jpg"/>`;
                refs.thumbFotoLicenses.innerHTML = `<img src="/images/content-images/licenses/diploma_1920@2x.jpg"/>`;
                console.log(typelicenses);
                break;
            case 'certificate':
                refs.thumbFotoLicenses.innerHTML = `<img src="./images/content-images/licenses/certificate_1920@2x.jpg"/>`;
                break;
            case 'second_diploma':
                refs.thumbFotoLicenses.innerHTML = `<img src="./images/content-images/licenses/second_diploma_1920@2x.jpg"/>`;
                break;
                refs.thumbFotoLicenses.innerHTML = '';
            default:
            // }
        }
        refs.backdrop.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }
})();
