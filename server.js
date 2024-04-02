const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override')

//Routes
const placesRouter = require("./controllers/places")
const mongoose = require('mongoose')

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

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

module.exports = app;