import { refs } from './refs';

refs.openMapBTN.forEach(elem => elem.addEventListener('click', toggleModal));
refs.closeMapBTN.addEventListener('click', toggleModal);

const arrayLocation = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.5671412009815!2d34.97352937622488!3d48.46483422832204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bbd93132d7%3A0x86d2be4d506c0512!2z0L_RgNC-0YHQv9C10LrRgiDQhtCy0LDQvdCwINCc0LDQt9C10L_QuCwgMzksINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1738519301072!5m2!1suk!2sua',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.6659072414923!2d34.979657776224784!3d48.46293942845449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bb304132cd%3A0xb618d60c0c4e7386!2z0LLRg9C70LjRhtGPINCd0L7QstC-0L7RgNC70L7QstGB0YzQutCwLCA0LCDQlNC90ZbQv9GA0L4sINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1suk!2sua!4v1738519371806!5m2!1suk!2sua',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.817913094951!2d34.93690727622467!3d48.46002312865855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3eff2eae10f%3A0x6bdc25de7986b16e!2z0LLRg9C70LjRhtGPINCU0LDQvdC40LvQsCDQk9Cw0LvQuNGG0YzQutC-0LPQviwgMjUsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1738519412974!5m2!1suk!2sua',
];

function toggleModal(event) {
    const locationId = event.target.getAttribute('data-id');
    switch (locationId) {
        case '02':
            refs.map.setAttribute('src', arrayLocation[1]);
            break;
        case '03':
            refs.map.setAttribute('src', arrayLocation[2]);
            break;
        default:
            refs.map.setAttribute('src', arrayLocation[0]);
    }
    refs.backdrop.classList.toggle('is-hidden');
    refs.modalmap.classList.toggle('is-hidden');
    document.body.classList.toggle('not-scroll');
}
