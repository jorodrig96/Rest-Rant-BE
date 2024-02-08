const React = require('react')

export default function Default(html) {
    return (
        <html>
            <head>
                <title>Rest-Rant BE App</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'/>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/places'>Places</a></li>
                        <li><a href='/places/new'>Add New</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

