
module.exports = {
		
	 stringify: function(logIn){
             var logString = '{';
             var length = 1;
              for (var key in logIn){
                      logString+= '"'+ key + '":'+ '"'+ (logIn[key]).replace(/\"/g, '"') + '"';
                      if(length != (_.keys(logIn)).length){
                              console.log(length + "   "+ (_.keys(logIn)).length);
                              logString+= ',';
                              length++;
                     }
             }
             logString+='}';
              return logString;
	 }	
};