const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('.nav_links li');

hamburger.addEventListener("click", animate_button);

function animate_button() {
  navLinks.classList.toggle("open");
};