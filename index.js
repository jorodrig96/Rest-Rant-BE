const express = require('express');
const app = express();
require('dotenv').config();

//Routes
const placesRouter = require("./controllers/places")

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.use("/places", placesRouter)

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.status(404).send(`<h1>Page that gives you an error message when path not found.</h1><body> 
    <img style= "width: 50%;" src="https://us.123rf.com/450wm/goodstocker/goodstocker1807/goodstocker180700295/105233753-astronaut-and-flying-saucer-in-outer-space-text-warning-message-this-page-was-lost-oops-404-error.jpg?ver=6" alt="404 picture" />
    </body>`)
})

app.listen(process.env.PORT,() => { 
    console.log(`hello, youve been connected to ${process.env.PORT}.`)
})