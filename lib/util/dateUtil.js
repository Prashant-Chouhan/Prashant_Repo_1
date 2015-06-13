

module.exports = {

    getCurrentUTCMilliseconds : function() {
        
        var currentTime = Date.now();
        var dateMilliseconds = currentTime;
        return dateMilliseconds;
        
    },
    
    getTimezoneOffsetMilliseconds : function () {
        
        var d = new Date();
        var currentTimeZoneOffset = (d.getTimezoneOffset() * 60 * 1000);
        return currentTimeZoneOffset;
    
    },
    
    getTimeApplyOffset : function (offset) {
        
        var currentTime = Date.now();
        var dateMilliseconds = currentTime - offset;
        return dateMilliseconds;    
    
    }
        
    
};
