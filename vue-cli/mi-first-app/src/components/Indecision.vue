<template>
  <img :src="img" alt="Imagen" />
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <p>Recuerda terminar con un signo de interrogación (?)</p>
    <input type="text" placeholder="Hazme una pregunta" v-model="question" />

    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indecisión",
  data() {
    return {
      question: "",
      answer: "",
      img: "https://picsum.photos/seed/picsum/800/600",
      isValidQuestion: false,
    };
  },

  watch: {
    question(value, oldValue) {
      this.isValidQuestion = false;
      console.log({ value });

      if (!value.endsWith("?")) return;

      this.isValidQuestion = true;
      this.getAnswer();
    },
  },

  methods: {
    async getAnswer() {
      try {
        this.answer = "Pensando...";

        const { answer, image } = await fetch("https://yesno.wtf/api").then(
          (response) => response.json()
        );

        this.answer = answer === "yes" ? "¡Si!" : "¡No!";
        this.img = image;
      } catch (error) {
        console.log('IndecisionComponent', error)
        this.answer = 'No se pudo cargar del API';
        this.img = null
      }
    },
  },
};
</script>

// El scope se usa para que los estilos se apliquen sólo en el componente
<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 2em;
  text-align: center;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
