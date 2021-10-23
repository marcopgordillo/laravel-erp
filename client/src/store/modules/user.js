import { getError } from '@/utils/helpers'
import UserService from '@/services/UserService'

const state = {
  users: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
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
}

const getters = {
  users: state =>state.users,
  meta: state =>state.meta,
  links: state =>state.links,
  loading: state =>state.loading,
  error: state =>state.error,
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
