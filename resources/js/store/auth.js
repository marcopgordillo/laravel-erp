import { defineStore } from 'pinia'
import { getError } from '@/js/utils/helpers'
import router from '@/js/router'
import AuthService from '@/js/services/AuthService'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAdmin: state => state.user?.roles?.includes('super-admin'),
    guest: () => {
      const storageItem = window.localStorage.getItem('guest')
      return storageItem && storageItem === 'isGuest'
    },
  },
  actions: {
    logout() {
      return AuthService.logout()
        .then(() => {
          this.user = null
          this.setGuest('isGuest')
          if (router.currentRoute.value.name !== 'Login') {
            router.push({ name: 'Login' })
          }
        })
        .catch(error => this.error = getError(error))
    },
    async getAuthUser() {
      this.loading = true
      try {
        const response = await AuthService.getAuthUser()
        this.user = response.data.data
        this.loading = false
      } catch (error) {
        this.loading = false
        this.user = null
        this.error = getError(error)
      }
    },
    setGuest(value) {
      window.localStorage.setItem('guest', value)
    },
  },
})

export default useAuthStore
