(function(){
  
  'use strict';

  var jwt = require('jsonwebtoken');

  var secret = 'UVP_API';
  var config = {
    'expiresInMinutes': 1
  };
  var messenger = require('./MessageProvider');

  exports.getAccessToken = function(usr){
    return jwt.sign(usr, secret, config);
  };

  exports.verifyAccessToken = function(response, access_token){
    jwt.verify(access_token, secret, function(err){
        if(err){
          messenger.sendAuthenticationError(response, err);
        }
      }
    );
  };
  
})();

