$(document).ready(function() {
  $(window).scroll(function() {
      $('.work').each(function(i) {
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > bottom_of_object) {
              $(this).animate({'margin-left': '0'}, 500);
          }
      });
  });
});
