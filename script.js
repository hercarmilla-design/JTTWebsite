// Navigation active state
const navLinksAll = document.querySelectorAll('.nav-links a');

navLinksAll.forEach(link => {
  link.addEventListener('click', () => {
    navLinksAll.forEach(l => l.classList.remove('active')); // remove active from all
    link.classList.add('active'); // add active to clicked one
  });
});

// Theme toggle functionality
document.body.classList.add('dark-mode');
const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');

icon.classList.replace('fa-moon', 'fa-sun');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Main functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hero Carousel Handler
    const heroSlides = document.querySelectorAll('.carousel-slide');
    const heroDots = document.querySelectorAll('.carousel-dots .dot');
    let currentHeroSlide = 0;
    
    function showHeroSlide(index) {
        // Hide all slides
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        
        currentHeroSlide = index;
    }
    
    function nextHeroSlide() {
        let nextIndex = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
    }
    
    // Auto-advance hero carousel every 5 seconds
    setInterval(nextHeroSlide, 5000);
    
    // Dot navigation for hero carousel
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showHeroSlide(index);
        });
    });
    
    // Show the initial slide
    showHeroSlide(currentHeroSlide);
    
    // Basic Scroll Reveal Handler
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    // Testimonial Carousel Handler
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    let currentTestimonialSlide = 0;

    const showTestimonialSlide = (index) => {
        testimonialSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    nextButton.addEventListener('click', () => {
        currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialSlides.length;
        showTestimonialSlide(currentTestimonialSlide);
    });

    prevButton.addEventListener('click', () => {
        currentTestimonialSlide = (currentTestimonialSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showTestimonialSlide(currentTestimonialSlide);
    });
    
    // Show the initial slide
    showTestimonialSlide(currentTestimonialSlide);
});