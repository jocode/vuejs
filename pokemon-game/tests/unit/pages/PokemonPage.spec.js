import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage.vue'
import { pokemons } from '../mocks/pokemon.mock'

describe('PokemonPage component', () => {

    let wrapper 

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('debe de hacer match con el match del snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar a micPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando se cargan los pokemones', () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de mostrar los componentes de pokemonPicture y PokemonsOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            }
        })

        const pictureComponent = wrapper.find('pokemon-picture-stub')
        const optionsComponent = wrapper.find('pokemon-options-stub')

        expect(pictureComponent.exists()).toBe(true)
        expect(optionsComponent.exists()).toBe(true)

        // PokemonPicture attribute pokemonid === 5
        expect(pictureComponent.attributes('pokemonid')).toBe('5')

        // PokemonsOptions attribute pokemons  toBe true
        expect(optionsComponent.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con "checkAnswer"', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data(){
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            }
        })

        await wrapper.vm.checkAnswer(5)

        expect(wrapper.find('h2').text()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`¡Correcto! ${pokemons[0].name}`)

        // Check when answer is wrong
        await wrapper.vm.checkAnswer(4)
        expect(wrapper.vm.showAnswer).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`¡Opss!. El pokemon era ${pokemons[0].name}`)
        expect( wrapper.vm.message ).toBe(`¡Opss!. El pokemon era ${pokemons[0].name}`)
    })

})