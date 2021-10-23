import axios from 'axios'
import { useStore } from 'vuex'
import store from '@/store'

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // handle CSRF token
})

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response
      && [401, 419].includes(error.response.status)
      && store.getters['auth/authUser']
      && !store.getters['auth/guest']) {
      store.dispatch('auth/logout')
    }
    return Promise.reject(error)
  },
)

export default {
  async login(payload) {
    await authClient.get('/sanctum/csrf-cookie')
    return authClient.post('/login', payload)
  },
  logout() {
    return authClient.post('/logout')
  },
  async forgotPassword(payload) {
    await authClient.get('/sanctum/csrf-cookie')
    await authClient.post('/forgot-password', payload)
  },
  getAuthUser() {
    return authClient.get('/api/users/auth')
  },
  async resetPassword(payload) {
    await authClient.get('/sanctum/csrf-cookie')
    return authClient.post('/reset-password', payload)
  },
  updatePassword(payload) {
    return authClient.put('/user/password', payload)
  },
  async registerUser(payload) {
    await authClient.get('/sanctum/csrf-cookie')
    return authClient.post('/register', payload)
  },
  sendVerification(payload) {
    return authClient.post('/email/verification-notification', payload)
  },
  updateUser(payload) {
    return authClient.put('/user/profile-information', payload)
  },
}
