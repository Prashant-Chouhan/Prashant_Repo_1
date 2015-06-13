var express = require('express');
var router = express.Router();
var path = require('path');
var daisy = require(path.resolve('./modules/daisy/routes/'));

module.exports = {
	invokeMe: function(req, res, next){
	console.log("I was Invoked");
	next();
},

/* GET home page. */
   daisy: router.get('/daisy', function(req, res, next) {
	daisy.daisyHome(req, res);  
})

};


 