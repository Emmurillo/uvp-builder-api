(function(){
  'use strict';

  var mongoose = require('mongoose');

  var model = require('./uvp.model');
  var Uvp = model.Uvp;
  var messenger = require('./../utils/MessageProvider');

  exports.getAll = function(req, res) {
    var user_id = req.params.fb_id
    var query = Uvp.find();
    selectFromQuery(query, req.query);
    query.exec(function (error, uvps){
      if (error)
        messenger.sendGenericError(res, error);
      else
        messenger.sendResponse(res, uvps);
    });
  };

  exports.getAllFromUser = function(req, res) {
    var user_id = req.params.fb_id
    var query = Uvp.find({ 'user': user_id });
    selectFromQuery(query, req.query);
    query.exec(function (error, uvps){
      if (error)
        messenger.sendGenericError(res, error);
      else
        messenger.sendResponse(res, uvps);
    });
  };

  exports.getOne = function(req, res){

    var uvp_id = req.params.uvp_id;
    if (!uvp_id instanceof mongoose.Schema.Types.ObjectId){
      uvp_id = mongoose.Types.ObjectId(uvp_id);
    }

    var query = Uvp.findOne({ '_id': uvp_id });
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
      });
  };

  function selectFromQuery(query, req){
    if(req.fields){
      query.select('_id');
      query.select(req.fields);
    }
  }

  exports.create = function(req, res) {
    var uvp = new Uvp(req.body);
    uvp.user = req.params.fb_id
    uvp.save(function(err, createdUVP){
      if(!err)
        messenger.sendResponse(res, createdUVP);
      else
        messenger.sendGenericError(res, err);
    });
  };

  exports.update = function(req, res) {
    var updates = req.body;
    var uvp_id = req.params.uvp_id;
    Uvp.update(uvp_id, updates, function updateUVP(err, updatedUVP) {
      if(!err)
        messenger.sendResponse(res, updatedUVP);
      else
        messenger.sendGenericError(res, err);
    });
  };

})();
