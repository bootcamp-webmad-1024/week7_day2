// Databse connection
require('./db')

// Model
const Dog = require('./models/Superdog.model')




// .create()
// argumento: objeto a crear en la BBDD
// retorno: objeto creado en BBDD

Dog
    .create({ name: 'Popino', age: '18', color: 'Marroncito toffe', adopted: false })
    .then(createdDog => console.log('EL PERRO CREADO ES', createdDog))
    .catch(err => console.log('Esto es un error', err))






// // // .create()
// // // argumento: array de objetos a crear en la BBDD
// // // retorno: array de objetos creados en BBDD

// Dog
//     .create([
//         { name: 'Lassie', age: 5, adopted: true, color: 'Negro' },
//         { name: 'Popino', age: 14, adopted: true, color: 'Toffe y caramelo' },
//         { name: 'Salchichonio', age: 14, adopted: false, color: 'Toffe y caramelo' },
//         { name: 'Scooby Doo', age: 1, adopted: true, color: 'Marroncito' },
//         { name: 'Godzilla', age: 16, adopted: false, color: 'Toffe y caramelo' }
//     ])
//     .then(theNewDogs => console.log('Se ha creado', theNewDogs.length, 'registros:', theNewDogs))
//     .catch(err => console.log('Se ha producido un error:', err))
