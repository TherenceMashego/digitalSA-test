// it_support_script.js

// Enhanced Cursor Effects
document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    let trailPoints = [];
    const maxTrailPoints = 10;
    
    // Enhanced cursor movement with smoothing
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Smooth movement for cursor dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Delayed movement for cursor outline with enhanced physics
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 80);
        
        // Enhanced trail effect
        const trailPoint = document.createElement('div');
        trailPoint.className = 'cursor-trail';
        trailPoint.style.left = `${posX}px`;
        trailPoint.style.top = `${posY}px`;
        trailPoint.style.opacity = '1';
        document.body.appendChild(trailPoint);
        
        trailPoints.push(trailPoint);
        
        if (trailPoints.length > maxTrailPoints) {
            const oldPoint = trailPoints.shift();
            if (oldPoint && oldPoint.parentNode) {
                oldPoint.style.opacity = '0';
                setTimeout(() => {
                    if (oldPoint.parentNode) {
                        oldPoint.parentNode.removeChild(oldPoint);
                    }
                }, 300);
            }
        }
        
        // Remove trail points after animation
        setTimeout(() => {
            if (trailPoint.parentNode) {
                trailPoint.style.opacity = '0';
                setTimeout(() => {
                    if (trailPoint.parentNode) {
                        trailPoint.parentNode.removeChild(trailPoint);
                    }
                }, 300);
            }
        }, 500);
    });
    
    // Enhanced cursor interaction effects
    const interactiveElements = document.querySelectorAll('a, button, .btn, .service-card, .feature-card, .stat-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'var(--accent)';
            cursorOutline.style.background = 'rgba(59, 130, 246, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'var(--primary)';
            cursorOutline.style.background = 'transparent';
        });
    });
    
    // Enhanced click effect
    document.addEventListener('click', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.2)';
        
        setTimeout(() => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 150);
    });

    // Enhanced Particles.js Configuration
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
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
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
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

    // Enhanced Scroll Effects
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Enhanced header background on scroll
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Enhanced parallax effect for hero section
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        
        lastScrollTop = scrollTop;
    });

    // Enhanced Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const startCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };
    
    // Enhanced Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Start counter animation for stats
                if (entry.target.classList.contains('stat-item')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber && !statNumber.classList.contains('animated')) {
                        statNumber.classList.add('animated');
                        startCounter(statNumber);
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal class and stats
    document.querySelectorAll('.reveal, .stat-item, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // Enhanced Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.classList.toggle('active');
        });
    }

    // Enhanced Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Hover Effects for Service Cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            serviceCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.style.transform = 'scale(0.95)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
            serviceCards.forEach(otherCard => {
                otherCard.style.transform = '';
            });
        });
    });

    // Enhanced Loading Animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Add subtle animation to hero elements
        const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-buttons');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    });

    // Enhanced Performance: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                // Handle scroll effects here
            }, 10);
        }
    });

    // Enhanced Error Handling
    window.addEventListener('error', (e) => {
        console.error('Error occurred:', e.error);
    });

    // Enhanced Service Card Interactions
    const packageCard = document.querySelector('.package-card');
    if (packageCard) {
        packageCard.addEventListener('mouseenter', () => {
            packageCard.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        packageCard.addEventListener('mouseleave', () => {
            packageCard.style.transform = 'translateY(-15px)';
        });
    }

    // Enhanced Button Ripple Effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    console.log('IT Support page enhanced interactions loaded successfully!');
});