// import {owners} from './data/heroes'
// const [dc, marvel] = owners
// console.log(dc, marvel)

// Importación de la importación por defecto
import heroes from '../data/heroes'

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id)
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner)
}
