const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('.accordion button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.accordion button').forEach((item) => {
      if (item !== button) item.classList.remove('open');
    });
    button.classList.toggle('open');
  });
});
const testimonials = document.querySelectorAll(".testimonial");
let testimonialIndex = 0;

if (testimonials.length > 0) {
  setInterval(() => {
    testimonials[testimonialIndex].classList.remove("active");

    testimonialIndex = (testimonialIndex + 1) % testimonials.length;

    testimonials[testimonialIndex].classList.add("active");
  }, 6000);
}