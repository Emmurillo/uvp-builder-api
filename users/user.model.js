(function(){

  'use strict';

  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    fb_id: String,
    created_at: {
      type: Date,
      default: new Date()
    }
  });

  exports.User = mongoose.model('Users', userSchema);
})();

