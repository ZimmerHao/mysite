/**
 * Created by jinming on 15/8/30.
 */
define(function(require, exports, module){
    var Backbone;

    var $ = require('$');
    var _ = require('underscore');
    //console.log("1111111");
    Backbone = require('backbone');
    //console.log(Backbone);

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

    module.exports = BookSummaryView;
})

