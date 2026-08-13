const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
let current = 0;
let autoPlay;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
}

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(current - 1);
  restartAuto();
});
document.querySelector(".next").addEventListener("click", () => {
  showSlide(current + 1);
  restartAuto();
});
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    restartAuto();
  });
});

function startAuto() {
  autoPlay = setInterval(() => showSlide(current + 1), 5000);
}
function restartAuto() {
  clearInterval(autoPlay);
  startAuto();
}
startAuto();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
