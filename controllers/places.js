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

placesRouter.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else{
  res.render('places/Show', { place: places[id] })
  }
})


placesRouter.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'https://us.123rf.com/450wm/stockgiu/stockgiu2204/stockgiu220400316/184268732-fast-food-icons.jpg?ver=6'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = placesRouter;