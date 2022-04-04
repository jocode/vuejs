# Pokemon game

- **Project setup** `npm install`
- **Compiles and hot-reloads for development** `npm run serve`
- **Compiles and minifies for production** `npm run build`
- **Run your unit tests** `npm run test:unit`

See [Configuration Reference](https://cli.vuejs.org/config/).


## Estructura del proyecto y componentes

La estructura recomentada para proyectos más grandes es la siguiente:

    src/
    ├── modules/
    │        ├── moduleA/
    │        │	├── components/
    │        │	├── services/
    │        │	├── helpers/
    │        │	├── router/
    │        │  └── store/
    │        ├── moduleB/
    │        ├── moduleC/
    │        └── moduleD/


`@/` indica en vue que se ubique en la carpeta de `src`

- `npm install axios` **_Instalar Axios_**

Para pasar las propiedades en Vue, se usa el binding de `v-bind` y se puede pasar una propiedad de un objeto.


```html
<PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

<PokemonPicture v-bind:pokemonId="pokemon.id" v-bind:showPokemon="showPokemon" />
```

## Eventos en Vue

Los eventos en Vue, nos permiten comunicar acciones que se realizan en el componente hijo para ser escuchadas en el padre y ejecutar una acción.

| :fire: En vue podremos usar el UpperCamelCase `PokemonPicture` o el kebab-case para los eventos `pokemon-picture`. Vue respeta ambas convenciones.

Por ejemplo, podremos definir un evento llamado `onClick` y en el componente hijo, podremos escucharlo con `@click="selection"` y en el componente padre lo escuchamos con `@selection="metodoAEjecutar"`

```html
<li 
    v-for="pokemon in pokemons" 
    :key="pokemon.id"
    @click="$emit('selection', pokemon.id)">
    {{ pokemon.name }}
</li>
```

Se usa el **$** para evitar sobreescribir métodos internos en vue, cuando usamos el `emit` le indicamos 2 parámetros que son el nombre del evento y el valor que queremos enviar.

En elemento padre, podremos escuchar el evento usando

```html
<PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
```

Es una buena práctica, mantener los nombres de los componentes con UpperCamelCase y los atributos con kebab-case.

## Generar los archivos de distribución.

Para construir el bundle en la aplicación ejecutamos el comando.

- `npm run build`