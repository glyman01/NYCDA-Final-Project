// DOM
$(document).on('ready', function(){
	
	var navHeight = $('.nav-wrapper').outerHeight(true);
	// $('body').css('margin-top', navHeight);

	var navClass = $('.nav-main a, .page-nav-svg');


	// Global scrollTo click event
	navClass.on('click', function(e){
		e.preventDefault();
		// console.log($(this).attr('href'))

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
		

}); // end doc on ready


// if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
//             window.scrollTo(200,100) // first value for left offset, second value for top offset
// } else {
//             $('html,body').animate({
//                 scrollTop: 100,
//                 scrollLeft: 200
//             }, 800, function(){
//                 $('html,body').clearQueue();
//             });
// }