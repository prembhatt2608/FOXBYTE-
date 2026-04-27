document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Intro Animation
    const introScreen = document.getElementById('intro-screen');
    
    // Disable scrolling during intro
    document.body.style.overflow = 'hidden';

    // After animation duration (2.5s) + slight buffer, hide intro
    setTimeout(() => {
        introScreen.style.opacity = '0';
        introScreen.style.visibility = 'hidden';
        
        // Re-enable scroll
        document.body.style.overflow = '';
        
        // Trigger hero animations
        triggerHeroAnimations();
    }, 2800);

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        // Exclude hero content from scroll observer, we'll animate it manually after intro
        if(!el.classList.contains('hero-content')) {
            revealObserver.observe(el);
        }
    });

    // Function to animate hero content on load
    function triggerHeroAnimations() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.classList.add('active');
            }, 100);
        }
    }
    
    // Simple mobile menu toggle (placeholder for UX)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        alert('Mobile menu clicked! (Can be expanded with a sidebar)');
    });
});
