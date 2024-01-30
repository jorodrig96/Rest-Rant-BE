const express = require('express');
const app = express();
require('dotenv').config();

//Routes
const placesRouter = require("./controllers/places")

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.use("/places", placesRouter)

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('Error404')
})

app.listen(process.env.PORT,() => { 
    console.log(`hello, youve been connected to ${process.env.PORT}.`)
})