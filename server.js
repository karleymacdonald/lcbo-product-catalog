var express = require('express'),
  app = express(),
  request = require('request'),
  qs = require('querystring'),
  path = require('path'),
  bodyParser = require('body-parser')

var expressRouter = function() {
  var router = express.Router();

  router.get('/items', function(req, res, next) {
    var key = 'MDo2OTljNWM5YS1iMzhlLTExZTctYjVkMi1hNzcwYjdlYzc1MWI6WGEwYUNBVnlYUHNhSk5zUzg5aFFJWjRTaXRacDFvMTVYNjdW';

    var options = {
      url: 'https://lcboapi.com/products',
      qs: req.query,
      headers: {
        'Authorization': 'Token token="' + key + '"'
      }
    };

    request.get(options, function(err, response, data) {
      if (err) { return res.status(500).send(); }

      return res.json(JSON.parse(data));
    });
  });

  return router;
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', expressRouter());

app.listen(3001, function() {
  console.log('Server listening on port 3001!');
});