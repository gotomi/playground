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

	init: function () {
		var self, stopSlider, startSlider;
		self = this;

		startStopSlider = document.getElementById('startStopSlider');

		startStopSlider.addEventListener('click', function () {
			if (self.stopInterval !== null) {
				self.stop();
				this.innerHTML='start';
			} else {
				self.start();
				this.innerHTML='stop';
			};
		}, false)
	}
}).init();