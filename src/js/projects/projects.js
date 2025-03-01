const projects = Object.values(require('../../data/projects.yaml'))[0];
import image_adapter from "./image_adapter";

let currentProjectIndex = 0;

const showProjectDesktop = (index, is_left = null) => {
    const project = projects[index];
    if (!project) return;
    
    const projectContainer = document.querySelector(".desktop-project .frame");

    projectContainer.classList.remove('fade-out');
    projectContainer.classList.remove('fade-in');
    void projectContainer.offsetWidth;

    if (is_left === true){
        projectContainer.classList.add('fade-out');
    }else if (is_left === false){
        projectContainer.classList.add('fade-in');
    }

    setTimeout(() => {
        document.querySelector(".row-left h5").innerHTML = project.title;

        const clientLinks = project.client.map(client =>
            `<a href="${client.href}" target="_blank">${client.text}</a>`
        ).join(" ; ");
        document.querySelector(".row-right .p2").innerHTML = `Client: ${clientLinks}`;

        document.querySelector(".row-right .p2:nth-of-type(4)").textContent = project.timeframe;

        let stackContainer = document.querySelector(".row-stack");
        let images = stackContainer.querySelectorAll("img");
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
    }, is_left == null? 0 : 600);

};

document.getElementById("caretLeftProj").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProjectDesktop(currentProjectIndex, true);
});

document.getElementById("caretRightProj").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProjectDesktop(currentProjectIndex, false);
});

function showProjectMobile() {
    const container = document.getElementById('mobile-projects');

    projects.forEach(project => {
        // Constructing client links dynamically
        const clientLinks = project.client.map(client =>
            `<a href="${client.href}" target="_blank">${client.text}</a>`
        ).join("; ");

        // Constructing tech stack images dynamically
        const techStackImages = project.stack.map(tech =>
            `<img src=${image_adapter[tech]} alt="${tech.split('.')[0]}">`
        ).join("");

        // Adding project HTML dynamically
        container.innerHTML += `
            <input type="checkbox" id="toggle-content-${project.title}" hidden aria-label="Toggle content visibility" />
            <div class="frame">
                <label class="lbl-frame" for="toggle-content-${project.title}">
                    <div class="row-wrap">
                        <div class="row-left">
                            <h5>${project.title}</h5>
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
                            <img src=${require("/src/images/projects/icons/clock.svg")} alt="clock svg">
                            <p class="p1">${project.achievements[0]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("/src/images/projects/icons/handshake.svg")} alt="handshake svg">
                            <p class="p1">${project.achievements[1]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("/src/images/projects/icons/speed.svg")} alt="speed svg">
                            <p class="p1">${project.achievements[2]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("/src/images/projects/icons/monitor.svg")} alt="speed svg">
                            <p class="p1">${project.achievements[3]}</p>
                        </div>
                        <div class="column-achievements">
                            <img src=${require("/src/images/projects/icons/code.svg")} alt="speed svg">
                            <p class="p1">${project.achievements[4]}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".mobile-project");
    const allContents = container.querySelectorAll(".content");
    const allArrows = 
    // Close all other contents
    allContents.forEach(content => {
        content.style.opacity = "0";
        content.style.maxHeight = "0";
        content.style.padding= "0"; 
    });
    container.querySelectorAll(".toggle-arrow").forEach(arrow => arrow.classList.remove("rotate"))

    // Handle toggling content visibility
    container.addEventListener("click", (event) => {
        const toggleLabel = event.target.closest(".lbl-frame");
        if (toggleLabel) {
            const currentFrame = toggleLabel.closest(".frame");
            const currentContent = currentFrame.nextElementSibling;
            const allContents = container.querySelectorAll(".content");
            const toggleArrow = toggleLabel.querySelector(".toggle-arrow");

            let isBefore = true;
            let offset = 0;
            // Close all other contents
            allContents.forEach(content => {
                if (content !== currentContent) {
                    if (isBefore && content.style.maxHeight !== "0px"){
                        // currentPosition = document.documentElement.scrollTop;  
                        offset += Math.round(content.getBoundingClientRect().top);  
                    }
                    content.style.opacity = "0";
                    content.style.maxHeight = "0";
                    content.style.padding= "0"; 
                }
                else{
                    isBefore = false;
                }
            });
            if (offset !== 0){
                const topPosition = offset  + window.scrollY - 100; 
                window.scrollTo({ top: topPosition, behavior: "smooth" });
            }
            container.querySelectorAll(".toggle-arrow").forEach(arrow => arrow.classList.remove("rotate"))
            // Toggle the current content
            const isOpen = currentContent.style.maxHeight !== "0px";
            isOpen ? toggleArrow.classList.remove("rotate") :  toggleArrow.classList.add("rotate") ;
            currentContent.style.opacity = isOpen ? "0" : "1";
            currentContent.style.maxHeight = isOpen ? "0" : "400vh";
            currentContent.style.paddingTop = isOpen ? "0"  : "2rem";
            currentContent.style.paddingBottom = isOpen ? "0"  : "4rem";

            }
    });
});

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return window.innerWidth <= 768; // Example: Screen width <= 768px is considered mobile
}

// Function to initialize the correct project view
function initializeProjectView() {
    let mobileProjects = document.getElementById('mobile-projects');
    let desktopProjects = document.getElementById('desktop-project');
    if (isMobileDevice()) {
        if (mobileProjects.style.display != 'flex'){
            mobileProjects.style.display = 'flex'
            desktopProjects.style.display= 'none' 
        }
    } else {
        if (desktopProjects.style.display != 'flex'){
            showProjectDesktop(currentProjectIndex); // Execute this function for desktop devices
            mobileProjects.style.display = 'none'
            desktopProjects.style.display = 'flex' 
        }
    }
}
//initial population of mobile version 
showProjectMobile(); // Execute this function for mobile devices

export default initializeProjectView;