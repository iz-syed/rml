requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
      "jquery-ui":"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min"
    },
    "shim": {
    "bootstrap.min": ["jquery"],
    "smoothscroll": ["jquery"],
		"appeared": ["jquery"],
		"jquery.matchHeight-min": ["jquery"],
    "slick.min": ["jquery"],
    "jquery-ui": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);