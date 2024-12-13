// sticky header

const { info } = require('autoprefixer');

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
const referrals= [
    {
    title: {
        text: "Dusan Bulatovic",
        href: "https://www.linkedin.com/in/dusan-bulatovic-236112199/"
    },
    about: [
        {
        text: "Frontend Developer"
        },
        {
        text: "Worked on the same team at Groschopp"
        }
    ],
    quote: {
        text: "Katarina has showcased remarkable talent, displaying a strong grasp of front-end technologies such as HTML, CSS, JavaScript, and React. Her ability to quickly learn and apply these skills has allowed her to deliver high-quality interfaces that meet and exceed expectations. Her proactive approach and eagerness to collaborate have greatly contributed to our team's success. "
    }
},
    {
    title: {
        text: "Sebastian Brenninkmeijer",
        href: ""
    },
    about: [
        {
        text: "Art Director"
        },
        {
        text: "Worked on the same team at Ink Innovation"
        }
    ],
    quote: {
        text: "Having managed Katarina for over a year I can say that she is a great asset for any company to have. She strives for perfection in everything she does and is always expanding her knowledge. I can say with great confidence that she is a true expert in her field with a lightning fast skill set."
    }
},
    {
    title: {
        text: "Stefan Jovasevic",
        href: "https://www.linkedin.com/in/stefan-jovasevic/"
    },
    about: [
        {
        text: "Frontend Developer"
        },
        {
        text: "Worked on the same team at Ink Innovation"
        }
    ],
    quote: {
        text: "As a Frontend developer, it is very important to work with a good designer. I had the pleasure of working with Katarina on a few projects and I am impressed with her professionalism and dedication. Also, her communication skills and working ethics are amazing. I’d highly recommend her."
    }
},
        {
    title: {
        text: "Marko Milosavljevic",
        href: ""
    },
    about: [
        {
        text: "Product Designer"
        },
        {
        text: "Worked on the same team at Brom Studio"
        }
    ],
    quote: {
        text: "Katarina is simply outstanding person, always cheerful and ready to help. During time we worked together (she was a manager on few projects I worked at) her efforts and energy were off the charts. Her ability to look things through various perspectives served as a catalyst in many situations. Her fast researching skills doubled down my time."
    }
},

{
    title: {
        text: "Mahmoud Ibrahim",
        href: ""
    },
    about: [
        {
        text: "Product Design Lead"
        },
        {
        text: "Cooperated at ADPList"
        }
    ],
    quote: {
        text: "Not only is she exceptionally talented and ambitious but her delightful personality makes her a pleasure to work with. Her skills are unmatched, and she approaches challenges with unwavering persistence and diligence. Her dedication and hard work make her an invaluable asset to any company."
    }
},


    {
    title: {
        text: "Chris Cheng",
        href: ""
    },
    about: [
        {
        text: "Creative Director"
        },
        {
        text: "Worked on the same team at Ink Innovation"
        }
    ],
    quote: {
        text: "I had the pleasure of working with Katarina as a UX/UI designer and highly recommend her for her exceptional design skills. Katarina has the unique ability to design visually appealing and effective UX/UI for a variety of media, including apps and specific device screens."
    }
},

];
function referralSlider() {
    let currentSlideIndex = 0;
    const showSlide = (slide, index) => {
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
            showSlide('slide1', currentSlideIndex);

            const isSlide2 = document.getElementById('slide2').display === 'none';
            if (!isSlide2){
                currentSlideIndex = (currentSlideIndex - 1 + referrals.length) % referrals.length;
                showSlide('slide2', currentSlideIndex);
            }
        });
        caretLeft.addEventListener('dblclick', preventGetInTouch);
    }
    if (caretRight) {
        caretRight.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
            showSlide('slide1', currentSlideIndex);

            const isSlide2 = document.getElementById('slide2').display === 'none';
            if (!isSlide2){
                currentSlideIndex = (currentSlideIndex + 1) % referrals.length;
                showSlide('slide2', currentSlideIndex);
            }
        });
        caretRight.addEventListener('dblclick', preventGetInTouch);
    }
    // Initial call to display the first slide
    // showSlide(currentSlideIndex);
};

referralSlider();

