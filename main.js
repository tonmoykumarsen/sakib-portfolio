document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill out all fields!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
});
