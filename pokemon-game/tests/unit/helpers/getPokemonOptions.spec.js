import getPokemonsOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("debe de regresar un arreglo de números", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[648]).toBe(649);
    expect(pokemons[pokemons.length - 1]).toBe(650);
  });
});

test("debe de retornar un arreglo de 4 elementos con nombres de elementos", async () => {
  const pokemons = await getPokemonNames([1, 2, 3, 4]);
  expect(pokemons.length).toBe(4);
  expect(pokemons[0].name).toBe("bulbasaur");
  expect(pokemons[1].name).toBe("ivysaur");
  expect(pokemons[2].name).toBe("venusaur");
  expect(pokemons[3].name).toBe("charmander");
});

test("getPokemonOptions debe retornar un arreglo mezclado", async () => {
  const pokemons = await getPokemonsOptions();
  expect(pokemons.length).toBe(4);
  expect(pokemons).toEqual([
    { 
        name: expect.any(String), 
        id: expect.any(Number)
    },
    { 
        name: expect.any(String), 
        id: expect.any(Number)
    },
    { 
        name: expect.any(String), 
        id: expect.any(Number)
    },
    { 
        name: expect.any(String), 
        id: expect.any(Number)
    },
  ]);
});
