const express = require('express')
const placesRouter = express.Router()

placesRouter.get('*', (req, res) => {
    res.status(404).send(`<h1>This is your /places route.</h1><body> 
    <img style= "width: 50%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1o31Xrf9AAbHzeRFsCK4pH3kCqhez1nprA&usqp=CAU" alt="waving hi meme" />
    </body>`)
})

module.exports = placesRouter;