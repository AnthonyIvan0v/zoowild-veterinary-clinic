const observerFirst = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('start-animation-text');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('start-animation-text');
    }
  });
});

const hiddenElementsText = document.querySelectorAll('.hidden-text');
hiddenElementsText.forEach((elem) => observerFirst.observe(elem));

const observerSecond = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('start-animation-blockLeft');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('start-animation-blockLeft');
    }
  });
});

const hiddenElementsBlockLeft = document.querySelectorAll('.hidden-blockLeft');
hiddenElementsBlockLeft.forEach((elem) => observerSecond.observe(elem));

const observerThird = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
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
hiddenElementsBlockRight.forEach((elem) => observerThird.observe(elem));

/**
  |============================
  | animation for statistics section
  | increase numbers (counter)
  |============================
*/

const numbers = document.querySelectorAll('.statistics__number');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const number = entry.target;
        const targetValue = parseInt(number.getAttribute('data-target'), 10);
        const startValue = parseInt(number.textContent, 10);

        const step = targetValue > 1000 ? 10 : 1;

        anime({
          targets: number,
          innerHTML: [startValue, targetValue],
          easing: 'easeOutExpo',
          duration: 2000,
          round: 1,
          update: function (anim) {
            const currentValue = Math.floor(anim.animations[0].currentValue);
            const stepValue = Math.floor(currentValue / step) * step;

            if (targetValue === 98) {
              number.innerHTML = `${stepValue}%`;
            } else if (targetValue > 10) {
              number.innerHTML = `${stepValue}<span aria-hidden="true" class="statistics__plus">+</span>`;
            } else {
              number.innerHTML = stepValue;
            }
          },
        });

        observer.unobserve(number);
      }
    });
  },
  { threshold: 0.5 }
);

numbers.forEach((number) => observer.observe(number));
