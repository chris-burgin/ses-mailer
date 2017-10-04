// import html
const html = require("./template_1.html")
const css = require("./template_1.css")

// simple tempalte
const template_1 = options => html({ ...options, css })

// export tempalte
module.exports = template_1
