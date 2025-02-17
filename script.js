// Initialize AOS animation library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Typed.js for hero section
const options = {
    strings: ['Software Engineer', 'Full-Stack Developer', 'Mobile App Developer', 'UI/UX Enthusiast'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true
};

const typed = new Typed('.typed-text', options);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Form submission handler (placeholder for actual submission)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formValues);
        
        // Show success message (placeholder)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}