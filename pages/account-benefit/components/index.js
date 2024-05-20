// Function to handle carousel transform based on window width
function handleCarouselTransform() {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        carouselItems.style.transform = 'translateX(0)';
    } else {
        const slideIndex = parseInt(button.dataset.slide);
        const offset = -slideIndex * this.offsetWidth;
        carouselItems.style.transform = `translateX(${offset/ 3}px)`;
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleCarouselTransform);

// Initially set the carousel transform
handleCarouselTransform();
