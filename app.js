const express = require('express')
const MailController = require('./mailController')

const app = express()

app.use(express.json())

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.post('/login', MailController.login)

app.post('/mail', MailController.send)

app.use((err, req, res, next) => {
  if (err) {
    console.log(err)
    if (!err.status) {
      err.status = 500
      Logger.error('request error', err)
    }
    Logger.debug('request handled error', {status: err.status, message: err.message})
    res.send(err.message).status(err.status || 500)
  }
})

app.listen(11081)

