(function(){
  'use strict';

  var Uvp = require('./uvp.controller')

  module.exports = function(app){
    app.get('/uvps/', Uvp.getAll);
    app.get('/uvps/user/:fb_id', Uvp.getAllFromUser);
    app.get('/uvps/:uvp_id', Uvp.getOne);
    app.put('/uvps/:uvp_id', Uvp.update);
    app.post('/uvps/:fb_id', Uvp.create);
  };

})();
