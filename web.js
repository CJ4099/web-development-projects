// Toggle Blog Text
function toggleText(button) {
    const post = button.parentElement;
    const shortText = post.querySelector(".short-text");
    const fullText = post.querySelector(".full-text");

    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        button.innerText = "Read Less";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        button.innerText = "Read More";
    }
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("formMessage");

    message.innerText = "Thank you " + name + "! Your message has been sent.";
});

