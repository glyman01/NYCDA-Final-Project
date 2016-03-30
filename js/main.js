// DOM
$(document).on('ready', function(){
	
	var navHeight = $('.nav-wrapper').outerHeight(true);

	var navClass = $('.nav-main a.js-internal, .page-nav-svg, .section-btn');

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
        offset: 100
    });

    $('.stat-bars').viewportChecker({
        classToAdd: 'is-playing',
        offset: 400
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


    
    // Faking the animation intro
    setTimeout(function(){

        $('body').addClass('loaded');

        if ($('body').hasClass('loaded')){
        	$('.wrapper').delay(400).show();
    	
    	} else {
    	
    		$('.wrapper').hide();
    	};
    
    }, 4000);


    // Let's get this working

    // no scroll
	function noScroll() {
		window.scrollTo(0, 0);
	}

    noScroll(function(){
    	if ($('body').hasClass('.loaded')) {
		
			// enable scrolling
			window.removeEventListener('scroll', noscroll);
		
		} else {
		
			// disable scrolling 
			window.addEventListener('scroll', noscroll);		
		};
    })
		

}); // end doc on ready