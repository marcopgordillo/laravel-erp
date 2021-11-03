import API from './API'

export default {
  getUser(userId) {
    return API.get(`/users/${userId}`)
  },
  getUsers(page) {
    return API.get(`/users/?page=${page}`)
  },
  getRoles() {
    return API.get('/roles/all')
  },
  postUser(payload) {
    return API.post('/users', payload)
  },
  updateUser(userId, payload) {
    return API.post(`/users/${userId}`, payload)
  },
  deleteUser(userId) {
    return API.delete(`/users/${userId}`)
  },
  paginateUsers(link) {
    return API.get(link)
  },
}
