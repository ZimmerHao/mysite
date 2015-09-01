/**
 * Created by jinming on 15/9/1.
 */
define(['backbone', 'views/app'], function(Backbone, AppView) {
   'use strict';

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

    return AppRouter;
});