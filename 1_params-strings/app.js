const express = require('express')
const logger = require('morgan')
const PORT = 5005

const app = express()

app.use(logger('dev'))
app.use(express.json())


app.get('/api/games', (req, res) => {
    res.json('AQUI SALEN TODOS LOS JUEGOS')
})


// ROUTE PARAMS
// http://localhost:5005/api/games/popino
app.get('/api/games/:id', (req, res) => {
    const { id: gameID } = req.params
    res.json(`Debemos buscar en la BBDD el juego con ID ${gameID}`)
})


// ROUTE PARAMS
// http://localhost:5005/api/transporte/vuelos/madrid/berlin
app.get('/api/:service/:product/:origin/:destination', (req, res) => {
    const { service, product, origin, destination } = req.params
    res.json(`Debemos buscar en la BBDD un ${service} de tipo ${product} de ${origin} a ${destination}`)
})



// QUERY STRINGS
// http://localhost:5005/api/buscar?prenda=pantalon&talla=M&color=rojo
app.get('/api/buscar', (req, res) => {
    const { prenda: clothe, talla: size, color } = req.query
    res.json(`Debemos buscar en la BBDD un ${clothe} de talla ${size} y color ${color}`)
})



app.listen(PORT, () => console.log(`Server running on portn ${PORT}`))