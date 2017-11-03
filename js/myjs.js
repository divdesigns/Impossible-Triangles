
//This function calls the ID and uses the animate property and moves from left to right when the document is ready.

$(window).ready(function () {
        var div = $("#ani1");
    div.css({right: '1000px'}).animate({right: '0px',  opacity: '0.5'}, 500, 'linear' );
    div.animate({opacity: '1'});
});

//This function calls the ID and uses the animate property and moves from right to left when the document is ready.

 $(window).ready(function () {
        var div = $("#ani2");
    div.css({left: '1000px'}).animate({left: '0px', opacity: '0.5'}, 1000, 'linear');
    div.animate({opacity: '1'});
});

//This jQuery function calls the class and animates when the document is ready as the  page comes in view.

jQuery(document).ready(function() {
  jQuery('.left').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
      offset: 100
     });
});

//This jQuery function calls the class and animates when the document is ready as the  page comes in view.

jQuery(document).ready(function() {
  jQuery('.right').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
      offset: 100
     });
});
//This jQuery function calls the class and animates when the document is ready as the  page comes in view.
jQuery(document).ready(function() {
  jQuery('.lg-icons').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
      offset: 100
     });
});

//This function activates the tooltip in the DOM file
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
