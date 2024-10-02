// Custom JavaScript for CodeQuest Services

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation
    const form = document.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }
  
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white');
      }
    });
  });