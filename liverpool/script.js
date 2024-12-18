document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hoverdiv = document.querySelector('.hoverdiv');
    const navItems = navbar.querySelectorAll('li');
    let hideTimeout;

    function showHoverDiv() {
        clearTimeout(hideTimeout);
        navbar.classList.add('hovered');
        hoverdiv.style.display = 'block';
        setTimeout(() => {
            hoverdiv.style.opacity = '1';
            hoverdiv.style.visibility = 'visible';
        }, 10); // Small delay to ensure the transition works
    }

    function hideHoverDiv() {
        hideTimeout = setTimeout(() => {
            navbar.classList.remove('hovered');
            hoverdiv.style.opacity = '0';
            hoverdiv.style.visibility = 'hidden';
            setTimeout(() => {
                hoverdiv.style.display = 'none';
            }, 200); // Match this to your transition duration
        }, 200); // Delay before hiding
    }

    // Add event listeners to each nav item
    navItems.forEach(item => {
        item.addEventListener('mouseenter', showHoverDiv);
    });

    // Add event listeners to navbar and hoverdiv
    navbar.addEventListener('mouseover', showHoverDiv);
    navbar.addEventListener('mouseout', hideHoverDiv);
    hoverdiv.addEventListener('mouseover', showHoverDiv);
    hoverdiv.addEventListener('mouseout', hideHoverDiv);

    // Optional: Close hoverdiv when clicking outside
    document.addEventListener('click', (event) => {
        if (!hoverdiv.contains(event.target) && !navbar.contains(event.target)) {
            hideHoverDiv();
        }
    });
});