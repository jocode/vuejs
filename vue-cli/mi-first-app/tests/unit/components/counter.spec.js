import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter Componentes", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  /* test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount(Counter)
        expect( wrapper.html() ).toMatchSnapshot();

    }) */

  test('h2 debe tener el valor por defecto "Counter"', () => {
    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBe(true);
    expect(h2.text()).toBe("Counter");
  });

  test("El valor por defecto ede ser de 0 por defecto en el p", () => {
    // const pTags = wrapper.findAll('p')
    const value = wrapper.find('[data-testid="counter"]').text(); // Obtener el data-attribute

    // Expect - Segundo p === 0
    // expect( pTags.at(1).text() ).toBe('0')
    expect(value).toBe("0");
  });

  test("Debe de incrementar en 1 el valor de contador", async () => {
    const increaseBtn = wrapper.findAll("button").at(1);
    await increaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("1");
  });

  test("El valor del contador debe permanecer en 0 cuando se decrementa por debajo de 0", async () => {
    const decreaseBtn = wrapper.find("button");

    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("0");
  });

  test("Al dar click en los botones deben incrementar y decrementar", async () => {
    const [decreaseBtn, increaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe("3");
  });


  test("Debe establecer el valor por defecto", () => {


    const {start} = wrapper.props()
    const value = wrapper.find('[data-testid="counter"]').text();

    // console.log(typeof value)

    expect(Number(value)).toBe(start)
  });


  test('Debe mostrar la prop title', () => {

    const title = "Custom Title"
    const wrapper = shallowMount(Counter, {
        props: {
            title,
            start: 10,
        }
    })
    
    const h2 = wrapper.find("h2");
    
    // console.log(wrapper.html())

    expect(h2.exists()).toBe(true);
    expect(h2.text()).toBe(title);
  })

});
