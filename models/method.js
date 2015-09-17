(function(){

    'use strict';

    var mongoose = require('mongoose');


    var methodSchema = new mongoose.Schema({
        index: Number ,
        slug: String,
        name: String,
        hasLabels: Boolean,
        formFields: Array,
        template: String,
        example: String
    });

    exports.Method = mongoose.model('method', methodSchema);
})();