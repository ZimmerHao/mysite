/**
 * Created by jinming on 15/8/30.
 */
define(function(require, exports, module){
	var Backbone, AppView;

	Backbone = require('backbone');
	AppView = require('../views/app');

	var AppRouter = Backbone.Router.extend({

        routes: {
            "douban/books/:id" : "bookDetail",
            "douban/books" : "bookList"
        },

        initialize: function() {
            this.appView = new AppView();
        },

        bookList: function() {
            this.appView.showBookList();
        },

        bookDetail: function() {

        }

    });

	module.exports = AppRouter;
})