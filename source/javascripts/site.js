// This is where it all goes :)

//= require boostrap/dist/js/bootstrap.js

var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

		// Assign active class to nav links while scolling
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.nav-sticky ul li a.active').removeClass('active');
						$('.nav-sticky ul li a').eq(i).addClass('active');
				}
		});
}).scroll();
