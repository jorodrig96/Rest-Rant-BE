require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`connected to mongo server: ${process.env.MONGO_URI}`);
    // Your code logic here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB.', error);
  });


module.exports.Place = require('./places')

{/* What we're doing with the index.js file in the models folder is making a one-stop shop for our connection information and 
access to all of our models. */}



