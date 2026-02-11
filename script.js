// ELEMENTS
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav-close");
const mobileDropdowns = document.querySelectorAll(".mobile-nav .nav-item.dropdown");

// OPEN MOBILE MENU
menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("active");
  mobileNav.setAttribute("aria-hidden", "false");
});

// CLOSE MOBILE MENU
mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  mobileNav.setAttribute("aria-hidden", "true");
});

// MOBILE DROPDOWN DRAWERS
mobileDropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector(".dropbtn");

  btn.addEventListener("click", e => {
    e.preventDefault(); // prevent anchor jump
    dropdown.classList.toggle("active");
  });
});

let lastScrollTop = 0; // Track the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)"; // Hide the navbar
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)"; // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});
