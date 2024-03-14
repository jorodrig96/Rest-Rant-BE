const express = require('express')
const placesRouter = express.Router()
const places = require('../models/places')
const db = require('../models')


// GET /places
placesRouter.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/PlaceIndex', { places })
    }) 
    .catch(err => {
      res.render('Error404')
    })
  })

//Add a new place route 
placesRouter.get('/new', (req, res) => {
    res.render('places/Addnew')
})

placesRouter.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/Show', { place })
  })
  .catch(err => {
    res.render('Error404')
  })
})

placesRouter.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

placesRouter.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//delete
placesRouter.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})


placesRouter.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      res.render('Error404')
    })
  })

placesRouter.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

placesRouter.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})
  

module.exports = placesRouter;
