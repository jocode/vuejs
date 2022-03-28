const nombre = 'Juan'
const apellido = 'Perez'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)
console.log(`Bienvenido ${getSaludo('Pepito')}`)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}