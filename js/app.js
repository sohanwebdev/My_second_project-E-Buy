$(function() {
    'use strict'
    $('.slider_item_container').slick({
       prevArrow:'<i class="fas fa-chevron-left slider_arrow left"></i>',
       nextArrow:'<i class="fas fa-chevron-right slider_arrow right"></i>',
       speed: 500,
       fadeOut: true,
       cssEase: 'linear'
    });

    $('.featured_filter_container').filterizr();


    $('.latest_product_section').slick({
        prevArrow:'<i class="fas fa-chevron-left product_arrow left"></i>',
        nextArrow:'<i class="fas fa-chevron-right product_arrow right"></i>',
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
            },
        ]
    });

    $('.count_down').countdown('2040/10/10', function (event) {
        var $this = $(this).html(event.strftime(''
            +'<div class="col-3"><div class="count_down_item"><span>%d</span><span>Days</span></div></div>'
            +'<div class="col-3"><div class="count_down_item"><span>%H</span><span>Hours</span></div></div>'
            +'<div class="col-3"><div class="count_down_item"><span>%M</span><span>Mins</span></div></div>'
            +'<div class="col-3"><div class="count_down_item"><span>%S</span><span>Sec</span></div></div>'));
    });

    $('.testimonial_bg').slick({
        prevArrow:'<i class="fas fa-chevron-left test_arrow left"></i>',
        nextArrow:'<i class="fas fa-chevron-right test_arrow right"></i>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]

     });
});