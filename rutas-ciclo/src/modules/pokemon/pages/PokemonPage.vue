<template>
    <h1>Pokemon Page <span>#{{ pokemonId }}</span></h1>

    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
export default {

    data(){
        return {
            pokemon: null
        }
    },

    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },

    created() {
        // const { pokemonId } = this.$route.params;
        // this.pokemonId = pokemonId
        // console.log(this.$route);
        this.getPokemon()
    },

    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
                .then(response => response.json())
                console.log(pokemon)
                this.pokemon = pokemon
            } catch(error) {
                console.log(error)
                this.$router.push('/')
            }
        }
    },

    watch: {
        pokemonId() {
            this.getPokemon()
        }
    }

}
</script>
