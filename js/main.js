// DOM
$(document).on('ready', function(){

	// Interesting... cookies don't work locally - FTW!
	function svgLoadCookie(){
		if (!$.cookie('loaded')){
			Cookies.set('loaded', {expires: 1});
			console.log('is this cookie setting');
		}
		// } else {

		// 	// $("#loader-wrapper").hide();
		//   console.log('loading NASA APOD Image');
		// }	
	};
	
	// initializing swiper
	
	// var swiper = new Swiper('.swiper-container', {
 //        pagination: '.swiper-pagination',
 //        nextButton: '.swiper-button-next',
 //        prevButton: '.swiper-button-prev',
 //        slidesPerView: 1,
 //        paginationClickable: true,
 //        spaceBetween: 30,
 //        loop: true
	// });

    // var swiperV = new Swiper('.swiper-container-v', {
    //     pagination: '.swiper-pagination-v',
    //     paginationClickable: true,
    //     direction: 'vertical',
    //     spaceBetween: 30,
    //     // slidesPerView: 1,
    //     loop: true
    // });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true
    });

	var navHeight = $('.nav-wrapper').outerHeight(true);

	var navClass = $('.nav-main a.js-internal, .page-nav-svg, .js-section-btn');

	// Global scrollTo click event

	// Need to write an if statement that detects class for 'Resume' to remove e.preventDefault();

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

			// display none added to the image id
			// $("#apod_img_id").css("display", "none");

			// we want to insert a fallback image url when a video is detected
			$('.block-nasa').css('background', 'url(' + fallbackImageUrl + ') top center no-repeat');
				// console.log('should be loading the fallback image');

			// video url embedded
			// $("#apod_vid_id").attr("src", result.url);

		} else {

		    $('.block-nasa').css('background', 'url(' + result.url + ') top center no-repeat');
		    	// console.log('loading NASA APOD Image');
		}	
	}


	// Animating on scroll position
	$('#stats').addClass('hidden-animation').viewportChecker({
        classToAdd: 'animation-begin visible-animation',
        offset: 100
    });

    // $('.stat-bars').viewportChecker({
    //     classToAdd: 'is-playing',
    //     offset: 100
    // });

	// var animateStats = $('.stat-bar-adobe, .stat-bar-ai, .stat-bar-fe, .stat-bar-id, .stat-bar-ps, .stat-bar-premiere, .stat-bar-ae, .stat-bar-mini-css, .stat-bar-mini-wp, .stat-bar-mini-jquery, .stat-bar-mini-sass, .stat-bar-art, .stat-bar-photog, .stat-bar-work');
	// // var animateStats = $('.stat-bars');
    
 //    animateStats.addClass('stat-bar-animate').viewportChecker({
 //        classToAdd: animateStats,
 //        classToRemove: 'stat-bar-animate',
 //        offset: 180
 //    });

    $('#page-nav').addClass('start-svg-animate').viewportChecker({
        classToAdd: 'stop-svg-animate',
        classToRemove: 'start-svg-animate',
        offset: 400
    });


    
    // Faking the animation intro
    setTimeout(function(){

        $('body').addClass('loaded');

        if ($('body').hasClass('loaded')){
        	$('.wrapper').delay(300).queue(function(next){
        		$(this).removeClass('hidden-main-content');
        		next();
        	});
    	}
    
    }, 2900);


    // Delaying the stat bar animation
    setTimeout(function(){

		$('.stat-bars').viewportChecker({
			classToAdd: 'is-playing',
			offset: 100
		});

			if ($('.stat-bars').hasClass('is-playing')){
				$('.stat-bars').delay(300).queue(function(next){
					$(this).addClass('hidden-main-content');
		   		next();
		   	});
			}
    
    });


}); // end doc on ready