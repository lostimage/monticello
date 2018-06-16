;(function($) {
		"use strict";
		
		var slider = $('.ba-full-slider').slick({
			  arrows:false,
			  dots:true,
			  slide:'.ba-full-slide',
			 

			  responsive: [
				{
				  breakpoint: 480,
				  settings: {
					dots:false,
				  }
				}
			  ]


		  });
		 	
		var sliderTriple = $('.ba-news__slider').slick({
			arrows:true,
			dots:true,
			slide: '.ba-news__slide',
			slidesToShow:3,
			slidesToScroll:1,
			adaptiveHeight: true,
			prevArrow:('.icon-cheveron-outline-left'),
			nextArrow:('.icon-cheveron-outline-right'),
 			// autoplay: true,
			autoplaySpeed: 5000,
			 appendDots:('.ba-news'),
			 responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					  arrows:false,
					slidesToShow:2,
					slidesToScroll:1,
				  }
				},
				{
					breakpoint: 800,
					settings: {
					  slidesToShow:1,
					  slidesToScroll:1,
					}
				  }
			  ]
		});
		$(".ba-header__nav, .ba-scroll, #mobile-menu").on("click","a", function (event) {
					event.preventDefault();
					var id  = $(this).attr('href'),
						top = $(id).offset().top;
					
					$('body,html').animate({scrollTop: top}, 1500);
				});
				var nav = $('#mobile-menu') ,
						overlay = $('.ba-overlay'),
				menuToggle = $('.ba-menu-button, .ba-overlay') ;
				menuToggle.on('click' , function (e) {
					e.preventDefault();
					nav.toggleClass('ba-open');
					overlay.toggleClass('ba-overlay-open');
				});
		
})(jQuery);


