var express = require('express');
var router = express.Router();
var Firebase = require('./firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.end();
});

router.post('/',function(req,res,next){
	console.log('Received');
	console.log(req);
	res.end();
});

module.exports = router;
