(() => {
    const refs = {
        toggleLangBtn: document.querySelectorAll('[data-toggle-lang]'),
        swithcer: document.querySelectorAll('.switch_lang'),
        spanUA: document.querySelectorAll('.lang_ua'),
        spanRU: document.querySelectorAll('.lang_ru'),
    };

    refs.toggleLangBtn.forEach(elem => elem.addEventListener('click', toggle));

    function toggle() {
        refs.swithcer.forEach(elem => elem.classList.toggle('toggle'));
        refs.spanUA.forEach(elem => elem.classList.toggle('inactive'));
        refs.spanRU.forEach(elem => elem.classList.toggle('inactive'));
    }
})();
