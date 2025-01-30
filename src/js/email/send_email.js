import emailjs from 'emailjs-com';

function initializeMailService(){
    // Initialize EmailJS
    const errorMessage = document.getElementById("errorMessageLbl");
    const submitButton = document.getElementById("submitBtn");
    const errorSvg =  document.getElementById("emailErrorSvg");
    const successSvg =  document.getElementById("emailSuccessSvg");

    const hideAll = () => {
        errorSvg.style.display = "none"
        successSvg.style.display = "none"
        errorMessage.textContent = "  "
        submitButton.textContent = "Send an email";
    }

    const showError = (errorMsg) => {
        errorSvg.style.display = "flex"
        successSvg.style.display = "none"
        errorMessage.classList.remove("success")
        errorMessage.textContent = errorMsg
        submitButton.textContent = "Send an email";
        setTimeout(() => hideAll(), 10000);
    }

    const showSuccess = () => {
        errorSvg.style.display = "none"
        successSvg.style.display = "flex"
        errorMessage.classList.add("success")
        errorMessage.textContent = "Email has been successfully sent."
        submitButton.textContent = "Send an email";
        setTimeout(() => hideAll(), 10000);
    }

    emailjs.init("IzMq_xMg2idAmujzL"); // Replace with your EmailJS public key
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value;//.trim();

        // Form validation
        if (!name || !email || !message) {
            showError("Check the inputs and resend an email.")
            return;
        }

        // Hide any previous error message
        hideAll()

        // Disable the button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const templateParams = {
            to_name: "Katarina",
            from_name: name, 
            message: message,
            from_mail: email,
            email: "katarinamaric1512@gmail.com",
        };

        emailjs
        .send("service_5n33lwg", "template_qow2oc2", templateParams)
        .then(
            (response) => {
            // console.log("Email sent successfully!", response.status, response.text);
            showSuccess()
            },
            (error) => {
            // Show the error message if the email fails to send
            showError("Something went wrong while sending your email. Please try again later.")
            console.error("Failed to send email:", error);
            }
        ).finally(() => {
            // Re-enable the button and hide the spinner
            submitButton.disabled = false;
            submitButton.textContent = "Send an email";
        });
    });
}

export default initializeMailService;