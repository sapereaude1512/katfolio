
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire13c7"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire13c7"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("aKzDW", function(module, exports) {

$parcel$export(module.exports, "register", () => $7d39d93f9098a310$export$6503ec6e8aabbaf, (v) => $7d39d93f9098a310$export$6503ec6e8aabbaf = v);
var $7d39d93f9098a310$export$6503ec6e8aabbaf;
var $7d39d93f9098a310$export$f7ad0328861e2f03;
"use strict";
var $7d39d93f9098a310$var$mapping = new Map();
function $7d39d93f9098a310$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$7d39d93f9098a310$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $7d39d93f9098a310$var$resolve(id) {
    var resolved = $7d39d93f9098a310$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$7d39d93f9098a310$export$6503ec6e8aabbaf = $7d39d93f9098a310$var$register;
$7d39d93f9098a310$export$f7ad0328861e2f03 = $7d39d93f9098a310$var$resolve;

});

parcelRegister("Yf9FR", function(module, exports) {
module.exports = {
    "projects": [
        {
            "title": "Software solution for<br>cutting machine",
            "client": [
                {
                    "text": "Sormac",
                    "href": "https://www.sormac.eu/en/"
                }
            ],
            "timeframe": "2023-Present",
            "stack": [
                "js.svg",
                "python.svg",
                "flask.svg",
                "jinja.svg",
                "html5.svg",
                "css3.svg",
                "figma.svg"
            ],
            "overview": {
                "text": '<a href="https://sormac.com/en-gb/machines/slice-and-wedge-cutter-fs3600" target="_blank">FS-3600</a> machine allows precise cutting of fruits and vegetables into wedges, slices, or sticks, depending on the desired size. The software, implemented on a Raspberry Pi, facilitates the seamless operation of the machine. I have developed the HMI design, which not only enhances the user experience but also facilitates the continuous improvement of the software and overall capabilities. The intuitive interface enables users to easily select and adjust cutting configurations to match specific requirements. This project aims to enhance food preparation efficiency while maintaining high levels of accuracy and consistency.'
            },
            "role": {
                "text": 'I played a key role in designing and developing the client side of the software for this machine. Our software was presented in 2024 on <a href="https://sormac.com/en-gb/knowledge-center/sormac-stand-packed-full-of-technological-innovations" target="_blank">fair in Berlin</a> and <a href="https://www.anugafoodtec.com/exhibitor/foodcons_gmbh_-_co/" target="_blank">fair in Cologne</a>. It gained a great amount of positive feedback. In\xa0parallel with this, I\xa0developed a\xa0UI\xa0Kit with scalability in\xa0mind, which greatly impacted the speed of\xa0product development and shortened the time to\xa0market entry.'
            },
            "achievements": [
                "Reduced 2x the training time for factory workers",
                "Attracted attention at two major fairs in Germany",
                "Sped up 2x total cutting time of products",
                "Implemented feedback to improve 10+ features",
                "Achieved 20% reduction in development time"
            ]
        },
        {
            "title": "Reshaping the future<br>of aviation industry",
            "client": [
                {
                    "text": "Ink Innovation",
                    "href": "https://www.innovation.ink/"
                }
            ],
            "timeframe": "2023-2024",
            "stack": [
                "notion.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'Ink Innovation is a provider of unique ecosystem of biometrics, mobile and cloud systems for the travel industry and organizations, which is handling around 57 million passengers annually, and is spread on 460 airports world-wide, with 200+ carriers set up in the system. Ink projects I contributed to were advanced cloud-hosted departure control system (<a href="https://www.innovation.ink/ecosystem/ink-dcs" target="_blank">Ink DCS</a>) with 1000+ functionalities, Ink Baggage reconciliation system (<a href="https://dcs.aero/product/baggage-reconciliation-system-brs-ink-innovation/" target="_blank">Ink BRS</a>) and <a href="https://www.airline-suppliers.com/product/self-service-ink-kiosk/" target="_blank">Ink Self-Service devices</a> (Kiosk, Bag Drop, Totem) that I designed from scratch, as well as <a href="https://www.health.ink/" target="_blank">Ink Health.</a>'
            },
            "role": {
                "text": "As a digital product designer, I was engaged in 4 major projects and my role consisted of: translating business needs and requirements into intuitive user experiences, designing comprehensive UX strategies, collaborating with the international teams, participating in rebranding, developing UI kit with scalability in mind, mentoring junior designers, and providing design process to create optimal solutions for interactive designs."
            },
            "achievements": [
                "Training time for agents reduced to around 3 hours",
                "Facilitated collaboration with 3 new clients",
                "Sped up total check-in time to 2-3 minutes",
                "Enhanced hundreds of features in a year",
                "Over 15% of reduction in development time"
            ]
        },
        {
            "title": "On-chain social<br>media marketplace",
            "client": [
                {
                    "text": "Adora Promo",
                    "href": "https://github.com/AdoraPromo"
                }
            ],
            "timeframe": "2023-2024",
            "stack": [
                "webflow.svg",
                "atlassian.svg",
                "slack.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": '<a href="https://ethglobal.com/showcase/adora-promo-ia4yu" target="_blank">Adora Promo</a> is on-chain social media marketplace that uses AI to verify sponsored content. Advertisers send offers to creators with natural language requirements. Creators are paid based on the engagement their post receives. This project was a price winner at ETHOnline2023 hackathon. We tested this idea by launching a startup, however, we pivoted to focus on other opportunities.'
            },
            "role": {
                "text": "Collaborating as a frontend developer and designer included conducting comprehensive UX research, defining target market, creating a robust branding and design system. Seamless user experiences was ensured by producing wireframes, low-fidelity, and high-fidelity prototypes. I was continuously driving improvements in frontend code to enhance user engagement."
            },
            "achievements": [
                "Reduced twice required time for making matches",
                "Made collaboration with 5+ influencers",
                "Sped up post verification time to 30 seconds",
                "Implementing feedback resulted in rebranding",
                "Over 15% of reduction in development time"
            ]
        },
        {
            "title": "Mentoring juniors and<br>expanding knowledge",
            "client": [
                {
                    "text": "ADPList",
                    "href": "https://adplist.org/"
                },
                {
                    "text": "IxDF",
                    "href": "http://www.interaction-design.org/"
                }
            ],
            "timeframe": "2022-Present",
            "stack": [
                "js.svg",
                "google.svg",
                "webflow.svg",
                "notion.svg",
                "html5.svg",
                "css3.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'ADPList is a global community of mentors from 150 countries that offer <a href="https://adplist.org/mentors/katarina-popovic" target="_blank">1:1 expert guidance</a>. This knowledge-sharing platform is excellent for learning and connecting with colleagues. Interaction Design Foundation or IxDF offers a comprehensive range of online UX design courses taught by experts. I\u2019m grateful for all <a href="https://drive.google.com/drive/folders/15G2dxj33D1k3MTmBJ0pwayBLE8BmylzB?usp=drive_link" target="_blank">industry-recognized certificates</a> I gained. This platform is an excellent resource for advancing skills and staying updated with the latest trends.'
            },
            "role": {
                "text": 'As a mentor at ADPList, I enjoyed sharing my personal experiences and knowledge with mentees, while learning from their interesting insights. These online sessions were incredibly fulfilling, as I genuinely love helping people, especially knowing how challenging the beginning of a career can be. At the IxDF, I completed numerous courses and several master classes. My hard work paid off as I applied these new skills at work, garnering recognition. This dedication led to an <a href="https://www.linkedin.com/posts/the-interaction-design-foundation_katarina-finished-30-ixdf-courses-while-working-activity-7023342257634246656-Gwdg?utm_source=share&utm_medium=member_desktop" target="_blank">interview with the IxDF team</a>, where I shared my journey to inspire others to keep learning.'
            },
            "achievements": [
                "Provided with 700+ minutes of mentorship",
                "Made connection with 40+ mentees",
                "Ranked in top 10 mentors in industrial design",
                "Mentoring juniors resulted in enhanced skills",
                "Completed 30+ courses in less than 6 months"
            ]
        },
        {
            "title": "Gamified<br>NFT App",
            "client": [
                {
                    "text": "NFT Flipper",
                    "href": "https://taikai.network/ethbelgrade/hackathons/hackathon-2023/projects/cliinujot00g9wn011g01mj7s/idea"
                }
            ],
            "timeframe": "During 2023",
            "stack": [
                "notion.svg",
                "discord.svg",
                "google.svg",
                "figma.svg"
            ],
            "overview": {
                "text": 'NFT Flipper is an NFT matchmaking gambling dApp built at <a href="https://2023.ethbelgrade.rs/" target="_blank">ETHBelgrade2023 hackathon</a>. It provides an innovative solution to fragmented NFT utility and limited gameplay opportunities by combining staking, randomness, and winner-takes-all mechanics. Users stake their NFTs in matches, and the smart contract autonomously selects a random winner. The winner takes possession of staked NFTs, introducing an exciting element of risk.'
            },
            "role": {
                "text": "As a UX/UI designer, I conducted extensive UX research, defined the target market, and established branding and a design system. I ensured high-quality user experiences by creating wireframes, low-fidelity, and high-fidelity prototypes while continuously driving design enhancements to boost platform functionality. Also, I collaborated closely with developers to align design and technical aspects."
            },
            "achievements": [
                "Enhanced engagement through intuitive design",
                "Conducted user research and applied feedback",
                "Boosted platform usability and aesthetics",
                "Reduced user onboarding time by 25%",
                "Delivered fully functional prototype in 48 hours"
            ]
        }
    ]
};

});

parcelRegister("krLb4", function(module, exports) {
module.exports = new URL("html5.515ead5c.svg", import.meta.url).toString();

});

parcelRegister("5lgF4", function(module, exports) {
module.exports = new URL("css3.0701d9b9.svg", import.meta.url).toString();

});

parcelRegister("3C4mz", function(module, exports) {
module.exports = new URL("webflow.4d8f787d.svg", import.meta.url).toString();

});

parcelRegister("h48DJ", function(module, exports) {
module.exports = new URL("figma.48e10268.svg", import.meta.url).toString();

});

parcelRegister("lrnLk", function(module, exports) {
module.exports = new URL("python.942c6ab0.svg", import.meta.url).toString();

});

parcelRegister("6jzHo", function(module, exports) {
module.exports = new URL("flask.17f6590b.svg", import.meta.url).toString();

});

parcelRegister("4n97y", function(module, exports) {
module.exports = new URL("jinja.0f751dbe.svg", import.meta.url).toString();

});

parcelRegister("irb8g", function(module, exports) {
module.exports = new URL("atlassian.a5c4dcce.svg", import.meta.url).toString();

});

parcelRegister("92ydA", function(module, exports) {
module.exports = new URL("typescript.90519fa8.svg", import.meta.url).toString();

});

parcelRegister("a893d", function(module, exports) {
module.exports = new URL("notion.bf862e6d.svg", import.meta.url).toString();

});

parcelRegister("i5dGP", function(module, exports) {
module.exports = new URL("slack.0653b194.svg", import.meta.url).toString();

});

parcelRegister("6B3dd", function(module, exports) {
module.exports = new URL("discord.b9f356dc.svg", import.meta.url).toString();

});

parcelRegister("2BvTJ", function(module, exports) {
module.exports = new URL("google.60d158d5.svg", import.meta.url).toString();

});

parcelRegister("9kJnf", function(module, exports) {
module.exports = new URL("js.6fa6690a.svg", import.meta.url).toString();

});

parcelRegister("czOWc", function(module, exports) {
module.exports = new URL("clock.d9b062b6.svg", import.meta.url).toString();

});

parcelRegister("ga5Rs", function(module, exports) {
module.exports = new URL("handshake.959fe70b.svg", import.meta.url).toString();

});

parcelRegister("iirlz", function(module, exports) {
module.exports = new URL("speed.97ca24fb.svg", import.meta.url).toString();

});

parcelRegister("ibaFb", function(module, exports) {
module.exports = new URL("monitor.8d4da88f.svg", import.meta.url).toString();

});

parcelRegister("5OC4D", function(module, exports) {
module.exports = new URL("code.8a4d83ec.svg", import.meta.url).toString();

});

var $24cb92de42a796a7$exports = {};

(parcelRequire("aKzDW")).register(new URL("", import.meta.url).toString(), JSON.parse('["6HCxQ","index.f3c6c73f.js","lzT0u","html5.515ead5c.svg","h1AH1","css3.0701d9b9.svg","h6qPU","webflow.4d8f787d.svg","gsWSD","figma.48e10268.svg","8K4Pl","python.942c6ab0.svg","gXr0n","flask.17f6590b.svg","5siRd","jinja.0f751dbe.svg","9fgZd","atlassian.a5c4dcce.svg","lgpTX","typescript.90519fa8.svg","20qcP","notion.bf862e6d.svg","8XkI8","slack.0653b194.svg","aE2Kv","discord.b9f356dc.svg","7d5JX","google.60d158d5.svg","hJTYk","js.6fa6690a.svg","6HSGA","clock.d9b062b6.svg","gWN7m","handshake.959fe70b.svg","bAWwy","speed.97ca24fb.svg","kqE3O","monitor.8d4da88f.svg","gGvx6","code.8a4d83ec.svg"]'));

var $7e95c06c893d19d7$exports = {};
$7e95c06c893d19d7$exports = [
    {
        "title": {
            "text": "Dusan Bulatovic",
            "href": "https://www.linkedin.com/in/dusan-bulatovic-236112199/"
        },
        "about": [
            {
                "text": "Frontend Developer"
            },
            {
                "text": "Worked on the same team at Groschopp"
            }
        ],
        "quote": {
            "text": "Katarina has showcased remarkable talent, displaying a strong grasp of front-end technologies. She delivers high-quality interfaces that meet and exceed expectations. Her proactive approach and eagerness to collaborate have greatly contributed to our team's success."
        }
    },
    {
        "title": {
            "text": "Sebastian B.",
            "href": "https://www.linkedin.com/in/sebastian-brenninkmeijer-144305b8/"
        },
        "about": [
            {
                "text": "Art Director"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "Having managed Katarina for over a year I can say that she is a great asset for any company to have. She strives for perfection in everything she does and is always expanding her knowledge. I can say with great confidence that she is a true expert in her field with a lightning fast skill set."
        }
    },
    {
        "title": {
            "text": "Stefan Jovasevic",
            "href": "https://www.linkedin.com/in/stefan-jovasevic/"
        },
        "about": [
            {
                "text": "Frontend Developer"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "As a Frontend developer, it is important to work with a good designer. I had the pleasure of working with Katarina and I am impressed with her professionalism and dedication. Also, her communication skills and working ethics are amazing. I\u2019d highly recommend her."
        }
    },
    {
        "title": {
            "text": "Marko Milosavljevic",
            "href": "https://www.linkedin.com/in/marko-milosavljevi%C4%87-a73891173/"
        },
        "about": [
            {
                "text": "Product Designer"
            },
            {
                "text": "Worked on the same team at Brom"
            }
        ],
        "quote": {
            "text": "Katarina is outstanding person, always cheerful and ready to help. During time we worked together (she was a manager on few projects I worked at) her efforts and energy were off the charts. Her ability to look things through various perspectives served as a catalyst in many situations."
        }
    },
    {
        "title": {
            "text": "Mahmoud Ibrahim",
            "href": "https://www.linkedin.com/in/imahmoudibrahim/"
        },
        "about": [
            {
                "text": "Product Design Lead"
            },
            {
                "text": "Cooperated at ADPList"
            }
        ],
        "quote": {
            "text": "Not only is she talented and ambitious but her delightful personality makes her a pleasure to work with. Her skills are unmatched, and she approaches challenges with persistence and diligence. Her dedication and hard work make her an invaluable asset to any company."
        }
    },
    {
        "title": {
            "text": "Chris Cheng",
            "href": "https://www.linkedin.com/in/chris-cheng-hk/"
        },
        "about": [
            {
                "text": "Creative Director"
            },
            {
                "text": "Worked on the same team at Ink"
            }
        ],
        "quote": {
            "text": "I had the pleasure of working with Katarina as a UX/UI designer and highly recommend her for her exceptional design skills. Katarina has the unique ability to design visually appealing and effective UX/UI for a variety of media, including apps and specific device screens."
        }
    }
];


function $c5c167a0da33ed55$var$referralSlider() {
    let currentSlideIndex = 0;
    const showSlide = (slide, index, is_left = null)=>{
        const projectContainer = document.getElementById(slide);
        projectContainer.classList.remove("fade-out");
        projectContainer.classList.remove("fade-in");
        projectContainer.offsetWidth;
        if (is_left === false) projectContainer.classList.add("fade-out");
        else if (is_left === true) projectContainer.classList.add("fade-in");
        setTimeout(()=>{
            let referral = $7e95c06c893d19d7$exports[index];
            // Get the h5 element with the link
            const h5Element = document.getElementById(slide).querySelector("h5 a");
            // Get all p2 elements within the slide2 div
            const p2Elements = document.getElementById(slide).querySelectorAll("p.p2");
            // Get the p1 element within the slide2 div
            const p1Element = document.getElementById(slide).querySelector("p.p1");
            // Example usage (modify as needed)
            if (h5Element) {
                // Change the link text and href
                h5Element.textContent = referral.title.text;
                h5Element.href = referral.title.href;
            }
            if (p2Elements.length == 2) {
                // Update text for each p2 element
                p2Elements[0].textContent = referral.about[0].text;
                p2Elements[1].textContent = referral.about[1].text;
            }
            if (p1Element) // Update text for the p1 element
            p1Element.textContent = referral.quote.text;
        }, is_left == null ? 0 : 600);
    };
    function preventGetInTouch(event) {
        // does not disable selection
        event.preventDefault();
    }
    const caretLeft = document.getElementById("caretLeftRef");
    const caretRight = document.getElementById("caretRightRef");
    if (caretLeft) {
        caretLeft.addEventListener("click", ()=>{
            currentSlideIndex = (currentSlideIndex - 1 + $7e95c06c893d19d7$exports.length) % $7e95c06c893d19d7$exports.length;
            showSlide("slide1", currentSlideIndex, true);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex - 1 + $7e95c06c893d19d7$exports.length) % $7e95c06c893d19d7$exports.length;
                showSlide("slide2", currentSlideIndex, true);
            }
        });
        caretLeft.addEventListener("dblclick", preventGetInTouch);
    }
    if (caretRight) {
        caretRight.addEventListener("click", ()=>{
            currentSlideIndex = (currentSlideIndex + 1) % $7e95c06c893d19d7$exports.length;
            showSlide("slide1", currentSlideIndex, false);
            const isSlide2 = document.getElementById("slide2").offsetParent === null;
            if (!isSlide2) {
                currentSlideIndex = (currentSlideIndex + 1) % $7e95c06c893d19d7$exports.length;
                showSlide("slide2", currentSlideIndex, false);
            }
        });
        caretRight.addEventListener("dblclick", preventGetInTouch);
    }
    // Initial call to display the first slide
    showSlide("slide1", currentSlideIndex);
    const isSlide2 = document.getElementById("slide2").offsetParent === null;
    if (!isSlide2) {
        currentSlideIndex = (currentSlideIndex + 1) % $7e95c06c893d19d7$exports.length;
        showSlide("slide2", currentSlideIndex);
    }
}
var $c5c167a0da33ed55$export$2e2bcd8739ae039 = $c5c167a0da33ed55$var$referralSlider;


const $de0be4d41d268ee4$export$6f57813fe9f31bf9 = {
    _origin: "https://api.emailjs.com"
};


const $56c400a2d9db4faa$export$2cd8252107eb640b = (userID, origin = "https://api.emailjs.com")=>{
    (0, $de0be4d41d268ee4$export$6f57813fe9f31bf9)._userID = userID;
    (0, $de0be4d41d268ee4$export$6f57813fe9f31bf9)._origin = origin;
};



const $5abb247cdbd37cf5$export$1f3bf48e9edf7d72 = (userID, serviceID, templateID)=>{
    if (!userID) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!serviceID) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!templateID) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return true;
};


