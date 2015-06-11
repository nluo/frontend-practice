var cpjax = require('cpjax'),
	fastn = require('./fastn');

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
	propertyModel.set('properties', properties);
});

module.exports = {
	properties: fastn.binding('properties|*').attach(propertyModel)
};