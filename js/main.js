$(document).ready(function() {

     $("#toggler").click(function(event) {
          $('#wrap').toggleClass('toggled');

          let right = $('.sidbar-1').css("right");
          if (right == '0px')
          {
               $('.sidbar-1').css({ 'right': '-15rem'});
               $('.layer').fadeOut();
          }
          else {
               $('.sidbar-1').css({ 'right': '0'});
               $('.layer').fadeIn();
          }
     });

     $('.layer').click(function() {
          $('.sidbar-1').css({ 'right': '-15rem'});
          $('.layer').fadeOut();
     })


});
