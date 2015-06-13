var path = require('path');
var str = require( path.resolve('./lib/util/stringUtil') );

module.exports = {
	
     app_version  : 1.0,
     
	 minification : true,
	 
	 secure_cookies_enabled: false,
	 
	 db: {
		daisy_db  : 'daisy_store' 
	 },
	 
	 mysql: {
		 user     : 'root',
		 password : '',
		 host     : 'localhost',
		 port     : '3306'
	 }

     
};