const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'Please provide a name'],
        unique:true
    },
    rating: {
        type:Number,
        required:[true,'Please give a rating']
    },
    description: {
        type:String,
        required:[true,'Please provide a description']
    },
    price: {
        type:Number,
        required:[true,'Please provide with a price']
    },
});

const Bootcamp = mongoose.model('Bootcamp',userSchema);

module.exports = Bootcamp;