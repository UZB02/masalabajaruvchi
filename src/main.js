import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const router =createRouter({
//     history: createWebHistory(),
//     linkActiveClass:'active',
//     linkActiveClass
//   })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
