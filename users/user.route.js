(function(){
  'use strict';

  var users = require('./user.controller')

  module.exports = function(app){
    app.get('/users', users.getAll);
    app.get('/users/:fb_id', users.getOne);
    app.post('/users', users.create);
  }

})();