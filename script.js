// Interaction 1: Menu Realignment for Responsive Design (Bootstrap)
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  });

  // Adjust the menu automatically on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      navbarCollapse.classList.remove("show");
    }
  });
});

// Interaction 2 (Proposed): Scroll-based Content Animation
document.addEventListener("scroll", function () {
  const animatedSections = document.querySelectorAll(".animate-on-scroll");
  const windowBottom = window.innerHeight + window.scrollY;

  animatedSections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    // Add 'visible' class to sections that are in view
    if (windowBottom >= sectionTop + 50) {
      section.classList.add("visible");
    }
  });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  let valid = true;

  // Reset previous error messages
  name.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  message.classList.remove("is-invalid");

  // Name validation
  if (name.value.trim() === "") {
    name.classList.add("is-invalid");
    valid = false;
  }

  // Email validation (basic pattern)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
    email.classList.add("is-invalid");
    valid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    message.classList.add("is-invalid");
    valid = false;
  }

  // Prevent form submission if validation fails
  if (!valid) {
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
    window.location.href = "index.html";
  }
});
