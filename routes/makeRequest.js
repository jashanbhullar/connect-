var express = require('express');
var router = express.Router();
var fs = require('fs');

// Render make Request page
router.get('/', function(req, res, next) {
	fs.readFile('user.json',function(err,data){
			if(err)
				console.log('Error in read'+err);
			data = JSON.parse(data);
			res.render('makeRequest',{id : data.id});
		});
  
});

module.exports = router;