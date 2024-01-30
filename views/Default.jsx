const React = require('react')

export default function Default(html) {
    return (
        <html>
            <head>
                <title>Rest-Rant BE App</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

