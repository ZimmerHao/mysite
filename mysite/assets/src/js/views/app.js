/**
 * Created by jinming on 15/8/30.
 */
define(function(require, exports, module){
	var Backbone, BookSummaryView, BookSummarys, AppView;

  var $ = require('$');

	Backbone = require('backbone');
	BookSummaryView = require('../views/book');
	BookSummarys = require('../collections/books');

	AppView = Backbone.View.extend({
        el: $("#main"),

        bookList: $("#book-list"),

        initialize: function () {
            this.listenTo(BookSummarys, 'all', this.render);
            //this.listenTo(BookSummarys, 'reset', this.showBookList);

            this.main = $("#main");
            BookSummarys.fetch();
            this.render();
        },

        showBookItem: function(bookItem) {
            var view = new BookSummaryView({model: bookItem});
            this.bookList.append(view.render().el);
        },

        showBookList: function() {
            BookSummarys.each(this.showBookItem, this);
        },

        render: function() {
            if (BookSummarys.length) {
                this.main.show();
                this.showBookList();
            } else {
                this.main.hide();
            }

        }
	});

	module.exports = AppView;
})