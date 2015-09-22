(function(){
  'use strict';

  var methods = require('./method.controller')

  module.exports = function(app){
    app.get('/es_CR/methods', methods.getAll);
    app.get('/es_CR/methods/:slug', methods.getOne);
    app.post('/es_CR/methods', methods.create);
  }

})();
