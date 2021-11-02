import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import RoleService from '@/services/RoleService'
import router from '@/router'

const useRoleStore = defineStore('role', {
  state: () => ({
    roles: [],
    role: null,
    meta: null,
    links: null,
    loading: false,
    error: null,
    message: null,
    allPermissions: [],
  }),
  actions: {
    getRoles(page) {
      this.loading = true
      RoleService.getRoles(page)
        .then(response => this.setPaginated(response))
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    getPermissions() {
      this.loading = true
      RoleService.getPermissions()
        .then(response => this.allPermissions = response.data.data)
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    getRole(payload) {
      this.loading = true
      RoleService.getRole(payload)
        .then(response => {
          this.role = response.data.data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.putError(getError(error))
        })
    },
    postRole(payload) {
      this.loading = true
      RoleService.postRole(payload)
        .then(response => {
          this.loading = false
          console.log(response.data)
          this.putMessage('Role created successfully')
          // Object.assign(this.roles, response.data)
        })
        .catch(error => {
          this.loading = false
          this.putError(getError(error))
        })
    },
    updateRole(payload) {
      RoleService.updateRole(payload.id, payload)
        .then(() => {
          Object.assign(this.role, payload)
          this.putMessage('Role Updated')
        })
        .catch(error => putError(getError(error)))
    },
    deleteRole() {
      if (this.role.name !== 'super-admin') {
        RoleService.deleteRole(this.role.id)
          .then(() => router.push({ name: 'Roles' }))
        .catch(error => {
          this.error = getError(error)
        })
      } else {
        this.error = getError(Error("Can't delete your own role!"))
      }
    },
    paginateRoles(link) {
      this.loading = true
      RoleService.paginateRoles(link)
        .then(response => this.setPaginated(response))
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        });
    },
    putMessage(payload) {
          this.message = payload
          setTimeout(() => this.message = null, 5000)
    },
    putError(payload) {
          this.error = payload
          setTimeout(() => this.error = null, 5000)
    },
    setPaginated(response) {
      this.roles = response.data.data
      this.meta = response.data.meta
      this.links = response.data.links
      this.loading = false
    },
  },
})

export default useRoleStore
