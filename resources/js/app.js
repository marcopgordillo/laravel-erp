// require('./bootstrap');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import acl from './acl'

import '~/app.css'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(acl)

app.mount('#app')
