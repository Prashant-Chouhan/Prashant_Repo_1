var server = require('./lib/api/gateway');

var routes ={};
 
 	routes['daisy'] = require('./modules/daisy/daisy');
 	routes['luigi'] = require('./modules/luigi/luigi');
 	
 	// The module dedicated to provide services only ts9meosd CMS Clients
 	routes['CMS-Site-Clients'] = require('./modules/CMS-Site-Clients/cmssite.js');
 	
console.log("Starting server");
 

/*var _  = require("underscore");
var def  = require("./config/default");
var router = require('./routes');
var daisy = require('./modules/daisy/app');*/

/*
server.('/', function(req, res, next){
	res.send(200);
});*/


server.get('/', function (req, res) {
    res.sendStatus(200);
});
module.exports = server;

