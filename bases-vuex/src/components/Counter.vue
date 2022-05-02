<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h2>Computed through mapState: {{ count }}</h2>
  <h2>Last mutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Counter",

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
    /* ...mapState({
            count: state => state.count,
            lastMutation: state => state.lastMutation,
            lastMutation: 'lastMutation'
        }) */
  },
  // computed: mapState(['count']),

  methods: {
    increment() {
      this.$store.commit("counter/incement");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
      // this.randomInt()
    },
    /* incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        }, */
    // ...mapActions('counter',['incrementRandomInt'])
    ...mapActions("counter", {
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>
