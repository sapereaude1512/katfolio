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

let navClosedBtn = document.getElementById('nav-closed');
let navOpenedBtn = document.getElementById('nav-opened');
let navMobileLinks = document.getElementById('nav-mobile-links');
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

// referrals slider

function referralSlider() {
    const slides = ["slide1", "slide2", "slide3", "slide4", "slide5", "slide6"];
    let currentSlideIndex = 0;
    const showSlide = (index) => {
        slides.forEach((slideId, idx) => {
            const slide = document.getElementById(slideId);
            if (slide) {
                if (idx === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            }
        });
    };
    
    const caretLeft = document.getElementById("caretLeft");
    const caretRight = document.getElementById("caretRight");
    if (caretLeft) {
        caretLeft.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
    }
    if (caretRight) {
        caretRight.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });
    }
    // Initial call to display the first slide
    showSlide(currentSlideIndex);
};

referralSlider();