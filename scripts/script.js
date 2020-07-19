$( document ).ready(function() {
      TweenMax.to(".overlay h1", 2, {
            opacity: 0,
            y: -60,
            ease: Expo.easeInOut
      })

      TweenMax.to(".overlay", 2, {
            delay: 1,
            top: "-100vh",
            ease: Expo.easeInOut
      })

      TweenMax.to(".overlay", 0, {
            delay: 3,
            zIndex: "6"
      })

      TweenMax.staggerFrom("nav ul li", 1, {
            delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

      TweenMax.staggerFrom(".social-media ul li", 1, {
            delay: 2.4, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

      TweenMax.staggerFrom(".menu-icon i", 1, {
            delay: 3.0, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

      TweenMax.from(".side-strip", 2, {
            delay: 2.4,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
      })


      TweenMax.from(".header h1", 2.5, {
            delay: 3.0,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })


      TweenMax.from(".header h3", 2, {
            delay: 3.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })
      TweenMax.from(".header h6", 2, {
            delay: 4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })
      TweenMax.from(".header button", 2, {
            delay: 4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })
      TweenMax.from(".logo", 2, {
            delay: 1.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      })

      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
            if(!$(window).scrollTop()) {
                  $('.menu-icon').toggleClass('black-b');
            }
            
      });

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('.menu-icon').addClass('black-b');
            }

            else {
                  $('menu-icon').removeClass('black-b');
            }
      });
});


