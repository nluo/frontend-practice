var cpjax = require('cpjax'),
	fastn = require('fastn');

function getUsers(callback) {
	cpjax({
		url: './properties.json',
		dataType: 'json'
	}, callback);
}

var propertyModel = new fastn.Model({
	properties: []
});

module.exports = {
	properties: fastn.binding('properties|*').attach(propertyModel)
};