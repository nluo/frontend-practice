var fastn = require('./fastn');


module.exports = function() {
	return fastn('div', {},
		fastn('img', {
			src: fastn.binding('images.main', function(object){
				console.log(object);
				return object;
			})
		})
	);
};