//= require jquery-3.3.1.slim.min/index.js
//= require popper.min/index.js
//= require boostrap/dist/js/bootstrap.js
//= require smooth-scroll.polyfills.min/index.js
//= require moment.min/index.js
//= require moment-with-locales.min/index.js
//= require tempusdominus-bootstrap-4.min.js/index.js

$(document).ready(function(){

	if(window.location.hash == '#thank-you'){
		$('#thank-you').removeClass('d-none');
		$('.thank-you-message').removeClass('hide').addClass('show');
		$('.top-content').addClass('pt-4');
	}else if(window.location.hash != '#disable'){
		animation();
	}

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
