(function(){
  'use strict';

  var Uvp = require('./uvp.controller')

  module.exports = function(app){
    app.get('/uvps/user/:fb_id', Uvp.getAll);
    app.get('/uvps/:uvp_id', Uvp.getOne);
    app.post('/uvps', Uvp.create);
  }

})();
