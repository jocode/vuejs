<template>
  <nav class="navbar bg-primary">
    <a 
      class="navbar-brand text-white"
      @click="$router.push({name: 'daybook'})">
      
      <img
        src="@/assets/logo.png"
        height="24"
        alt="Vue Logo"
        class="d-inline-blick align-text-top mx-2"
      />

      Daybook
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2">
          <i class="fa fa-sign-out-alt"></i>
        </button>
    </div>
  </nav>
</template>

<style scoped>
  nav a {
    cursor: pointer;
  }
</style>