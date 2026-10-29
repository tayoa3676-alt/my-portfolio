// Select the menu button and navigation links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Mobile navigation menu
if (menuToggle && navLinks) {
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });

    // Close the menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        });
    });

    // Close the menu when Escape is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });

    // Close the mobile menu when returning to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}


// Automatically update the copyright year
const currentYear = document.querySelector('#year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}