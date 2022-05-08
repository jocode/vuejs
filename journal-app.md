# Journal APP

Se creará mediante Vuex una aplicación para el manejo de entradas de un diario o de un journal. 
La idea es ver la interacción entre componentes, ver cómo se lee la información del store y cómo se maneja el store para crear funciones que también se conviertan en getters.

Se va trabajar pensando en que es una aplicación que va a crecer mucho, autenticación, tokens, segmentación de rutas, múltiples diseños, etc.

- [x] Diseño, conectar toda la aplicación de manera local, sin peticiones HTTP, y conectar la aplicación con Vuex.

## Temas de la sección.

En esta sección crearemos y configuraremos una aplicación para llevar registro de un diario, todo trabajado con OptionsAPI y Vuex, puntualmente haremos lo siguiente:

- Configuración de módulos en Vuex
- Configurar un backend para realizar peticiones http
- Getters con argumentos
- Controlar el state global y modular
- Diferentes rutas principales y rutas hijas
- Rutas con diferentes templates o plantillas
- Funciones con fechas

Para ejecutar la aplicacion usamos 

- `yarn serve`

> :bulb: Para este proyecto se usará sass para los estilos.

Más adelante se usará composition API, que es la evolución de options API.

## Configuración de SASS en el proyecto

SASS es un preprocesador de CSS, es un CSS con superpoderes.

Para agregar bootstrap a nuestro proyecto, debemos configurarlo en el proyecto.
- `yarn add bootstrap`

Cómo no se ha configurado el preprocesador de CSS, debemos configurarlo en el proyecto.
Para ello se añade la dependencia de desarrollo.

- `yarn add -D sass-loader@10 sass`

Para modificar los colores predeterminados en boostrap, modificamos las variables en el archivo de `styles/styles.scss` antes de importar bootstrap.

```scss
$theme-colors: (
  "primary":    #2c3e50,
  "secondary":  #1d6042,
  "success":    #198754,
  "info":       #0dcaf0,
  "warning":    #ddc107,
  "danger":     #dc3545,
  "light":      #f8f9fa,
  "dark":       #433a40,
);

@import 'node_modules/bootstrap/scss/bootstrap';
```

## Estructura modular

Los layouts no son más que un cascaron dónde vamos a colocar el router-view y va a estar mostrando las páginas relacionadas con el módulo.

Las vistas estarán montadas dentro del Layout.

Toda la estructura de la aplicación se va a componer de módulos.
Para ello se creará la carpeta **modules** que va a contener la estructura necesaria para manejar cada parte de la aplicación.

```
├── assets
├── modules
│   ├── auth
│   └──  daybook
│       ├── components
│       ├── layouts
│       ├── views
│       └── router 
│
├── router
├── styles
│     └── styles.scss
├── views
├── App.vue
└── index.js
```

Dentro de cáda módulo se definirá el router necesario, con todas las rutas hijas y luego éstas serán llamadas en el router principal haciendo uso del spread operator.


**_router/index.js_**
```js
// Import routers
import daybookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/daybook',
    ...daybookRouter
  }
]
``` 

**Importamos los íconos de font-awesome**

[CDN JS libraries](https://cdnjs.com/libraries/font-awesome/5.15.3)

- **`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />`**

Y lo agregamos en el archivo `index.html`