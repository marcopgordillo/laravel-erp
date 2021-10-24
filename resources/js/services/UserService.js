import API from './API'

export default {
  getUser(userId) {
    return API.get(`/users/${userId}`)
  },
  getUsers(page) {
    return API.get(`/users/?page=${page}`)
  },
  paginateUsers(link) {
    return API.get(link)
  },
}
