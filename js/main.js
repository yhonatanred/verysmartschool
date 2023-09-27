/* ==========================================================================
   Page Loader
   ========================================================================== */
   $(window).load(function() {
    "use strict";
    $('#loader').fadeOut();
   });


/* ==========================================================================
   CounterUp
   ========================================================================== */
  jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
      delay: 1,
      time: 500
    });
  });

  /* slicknav mobile menu active  */
  $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

/* ==========================================================================
   MixitUp
   ========================================================================== */
  $(function(){
    $('#portfolio').mixItUp();
  });

/* ==========================================================================
   Carousel background img
========================================================================== */

setInterval(function () {
        var imagenes = ['1.jpeg', '17.jpeg', '16.jpeg', '26.jpeg', '20.jpeg'];
        $('#hero-area').css({ 'background-image': 'url(img/slider/nosotros/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')' });
    }, 5000);

/* ==========================================================================
   Carousel Main Slider
   ========================================================================== */
$(".carousel-slider").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 500,
    stopOnHover: true,
    singleItem:true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});

$("#owl-demo").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    slideSpeed : 1000,
    paginationSpeed : 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});

 
$("#carousel-index-nosotros").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 400,
    paginationSpeed : 500,
    singleItem:true,
    autoPlay: true


    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
}); 

$("#eje").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});
   

/* ==========================================================================
   Touch Owl Carousel
   ========================================================================== */
$(".touch-slider").owlCarousel({
    navigation: true,
    pagination: false,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});

$('.touch-slider').find('.owl-prev').html('<i class="icon-arrow-left"></i>');
$('.touch-slider').find('.owl-next').html('<i class="icon-arrow-right"></i>');

$('.carousel-slider').find('.owl-prev').html('<i class="icon-arrow-left"></i>');
$('.carousel-slider').find('.owl-next').html('<i class="icon-arrow-right"></i>');

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 20) {
        $('.header-top-area').addClass('menu-bg');
    } else {
        $('.header-top-area').removeClass('menu-bg');
    }
});

/* ==========================================================================
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  jQuery(function($) {

      //Initiat WOW JS
      new WOW().init();

      // one page navigation 
      $('.main-navigation').onePageNav({
              currentClass: 'active'
      });

      
  });

  jQuery(document).ready(function() {
     
      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
      });

  });
