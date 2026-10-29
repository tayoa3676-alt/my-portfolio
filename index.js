document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) {
        console.error("Hamburger button or navigation menu not found.");
        return;
    }

    const navIcon = menuToggle.querySelector("i");

    // Open and close the hamburger menu
    function toggleMenu() {
        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        if (navIcon) {
            navIcon.classList.toggle("fa-bars", !isOpen);
            navIcon.classList.toggle("fa-xmark", isOpen);
        }
    }

    // Hamburger button click
    menuToggle.addEventListener("click", toggleMenu);

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    function closeMenu() {
        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        if (navIcon) {
            navIcon.classList.remove("fa-xmark");
            navIcon.classList.add("fa-bars");
        }
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (
            navLinks.classList.contains("show") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close menu when returning to desktop screen size
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Update copyright year automatically
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
})