const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

/* Content Management case study: added from the user's VA training tracker sample. */
const caseStyle = document.createElement("style");
caseStyle.textContent = `
.content-case{position:relative;overflow:hidden}.content-case:before{content:"▦  ✓  #  ↗  ◇";position:absolute;right:4%;top:35px;font-size:24px;letter-spacing:14px;color:rgba(10,41,71,.045);pointer-events:none}.case-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:center}.tracker-frame{background:#fffdf9;border:1px solid rgba(10,41,71,.14);border-radius:24px;padding:14px;box-shadow:0 18px 45px rgba(10,41,71,.10);overflow:hidden}.tracker-frame img{display:block;width:100%;height:auto;border-radius:15px}.tracker-caption{margin-top:14px;text-align:center;font-size:11px;color:#6c7379}.case-copy h2{font-size:clamp(34px,4.5vw,52px);margin-bottom:16px}.case-copy>p{color:#6c7379;margin-bottom:22px}.case-points{display:grid;gap:12px}.case-point{display:grid;grid-template-columns:38px 1fr;gap:12px;align-items:start;padding:14px 16px;border:1px solid rgba(10,41,71,.14);border-radius:15px;background:#fffdf9}.case-point>span{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#f3e4c9;color:#0a2947;font-weight:800}.case-point b{display:block;color:#0a2947;font-size:14px;margin-bottom:2px}.case-point small{display:block;color:#6c7379;font-size:11px;line-height:1.5}.case-flow{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-top:38px}.case-flow span{padding:12px 8px;text-align:center;border-radius:12px;background:#f3e4c9;color:#0a2947;font-size:11px;font-weight:800}.case-note{margin-top:25px;padding:15px 18px;border-left:3px solid #c89a45;background:#f8f4eb;border-radius:0 12px 12px 0;color:#6c7379;font-size:12px}@media(max-width:900px){.case-layout{grid-template-columns:1fr}.case-flow{grid-template-columns:repeat(3,1fr)}}@media(max-width:650px){.case-flow{grid-template-columns:repeat(2,1fr)}}
`;
document.head.appendChild(caseStyle);

const caseSection = document.createElement("section");
caseSection.id = "content-management";
caseSection.className = "section content-case";
caseSection.innerHTML = `
  <div class="container">
    <div class="center-heading reveal">
      <p class="eyebrow">08 • CONTENT MANAGEMENT CASE STUDY</p>
      <h2>More than creating posts — I can <em>organize the workflow.</em></h2>
      <p>A sample content tracker from my VA training, showing how social media work can be planned, organized, reviewed, and prepared for publishing.</p>
    </div>
    <div class="case-layout">
      <div class="tracker-frame reveal">
        <a href="images/content-tracker.svg" target="_blank" rel="noopener noreferrer">
          <img src="images/content-tracker.svg" alt="Portfolio preview of a JustInLink content tracker showing content planning, captions, hashtags, visual type, and approval status">
        </a>
        <p class="tracker-caption">Click the tracker preview to open the full-size sample.</p>
      </div>
      <div class="case-copy reveal">
        <h2>Content planning that keeps everything <em>in one place.</em></h2>
        <p>This workflow demonstrates the practical side of social media support: keeping content details, captions, hashtags, visuals, timing, and status organized in one tracker.</p>
        <div class="case-points">
          <div class="case-point"><span>01</span><div><b>Content Calendar</b><small>Track channels, publishing days, dates, and scheduled times.</small></div></div>
          <div class="case-point"><span>02</span><div><b>Captions & Hashtags</b><small>Keep written content and supporting hashtags organized alongside each post.</small></div></div>
          <div class="case-point"><span>03</span><div><b>Visual Coordination</b><small>Connect each content idea with its visual type and creative asset.</small></div></div>
          <div class="case-point"><span>04</span><div><b>Status & Approval</b><small>Make it easy to see what is in progress, approved, or ready for the next step.</small></div></div>
        </div>
        <div class="case-note">Sample work from my VA training. Public portfolio version is presented as a clean, client-safe workflow example without private links or client information.</div>
      </div>
    </div>
    <div class="case-flow reveal"><span>Planning</span><span>Captions</span><span>Hashtags</span><span>Visuals</span><span>Approval</span><span>Publishing</span></div>
  </div>`;

const processSection = document.querySelector(".process-section");
if (processSection && !document.getElementById("content-management")) {
  processSection.parentNode.insertBefore(caseSection, processSection);
}

/* Add a direct navigation link without disturbing the existing layout. */
if (navLinks && !navLinks.querySelector('a[href="#content-management"]')) {
  const caseLink = document.createElement("a");
  caseLink.href = "#content-management";
  caseLink.textContent = "Case Study";
  navLinks.insertBefore(caseLink, navLinks.querySelector(".nav-cta"));
}

/* Keep section numbering consistent after adding the case study. */
const sectionLabels = document.querySelectorAll(".eyebrow");
sectionLabels.forEach(label => {
  label.textContent = label.textContent
    .replace("08 • HOW I WORK", "09 • HOW I WORK")
    .replace("09 • TOOLS I USE", "10 • TOOLS I USE")
    .replace("10 • WHAT YOU CAN EXPECT", "11 • WHAT YOU CAN EXPECT")
    .replace("11 • LET'S WORK TOGETHER", "12 • LET'S WORK TOGETHER");
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const slides = [...document.querySelectorAll(".slide")];
const dotsContainer = document.querySelector(".dots");
const dots = slides.map((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.type = "button";
  dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
  dot.addEventListener("click", () => {
    showSlide(i);
    restartAuto();
  });
  dotsContainer.appendChild(dot);
  return dot;
});

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
