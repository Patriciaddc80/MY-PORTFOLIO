// Nav
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    // Cierre menu  
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// animation
const typingText = document.getElementById('typing-text');
const skills = [
    "Diseñadora web", 
    "Experta en el frontend",
    "Especialista en UX/UI"
];

let currentSkillIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentSkill = skills[currentSkillIndex];
    
    if (isDeleting) {
        typingText.textContent = currentSkill.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentSkill.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentSkill.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at the end
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        typingSpeed = 500; // Pause before starting new text
    }

    setTimeout(typeText, typingSpeed);
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000); 
});

// Animación de palabras clave en la mini-presentación
const keywords = ["Creativa", "Apasionada", "Resolutiva", "Colaborativa", "Innovadora", "Curiosa"];
let kwIndex = 0;
const miniKeyword = document.getElementById("mini-keyword");
if (miniKeyword) {
    setInterval(() => {
        kwIndex = (kwIndex + 1) % keywords.length;
        miniKeyword.textContent = keywords[kwIndex];
    }, 2200);
}

// Mostrar/ocultar y funcionalidad del botón scroll-to-top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Funcionalidad del botón scroll-down-btn
const scrollDownBtn = document.getElementById('scrollDownBtn');
const aboutSection = document.getElementById('about');
if (scrollDownBtn && aboutSection) {
    scrollDownBtn.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Funcionalidad del indicador de scroll tipo mouse
const mouseScrollIndicator = document.getElementById('mouseScrollIndicator');
if (mouseScrollIndicator && aboutSection) {
    mouseScrollIndicator.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
} 