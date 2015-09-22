(function(){

  'use strict';

  var mongoose = require('mongoose');


  var methodSchema = new mongoose.Schema({
    slug: String,
    name: String,
    hasLabels: Boolean,
    formFields: Array,
    template: String,
    example: String,
    created_at: {
      type: Date,
      default: new Date()
    }
  });

  exports.Method = mongoose.model('methods', methodSchema);
})();
