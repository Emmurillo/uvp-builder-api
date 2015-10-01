(function(){

  'use strict';

  var mongoose = require('mongoose');


  var uvpSchema = new mongoose.Schema({
    user: String,
    method: String,
    fields: Array,
    uvp_text: String,
    created_at: {
      type: Date,
      default: new Date()
    },
    updated_at: Date
  });

  exports.Uvp = mongoose.model('uvp', uvpSchema);
})();
