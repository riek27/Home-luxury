// Common JavaScript for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav ul');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.padding = '1rem 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
            } else {
                header.style.padding = '1.5rem 0';
                header.style.boxShadow = 'none';
            }
        }
    });
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Portfolio item interactions
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // This would typically open a modal or navigate to a project detail page
            console.log('Portfolio item clicked');
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form submission logic would go here
            alert('Thank you for your inquiry. We will contact you soon.');
            contactForm.reset();
        });
    }
});
