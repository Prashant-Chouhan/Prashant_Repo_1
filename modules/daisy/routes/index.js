var express = require('express');
var router = express.Router();

/* GET home page. */
router.daisyHome = router.get('/daisy', function(req, res, next) {
	console.log('Yes I m hiting to index');
	res.send('index');
	next(err);	
});

module.exports = router;
