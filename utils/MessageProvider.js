(function(){
  
  'use strict';


  exports.sendUserNotFound = function(res){
    res
      .status(404)
      .json({
        'description': 'User not found'
      });
  };

  exports.sendNoFBIDProvided = function(res){
    res
      .status(400)
      .json({
        'description': 'A Facebook ID should be provided into the request body'
      });
  };

  exports.sendNoAccessTokenProvided = function(res){
    res
      .status(400)
      .json({
        'description': 'An access token should be provided into the request body'
      });
  };

  exports.sendUserAlreadyCreated = function(res){
    res
      .status(400)
      .json({
        'description': 'User already created'
      });
  };

  exports.sendResponse = function(res, user){
    res
      .status(200)
      .json(user);
  };

  exports.sendAuthenticated = function(res, user, access_token){
    var requestResponse = {
      'user': user,
      'access_token': access_token
    };
    res
      .status(200)
      .json(requestResponse);
  };

  exports.sendAuthenticationError = function(res, err){
    res
      .status(401)
      .json({
        'description': 'Failed to authenticate token.',
        'error': err
      });
  };

  exports.sendGenericError = function(res, err){
    res
      .status(500)
      .json({
        'description': err
      });
  };
})();

