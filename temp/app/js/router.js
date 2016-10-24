define([	
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