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