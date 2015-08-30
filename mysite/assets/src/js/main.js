define(function(require){

    var Backbone = require('backbone');
    alert(Backbone);
    var AppRouter = require('./routers/router');
    new AppRouter();
    Backbone.history.start();

});


