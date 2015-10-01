(function(){
  'use strict';

  var model = require('./uvp.model');
  var Uvp = model.Uvp;
  var messenger = require('./../utils/MessageProvider');

  exports.getAll = function(req, res) {
    var user_id = req.params.fb_id
    var query = Uvp.find({ 'user': user_id });
    selectFromQuery(query, req.query);
    query.exec(function getMethods(error, uvps){
      if (error)
        messenger.sendGenericError(res, error);
      else
        messenger.sendResponse(res, uvps);
    });
  };

  exports.getOne = function(req, res){
    var uvp_id = req.params.uvp_id ;
    var query = Uvp.findOne({'_id': uvp_id});
    selectFromQuery(query, req.query);
    query.exec(function getUvp(err, uvp){
        if(err){
          messenger.sendGenericError(res, err);
        }
        else if(!uvp){
          messenger.sendResourceNotFound(res, 'UVP');
        }
        else{
          messenger.sendResponse(res, uvp);
        }
      }
    );
  };

  function selectFromQuery(query, req){
    if(req.fields){
      query.select('_id');
      query.select(req.fields);
    }
  }

  exports.create = function(req, res) {
    var uvp = new Uvp(req.body);
    method.save(function(err, methodCreated){
      if(!err)
        messenger.sendResponse(res, methodCreated);
      else
        messenger.sendGenericError(res, err);
    });
  };

})();
