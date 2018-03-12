(function($) {
    
    "use strict";

    /*----------- Preloader  -------*/
    function preloader_load() {
        if($('.s_preloader').length){
            $('.s_preloader').delay(200).fadeOut(400);
        }
    }

    /*----------- Gallery Masonry Isotop And Other Gallery and Lightbox  -------*/
    function masonryIsotop() {
        if ($('.masonry-gallery').length) {
            $('.masonry-gallery').isotope({
                layoutMode:'masonry'
            });
        }
        if($('.masonry-filter').length){
            $('.masonry-filter a').children('span').on('click', function(){
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.masonry-filter a').children('span').parent().removeClass('active');
                Self.parent().addClass('active');
                $('.masonry-gallery').isotope({ filter: selector });
                return false;
            });
        }
        
    /*----------- magnificPopup  -------*/
        if($('.popup-youtube').length) {
            $('.popup-gallery').magnificPopup({
              delegate: 'a',
              type: 'image',
              tLoading: 'Loading image #%curr%...',
              mainClass: 'mfp-img-mobile',
              gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
              },
              image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                  return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
              }
            });
        }

        if($('.popup-youtube').length) {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
        }

        if($('.popup-img').length) {
            $(".popup-img").magnificPopup({
                type:"image",
                gallery: {
                    enabled: true,
                }
            });
        }

    }

    /*----------- Progress-Box  -------*/
    if($('.progress-box').length) {
        $(".progress-box .bar-fill").each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }

    /*----------- fact-counter  -------*/
    $(document).ready(function() {
        $('div.s_fact_timer').counterUp({
            delay: 5,
            time: 2000
        });
    });

    /*----------- Wow animation  -------*/
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset:       0
        });
        wow.init();
    } 

    /*----------- Google Map Settings  -------*/
    if($('#map-location').length){
        var map;
        map = new GMaps({
            el: '#map-location',
            zoom: 7,
            scrollwheel:false,
            //Set Latitude and Longitude Here
            lat: 20.593684,
            lng: 78.96288000000004
        });
    }

    /* ----- Scroll To top ----- */
    function scrollToTopppp() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 0) {
                $('.scrollToAbout').fadeIn();
            } else {
                $('.scrollToAbout').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToAbout').on('click',function(){
            $('html, body').animate({scrollTop : 1200});
            return false;
        });
    }
    /* ----- Scroll To top ----- */
    function scrollToHead() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToTop').on('click',function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }

/* --------------------------------------------------------------------------
   When document is ready, do
   -------------------------------------------------------------------------- */
    $(document).on('ready', function() {
        wowAnimation();
        scrollToHead();
        scrollToTopppp();
    });

/* --------------------------------------------------------------------------
   When document is Scrollig, do
   -------------------------------------------------------------------------- */
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });
    
/* --------------------------------------------------------------------------
   When document is loading, do
   -------------------------------------------------------------------------- */

    $(window).on('load', function() {
        // add your functions
        preloader_load();
        masonryIsotop();
    }); 


/* --------------------------------------------------------------------------
   When Window is resizing, do
   -------------------------------------------------------------------------- */
    $(window).on('resize', function() {
        // add your functions
    });


})(window.jQuery);