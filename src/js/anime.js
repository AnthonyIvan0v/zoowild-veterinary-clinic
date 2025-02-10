const observerFirst = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start-animation-text');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('start-animation-text');
        }
    });
});

const hiddenElementsText = document.querySelectorAll('.hidden-text');
hiddenElementsText.forEach(elem => observerFirst.observe(elem));

const observerSecond = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start-animation-blockLeft');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('start-animation-blockLeft');
        }
    });
});

const hiddenElementsBlockLeft = document.querySelectorAll('.hidden-blockLeft');
hiddenElementsBlockLeft.forEach(elem => observerSecond.observe(elem));

const observerThird = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start-animation-blockRight');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('start-animation-blockRight');
        }
    });
});

const hiddenElementsBlockRight =
    document.querySelectorAll('.hidden-blockRight');
hiddenElementsBlockRight.forEach(elem => observerThird.observe(elem));
