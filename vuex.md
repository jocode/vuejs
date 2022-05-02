# Vuex

Posiblemente hayan escuchado sobre Redux, RxJS y que ofrecen un estado reactivo, o algunos patrones como BloC.

Uno de los problemas que nos encontramos, es que los estados se almacenan sólo en los componentes y se los pasamos hacia los demás componentes a través de properties.

## Cuál es la diferencia entre las properties y los attributes?

| Propiedad | Atributo |
| --------- | ------- |
| Las propiedades las colocamos específicamente en el componente dónde las vamos a recibir | Los atributos no los especificamos y son opcionales. |

Vuex es una librería que nos permite almacenar estados en componentes, maneja el estado global en la aplicación. Es un gestor de estado en Vue.

VueX trabaja como trabaja vue por defecto. Es un gestor de estado muy popular en vue. Sólo que en lugar de tenerlo en un componente, lo tenemos en la aplicación. Y se ubica en lo más alto de la jerarquía de componentes.

- **Acciones** Las acciones por naturaleza son asíncronas y sirven para hacer peticiones HTTP o tareas que sean asíncronas.
- **Mutations** Son mutaciones y son síncronas, son las que midifican el state.
- **State** Es un objeto reactivo muy parecido a lo que tenemos en la data de vue.
- **Getters** Son como los computed properties de vue. (Es una forma preprocesada para obtener datos del state).

> :bulb: Es recomendado trabajar VueX en módulos de una vez, por ejemplo en el módulo de usuario, autenticación, carrito de compras, etc. Y no cargar todo de una vez de forma global porque vueX agrega mucha complejidad.

Esta sección es muy importante para comprender Vuex, el cual es un gestor de estado muy popular cuando sabemos que las aplicaciones serán de mediana a gran escala. VueX será el gestor de estado global de nuestra aplicación.

## VueX - Introducción.

Las aplicaciones tiene componentes, dentro de componentes y así sucesivamente. Y muchas veces no tenemos una comunicación directa entre componentes, sino que tenemos que pasar información de un componente a otro.

La idea de VueX es que tengamos un Store, y que la información que necesite la aplicación la consultemos desde el Store.

- El state del store es un objeto reactivo.

Prácticamente el flujo de información funciona de la siguiente manera cíclica.
- View
- Actions
- State

![VueX composition](images/vuex.png)

Las acciones pueden ser síncronas o asíncronas y éstas pueden realizar peticiones HTTP. Las mutaciones son síncronas y como el State es reactivo notificará a los componentes.

- Las **acciones** pueden ser asíncronas.
- Los **commits** DEBEN ser síncronos.
- Una acción NO debe modificar directamente el state.

## Conceptos generales

- **State**: Similar a la `data()`, es reactivo.
- **Getters**: Similar a las propiedades computadas.
- **Mutations**: Funciones que _pueden_ modificar el state.
- **Actions**: Funciones que pueden ser asíncronas que pueden llamar mutations.
- **Modules**: Agrupador de state, getters, mutations, actions y otros módulos.
- **Store**: Es un objeto que contiene todos los módulos.


## Cuándo usar Vuex?

- [x] VueX nos ayuda a lidiar con la gestión de estado compartida por el costo de mayor estructura y archivos.
- [x] Es una compensación entre la productividad a corto y a largo plazo.

Vuex no es complicado de implementar, lo único complicado es entender al principio su estructura y funcionamiento.

Para la creación del proyecto, usamos
- **`vue create bases-vuex`**

Escogemos babel y el linter. Vuex no lo instalamos porque lo haremos de forma manual.

## Instalación manual de Vuex

Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Sirve como un almacén centralizado para todos los componentes de una aplicación, con reglas que garantizan que el estado solo se puede modificar de forma predecible.

[Vuex](https://vuex.vuejs.org/)

- **`npm install vuex@next --save`**