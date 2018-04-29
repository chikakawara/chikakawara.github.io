$(document).ready(function() {
  var to_pagetop = $('#to_pagetop');
  to_pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            to_pagetop.fadeIn();
       } else {
            to_pagetop.fadeOut();
            }
       });
       to_pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
