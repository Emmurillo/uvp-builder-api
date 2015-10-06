(function(){

  'use strict';

  var mongoose = require('mongoose');


  var uvpSchema = new mongoose.Schema({
    user: String,
    method: String,
    fields: Array,
    created_at: {
      type: Date,
      default: new Date()
    },
    updated_at: Date
  });

  exports.Uvp = mongoose.model('uvp', uvpSchema);
})();