const projects = [
    {
        title: `Software solution for<br> cutting machine`,
        client: [
            { text: "Sormac", href: "https://www.sormac.eu/en/" },
            { text: "Foodcons", href: "https://www.foodcons.de/" }
        ],
        timeframe: "2023-2024",
        stack: [
            "js.svg", "python.svg", "flask.svg", "jinja.svg",
            "html5.svg", "css3.svg", "figma.svg"
        ],
        overview: {
            text: `<a href="https://www.foodcons.de/en/maschinen-typen/fs-3600-multisystem-slice-wedging-cutter" target="_blank">FS-3600</a> machine allows precise cutting of fruits and vegetables into wedges, slices, or sticks, depending on the desired size. The software, implemented on a Raspberry Pi, facilitates the seamless operation of the machine.`,
        },
        role: {
            text: `I played a key role in designing and developing the client side of the software for this machine. Our software was presented this year on <a href="https://sormac.com/en-int/machines/slice-and-wedge-cutter-2" target="_blank">fair in Berlin</a> and <a href="https://www.anugafoodtec.com/exhibitor/foodcons_gmbh_-_co/" target="_blank">fair in Cologne</a>. It gained a great amount of positive feedback. In parallel with this, I developed a UI Kit with scalability in mind, which greatly impacted the speed of product development and shortened the time to market entry.`
        },
        achievements: [
            "Reduced 2x the training time for factory workers",
            "Attracted attention at two major fairs in Germany",
            "Sped up 2x total cutting time of products",
            "Implemented feedback to improve 10+ features",
            "Achieved 22% reduction in development time"
        ]
    },
 {
        title: `Mentoring juniors and<br>expanding my knowledge`,
        client: [
            { text: "ADPList", href: "https://www.sormac.eu/en/" },
            { text: "IxDF", href: "https://www.foodcons.de/" }
        ],
        timeframe: "2022-Present",
        stack: [
            "js.svg", "google.svg", "webflow.svg", "notion.svg",
            "html5.svg", "css3.svg", "figma.svg"
        ],
        overview: {
            text: `ADPList is a global community of mentors from 150 countries that offer 1:1 expert guidance. This knowledge-sharing platform is excellent for learning and connecting with colleagues. Interaction Design Foundation or IxDF offers a comprehensive range of online UX design courses taught by experts. I’m grateful for all industry-recognized certificates I gained. This platform is an excellent resource for advancing skills and staying updated with the latest trends.`
        },
        role: {
            text: `As a mentor at ADPList, I enjoyed sharing my personal experiences and knowledge with mentees, while learning from their interesting insights. These online sessions were incredibly fulfilling, as I genuinely love helping people, especially knowing how challenging the beginning of a career can be. At the IxDF, I completed numerous courses and several master classes. My hard work paid off as I applied these new skills at work, garnering recognition. This dedication led to an interview with the IxDF team, where I shared my journey to inspire others to keep learning.`
        },
        achievements: [
            "Provided  with 650+ minutes of mentorship",
            "Made connection with 40+ mentees and mentors",
            "Ranked in top 10 mentors in industrial design",
            "Mentoring juniors resulted in enhanced human skills",
            "Completed 30+ courses in less than 6 months"
        ]
    },
   
{
        title: `On-chain social<br>media marketplace`,
        client: [
            { text: "Adora Promo", href: "https://www.sormac.eu/en/" },
        ],
        timeframe: "2023-2024",
        stack: [
            "webflow.svg", "atlasian.svg", "slack.svg",
            "discord.svg", "google.svg", "figma.svg"
        ],
        overview: {
            text: `Adora Promo is on-chain social media marketplace that uses AI to verify sponsored content. Advertisers send offers to creators with natural language requirements. Creators are paid based on the engagement their post receives. This project was a price winner at ETHOnline2023 hackathon. We tested this idea by launching a startup, however, we pivoted to focus on other opportunities.`,
        },
        role: {
            text: `Collaborating as a frontend developer and designer included conducting comprehensive UX research, defining target market, creating a robust branding and design system. Seamless user experiences was ensured by producing wireframes, low-fidelity, and high-fidelity prototypes. I was continuously driving improvements in frontend code to enhance user engagement.`
        },
        achievements: [
            "Reduced twice required time for making matches",
            "Made collaboration with world-wide influencers",
            "Sped up post verification time to 30 seconds",
            "Implementing feedback resulted in rebranding",
            "Over 15% of reduction in development time"
        ]

    },

{
        title: `Reshaping the future<br>of aviation industry`,
        client: [
            { text: "Ink Innovation", href: "https://www.sormac.eu/en/" },
        ],
        timeframe: "2023-2024",
        stack: [
            "notion.svg", "discord.svg", "google.svg", "figma.svg"
        ],
        overview: {
            text: `Ink Innovation is a provider of unique ecosystem of biometrics, mobile and cloud systems for the travel industry and organizations, which is handling around 57 million passengers annually, and is spread on 460 airports world-wide, with 200+ carriers set up in the system. Ink projects I contributed to were advanced cloud-hosted departure control system (Ink DCS) with 1000+ functionalities, Ink Baggage reconciliation system (Ink BRS) and Ink Self-Service devices (Kiosk, Bag Drop, Totem) that I designed from scratch, as well as Ink Health. `,
        },
        role: {
            text: `As a digital product designer, I was engaged in 4 major projects and my role consisted of: translating business needs and requirements into intuitive user experiences, designing comprehensive UX strategies, collaborating with the international teams, participating in rebranding, developing UI kit with scalability in mind, mentoring junior designers, and providing design process to create optimal solutions for interactive designs.`
        },
        achievements: [
            "Training time for agents reduced to around 3 hours",
            "Facilitated collaboration with 3 new clients",
            "Sped up total check-in time to 2-3 minutes",
            "Enhanced over 350 features in a year",
            "Over 15% of reduction in development time",
        ]

    },

{
        title: `Gamified<br>NFT App`,
        client: [
            { text: "NFT Flipper", href: "https://www.sormac.eu/en/" },
        ],
        timeframe: "During 2023",
        stack: [
            "notion.svg", "discord.svg", "google.svg", "figma.svg"
        ],
        overview: {
            text: `NFT Flipper is NFT matchmaking gambling dApp built at ETHBelgrade2023 hackathon. It delivers an innovative solution to the problem of fragmented NFT utility and limited gameplay opportunities by providing a platform that combines staking, randomness, and winner-takes-all mechanics. Users stake their NFTs in matches, and the smart contract autonomously selects a random winner. The winner takes possession of staked NFTs, creating an exciting element of risk.`,
        },
        role: {
            text: `As a UX/UI designer, I conducted extensive UX research, defined target market, established branding and design system. I ensured high-quality user experiences by creating wireframes, low-fidelity, and high-fidelity prototypes, while continuously driving design enhancements to boost platform functionality. Additionally, I was integral in the creation and development of the product’s visual style and I worked closely with the development team to ensure optimal implementation.`
        },
        achievements: [
            "Made a MVP version of the app in just 3 days",
            "Connected with two potential investors",
            "Pitched successfully  in less than 10 minutes",
            "Crafted interactive design for 30+ screens ",
            "Reduced development with simple design system"
        ]
    },
];

