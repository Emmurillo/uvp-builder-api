(function() {
  'use strict';

  require ('should');
  var mongoose = require('mongoose');

  var controller = require('./../../users/user.controller.js');

  describe('Users controller', function () {
    describe('When fetching all users', function () {
      var req, res, statusCode, sentData;

      beforeEach(function () {
        res = {
          send: function (code, data) {
            statusCode = code;
            sentData = data;
          }
        };
      });

      it('Should return 200', function () {
        controller.getAll(req, res);
        statusCode.should.equal(200);
      });

    });
  });

})();
