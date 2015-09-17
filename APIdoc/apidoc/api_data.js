define({ "api": [
  {
    "type": "post",
    "url": "/methods",
    "title": "Add a new method.",
    "version": "1.0.0",
    "name": "AddMethod",
    "group": "Methods",
    "description": "<p>Add a new method definition from a specific language. You can get an specific language by request /methods/lang/:lang <br>Currently only en_US and es_CR are available.</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Example query:",
          "content": "POST /methods/lang/es_CR HTTP/1.1\nAdd a new method entry in Costarrican Spanish.\nRedirects to methods /methods/lang/en_US if /methods",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Method index indicator.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "slug",
            "description": "<p>Method's trimmed name identifier.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The method's full name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "has_labels",
            "description": "<p>Flag to check if the form has labels.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "template",
            "description": "<p>Text with spots to build de UVP.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "example",
            "description": "<p>The method's implementation example.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "form_fields",
            "description": "<p>The list of form fields.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.name",
            "description": "<p>The form field identifier used into the template.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "form_fields.placeholder",
            "description": "<p>The field's placeholder.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "form_fields.label",
            "description": "<p>The fields title if applies.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example:",
        "content": "POST /methods/lang/es_CR HTTP/1.1\nContent-Type: application/json\n   {\n      \"slug\": \"GeoffMoores\",\n      \"name\": \"Geoff Moore's Value Positioning Statement\",\n      \"has_labels\": true,\n      \"template\": \"Para $customer que $need nuestro $product es $category que $benefit\",\n      \"example\": \"Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.\",\n      \"form_fields\": [\n        {\n          \"name\": \"customer\",\n          \"placeholder\": \"consumidor meta\",\n          \"label\": \"Para\"\n        },\n        {\n          \"name\": \"need\",\n          \"placeholder\": \"declaración de necesidad u oportunidad\",\n          \"label\": \"que\"\n        },\n        {\n          \"name\": \"product\",\n          \"placeholder\": \"nombre del producto/servicio\",\n          \"label\": \"nuestro\"\n        },\n        {\n          \"name\": \"category\",\n          \"placeholder\": \"un/una categoría de producto\",\n          \"label\": \"es\"\n        },\n        {\n          \"name\": \"benefit\",\n          \"placeholder\": \"declaración de beneficio\",\n          \"label\": \"que\"\n        }\n    ]\n  }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Method index indicator.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "slug",
            "description": "<p>Method's trimmed name identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The method's full name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "has_labels",
            "description": "<p>Flag to check if the form has labels.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "template",
            "description": "<p>Text with spots to build de UVP.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "example",
            "description": "<p>The method's implementation example.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "form_fields",
            "description": "<p>The list of form fields.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.name",
            "description": "<p>The form field identifier used into the template.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.placeholder",
            "description": "<p>The field's placeholder.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.label",
            "description": "<p>The fields title if applies.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "created_at",
            "description": "<p>The methods creation date.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n {\n    \"slug\": \"GeoffMoores\",\n    \"name\": \"Geoff Moore's Value Positioning Statement\",\n    \"has_labels\": true,\n    \"template\": \"Para $customer que $need nuestro $product es $category que $benefit\",\n    \"example\": \"Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.\",\n    \"form_fields\": [\n      {\n        \"name\": \"customer\",\n        \"placeholder\": \"consumidor meta\",\n        \"label\": \"Para\"\n      },\n      {\n        \"name\": \"need\",\n        \"placeholder\": \"declaración de necesidad u oportunidad\",\n        \"label\": \"que\"\n      },\n      {\n        \"name\": \"product\",\n        \"placeholder\": \"nombre del producto/servicio\",\n        \"label\": \"nuestro\"\n      },\n      {\n        \"name\": \"category\",\n        \"placeholder\": \"un/una categoría de producto\",\n        \"label\": \"es\"\n      },\n      {\n        \"name\": \"benefit\",\n        \"placeholder\": \"declaración de beneficio\",\n        \"label\": \"que\"\n      }\n  ],\n     \"created_at\": \"2015-09-24T15:52:22.368Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbibben\n{\n  \"code\": 403,\n  \"error\": \"Forbibben\",\n  \"description\": \"<Instance> already created\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>A parameter is missing.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>A parameter is invalid.</p> "
          }
        ]
      }
    },
    "filename": "docs/methods/AddMethod.js",
    "groupTitle": "Methods"
  },
  {
    "type": "get",
    "url": "/method/:slug",
    "title": "Retrieve a method.",
    "version": "1.0.0",
    "name": "GetMethod",
    "group": "Methods",
    "description": "<p>Retrieve a method from a specific language. You can get an specific language by request /methods/lang/:lang/:slug <br>Currently only en_US and es_CR are available.</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Example query:",
          "content": "GET /methods/lang/es_CR/GeoffMoores HTTP/1.1\nRetrieve all the methods in Costarrican Spanish.\nRedirects to methods /methods/lang/en_US/GeoffMoores if /methods/GeoffMoores",
          "type": "json"
        },
        {
          "title": "Example fields:",
          "content": "GET /methods/lang/es_CR/GeoffMoores?fields=name+has_labels+template HTTP/1.1\nGet Methods with only name, has_labels, template and slug (default) fields.",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Method index indicator.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "slug",
            "description": "<p>Method's trimmed name identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The method's full name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "has_labels",
            "description": "<p>Flag to check if the form has labels.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "template",
            "description": "<p>Text with spots to build de UVP.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "example",
            "description": "<p>The method's implementation example.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "form_fields",
            "description": "<p>The list of form fields.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.name",
            "description": "<p>The form field identifier used into the template.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.placeholder",
            "description": "<p>The field's placeholder.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.label",
            "description": "<p>The fields title if applies.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "created_at",
            "description": "<p>The methods creation date.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n {\n    \"index\": 0,\n    \"slug\": \"GeoffMoores\",\n    \"name\": \"Geoff Moore's Value Positioning Statement\",\n    \"has_labels\": true,\n    \"template\": \"Para $customer que $need nuestro $product es $category que $benefit\",\n    \"example\": \"Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.\",\n    \"created_at\": \"2015-09-24T15:52:22.368Z\",\n    \"form_fields\": [\n      {\n        \"name\": \"customer\",\n        \"placeholder\": \"consumidor meta\",\n        \"label\": \"Para\"\n      },\n      {\n        \"name\": \"need\",\n        \"placeholder\": \"declaración de necesidad u oportunidad\",\n        \"label\": \"que\"\n      },\n      {\n        \"name\": \"product\",\n        \"placeholder\": \"nombre del producto/servicio\",\n        \"label\": \"nuestro\"\n      },\n      {\n        \"name\": \"category\",\n        \"placeholder\": \"un/una categoría de producto\",\n        \"label\": \"es\"\n      },\n      {\n        \"name\": \"benefit\",\n        \"placeholder\": \"declaración de beneficio\",\n        \"label\": \"que\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "docs/methods/GetMethod.js",
    "groupTitle": "Methods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>A parameter is missing.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>A parameter is invalid.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/methods",
    "title": "Retrieve a list of methods.",
    "version": "1.0.0",
    "name": "GetMethods",
    "group": "Methods",
    "description": "<p>Retrieve a list of methods from a specific language. You can get an specific language by request /methods/lang/:lang <br>Currently only en_US and es_CR are available.</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Example query:",
          "content": "GET /methods/lang/es_CR HTTP/1.1\nRetrieve all the methods in Costarrican Spanish.\nRedirects to methods /methods/lang/en_US if /methods",
          "type": "json"
        },
        {
          "title": "Example fields:",
          "content": "GET /methods/lang/es_CR?fields=name+has_labels+template HTTP/1.1\nGet Methods with only name, has_labels, template and slug (default) fields.",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Method index indicator.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "slug",
            "description": "<p>Method's trimmed name identifier.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>The method's full name.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "has_labels",
            "description": "<p>Flag to check if the form has labels.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "template",
            "description": "<p>Text with spots to build de UVP.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "example",
            "description": "<p>The method's implementation example.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "form_fields",
            "description": "<p>The list of form fields.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.name",
            "description": "<p>The form field identifier used into the template.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.placeholder",
            "description": "<p>The field's placeholder.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "form_fields.label",
            "description": "<p>The fields title if applies.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "created_at",
            "description": "<p>The methods creation date.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n\n   [\n     {\n        \"index\": 0,\n        \"slug\": \"GeoffMoores\",\n        \"name\": \"Geoff Moore's Value Positioning Statement\",\n        \"has_labels\": true,\n        \"template\": \"Para $customer que $need nuestro $product es $category que $benefit\",\n        \"example\": \"Para periodistas digitales que luchan para descubrir las incógnitas de la gente nuestro producto es una herramienta editorial que genera poderosas entrevistas para obtener preguntas de las personas.\",\n        \"created_at\": \"2015-09-24T15:52:22.368Z\",\n        \"form_fields\": [\n          {\n            \"name\": \"customer\",\n            \"placeholder\": \"consumidor meta\",\n            \"label\": \"Para\"\n          },\n          {\n            \"name\": \"need\",\n            \"placeholder\": \"declaración de necesidad u oportunidad\",\n            \"label\": \"que\"\n          },\n          {\n            \"name\": \"product\",\n            \"placeholder\": \"nombre del producto/servicio\",\n            \"label\": \"nuestro\"\n          },\n          {\n            \"name\": \"category\",\n            \"placeholder\": \"un/una categoría de producto\",\n            \"label\": \"es\"\n          },\n          {\n            \"name\": \"benefit\",\n            \"placeholder\": \"declaración de beneficio\",\n            \"label\": \"que\"\n          }\n      ]\n    },\n    {\n        \"index\": 1,\n        \"slug\": \"VentureHacks\",\n        \"name\": \"Venture Hacks' High-Concept Pitch\",\n        \"has_labels\": true,\n        \"template\": \"$example for/of $attribute\",\n        \"example\": \"Un flip inteligente para Quora.\",\n        \"created_at\": \"2015-09-24T15:52:22.368Z\",\n        \"form_fields\": [\n          {\n            \"name\": \"example\",\n            \"placeholder\": \"Ejemplo comprobado en la industria\"\n          },\n          {\n            \"name\": \"attribute\",\n            \"placeholder\": \"atributo\",\n            \"label\": \"a/para\"\n          }\n        ]\n     }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "docs/methods/GetMethods.js",
    "groupTitle": "Methods",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>A parameter is missing.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameter",
            "description": "<p>A parameter is invalid.</p> "
          }
        ]
      }
    }
  }
] });