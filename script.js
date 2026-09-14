// ============================================
// MANAV JAGTAP PORTFOLIO JAVASCRIPT
// ============================================


// --------------------------------------------
// CURRENT YEAR
// --------------------------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// --------------------------------------------
// MOBILE MENU
// --------------------------------------------

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuBtn.textContent = isOpen ? "✕" : "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    // Close menu after clicking a navigation link
    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    // Close menu using Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// --------------------------------------------
// DARK / LIGHT THEME
// --------------------------------------------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    // Load saved theme
    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeBtn.textContent = "🌙";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {

        document.body.classList.remove("light-theme");

        themeBtn.textContent = "☀️";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }


    // Toggle theme
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");


        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        if (isLight) {

            themeBtn.textContent = "🌙";

            themeBtn.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            themeBtn.textContent = "☀️";

            themeBtn.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    });

}


// --------------------------------------------
// TERMINAL TYPING EFFECT
// --------------------------------------------

const terminalText =
    document.getElementById("terminalText");


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

    if (!terminalText) {
        return;
    }


    const currentMessage =
        terminalMessages[messageIndex];


    // Typing
    if (!deleting) {

        terminalText.textContent =
            currentMessage.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        // Pause after full message
        if (
            characterIndex ===
            currentMessage.length
        ) {

            deleting = true;

            setTimeout(
                typeTerminal,
                1300
            );

            return;
        }

    }


    // Deleting
    else {

        terminalText.textContent =
            currentMessage.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        // Move to next message
        if (characterIndex === 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1) %
                terminalMessages.length;

        }

    }


    setTimeout(
        typeTerminal,
        deleting ? 35 : 70
    );

}


// Start terminal animation
typeTerminal();


// --------------------------------------------
// FEATURED PROJECTS
// --------------------------------------------

const projectsGrid = document.querySelector("#projects .cards");

if (projectsGrid) {

    projectsGrid.className = "cards two";

    projectsGrid.innerHTML = `

        <!-- CLOUDWISE -->
        <article class="card project">

            <div class="project-image">
                <img
                    src="images/projects/cloudwise-dashboard.png"
                    alt="CloudWise cloud optimization dashboard"
                >
            </div>

            <div class="project-top">
                <div>
                    <span class="project-badge">Cloud / FinOps</span>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a
                        href="https://github.com/manav-jagtap/CloudWise"
                        target="_blank"
                        rel="noreferrer"
                    >GitHub ↗</a>

                    <a
                        href="https://cloudwise-afx3.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                    >Live Demo ↗</a>
                </div>
            </div>

            <h3>☁️ CloudWise</h3>

            <p class="project-tagline">
                Multi-cloud cost and resource optimization platform that analyzes
                utilization data and identifies practical cost-saving opportunities.
            </p>

            <h4>Key Features</h4>

            <ul class="project-features">
                <li>Supports Azure, AWS, GCP, and manual provider-style datasets</li>
                <li>Detects idle, underutilized, normal, and overutilized resources</li>
                <li>Generates priority scores, recommendations, and savings estimates</li>
                <li>Provides dashboard analytics and top optimization opportunities</li>
                <li>Exports analysis reports as CSV and PDF</li>
            </ul>

            <div class="chips">
                <span>Python</span>
                <span>Django</span>
                <span>Pandas</span>
                <span>Chart.js</span>
                <span>FinOps</span>
            </div>

        </article>


        <!-- EVENTHUB -->
        <article class="card project">

            <div
                class="project-image"
                aria-hidden="true"
                style="display:grid; place-items:center; font-size:4.5rem; background:linear-gradient(135deg, rgba(56,189,248,.12), rgba(129,140,248,.12));"
            >
                🎟️
            </div>

            <div class="project-top">
                <div>
                    <span class="project-badge">Event Management</span>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a
                        href="https://github.com/manav-jagtap/EventManagement"
                        target="_blank"
                        rel="noreferrer"
                    >GitHub ↗</a>

                    <a
                        href="https://eventmanagement-8ndb.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                    >Live Demo ↗</a>
                </div>
            </div>

            <h3>🎟️ EventHub</h3>

            <p class="project-tagline">
                Event management and digital ticketing platform for attendees,
                organizers, and administrators with complete registration workflows.
            </p>

            <h4>Key Features</h4>

            <ul class="project-features">
                <li>Event discovery with search, categories, and city filters</li>
                <li>Capacity-aware registration with automatic FIFO waitlisting</li>
                <li>Unique QR-based digital tickets for confirmed attendees</li>
                <li>Organizer ticket verification and attendee check-in</li>
                <li>Event analytics with attendance and registration insights</li>
            </ul>

            <div class="chips">
                <span>Python</span>
                <span>Django</span>
                <span>Bootstrap</span>
                <span>Chart.js</span>
                <span>QR Code</span>
            </div>

        </article>


        <!-- TURFPAY -->
        <article class="card project">

            <div
                class="project-image"
                aria-hidden="true"
                style="display:grid; place-items:center; font-size:4.5rem; background:linear-gradient(135deg, rgba(34,197,94,.10), rgba(56,189,248,.10));"
            >
                ⚽
            </div>

            <div class="project-top">
                <div>
                    <span class="project-badge">Booking Platform</span>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a
                        href="https://github.com/manav-jagtap/TurfPay"
                        target="_blank"
                        rel="noreferrer"
                    >GitHub ↗</a>

                    <a
                        href="https://turfpay.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                    >Live Demo ↗</a>
                </div>
            </div>

            <h3>⚽ TurfPay</h3>

            <p class="project-tagline">
                Sports turf discovery and booking platform with separate customer,
                turf-owner, and administrator workflows.
            </p>

            <h4>Key Features</h4>

            <ul class="project-features">
                <li>Search and filter local turfs by sport, location, and price</li>
                <li>Book available time slots with duplicate-booking protection</li>
                <li>Customer booking history and cancellation management</li>
                <li>Dedicated turf-owner dashboard and booking management</li>
                <li>Production deployment with Render and Neon PostgreSQL</li>
            </ul>

            <div class="chips">
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>Render</span>
                <span>Booking System</span>
            </div>

        </article>


        <!-- PREPX -->
        <article class="card project">

            <div class="project-image">
                <img
                    src="images/projects/prepx-dashboard.png"
                    alt="PrepX student dashboard"
                >
            </div>

            <div class="project-top">
                <div>
                    <span class="project-badge">Team Full Stack Project</span>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:flex-end;">
                    <a
                        href="https://github.com/PrepX-Team/PrepX"
                        target="_blank"
                        rel="noreferrer"
                    >GitHub ↗</a>
                </div>
            </div>

            <h3>🧠 PrepX</h3>

            <p class="project-tagline">
                Smart MCQ examination and result generation system designed for
                student, teacher, and administrator workflows.
            </p>

            <h4>Key Features</h4>

            <ul class="project-features">
                <li>Role-based authentication for students, teachers, and admins</li>
                <li>Private question-bank and structured practice workflows</li>
                <li>Exam management with timer, randomization, and scoring logic</li>
                <li>Automated results, analytics, and performance tracking</li>
                <li>Team-based Django project with PostgreSQL production support</li>
            </ul>

            <div class="chips">
                <span>Python</span>
                <span>Django</span>
                <span>DRF</span>
                <span>Bootstrap</span>
                <span>PostgreSQL</span>
            </div>

        </article>
    `;
}
