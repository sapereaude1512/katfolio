import referralSlider from "./referrals/referrals";
import initializeMailService from "./email/send_email";
import initializeProjectView from "./projects/projects";

// show header

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

// project view

initializeProjectView()
window.addEventListener('resize', initializeProjectView);

referralSlider(); 

initializeMailService();

// section scrolling animation

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    // Function to check if section is in the viewport
    const checkVisibility = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Check if section is at least partially visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
        // If the section is in the viewport, add 'visible' class, remove 'appearing'
        section.classList.add('visible');
        section.classList.remove('appearing');
        } else {
        // If the section is not in the viewport, add 'appearing' class, remove 'visible'
        section.classList.add('appearing');
        section.classList.remove('visible');
        }
    });
    };

    // Throttle the scroll event
    let timeout;
    window.addEventListener('scroll', () => {
    if (timeout) {
      clearTimeout(timeout); // Clear the previous timeout
    }
    timeout = setTimeout(checkVisibility, 50); // Run the visibility check after 100ms of no scroll activity
    });

  // Run the check immediately on page load to ensure sections are visible as needed
    checkVisibility();
});