# Javascript

Primero descargamos el proyecto del repositorio y lo movemos a la carpeta del proyecto.

[Javascript Intro](https://github.com/Klerith/javascript-intro)

Seguidamente instalamos los paquetes de node que el proyecto necesita.

- [x] `npm i`

| Axios no es propiamente de javascript, es una librería que se usa para hacer peticiones HTTP.

- **Package lock** Que indica como se construyeron los módulos de node.
- **Package** Contiene las dependencias que necesita el proyecto para desarrollo y para producción.

## 1. Constantes, let y var

- **var** Es una variable que se coloca en un scope global, no tiene en cuenta el scope de la función.

- **let** Es una variable que se coloca en un scope local y es una variable mutable.
- **const** Es una variable que no se puede cambiar.

```js
let nombre = "Tony"
const apellido = "Stark"

console.log(nombre, apellido)

if (true) {
    nombre = 'Steve'
    console.log(nombre)
}
```

Una constante es mejor, ya que no se puede cambiar.

## 2. Template literals

Los templates strings son una forma de escribir strings en una sola línea. En ellos podemos usar expresiones en javascript.

Los template literals de usan con los backtick `` `${expression js}` ``

```js
const nombre = 'Juan'
const apellido = 'Perez'

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)
console.log(`Bienvenido ${getSaludo('Pepito')}`)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}
```

## 3. Objetos

Los objetos literales, son la similitud como diccionarios, mapas en otros lenguajes de programación.

Se puede reconocer como objeto literal, porque tiene llaves `{}`

Los objetos en javascript son pasados por referencia, no por valor. Lo que indica que cualquier modificación que el objeto inicial sufra, cualquier otra referencia de la misma se va a ver afectado.

Se mantiene la misma referencia al espacio en memoria.

Para romper esa referencia en JS es usar el operador spread. `{...objeto}`

```js
const persona =  {
    nombre: 'Camilo',
    apellido: 'Mosquera',
    edad: 20,
    direccion : {
        ciudad : "Rivera",
        zip: 1324,
        lat: 1.091013,
        long: 0.131413
    }
}

const persona2 = {...persona}

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
```

## 4. Arreglos

Los arreglos son una colección de datos, que se puede acceder por medio de un índice.

En JS los índices empiezan en 0.

```js
// const arreglo = new Array(10)
const arreglo = [1,2,3,4,5]
arreglo.push(6)

const arreglo2 = [...arreglo]
arreglo2.push(9)

const arreglo3 = arreglo2.map(item => item * 2)

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
```

## 5. Funciones

Las funciones son bloques de código que se ejecutan cuando se llama a la función.

En javascript podemos usar las funciones de toda la vida, usando la palabra reservada `function` o usar las funciones de flecha que son almacenadas en variables. Esto nos permite tener seguridad en la ejecución del código al no reasignar el valor de la función. 

Las funciones de flecha tiene la siguientes estructura
```js
const nombreFuncion = (parametros) => {
    código
}
```

```js
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
```

## 6. Desestructuración de objetos y arreglos

## 7. Importaciones y exportaciones

## 8. Promesas

## 9. Argumentos a promesas

## 10. Valor y referencia

## 11. Async y Await

## 12. Peticiones HTTP

## 13. Ternarios

## 14. Null check