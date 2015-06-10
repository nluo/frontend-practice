var cpjax = require('cpjax'),
	fastn = require('./fastn');

console.log('fastn is ', fastn);
function getProperties(callback) {
	cpjax({
		url: './properties.json',
		dataType: 'json'
	}, callback);
}

var propertyModel = new fastn.Model({
	properties: []
});

getProperties(function(error, properties){
	if (error) {
		return;
	}
	console.log(properties);
	propertyModel.set('properties', properties);
});

module.exports = {
	properties: fastn.binding('properties|*').attach(propertyModel)
};