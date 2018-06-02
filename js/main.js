;(function($) {
		"use strict";
		
		var slider = $('.ba-full-slider').slick({
			  arrows:false,
			  dots:true,
			  slide:'.ba-full-slide'

		  });
		 	
		var sliderTriple = $('.ba-news__slider').slick({
			arrows:true,
			dots:true,
			slide: '.ba-news__slide',
			slidesToShow:3,
			slidesToScroll:1,
			prevArrow:('.icon-cheveron-outline-left'),
			nextArrow:('.icon-cheveron-outline-right'),
 			autoplay: true,
			autoplaySpeed: 5000,
 			appendDots:('.ba-news')
		});
		$(".ba-header__nav, .ba-scroll").on("click","a", function (event) {
					event.preventDefault();
					var id  = $(this).attr('href'),
						top = $(id).offset().top;
					
					$('body,html').animate({scrollTop: top}, 1500);
				});
			
		
})(jQuery);


