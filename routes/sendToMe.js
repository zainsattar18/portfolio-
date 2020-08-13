const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')
const creds = require('../config/config')

const transport = {

  host: 'smtp.gmail.com',
  port: 465,
  secure:true,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.error(error)
  } else {
    console.log('users ready to mail')
  }
});

sendToMeRouter.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `
  const mail = {
    from: name,
    to: 'zainsattar18@gmail.com',  
    subject: 'New Message from Portfolio Website',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
});



module.exports = sendToMeRouter
