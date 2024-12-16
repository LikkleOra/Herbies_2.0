'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const shopNowBtn = document.querySelector('.btn-primary');
    const contactUsBtn = document.querySelector('.btn-secondary');

    shopNowBtn.addEventListener('click', () => {
        alert('Shop Now button clicked! Add your shop functionality here.');
    });

    contactUsBtn.addEventListener('click', () => {
        alert('Contact Us button clicked! Add your contact form or redirect to contact page here.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted with data:', data);
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon!');
        
        // Reset form
        form.reset();
    });

    // Add floating label behavior
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Add placeholder to maintain floating label behavior
        input.setAttribute('placeholder', ' ');
        
        // Handle autofill
        input.addEventListener('animationstart', function(e) {
            if (e.animationName === 'autofill') {
                this.classList.add('filled');
            }
        });
    });
});