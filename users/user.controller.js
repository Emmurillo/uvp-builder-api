(function(){
  'use strict';

  var model = require('./user.model');
  var User = model.User;
  var messenger = require('./../utils/MessageProvider');

  exports.getAll = function(req, res) {
    User.find(function (error, users) {
      if (error)
        messenger.sendGenericError(res, error);
      else
        messenger.sendResponse(res, users);
    });
  };

  exports.getOne = function(req, res){
    var fb_id = req.params.fb_id;
    User.findOne({'fb_id': fb_id}, function(err, usr){
      if(err){
        messenger.sendGenericError(res, err);
      }
      else if(!usr){
        messenger.sendResourceNotFound(res, User.modelName);
      }
      else{
        messenger.sendResponse(res, usr);
      }
    });
  };

  exports.create = function(req, res) {
    var user = new User(req.body);
    if(!user.fb_id){
      messenger.sendNoParamProvided(res, 'Facebook ID');
    }
    else{
      createIfNoPrevious(res, user);
    }
  };

  function createIfNoPrevious(res, user){
    var fbID = user.fb_id;
    User.findOne({'fb_id': fbID},function(err, userFound){
      if(userFound) {
        messenger.sendInstanceAlreadyCreated(res, User.modelName);
      }
      else{
        user.save(function(err, userCreated){
          if(!err)
            messenger.sendResponse(res, userCreated);
          else
            messenger.sendGenericError(res, err);
        });
      }
    });
  }

})();

