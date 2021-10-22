import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  const authUser = store.getters["auth/authUser"]
  const reqAuth = to.matched.some(record => record.meta.requiresAuth)
  const loginQuery = { path: "/login", query: { redirect: to.fullPath } }

  if (reqAuth && !authUser) {
    store.dispatch("auth/getAuthUser").then(() => {
      if (!store.getters["auth/authUser"]) {
        next(loginQuery)
      } else {
        next()
      }
    });
  } else {
    next() // make sure to always call next()!
  }
})

export default router
