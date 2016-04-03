// DOM
$(document).on('ready', function(){


	// Setting a cookie for the intro loader
	
	function svgLoadCookie(){
		
		// if the cookie 'loaded' does not exist, do this -
		
		if (!Cookies.get('loaded')){
			Cookies.set('loaded', 'true', {expires: ''});
		
		// Faking the animation intro
		    var introAnimate = setTimeout(function(){

		        $('body').addClass('loaded');

		        if ($('body').hasClass('loaded')){
		        	$('.wrapper').delay(300).queue(function(next){
		        		$(this).removeClass('hidden-main-content');
		        		next();
		        	});
		    	}
		    
		    }, 3400);


		// otherwise, if the cookie exists do this -
		
		} else {
			
			$('body').addClass('loaded');

		       $('.wrapper').removeClass('hidden-main-content');
		       $('#loader-wrapper').hide();
		}	
	};

	svgLoadCookie();

	
	// initializing swiper
    // Swiper Slider
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
    });

    // Nav ScrollTo

	var navHeight = $('.nav-wrapper').outerHeight(true);

	var navClass = $('.nav-main a.js-internal, .page-nav-svg, .js-section-btn');

	// Global scrollTo click event

	navClass.on('click', function(e){
		var whereToScroll = $(this).attr('href');

		e.preventDefault();

		navClass.removeClass('is-current');

		$(this).addClass('is-current');

		

		$.scrollTo(whereToScroll, {
			duration: 600,
		})
	})


	$(window).scroll(function() {    

	    var navScroll = $(window).scrollTop();

	    if (navScroll >= 100) {
	        $(".js-scroll").addClass('planet-nav');
	        $('.js-nav-reset').css({
	   			height: '0'
	   		});
	    } else {
	    	$('.js-scroll').removeClass('planet-nav');
	    	$('.js-nav-reset').css({
	   			position: 'absolute',
	   			height: 'auto',
	   		});
	    }

	});

	// NASA Apod API
	var url = "https://api.nasa.gov/planetary/apod?api_key=O5Jg72w3pMyqTYFR6RljtmxA3cIlFvRux44sm0vV";
	var fallbackImageUrl = "image/heic0601a_compressed_shrunk.jpg";

	$.ajax({
	  url: url,
	  success: handleResult
	});

	function handleResult(result){
		if(result.media_type == "video") {

			// we want to insert a fallback image url when a video is detected
			$('.block-nasa').css('background', 'url(' + fallbackImageUrl + ') top center no-repeat');

		} else {

		    $('.block-nasa').css('background', 'url(' + result.url + ') top center no-repeat');
		}	
	}


	// Animating on scroll position
	$('#stats').addClass('hidden-animation').viewportChecker({
        classToAdd: 'animation-begin visible-animation',
        offset: 100
    });

    $('#page-nav').addClass('start-svg-animate').viewportChecker({
        classToAdd: 'stop-svg-animate',
        classToRemove: 'start-svg-animate',
        offset: 400
    });

    // $('.stat-bars').addClass('hidden-main-content').viewportChecker({
    //     classToAdd: 'is-playing',
    //     classToRemove: 'hidden-main-content',
    //     offset: 400
    // });

	// Delaying the stat bar animation - this works, but needs improvement		
	function animateStats(){

		$('.stat-bars').addClass('hidden-main-content').viewportChecker({
	        classToAdd: 'is-playing',
	        classToRemove: 'hidden-main-content',
	        offset: 400
	    });

		// if class .stat-bars has class .hidden-main-content, do this
		if (!$('.stat-bars').hasClass('hidden-main-content')){

			// if screen comes into view do this
			var statAnimate = setTimeout(function(){

				// this sets the class to js-animate on scroll
				$('.stat-bars').viewportChecker({
					classToAdd: 'js-animate',
					offset: 400
				});
				

				$('.stat-bars').delay(1500).queue(function(next){
					$(this).addClass('is-playing');
					next();
				});

				// This runs if screen is in view

				if ($('#animate-stats').hasClass('js-animate')){
						
					$('.stat-bars').delay(2000).queue(function(next){
						$(this).removeClass('hidden-main-content');
						next();
					});

					$('.stat-bars').delay(1500).queue(function(next){
						$(this).addClass('is-playing');
						next();
					});
				}

			});

		} 

		// else {

		// 		var statEngage = setTimeout(function(){

		// 			// this sets the class to js-animate on scroll
		// 			$('.stat-bars').viewportChecker({
		// 				classToAdd: 'is-playing',
		// 				offset: 400
		// 			});

		// 			// This runs if screen is in view

		// 			// if (!$('.stat-bars').hasClass('is-playing')){
							
		// 			// 	$('.stat-bars').delay(100).queue(function(next){
		// 			// 		$(this).addClass('is-playing');
		// 			// 		next();
		// 			// 	});
		// 			// }

		// 		});
		// 	}
	};

	// Delaying the stat bar animation - this works, but needs improvement		
	// function statsEngage(){

	// 	// if class .stat-bars has class .hidden-main-content, do this
	// 	if ($('.stat-bars').hasClass('engage')){
						
	// 		// if screen comes into view do this
	// 		var statEngage = setTimeout(function(){

	// 			// this sets the class to js-animate on scroll
	// 			$('.stat-bars').viewportChecker({
	// 				classToRemove: 'hidden-main-content',
	// 				offset: 400
	// 			});

	// 			// This runs if screen is in view

	// 			if (!$('.stat-bars').hasClass('is-playing')){
						
	// 				$('.stat-bars').delay(100).queue(function(next){
	// 					$(this).addClass('is-playing');
	// 					next();
	// 				});
	// 			}

	// 		});
	// 	}

	// };


	// statsEngage();
	animateStats();

    

    // Updating Footer Copyright Year
    var updateYear = function(){
    	
    	$('.footerYear').html(new Date().getFullYear());
	
	};

	updateYear();



}); // end doc on ready