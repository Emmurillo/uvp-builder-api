/**
 *
 * @api {get} /users Retrieve a list of users.
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 * @apiUse GenericError
 *
 * @apiDescription Retrieve a list of registered users.
 *
 * @apiParamExample Example query:
 * GET /users HTTP/1.1
 * Retrieve all the registered users.
 *
 * @apiSuccess {String}									  fb_id			The user's Facebook ID.
 * @apiSuccess {Date}			              created_at			The user's registration date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
 *  [
 *    {
 *       "fb_id": "79839885729083472984573908547"
 *       "created_at": "2015-09-24T15:52:22.368Z"
 *    },
 *    {
 *       "fb_id": "98457398475982734982738479238"
 *       "created_at": "2015-08-24T15:16:32.256Z"
 *    }
 *  ]
 *
 */
