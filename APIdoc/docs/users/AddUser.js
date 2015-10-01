/**
 *
 * @api {post} /users Add a new User.
 * @apiVersion 1.0.0
 * @apiName AddUser
 * @apiGroup Users
 * @apiUse GenericError
 *
 * @apiDescription Add a new user with its Facebook ID
 *
 * @apiParamExample Example query:
 * POST /users HTTP/1.1
 * Add a new user.
 *
 * @apiExample Example:
 * POST /users HTTP/1.1
 * Content-Type: application/json
 *    {
 *       "fb_id": "79839885729083472984573908547"
 *    }
 *
 * @apiParam {String}									  fb_id			The ID that Facebook provides for authentication.
 *
 *
 * @apiSuccess {String}									  fb_id			The created user's Facebook ID.
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
 *   @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Forbibben
 *     {
 *       "code": 403,
 *       "error": "Forbibben",
 *       "description": "<Instance> already created"
 *     }
 *
 */
