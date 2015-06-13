var winston = require('winston');
var config  = require('config');

module.exports = {
    /**
     * @returns {winston.Logger} a configured Winston logger
     */
    winston : function() {

        // Define transports based on config
        var transports = [],
            winstonConf = config.logging;

        for (var key in winstonConf.transports) {
            var transportConf = winstonConf.transports[key];
            if (key === 'console') {
                transports.push(new (winston.transports.Console)(transportConf));
            }
            else if (key === 'file') {
                transports.push(new (winston.transports.DailyRotateFile)(transportConf));
            }
            else if (key === 'error') {
                transports.push(new (winston.transports.File)(transportConf));
            }
        }
        return new (winston.Logger)({ transports: transports });
    }

};