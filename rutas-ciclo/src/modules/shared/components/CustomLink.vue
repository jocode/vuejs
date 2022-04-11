<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank">{{ link.name }}</a>
  <router-link 
    v-else 
    :to="link.to"
    v-slot="{ href, isActive }">
      <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
  },
};
</script>

<style scoped>

    .is-active {
        color: #3498db;
    }

    .normal-link {
        color: #2c3e50;
    }

</style>