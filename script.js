const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

/* Email Management / Inbox Zero sample: a client-safe visual case study. */
const emailStyle = document.createElement("style");
emailStyle.textContent = `
.email-case{position:relative;overflow:hidden}.email-case:before{content:"✉  ✓  ▱  ☆  ↗";position:absolute;right:4%;top:35px;font-size:24px;letter-spacing:14px;color:rgba(10,41,71,.045);pointer-events:none}.email-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center}.inbox-demo{background:#fffdf9;border:1px solid rgba(10,41,71,.14);border-radius:24px;padding:16px;box-shadow:0 18px 45px rgba(10,41,71,.10)}.inbox-top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 4px 14px}.inbox-title{font-family:"Playfair Display",Georgia,serif;color:#0a2947;font-size:22px}.inbox-count{padding:6px 10px;border-radius:999px;background:#f3e4c9;color:#0a2947;font-size:10px;font-weight:800}.inbox-tabs{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px}.inbox-tabs span{padding:7px 10px;border-radius:999px;background:#f8f4eb;color:#6c7379;font-size:9px;font-weight:700}.inbox-tabs span.active{background:#0a2947;color:white}.mail-row{display:grid;grid-template-columns:26px 1fr auto;gap:10px;align-items:center;padding:13px 10px;border-top:1px solid rgba(10,41,71,.09)}.mail-dot{width:10px;height:10px;border-radius:50%;background:#c89a45}.mail-row.done .mail-dot{background:#5c9b70}.mail-row strong{display:block;color:#0a2947;font-size:11px;line-height:1.3}.mail-row small{display:block;color:#6c7379;font-size:9px;line-height:1.4}.mail-tag{padding:5px 7px;border-radius:7px;background:#f3e4c9;color:#0a2947;font-size:8px;font-weight:800;white-space:nowrap}.mail-tag.green{background:#e7f2ea;color:#386846}.inbox-footer{display:flex;justify-content:space-between;gap:10px;margin-top:13px;padding:12px 10px;border-radius:12px;background:#f8f4eb;color:#6c7379;font-size:9px}.inbox-footer b{color:#0a2947}.email-copy h2{font-size:clamp(34px,4.5vw,52px);margin-bottom:16px}.email-copy>p{color:#6c7379;margin-bottom:22px}.email-points{display:grid;gap:12px}.email-point{display:grid;grid-template-columns:38px 1fr;gap:12px;align-items:start;padding:14px 16px;border:1px solid rgba(10,41,71,.14);border-radius:15px;background:#fffdf9}.email-point>span{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#f3e4c9;color:#0a2947;font-weight:800}.email-point b{display:block;color:#0a2947;font-size:14px;margin-bottom:2px}.email-point small{display:block;color:#6c7379;font-size:11px;line-height:1.5}.email-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:38px}.email-flow span{padding:12px 8px;text-align:center;border-radius:12px;background:#f3e4c9;color:#0a2947;font-size:10px;font-weight:800}.email-note{margin-top:25px;padding:15px 18px;border-left:3px solid #c89a45;background:#f8f4eb;border-radius:0 12px 12px 0;color:#6c7379;font-size:12px}@media(max-width:900px){.email-layout{grid-template-columns:1fr}.email-flow{grid-template-columns:repeat(5,1fr)}}@media(max-width:650px){.email-flow{grid-template-columns:repeat(2,1fr)}.mail-row{grid-template-columns:20px 1fr}.mail-tag{display:none}}
`;
document.head.appendChild(emailStyle);

