(function(){
  'use strict';

  var model = require('./method.model');
  var Method = model.Method;
  var messenger = require('./../../utils/MessageProvider');
  var resources = require('./../../utils/resources');

  exports.getAll = function(req, res) {
    Method.find(function (error, methods) {
      if (error)
        messenger.sendGenericError(res, error);
      else
        messenger.sendResponse(res, methods);
    });
  };

  exports.getOne = function(req, res){
    var slug = req.params.slug ;
    Method.findOne({'slug': slug}, function(err, meth){
      if(err){
        messenger.sendGenericError(res, err);
      }
      else if(!meth){
        messenger.sendResourceNotFound(res, 'Method');
      }
      else{
        messenger.sendResponse(res, meth);
      }
    });
  };

  exports.create = function(req, res) {
    var method = new Method(req.body);
    if(method.slug === undefined){
      messenger.sendNoParamProvided(res, 'slug');
    }
    else{
      createIfNoPrevious(res, method);
    }
  };

  function createIfNoPrevious(res, method){
    var slug = method.slug;
    Method.findOne({'slug': slug},function(err, methodFound){
      if(methodFound) {
        messenger.sendInstanceAlreadyCreated(res, 'Method ' + slug)
      }
      else{
        method.save(function(err, methodCreated){
          if(!err)
            messenger.sendResponse(res, methodCreated);
          else
            messenger.sendGenericError(res, err);
        });
      }
    });
  }

})();