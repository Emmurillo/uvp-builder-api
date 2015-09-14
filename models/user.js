(function(){

  'use strict';

  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    fb_id: { type: String }
  });

  exports.User = mongoose.model('users', userSchema);
})();

