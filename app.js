const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  pool: true,
  auth: {
    user: "948471414",
    pass: "wyrxdbhgqrcjbdah" //  授权码，不是qq密码或者独立密码
  },
  tls: {
    rejectUnauthorized: false
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: "LoryJiang <948471414@qq.com>", // sender address
  to: "funtree9@icloud.com", // list of receivers
  subject: "Hello world", // Subject line
  text: "Hello world ?", // plain text body
  html: "Hello world ?" // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message %s sent: %s", info.messageId, info.response);
});
