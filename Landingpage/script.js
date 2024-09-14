// Aktiven Menüpunkt hervorheben
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Formularverarbeitung
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    // ... bestehender Code ...

    // Menü-Toggle für mobile Geräte
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
        menuToggle.setAttribute('aria-expanded', 
            menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    });

    // Schließen des Menüs bei Klick auf einen Link (für mobile Geräte)
    navUl.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navUl.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Anpassung der aktiven Menüpunkte für Touch-Geräte
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('touchstart', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Verhindern des Scrollens, wenn das mobile Menü geöffnet ist
    menuToggle.addEventListener('click', function() {
        document.body.classList.toggle('menu-open');
    });

    // Formular zurücksetzen
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Verhindert das Standardverhalten

        // Erfolgsmeldung anzeigen
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');

        // Formular zurücksetzen
        form.reset();
    });
});
