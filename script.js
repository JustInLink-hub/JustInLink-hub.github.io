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

/* Hire-me section: turn the portfolio into a clearer client decision path. */
const contactSection = document.querySelector('#contact');
if (contactSection && !document.querySelector('#delegate')) {
  const delegate = document.createElement('section');
  delegate.id = 'delegate';
  delegate.className = 'section delegate-section';
  delegate.innerHTML = `
    <div class="container">
      <div class="center-heading reveal">
        <p class="eyebrow">08 • WHAT YOU CAN HAND OFF</p>
        <h2>Start with the tasks that <em>take your time away.</em></h2>
        <p>You don't have to hand over everything at once. Start with a few recurring tasks and build a workflow that works for your business.</p>
      </div>
      <div class="delegate-grid">
        <article class="delegate-card reveal">
          <span class="delegate-icon">✦</span>
          <span class="delegate-label">KEEP CONTENT MOVING</span>
          <h3>Social Media & Content</h3>
          <p>Hand off content planning, captions, visual organization, carousels, and single-image post support so your online presence stays consistent.</p>
          <div class="tag-row"><span>Planning</span><span>Captions</span><span>Visuals</span></div>
        </article>
        <article class="delegate-card reveal">
          <span class="delegate-icon">▣</span>
          <span class="delegate-label">KEEP THINGS ORGANIZED</span>
          <h3>Admin & Data</h3>
          <p>Hand off document handling, file organization, data entry, spreadsheet tasks, research, and content tracking that keep getting pushed aside.</p>
          <div class="tag-row"><span>Files</span><span>Sheets</span><span>Research</span></div>
        </article>
        <article class="delegate-card reveal">
          <span class="delegate-icon">✉</span>
          <span class="delegate-label">KEEP LEADS MOVING</span>
          <h3>Email & Lead Support</h3>
          <p>Hand off Mailchimp landing pages, sign-up forms, lead organization, and simple email-related workflows that support audience growth.</p>
          <div class="tag-row"><span>Mailchimp</span><span>Leads</span><span>Follow-up</span></div>
        </article>
      </div>
      <div class="delegate-cta reveal">
        <div><strong>Not sure where to start?</strong><span>Tell me the tasks taking up your time, and we can identify a simple place to begin.</span></div>
        <a class="btn btn-primary" href="https://calendly.com/brian-larracas/30min" target="_blank" rel="noopener noreferrer">Let's Talk ↗</a>
      </div>
    </div>`;
  contactSection.parentNode.insertBefore(delegate, contactSection);

  const style = document.createElement('style');
  style.textContent = `
    .delegate-section{background:var(--cream2)}
    .delegate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .delegate-card{background:#fff;border:1px solid var(--border);border-radius:22px;padding:28px 24px;box-shadow:0 10px 30px rgba(10,41,71,.05);transition:.25s}
    .delegate-card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
    .delegate-icon{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:var(--cream);color:var(--navy);font-size:19px;margin-bottom:18px}
    .delegate-label{display:block;color:var(--gold);font-size:9px;font-weight:900;letter-spacing:.14em;margin-bottom:8px}
    .delegate-card h3{font-size:24px;margin-bottom:10px}
    .delegate-card p{font-size:12px;color:var(--muted);line-height:1.7}
    .delegate-cta{margin-top:22px;padding:22px 25px;background:var(--navy);border-radius:20px;display:flex;align-items:center;justify-content:space-between;gap:20px;color:#fff}
    .delegate-cta div{display:grid;gap:3px}.delegate-cta strong{font:700 20px "Playfair Display",Georgia,serif}.delegate-cta span{font-size:12px;color:rgba(255,255,255,.72)}
    @media(max-width:900px){.delegate-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:650px){.delegate-grid{grid-template-columns:1fr}.delegate-cta{flex-direction:column;align-items:flex-start}.delegate-cta .btn{width:100%}}
  `;
  document.head.appendChild(style);

  const aboutLink = document.querySelector('.nav-links a[href="#about"]');
  if (aboutLink) {
    const hireLink = document.createElement('a');
    hireLink.href = '#delegate';
    hireLink.textContent = 'Hire Me';
    aboutLink.parentNode.insertBefore(hireLink, aboutLink);
    hireLink.addEventListener('click', () => navLinks && navLinks.classList.remove('open'));
  }
}

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
