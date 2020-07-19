$( document ).ready(function() {

      TweenMax.staggerFrom(".social-media ul li", 1, {
            delay: 0.6, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

      TweenMax.staggerFrom(".menu-icon i", 1, {
            delay: 1.2, opacity: 0, y: 20, ease: Expo.easeInOut
      }, 0.2)

      TweenMax.from(".logo", 2, {
            delay: 0,
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
                  $('.menu-icon').removeClass('black-b');
            }
      });

});
