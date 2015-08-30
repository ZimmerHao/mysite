/**
 * Created by jinming on 15/8/30.
 */
define(function(require, exports, module){
	var Backbone, BookSummary;

	Backbone = require('backbone');
	BookSummary = require('../models/book');

	var BookSummaryList = Backbone.Collection.extend({
        //
        model: BookSummary,

        url: "/douban/books"
    });

	module.exports = new BookSummaryList();
});