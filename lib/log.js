var winston = require('winston');

winston.emitErrs = true;
const debugLevel = process.env.LOG_LEVEL || 'warn';
const colorize = process.env.LOG_COLORIZE === 'true' || process.env.LOG_COLORIZE === '1';

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: debugLevel,
            handleExceptions: true,
            json: false,
            colorize: colorize
        })
    ],
    exitOnError: false
});

logger.info('Winston logging library initialized.');

module.exports = logger;
