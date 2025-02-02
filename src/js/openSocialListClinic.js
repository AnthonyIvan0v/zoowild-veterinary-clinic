(() => {
    const refs = {
        openSocialListBtn: document.querySelector(
            '[data-social-list-clinic-open]'
        ),
        closeSocialListBtn: document.querySelector(
            '[data-social-list-clinic-close]'
        ),
        socialList: document.querySelector('[data-social-list-clinic]'),
    };

    refs.openSocialListBtn.addEventListener('click', toggleModal);
    refs.closeSocialListBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.socialList.classList.toggle('is-show-social-list');
        refs.openSocialListBtn.classList.toggle('is-hidden');
    }
})();
