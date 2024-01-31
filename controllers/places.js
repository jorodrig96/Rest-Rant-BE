const express = require('express')
const placesRouter = express.Router()


// GET /places
placesRouter.get('/', (req, res) => {
    const places = [{ 
        name: 'Daves Hot Chicken', 
        city: 'Log Angeles', 
        state: 'CA', 
        cuisines: 'American, Fried Chicken', 
        pic: '/images/daveshotchicken.jpg' 
    }, { 
        name: 'Crazy Rockin Sushi', 
        city: 'La Puente', 
        state: 'CA', 
        cuisines: 'Japanese, Sushi', 
        pic: '/images/crazyrockinsushi.jpeg' 
    }, {
        name: 'Thai Mr. President', 
        city: 'Rowland Heights', 
        state: 'CA', 
        cuisines: 'Thai, Mix', 
        pic: '/images/presidentthai.jpeg' 
        
    }]

    res.render('places/PlaceIndex', { places })
  })

//Add a new place route 
placesRouter.get('/new', (req, res) => {
    res.render('places/AddNew')
})
  

module.exports = placesRouter;