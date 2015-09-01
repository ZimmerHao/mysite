/**
 * Created by jinming on 15/9/1.
 */
define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

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

    return BookSummary;
});