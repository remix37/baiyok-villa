// This is where it all goes :)

//= require jquery-3.3.1.slim.min/index.js
//= require popper.min/index.js
//= require boostrap/dist/js/bootstrap.js
//= require smooth-scroll.polyfills.min/index.js
//= require gsap/src/minified/TweenMax.min.js
//= require baguettebox.js/src/baguetteBox.js
//= require moment.min/index.js
//= require moment-with-locales.min/index.js
//= require tempusdominus-bootstrap-4.min.js/index.js


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

	tl.staggerFrom($('section:not(#Home), .footer'), 1, {
		autoAlpha: 0,
		display: 'none'
	}, 0.2 ,"-=0.8");

	// tl.progress(1);

}

$(document).ready(function(){

	if(window.location.hash == '#thank-you'){
		$('#thank-you').removeClass('d-none');
		$('.thank-you-message').removeClass('hide').addClass('show');
		$('.top-content').addClass('pt-4');
	}else if(window.location.hash != '#disable'){
		animation();
	}

	baguetteBox.run('.gallery');
});


$(function () {

    $('#datetimepicker7').datetimepicker({
				locale: 'fr',
        format: 'L'
    });
    $('#datetimepicker8').datetimepicker({
				locale: 'fr',
				format: 'L',
        useCurrent: false
    });
    $("#datetimepicker7").on("change.datetimepicker", function (e) {
        $('#datetimepicker8').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker8").on("change.datetimepicker", function (e) {
        $('#datetimepicker7').datetimepicker('maxDate', e.date);
    });
});
