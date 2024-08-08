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

// mobile nav

const navClosedBtn = document.getElementById('nav-closed');
const navOpenedBtn = document.getElementById('nav-opened');
const navMobileLinks = document.getElementById('nav-mobile-links');
let navOpened = false;

function setNavState() {
    if (navOpened) {
        navClosedBtn.style.display = 'none';
        navOpenedBtn.style.display = 'flex';
        navMobileLinks.classList.add('open');
    } else {
        navClosedBtn.style.display = 'flex';
        navOpenedBtn.style.display = 'none';
        navMobileLinks.classList.remove('open');
    }
}

setNavState(); // initial state

navClosedBtn.onclick = function () {
    navOpened = true;
    setNavState();
};

navOpenedBtn.onclick = function () {
    navOpened = false;
    setNavState();
};

navMobileLinks.querySelectorAll('a').forEach(link => {
        link.onclick = function() {
            navOpened = false;
            setNavState();
        }
    }
);