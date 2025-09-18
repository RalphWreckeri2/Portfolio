document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_38a27a4", "template_p1v9ddf", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, (error) => {
      console.error("Error:", error);
      alert("❌ Failed to send message.");
    });
});


// Smooth scrolling for navigation (if needed)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
