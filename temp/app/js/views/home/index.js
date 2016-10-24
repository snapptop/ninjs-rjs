define([
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