({
	stopInterval:null,
	inputsLen: document.getElementsByTagName('input').length,


start: function(){
	var self=this;
	var selected = parseInt(document.querySelector('input:checked').id.split('img')[1]);

	this.stopInterval=setInterval(
	function(){
		selected = (selected>self.inputsLen-1) ? 1 : selected+1;
		var img = 'img'+selected;    
		document.getElementById(img).checked=true
	},5000)

},

stop: function(){
	clearInterval(this.stopInterval)
},

init: function(){
	var self=this;

	var startSlider = document.getElementById('startSlider');
	var stopSlider = document.getElementById('stopSlider');

	startSlider.addEventListener(
		'click',
		function(){
			if(self.stopInterval !== null) return false;
			self.start();	
			this.className='selected';	
			stopSlider.className='';
			},false
		);

	stopSlider.addEventListener(
		'click',
		function(){
			self.stop();
			this.className='selected';	
			startSlider.className='';
			},false
		);
}
}).init()