var express = require('express');
var router = express.Router();
var Firebase = require('./firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
	var ref = Firebase.database().ref('/requests');
	ref.once('value',snap =>{
		console.log(snap.val());
		res.render('generalRequests',{data : snap.val()});
	});
});

module.exports = router;
