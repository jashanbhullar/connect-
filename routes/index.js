var express = require('express');
var router = express.Router();
var Firebase = require('./firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Time Keeps Ticking' });
});

module.exports = router;