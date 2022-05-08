<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>

    <div class="entry-scroll-area">
      <div v-for="item in 100" :key="item">
        <Entry @click="$router.push({name: 'entry', params: {'id': item}})" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
      Entry: defineAsyncComponent(() => import("./EntryItem.vue")),
  }
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  height: calc(100vh - 56px);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.entry-scroll-area {
  margin-top: 10px;
  height: calc(100vh - 115px);
  overflow-y: scroll;
}

// Define custom scrollbar
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>