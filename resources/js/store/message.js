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
          setPaginatedMessages(this, response)
        })
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
    postMessage(payload) {
      return MessageService.postMessage(payload).then(response => {
        setPaginatedMessages(this, response)
      })
    },
    paginateMessages(link) {
      this.loading = true
      MessageService.paginateMessages(link)
        .then(response => {
          setPaginatedMessages(this, response)
        })
        .catch(error => {
          this.loading = false
          this.error = getError(error)
        })
    },
  },
})

function setPaginatedMessages(store, response) {
  store.messages = response.data.data
  store.meta = response.data.meta
  store.links = response.data.links
  store.loading = false
}

export default useMessageStore
