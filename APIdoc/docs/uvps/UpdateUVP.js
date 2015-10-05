/**
 * @api {put} /uvps/:uvp_id Update an UVP.
 * @apiVersion 1.0.0
 * @apiName UpdateUVP
 * @apiGroup UVPs
 * @apiUse GenericError
 *
 * @apiDescription Update an UVP.
 *
 * @apiExample Example:
 * POST /uvps/5612a970c24ad98925cccffc HTTP/1.1
 * Content-Type: application/json
 *    {
 *      "method": "ThreeWords",
 *      "uvp_text": "Unique, Great and Truthful Interviews",
 *      "fields": [
 *        {
 *          "name": "word1",
 *          "text": "Unique"
 *        },
 *        {
 *          "name": "word2",
 *          "text": "Great"
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
 * @apiParam {String}	  								[method]			Method's trimmed name identifier.
 * @apiParam {String}	  								[uvp_text]		The created UVP.
 * @apiParam {Object[]}	  							[fields]			Fields that user have filled.
 * @apiParam {String}	  							[fields.name]			Name of the field.
 * @apiParam {String}	  							[fields.text]			Field text.
 *
 * @apiSuccess {Number}									ok				Update status.
 * @apiSuccess {Number}									nModified			Number of rows updated.
 * @apiSuccess {Number}	  							n			Update id.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "ok": 1,
 *       "nModified": 1,
 *       "n": 1
 *     }
 */
