window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    const logo2 = document.querySelector('.logo2');

    if (window.scrollY > 0) {
        // Change to the new logo
        logo.style.display = 'none';
        logo2.style.display = 'block';
    } else {
        // Revert to the original logo
        logo.style.display = 'block';
        logo2.style.display = 'none';
    }
});
