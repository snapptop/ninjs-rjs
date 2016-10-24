define('views/home/index',[
	'jquery',
	'underscore',
	'backbone'
],
function ($, _, Backbone) {
	return Backbone.View.extend({
		el: 'body',
		initialize: function (params) {
			console.log("HOME");
			console.log(params);
			return this;
		},
		render: function () { return this; }
	});
});
define('views/info/index',[
	'jquery',
	'underscore',
	'backbone'
],
function ($, _, Backbone) {
	return Backbone.View.extend({
		el: 'body',
		initialize: function (params) {
			console.log("INFO");
			console.log(params);
			return this;
		},
		render: function () { return this; }
	});
});
define('router',[	
    'jquery',
	'underscore',
    'backbone',
	'views/home/index',
	'views/info/index'
],
function ($, _, Backbone, HomeView, InfoView) {

	var rtr;

	var AppRouter = Backbone.Router.extend({
		routes: {
			'info(/)': 'info',
			'(/)': 'home',
			'*actions': 'def'
		},
		info: function () {
			console.log('Info\n%j', arguments);
			var view = new InfoView();
			view.render();
		},
		home: function () {
			console.log('Home\n%j', arguments);
			var view = new HomeView();
			view.render();
		},
		def: function (actions) {
			console.log('No route\n%j', arguments);
		}
	});

	return {
		initialize: function () {
			rtr = new AppRouter;
			Backbone.history.start({ pushState: true });
			return rtr;
		}
	};
});
define('app',[
	'jquery',
	'underscore',    
    'backbone',
	'router'
],
function ($, _, Backbone, Router) {
	return {
		initialize: function () {
			Router.initialize();
		}
	};
});
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


define("main", function(){});

