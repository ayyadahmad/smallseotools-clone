// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
    }

    mobileMenuBtn?.addEventListener('click', toggleMobileMenu);
    closeMenuBtn?.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenu.contains(event.target) || mobileMenuBtn.contains(event.target);
        if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });

    // Language selector functionality
    const languageSelector = document.querySelector('select');
    languageSelector?.addEventListener('change', function(e) {
        const selectedLanguage = e.target.value;
        console.log(`Language changed to: ${selectedLanguage}`);
        // In a real application, this would handle language changes
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('footer form');
    newsletterForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.message);
});

// Handle loading errors for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    }
}, true);
