import { createStore, createLogger } from 'vuex'

import auth from './modules/auth'
import message from './modules/message'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

const state = () => ({
  sidebarOpen: false,
})

const getters = {
  sidebarOpen: state => state.sidebarOpen,
}

const mutations = {
  SET_SIDEBAR_OPEN (state, payload) {
    state.sidebarOpen = payload
  },
}

const actions = {

}

export default createStore({
  modules: {
    auth,
    message,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  mutations,
  actions,
})
