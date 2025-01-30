const referrals = require('../../data/referrals.yaml');

function referralSlider() {
    let currentSlideIndex = 0;
    const showSlide = (slide, index, is_left = null) => {

    const projectContainer = document.getElementById(slide);
        projectContainer.classList.remove('fade-out');
        projectContainer.classList.remove('fade-in');
        void projectContainer.offsetWidth;

        if (is_left === false){
            projectContainer.classList.add('fade-out');
        }else if (is_left === true){
            projectContainer.classList.add('fade-in');
        }

        setTimeout(() => {

            let referral = referrals[index]
            // Get the h5 element with the link
            const h5Element = document.getElementById(slide).querySelector('h5 a');

            // Get all p2 elements within the slide2 div
            const p2Elements = document.getElementById(slide).querySelectorAll('p.p2');

            // Get the p1 element within the slide2 div
            const p1Element = document.getElementById(slide).querySelector('p.p1');

            // Example usage (modify as needed)
            if (h5Element) {
                // Change the link text and href
                h5Element.textContent = referral.title.text;
                h5Element.href = referral.title.href;
            }

            if (p2Elements.length == 2) {
            // Update text for each p2 element
                p2Elements[0].textContent = referral.about[0].text
                p2Elements[1].textContent = referral.about[1].text
            }

            if (p1Element) {
            // Update text for the p1 element
                p1Element.textContent = referral.quote.text
            }
        }, is_left == null? 0 : 600);
    };
    function preventGetInTouch(event) {
        // does not disable selection
            event.preventDefault();
    }
    const caretLeft = document.getElementById("caretLeftRef");
    const caretRight = document.getElementById("caretRightRef");
    if (caretLeft) {
        caretLeft.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
            showSlide('slide1', currentSlideIndex, true);

            const isSlide2 = document.getElementById('slide2').offsetParent === null;
            if (!isSlide2){
                currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
                showSlide('slide2', currentSlideIndex, true);
            }
        });
        caretLeft.addEventListener('dblclick', preventGetInTouch);
    }
    if (caretRight) {
        caretRight.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
            showSlide('slide1', currentSlideIndex, false);

            const isSlide2 = document.getElementById('slide2').offsetParent === null;
            if (!isSlide2){
                currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
                showSlide('slide2', currentSlideIndex, false);
            }
        });
        caretRight.addEventListener('dblclick', preventGetInTouch);
    }
    // Initial call to display the first slide
    showSlide('slide1', currentSlideIndex);
    const isSlide2 = document.getElementById('slide2').offsetParent === null;
    if (!isSlide2){
        currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
        showSlide('slide2', currentSlideIndex);
    }
};

export default referralSlider;