function confirmit(obj, callback) {
	var allow = $.trim(obj.allow) || 'Allow';
	var disallow = $.trim(obj.disallow) || 'Disallow';
	var $cfmLayer = $('<div class="cfm-layer"></div>');
	var $cfmContainer = $('<div class="cfm-container"></div>');
	var $cfmBox = $('<div class="cfm-box"></div>');
	var $cfmMessage = $('<p class="cfm-message">' + $.trim(obj.message) + '</p>');
	var $cfmBtns = $('<ul class="cfm-btns"></ul>');
	var $cfmBtnAllow = $('<li class="cfm-btn btn-allow">' + allow + '</li>');
	var $cfmBtnBullet = $('<li class="cfm-btn btn-separator">&bull;</li>');
	var $cfmBtnDisallow = $('<li class="cfm-btn btn-disallow">' + disallow + '</li>');

	$cfmBtns
		.append($cfmBtnAllow)
		.append($cfmBtnBullet)
		.append($cfmBtnDisallow);
	$cfmBox
		.append($cfmMessage)
		.append($cfmBtns);
	$cfmContainer.append($cfmBox);
	$cfmLayer.append($cfmContainer);
	$('body').append($cfmLayer);

	setTimeout(function() {
		$cfmLayer.addClass('visible');
		$cfmContainer.addClass('visible');
	}, 100);

	$cfmBtnAllow.on('click', function(e) {
		if (typeof callback === 'function') {
			$cfmLayer.removeClass('visible');
			$cfmContainer.removeClass('visible');

			setTimeout(function() {
				$cfmLayer.remove();
				callback(true);
			}, 350);
		}
	});

	$cfmBtnDisallow.on('click', function(e) {
		if (typeof callback === 'function') {
			$cfmLayer.removeClass('visible');
			$cfmContainer.removeClass('visible');

			setTimeout(function() {
				$cfmLayer.remove();
				callback(false);
			}, 350);
		}
	});
};
