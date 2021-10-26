export default function ({ to, next, store, permission }) {
  const hasPermission = store.getters['auth/authUser'].data.permissions.includes(permission)

  if (hasPermission) next()
  else next({ name: 'Home'})
}
