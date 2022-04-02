import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

describe('Indecision Component', () => {

    let wrapper
    let consoleLogSpy

    // Mock del 'fetch' Api
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        consoleLogSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el input no debe de disparar nada (console.log)', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer') // vm es la instancia del Vue

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        // expect(consoleLogSpy).toHaveBeenCalled()
        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
        // expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test('escribir el simbolo de "?" debe disparar el fetch', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Te gusta Vue?')

        expect(consoleLogSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test('pruebas en getAnswer', async() => {
        await wrapper.vm.getAnswer()
        // console.log(wrapper.vm.img)
        // console.log(wrapper.vm.answer)

        const img = wrapper.find('img')
        
        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('¡Si!')
    })

    test('pruebas en getAnswer - Fallo en el API', async() => {
        // TODO: Failed API
        fetch.mockImplementationOnce( () => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect( img.exists() ).toBeTruthy()
        expect( wrapper.vm.answer ).toBe('No se pudo cargar del API')
    })

})