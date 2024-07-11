// sticky header

let lastScrollTop = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down - hide header
            header.style.top = '-90px'; // Adjust based on header height
        } else {
            // Scroll up - show header
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });