import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App).mount('#app')
app.config.globalProperties.axios=axios
