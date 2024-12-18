document.addEventListener('DOMContentLoaded', function() {
    let sidebar = document.getElementsByClassName("slider-y")[0];
    let sidebar_content = document.getElementsByClassName("seendiv")[0];

    let targetTop = 0;
    let currentTop = 0;
    let isScrolling = false;

    function updateSidebarPosition() {
        let scrollTop = window.scrollY;
        let contentHeight = sidebar_content.getBoundingClientRect().height;
        let sidebarHeight = sidebar.getBoundingClientRect().height;
        let sidebarTop = sidebar_content.getBoundingClientRect().top + window.pageYOffset;

        if (scrollTop >= sidebarTop && scrollTop < (sidebarTop + contentHeight - sidebarHeight)) {
            targetTop = scrollTop - sidebarTop;
            sidebar.style.position = 'fixed';
        } else if (scrollTop >= (sidebarTop + contentHeight - sidebarHeight)) {
            targetTop = contentHeight - sidebarHeight;
            sidebar.style.position = 'absolute';
            sidebar.style.top = `${targetTop}px`;
        } else {
            targetTop = 0;
            sidebar.style.position = '';
            sidebar.style.top = '';
        }

        if (sidebar.style.position === 'fixed') {
            if (currentTop < targetTop) {
                currentTop = Math.min(currentTop + 5, targetTop);
            } else if (currentTop > targetTop) {
                currentTop = Math.max(currentTop - 5, targetTop);
            }
            sidebar.style.top = `${currentTop}px`;
        }
    }

    function smoothScroll() {
        if (isScrolling) {
            requestAnimationFrame(smoothScroll);
            updateSidebarPosition();
        }
    }

    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    });

    window.addEventListener('scrollend', function() {
        isScrolling = false;
    });
});
