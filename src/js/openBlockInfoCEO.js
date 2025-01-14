(() => {
    const refs = {
        openBlockInfoCeoBtn: document.querySelector(
            '[data-open-block-info-ceo]'
        ),
        blockInfoCEO: document.querySelector('[data-block-info-ceo]'),
        iconPlus: document.querySelector('.icon-plus'),
        iconMinus: document.querySelector('.icon-minus'),
    };

    refs.openBlockInfoCeoBtn.addEventListener('click', toggle);

    function toggle() {
        refs.blockInfoCEO.classList.toggle('is-hidden');
        refs.iconPlus.classList.toggle('is-hidden');
        refs.iconMinus.classList.toggle('is-hidden');
    }
})();
