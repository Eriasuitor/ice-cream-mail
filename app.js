const express = require('express')
const MailController = require('./mailController')

const app = express()

app.use(express.json())

app.post('/login', MailController.login)

app.post('/login', MailController.send)

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

let data = require('fs').readFileSync('./data.csv').toString().split('\n').map(_ => _.split(','))
let fieldName = data.shift()
let dataArray = data.map(_ => fieldName.reduce((a, b, index) => Object.assign(a, {[b]:_[index]}), {}))
console.log(dataArray)
