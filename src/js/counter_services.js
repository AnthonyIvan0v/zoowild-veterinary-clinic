document.addEventListener('DOMContentLoaded', function () {
    const counterElements = document.querySelectorAll('.number');
    counterElements.forEach(el => {
        el.originalValue = parseInt(el.textContent.replace(/\s+/g, ''), 10); // Сохранение оригинального значения
        el.textContent = '0'; // Установка начального значения в ноль
    });
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const targetNumber = element.originalValue;
                    setTimeout(() => startCounter(element, targetNumber), 500);
                    observer.unobserve(element);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );
    counterElements.forEach(el => {
        observer.observe(el);
    });
    function startCounter(element, target) {
        const duration = 1500; // Длительность анимации в миллисекундах
        const increment = target / (duration / 16); // Обновление каждые 16 мс (приблизительно 60 fps)
        let current = 0;
        function updateCounter() {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else element.textContent = target.toLocaleString();
        }
        updateCounter();
    }
});
