<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rdnInt = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[rdnInt];
    },

    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.message = `¡Correcto! ${this.pokemon.name}`;
      } else {
        this.message = `¡Opss!. El pokemon era ${this.pokemon.name}`;
      }
    },

    newGame() {
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.mixPokemonArray()
    },
  },

  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>