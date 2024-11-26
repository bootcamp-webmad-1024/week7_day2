const mongoose = require('mongoose')

// Schema
const dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    adopted: Boolean
})

// Model
const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog