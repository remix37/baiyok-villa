// This is where it all goes :)

//= require jquery-3.3.1.slim.min/index.js
//= require popper.min/index.js
//= require boostrap/dist/js/bootstrap.js
//= require smooth-scroll.polyfills.min/index.js
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
}).scroll();

// Animation TwinMax

function animation(){

	var tl = new TimelineLite();

	tl.from($('.villa'), 2, {
		width: 0,
		ease:Power4.easeInOut
	}, '.villa');

	tl.from($('.big-title'), 1, {
		width: 0,
		padding: 0,
		ease:Power4.easeInOut
	});

	tl.from($('.big-title h1'), 1, {
		autoAlpha: 0
	});

	tl.staggerFrom($('.icon-white'), 1, {
		autoAlpha: 0
	}, 0.5);



}


$(document).ready(function(){
	animation();
});
