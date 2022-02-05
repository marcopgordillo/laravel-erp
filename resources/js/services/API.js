import axios from 'axios'
import { useAuthStore } from '@/js/store'

const apiClient = axios.create({
  baseURL: `${import.meta.env.MIX_API_URL}/api`,
  withCredentials: true,
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    const storeAuth = useAuthStore()
    if (error.response
      && [401, 419].includes(error.response.status)
      && storeAuth.user
      && !storeAuth.guest
    ) {
      storeAuth.logout()
    }

    return Promise.reject(error)
  }
)

export default apiClient
