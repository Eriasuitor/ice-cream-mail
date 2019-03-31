const express = require('express')

const app = express()

app.use(express.json())

// app.get('/health', ManagerController.getHealthReport)

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


app.listen(config.app.port, () => WebLogger.info('server started', {port: config.app.port}))
