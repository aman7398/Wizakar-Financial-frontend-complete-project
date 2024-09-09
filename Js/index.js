// slider show js start here

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

    // contact page form
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});

// login page form

document.getElementById('togglePassword').addEventListener('click', function() {
  const passwordField = document.querySelector('input[name="password"]');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});

