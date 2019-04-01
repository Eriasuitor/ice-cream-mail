const nodemailer = require('nodemailer')

const user2Mailer = new Map()

exports.initQQMail = async ({user = '948471414', pass = 'wyrxdbhgqrcjbdah'}) => {
  user2Mailer.delete(user)
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    pool: true,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: false
    }
  })
  await transporter.verify()
  transporter.pass = pass
  user2Mailer.set(user, transporter)
  return transporter
}

exports.newQQMail = async ({user = '948471414', pass = 'wyrxdbhgqrcjbdah', subject, from = 'LoryJiang <948471414@qq.com>', to = 'funtree9@icloud.com', text, html = '<h1>whoareyou</h1>', cc, bcc}) => {
  let mailer = user2Mailer.get(user)
  console.log(mailer)
  !mailer && (mailer = await exports.initQQMail({user, pass}))
  const mailOptions = {from, to, subject, text, html}
  await mailer.sendMail(mailOptions)
  console.log(to + 'send success')
}

// create reusable transporter object using the default SMTP transport

// setup email data with unicode symbols


// send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Message %s sent: %s", info.messageId, info.response);
// });
