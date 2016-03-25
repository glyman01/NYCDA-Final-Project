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
	   			// position: 'initial',
	   			height: '0',
	   		});
	    } else {
	    	$('.js-scroll').removeClass('planet-nav');
	    	$('.js-nav-reset').css({
	   			position: 'absolute',
	   			height: 'auto',
	   		});
	    }

	});


}); // end doc on ready