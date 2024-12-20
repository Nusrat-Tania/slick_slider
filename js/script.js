// JQ
$(document).ready(function(){

$('.wrapper').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplayspeed: 2000,
       responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
        
              }
            }
        ]
     });

});