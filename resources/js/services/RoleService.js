import API from './API'

export default {
  getRole(roleId) {
    return API.get(`/roles/${roleId}`)
  },
  getRoles(page) {
    return API.get(`/roles/?page=${page}`)
  },
  getPermissions() {
    return API.get('/permissions')
  },
  postRole(payload) {
    return API.post('/roles', payload)
  },
  updateRole(roleId, payload) {
    return API.put(`/roles/${roleId}`, payload)
  },
  deleteRole(roleId) {
    return API.delete(`/roles/${roleId}`)
  },
  paginateRoles(link) {
    return API.get(link)
  },
}
