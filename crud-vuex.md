# CRUD - Vuex

CRUD usando vuex
- Acciones para realizar peticiones HTTP
- Mutation para actualizar el estado
- Getter para obtener datos del estado
- Inserción y subida de archivos a la web
- Un poco sobre las referencias locales


## Cargar entradas desde el Backend

Descargamos axios

- **`yarn add axios`**

Luego se crea una carpeta llamada **`api`** y dentro de ella definimos la api que usaremos para crear la instancia de axios con la ruta de nuestra API.

*journalApi.js*
```js
import axios from 'axios';

const journalApi = axios.create({
    baseURL: 'https://vue-demo-757f6-default-rtdb.firebaseio.com',
});

export default journalApi;
```

Y ya en las **acciones** llamamos el método **`get`** de la instancia de axios para obtener los datos de la API.

*store/journal/actions.js*
```js
import journalApi from "@/api/journalApi"

export const loadEntries = async (/* { commit } */) => {
    const {data} = await journalApi.get('/entries.json');
    console.log(data);

}
```

Y ya luego, usamos **mapActions** para obtener las acciones en el template y realizar la llamada a la API.

*layout/DayBookLayout.vue*
```js
import  { defineAsyncComponent } from 'vue'
import {mapActions} from 'vuex'

export default {
    name: 'DayBookLayout',
    components: {
        Navbar : defineAsyncComponent(() => import('@/modules/daybook/components/nav-bar.vue')),
        EntryList : defineAsyncComponent(() => import('@/modules/daybook/components/EntryList.vue'))
    },

    methods: {
        ...mapActions('journal', ['loadEntries'])
    },

    created() {
        this.loadEntries()
    }
}
```

## Realizar el commit de una mutación

Para modificar el estate, debemos pasar por una mutación. La acción llama a la mutación para modificar el estado.

- La **acción** se encarga de hacer llamadas a la API y puede ser o no asíncrona
- La **mutación** es la que modifica el estado y es síncrona

Para ejecutar una mutación se llama la función **`commit`** del store.

`actions.js`
```js
export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json');

    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}
```

`mutations.js`
```js
export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}
```


Las **propiedades computadas** son útiles para obtener los datos del estado y que esta información me pueda servir para mostrarla en el layout.

## Emitir acción

Podremos crear un evento personalizado y emitir la acción desde el componente hijo que tengamos definido. En este caso el componente hijo es el **_Fab_**, en él emitimos el evento para que pueda ser usado en el componente padre.

`componentePadre.js`
```js
<FabButton
    @on:click="saveEntry"/>


export default {
    components: {
        FabButton: defineAsyncComponent(() => import('../components/FabButton.vue')),
    },

    methods: {
        async saveEntry() {
            console.log('saveEntry NO entry selected');
        },
    },
}
```

En el componente hijo, debemos definir el evento **`@on:click`** y la acción que queremos emitir.

```js
<button 
    class="btn btn-primary" 
    @click="$emit('on:click')
```

## CRUD - Actualizar entrada.

Al usar la base de datos de Firebase, podemos actualizar una entrada con el método **`put`**.

Para ello, debemos seguir la secuencia.
- Llamar el `mapActions` en el componente, y en los métodos llamar la acción que queremos ejecutar
- En el actions creamos el método que actualizará la entrada. Este se encargará de llamar la API y hacer la lógica necesaria para organizar la información que se desea guardar **`updateEntry`**.
- En el mutations creamos el método que actualizará el estado **`updateEntry`**.


## Preparar el camino para la inserción de registros.

En este caso, debemos crear una entrada nueva.
Para ello, se verifica si viene un id, en el objeto de la entrada. Si no es así, significa que es una entrada nueva, por lo que debemos generar un id y mandar a llamar la acción que creará la entrada en firebase.

Para usar el API Rest de Firebase, usamos el método **POST** para crear una entrada nueva. El por defecto creará el **id** para la entrada.


## Borrar una entrada

Para borrar una entrada en firebase, usamos el método **DELETE**.

Se hace todo el proceso de borrar la entrada.
1. Creandose el método en el template
2. Se llama al método de actions con el **`mapActions`** y se usa para eliminar la entrada
3. Se crea la petición para eliminar la entrada en firebase.
4. Se llama la mutación para hacer el cambio en el state.

## Integración de SweetAlert2

SweetAlert2 es una librería que nos permite mostrar una ventana de alerta.
Para instalar la biblioteca, usamos el comando:

- `yarn add sweetalert2`

Toda la integración SweetAlert2 se realiza en el componente **_EntryView_**.


## Seleccionar y mostrar una imagen local

Para subir una imagen, usamos el elemento **`<input type="file" />`** de HTML5.

Para mostrar la imagen, debemos obtener la ruta de la imagen y mostrarla en el componente, para ello se hace uso de FileReader en javascript y creamos el evento para la selección de la imagen.

```js 
onSelectedImage(event) {
    const file = event.target.files[0];

    if (!file) {
    this.localImage = null
    this.file = null
    return
    }

    this.file = file;
    /**
     * Carga de la imagen
     */
    const reader = new FileReader();
    reader.onload = (e) => {
        this.localImage = e.target.result;
    };
    reader.readAsDataURL(file);
},
```

La función **`readAsDataURL`** nos permite obtener una ruta local de la imagen para poder mostrarla en el componente de la imagen.

Para tener un botón personalizado, lo que hacemos es tener una referencia al **input:file** con **`ref="imageSelector"`** y a través del evento click del elemento personalizado hacemos la referencia al **input:file** y seleccionamos la imagen usando el método **`click`** `this.$refs.imageSelector.click();`

```html
<input 
    type="file"
    @change="onSelectedImage"
    ref="imageSelector"
    v-show="false"
    accept="image/png, image/jpeg">
```

## Subir la imagen a Cloudinary

Cloudinary es un servicio que nos permite subir una imagen a una nube de almacenamiento, usando una REST API.

Para subir el archivo desde Javascript.