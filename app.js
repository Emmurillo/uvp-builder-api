(function() {

  'use strict';

  var express = require('express'),
    mongoose = require('mongoose'),
    bodyparser = require('body-parser'),
    morgan = require('morgan');

  var app = express();

  var port = process.env.PORT || 8000;

  var en_USmethodsAPI = require('./methods/en_US/method.route');
  var es_CRmethodsAPI = require('./methods/es_CR/method.route');

  var usersAPI = require('./users/user.route');
  var uvpsAPI = require('./uvps/uvp.route');

// Enable CORS support
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended: true}));
  app.use(morgan('dev'));

  app.get('/', function (request, response) {
    response.json({
      Message: "Welcome to UVP Builder's API"
    });
  });

  usersAPI(app);
  uvpsAPI(app);
  en_USmethodsAPI(app);
  es_CRmethodsAPI(app);

  var db = mongoose.connect('mongodb://localhost/' + process.env.db);

  app.listen(port, function () {
    console.log("Server listening on port: " + port);
  });

})();
