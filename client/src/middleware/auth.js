export default function ({ to, next, store }) {
  const loginQuery = { name: 'Login', query: { redirect: to.fullPath } }

  if (!store.getters['auth/authUser']) {
    store.dispatch('auth/getAuthUser')
      .then(() => !store.getters['auth/authUser'] ? next(loginQuery) : next())
  } else {
    next()
  }
}
