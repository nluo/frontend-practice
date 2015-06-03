var Router = require('hash-router'),
	router = Router();

var showLoginDialog = function() {
	console.log('show login showLoginDialog');
	setTimeout(function(){
		router.go('#/');
	}, 5000);
}

router.addRoute('#/', function(){
	console.log('homer rendered');
});

router.addRoute('#/login', showLoginDialog)

router.on("hash", function (hash, event) {
  console.log("hash changed!", hash)
});

window.addEventListener('hashchange', router);


