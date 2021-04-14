var express = require('express');
var userModel = require('../models/user');
var base = require('../models/base');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send(base.decorator(userModel.users, 200));
});

router.get('/:userId', function(req, res, next) {
	const user = userModel.getUser(req.params.userId);
	console.log("req.params.userId", req.params.userId, user)
	if(!user) {
		res.send(base.decorator(null, 404));
	} else {
		res.send(base.decorator(user, 200));	
	}
});

module.exports = router;
