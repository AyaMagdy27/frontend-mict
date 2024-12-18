document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hoverdiv = document.querySelector('.hoverdiv');
    const navItems = navbar.querySelectorAll('li');
    let hideTimeout;

    function updateHoverdivPosition() {
        const navbarRect = navbar.getBoundingClientRect();
        hoverdiv.style.top = `${navbarRect.bottom}px`;
    }

    function showHoverDiv() {
        clearTimeout(hideTimeout);
        hoverdiv.style.display = 'block';
        setTimeout(() => {
            hoverdiv.style.opacity = '1';
            hoverdiv.style.visibility = 'visible';
        }, 10); // Small delay to ensure the transition works
    }

    function hideHoverDiv() {
        hideTimeout = setTimeout(() => {
            hoverdiv.style.opacity = '0';
            hoverdiv.style.visibility = 'hidden';
            setTimeout(() => {
                hoverdiv.style.display = 'none';
            }, 300); // Match this to your transition duration
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

    // Initial positioning
    updateHoverdivPosition();

    // Update hoverdiv position on scroll
    window.addEventListener('scroll', updateHoverdivPosition);

    // Update hoverdiv position on resize
    window.addEventListener('resize', updateHoverdivPosition);
});
