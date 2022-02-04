import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store'
import middlewarePipeline from './middlewarePipeline'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  const store = useAuthStore()
  const middleware = to.meta.middleware
  const context = { to, from, next, store }

  if (!middleware) {
    return next()
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
