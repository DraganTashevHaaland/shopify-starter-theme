
let slick = require('slick-carousel'); 

$(".product-slider").slick({
 
    // normal options...
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.prdict-slider-nav'
          
        
  });

  $("product-slider-nav").slick({

        infinite: true,
        arrows: false,
        slidesToShow: 3,
        asNavFor: 'product-slider',
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
  });