(function(){
  'use strict';

  var methods = require('./method.controller');

  module.exports = function(app){
    // Prevent defaults
    app.get('/methods', methods.getAll);
    app.get('/methods/:slug', methods.getOne);
    app.post('/methods', methods.create);

    app.get('/methods/lang/en_US', methods.getAll);
    app.get('/methods/lang/en_US/:slug', methods.getOne);
    app.post('/methods/lang/en_US', methods.create);
  }

})();
