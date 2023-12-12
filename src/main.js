import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'remixicon/fonts/remixicon.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
