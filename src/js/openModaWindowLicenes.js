import { refs } from './refs';
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
