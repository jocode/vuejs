# Temas puntuales de la sección

- Jest
- Expect
- Spies (SpyOn)
- Ciclo de vida d elas pruebas
- Wrapper
- ShallowMount
- Mount
- Expect
- Snapshot
- Props
- Mocks

## Introducción. Pruebas Unitarias y de Integración.

Las pruebas **NO** son una pérdida de tiempo, son una forma de verificar que una función funciona correctamente.

- **Pruebas unitarias** Enfocadas en pequeñas funcionalidades. Las pruebas unitarias son atómicas.

- **Pruebas de integración** Enfocadas en cómo reaccionan varias piezas en conjunto.

## Características de las pruebas

- [x] Fáciles de escribir
- [x] Fáciles de leer
- [x] Confiables
- [x] Rápidas
- [x] Principalmente unitarias

Concepto **`AAA`** en las pruebas
- Arrange (Arreglar): Preparamos el estado inicial, el sujeto a probar.
    - Inicializamos variables
    - Importaciones necesarias
- Act (Actuar): Aplicamos acciones o estímulos
    - Llamar métodos
    - Simular clicks
    - Realizar acciones sobre el pado anterior
- Assert (Asertar): Observar el comportamiento resultante
    - Son los resultados esperados
    - Ej: Que algo cambie, algo incremente o bien que nada suceda.


## Mitos
- Hacen que mi aplicación no tenga errores.
- Las pruenas no pueden fallar.
- Hacen más lenta mi aplicación.
- Es una pérdida de tiempo. (Un poco de verdad y un poco de mentira). A veces las pruebas toman el mismo tiempo que el desarrollo de la aplicación.
- Hay que probar todo.

Las pruebas automáticas siempre deberían probarse antes de pasar a producción.

## Pruebas unitarias

Para los tests, se recomienda crear la misma estructura de carpetas que el código fuente. Dentro de la carpeta **tets/unit**. De esta forma es más sencillo encontrar los tests.

La función `describe()` es una función que se encarga de agrupar los tests (test suite).

Para correr las pruebas se usa:

- `npm run test:unit`

:star: **[Documentación de Jest](https://jestjs.io/)**


## Pruebas unitatias en Vue con Jest

La pruebas tiene 2 partes importantes, el describe que agrupa los test y la función **test** que almacena cada una de las pruebas que se desean realizar. Las pruebas tienen la siguiente estructura:

```js
describe('Example component', () => {

  test('Debe de ser mayor a 10', () => {
    // Arrange - Preparacion
    let value = 10;

    // Act - Ejecución
    value = value + 2;

    // Assert - Verificacion
    expect(value).toBeGreaterThan(10);
  })

})
```

Para actualizar el Snapshop en las pruebas unitarias, se debe usar el siguiente comando en npm:

- **`npm run test:unit -- -u`**
- **`yarn test:unit -u`**

### Test usando Snapshots

Los snapshots son una forma de capturar el estado del componente para verificar que no se hay modificado. Para éso, se debe tener en cuenta que se debe importar el componente, y ademas, usar la propiedad *`shallowMount`* para montarlo en una vista y tener una vista previa del componente.
Éste se monta en un wrapper para luego verificar con `toMatchSnapshot()` si el componente es igual o ha cambios.


```js
import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Componentes', () => {

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot();
        
    })

})
```

## FindAll vs Find

El método **`findAll()`** es un método que busca todos los elementos que cumplan con una condición, mientras que el **`find()`** toma el primer elemento que cumpla con la condición.

Se recomienta usar data-attributes para identificar los elementos en las pruebas que se realizen, con eso se garantiza que no se vea afectadas las pruebas por la estructura de la vista. Por ejemplo definir en los elementos **`<div data-testid="counter">{{ counter }}</div>`**


## Simular eventos

Para test repetidos, es recomendable montar el componente con la función **`beforeEach()`**.
[Setup and Teardown](https://jestjs.io/docs/setup-teardown)

La simulación de eventos es una forma de simular el comportamiento de un elemento, por ejemplo al hacer click, al hacer focus, etc.

El procedimiento del DOM no es del todo síncrono, cuando se llama el botón el evento no se dispara secuencialmente.

Para ejecutar sólo una prueba en particular, se debe usar el comando:

- `npm run test:unit -- -u counter`
- `npm run test:unit -- -u tests/unit/components/counter.spec.js`

Para simular el evento del click, se debe usar el método `trigger()`:

```js
test("Debe de incrementar en 1 el valor de contador", async () => {
    const increaseBtn = wrapper.findAll("button").at(1);
    await increaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("1");
  });
```

## Leer props desde pruebas

Para leer las props de un componente, se debe usar el método `props()`. Y hay 2 formas de hacerlo. La primera es usando desestructuración y la otra es pasando por argumento el valor que se requiere.

```js
const {start} = wrapper.props()
const start = wrapper.props('start')
```

## Enviar props y evaluarlas

Para pasar las props, se especifica el nuevo objeto como parámetro de la función `shallowMount()`. De esta forma se puede pasar las props que se requieran.

```js
const title = "Custom Title"
    const wrapper = shallowMount(Counter, {
        props: {
            title
        }
    })
```

## Pruebas en el componente Indecision

| :bulb: Es importante definir las pruebas a realizar

Algunas pruebas necesitan usar **`spy`** para espiar alguna función, en este caso espiamos el `console.log` para ver si se ejecuta.


### Spy con la instancia de VueJS

Para tener la instancia de VueJS con el spy, se debe usar el objeto `vm`. De esta forma sabremos si se ha llamado un método del componente.

```js
const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
```

Para hacer mocks con las respuestas de las APIs, debemos crearnos el método **fetch** para que NodeJS pueda usarlo y simular la respuesta usando _Jest_. Aquí se define las promesas y la respuesta del JSON que se desea devolver.

```js
// Mock del 'fetch' Api
global.fetch = jest.fn( () => Promise.resolve({
    json: () => Promise.resolve({
        answer: "yes",
        forced: false,
        image: "https://yesno.wtf/assets/yes/2.gif"
    })
}))
```