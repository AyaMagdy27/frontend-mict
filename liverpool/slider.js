document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const precards = slider.querySelector('.precards');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        const precardsCount = slider.querySelectorAll('.precard').length;
        let currentIndex = 0;

        function updateSliderPosition() {
            const precardWidth = slider.querySelector('.precard').offsetWidth;
            const visiblePrecards = Math.floor(sliderWrapper.offsetWidth / (precardWidth + 20)); // Adjust for margin
            const maxIndex = Math.max(0, precardsCount - visiblePrecards);
            
            const offset = -currentIndex * (precardWidth + 20); // Adjust for margin
            sliderWrapper.style.transform = `translateX(${offset}px)`;
            prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
            nextButton.style.display = currentIndex >= maxIndex ? 'none' : 'block';
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        nextButton.addEventListener('click', () => {
            const precardWidth = slider.querySelector('.precard').offsetWidth;
            const visiblePrecards = Math.floor(sliderWrapper.offsetWidth / (precardWidth + 20)); // Adjust for margin
            const maxIndex = Math.max(0, precardsCount - visiblePrecards);
            
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        window.addEventListener('resize', () => {
            updateSliderPosition(); // Ensure correct position on window resize
        });

        updateSliderPosition(); // Initialize slider position
    });
});
