var path = require('path');
var smsasso = require('./lib/api/smsasso/smsasso');
var gateway = require(path.resolve('./lib/api/gateway'));

gateway.get('/cmssite/smsasso/getForm/:form', smsasso.getForm);
 
