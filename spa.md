# Single Page Application

Una SPA (Single Page Application) es una aplicación web que se carga en una sola página. Una full page refresh (o carga completa) es una acción que se realiza en la página para cargar una nueva página.

La navegación web tradicional, hace una petición al servidor y el servidor responde con la página solicitada.

La SPA (Single Page Application) hace una petición inicial al servidor, y éste le devuelve la página completa. La primera carga puede ser demorada, mientras carga todo el sitio, pero luego la navegación es más rápida.

## Ventajas de la SPA

- [x] Tras la carga inicial una experiencia fluida y rápida
- [x] Menor estrés para el servidor
- [x] El caché puede reducir peticiones
- [x] Mejor experiencia de usuario
- [x] Carga independiente de módulos cuando son necesarios (Cargados bajo demanda)

## Desventaja de la SPA

- Es complicado implementar SEO (search engine optimization)
- Un cambio pequeño puede requerir un build completo
- Carga inicial pesada* (depende de su implementación)
    - Cargar todo en la primera carga
    - Cargar páginas en demanda, con lazy load.

## Inicio de proyecto - Rutas y ciclo de vida.

El ciclo de vida se refiere a todos los hooks o funciones cuando se ejecutan en una aplicación.

| Una página es un componente que tiene otros componentes.

## Creación de proyecto

Es recomendado seguir una estructura basada en modulos para tener el código mucho más ordenado.

Algunas recomendaciones para la creación de sitios son:
- [x] Nombrar los nombres de las páginas con el sufijo `xxxPage`, por ejemplo **`AboutPage.vue`**

## Vue Router

La documentación oficial de Vue Router está en [Vue Router](https://router.vuejs.org/)

Para instalar Vue Router, usamos el comando:

- **`npm install vue-router@4`**

Y ésto agrega una dependencia de desarrollo el `package.json`

Antes de montar la aplicación de Vue, se usa el router.

Para eso, es común crearse un archivo llamado `router.js` en la carpeta `src/router`.

_router.js_
```js
import { createRouter, createWebHashHistory } from 'vue-router'

import AboutPage from '../modules/pokemon/pages/AboutPage'
import ListPage from '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'

const routes = [
    { path: '/', component: ListPage},
    { path: '/about', component: AboutPage},
    { path: '/id', component: PokemonPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // Short for `routes: routes`
})

export default router
```

Y en el archivo `main.js` se importa el router y se usa el método `use()` para usarlo.

```js
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app')
```

Finalmente en la aplicación de vue, se usa el router `<router-view/>` para definir las rutas.

_`App.vue`_
```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## No Page Found

El match para encontrar una ruta desconocida es `/:pathMatch(.*)*` cualquier comodín que no sea una ruta válida.

```js
const routes = [
    { path: '/', component: ListPage},
    { path: '/about', component: AboutPage},
    { path: '/id', component: PokemonPage},
    { path: '/:pathMatch(.*)*', component: NotFound},
]
```

## LazyLoad de páginas

Esto nos permite tener un bundle inicial más pequeño, y cargar las páginas en demanda. Cargando los pedacitos cuando sean necesarios. 
Esto es importante para tener una carga más rápida al inicio.

Para cargar de forma perezosa las páginas en el router, se usa la función **`import`**

```js
{
  path: "/id",
  component: () => import('../modules/pokemon/pages/PokemonPage'),
}
```


```js
import { createRouter, createWebHashHistory } from "vue-router";

import NoPageFound from "../modules/shared/pages/NoPageFound";

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"),
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "AboutPage" */  "../modules/pokemon/pages/AboutPage"), // LazyLoad
  },
  {
    path: "/id",
    component: () => import('../modules/pokemon/pages/PokemonPage'),
  },
  {
    path: "/:pathMatch(.*)*",
    component: NoPageFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // Short for `routes: routes`
});

export default router;
```

Y con el comentario **webpackChunkName** le indicamos a webpack que los archivos que cargue deben tener ese nombre que se le especifica.


Para la carga asíncrona de componentes en `vue` se usa **defineAsyncComponent**

```js
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */'./modules/shared/components/Navbar.vue'))
  }
}
```

Para usar los links de la aplicación, se usa el componenre `<router-link/>`, de lo contrario si se usa el **a** no funcionará la navegación dentro de la SPA.

```html
<router-link to="/">Pokemon List</router-link>
```

## Lifecycle Hooks - Ciclo de vida de un componente

- [Composition API Lifecycle](https://vuejs.org/api/composition-api-lifecycle.html)
- [Creating a Vue Application](https://vuejs.org/guide/essentials/application.html)

Un lifecycle es una función que se ejecuta en un componente, y se puede usar para hacer cambios en el componente.


### :bulb: ¿Cuál es el mejor lugar para hacer una petición HTTP?

El `created` podría ser un buen lugar para hacer las peticiones HTTP.


## Segmentos del URL y queryParameters

Para obtener las propiedades del router, podemos usar el objeto **`this.$route`**, que contiene toda la información del router. Los atributos se definen como **`this.$attrs`**

En vue, podemos enviar las props por URL, de forma que el componente tenga que recibir esa propiedad para poder funcionar. Para ello, es necesario definir en el router las propiedades que se desean enviar en el objeto **props** del router

```js
{
    path: "/:pokemonId",
    name: "pokemon-id",
    component: () => import("../modules/pokemon/pages/PokemonPage"),
    props: (route) => {
      // console.log(route)
      const pokemonId = Number(route.params.pokemonId);
      return isNaN(pokemonId) ? { pokemonId : 1 } : { pokemonId };
    },
},
```

## Petición HTTP y redirecciones

Para hacer las redirecciones en vue, se usa el método **`router.push()`**, que recibe como parámetro la ruta a la que se quiere redireccionar.

```js
async getPokemon() {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
        .then(response => response.json())
        // console.log(pokemon)
        this.pokemon = pokemon
    } catch(error) {
        console.log(error)
        this.$router.push('/')
    }
}
```

## Redirección desde el router

Usar la navegación por nombre, es mucho mejor porque es menos volatil, cuando deseamos cambiar las rutas.
_`:to="{name: 'pokemon-id', params: {pokemonId: 85}}`_

```vue
<template>
    <div>
        <router-link to="/">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {pokemonId: 85}}">Pokemon por id</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>
```

## :start: Múltiples Router-View - Rutas Hijas

Esto nos permite crear un sitio que tenga diferentes diseños estructurales entre las pantallas.
Los `layout` es un simple componente que internamente va a tener otro routerView, es como otro `App.vue`

Lo que permite tener rutas hijas, es el componente **` <router-view/>`**, que los definimos en los layouts.