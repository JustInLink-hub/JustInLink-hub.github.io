const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const slides = [...document.querySelectorAll('.slide')];
const dotsContainer = document.querySelector('.dots');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');
let current = 0;
let autoPlay;

function showSlide(index) {
  if (!slides.length) return;
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  if (dotsContainer) {
    [...dotsContainer.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
  }
}

if (slides.length && dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => {
      showSlide(i);
      restartAuto();
    });
    dotsContainer.appendChild(dot);
  });
}

if (prevButton) prevButton.addEventListener('click', () => { showSlide(current - 1); restartAuto(); });
if (nextButton) nextButton.addEventListener('click', () => { showSlide(current + 1); restartAuto(); });

function startAuto() {
  if (slides.length > 1) autoPlay = setInterval(() => showSlide(current + 1), 5000);
}
function restartAuto() {
  clearInterval(autoPlay);
  startAuto();
}
startAuto();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
