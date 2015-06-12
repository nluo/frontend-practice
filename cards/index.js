var fastn = require('./fastn'),
	propertyService = require('./property');

var app = fastn('div', {class: 'flexbox'},
		require('./propertyList')()
	);


window.onload = function(){
    app.render();
    document.body.appendChild(app.element);
};