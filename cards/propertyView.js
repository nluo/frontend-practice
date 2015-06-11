var fastn = require('./fastn');


module.exports = function() {
	return fastn('li',
		fastn('img', {
			src: fastn.binding('images.main', function(object){
				return object;
			})
		})
	);
};