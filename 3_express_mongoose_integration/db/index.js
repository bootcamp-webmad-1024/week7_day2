const mongoose = require('mongoose')

// ddbb connection
const databaseName = 'dogs-1024'
const connectionString = `mongodb://localhost/${databaseName}`

mongoose
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))