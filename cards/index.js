var fastn = require('./fastn'),
	propertyService = require('./property');

console.log('properties are ', propertyService.properties);

var app = fastn('div', {class: 'cards-list'},
		require('./propertyList')()
	);


window.onload = function(){
    app.render();
    document.body.appendChild(app.element);
};