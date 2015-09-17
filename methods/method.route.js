(function(){
    'use strict';

    var methods = require('./method.controller')

    module.exports = function(app){
        app.get('/methods', methods.getAll);
        app.get('/methods/:index', methods.getOne);
        app.post('/methods', methods.create);
    }

})();






