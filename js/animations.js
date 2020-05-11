// Landing animations for menu and main texts
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth >= 1400) {
    desktopLandingAnimation();
    gsap.to(".main-text-wrapper", {duration: 5, ease: "elastic.inOut(3, 1)", y:"-20%", stagger: 0.2, repeat: -1, yoyo: true, delay: 5});
    gsap.to(".sub-content", {duration: 10, ease: "elastic.inOut(3, 1)", y:"-1%", stagger: 0.2, repeat: -1, yoyo: true, delay: 5});
  } else {
    mobileLandingAnimation();
    gsap.to(".main-text-wrapper", {duration: 5, ease: "elastic.inOut(3, 1)", y:"-20%", stagger: 0.2, repeat: -1, yoyo: true, delay: 5}, 1);
  }
  gsap.from("#subpage-desc", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
});


function desktopLandingAnimation() {
  gsap.from(".main-text-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
  gsap.from("#nav-animation-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.5, stagger: 0.2});
  gsap.from(".sub-content", {duration: 5, opacity: 0, ease: "elastic.out(0.6, 0.5)", y:-500, delay: 0.5});
}

function mobileLandingAnimation() {
  gsap.from(".main-text-wrapper", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, delay: 0.5, stagger: 0.2});
  gsap.from(".hamburger", {duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0, delay: 0.2});
  gsap.from(".sub-content", {duration: 0.5, opacity: 0, delay: 1});
}

// Mobile Menu Animation for Hiding and Revealing Menu List
function showMenu() {
  var navLinks = document.getElementById("nav-links-wrapper");
  if (navLinks.style.visibility === 'visible') {
    var tl = gsap.timeline({onComplete: function() {navLinks.style.visibility = 'hidden'}});
    tl.to("#nav-links-wrapper", {duration: 0.5, opacity: 0});
    tl.to(".sub-content", {duration: 0.5, opacity: 1});
  } else {
    navLinks.style.visibility = 'visible';
    navLinks.style.opacity = 0.0;
    var tl = gsap.timeline();
    tl.to("#nav-links-wrapper", {duration: 0.4, opacity: 1}, 1)
    tl.from("#nav-animation-wrapper", {duration: 1, ease: "elastic.out(0.3, 0.5)", y: -100, opacity: 0, stagger: 0.2}, 1.5);
    tl.to(".sub-content", {duration: 0.1, opacity: 0}, 1);
  }
}
