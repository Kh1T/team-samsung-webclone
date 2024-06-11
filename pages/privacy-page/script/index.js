/* Your privacy script */

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('#carouselInner');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const transformValue = -currentSlide * 100;
        carouselInner.style.transform = `translateX(${transformValue}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-gray-400', index === currentSlide);

        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();
});



/* Make a request script */
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner1 = document.querySelector('#carouselInner1');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator1');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const transformValue = -currentSlide * 100;
        carouselInner1.style.transform = `translateX(${transformValue}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-gray-400', index === currentSlide);
            indicator.classList.toggle('bg-transparent', index !== currentSlide);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();
});