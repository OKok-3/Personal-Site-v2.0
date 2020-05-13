// To animate the Preloading text
document.addEventListener("DOMContentLoaded", function () {
  var tl_1 = gsap.timeline({ repeat: -1 });
  tl_1.to("#preloader-text", { duration: 1.5, ease: "elastic.inOut(1, 0.5)", stagger: 0.05, y: 20 });
  tl_1.to("#preloader-text", { duration: 1.5, ease: "elastic.inOut(1, 0.5)", stagger: 0.05, y: 0 });
});

window.addEventListener("load", function () {
  if (window.innerWidth >= 1400) {
    gsap.to(".preloader-container", { delay: 0.5, duration: 0.5, opacity: 0, onComplete: desktopLandingAnimation() });
    // Card Animations
    var tl_w = gsap.timeline({ delay: 1 })
    tl_w.from("#subpage-desc", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0.01, stagger: 0.2 }, 1);
    tl_w.from(".card-wrapper", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0.01, stagger: 0.2 }, 1.5);
  } else {
    gsap.to(".preloader-container", { delay: 0.5, duration: 0.5, opacity: 0, onComplete: mobileLandingAnimation() });
    // Card Animations
    var tl_w = gsap.timeline({ delay: 1 })
    tl_w.from("#subpage-desc", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, stagger: 0.2 }, 1);
    tl_w.from(".card-wrapper", { duration: 2, ease: "elastic.out(0.8, 1)", y: 100, opacity: 0, stagger: 0.2 }, 1.5);
  }
  gsap.to(".linkedin_logo", {duration: 1, ease: "elastic.out(0.6, 0.5)", y: -5, yoyo: true, repeat: -1, delay: 5});
  // For the "i-p" pages like personal_sites.html
  gsap.from("#i-p_text_animation", {duration: 2, opacity: 0, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0, stagger: 0.1, delay: 1.5});
});


function desktopLandingAnimation() {
  var tl_d = gsap.timeline()
  // Menu Button Animations
  tl_d.from("#nav-animation-wrapper", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0.015, stagger: 0.2, onComplete: disable_preloader() }, 1);
  // For the texts
  tl_d.from(".main-text-wrapper", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0.015, stagger: 0.2, delay: 0.3 }, 1);
  // For sub contents
  tl_d.from(".sub-content", { duration: 3, opacity: 0.001, ease: "elastic.out(0.6, 0.7)", y: -400, delay: 0.3 }, 1.5);
}

function mobileLandingAnimation() {
  var tl_m = gsap.timeline({ delay: 1 });
  // Menu Button Animations
  tl_m.from("#mobile-menu", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: -100, opacity: 0.015, stagger: 0.2 }, 1);
  // For index page main texts
  tl_m.from(".main-text-wrapper", { duration: 3, ease: "elastic.out(0.6, 0.5)", y: 100, opacity: 0.015, delay: 0.5, stagger: 0.2 }, 1);
  // For sub contents
  tl_m.from(".sub-content", { duration: 1, opacity: 0.015}, 1);
  disable_preloader()
}

function disable_preloader() {
  document.querySelector("#preloader").style.zIndex = -1;
}

// Mobile Menu Animation for Hiding and Revealing Menu List
function showMenu() {
  var navLinks = document.getElementById("nav-links-wrapper");
  if (navLinks.style.visibility === 'visible') {
    var tl = gsap.timeline({ onComplete: function () { navLinks.style.visibility = 'hidden' } });
    tl.to("#nav-links-wrapper", { duration: 0.2, opacity: 0 }, 1);
    tl.to(".sub-content", { duration: 1, opacity: 1 }, 2);
    tl.to(".subpage-content-container", { duration: 0.2, opacity: 1 }, 1);
    tl.to(".exp-subpage-content-container", { duration: 0.2, opacity: 1 }, 1);
    tl.to(".i-p_img", { duration: 0.2, opacity: 1 }, 1);
  } else {
    navLinks.style.visibility = 'visible';
    navLinks.style.opacity = 0.0;
    var tl = gsap.timeline();
    tl.to("#nav-links-wrapper", { duration: 0.2, opacity: 1 }, 1)
    tl.from("#nav-animation-wrapper", { duration: 1, ease: "elastic.out(0.3, 1)", y: -100, opacity: 0.01, stagger: 0.2 }, 1);
    tl.to(".sub-content", { duration: 0.1, opacity: 0 }, 1);
    tl.to(".subpage-content-container", { duration: 0.2, opacity: 0 }, 1);
    tl.to(".exp-subpage-content-container", { duration: 0.2, opacity: 0 }, 1);
    tl.to(".i-p_img", { duration: 0.2, opacity: 0 }, 1);
  }
}