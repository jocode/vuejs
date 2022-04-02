describe('Example component', () => {

  test('Debe de ser mayor a 10', () => {
    // Arrange - Preparacion
    let value = 10;

    // Act - Ejecución
    value = value + 2;

    // Assert - Verificacion
    expect(value).toBeGreaterThan(10);
  })

})











/* import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
}) */
