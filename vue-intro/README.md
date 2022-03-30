# Introducción a Vue

En esta sección se usará Vue como librería que es importada desde los scripts. Como Vue es un framework progresivo, se puede ir migrando poco a poco los componentes de VueJS.

- [x] Fácil de iniciar. Si conoces HTML, CSS y JS
- [x] Versátil. Ecosistema escalable
- [x] Rendimiento. DOM virtual súper rápido.

Vue, es el framework más fácil de iniciar frente a sus competidores. Es fácil de aprender, es versátil y es muy rápido.

### Puntos interesantes de VueJS

- [x] Framework de javascript progressivo. Un framework es un conjunto de herramientas que nos permite construir nuevas sistemas a partir de ellos.
- [x] Se puede migrar progresivamente un sitio web a Vue.

## Primera aplicación con Vue

Para usar VueJS, lo podemos importar desde un CDN para empezar a usar las capacidades de Vue para construir nuestras interfaces.

- **`https://unpkg.com/vue@3`**

- _index.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJS Intro</title>
  </head>

  <body>
    <!--Control absoluto de este div-->
    <div id="app"></div>

    <!-- <script src="https://unpkg.com/vue@next"></script> -->
    <script src="https://unpkg.com/vue@3"></script>
    <script src="app.js"></script>
  </body>
</html>
```

- _app.js_

```js
const app = Vue.createApp({
  template: `
        <h1>Hola mundo</h1>
        <p>Desde app.js</p>
        `,
});
app.mount("#app");
```

## Representación declarativa

La renderización de VueJS es una representación declarativa, que podremos usar código de JavaScript para realizar operaciones. Para ellos, debemos usar los templates strings y dentro de ella colocar dobles llaves **`{{ expression }}`**

Vue realiza las representaciones declarativas dentro del elemento que se quiere renderizar, es decir, si tengo el componente `div#app` se puede colocar las dobles llaves dentro de las etiquetas de html para realizar las mismas funciones como si se estuviera en JS.

En Vue podremos usar el options API o el composition API.

El método **data()** crea un objeto reactivo, es decir que cualquiera de las propiedades que se definan dentro del objeto, se pueden actualizar.

## v-for

Es una estructura de datos que nos permite iterar sobre una colección de datos. La estructura de que se usa es **`v-for="(item, index) in items"`**

```html
<ul>
    <li v-for="quote in quotes">
        <div>{{ quote.quote }}</div>
        <i>{{ quote.author }}</i>
    </li>
</ul>
```

También se puede desestructurar el elemento de la iteración.

```html
<ul>
    <li v-for="({quote, author}, index) in quotes">
        <div>{{ quote }}</div>
        <blockquote>{{ author }}</blockquote>
    </li>
</ul>
```

## Directiva `v-model`

La directiva `v-model` nos permite escuchar los cambios que se realizan en un elemento, crea una relación two way data binding. Es decir, cuando se cambia el valor de un elemento, se cambia el valor de otro elemento, por ejemplo, cuando se cambia el valor de un input, se cambia el valor de un label.

```html
<input 
    type="text" 
    v-model="newQuote"
    v-on:keypress.enter="addQuote">
<hr>
<i>{{ newQuote }}</i>
```

## Modificadores de eventos

Vue tiene una sintaxis para modificar los eventos, esta se coloca directamente como atributos de html. Por ejemplo, se tiene el evento cuando el usuario presiona enter en el input.

`<input type="text" v-model="newQuote" v-on:keypress.enter="addQuote">`

```js
const app = Vue.createApp({
    data() {
      return {
        quotes,
        newQuote: "",
      };
    },
    methods: {
      // Add quote method
      addQuote() {
        this.quotes.unshift({
          quote: this.newQuote,
          author: "Me",
        });
      },
    },

  });

  app.mount("#app");
```

## Directivas `v-if` y `v-show`

El `v-if` muestra el elemento si la condición es verdadera, y el `v-show` lo oculta en el html, usando el `display: none`

NO es recomendable usar `v-if` y `v-for` juntos en un sólo elemento. Porque `v-if` tiene mayor precedencia que `v-for`, así que se podría colocar le `v-if` dentro de un elemento padre y usar `v-for` en el hijo.

Crear una aplicación / componente
