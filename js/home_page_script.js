// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initAnimations();
    initParticles();
    initCursorEffects();
    initCounterAnimations();
    initRippleEffects();
    initTiltEffects();
});

// Sticky navigation with background change
function initNavigation() {
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll-triggered animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all elements with fade-in class
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Particle.js initialization for hero background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Custom cursor effects
function initCursorEffects() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    // Only initialize if elements exist
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let trailX = 0, trailY = 0;
    let scale = 1;
    let trails = [];
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Add trail element
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);
        
        // Store trail reference
        trails.push({
            element: trail,
            x: e.clientX,
            y: e.clientY,
            createdAt: Date.now()
        });
        
        // Remove old trails
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
            trails = trails.filter(t => t.element !== trail);
        }, 500);
    });
    
    // Cursor interaction with clickable elements
    document.querySelectorAll('a, button, .service-card, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            scale = 1.8;
            cursorOutline.style.borderWidth = '1px';
        });
        
        el.addEventListener('mouseleave', () => {
            scale = 1;
            cursorOutline.style.borderWidth = '2px';
        });
    });
    
    // Cursor interaction with hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            cursorDot.style.backgroundColor = '#ffffff';
            cursorOutline.style.borderColor = '#ffffff';
        });
        
        heroSection.addEventListener('mouseleave', () => {
            cursorDot.style.backgroundColor = '#2563eb';
            cursorOutline.style.borderColor = '#2563eb';
        });
    }
    
    // Animation loop for smooth cursor movement
    function animateCursor() {
        // Smooth movement for outline
        outlineX += (mouseX - outlineX) * 0.1;
        outlineY += (mouseY - outlineY) * 0.1;
        
        // Update cursor positions
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(${scale})`;
        
        requestAnimationFrame(animateCursor);
    }
    
    // Start animation
    animateCursor();
}

// Animated counters for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;
    
    // Check if counters are in view
    function checkCounters() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        counters.forEach(counter => {
            const counterTop = counter.getBoundingClientRect().top;
            
            if (counterTop < triggerBottom && !started) {
                startCounters();
                started = true;
            }
        });
    }
    
    // Start counter animations
    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / 100;
            const duration = 2000; // ms
            const steps = 60; // fps
            const stepDuration = duration / steps;
            let current = count;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.ceil(current);
                }
            }, stepDuration);
        });
    }
    
    // Initial check and scroll listener
    checkCounters();
    window.addEventListener('scroll', checkCounters);
}

// Ripple effect on click
function initRippleEffects() {
    document.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        
        // Position and size
        const size = Math.max(e.target.offsetWidth, e.target.offsetHeight);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - size/2}px`;
        ripple.style.top = `${e.clientY - size/2}px`;
        
        // Add to document
        document.body.appendChild(ripple);
        
        // Remove after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Tilt effect on service cards
function initTiltEffects() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}