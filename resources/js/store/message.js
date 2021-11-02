import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import MessageService from '@/services/MessageService'

const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [],
    meta: null,
    links: null,
    loading: false,
    error: null,
  }),
  actions: {
    getMessages(page) {
      this.loading = true
      MessageService.getMessages(page)
        .then(response => {
          this.setPaginated(response)
        })
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    postMessage(payload) {
      return MessageService.postMessage(payload).then(response => {
        this.setPaginated(response)
      })
    },
    paginateMessages(link) {
      this.loading = true
      MessageService.paginateMessages(link)
        .then(response => this.setPaginated(response))
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    setPaginated(store, response) {
      this.messages = response.data.data
      this.meta = response.data.meta
      this.links = response.data.links
      this.loading = false
    },
  },
})


export default useMessageStore
