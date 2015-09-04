/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: '../../components/jquery/dist/jquery',
		underscore: '../../components/underscore/underscore',
		backbone: '../../components/backbone/backbone',
		text: '../../components/text/text'
	}
});

require([
	'backbone',
	'routers/router'
], function (Backbone, AppRouter) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	var router = new AppRouter();
	Backbone.history.start();

	// Initialize the application view
	//new AppView();
});
