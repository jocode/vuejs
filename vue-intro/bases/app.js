const app = Vue.createApp({
    /* template: `
      <h1>Hola mundo</h1>
      <p>Desde app.js</p>
      ` */
      data() {
        return {
          quote: "I am Batman",
          author: 'Bruce Wayne',
          toggle: false
        }
      },
  
      methods: {
        changeQuote() {
          console.log('Hola mundo')
          this.author = 'Clark ,Kent'
  
          this.toggle = !this.toggle
          this.capitalize()
        },
  
        capitalize() {
          this.quote = (this.toggle == true) ? this.quote.toUpperCase() : this.quote.toLowerCase()
        }
      }
  
  
  });
  app.mount("#app");
  