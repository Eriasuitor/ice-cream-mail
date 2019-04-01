const QQMailService = require('./qqMailService')
const {Logger} = require('./logger')

exports.login = async (req, res) => {
  try {
    await QQMailService.initQQMail(req.body)
    Logger.info('init mail success', req.body)
    return res.json({success: true}).status(200)
  } catch (error) {
    Logger.warn('init mail failed', {body: req.body, error: error.message})
    return res.status(203).json({success: false, errorMsg: error.message})
  }
}

exports.send = async (req, res) => {
  try {
    await QQMailService.newQQMail(req.body)
    Logger.info('send mail success', req.body)
    return res.json({success: true}).status(200)
  } catch (error) {
    Logger.warn('send mail failed', {body: req.body, error: error.message})
    return res.status(203).json({success: false, errorMsg: error.message})
  }
}
