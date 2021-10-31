export default function ({ to, next, store }) {
  const loginQuery = { name: 'Login', query: { redirect: to.fullPath } }

  if (!store.user) {
    store.getAuthUser()
      .then(() => !store.user ? next(loginQuery) : next())
  } else {
    next()
  }
}
