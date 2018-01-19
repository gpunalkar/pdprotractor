// create a custom timestamp format for log statements
const SimpleNodeLogger = require('simple-node-logger');
opts = {
    logFilePath:'./log/mylogfile.log',
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};

var log = SimpleNodeLogger.createSimpleLogger( opts );
module.exports = log;