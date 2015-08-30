/**
 * Created by jinming on 15/8/30.
 */
define(function(require, exports, module){
	var Backbone = require('backbone');

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

	module.exports = BookSummary;
});