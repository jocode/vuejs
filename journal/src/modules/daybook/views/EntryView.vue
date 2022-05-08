<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">May</span>
      <span class="mx-2 fs-4 fw-light">2022, Sunday</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
    </div>

    <div>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="¿Qué sucedió hoy?"
            ></textarea>
    </div>

    <img 
        src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg"
        alt="entry-picture"
        class="img-thumbnail"/>

    <Fab icon="fa-save"/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    components: {
        Fab: defineAsyncComponent(() => import('../components/FabButton.vue')),
    }
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>