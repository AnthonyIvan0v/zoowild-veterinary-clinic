(() => {
    const refs = {
        openVideoBTN: document.querySelectorAll('[data-open-video]'),
        closeVideoBTN: document.querySelector('[data-close-video]'),
        modalVideo: document.querySelector('[data-modal-video]'),
        video: document.querySelector('[data-video]'),
        backdrop: document.querySelector('.backdrop'),
    };

    refs.openVideoBTN.forEach(elem =>
        elem.addEventListener('click', toggleModal)
    );
    refs.closeVideoBTN.addEventListener('click', toggleModal);

    const arrayLinksVideo = [
        'https://www.youtube.com/embed/hXBHxsQ_5rw',
        'https://www.youtube.com/embed/hXBHxsQ_5rw',
        'https://www.youtube.com/embed/hXBHxsQ_5rw',
    ];

    function toggleModal(event) {
        const videoId = event.target.getAttribute('id');
        switch (videoId) {
            case 'clinick_video':
                refs.video.setAttribute('src', arrayLinksVideo[0]);
                break;
            case 'snake_video':
                refs.video.setAttribute('src', arrayLinksVideo[1]);
                break;
            default:
                refs.video.setAttribute('src', arrayLinksVideo[2]);
        }
        refs.backdrop.classList.toggle('is-hidden');
        refs.modalVideo.classList.toggle('is-hidden');
        document.body.classList.toggle('not-scroll');
    }
})();
