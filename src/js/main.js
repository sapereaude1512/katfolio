import referralSlider from "./referrals/referrals";
import initializeMailService from "./email/send_email";
import initializeProjectView from "./projects/projects";

// HEADER SHOW
let lastScrollTop = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, 0);
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // console.log(maxScroll)
    // Check if the nav menu is open
    if (navMobileLinks.classList.contains('open')) {
        return;
    }
    if (scrollTop >= maxScroll) {
        header.style.top = '-90px'; // Adjust based on header height
    }
    else if (scrollTop > lastScrollTop) {
        // Scroll down - hide header
        header.style.top = '-90px'; // Adjust based on header height
    } else {
        // Scroll up - show header
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// mobile nav
let navBtn = document.getElementById('menuBtn');
let navMobileLinks = document.getElementById('nav-mobile-links');
let navOpened = false;
const mobileCta = document.getElementById('mobile-cta');

function setNavState() {
    if (navOpened) {
        navOpened = false;
        navBtn.classList.add('open');
        navMobileLinks.classList.add('open');
    } else {
        navOpened = true;
        navBtn.classList.remove('open');
        navMobileLinks.classList.remove('open');
    }
}

setNavState(); // initial state

mobileCta.addEventListener('click', () => {
    navOpened = false;
    setNavState();
});

navBtn.onclick = function () {
    setNavState();
};

navMobileLinks.querySelectorAll('a').forEach(link => {
        link.onclick = function() {
            navOpened = false;
            setNavState();
        }
    }
);

// 
initializeProjectView()
window.addEventListener('resize', initializeProjectView);

referralSlider(); 

initializeMailService();