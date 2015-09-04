/**
 * Created by jinming on 15/9/1.
 */
define(['jquery',
        'underscore',
        'backbone',
        'collections/books',
        './book'
], function($, _, Backbone, BookSummarys, BookSummaryView) {

    'use strict';

    var AppView = Backbone.View.extend({
        el: $("#main"),

        bookList: $("#book-list"),

        initialize: function () {
            //this.listenTo(BookSummarys, 'all', this.render);
            //this.listenTo(BookSummarys, 'reset', this.showBookList);

            BookSummarys.fetch();
            this.main = $("#main");

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

    return AppView;
});