document.addEventListener("DOMContentLoaded", () => {
    const decrementButton = document.getElementById('btn1');
    const counterDisplay = document.getElementById('btn2');
    const incrementButton = document.getElementById('btn3');

    let counter = 0;

    decrementButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            counterDisplay.textContent = counter;
        }
    });

    incrementButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });
});
