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
                }
        }
    });

    var BookSummarys = Backbone.Collection.extend({
        //
        model: BookSummary

    });

    var bookSummarys = new BookSummarys

    var BookSummaryView = Backbone.Collection.extend({
       //
        el: $("#bookshelf"),

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

        initialize: function () {
            this.listenTo(bookSummarys, 'all', this.render);
            this.main =$('#main');
        },

        render: function() {
            this.main.show();
        }
    });


    //实例化AppView
    var appview = new AppView;
})(jQuery);
