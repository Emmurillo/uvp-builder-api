(function(){
  'use strict';

  var methods = require('./method.controller')

  module.exports = function(app){
    app.get('/en_US/methods', methods.getAll);
    app.get('/en_US/methods/:slug', methods.getOne);
    app.post('/en_US/methods', methods.create);
  }

})();