class $cd3affa0639c1982$export$29b488039e3d4c2d {
    constructor(httpResponse){
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}



const $5e634322f8b874ac$export$4a68059d3a005c64 = (url, data, headers = {})=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", ({ target: target })=>{
            const responseStatus = new (0, $cd3affa0639c1982$export$29b488039e3d4c2d)(target);
            if (responseStatus.status === 200 || responseStatus.text === "OK") resolve(responseStatus);
            else reject(responseStatus);
        });
        xhr.addEventListener("error", ({ target: target })=>{
            reject(new (0, $cd3affa0639c1982$export$29b488039e3d4c2d)(target));
        });
        xhr.open("POST", (0, $de0be4d41d268ee4$export$6f57813fe9f31bf9)._origin + url, true);
        Object.keys(headers).forEach((key)=>{
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


const $4e47e6c77f4f8159$export$89db4734f6c919c4 = (serviceID, templateID, templatePrams, userID)=>{
    const uID = userID || (0, $de0be4d41d268ee4$export$6f57813fe9f31bf9)._userID;
    (0, $5abb247cdbd37cf5$export$1f3bf48e9edf7d72)(uID, serviceID, templateID);
    const params = {
        lib_version: "3.2.0",
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams
    };
    return (0, $5e634322f8b874ac$export$4a68059d3a005c64)("/api/v1.0/email/send", JSON.stringify(params), {
        "Content-type": "application/json"
    });
};





const $78208e108a8913d3$var$findHTMLForm = (form)=>{
    let currentForm;
    if (typeof form === "string") currentForm = document.querySelector(form);
    else currentForm = form;
    if (!currentForm || currentForm.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return currentForm;
};
const $78208e108a8913d3$export$c13a0f9407ffb567 = (serviceID, templateID, form, userID)=>{
    const uID = userID || (0, $de0be4d41d268ee4$export$6f57813fe9f31bf9)._userID;
    const currentForm = $78208e108a8913d3$var$findHTMLForm(form);
    (0, $5abb247cdbd37cf5$export$1f3bf48e9edf7d72)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append("lib_version", "3.2.0");
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", uID);
    return (0, $5e634322f8b874ac$export$4a68059d3a005c64)("/api/v1.0/email/send-form", formData);
};


var $9b1863415a89d938$export$2e2bcd8739ae039 = {
    init: $56c400a2d9db4faa$export$2cd8252107eb640b,
    send: $4e47e6c77f4f8159$export$89db4734f6c919c4,
    sendForm: $78208e108a8913d3$export$c13a0f9407ffb567
};


function $93755ce4a9d5fca0$var$initializeMailService() {
    // Initialize EmailJS
    const errorMessage = document.getElementById("errorMessageLbl");
    const submitButton = document.getElementById("submitBtn");
    const errorSvg = document.getElementById("emailErrorSvg");
    const successSvg = document.getElementById("emailSuccessSvg");
    const hideAll = ()=>{
        errorSvg.style.display = "none";
        successSvg.style.display = "none";
        errorMessage.textContent = "  ";
        submitButton.textContent = "Send an email";
    };
    const showError = (errorMsg)=>{
        errorSvg.style.display = "flex";
        successSvg.style.display = "none";
        errorMessage.classList.remove("success");
        errorMessage.textContent = errorMsg;
        submitButton.textContent = "Send an email";
        setTimeout(()=>hideAll(), 10000);
    };
    const showSuccess = ()=>{
        errorSvg.style.display = "none";
        successSvg.style.display = "flex";
        errorMessage.classList.add("success");
        errorMessage.textContent = "Email has been successfully sent.";
        submitButton.textContent = "Send an email";
        setTimeout(()=>hideAll(), 10000);
    };
    (0, $9b1863415a89d938$export$2e2bcd8739ae039).init("IzMq_xMg2idAmujzL"); // Replace with your EmailJS public key
    document.getElementById("contactForm").addEventListener("submit", async function(e) {
        e.preventDefault(); // Prevent default form submission
        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value; //.trim();
        // Form validation
        if (!name || !email || !message) {
            showError("Check the inputs and resend an email.");
            return;
        }
        // Hide any previous error message
        hideAll();
        // Disable the button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        const templateParams = {
            to_name: "Katarina",
            from_name: name,
            message: message,
            from_mail: email,
            email: "katarinamaric1512@gmail.com"
        };
        (0, $9b1863415a89d938$export$2e2bcd8739ae039).send("service_5n33lwg", "template_qow2oc2", templateParams).then((response)=>{
            // console.log("Email sent successfully!", response.status, response.text);
            showSuccess();
        }, (error)=>{
            // Show the error message if the email fails to send
            showError("Something went wrong while sending your email. Please try again later.");
            console.error("Failed to send email:", error);
        }).finally(()=>{
            // Re-enable the button and hide the spinner
            submitButton.disabled = false;
            submitButton.textContent = "Send an email";
        });
    });
}
var $93755ce4a9d5fca0$export$2e2bcd8739ae039 = $93755ce4a9d5fca0$var$initializeMailService;
















const $b7c199b352b952f8$var$image_adapter = {
    "html5.svg": (parcelRequire("krLb4")),
    "css3.svg": (parcelRequire("5lgF4")),
    "webflow.svg": (parcelRequire("3C4mz")),
    "figma.svg": (parcelRequire("h48DJ")),
    "python.svg": (parcelRequire("lrnLk")),
    "flask.svg": (parcelRequire("6jzHo")),
    "jinja.svg": (parcelRequire("4n97y")),
    "atlassian.svg": (parcelRequire("irb8g")),
    "typescript.svg": (parcelRequire("92ydA")),
    "notion.svg": (parcelRequire("a893d")),
    "slack.svg": (parcelRequire("i5dGP")),
    "discord.svg": (parcelRequire("6B3dd")),
    "google.svg": (parcelRequire("2BvTJ")),
    "js.svg": (parcelRequire("9kJnf"))
};
var $b7c199b352b952f8$export$2e2bcd8739ae039 = $b7c199b352b952f8$var$image_adapter;



const $4a19c3818b33e5e7$var$projects = Object.values((parcelRequire("Yf9FR")))[0];
let $4a19c3818b33e5e7$var$currentProjectIndex = 0;
const $4a19c3818b33e5e7$var$showProjectDesktop = (index, is_left = null)=>{
    const project = $4a19c3818b33e5e7$var$projects[index];
    if (!project) return;
    const projectContainer = document.querySelector(".desktop-project .frame");
    projectContainer.classList.remove("fade-out");
    projectContainer.classList.remove("fade-in");
    projectContainer.offsetWidth;
    if (is_left === true) projectContainer.classList.add("fade-out");
    else if (is_left === false) projectContainer.classList.add("fade-in");
    setTimeout(()=>{
        document.querySelector(".row-left h4").innerHTML = project.title;
        const clientLinks = project.client.map((client)=>`<a href="${client.href}" target="_blank">${client.text}</a>`).join(" ; ");
        document.querySelector(".row-right .p2").innerHTML = `Client: ${clientLinks}`;
        document.querySelector(".row-right .p2:nth-of-type(4)").textContent = project.timeframe;
        let stackContainer = document.querySelector(".row-stack");
        let images = stackContainer.querySelectorAll("img");
        images.forEach((img)=>{
            img.style.display = "none";
        });
        project.stack.forEach((tech)=>{
            const img = stackContainer.querySelector(`img[alt="${tech.split(".")[0]}"]`);
            if (img) img.style.display = "inline-block"; // Make the image visible
        });
        document.querySelector(".column-content:first-child p").innerHTML = project.overview.text;
        document.querySelector(".column-content:nth-of-type(2) p").innerHTML = project.role.text;
        const achievementsContainer = document.querySelectorAll(".achievements .row-wrap .column .p1");
        achievementsContainer.forEach((element, index)=>{
            if (project.achievements[index]) element.textContent = project.achievements[index];
            else element.textContent = ""; // Clear text if no corresponding achievement
        });
    }, is_left == null ? 0 : 600);
};
document.getElementById("caretLeftProj").addEventListener("click", ()=>{
    $4a19c3818b33e5e7$var$currentProjectIndex = ($4a19c3818b33e5e7$var$currentProjectIndex - 1 + $4a19c3818b33e5e7$var$projects.length) % $4a19c3818b33e5e7$var$projects.length;
    $4a19c3818b33e5e7$var$showProjectDesktop($4a19c3818b33e5e7$var$currentProjectIndex, true);
});
document.getElementById("caretRightProj").addEventListener("click", ()=>{
    $4a19c3818b33e5e7$var$currentProjectIndex = ($4a19c3818b33e5e7$var$currentProjectIndex + 1) % $4a19c3818b33e5e7$var$projects.length;
    $4a19c3818b33e5e7$var$showProjectDesktop($4a19c3818b33e5e7$var$currentProjectIndex, false);
});





function $4a19c3818b33e5e7$var$showProjectMobile() {
    const container = document.getElementById("mobile-projects");
    $4a19c3818b33e5e7$var$projects.forEach((project)=>{
        // Constructing client links dynamically
        const clientLinks = project.client.map((client)=>`<a href="${client.href}" target="_blank">${client.text}</a>`).join("; ");
        // Constructing tech stack images dynamically
        const techStackImages = project.stack.map((tech)=>`<img src=${(0, $b7c199b352b952f8$export$2e2bcd8739ae039)[tech]} alt="${tech.split(".")[0]}">`).join("");
        // Adding project HTML dynamically
        container.innerHTML += `
            <input type="checkbox" id="toggle-content-${project.title}" hidden aria-label="Toggle content visibility" />
            <div class="frame">
                <label class="lbl-frame" for="toggle-content-${project.title}">
                    <div class="row-wrap">
                        <div class="row-left">
                            <h4>${project.title}</h4>
                        </div>
                        <svg class="toggle-arrow" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.1156 14.9154C32.2317 14.7993 32.3696 14.7072 32.5213 14.6443C32.6731 14.5815 32.8357 14.5491 33 14.5491C33.1642 14.5491 33.3268 14.5815 33.4786 14.6443C33.6303 14.7072 33.7682 14.7993 33.8843 14.9154C34.0005 15.0316 34.0926 15.1694 34.1555 15.3212C34.2183 15.4729 34.2507 15.6356 34.2507 15.7998C34.2507 15.964 34.2183 16.1267 34.1555 16.2784C34.0926 16.4302 34.0005 16.568 33.8843 16.6842L21.3843 29.1842C21.2682 29.3004 21.1304 29.3926 20.9786 29.4555C20.8269 29.5184 20.6642 29.5508 20.5 29.5508C20.3357 29.5508 20.173 29.5184 20.0213 29.4555C19.8695 29.3926 19.7317 29.3004 19.6156 29.1842L7.11559 16.6842C6.88104 16.4496 6.74927 16.1315 6.74927 15.7998C6.74927 15.4681 6.88104 15.15 7.11559 14.9154C7.35014 14.6809 7.66826 14.5491 7.99996 14.5491C8.33167 14.5491 8.64979 14.6809 8.88434 14.9154L20.5 26.5326L32.1156 14.9154Z" fill="#CBCBCB"/>
                        </svg>
                    </div>
                </label>
            </div>
            <div class="content">
                <div class="column">
                    <div class="row-left">
                        <p class="p2">Client: ${clientLinks}</p>
                        <p class="p2"> | </p>
                        <p class="p2">Time frame:</p>
                        <p class="p2">${project.timeframe}</p>
                    </div>
                    <div class="row-stack">
                        ${techStackImages}
                    </div>
                </div>
                <div class="row-wrap">
                    <div class='column-content'>
                        <h5>Overview</h5>
                        <p class="p1">${project.overview.text}</p>
                    </div>
                    <div class='column-content'>
                        <h5>My role</h5>
                        <p class="p1">${project.role.text}</p>
                    </div>
                </div>
                <div class="achievements">
                    <div class="row-wrap">
                        <div class="column-achievements">
                            <img src=${(parcelRequire("czOWc"))} alt="clock svg">
                            <p class="p1">${project.achievements[0]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${(parcelRequire("ga5Rs"))} alt="handshake svg">
                            <p class="p1">${project.achievements[1]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${(parcelRequire("iirlz"))} alt="speed svg">
                            <p class="p1">${project.achievements[2]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${(parcelRequire("ibaFb"))} alt="speed svg">
                            <p class="p1">${project.achievements[3]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${(parcelRequire("5OC4D"))} alt="speed svg">
                            <p class="p1">${project.achievements[4]}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.querySelector(".mobile-project");
    const allContents = container.querySelectorAll(".content");
    const allArrows = // Close all other contents
    allContents.forEach((content)=>{
        content.style.opacity = "0";
        content.style.maxHeight = "0";
        content.style.padding = "0";
    });
    container.querySelectorAll(".toggle-arrow").forEach((arrow)=>arrow.classList.remove("rotate"));
    // Handle toggling content visibility
    container.addEventListener("click", (event)=>{
        const toggleLabel = event.target.closest(".lbl-frame");
        if (toggleLabel) {
            const currentFrame = toggleLabel.closest(".frame");
            const currentContent = currentFrame.nextElementSibling;
            const allContents = container.querySelectorAll(".content");
            const toggleArrow = toggleLabel.querySelector(".toggle-arrow");
            let isBefore = true;
            let offset = 0;
            // Close all other contents
            allContents.forEach((content)=>{
                if (content !== currentContent) {
                    if (isBefore && content.style.maxHeight !== "0px") // currentPosition = document.documentElement.scrollTop;  
                    offset += Math.round(content.getBoundingClientRect().top);
                    content.style.opacity = "0";
                    content.style.maxHeight = "0";
                    content.style.padding = "0";
                } else isBefore = false;
            });
            if (offset !== 0) {
                const topPosition = offset + window.scrollY - 100;
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth"
                });
            }
            container.querySelectorAll(".toggle-arrow").forEach((arrow)=>arrow.classList.remove("rotate"));
            // Toggle the current content
            const isOpen = currentContent.style.maxHeight !== "0px";
            isOpen ? toggleArrow.classList.remove("rotate") : toggleArrow.classList.add("rotate");
            currentContent.style.opacity = isOpen ? "0" : "1";
            currentContent.style.maxHeight = isOpen ? "0" : "400vh";
            currentContent.style.paddingTop = isOpen ? "0" : "2rem";
            currentContent.style.paddingBottom = isOpen ? "0" : "4rem";
        }
    });
});
// Function to detect if the user is on a mobile device
function $4a19c3818b33e5e7$var$isMobileDevice() {
    return window.innerWidth <= 768; // Example: Screen width <= 768px is considered mobile
}
// Function to initialize the correct project view
function $4a19c3818b33e5e7$var$initializeProjectView() {
    let mobileProjects = document.getElementById("mobile-projects");
    let desktopProjects = document.getElementById("desktop-project");
    if ($4a19c3818b33e5e7$var$isMobileDevice()) {
        if (mobileProjects.style.display != "flex") {
            mobileProjects.style.display = "flex";
            desktopProjects.style.display = "none";
        }
    } else if (desktopProjects.style.display != "flex") {
        $4a19c3818b33e5e7$var$showProjectDesktop($4a19c3818b33e5e7$var$currentProjectIndex); // Execute this function for desktop devices
        mobileProjects.style.display = "none";
        desktopProjects.style.display = "flex";
    }
}
//initial population of mobile version 
$4a19c3818b33e5e7$var$showProjectMobile(); // Execute this function for mobile devices
var $4a19c3818b33e5e7$export$2e2bcd8739ae039 = $4a19c3818b33e5e7$var$initializeProjectView;


// show header
let $8973aab45c5aa6ba$var$lastScrollTop = 0;
const $8973aab45c5aa6ba$var$header = document.querySelector("header");
window.addEventListener("scroll", function() {
    let scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, 0);
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // console.log(maxScroll)
    // Check if the nav menu is open
    if ($8973aab45c5aa6ba$var$navMobileLinks.classList.contains("open")) return;
    if (scrollTop >= maxScroll) $8973aab45c5aa6ba$var$header.style.top = "-90px"; // Adjust based on header height
    else if (scrollTop > $8973aab45c5aa6ba$var$lastScrollTop) // Scroll down - hide header
    $8973aab45c5aa6ba$var$header.style.top = "-90px"; // Adjust based on header height
    else // Scroll up - show header
    $8973aab45c5aa6ba$var$header.style.top = "0";
    $8973aab45c5aa6ba$var$lastScrollTop = scrollTop;
});
// mobile nav
let $8973aab45c5aa6ba$var$navBtn = document.getElementById("menuBtn");
let $8973aab45c5aa6ba$var$navMobileLinks = document.getElementById("nav-mobile-links");
let $8973aab45c5aa6ba$var$navOpened = false;
const $8973aab45c5aa6ba$var$mobileCta = document.getElementById("mobile-cta");
function $8973aab45c5aa6ba$var$setNavState() {
    if ($8973aab45c5aa6ba$var$navOpened) {
        $8973aab45c5aa6ba$var$navOpened = false;
        $8973aab45c5aa6ba$var$navBtn.classList.add("open");
        $8973aab45c5aa6ba$var$navMobileLinks.classList.add("open");
    } else {
        $8973aab45c5aa6ba$var$navOpened = true;
        $8973aab45c5aa6ba$var$navBtn.classList.remove("open");
        $8973aab45c5aa6ba$var$navMobileLinks.classList.remove("open");
    }
}
$8973aab45c5aa6ba$var$setNavState(); // initial state
$8973aab45c5aa6ba$var$mobileCta.addEventListener("click", ()=>{
    $8973aab45c5aa6ba$var$navOpened = false;
    $8973aab45c5aa6ba$var$setNavState();
});
$8973aab45c5aa6ba$var$navBtn.onclick = function() {
    $8973aab45c5aa6ba$var$setNavState();
};
$8973aab45c5aa6ba$var$navMobileLinks.querySelectorAll("a").forEach((link)=>{
    link.onclick = function() {
        $8973aab45c5aa6ba$var$navOpened = false;
        $8973aab45c5aa6ba$var$setNavState();
    };
});
// project view
(0, $4a19c3818b33e5e7$export$2e2bcd8739ae039)();
window.addEventListener("resize", (0, $4a19c3818b33e5e7$export$2e2bcd8739ae039));
(0, $c5c167a0da33ed55$export$2e2bcd8739ae039)();
(0, $93755ce4a9d5fca0$export$2e2bcd8739ae039)();
// section scrolling animation
document.addEventListener("DOMContentLoaded", ()=>{
    const sections = document.querySelectorAll("section");
    // Function to check if section is in the viewport
    const checkVisibility = ()=>{
        sections.forEach((section)=>{
            const rect = section.getBoundingClientRect();
            // Check if section is at least partially visible
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // If the section is in the viewport, add 'visible' class, remove 'appearing'
                section.classList.add("visible");
                section.classList.remove("appearing");
            } else {
                // If the section is not in the viewport, add 'appearing' class, remove 'visible'
                section.classList.add("appearing");
                section.classList.remove("visible");
            }
        });
    };
    // Throttle the scroll event
    let timeout;
    window.addEventListener("scroll", ()=>{
        if (timeout) clearTimeout(timeout); // Clear the previous timeout
        timeout = setTimeout(checkVisibility, 50); // Run the visibility check after 100ms of no scroll activity
    });
    // Run the check immediately on page load to ensure sections are visible as needed
    checkVisibility();
});


//# sourceMappingURL=index.f3c6c73f.js.map
