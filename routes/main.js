var express = require('express');
var router = express.Router();

// Display main page containing make a request and complete a request
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
