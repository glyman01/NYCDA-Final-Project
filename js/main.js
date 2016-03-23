// DOM
$(document).on('ready', function(){
	
	var navHeight = $('.nav-wrapper').outerHeight(true);
	$('body').css('margin-top', navHeight);

	var navClass = $('.nav-main a');

	// Hard coded
	// $('.js-scroll').on('click', function(){
	// 	$.scrollTo('#Random', 800);
	// })

	// Global scrollTo click event
	navClass.on('click', function(e){
		e.preventDefault();
		// console.log($(this).attr('href'))

		navClass.removeClass('is-current');

		$(this).addClass('is-current');

		var whereToScroll = $(this).attr('href');

		$.scrollTo(whereToScroll, {
			duration: 1000,
			offset: -navHeight
		})
	})





}); // end doc on ready