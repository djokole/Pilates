<<<<<<< HEAD
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
      delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.staggerFrom(".social-media ul li", 1, {
      delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
}, 0.2)

TweenMax.from(".side-strip", 2, {
      delay: 2.4,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
})


TweenMax.from(".header h1", 2.5, {
      delay: 3.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
})

TweenMax.from(".header p", 2, {
      delay: 3.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
})

TweenMax.from(".header button", 2, {
      delay: 3.6,
      opacity: 0,
      y: 20,
      ease: Bounce.easeOut
})
TweenMax.from(".logo", 2, {
      delay: 3.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
})

});


