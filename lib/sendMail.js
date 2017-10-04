// imports
const nodemailer = require("nodemailer")

// setup config for the email
const smtpConfig = {
  host: process.env.SESMAILER_SMTP_HOST,
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.SESMAILER_SMTP_KEY,
    pass: process.env.SESMAILER_SMTP_SECRET,
  },
}

const transporter = nodemailer.createTransport(smtpConfig)

// create the mailer
const sendMail = options =>
  new Promise((resolve, reject) =>
    transporter.sendMail(
      {
        from: options.from,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        html: options.email,
      },
      (error, info) => (error ? reject({ error, info }) : resolve())
    )
  )

module.exports = sendMail
