(function(){
  'use strict';

  var methods = require('./method.controller')

  module.exports = function(app){
    // Prevent defaults
    app.get('/methods', function(req, res) {
      res.redirect('/methods/lang/en_US');
    });

    app.get('/methods/:slug', function(req, res) {
      res.redirect('/methods/lang/en_US/' + req.params.slug);
    });

    app.post('/methods/:slug', function(req, res) {
      res.redirect('/methods/lang/en_US');
    });

    app.get('/methods/lang/en_US', methods.getAll);
    app.get('/methods/lang/en_US/:slug', methods.getOne);
    app.post('/methods/lang/en_US', methods.create);
  }

})();
