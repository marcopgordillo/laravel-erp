import { getError } from '@/utils/helpers'
import UserService from '@/services/UserService'
import router from '@/router'

const state = {
  users: [],
  user: null,
  meta: null,
  links: null,
  loading: false,
  error: null,
  message: null,
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_META(state, meta) {
    state.meta = meta
  },
  SET_LINKS(state, links) {
    state.links = links
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SET_MESSAGE(state, message) {
    state.message = message
  },
}

const getters = {
  users: state =>state.users,
  user: state =>state.user,
  meta: state =>state.meta,
  links: state =>state.links,
  loading: state =>state.loading,
  error: state =>state.error,
  message: state =>state.message,
}

const actions = {
  getUsers({ commit }, page) {
    commit("SET_LOADING", true)
    UserService.getUsers(page)
      .then(response => {
        setPaginatedUsers(commit, response);
      })
      .catch(error => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      })
  },
  getUser({ commit, dispatch }, payload) {
    commit("SET_LOADING", true)
    UserService.getUser(payload)
      .then(response => {
        commit('SET_USER', response.data.data)
        commit("SET_LOADING", false)
      })
      .catch(error => {
        commit("SET_LOADING", false)
        dispatch('putError', getError(error))
      })
  },
  updateUser({ commit, dispatch }, payload) {
    UserService.updateUser(payload.id, payload)
      .then(() => dispatch('putMessage', 'User Updated'))
      .catch(error => dispatch('putError', getError(error)))
  },
  deleteUser({ state, commit, rootState }) {
    if (state.user.id !== rootState.auth.user.id) {
      UserService.deleteUser(state.user.id)
        .then(() => router.push({ name: 'Users' }))
      .catch(error => {
        commit("SET_ERROR", getError(error));
      })
    } else {
      commit('SET_ERROR', getError(Error("Can't delete your own user!")))
    }
  },
  paginateUsers({ commit }, link) {
    commit("SET_LOADING", true)
    UserService.paginateUsers(link)
      .then(response => {
        setPaginatedUsers(commit, response)
      })
      .catch(error => {
        commit("SET_LOADING", false)
        commit("SET_ERROR", getError(error))
      });
  },
  putMessage({ commit }, payload) {
        commit('SET_MESSAGE', payload)
        setTimeout(() => commit('SET_MESSAGE', null), 5000)
  },
  putError({ commit }, payload) {
        commit('SET_ERROR', payload)
        setTimeout(() => commit('SET_ERROR', null), 5000)
  },
}

function setPaginatedUsers(commit, response) {
  commit('SET_USERS', response.data.data)
  commit('SET_META', response.data.meta)
  commit('SET_LINKS', response.data.links)
  commit('SET_LOADING', false)
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}
