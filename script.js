document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal for animations
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .projects-container, .contact-content', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // Typed.js for multiple text effect
    const typed = new Typed('.multiple-text', {
        strings: ['A FRONTEND DEVELOPER', 'A PROGRAMMER', 'A AI/ML Enthusiast'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    
    // Theme switcher
    const themeButton = document.getElementById('theme-button');
    const body = document.body;

    themeButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeButton.classList.remove('bx-sun');
            themeButton.classList.add('bx-moon');
        } else {
            themeButton.classList.remove('bx-moon');
            themeButton.classList.add('bx-sun');
        }
    });

    // Active link scrolling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };
});