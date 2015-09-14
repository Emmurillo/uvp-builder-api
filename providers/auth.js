(function(){

  'use strict';

  var model = require('./../models/user');
  var User = model.User;
  var messenger = require('./../utils/MessageProvider');
  var resources = require('./../utils/resources');

  exports.authenticate = function(req, res){
    var user = req.body;
    var fb_id = user.fb_id;
    if(!fb_id)
      messenger.sendNoFBIDProvided(res);
    else{
      User.findOne({'fb_id': fb_id}, function(err, usr){
        if(err){
          messenger.sendGenericError(res, err);
        }
        else if(!usr){
          messenger.sendUserNotFound(res);
        }
        else{
          var token = resources.getAccessToken(usr);
          messenger.sendAuthenticated(res, usr, token);
        }
      });
    }
  };

})();


