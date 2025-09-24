// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    const counters = document.querySelectorAll('.counter');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0) scale(1)';
        }
    });

    // Animate counters if they're in view
    counters.forEach(counter => {
        if (counter.dataset.animated) return;
        
        const counterPosition = counter.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (counterPosition < screenPosition) {
            animateCounter(counter);
            counter.dataset.animated = "true";
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const zoomElements = document.querySelectorAll('.zoom-in');
    
    // Set initial states for animations
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    slideLeftElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    slideRightElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(50px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    zoomElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.9)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Custom cursor effect
function initCustomCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursorOutline.classList.add('cursor-outline');
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        cursorOutline.style.left = `${e.clientX}px`;
        cursorOutline.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('click');
        cursorOutline.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('click');
        cursorOutline.classList.remove('click');
    });

    // Click ripple effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Sticky navigation with background change
function initStickyNav() {
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Animated counters
function animateCounter(counter) {
    const target = parseInt(counter.dataset.target);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        counter.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initStickyNav();
    
    // Initialize counters if they exist
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.dataset.target = counter.textContent;
        counter.textContent = '0';
    });
});