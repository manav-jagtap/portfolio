// ============================================
// MANAV JAGTAP PORTFOLIO JAVASCRIPT
// ============================================

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        navLinks.classList.toggle("show");
        const isOpen = navLinks.classList.contains("show");
        menuBtn.textContent = isOpen ? "✕" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("show");
            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}

// Theme
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const useLight = savedTheme === "light";
    document.body.classList.toggle("light-theme", useLight);
    themeBtn.textContent = useLight ? "🌙" : "☀️";
    themeBtn.setAttribute("aria-label", useLight ? "Switch to dark mode" : "Switch to light mode");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        themeBtn.textContent = isLight ? "🌙" : "☀️";
        themeBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
        localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    });
}

// Terminal typing effect
const terminalText = document.getElementById("terminalText");
const terminalMessages = [
    "whoami",
    "Aspiring Full Stack Developer",
    "Cloud & Azure Enthusiast",
    "Python + Django Developer",
    "Building. Learning. Growing."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeTerminal() {
    if (!terminalText) return;
    const currentMessage = terminalMessages[messageIndex];

    if (!deleting) {
        terminalText.textContent = currentMessage.substring(0, characterIndex + 1);
        characterIndex++;
        if (characterIndex === currentMessage.length) {
            deleting = true;
            setTimeout(typeTerminal, 1300);
            return;
        }
    } else {
        terminalText.textContent = currentMessage.substring(0, characterIndex - 1);
        characterIndex--;
        if (characterIndex === 0) {
            deleting = false;
            messageIndex = (messageIndex + 1) % terminalMessages.length;
        }
    }

    setTimeout(typeTerminal, deleting ? 35 : 70);
}

typeTerminal();

// Featured projects
const projectsGrid = document.querySelector("#projects .cards");
if (projectsGrid) {
    projectsGrid.className = "cards two";
    projectsGrid.innerHTML = `
        <article class="card project">
            <div class="project-image">
                <img src="images/projects/cloudwise-dashboard.png" alt="CloudWise cloud optimization dashboard">
            </div>
            <div class="project-top">
                <div><span class="project-badge">Cloud / FinOps</span></div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a href="https://github.com/manav-jagtap/CloudWise" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://cloudwise-afx3.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
                </div>
            </div>
            <h3>☁️ CloudWise</h3>
            <p class="project-tagline">Multi-cloud cost and resource optimization platform that analyzes utilization data and identifies practical cost-saving opportunities.</p>
            <h4>Key Features</h4>
            <ul class="project-features">
                <li>Supports Azure, AWS, GCP, and manual provider-style datasets</li>
                <li>Detects idle, underutilized, normal, and overutilized resources</li>
                <li>Generates priority scores, recommendations, and savings estimates</li>
                <li>Provides dashboard analytics and top optimization opportunities</li>
                <li>Exports analysis reports as CSV and PDF</li>
            </ul>
            <div class="chips"><span>Python</span><span>Django</span><span>Pandas</span><span>Chart.js</span><span>FinOps</span></div>
        </article>

        <article class="card project">
            <div class="project-image">
                <img src="images/projects/eventhub-banner.jpg?v=4" alt="EventHub homepage banner">
            </div>
            <div class="project-top">
                <div><span class="project-badge">Event Management</span></div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a href="https://github.com/manav-jagtap/EventManagement" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://eventmanagement-8ndb.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
                </div>
            </div>
            <h3>🎟️ EventHub</h3>
            <p class="project-tagline">Event management and digital ticketing platform for attendees, organizers, and administrators with complete registration workflows.</p>
            <h4>Key Features</h4>
            <ul class="project-features">
                <li>Event discovery with search, categories, and city filters</li>
                <li>Capacity-aware registration with automatic FIFO waitlisting</li>
                <li>Unique QR-based digital tickets for confirmed attendees</li>
                <li>Organizer ticket verification and attendee check-in</li>
                <li>Event analytics with attendance and registration insights</li>
            </ul>
            <div class="chips"><span>Python</span><span>Django</span><span>Bootstrap</span><span>Chart.js</span><span>QR Code</span></div>
        </article>

        <article class="card project">
            <div class="project-image">
                <img src="images/projects/turfpay-banner.jpg?v=4" alt="TurfPay homepage banner">
            </div>
            <div class="project-top">
                <div><span class="project-badge">Booking Platform</span></div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a href="https://github.com/manav-jagtap/TurfPay" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://turfpay.onrender.com/" target="_blank" rel="noreferrer">Live Demo ↗</a>
                </div>
            </div>
            <h3>⚽ TurfPay</h3>
            <p class="project-tagline">Sports turf discovery and booking platform with separate customer, turf-owner, and administrator workflows.</p>
            <h4>Key Features</h4>
            <ul class="project-features">
                <li>Search and filter local turfs by sport, location, and price</li>
                <li>Book available time slots with duplicate-booking protection</li>
                <li>Customer booking history and cancellation management</li>
                <li>Dedicated turf-owner dashboard and booking management</li>
                <li>Production deployment with Render and Neon PostgreSQL</li>
            </ul>
            <div class="chips"><span>Python</span><span>Django</span><span>PostgreSQL</span><span>Render</span><span>Booking System</span></div>
        </article>

        <article class="card project">
            <div class="project-image">
                <img src="images/projects/prepx-dashboard.png" alt="PrepX student dashboard">
            </div>
            <div class="project-top">
                <div><span class="project-badge">Team Full Stack Project</span></div>
                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a href="https://github.com/PrepX-Team/PrepX" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
            </div>
            <h3>🧠 PrepX</h3>
            <p class="project-tagline">Smart MCQ examination and result generation system designed for student, teacher, and administrator workflows.</p>
            <h4>Key Features</h4>
            <ul class="project-features">
                <li>Role-based authentication for students, teachers, and admins</li>
                <li>Private question-bank and structured practice workflows</li>
                <li>Exam management with timer, randomization, and scoring logic</li>
                <li>Automated results, analytics, and performance tracking</li>
                <li>Team-based Django project with PostgreSQL production support</li>
            </ul>
            <div class="chips"><span>Python</span><span>Django</span><span>DRF</span><span>Bootstrap</span><span>PostgreSQL</span></div>
        </article>
    `;
}

// Certifications
const hackerRankProfile = "https://www.hackerrank.com/profile/jmanavd";
const certificationsGrid = document.querySelector("#certifications .cards");

if (certificationsGrid) {
    certificationsGrid.className = "cards three";
    certificationsGrid.innerHTML = `
        <article class="card certification-card">
            <div class="certification-top"><span class="certification-badge certified">Certified</span><span class="certification-icon">☁️</span></div>
            <small>Microsoft Certified</small>
            <h3>Microsoft Azure Fundamentals (AZ-900)</h3>
            <p>Validates foundational knowledge of cloud concepts, Azure services, pricing, security, governance and support.</p>
            <div class="chips"><span>Azure</span><span>Cloud</span><span>Fundamentals</span></div>
        </article>

        <article class="card certification-card">
            <div class="certification-top"><span class="certification-badge certified">Certified</span><span class="certification-icon">🐍</span></div>
            <small>HackerRank Skills Certification</small>
            <h3>Python (Basic)</h3>
            <p>Demonstrates foundational Python skills including data types, collections, functions, control flow, strings and OOP basics.</p>
            <div class="chips"><span>Python</span><span>Functions</span><span>Collections</span><span>OOP Basics</span></div>
            <a class="certificate-link" href="${hackerRankProfile}" target="_blank" rel="noreferrer">View HackerRank Profile ↗</a>
        </article>

        <article class="card certification-card">
            <div class="certification-top"><span class="certification-badge certified">Certified</span><span class="certification-icon">🗄️</span></div>
            <small>HackerRank Skills Certification</small>
            <h3>SQL (Basic)</h3>
            <p>Demonstrates foundational SQL skills including queries, filtering, joins, relational data and database operations.</p>
            <div class="chips"><span>SQL</span><span>MySQL</span><span>JOIN</span><span>Queries</span></div>
            <a class="certificate-link" href="${hackerRankProfile}" target="_blank" rel="noreferrer">View HackerRank Profile ↗</a>
        </article>

        <article class="card certification-card">
            <div class="certification-top"><span class="certification-badge certified">Certified</span><span class="certification-icon">☕</span></div>
            <small>HackerRank Skills Certification</small>
            <h3>Java (Basic)</h3>
            <p>Demonstrates foundational Java skills including classes, methods, collections, method overloading and core OOP concepts.</p>
            <div class="chips"><span>Java</span><span>OOP</span><span>Collections</span><span>Methods</span></div>
            <a class="certificate-link" href="${hackerRankProfile}" target="_blank" rel="noreferrer">View HackerRank Profile ↗</a>
        </article>

        <article class="card certification-card">
            <div class="certification-top"><span class="certification-badge in-progress">In Progress</span><span class="certification-icon">🛠️</span></div>
            <small>Microsoft Certification Path</small>
            <h3>Microsoft Azure Administrator (AZ-104)</h3>
            <p>Currently preparing for AZ-104 to strengthen hands-on skills in Azure identities, governance, storage, networking, compute and monitoring.</p>
            <div class="chips"><span>Azure</span><span>Administration</span><span>In Progress</span></div>
        </article>
    `;
}

// HackerRank link in Contact only
const contactLinks = document.querySelector("#contact .contact-links");
if (contactLinks && !contactLinks.querySelector(".hackerrank-contact-link")) {
    contactLinks.insertAdjacentHTML("beforeend", `
        <a class="btn hackerrank-contact-link" href="${hackerRankProfile}" target="_blank" rel="noreferrer">HackerRank</a>
    `);
}

// Extra styles
if (!document.getElementById("hackerrank-certification-styles")) {
    const certificationStyles = document.createElement("style");
    certificationStyles.id = "hackerrank-certification-styles";
    certificationStyles.textContent = `
        .certificate-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 22px;
            padding: 9px 15px;
            border-radius: 10px;
            border: 1px solid rgba(56, 189, 248, 0.28);
            color: var(--primary);
            font-size: 0.82rem;
            font-weight: 800;
            position: relative;
            z-index: 1;
            transition: var(--transition);
        }
        .certificate-link:hover {
            background: rgba(56, 189, 248, 0.1);
            border-color: var(--primary);
            color: var(--text);
            transform: translateY(-2px);
        }
        .certification-badge.in-progress {
            background: rgba(250, 204, 21, 0.12);
            color: #facc15;
            border: 1px solid rgba(250, 204, 21, 0.28);
        }
        .project-image img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
        }
        @media (max-width: 1000px) {
            #certifications .cards.three { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 650px) {
            #certifications .cards.three { grid-template-columns: 1fr; }
        }
    `;
    document.head.appendChild(certificationStyles);
}
