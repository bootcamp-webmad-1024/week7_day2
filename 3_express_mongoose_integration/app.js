const express = require('express')
const logger = require('morgan')
const Dog = require('./models/Dog.model')
const PORT = 5005


const app = express()

app.use(logger('dev'))
app.use(express.json())

require('./db')

app.get('/api/dogs', (req, res) => {

    Dog
        .find()
        .then(dogs => res.json(dogs))
        .catch(err => console.log(err))
})


app.get('*', (req, res) => {
    res.sendStatus(404)
})


app.listen(PORT, () => console.log(`Server running on portn ${PORT}`))