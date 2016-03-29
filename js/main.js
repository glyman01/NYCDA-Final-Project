// DOM
$(document).on('ready', function(){
	
	var navHeight = $('.nav-wrapper').outerHeight(true);

	var navClass = $('.nav-main a, .page-nav-svg, .section-btn');


	// Need to write an if statement that detects class for 'Resume' to remove e.preventDefault();

	// Global scrollTo click event

	navClass.on('click', function(e){
		e.preventDefault();

		navClass.removeClass('is-current');

		$(this).addClass('is-current');

		var whereToScroll = $(this).attr('href');

		$.scrollTo(whereToScroll, {
			duration: 1000,
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

	$.ajax({
	  url: url,
	  success: handleResult
	});

	function handleResult(result){
	    $('.block-nasa').css('background', 'url(' + result.url + ') top center no-repeat');
	}


	// Animating on scroll position
	$('#stats').addClass('hidden-animation').viewportChecker({
        classToAdd: 'animation-begin visible-animation',
        offset: 200
    });

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
		

}); // end doc on ready