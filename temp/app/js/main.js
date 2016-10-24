require.config({
	"paths": {
		"jquery": "//cdn.snapptop.com/js/jquery/jquery.slim.min",
		"underscore": "//cdn.snapptop.com/js/lodash/lodash.slim.min",
		"moment": "//cdn.snapptop.com/js/moment/moment.min",
		"backbone": "//cdn.snapptop.com/js/backbone/backbone.min",
		"ba": "//cdn.snapptop.com/js/backbone/ba.min"
	},
	"shim": {
		"jquery": { "exports": "$" },
		"underscore": { "exports": "_" },
		"backbone": { "exports": "Backbone", "deps": ["underscore", "jquery"] },
		"ba": { "deps": ["underscore", "backbone"] }
	},
	"config": {
		//text: {
		//	useXhr: function (url, protocol, hostname, port) {
		//		//Override function for determining if XHR should be used.
		//		//url: the URL being requested
		//		//protocol: protocol of page text.js is running on
		//		//hostname: hostname of page text.js is running on
		//		//port: port of page text.js is running on
		//		//Use protocol, hostname, and port to compare against the url
		//		//being requested.
		//		//Return true or false. true means "use xhr", false means
		//		//"fetch the .js version of this resource".
		//	}
		//}
	}
});

require(['app'], function (app) {
	app.initialize();
});

