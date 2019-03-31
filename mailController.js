const QQMailService = require('./qqMailService')

exports.login = async (req, res) => {
	try {
		await QQMailService.initQQMail(req.body)
		return res.json({success: true}).status(200)
	} catch (error) {
		return res.json({success: false}).status(405)
	}
}

exports.send = async (req, res) => {
	try {
		await QQMailService.newQQMail(req.body)
		return res.json({success: true}).status(200)
	} catch (error) {
		return res.json({success: false}).status(405)
	}
}