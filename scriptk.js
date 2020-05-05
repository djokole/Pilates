$( document ).ready(function() {
TweenMax.to(".overlay h1", 2, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav ul li", 1, {
      delay: 0.6, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)
 
TweenMax.from(".logo", 2, {
      delay: 0,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
})

$(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });

});
