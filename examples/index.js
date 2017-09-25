// import
const { createMail, sendMail } = require("..")

// create the mailer
const mail = createMail({
  // pick tempalte
  template: "template_1",

  // contact information
  to: ["chrisburgin95@gmail.com", "chris@downloadyouthministry.com"],
  from: "support@downloadyouthminsitry.com",
  cc: "chrisburgin@downloadyouthministry.com",
  bcc: "hair@downloadyouthministry.com",

  // email subject
  subject: "We have done a thing!",
})

// send the mail
sendMail({
  // send mailer
  mail: mail,

  // aws ses information
  key: "key",
  secret: "secret",
})
  // we are done
  .then(() => console.log("finished"))
  // there was an error
  .catch(error => console.log("error ", error))
