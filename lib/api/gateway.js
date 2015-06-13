
var express = require('express'),
    gateway     = express(),
    path    = require('path');
	
	/*View Engine*/
	gateway.set('views',path.resolve('./modules'));
	gateway.set('view engine', 'ejs');
	
	
	/*To define all css and js content location*/ 
	gateway.use(express.static(path.resolve('./public')));
 	
	var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
	var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

	var server = gateway.listen(port, ipaddress, function () {
		  var host = server.address().address;
		  var port = server.address().port;
		  console.log('Example app listening at http://%s:%s', host, port);
	});

module.exports = gateway;