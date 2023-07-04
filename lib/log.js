var winston = require('winston');

winston.emitErrs = true;
const debugLevel = process.env.LOG_LEVEL || 'warn';

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: debugLevel,
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.info('Winston logging library initialized.');

module.exports = logger;
