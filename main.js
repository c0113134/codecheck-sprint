'use strict';
var
  express = require('express'),
    app = express(),
      port = process.env.PORT || 3000,
        parser = require('body-parser');

        app.use(parser.urlencoded({ extended:false}));
	app.use(parser.json());
	app.use(express.static(__dirname + '/public'))

	app.get('/api/projects', function (req, res, next) {
	  res.json('実装するで～');
	    return next();
	    });

	    app.get('/api/projects/:id', function (req, res, next) {
	      var id = req.params.id;
	      res.status(404).json('NotFound');
	        return next();
		});

		app.post('/api/badrequest', function (req, res, next) {
		  res.status(400).json('BadRequest');
		    return next();
		    })

		    app.listen(port, function () {
		      console.log('Server running with port', port);
		      });
