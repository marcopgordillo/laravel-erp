import { createApp } from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/app.css'

export const app = createApp(App)
    .use(vueAxios, axios)
    .use(store)
    .use(router)


app.mount('#app')
