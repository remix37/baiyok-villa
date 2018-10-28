//= require jquery/index.js
//= require jquery.cookie/jquery.cookie.js
//= require cookieCuttr/jquery.cookiecuttr.js
//= require popper.min/index.js
//= require boostrap/dist/js/bootstrap.js
//= require smooth-scroll.polyfills.min/index.js
//= require moment.min/index.js
//= require moment-with-locales.min/index.js
//= require tempusdominus-bootstrap-4.min.js/index.js

if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-128182316-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
}

$(document).ready(function(){

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

	$.cookieCuttr({
		cookieAnalytics: false,
		cookiePolicyLink: '/legal-notice',
		cookieMessage: 'Nous utilisons des cookies sur ce site, vous pouvez <a href="{{cookiePolicyLink}}" title="read about our cookies">en savoir plus ici</a>. Pour utiliser le site comme prévu, veuillez&nbsp;',
		cookieAcceptButtonText: "accepter les cookies"
	});

});
