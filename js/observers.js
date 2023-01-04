// Select elements
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const menuSection = document.querySelector(".menu");

// Options
heroSectionOptions = {
  threshold: "0.90"
};

sectionOptions = {
  rootMargin: "-18% 0px -82% 0px"
};

// Intersection Observers
const heroSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, heroSectionOptions);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get current section
      const sectionName = entry.target.getAttribute('data-section');

      // Turn off the previous active tab and turn on the current active one
      header.getElementsByClassName('active')[0].classList.remove('active');
      header.getElementsByClassName(sectionName)[0].classList.add('active');
    }
  });
}, sectionOptions);

heroSectionObserver.observe(heroSection);
document.querySelectorAll('section').forEach((section) => {
  sectionObserver.observe(section);
});