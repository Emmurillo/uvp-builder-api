/**
 *
 * @api {get} /methods/:slug Retrieve a method.
 * @apiVersion 1.0.0
 * @apiName GetMethod
 * @apiGroup Methods
 * @apiUse GenericError
 *
 * @apiDescription Retrieve a method from a specific language. You can get an specific language by request /methods/lang/:lang/:slug
 * <br>Currently only en_US and es_CR are available.
 *
 * @apiParamExample Example query:
 * GET /methods/lang/es_CR/GeoffMoores HTTP/1.1
 * Retrieve all the methods in Costarrican Spanish.
 * Redirects to methods /methods/lang/en_US/GeoffMoores if /methods/GeoffMoores
 *
 * @apiParamExample Example fields:
 * GET /methods/lang/es_CR/GeoffMoores?fields=name+has_labels+template HTTP/1.1
 * Get Methods with only name, has_labels, template and slug (default) fields.
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
 *       "index": 0,
 *       "slug": "GeoffMoores",
 *       "name": "Geoff Moore's Value Positioning Statement",
 *       "has_labels": true,
 *       "template": "Para $customer que $need nuestro $product es $category que $benefit",
 *       "example": "Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.",
 *       "created_at": "2015-09-24T15:52:22.368Z",
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
 */
