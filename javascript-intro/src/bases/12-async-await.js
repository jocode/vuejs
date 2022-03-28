const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hay un valor en la promesa')
            // reject('Hay un error en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {
    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin')
    
        return 'Este es el valor de la función asíncrona'
    } catch(error) {
        throw 'Error en la llamada de la promesa'
    }
}

medirTiempoAsync()
.then(res => console.log(res))
.catch( err => console.log(err))