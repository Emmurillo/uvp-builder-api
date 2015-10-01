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

  exports.sendNoParamProvided = function(res, param){
    var description = 'A ' + param + ' should be provided into the request body';
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
