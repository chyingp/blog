var log4js = require('log4js');

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/access.log', category: 'access' }
  ]
});

var logger = log4js.getLogger('access');
logger.debug('type', 'access');

var logger = log4js.getLogger('error');
logger.debug('type', 'error');
