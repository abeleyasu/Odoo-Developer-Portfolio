// ===========================
// ANIMATION UTILITIES
// ===========================

/**
 * Text splitting animation
 * Splits text into individual characters for staggered animation
 */
function splitText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.cssText = `
            display: inline-block;
            animation: fadeInUp 0.6s ease-out ${index * 0.05}s both;
        `;
        element.appendChild(span);
    });
}

// Apply text splitting to hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('[data-splitting]');
    if (heroTitle) {
        splitText(heroTitle);
    }
});

/**
 * Parallax scroll effect
 */
function setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollY = window.scrollY;
            const elementOffset = element.offsetTop;
            const distance = scrollY - elementOffset;
            const parallaxStrength = element.getAttribute('data-parallax') || 0.5;
            
            element.style.transform = `translateY(${distance * parallaxStrength}px)`;
        });
    });
}

setupParallax();

/**
 * Reveal animation on scroll
 */
class RevealOnScroll {
    constructor(selector, options = {}) {
        this.elements = document.querySelectorAll(selector);
        this.threshold = options.threshold || 0.15;
        this.rootMargin = options.rootMargin || '0px';
        this.init();
    }
    
    init() {
        const observerOptions = {
            threshold: this.threshold,
            rootMargin: this.rootMargin
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize reveal animations
new RevealOnScroll('.expertise-card');
new RevealOnScroll('.portfolio-card');
new RevealOnScroll('.service-card');
new RevealOnScroll('.testimonial-card');

/**
 * Stagger animation for lists
 */
function staggerElements(containerSelector, itemSelector, delayMs = 100) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const items = container.querySelectorAll(itemSelector);
    items.forEach((item, index) => {
        item.style.animation = `fadeInUp 0.6s ease-out ${index * delayMs}ms both`;
    });
}

/**
 * Smooth number counter
 */
function countUp(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

/**
 * Hover glow effect
 */
function setupHoverGlow() {
    const glowElements = document.querySelectorAll('[data-glow]');
    
    glowElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.boxShadow = `
                0 0 30px rgba(164, 42, 55, 0.3),
                ${x - rect.width / 2}px ${y - rect.height / 2}px 30px rgba(164, 42, 55, 0.2)
            `;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.boxShadow = 'none';
        });
    });
}

setupHoverGlow();

/**
 * Scroll to top button
 */
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #A42A37 0%, #7d1f29 100%);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}

createScrollToTopButton();

/**
 * Fade out fadeout animation
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(10px);
        }
    }
    
    .revealed {
        animation: fadeInUp 0.6s ease-out forwards !important;
    }
`;
document.head.appendChild(style);

/**
 * Dynamic gradient text effect
 */
function setupGradientText() {
    const gradientTexts = document.querySelectorAll('[data-gradient-text]');
    
    gradientTexts.forEach(element => {
        const text = element.textContent;
        const colors = element.getAttribute('data-gradient-text').split(',');
        
        element.style.background = `linear-gradient(90deg, ${colors.join(', ')})`;
        element.style.webkitBackgroundClip = 'text';
        element.style.webkitTextFillColor = 'transparent';
        element.style.backgroundClip = 'text';
    });
}

setupGradientText();

/**
 * Typewriter effect
 */
function typewriterEffect(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Trigger specific animation on element
 */
function triggerAnimation(element, animationName) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = `${animationName} 0.6s ease-out`;
    }, 10);
}

/**
 * Ripple effect on click
 */
function setupRippleEffect() {
    const rippleElements = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');
    
    rippleElements.forEach(element => {
        element.addEventListener('click', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;
            
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

setupRippleEffect();

/**
 * Progress bar animation
 */
function setupProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const fill = document.createElement('div');
        fill.style.cssText = `
            height: 100%;
            background: linear-gradient(90deg, #A42A37, #FFB800);
            border-radius: 999px;
            width: 0%;
            animation: slideInRight 0.8s ease-out forwards;
        `;
        
        bar.appendChild(fill);
        
        // Animate to final value
        setTimeout(() => {
            fill.style.animation = 'none';
            fill.style.width = progress + '%';
            fill.style.transition = 'width 1s ease-out';
        }, 100);
    });
}

setupProgressBars();

/**
 * Add slide in right animation
 */
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from {
            width: 0%;
        }
        to {
            width: var(--progress, 80%);
        }
    }
    
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(additionalStyles);

// Log initialization
console.log('✓ Animation utilities loaded');
