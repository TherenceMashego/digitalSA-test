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

// Custom cursor - FIXED: Only on desktop
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Click ripple effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        document.body.appendChild(ripple);
        
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add hover effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        btn.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
    
    // Add hover effect to cards
    document.querySelectorAll('.stat-item, .service-features, .pricing, .package').forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.backgroundColor = '#3b82f6';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.backgroundColor = '#2563eb';
        });
    });
}

// Sticky navigation with scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations - FIXED: Proper element selection
const scrollElements = document.querySelectorAll('.stat-item, .service-features, .pricing, .price-item, .package, .feature-list li');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

// Initialize scroll animations
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Trigger on load to check initial state
window.addEventListener('load', handleScrollAnimation);

// Animated counters
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const startCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const inc = target / speed;
    
    if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => startCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Particle.js configuration
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
                value: '#2563eb'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
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
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3b82f6',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
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
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered delays for feature list items
    document.querySelectorAll('.feature-list li').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered delays for price items
    document.querySelectorAll('.price-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger initial scroll animation check
    setTimeout(handleScrollAnimation, 100);
});



// Enhanced hero section animations
function initHeroAnimations() {
    // Add floating elements dynamically
    const hero = document.querySelector('.hero .container');
    for (let i = 0; i < 4; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        hero.appendChild(element);
    }
    
    // Text reveal animation
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    
    // Reset for animation
    heroTitle.style.opacity = '0';
    heroText.style.opacity = '0';
    
    // Animate title
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 500);
    
    // Animate paragraph
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 1000);
    
    // Animate buttons
    setTimeout(() => {
        document.querySelectorAll('.hero .btn').forEach((btn, index) => {
            btn.style.transition = `opacity 1s ease-out ${0.8 + index * 0.2}s, transform 1s ease-out ${0.8 + index * 0.2}s`;
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        });
    }, 1500);
}

// Call the hero animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    
    // Add the rest of your existing initialization code...
});