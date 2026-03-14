// FSBOOS Main JavaScript

// Savings Calculator
document.addEventListener('DOMContentLoaded', function() {
    const homeValueSlider = document.getElementById('homeValue');
    const valueDisplay = document.getElementById('valueDisplay');
    const tradCost = document.getElementById('tradCost');
    const fsboCost = document.getElementById('fsboCost');
    const savingsAmount = document.getElementById('savingsAmount');
    
    if (homeValueSlider) {
        homeValueSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            const traditionalCommission = value * 0.06;
            const fsboFee = 2995;
            const savings = traditionalCommission - fsboFee;
            
            valueDisplay.textContent = '$' + value.toLocaleString();
            tradCost.textContent = '$' + traditionalCommission.toLocaleString();
            fsboCost.textContent = '$' + fsboFee.toLocaleString();
            savingsAmount.textContent = '$' + savings.toLocaleString();
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '✓ Message Sent!';
            submitBtn.disabled = true;
            submitBtn.style.background = '#10b981';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
            
            // In production, send to backend
            console.log('Form submitted:', Object.fromEntries(formData));
        });
    }
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        // Initially show all answers on desktop, allow toggle on mobile
        if (window.innerWidth < 768) {
            answer.style.display = 'none';
        }
        
        question.style.cursor = 'pointer';
        question.addEventListener('click', function() {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Sticky Navigation Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
    }
});

// Analytics (placeholder for Google Analytics)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    console.log('Event tracked:', category, action, label);
}

// Track CTA clicks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('CTA', 'click', this.textContent.trim());
        });
    });
});
