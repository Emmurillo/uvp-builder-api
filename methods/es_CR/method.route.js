(function(){
  'use strict';

  var methods = require('./method.controller')

  module.exports = function(app){
    app.get('/methods/lang/es_CR', methods.getAll);
    app.get('/methods/lang/es_CR/:slug', methods.getOne);
    app.post('/methods/lang/es_CR', methods.create);
  }

})();
