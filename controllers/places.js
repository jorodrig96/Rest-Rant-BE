const express = require('express')
const placesRouter = express.Router()
const places = require('../models/places')


// GET /places
placesRouter.get('/', (req, res) => {
    res.render('places/PlaceIndex', { places })
  })

//Add a new place route 
placesRouter.get('/new', (req, res) => {
    res.render('places/AddNew')
})

placesRouter.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = placesRouter;