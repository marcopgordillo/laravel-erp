import { createStore } from 'vuex'

import cart from './modules/cart'

export default createStore({
  strict: import.meta.env.NODE_ENV !== 'production',
  modules: {
    cart,
  },
  state() {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
})
