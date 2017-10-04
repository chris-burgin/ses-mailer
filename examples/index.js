// import
const { createMail, sendMail } = require("..")

// Create the mailer that we will later pass into sendMial(). We have seperated
// this into a seperate step to clean up our code.
const mail = createMail({
  // pick tempalte
  template: "template_1",

  // contact information
  to: "chrisburgin95@gmail.com",
  from: "chrisburgin95@gmail.com",
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

// Send our mail!
sendMail(mail)
  // we are done
  .then(() => console.log("finished"))
  // there was an error
  .catch(error => console.log("error ", error))
