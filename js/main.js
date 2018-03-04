$(document).ready(function() {
	
	$('#button').on('click', function(e) {
		// e.preventDefault();
		$('#navigation').toggleClass('mobile-open');
	});

	$('#navigation li a').on('click', function(e) {
		$('#navigation').removeClass('mobile-open');
	});

	$(document).on('click', function(e) {
		if( $(e.target).closest('#button, .navigation-list').length ) {
			return;
		}
		else {
			$('#navigation').removeClass('mobile-open');
			e.stopPropagation();
		}
	});
});

