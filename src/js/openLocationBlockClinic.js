(() => {
    const refs = {
        openLocationBlockBtn: document.querySelector(
            '[data-open-location-block]'
        ),
        closeLocationBlockBtn: document.querySelector(
            '[data-close-location-block]'
        ),
        locationBlock: document.querySelector('[data-location-block]'),
    };

    refs.openLocationBlockBtn.addEventListener('click', toggleModal);
    refs.closeLocationBlockBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.locationBlock.classList.toggle('is-show-block-location');
    }
})();
