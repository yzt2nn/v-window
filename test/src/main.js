import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import vWindow from '../../lib/index'

const app = createApp(App)

app.use(vWindow)

app.mount('#app')
