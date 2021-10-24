import API from './API'

export default {
  getMessages(page) {
    return API.get(`/messages/?page=${page}`)
  },
  postMessage(payload) {
    return API.post('/messages', payload)
  },
  paginateMessages(link) {
    return API.get(link)
  },
}
