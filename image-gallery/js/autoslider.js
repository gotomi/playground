({
	stopInterval: null,
	inputsLen: document.getElementsByTagName('input').length,


	start: function () {
		var self = this, selected;
		selected = parseInt(document.querySelector('input:checked').id.split('img')[1], 10);

		this.stopInterval = setInterval(

		function () {
			selected = (selected > self.inputsLen - 1) ? 1 : selected + 1;
			var img = 'img' + selected;
			document.getElementById(img).checked = true;
		}, 3000);

	},

	stop: function () {
		clearInterval(this.stopInterval);
		this.stopInterval = null;
	},

	toggleSlider: function (e) {
		if (this.stopInterval !== null) {
				this.stop();
				e.target.innerHTML='start';
			} else {
				this.start();
				e.target.innerHTML='stop';
			};
	},

	init: function () {
		var self = this;

		document.getElementById('startStopSlider').addEventListener('click', function (e) {
			self.toggleSlider(e);
		}, false);

		document.querySelector('ul').addEventListener('click', function() {
			startStopSlider.click();
		});

	}
}).init();