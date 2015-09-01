/**
 * Created by jinming on 15/9/1.
 */
define(['backbone', 'models/book'], function(Backbone, BookSummary) {
    'use strict';

    var BookSummaryList = Backbone.Collection.extend({
        //
        model: BookSummary,

        url: "/douban/books"
    });

    return new BookSummaryList();
});