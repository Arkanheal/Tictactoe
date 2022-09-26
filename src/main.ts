import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import './assets/base.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(VueCookies)

app.mount('#app')
