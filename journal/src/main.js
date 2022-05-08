import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Se importan los styles
import './styles/styles.scss'

createApp(App).use(router).mount('#app')
