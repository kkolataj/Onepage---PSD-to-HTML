$(document).ready(function () {
// ANIMATE IPHONE AT HERO SECTION
$( ".hamburger-menu" ).click(function() {
$( ".hamburger-menu" ).toggleClass( 'change' );
});
    new WOW().init();
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });
    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    $('.iphone-btn').delay(1400).animate({
        bottom: '+=-3'
    }, 300);
    $('.iphone-btn').delay(250).animate({
        top: '+=-3'
    }, 300)
});


//COLLAPSEOUT NAVBAR AFTER CLICK ON HAMBURGER
$( ".hamburger-menu" ).click(function () {
  if ($( ".main-nav" ).is( ":hidden" )) {
    $( ".main-nav" ).slideDown( "fast" );
  } else {
        $( ".main-nav" ).slideUp( "fast" );
  }
});


 $(window).resize(function(){

       if ($(window).width() >= 801) {  

             $( ".main-nav:hidden" ).show( "fast" );

       }     

});

$(window).resize(function(){

       if ($(window).width() <= 801) {  

// COLLAPSEIN NAVBAR WHEN LINK IS CLICKED, CHANGE HAMBURGER TO "CLOSED" STATE
$( ".main-nav li a" ).click(function (){
  $( ".main-nav li" ).slideUp();
  $( ".hamburger-menu" ).toggleClass( 'change' );  
});

       }     

});

             // SMOOTH SCROLL TO ANCHOR
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
});










