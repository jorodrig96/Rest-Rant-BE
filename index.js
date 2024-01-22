const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('<h1>Hello, this is your homepage.</h1> <img src="https://media.istockphoto.com/id/864768664/vector/house-icon.jpg?s=612x612&w=0&k=20&c=rjn0h1GC_dBfeMT6I8RO8jPZ7KR3BaKhS2HQeAeq1Kk=" alt= "home screen" />')
})

app.get('*', (req, res) => {
    res.status(404).send(`<body> 
    <img style= "width: 50%;" src="https://us.123rf.com/450wm/goodstocker/goodstocker1807/goodstocker180700295/105233753-astronaut-and-flying-saucer-in-outer-space-text-warning-message-this-page-was-lost-oops-404-error.jpg?ver=6" alt="404 picture" />
    </body>`)
})

app.listen(process.env.PORT,() => { 
    console.log(`hello, youve been connected to ${process.env.PORT}.`)
})