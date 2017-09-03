var express = require('express');
var router = express.Router();
var fs = require('fs');

// Get User details
router.get('/', function(req, res, next) {
	console.log(req.query);
	var query = JSON.stringify(req.query);
	if(query != '{}'){
		fs.writeFile('user.json',query,function(err){
			if(err)
				console.log('There is err'+err);
			console.log('File was saved');
			res.send('Updated');
			res.end();
		});
	}
	else{
		fs.readFile('user.json',function(err,data){
			if(err)
				console.log('Error in read'+err);
			res.send(data);
			res.end();
		});
	}
	
});

module.exports = router;