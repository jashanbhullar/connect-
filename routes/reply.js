var express = require('express');
var router = express.Router();
var Firebase = require('./firebase');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query);
	fs.readFile('user.json',function(err,data){
			if(err)
				console.log('Error in read'+err);
			data = JSON.parse(data);
			if(data.id == '0'){
				res.render('error',{message :'Please go back and login!'});
			}else{
				res.render('reply',{id : req.query.id,
					user : data
				});
			}
		});
  //res.render('reply');
});

module.exports = router;
