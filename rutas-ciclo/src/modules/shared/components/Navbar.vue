<template>
    <nav>
        <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {pokemonId: 85}}">Pokemon por id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
        <CustomLink v-for="link in links" :key="link.to" :link="link"/>
    </nav>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {

    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'Por id', id: 151},
                { to: 'pokemon-about', name: 'About'},

                {to: 'dbz-characters', name: 'DBZ Characters'},
                {to: 'dbz-about', name: 'DBZ About'},

                { to: 'https://google.com', name: 'Google' }
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>

    nav {
        display: flex;
        justify-content: space-evenly;
        padding: 30px;
        background: #eee;
    }
   
    nav a {
        text-decoration: none;
        color: #2c3e50;
        font-weight: bold;
        margin: 0 10px;
    }

    nav a:hover {
        color: #3498db;
        transition: ease-in-out .3s;
    }

    nav .router-link-exact-active {
        color: #3498db;
    }
</style>