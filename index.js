// Slider
var SlideIndex = 0;
let isMobile = false;

var x = window.matchMedia("(max-width: 768px)");

myFunction(x);
x.addEventListener("change", myFunction);
x.addEventListener("change", function(){ location.reload(); });


function myFunction(x) {
    if (x.matches) { 
      isMobile = true;
    } else {
      isMobile = false;
    }
  }
  
jQuery(function($) {
    var doAnimations = function() {
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
          $animatables.each(function(i) {
         var $animatable = $(this);
              if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
              }
      });
      };
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  });
  