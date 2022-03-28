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

La desestructuración de objetos y arreglos permite extraer valores como variables. `const {var1, var2} = objeto`


En la desestructuración de objetos, la posición no es importante, siempre y cuando el nombre de la variable coincida con el nombre de la propiedad en el objeto.
```js
const person = {
  name: "John",
  age: 30,
  codeName: "SuperMan",
};

const { name, age, codeName, power = "No power" } = person;

console.log(name, age, codeName, power);

const createHero = ({ name, age, codeName, power }) => ({
  id: 1239813,
  name,
  age,
  codeName,
  power,
});

console.log(createHero(person));
```


En la desectructuración de objetos las posición es importante. Si quiero desestructurar un arreglo, se usa llaves cuadradas.

```js
const characters = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi'];

const [first, second, ...rest] = characters;

// Get last character in array using spread operator
const last = [...rest].pop();

console.log(first); // Mario
console.log(rest); // [Peach, Toad, Yoshi]
console.log(last); // Yoshi

const returnArray = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);
```

## 7. Importaciones y exportaciones

Las importaciones y exportaciones son una forma de importar y exportar funciones, variables, clases, etc. Es muy importante para trabajar con modulos.

En JS no se puede importar algo que esté explicitamente importado. Se usa la palabra reservada **`export`**

Para importar una función, se usa la palabra reservada **`import`** y se pasa el nombre de la función y el path (Ruta relativa del archivo)

Cuando se tiene importaciones, el archivo que se importa va a ser ejecutado, por lo que hay que tener precauciones cuando se impriman valores o se realicen funcionalidades.

La exportación por defecto es la palabra reservada **`export default`**.

```js
// import {owners} from './data/heroes'
// const [dc, marvel] = owners
// console.log(dc, marvel)

// Importación de la importación por defecto
import heroes from './data/heroes'

console.log(heroes)
```

```js
import {getHeroById, getHeroesByOwner} from './bases/08-import-export'

console.log(getHeroById(2))
console.log(getHeroesByOwner('Marvel'))
```

## 8. Promesas

Las promesas son una forma de ejecutar una función asincrona. Es decir, el código se ejecuta de forma paralela a la ejecución del código.

Las promesas son parte de Javascript, y no es una librería. **`Promise`** es una palabra reservada que indica que es una clase.

Los argumentos de la función son:
- **result**: Es el valor que se obtiene de la promesa.
- **reject**: Es el error que se obtiene de la promesa.

El cuerpo de la promesa se ejecuta inmediatamente, y la resolución de la promesa se ejecuta en un futuro.

```js
console.log('Inicio')

new Promise((resolve, reject) => {
    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta')
})
.then((result) => console.log(result))
.catch((error) => console.log(error))

console.log('Fin')
```

Las promesas se usan generalmente en peticiones a servicios externos, como por ejemplo, peticiones a una API.

## 9. Argumentos a promesas

Las promesas pueden recibir argumentos usando funciones que nos permitan devolver una Promesa como valor de la función para poderla ejecutar en otro en otra parte del script.

```js
import { getHeroById } from "./bases/08-import-export";

const getHeoByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject("Heroe no existe");
      }
    }, 1000);
  });
};

getHeoByIdAsync(100)
.then((data) => {
  console.log(data);
})
.catch(error => {
    console.log(error)
})

```

## 10. Fetch API

Ingresamos a la api de Giphy para usar la función fetch de javascript para hacer peticiones a servidores externos. Anteriormente, eso no era posible nativamente en javascript y nos tocaba usar jquery para utilizar ajax. Actualmente, ésta API está disponible en las nuevas versiones de JS para pder realizar las peticiones y no depender de bibliotecas externas.

[Developers Giphy](https://developers.giphy.com/) | pardadispo@vusra.com

El fetch API es una función propia que viene a partir del estándar ES6 en adelante, nos permite hacer peticiones HTTP de una forma muy sencilla. Esto devuelve una promesa.

```js
const API_KEY = "stUiUCT3osfIPnOjpScNgsyxM76qpe1g";

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

fetch(endpoint)
.then((response) => response.json())
.then(({data}) => {
    const {url} = data.images.original
    console.log(url)

    const image = document.createElement('img')
    image.src = url
    document.body.append(image)
})
.catch((error) => console.log(error))
```

## 11. Axios

Axios es un paquete para hacer peticiones http, es muy utilizados. Los beneficios es que axios tiene muchas cosas que el fetch api no tiene todavía.
- Configuración sencilla de los headers.
- Crear instancias para reutilizar el código

:start: [Axios](https://axios-http.com/docs/intro)

- **CDN** `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

- **NPM** `npm install axios`

```js
import axios from 'axios'

const API_KEY = "stUiUCT3osfIPnOjpScNgsyxM76qpe1g";

const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: API_KEY,
    }
})

giphyApi.get('/random').then((response) => {

    const {data} = response.data
    console.log(data)
    const {url} = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

    console.log(url)
})
```

## 12. Async - Await

El async y await son una forma de ejecutar una función asincrona. Es decir, el código se ejecuta de forma paralela a la ejecución del código. El async, retorna una promesa y el **await** solo debe ser utilizado dentro de una función asíncrona.

El await, nos permite obtener el valor de la promesa como si fuera una función síncrona.

El **async** cualquier función en una función asíncrona, es decir, una promesa.

```js
const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hay un valor en la promesa')
            // reject('Hay un error en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {
    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin')
    
        return 'Este es el valor de la función asíncrona'
    } catch(error) {
        throw 'Error en la llamada de la promesa'
    }
}

medirTiempoAsync()
.then(res => console.log(res))
.catch( err => console.log(err))
```

A continuación, se muestra un ejemplo del async y await en javascript, usando las promesas para una petición a una API.

```js
import giphyApi from "./bases/11-axios";

const getImage = async() => {
    
    try {
        const { data } = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

    } catch (error) {
        console.log('Error en la petición', error)
        throw error
    }

}

getImage()
```

## 13. Ternarios y Null check

Los ternarios y el null check nos permiten evaluar las expresiones de una forma más sencilla.

```js
let firstName = 'Johan';
let lastName;

// Null check
console.log(`${ firstName || 'No firstname' } ${ lastName || 'No lastname' }`)

// Ternarios
const isActive = true
const message = (isActive) ? 'Activo' : 'Inactivo'

console.log(message)
```