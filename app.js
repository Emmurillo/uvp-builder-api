(function() {

  'use strict';

  var express = require('express'),
    mongoose = require('mongoose'),
    bodyparser = require('body-parser'),
    morgan = require('morgan');

  var app = express();

  var port = process.env.PORT || 8000;
  var usersAPI = require('./users/user.route');

// Enable CORS support
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST")
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

  var db = mongoose.connect('mongodb://localhost/UVP');

  app.listen(port, function () {
    console.log("Server listening on port: " + port);
  });

})();