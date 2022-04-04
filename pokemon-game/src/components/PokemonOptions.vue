<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id"
      @click="selectPokemon(pokemon.id)" :class="{selected: (pokemon.id === selectedPokemon)}">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  props: {
    pokemons: {
      type: Array,
      required: true,
    }
  },

  data(){
    return {
      selectedPokemon: null,
    }
  },

  methods: {
    selectPokemon(pokemonId) {
      if (this.selectedPokemon) return
      this.selectedPokemon = pokemonId
      this.$emit('selection', pokemonId)
    }
  },

}
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}

.selected {
  background-color: rgba(0, 0, 0, 0.05);
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 60vw;
  padding: .3em 0;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>