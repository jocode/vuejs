/**
 * El state es reactivo, y cuando se modifica, se notifica a todos los componentes donde estén escuchando los cambios de nuestro state
 */
export default () => ({
    isLoading: true,
    entries: [
        {
            id: '1', // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem.',
            picture: 'https://unsplash.it/300/200',
        },
        {
            id: '2', // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            picture: 'https://unsplash.it/300/200',
        },
        {
            id: '3', // 1387133631
            date: new Date().toDateString(), // Sun Dec 01 2013
            text: 'This is another enteis lorem ipsum dolor sit amet',
            picture: 'https://unsplash.it/300/200',
        },
    ]
})