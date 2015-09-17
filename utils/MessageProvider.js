(function(){

  'use strict';


  exports.sendResourceNotFound = function(res, resource){
    var description = resource + ' not found';
    res
      .status(404)
      .json({
        'description': description
      });
  };

<<<<<<< cc26d731081b7a564699b02ee1215ae0ca682b8c
  exports.sendNoParamProvided = function(res, param){
    var description = 'A ' + param + ' should be provided into the request body';
=======
  exports.sendNoIndexProvided = function(res){
    res
      .status(400)
      .json({
        'description': 'An method index be provided into the request body'
      });
  };

  exports.sendNoAccessTokenProvided = function(res){
>>>>>>> Set common functions to handle method requests
    res
      .status(400)
      .json({
        'description': description
      });
  };

  exports.sendInstanceAlreadyCreated = function(res, instance){
    var description = instance + ' already created';
    res
      .status(400)
      .json({
        'description': description
      });
  };

  exports.sendMethodAlreadyCreated = function(res){
    res
      .status(400)
      .json({
        'description': 'Method already created'
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

