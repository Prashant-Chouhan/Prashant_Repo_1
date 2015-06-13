var app = require('./lib/api/gateway');

var routes ={};
 
 	routes['daisy'] = require('./modules/daisy/daisy');
console.log("Starting server");
 

/*var _  = require("underscore");
var def  = require("./config/default");
var router = require('./routes');
var daisy = require('./modules/daisy/app');*/


app.use('/', function(req, res, next){
	res.send(200);
});

module.exports = app;

