const React = require('react')

export default function Default(html) {
    return (
        <html>
            <head>
                <title>Default Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

