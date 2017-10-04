// uses option.template to assign the correct template
const templateSwitcher = {
  template_1: require("./templates/template_1"),
}

// create the mailer
const createMail = options => ({
  // sending information
  from: options.from,
  bcc: options.to,
  subject: options.subject,

  // convert options.content to email
  email: templateSwitcher[options.template](options.content),
})

module.exports = createMail
