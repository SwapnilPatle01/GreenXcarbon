document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const currentPath = window.location.pathname;

  navItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

// Menu Bar Toggle
const menuBar = document.getElementById("menu-bar");
const navLinks = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBar.classList.toggle("open");
});

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particlesArray;

// Set canvas dimensions
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

resizeCanvas();

// Create particle class
class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.1) this.size -= 0.05; // Shrink effect
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fill();
  }
}

// Initialize particles
function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 1 - 0.5;
    const speedY = Math.random() * 1 - 0.5;

    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    // Respawn particles
    if (particlesArray[i].size <= 0.1) {
      particlesArray[i].x = Math.random() * canvas.width;
      particlesArray[i].y = Math.random() * canvas.height;
      particlesArray[i].size = Math.random() * 5 + 1;
    }
  }

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
document.addEventListener("DOMContentLoaded", () => {
  const metrics = {
    "carbon-sequestered": 15000,
    "trees-planted": 250000,
    "farmers-empowered": 1200,
    "acres-restored": 600,
  };

  Object.keys(metrics).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      let value = 0;
      const increment = Math.ceil(metrics[key] / 100);
      const interval = setInterval(() => {
        value += increment;
        if (value >= metrics[key]) {
          value = metrics[key];
          clearInterval(interval);
        }
        element.textContent =
          key === "carbon-sequestered"
            ? `${value} tons`
            : value.toLocaleString();
      }, 30);
    }
  });
});
