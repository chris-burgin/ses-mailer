// import
const { createMail, sendMail } = require("..")

// create the mailer
const mail = createMail({
  // pick tempalte
  template: "template_1",

  // contact information
  to: "chrisburgin95@gmail.com, chris@downloadyouthministry.com",
  from: "chrisburgin95@gmail.com",
  cc: "chrisburgin@downloadyouthministry.com",
  bcc: "hair@downloadyouthministry.com",
  subject: "This is the email subject",

  // email content
  content: {
    header: "Header of the email",
    subHeader: "Sub Header of the email",
    body:
      "This is the body content of the email, its not much, but its something",
    footer: "Footer information of the email",
  },
})

// send the mail
sendMail(mail)
  // we are done
  .then(() => console.log("finished"))
  // there was an error
  .catch(error => console.log("error ", error))
