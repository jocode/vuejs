<template>
  <Navbar/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view/>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */'./modules/shared/components/Navbar.vue'))
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  padding: 0;
}
</style>
