import API from './API'

export default {
  getUser(userId) {
    return API.get(`/users/${userId}`)
  },
  getUsers(page) {
    return API.get(`/users/?page=${page}`)
  },
  updateUser(userId, payload) {
    return API.put(`/users/${userId}`, payload)
  },
  deleteUser(userId) {
    return API.delete(`/users/${userId}`)
  },
  paginateUsers(link) {
    return API.get(link)
  },
}