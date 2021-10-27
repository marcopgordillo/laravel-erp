import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import middlewarePipeline from './middlewarePipeline'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware
  const permission = to.meta.permission
  const context = { to, from, next, store, permission }

  if (!middleware) {
    return next()
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
