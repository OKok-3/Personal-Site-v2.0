// Initial Page Load Transition
document.addEventListener("DOMContentLoaded", function(event) {
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
       // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
       window.requestAnimationFrame(function() {
          // GSAP custom code goes here   
        // gsap.from("#main_text_wrapper_up", {duration: 3.5, opacity: 0, ease: "elastic.out(1, 0.75)", y: 100, delay: 0.4 });
        // gsap.from("#main_text_wrapper_down", {duration: 3.5, opacity: 0, ease: "elastic.out(1, 0.75)", y: 100, delay: 0.6});
        gsap.from("#main_w", {duration: 3.5, opacity: 0, ease: "elastic.out(1, 0.6)", y: 100, stagger: 0.4, delay: 0.2});
        gsap.from(".btn", {duration: 3.5, opacity: 0, ease: "elastic.out(1, 1)", y: -200, stagger: 0.4, delay: 0.6})
       });
      
    };
  
});

// Between Page Transitions
