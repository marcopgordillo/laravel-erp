export default function ({ next, store }) {
  const storageItem = window.localStorage.getItem('guest')

  if (storageItem === 'isNotGuest' && !store.getters['auth/authUser']) {
    store.dispatch('auth/getAuthUser').then(() => {
      if (store.getters['auth/authUser']) {
        next({ name: 'Dashboard' })
      } else {
        store.dispatch('auth/setGuest', { value: 'isGuest' })
        next()
      }
    })
  } else {
    next()
  }
}