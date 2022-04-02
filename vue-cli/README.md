# VueJS CLI

CLI es el acrónimo de Commnad Line Interface, que nos permite ejecutar tareas que nos faciliten la integración con otras bibliotecas.

Para saber la versión de VueJS CLI, ejecutar el comando:

- `vue --version`

**Breaking changes** Son cambios que pueden provocar errores en el código, cambios de la versión de las librerías.

## Creación de la primera aplicación con el Vue CLI

- `vue create mi-first-app`

Esto nos abrirá un selector de opciones en la consola, que nos permitirá elegir entre varias opciones. Para ello, en este caso se seleccionará una instalación manual (_Manually select features_) para seleccionar los paquete que se desean instalar, que son **babel** y el paquete de **testing** de `unit-jest` por el momento.

**_Babel_** es un librería escrita en Javascript que nos permite convertir el código de javascript moderno a un código compatible con el navegador.

Para ejecutar el proyecto, ejecutamos los siguientes comandos.
- `cd mi-first-app`
- `npm run serve`

Los módulos de node no se desplegan en el backend.

## Componentes en Vue

Los componentes en Vue, tienen 3 secciones.
- **Template**. Es el código HTML que se muestra en la pantalla `template`.
- **Script**. Es el código Javascript que se ejecuta en el navegador `script`.
- **Style**. Es el código CSS que se aplica al HTML `style`.

En Visual Studio con la extensión Vetur, podemos la estructura de un componente sólo usando la palabra clave **`<vue>`**

Para importar un componente, se debe importar el componente, agregarlo en el template del componente contenedor y definir el atributo componentes en la estructura del componente que se va a exportar.

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter/>
</template>

<script>

import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
```

## Propiedades computadas

La propiedades computadas en VueJS son propiedades que se calculan en tiempo de ejecución, y se guardar en el caché, lo que hace que sea más eficiente el proceso.

> las propiedades calculadas se almacenan en caché en función de sus dependencias reactivas.

Los estilos se definen en los mismos componentes, para que se apliquen al template que se muestra en la pantalla.

## Properties - Props

Las propiedades `props` son propiedades que se definen en el componente, y se pasan al componente contenedor.

Usualmente las properties, se acostumbran a colocarse al principio, justo debajo del `export default` del componente.

Las **props** se definen en el componente como se muestra a continuación, con el nombre de la propiedad que se espera recibir.

```js
export default {
    props: ['title'],
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    },
    ...
}
```

### Formas de recibir las props

La diferencia entre un atributo y las properties, es que las properties están previamente definidas en el componentes, es decir se definen en el objeto `props` del componente.

Se pueden enviar propiedades haciedo uso de **v-bind** en Vue. Siendo el atributo  `v-bind:start="1"`

En este caso, podremos definir valores por defecto en las propiedades y el tipo de dato que se espera recibir, como se puede observar en la propiedad **start**

```js
props: {
    title: String,
    start: {
        type: Number,
        default: 0,
        required: true
    }
}
```

Otra forma de enviar las propiedades es usando el atajo **`:propertyName="value"`**, por ejemplo `<Counter :start="5"/>`

La validación de las propiedades se hace mediante **validators**, que se definen en el objeto `props` del componente.

```js
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 0,
            // required: true
            validator(value) {
                return value >= 0
            }
        }
    },
    name: 'Counter',
}
```