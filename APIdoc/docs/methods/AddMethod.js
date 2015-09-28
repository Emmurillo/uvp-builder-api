/**
 *
 * @api {post} /methods Add a new method.
 * @apiVersion 1.0.0
 * @apiName AddMethod
 * @apiGroup Methods
 * @apiUse GenericError
 *
 * @apiDescription Add a new method definition from a specific language. You can get an specific language by request /methods/lang/:lang
 * <br>Currently only en_US and es_CR are available.
 *
 * @apiParamExample Example query:
 * POST /methods/lang/es_CR HTTP/1.1
 * Add a new method entry in Costarrican Spanish.
 * Redirects to methods /methods/lang/en_US if /methods
 *
 * @apiExample Example:
 * POST /methods/lang/es_CR HTTP/1.1
 * Content-Type: application/json
 *    {
 *       "slug": "GeoffMoores",
 *       "name": "Geoff Moore's Value Positioning Statement",
 *       "has_labels": true,
 *       "template": "Para $customer que $need nuestro $product es $category que $benefit",
 *       "example": "Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.",
 *       "form_fields": [
 *         {
 *           "name": "customer",
 *           "placeholder": "consumidor meta",
 *           "label": "Para"
 *         },
 *         {
 *           "name": "need",
 *           "placeholder": "declaración de necesidad u oportunidad",
 *           "label": "que"
 *         },
 *         {
 *           "name": "product",
 *           "placeholder": "nombre del producto/servicio",
 *           "label": "nuestro"
 *         },
 *         {
 *           "name": "category",
 *           "placeholder": "un/una categoría de producto",
 *           "label": "es"
 *         },
 *         {
 *           "name": "benefit",
 *           "placeholder": "declaración de beneficio",
 *           "label": "que"
 *         }
 *     ]
 *   }
 *
 * @apiParam {Number}									index				Method index indicator.
 * @apiParam {String}	  								slug			Method's trimmed name identifier.
 * @apiParam {String}	  								name			The method's full name.
 * @apiParam {Boolean}	  							has_labels			Flag to check if the form has labels.
 * @apiParam {String}	  							  template		Text with spots to build de UVP.
 * @apiParam {String}	  							  [example]			The method's implementation example.
 * @apiParam {Object[]} 								form_fields			The list of form fields.
 * @apiParam {String}			                        form_fields.name			The form field identifier used into the template.
 * @apiParam {String}			                        [form_fields.placeholder]			The field's placeholder.
 * @apiParam {String}			                        [form_fields.label]			The fields title if applies.
 *
 *
 * @apiSuccess {Number}									index				Method index indicator.
 * @apiSuccess {String}	  								slug			Method's trimmed name identifier.
 * @apiSuccess {String}	  								name			The method's full name.
 * @apiSuccess {Boolean}	  							has_labels			Flag to check if the form has labels.
 * @apiSuccess {String}	  							    template			Text with spots to build de UVP.
 * @apiSuccess {String}	  							    example			The method's implementation example.
 * @apiSuccess {Object[]} 								form_fields			The list of form fields.
 * @apiSuccess {String}			                        form_fields.name			The form field identifier used into the template.
 * @apiSuccess {String}			                        form_fields.placeholder			The field's placeholder.
 * @apiSuccess {String}			                        form_fields.label			The fields title if applies.
 * @apiSuccess {Date}			              created_at			The methods creation date.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
 *    {
 *       "slug": "GeoffMoores",
 *       "name": "Geoff Moore's Value Positioning Statement",
 *       "has_labels": true,
 *       "template": "Para $customer que $need nuestro $product es $category que $benefit",
 *       "example": "Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.",
 *       "form_fields": [
 *         {
 *           "name": "customer",
 *           "placeholder": "consumidor meta",
 *           "label": "Para"
 *         },
 *         {
 *           "name": "need",
 *           "placeholder": "declaración de necesidad u oportunidad",
 *           "label": "que"
 *         },
 *         {
 *           "name": "product",
 *           "placeholder": "nombre del producto/servicio",
 *           "label": "nuestro"
 *         },
 *         {
 *           "name": "category",
 *           "placeholder": "un/una categoría de producto",
 *           "label": "es"
 *         },
 *         {
 *           "name": "benefit",
 *           "placeholder": "declaración de beneficio",
 *           "label": "que"
 *         }
 *     ],
 *        "created_at": "2015-09-24T15:52:22.368Z"
 *   }
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
