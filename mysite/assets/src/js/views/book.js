/**
 * Created by jinming on 15/9/1.
 */
define(['jquery',
        'underscore',
        'backbone',
        'text!templates/book-overview.html'
], function($, _, Backbone, bookItemOverviewTemplate) {

    'use strict';

    var BookSummaryView = Backbone.View.extend({
        tagName: "div",

        template: _.template(bookItemOverviewTemplate),

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