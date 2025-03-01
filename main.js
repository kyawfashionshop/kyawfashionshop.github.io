 // Slider Logic
 let currentSlide = 0;
 const slides = document.querySelectorAll('.slider-slide');
 const indicators = document.querySelectorAll('.slider-indicators .indicator');

 function showSlide(index) {
     // Hide all slides
     slides.forEach((slide, i) => {
         slide.classList.remove('active');
         indicators[i].classList.remove('active');
     });

     // Show current slide
     slides[index].classList.add('active');
     indicators[index].classList.add('active');
 }

 // Auto Slide
 setInterval(() => {
     currentSlide = (currentSlide + 1) % slides.length;
     showSlide(currentSlide);
 }, 5000);

 // Manual Navigation
 indicators.forEach((indicator, index) => {
     indicator.addEventListener('click', () => {
         currentSlide = index;
         showSlide(currentSlide);
     });
 });

 // Mobile Menu Toggle
 document.querySelector('.mobile-menu').addEventListener('click', () => {
     document.querySelector('.nav-links').classList.toggle('active');
 });