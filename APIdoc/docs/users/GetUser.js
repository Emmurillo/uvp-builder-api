/**
 *
 * @api {get} /users/:fb_id Retrieve an user.
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
 * @apiUse GenericError
 *
 * @apiDescription Retrieve the user that matchs the given Facebook ID.
 *
 * @apiParamExample Example query:
 * GET /users/79839885729083472984573908547 HTTP/1.1
 * Retrieve the user with the Facebook ID 79839885729083472984573908547
 *
 * @apiSuccess {String}									  fb_id			The retrieved user's Facebook ID.
 * @apiSuccess {Date}			              created_at			The user's registration date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {
 *       "fb_id": "79839885729083472984573908547"
 *        "created_at": "2015-09-24T15:52:22.368Z"
 *    }
 *
 */