let currentProjectIndex = 0;

const showProject = (index) => {
    const project = projects[index];
    if (!project) return;
    document.querySelector(".row-left h4").innerHTML = project.title;

    const clientLinks = project.client.map(client =>
        `<a href="${client.href}" target="_blank">${client.text}</a>`
    ).join(" ; ");
    document.querySelector(".row-right .p2").innerHTML = `Client: ${clientLinks}`;

    document.querySelector(".row-right .p2:nth-of-type(2)").textContent = "| Time frame:";
    document.querySelector(".row-right .p2:nth-of-type(3)").textContent = project.timeframe;

    const stackContainer = document.querySelector(".row-stack");
    const images = stackContainer.querySelectorAll("img");
    images.forEach(img => {
        img.style.display = "none";
    });
    project.stack.forEach(tech => {
        const img = stackContainer.querySelector(`img[alt="${tech.split('.')[0]}"]`);
        if (img) {
            img.style.display = "inline-block"; // Make the image visible
        }
    });


    document.querySelector(".column-content:first-child p").innerHTML = project.overview.text;

    document.querySelector(".column-content:nth-of-type(2) p").innerHTML = project.role.text;

    const achievementsContainer = document.querySelectorAll(".achievements .row-wrap .column .p1");

    achievementsContainer.forEach((element, index) => {
        if (project.achievements[index]) {
            element.textContent = project.achievements[index];
        } else {
            element.textContent = ""; // Clear text if no corresponding achievement
        }
    });

};

document.getElementById("caretLeftProj").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});

document.getElementById("caretRightProj").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});

// Initialize with the first project
showProject(currentProjectIndex);
