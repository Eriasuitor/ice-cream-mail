const Log4js = require('log4js')
const path = require('path')
Log4js.configure({
  appenders: {
    runtime: {
      type: 'dateFile',
      filename: path.join(__dirname, '/logs/runtime'),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    },
    web: {
      type: 'dateFile',
      filename: path.join(__dirname, '/logs/web'),
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {appenders: ['runtime'], level: 'ALL'},
    web: {appenders: ['web'], level: 'ALL'}
  }
})
const Logger = Log4js.getLogger('default')
const WebLogger = Log4js.getLogger('web')
module.exports = {
  Logger: {
    info: (tips, ...args) => Logger.info(`[${tips}]`, ...args.map((_) => JSON.stringify(_))),
    debug: (tips, ...args) => Logger.debug(`[${tips}]`, ...args.map((_) => JSON.stringify(_))),
    error: (tips, ...args) => Logger.error(`[${tips}]`, ...args),
    fatal: (tips, ...args) => Logger.fatal(`[${tips}]`, ...args),
    warn: (tips, ...args) => Logger.warn(`[${tips}]`, ...args.map((_) => JSON.stringify(_)))
  },
  WebLogger: {
    info: (tips, ...args) => WebLogger.info(`[${tips}]`, ...args.map((_) => JSON.stringify(_))),
    debug: (tips, ...args) => WebLogger.debug(`[${tips}]`, ...args.map((_) => JSON.stringify(_))),
    error: (tips, ...args) => WebLogger.error(`[${tips}]`, ...args),
    fatal: (tips, ...args) => WebLogger.fatal(`[${tips}]`, ...args),
    warn: (tips, ...args) => WebLogger.warn(`[${tips}]`, ...args.map((_) => JSON.stringify(_)))
  }
}
