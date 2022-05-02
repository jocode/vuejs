const getRandomInt = () => {
    return new Promise( resolve => {
        const randInt = Math.floor((Math.random() * 20) + 1);

        setTimeout(() => {
            resolve(randInt);
        }, 1000);
    })
}

export default getRandomInt