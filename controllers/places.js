const express = require('express')
const placesRouter = express.Router()
const places = require('../models/places')
const db = require('../models')

placesRouter.get('/seed', (req, res) => {
  places.insertMany([{
      "name": "The Crackin Crab",
      "pic": "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gvplofty/c7458056-caba-469b-b9f0-8446eb1a8a7d.jpg",
      "cuisines": "Asian",
      "city": "Rowland Heights",
      "state": "California",
      "founded": 1968,
    },
    {
      "name": "Popeyes",
      "pic": "https://cdn.vox-cdn.com/thumbor/EFTESsHsz8GSNh3AgkC23S0qTGU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19099461/IMG_7576_popeyes.jpg",
      "cuisines": "American",
      "city": "Austin",
      "state": "Texas",
      "founded": 1968,
    },
    {
      "name": "Da Ramen Spot",
      "pic": "https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg",
      "cuisines": "Japanese",
      "city": "Rosemead",
      "state": "California",
      "founded": 1968,
    },
    ])
      .then(res.status(200).json({
          message: 'Seed successful'
      }))
      .catch(res.status(400).json({
          message: 'Seed unsuccessful'
      }))
})

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
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

placesRouter.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


placesRouter.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
      .then(() => {
          res.redirect('/places')
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
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

placesRouter.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})


placesRouter.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

  

module.exports = placesRouter;
