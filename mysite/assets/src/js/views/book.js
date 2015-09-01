/**
 * Created by jinming on 15/9/1.
 */
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
   'use strict';

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

    return BookSummaryView;
});