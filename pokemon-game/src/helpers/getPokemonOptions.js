import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
    const pokemonsArr = Array.from(Array(660))
    
    return pokemonsArr.map( (_, index) => index+1 )
}


const getPokemonsOptions = async() => {

    const mixPokemons = getPokemons()
    .sort( () => Math.random() - 0.5 )

    const pokemons = await getPokemonNames(mixPokemons.splice(0,4))
    // console.table(pokemons)
    return pokemons
}

const getPokemonNames = async([a,b,c,d]) => {
    /* console.log(a,b,c,d)
    const response = (await pokemonApi.get(`/${a}`)).data
    console.log(response) */

    const promisesArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [pok1, pok2, pok3, pok4] = await Promise.all(promisesArr)
    
    return [
        {name: pok1.data.name, id: pok1.data.id},
        {name: pok2.data.name, id: pok2.data.id},
        {name: pok3.data.name, id: pok3.data.id},
        {name: pok4.data.name, id: pok4.data.id}
    ]
}

export default getPokemonsOptions