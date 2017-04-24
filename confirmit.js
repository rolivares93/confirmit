function confirmit(params, callback) {
	var body = document.body;
	var allowLabel = params.allow.trim() || 'Allow';
	var disallowLabel = params.disallow.trim() || 'Disallow';
	var cfmLayer = document.createElement('div');
	var cfmContainer = document.createElement('div');
	var cfmBox = document.createElement('div');
	var cfmMessage = document.createElement('p');
	var cfmBtns = document.createElement('ul');
	var cfmBtnAllow = document.createElement('li');
	var cfmBtnSeparator = document.createElement('li');
	var cfmBtnDisallow = document.createElement('li');

	cfmLayer.classList.add('cfm-layer');
	cfmContainer.classList.add('cfm-container');
	cfmBox.classList.add('cfm-box');
	cfmMessage.classList.add('cfm-message');
	cfmBtns.classList.add('cfm-btns');
	cfmBtnAllow.classList.add('cfm-btn');
	cfmBtnAllow.classList.add('btn-allow');
	cfmBtnDisallow.classList.add('cfm-btn');
	cfmBtnDisallow.classList.add('btn-disallow');
	cfmBtnSeparator.classList.add('cfm-btn');
	cfmBtnSeparator.classList.add('btn-separator');

	cfmMessage.textContent = params.message.trim();
	cfmBtnAllow.textContent = allowLabel.trim();
	cfmBtnDisallow.textContent = disallowLabel.trim();
	cfmBtnSeparator.innerHTML = '&bull;';

	cfmBtns.appendChild(cfmBtnAllow);
	cfmBtns.appendChild(cfmBtnSeparator);
	cfmBtns.appendChild(cfmBtnDisallow);

	cfmBox.appendChild(cfmMessage);
	cfmBox.appendChild(cfmBtns);

	cfmContainer.appendChild(cfmBox);
	cfmLayer.appendChild(cfmContainer);
	body.appendChild(cfmLayer);

	setTimeout(function() {
		cfmLayer.classList.add('visible');
		cfmContainer.classList.add('visible');
	}, 100);

	cfmBtnAllow.addEventListener('click', function() {
		if (typeof callback === 'function') {
			cfmLayer.classList.remove('visible');
			cfmContainer.classList.remove('visible');

			setTimeout(function() {
				cfmLayer.remove();
				callback(true);
			}, 350);
		}
	});

	cfmBtnDisallow.addEventListener('click', function() {
		if (typeof callback === 'function') {
			cfmLayer.classList.remove('visible');
			cfmContainer.classList.remove('visible');

			setTimeout(function() {
				cfmLayer.remove();
				callback(false);
			}, 350);
		}
	});
}
