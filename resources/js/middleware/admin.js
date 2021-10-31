export default function ({ next, store }) {
  if (store.isAdmin) next()
  else next({ name: 'NotFound' })
}
