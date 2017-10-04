const html = content =>
  `
    <html>
      <head>
        <style> ${content.css} </style>
      </head>
      <body>
        <main>
          <header>
            <h1> ${content.header} </h1>
            <h2> ${content.subHeader} </h2>
          </header> 
          <section>
            ${content.body}
          </section>
          <footer>
            ${content.footer}
          </footer>
        </main>
      </body>
    </html>
  `

module.exports = html
