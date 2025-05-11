function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
// Add this to your script.js
document.addEventListener('DOMContentLoaded', function () {
  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll('.progress');

  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  };

  // Run animation when experience section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const experienceSection = document.querySelector('#experience');
  if (experienceSection) {
    observer.observe(experienceSection);
  }
});