const emailSection = document.createElement("section");
emailSection.id = "email-management";
emailSection.className = "section section-soft email-case";
emailSection.innerHTML = `
  <div class="container">
    <div class="center-heading reveal">
      <p class="eyebrow">08 • EMAIL MANAGEMENT</p>
      <h2>From inbox overload to a <em>clear workflow.</em></h2>
      <p>A sample of how I can organize email, prioritize messages, apply labels, follow up on important requests, and work toward Inbox Zero.</p>
    </div>
    <div class="email-layout">
      <div class="inbox-demo reveal" aria-label="Sample organized email inbox">
        <div class="inbox-top"><div class="inbox-title">Inbox</div><div class="inbox-count">0 unprocessed</div></div>
        <div class="inbox-tabs"><span class="active">Inbox</span><span>Important</span><span>Follow Up</span><span>Archive</span></div>
        <div class="mail-row done"><span class="mail-dot"></span><div><strong>Client inquiry — website support</strong><small>Reply sent • archived after action</small></div><span class="mail-tag green">DONE</span></div>
        <div class="mail-row done"><span class="mail-dot"></span><div><strong>Project brief and files</strong><small>Saved to project folder • labeled</small></div><span class="mail-tag green">FILED</span></div>
        <div class="mail-row"><span class="mail-dot"></span><div><strong>Follow-up: proposal</strong><small>Reminder created for next business day</small></div><span class="mail-tag">FOLLOW UP</span></div>
        <div class="mail-row done"><span class="mail-dot"></span><div><strong>Newsletter / promotional email</strong><small>Archived • removed from active inbox</small></div><span class="mail-tag green">ARCHIVE</span></div>
        <div class="mail-row done"><span class="mail-dot"></span><div><strong>Calendar confirmation</strong><small>Reviewed • calendar updated</small></div><span class="mail-tag green">DONE</span></div>
        <div class="inbox-footer"><span><b>Inbox Zero</b> = no unprocessed messages</span><span><b>5</b> actions completed</span></div>
      </div>
      <div class="email-copy reveal">
        <h2>Email support that keeps important messages <em>moving.</em></h2>
        <p>Instead of letting the inbox become another daily distraction, I can help create a simple system so messages are easier to review, act on, and find later.</p>
        <div class="email-points">
          <div class="email-point"><span>01</span><div><b>Prioritize</b><small>Separate urgent, important, routine, and low-priority messages.</small></div></div>
          <div class="email-point"><span>02</span><div><b>Organize</b><small>Use folders, labels, archives, and a consistent naming system.</small></div></div>
          <div class="email-point"><span>03</span><div><b>Follow Up</b><small>Flag messages that need a reply, reminder, or additional action.</small></div></div>
          <div class="email-point"><span>04</span><div><b>Keep It Clean</b><small>Archive completed conversations and reduce unnecessary inbox clutter.</small></div></div>
        </div>
        <div class="email-note">Portfolio sample only — this is a client-safe workflow illustration and does not display private emails or real client information.</div>
      </div>
    </div>
    <div class="email-flow reveal"><span>Review</span><span>Prioritize</span><span>Label</span><span>Action</span><span>Archive</span></div>
  </div>`;

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
      <p class="eyebrow">09 • CONTENT MANAGEMENT CASE STUDY</p>
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
if (processSection && !document.getElementById("email-management")) {
  processSection.parentNode.insertBefore(emailSection, processSection);
}
if (processSection && !document.getElementById("content-management")) {
  processSection.parentNode.insertBefore(caseSection, processSection);
}

/* Add direct navigation links without disturbing the existing layout. */
if (navLinks && !navLinks.querySelector('a[href="#email-management"]')) {
  const emailLink = document.createElement("a");
  emailLink.href = "#email-management";
  emailLink.textContent = "Email Management";
  navLinks.insertBefore(emailLink, navLinks.querySelector(".nav-cta"));
}
if (navLinks && !navLinks.querySelector('a[href="#content-management"]')) {
  const caseLink = document.createElement("a");
  caseLink.href = "#content-management";
  caseLink.textContent = "Case Study";
  navLinks.insertBefore(caseLink, navLinks.querySelector(".nav-cta"));
}

/* Keep section numbering consistent after adding the email sample and case study. */
const sectionLabels = document.querySelectorAll(".eyebrow");
sectionLabels.forEach(label => {
  label.textContent = label.textContent
    .replace("08 • HOW I WORK", "10 • HOW I WORK")
    .replace("09 • TOOLS I USE", "11 • TOOLS I USE")
    .replace("10 • WHAT YOU CAN EXPECT", "12 • WHAT YOU CAN EXPECT")
    .replace("11 • LET'S WORK TOGETHER", "13 • LET'S WORK TOGETHER");
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
