// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }

  // Here you would typically send the data to your server
  console.log("Form submitted:", formData)

  // Show success message (you can customize this)
  alert("Thank you for your message! I will get back to you soon.")

  // Reset form
  this.reset()
})

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
