const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placehold.it/500x500.png' },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown" },
    state: { type: String, default: "USA"},
    founded: Number 
})

const Place = model('Place', placeSchema);

module.exports = Place;


// code below no longer needed because were connecting to the db and getting data stored in there.

{/* module.exports = [{ 
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
    
}] */}