var express = require('express');
var router = express.Router();
var Firebase = require('./firebase');

router.get('/', function(req, res, next) {
	var id = req.query.id;
	var ref = Firebase.database().ref('requests').orderByChild('id');
	var rep = Firebase.database().ref('replies');
	ref.equalTo(id).once('value',snap =>{
		//console.log(snap.val());
		//res.end();
		var db = snap.val();
		var comments = [];
		var keys = Object.keys(db);
		keys.forEach(key =>{
			var coms = Object.keys(db[key].comments);
			coms.forEach(com =>{
				rep.child(com).once('value',val =>{
					comments.push(val.val());
					res.render('userPage',{data :db,
						replies : comments});
				});
			});
		});
		
	});
});

module.exports = router;