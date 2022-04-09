import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions.vue"

import {pokemons} from "../mocks/pokemon.mock"

describe('PokemonOptions Component', () => {

    let wrapper 

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemons
            }
        })
    })

    test('debe de hacer match con el snapshot', () => {
        console.log(wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()
        // expect(wrapper.html()).toMatchInlineSnapshot()
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('pikachu')
        expect(liTags[1].text()).toBe('charmander')
        expect(liTags[2].text()).toBe('bulbasaur')
        expect(liTags[3].text()).toBe('squirtle')
    })

    test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
        const liTags = wrapper.findAll('li')
        liTags[0].trigger('click')
        // console.log(wrapper.emitted('selection'))

        /**
         * Es este caso no se hacen más emisiones, porque se verifica que sólo se haya hecho click una sola vez
         */

        expect(wrapper.emitted().selection).toBeTruthy()
        expect( wrapper.emitted('selection').length ).toBe(1)
        expect(wrapper.emitted().selection[0]).toEqual([5])
    })

})