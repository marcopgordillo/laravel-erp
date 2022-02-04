// require('./bootstrap');

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import acl from './acl'
import DashboardLayout from '@/js/components/layout/DashboardLayout.vue'
import EmptyLayout from '@/js/components/layout/EmptyLayout.vue'

import '@/css/app.css'

const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(acl)

app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)

app.mount('#app')
