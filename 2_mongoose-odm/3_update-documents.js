// Databse connection
require('./db')

// Model
const Dog = require('./models/Dog.model')




// .findByIdAndUpdate()
// Dos argumentos: string con ID, y query de manipulación
// retorno: el documento anterior al update
// El argumento adicional {new: true} hará que retorne el documento tras el update

Dog
    .findByIdAndUpdate(
        '6745a69decccde6184d43741',
        { name: 'Salchichonio Decrépito', $inc: { age: 300 } },
        { new: true }
    )
    .then(dog => console.log("El perro modificado es:", dog))
    .catch(err => console.log('Hubo un error', err))




// .updateMany()
// Dos argumentos: query de búsqueda y query de actualización
// retorno: objeto con detalles de la operación

Dog
    .updateMany({ name: 'Popino' }, { name: 'Popino Reloaded', age: 80 })
    .then(details => console.log("Los detalles de la modificación son:", details))
    .catch(err => console.log('Hubo un error', err))







// .updateOne()
// Dos argumentos: query de búsqueda y query de actualización
// Retorn: objeto con detalles de la operación

Dog
    .updateOne({ name: 'Salchichonio' }, { name: 'Salchichonio reloaded' })
    .then(info => console.log("Los detalles de la modificación son:", info))
    .catch(err => console.log('Hubo un error', err))