//= require gsap/src/minified/TweenMax.min.js

var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.nav-sticky ul li a.active').removeClass('active');
						$('.nav-sticky ul li a').eq(i).addClass('active');
				}
		});

		/* Check the location of each desired element */
		$('.hideme').each( function(i){
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
					$(this).addClass("showImages");
				}
		});

}).scroll();

// Animation TwinMax

function animation(){

	var tl = new TimelineLite();

	tl.from($('.nav-sticky'), 1, {
		autoAlpha: 0
	}, "+=0.5");

	tl.from($('.villa'), 1.5, {
		width: 0,
		ease:Power4.easeInOut
	}, "-=0.8");

	tl.from($('.big-title'), 1, {
		width: 0,
		padding: 0,
		ease:Power4.easeInOut
	}, "-=0.8");

	tl.from($('.big-title h1'), 1, {
		autoAlpha: 0
	});

	tl.staggerFrom($('.icon-white'), 1, {
		autoAlpha: 0
	}, 0.2, "-=0.8");

	tl.from($('.discover'), 1, {
		transform: 'scaleY(0)',
		ease:Power4.easeInOut
	}, "-=0.8");

	tl.from($('.discover').find('.text-right'), 1, {
		autoAlpha: 0
	});

	tl.from($('section:not(#Home), .footer'), 1, {
		autoAlpha: 0,
		display: 'none'
	}, '#final' ,"-=0.8");

	tl.from($('.cc-cookies'), 0.8, {
		'padding-top': 0,
		'padding-bottom': 0,
		height: 0,
		display: 'none',
		autoAlpha: 0,
		ease:Power4.easeOut
	}, '#final');

	tl.from($('.cc-cookies .cc-cookies-inner'), 0.3, {
		autoAlpha: 0,
		ease:Power4.easeOut
	}, "-=0.5");


	// tl.progress(0.8);

}

$(document).ready(function(){

  if(window.location.hash == '#thank-you'){
    $('#thank-you').removeClass('d-none');
    $('.thank-you-message').removeClass('hide').addClass('show');
    $('.top-content').addClass('pt-4');
  }else if(window.location.hash != '#disable'){
    animation();
  }

});
