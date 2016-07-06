var Header = require('./header');

module.exports = {
	init: function(parentNode){
		parentNode.innerHTML = 'hello world';
		Header.init();
		console.log('container init');
	}
};