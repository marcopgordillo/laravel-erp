export default function ({ next, store }) {
  const storageItem = window.localStorage.getItem('guest')

  if (storageItem === 'isNotGuest' && !store.user) {
    store.getAuthUser().then(() => {
      if (store.user) {
        next({ name: 'Dashboard' })
      } else {
        store.setGuest('isGuest')
        next()
      }
    })
  } else {
    next()
  }
}
