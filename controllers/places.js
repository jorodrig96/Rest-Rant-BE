const express = require('express')
const placesRouter = express.Router()


// GET /places
placesRouter.get('/', (req, res) => {
    const places = [{ 
        name: 'Daves Hot Chicken', 
        city: 'Log Angeles', 
        state: 'CA', 
        cuisines: 'American, Fried Chicken', 
        pic: 'https://cdn.vox-cdn.com/thumbor/dAS-CsWDnNdkh9XFVn7izEoaPPQ=/0x0:3780x3024/1200x800/filters:focal(1601x1338:2205x1942)/cdn.vox-cdn.com/uploads/chorus_image/image/67097709/unnamed_7.0.jpg' 
    }, { 
        name: 'Crazy Rockin Sushi', 
        city: 'La Puente', 
        state: 'CA', 
        cuisines: 'Japanese, Sushi', 
        pic: 'https://cdn.doordash.com/media/photos/720a7fe3-5b4c-4802-ac8c-b4a1332ab95a-retina-large.jpg' 
    }, {
        name: 'Thai Mr. President', 
        city: 'Rowland Heights', 
        state: 'CA', 
        cuisines: 'Thai, Mix', 
        pic: 'https://travelswithmaitaitom.com/wp-content/uploads/2019/08/President-Thai-Pasadena-CA-Travels-With-Mai-Tai-Tom-1-10.jpg' 
        
    }]

    res.render('places/PlaceIndex', { places })
  })
  

module.exports = placesRouter;