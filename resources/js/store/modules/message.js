import { getError } from '@/utils/helpers'
import MessageService from '@/services/MessageService'

const state = {
  messages: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
}

const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
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
  messages: state =>state.messages,
  meta: state =>state.meta,
  links: state =>state.links,
  loading: state =>state.loading,
  error: state =>state.error,
}

const actions = {
  getMessages({ commit }, page) {
    commit("SET_LOADING", true)
    MessageService.getMessages(page)
      .then(response => {
        setPaginatedMessages(commit, response);
      })
      .catch(error => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      })
  },
  postMessage({ commit }, payload) {
    return MessageService.postMessage(payload).then(response => {
      setPaginatedMessages(commit, response)
    })
  },
  paginateMessages({ commit }, link) {
    commit("SET_LOADING", true)
    MessageService.paginateMessages(link)
      .then(response => {
        setPaginatedMessages(commit, response)
      })
      .catch(error => {
        commit("SET_LOADING", false)
        commit("SET_ERROR", getError(error))
      });
  },
}

function setPaginatedMessages(commit, response) {
  commit('SET_MESSAGES', response.data.data)
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
