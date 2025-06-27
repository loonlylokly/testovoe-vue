import { createApp } from 'vue'

import App from './App.vue'
import router from './shared/router'
import './shared/styles/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
