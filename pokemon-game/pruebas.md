# Pruebas Automatizadas

1. Pruebas con Axios
2. Pruebas con data aleatoria
3. Pruebas con emisiones
4. Múltiples emisiones al mismo tiempo
5. Stubs
6. Revisión de cambio en propiedades reactivas (data)

| Se recomienda empezar las pruebas con lo más sencillo posible, y poco a poco avanzar hacia los más complejos.

## ShallowMount vs mount

ShallowMount es una forma de testear componentes que no necesitan de un DOM para funcionar, es una forma de montar componentes de manera sutil, que no renderiza internamente los componentes que contiene, evitando disparar los eventos del ciclo de vida.

A diferencia del shallowMount, el mount renderiza el componente y sus componentes internos, es decir, si el componente tiene un componente hijo, este también se renderiza.