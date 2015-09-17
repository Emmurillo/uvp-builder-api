(function(){
    'use strict';

    var model = require('./method.model');
    var Method = model.Method;
    var messenger = require('./../utils/MessageProvider');
    var resources = require('./../utils/resources');

    exports.getAll = function(req, res) {
        Method.find(function (error, methods) {
            if (error)
                messenger.sendGenericError(res, error);
            else
                messenger.sendResponse(res, methods);
        });
    };

    exports.getOne = function(req, res){
        var index = req.params.index;
        Method.findOne({'index': index}, function(err, meth){
            if(err){
                messenger.sendGenericError(res, err);
            }
            else if(!meth){
                messenger.sendResourceNotFound(res, Method.modelName);
            }
            else{
                messenger.sendResponse(res, meth);
            }
        });
    };

    exports.create = function(req, res) {
        var method = new Method(req.body);
        if(method.index === undefined){
            messenger.sendNoParamProvided(res, 'index');
        }
        else{
            createIfNoPrevious(res, method);
        }
    };

    function createIfNoPrevious(res, method){
        var index = method.index;
        Method.findOne({'index': index},function(err, methodFound){
            if(methodFound) {
                messenger.sendInstanceAlreadyCreated(res, Method.modelName)
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






