import { createStore } from 'vuex'

import auth from './modules/auth'

export default createStore({
  strict: import.meta.env.NODE_ENV !== 'production',
  modules: {
    auth,
  },
  state() {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
})
