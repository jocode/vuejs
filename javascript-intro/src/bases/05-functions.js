const nombre = 'Juan'
/* 
function saludar(name ) {
    return `Hola ${name}`
}
*/

const saludar = (name) => `Hola ${name}` // arrow function

console.log(saludar(nombre))

const getUser = () => ({
    uid : 122,
    name : 'Juan',
})

console.log(getUser())

const herores = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    }
]

const existe = (id) => herores.some(heroe => heroe.id === id)
// const existe = (id) => herores.find(heroe => heroe.id === id)

console.log(existe(2))