<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
        v-model="term"
      />
    </div>

    <div class="entry-scroll-area">
      <Entry
        v-for="entry in entriesByTerm"
        :key="entry.id"
        :entry="entry"
        @click="$router.push({ name: 'entry', params: { id: entry.id } })" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./EntryItem.vue")),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
  },
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