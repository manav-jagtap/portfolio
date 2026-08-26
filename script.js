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