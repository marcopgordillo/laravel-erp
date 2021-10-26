import { getError } from '@/utils/helpers'
import router from '@/router'
import AuthService from '@/services/AuthService'

const state = () => ({
  user: null,
  loading: false,
  error: null,
})

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

const getters = {
  authUser: state => state.user,
  isAdmin: state => state.user?.data.roles?.includes('super-admin'),
  error: state => state.error,
  loading: state => state.loading,
  loggedIn: state => !!state.user,
  guest: () => {
    const storageItem = window.localStorage.getItem('guest')
    return storageItem && storageItem === 'isGuest'
  },
}

const actions ={
  logout({ commit, dispatch }) {
    return AuthService.logout()
      .then(() => {
        commit('SET_USER', null)
        dispatch('setGuest', { value: 'isGuest' })
        if (router.currentRoute.value.name !== 'Login') {
          router.push({ name: 'Login' })
        }
      })
      .catch(error => commit('SET_ERROR', getError(error)))
  },
  async getAuthUser({ commit }) {
    commit('SET_LOADING', true)
    try {
      const response = await AuthService.getAuthUser()
      commit('SET_USER', response.data)
      commit('SET_LOADING', false)
    } catch (error) {
      commit('SET_LOADING', false)
      commit('SET_USER', null)
      commit('SET_ERROR', getError(error))
    }
  },
  setGuest(context, { value }) {
    window.localStorage.setItem('guest', value)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}
