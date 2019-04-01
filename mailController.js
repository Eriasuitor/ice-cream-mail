const QQMailService = require('./qqMailService')

exports.login = async (req, res) => {
  try {
    await QQMailService.initQQMail(req.body)
    return res.json({success: true}).status(200)
  } catch (error) {
    return res.status(203).json({success: false, errorMsg: error.message})
  }
}

exports.send = async (req, res) => {
  try {
    await QQMailService.newQQMail(req.body)
    return res.json({success: true}).status(200)
  } catch (error) {
    return res.status(203).json({success: false, errorMsg: error.message})
  }
}
