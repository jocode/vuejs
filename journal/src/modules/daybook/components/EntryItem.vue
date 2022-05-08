<template>
  <div 
    class="entry-container mb-2 pointer p-2">

    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, sit accusamus hic eveniet dolores suscipit, nihil, tenetur at quidem nemo? Quisquam totam officia maxime, hic ducimus ullam vitae aliquid!
    </div>

  </div>
</template>

<script>
export default {
    name: 'EntryItem',
}
</script>

<style lang="scss" scoped>
.entry-container {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  transition: 0.2s all ease-in;
  margin: 1px 5px;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 14px;
  }
}

</style>