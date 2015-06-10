var fastn = require('./fastn'),
	propertyService = require('./property');

module.exports = function() {
	return fastn('list', 
		{
			items: propertyService.properties,
			template: function(model, scope){
				return require('./propertyView.js')().binding('item');
			}
		}
	);
};