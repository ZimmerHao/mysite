/**
 * Created by jinming on 15/8/19.
 */

$(function() {
    var BookSummary = Backbone.Model.extend({
        //
        defaults: function() {
            return {
                id: null,
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

    var BookSummarys = new BookSummaryList();

    var BookSummaryView = Backbone.View.extend({
        tagName: "div",

        template: _.template($('#book-item-overview-template').html()),

        initialize: function() {
          this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });



    var AppView = Backbone.View.extend({
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


    //实例化AppView
    var App = new AppView();

});

