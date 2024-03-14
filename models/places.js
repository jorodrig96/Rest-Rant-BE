const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const placeSchema = new Schema({
    name: { 
        type: String, 
        required: true },
    pic: { 
        type: String, 
        default: 'https://i.pinimg.com/736x/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.jpg' 
    },
    cuisines: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        default: "Anytown" 
    },
    state: { 
        type: String, 
        default: "USA"
    },
    founded: { 
        type: Number, 
        min: [1920, 'What an old restaraunt'],
        max: [new Date().getFullYear(), 'Hey this year is in the future!']
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
})

placeSchema.methods.showEstablished = function(){
    return `${this.name} has been serving ${this.city},${this.state} since ${this.founded}.`
}

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