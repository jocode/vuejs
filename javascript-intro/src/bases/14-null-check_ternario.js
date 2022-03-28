let firstName = 'Johan';
let lastName;

// Null check
console.log(`${ firstName || 'No firstname' } ${ lastName || 'No lastname' }`)

// Ternarios
const isActive = true
const message = (isActive) ? 'Activo' : 'Inactivo'

console.log(message)