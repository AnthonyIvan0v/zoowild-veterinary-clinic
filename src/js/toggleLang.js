import { refs } from './refs';

if (window.location.href.includes('#')) {
    const index = window.location.href.indexOf('#');
    const shortAddres = window.location.href.slice(0, index);
    const modifiedAddres = shortAddres + '#ua';
    window.location.href = modifiedAddres;
} else {
    window.location.href += '#ua';
}

refs.toggleLangBtn.forEach(elem => elem.addEventListener('click', toggle));

function toggle() {
    const modifiedHref = window.location.href.slice(
        0,
        window.location.href.length
    );

    refs.swithcer.forEach(elem => elem.classList.toggle('toggle'));
    refs.spanUA.forEach(elem => elem.classList.toggle('inactive'));
    refs.spanRU.forEach(elem => elem.classList.toggle('inactive'));
    if (modifiedHref.includes('#ua')) {
        const modifiedAddres = window.location.href.replace('#ua', '#ru');
        window.location.href = modifiedAddres;
    } else {
        const modifiedAddres = window.location.href.replace('#ru', '#ua');
        window.location.href = modifiedAddres;
    }
}
