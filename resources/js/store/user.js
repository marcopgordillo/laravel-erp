import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import UserService from '@/services/UserService'
import router from '@/router'
import { useAuthStore } from '.'

const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    user: null,
    meta: null,
    links: null,
    loading: false,
    error: null,
    message: null,
  }),
  actions: {
    getUsers(page) {
      this.loading = true
      UserService.getUsers(page)
        .then(response => {
          setPaginatedUsers(this, response);
        })
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    getUser(payload) {
      this.loading = true
      UserService.getUser(payload)
        .then(response => {
          this.user = response.data.data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.putError(getError(error))
        })
    },
    updateUser(payload) {
      UserService.updateUser(payload.id, payload)
        .then(() => this.putMessage('User Updated'))
        .catch(error => putError(getError(error)))
    },
    deleteUser() {
      const storeAuth = useAuthStore()
      if (this.user.id !== storeAuth.user.id) {
        UserService.deleteUser(this.user.id)
          .then(() => router.push({ name: 'Users' }))
        .catch(error => {
          this.error = getError(error)
        })
      } else {
        this.error = getError(Error("Can't delete your own user!"))
      }
    },
    paginateUsers(link) {
      this.loading = true
      UserService.paginateUsers(link)
        .then(response => {
          setPaginatedUsers(this, response)
        })
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
  },
})

function setPaginatedUsers(store, response) {
  store.users = response.data.data
  store.meta = response.data.meta
  store.links = response.data.links
  store.loading = false
}

export default useUserStore
