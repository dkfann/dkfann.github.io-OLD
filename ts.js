function bindElements() {
	$('.c-add-health').on('click touchstart', function() {
		
	});

	$('.c-add').click(function() {
		var healthCount = $(this).prev().find('.c-health-counter');
		var newHealth = parseInt(healthCount.html()) + 1;
		healthCount.html(newHealth);
	});

	$('.c-min').click(function() {
		var healthCount = $(this).next().find('.c-health-counter');
		if (parseInt(healthCount.html()) === 0) {
			$(this).parent('.c-health-container').addClass('is-hidden');
		}

		else {
			var newHealth = parseInt(healthCount.html()) - 1;
			healthCount.html(newHealth);
		}
	});

	$('.c-add-shield').on('click touchstart', function(event) {
		// Find the zone that we want to add the shield to
		var selectedZone = $(this).parents('.o-zone');

		bindSelectShield(selectedZone);
	});
}

function bindSelectShield(selectedZone) {
	$('.c-shield-select').on('click touchstart', function(event) {
		console.log('Selected zone is: ' + $(selectedZone))
		// Hide the modal
		$('#c-shield-select-modal').modal('hide');

		// Find the zone that we want to add the shield to
		// Get the id from the selected item to build up the selector.
		var shieldType = event.target.id;
		var shieldTypeSelector = '.c-' + shieldType;

		var shieldContainer = selectedZone.find(shieldTypeSelector);

		shieldContainer.removeClass('is-hidden');
		$('.c-shield-select').off();
	})
}


$(function() {
	console.log('ready');
	bindElements();
})
