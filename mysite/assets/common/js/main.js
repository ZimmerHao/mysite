/**
 * Created by jinming on 15/8/19.
 */
(function ($) {
    var BookSummary = Backbone.Model.extend({
        //
        defaults: function() {
            return {
                name: "",
                image: "",
                author: "",
                price: ""
            };
        }
    });

    var BookSummaryList = Backbone.Collection.extend({
        //
        model: BookSummary,

        url: "/douban/books"
    });

    var BookSummarys = new BookSummaryList;

    var BookSummaryView = Backbone.Collection.extend({
       //
        el: $("#book-list"),

        template: _.template($('#book-summary-item-template').html()),

        events: {
            "click .book-item-overview": ""
        },

        initialize: function() {
          this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.el.html(this.template(this.model.toJSON()));
            return this;
        }

    });


    var AppView = Backbone.View.extend({

        el: "#main",

        bookList: $("#book-list"),

        initialize: function () {

            this.listenTo(BookSummarys, 'reset', this.showBookList);
            this.listenTo(BookSummarys, 'all', this.render);

            this.main = $("#main");
            BookSummarys.fetch();
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
            } else {
                this.main.hide()
            }

        }
    });


    //实例化AppView
    var App = new AppView;


})(jQuery);
