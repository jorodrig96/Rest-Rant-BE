const db = require('../models')

// To use await, we need an async function.
async function seed() {
    
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'Shmackin Hawaiian BBQ' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Jrodrig',
        rant: false,
        stars: 5.0,
        content: 'Wow, best testing hawaiian bbq ever!! Highly Recommend!'
    })

    // Add the comment to the places comment array.
    place.comments.push(comment.id)

    // Save the place now that it has a comment
    await place.save()

    .then(() => {
        console.log('properly seeded!')
    })

    // Exit the program
    process.exit()
}

seed()
