// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initHeaderScroll();
    initFormHandling();
    initAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && navList) {
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-wrapper')) {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNavigation);
    
    // Update on page load
    updateActiveNavigation();
}

// Header Scroll Effects
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Form Handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }
            
            // If validation passes, show confirmation
            setTimeout(function() {
                alert('Thank you for your message! We\'ll get back to you soon.');
            }, 100);
        });
        
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }
}

// Field Validation Helper
function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const isEmail = field.type === 'email';
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Check if required field is empty
    if (isRequired && !value) {
        field.classList.add('error');
        return false;
    }
    
    // Validate email format
    if (isEmail && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    return true;
}

// Animation on Scroll
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .case-study-card, .blog-post-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Any additional scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause any animations or timers
        console.log('Page hidden');
    } else {
        // Page is visible, resume any paused functionality
        console.log('Page visible');
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            // You could set a placeholder image here if needed
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navList = document.querySelector('.nav-list');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    }
});

// Add CSS for form validation and animations
const additionalStyles = `
<style>
.contact-form input.error,
.contact-form textarea.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Loading states */
.loading {
    pointer-events: none;
    opacity: 0.6;
}

.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid #1e40af;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);
