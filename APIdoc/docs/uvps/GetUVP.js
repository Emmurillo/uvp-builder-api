/**
 *
 * @api {get} /uvps/:_id Retrieve an UVP.
 * @apiVersion 1.0.0
 * @apiName GetUVP
 * @apiGroup UVPs
 * @apiUse GenericError
 *
 * @apiDescription Retrieve an UVP by identifier.
 *
 * @apiParamExample Example query:
 * GET /uvps/560d9f4e99d465bf63e151a9 HTTP/1.1
 * Retrieve the 560d9f4e99d465bf63e151a9 UVP.
 *
 * @apiParamExample Example fields:
 * GET /uvps/560d9f4e99d465bf63e151a9?fields=user+method+created_at HTTP/1.1
 * Get UVPs with only user, method, created_at and _id (default) fields.
 *
 * @apiSuccess {String}									_id				UVP's identifier.
 * @apiSuccess {String}									user			The creator's Facebook ID.
 * @apiSuccess {String}	  								method			Method's trimmed name identifier.
 * @apiSuccess {String}	  								uvp_text		The created UVP.
 * @apiSuccess {Object[]}	  							fields			Fields that user have filled.
 * @apiSuccess {String}	  							fields.name			Name of the field.
 * @apiSuccess {String}	  							fields.text			Field text.
 * @apiSuccess {Date}			              created_at			The methods creation date.
 * @apiSuccess {Date}			              updated_at			The methods update date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 *   {
 *       "_id": "5612a970c24ad98925cccffc",
 *       "user": "79839885729083472984573908547",
 *       "method": "ThreeWords",
 *       "uvp_text": "Unique, Popular and Truthful Interviews",
 *       "fields": [
 *         {
 *           "text": "Unique",
 *           "name": "word1"
 *         },
 *         {
 *           "text": "Popular",
 *           "name": "word2"
 *         },
 *         {
 *           "text": "Truthful",
 *           "name": "word3"
 *         },
 *         {
 *           "text": "Interviews",
 *           "name": "product"
 *         }
 *      ],
 *      "created_at": "2015-10-05T16:46:03.733Z",
 *      "updated_at": "2015-10-05T16:46:03.733Z"
 *  }
 *
 */
