// Menu Bar Toggle
const menuBar = document.getElementById("menu-bar");
const navLinks = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBar.classList.toggle("open");
});

AOS.init({
  duration: 1200,
  easing: "ease-in-out",
});
// Add this to your JavaScript file or inline in your HTML
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".feature-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animationDelay = `${index * 0.2}s`;
    }, 100);
  });
});
// Add this to your JavaScript file or inline in your HTML
document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".logos");
  const logos = logoContainer.innerHTML; // Clone logos for infinite scroll
  logoContainer.innerHTML += logos; // Duplicate logos for smooth looping
});
// Add this script to your JavaScript file (e.g., scripts.js)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Hide loader and show main content
  loader.style.display = "none";
  content.style.display = "block";
});
