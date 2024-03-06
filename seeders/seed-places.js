const db = require('../models')

db.Place.create([{
    name: 'Shmackin Hawaiian BBQ',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Hawaiian BBQ',
    pic: 'https://pbs.twimg.com/media/EijSw5rUwAIIDZV.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png',
    founded: 2020
}])

.then (() =>{
    console.log('Properly seeded!')
    process.exit()
})
.catch(err => {
    console.log('Failed to seed!', err)
    process.exit()
})


// Now that we have everything in place, we can run our seeder file to generate those two places. We can run it by using the command node seeders/seed-places.js on the terminal from the rest-rant folder. Hopefully, it ends in success! 
// If not, read any errors that come up on the terminal and try to determine what's going on.