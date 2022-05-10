/**
 * El state es reactivo, y cuando se modifica, se notifica a todos los componentes donde estén escuchando los cambios de nuestro state
 */
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'lorem ipsum dolor sit amet',
            picture: 'https://unsplash.it/300/200',
        },
        {
            id: new Date().getTime() + 1000, // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'This is another entry',
            picture: 'https://unsplash.it/300/200',
        },
        {
            id: new Date().getTime() + 2000, // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'This is another enteis lorem ipsum dolor sit amet',
            picture: 'https://unsplash.it/300/200',
        },
    ]
})