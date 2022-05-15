<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <FabButton
    @on:click="createEntry"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        FabButton: defineAsyncComponent(() => import('../components/FabButton.vue')),
    },

    methods: {
        async createEntry() {
            console.log('createEntry NO entry selected');
            this.$router.push({ name: 'entry', params: { id: 'new' } });
        },
    },
}
</script>

<style lang="scss" scoped>
    div {
        height: 100%;
    }
</style>