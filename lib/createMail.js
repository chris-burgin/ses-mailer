// uses option.template to assign the correct template
const templateSwitcher = {
  template_1: require("./templates/template_1"),
}

// create the mailer
const createMail = options => ({
  // sending information
  to: options.to,
  from: options.from,
  cc: options.cc,
  bcc: options.bcc,
  subject: options.subject,

  // convert options.content to email
  email: templateSwitcher[options.template](options.content),
})

module.exports = createMail
