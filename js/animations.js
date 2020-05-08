// Landing animations for menu and main texts
// document.addEventListener("DOMContentLoaded", function() {
//   gsap.from(".main-text-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
//   gsap.from(".hamburger", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.5});
//   gsap.from(".nav-animation-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.5, stagger: 0.2});
// });
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth > 1024) {
    desktopLandingAnimation();
  } else {
    mobileLandingAnimation();
  }
});

function desktopLandingAnimation() {
  gsap.from(".main-text-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
  gsap.from("#nav-animation-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.5, stagger: 0.2});
}

function mobileLandingAnimation() {
  gsap.from(".main-text-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
  gsap.from(".hamburger", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.5});
}

function showMenu() {
  var navLinks = document.getElementById("nav-links-wrapper");
  if (navLinks.style.visibility === 'visible') {

    var tl = gsap.timeline({onComplete: function() {navLinks.style.visibility = 'hidden'}});
    tl.to("#nav-links-wrapper", {duration: 0.5, opacity: 0});
    
  } else {
    navLinks.style.visibility = 'visible';
    navLinks.style.opacity = 0.0;
    var tl = gsap.timeline();
    tl.to("#nav-links-wrapper", {duration: 0.4, opacity: 1})
    tl.from("#nav-animation-wrapper", {duration: 1, ease: "elastic.out(0.3, 0.5)", y: -100, opacity: 0, stagger: 0.2});
  }
  
}