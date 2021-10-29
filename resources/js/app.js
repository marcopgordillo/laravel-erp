// require('./bootstrap');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import acl from './acl'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import EmptyLayout from '@/components/layout/EmptyLayout.vue'

import '~/app.css'

const app = createApp(App)
    .use(store)
    .use(router)
    .use(acl)

app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)

app.mount('#app')
