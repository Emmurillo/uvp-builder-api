/**
 *
 * @api {post} /uvps/:fb_id Add a new UVP.
 * @apiVersion 1.0.0
 * @apiName AddUVP
 * @apiGroup UVPs
 * @apiUse GenericError
 *
 * @apiDescription Add a new UVP from an user specified into the request body
 *
 * @apiParamExample Example query:
 * POST /uvps/79839885729083472984573908547 HTTP/1.1
 * Add a new UVP for 79839885729083472984573908547
 *
 * @apiExample Example:
 * POST /uvps/79839885729083472984573908547 HTTP/1.1
 * Content-Type: application/json
 *    {
 *      "method": "ThreeWords",
 *      "uvp_text": "Unique, Popular and Truthful Interviews",
 *      "fields": [
 *        {
 *          "name": "word1",
 *          "text": "Unique"
 *        },
 *        {
 *          "name": "word2",
 *          "text": "Popular"
 *        },
 *        {
 *          "name": "word3",
 *          "text": "Truthful"
 *        },
 *        {
 *          "name": "product",
 *          "text": "Interviews"
 *        }
 *      ]
 *  }
 *
 * @apiParam {String}	  								method			Method's trimmed name identifier.
 * @apiParam {String}	  								uvp_text		The created UVP.
 * @apiParam {Object[]}	  							fields			Fields that user have filled.
 * @apiParam {String}	  							fields.name			Name of the field.
 * @apiParam {String}	  							fields.text			Field text.
 *
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
 *   @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Forbibben
 *     {
 *       "code": 403,
 *       "error": "Forbibben",
 *       "description": "<Instance> already created"
 *     }
 *
 */
