var fastn = require('./fastn'),
	propertyService = require('./property');

var app = require('./propertyList')();



window.onload = function(){
    app.render();
    document.body.appendChild(app.element);
};