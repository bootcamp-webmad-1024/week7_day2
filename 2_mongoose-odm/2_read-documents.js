// Databse connection
require('./db')

// Model
const Dog = require('./models/Dog.model')



// .find()
// argumento: sin argumento
// retorno: un array de objetos con todos los registros 
Dog
    .find()
    .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
    .catch(err => console.log('Se produjo un error:', err))



// .find()
// argumento: query
// retorno: un array de objetos con los registros que tienen match
Dog
    .find({ age: { $lt: 13 } })
    .then(allDogsFromDB => {
        allDogsFromDB.forEach(elm => console.log(`El perro ${elm.name} tiene ${elm.age} años`))
    })
    .catch(err => console.log('Se produjo un error:', err))



// .findById()
// argumento: un string con un ID
// retorno: el objeto que haga match, o null si no exitse
Dog
    .findById('6745a69decccde6184d43740')
    .then(theDog => console.log(theDog))
    .catch(err => console.log('Se produjo un error:', err))



// .findOne()
// argumento: query
// retorno: el primer registro que haga match 
Dog
    .findOne({ age: { $lt: 6 } })
    .then(firstMatchDog => console.log(firstMatchDog))
    .catch(err => console.log('Se produjo un error:', err))