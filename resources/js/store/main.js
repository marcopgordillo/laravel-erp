import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    open: false,
  })
})

export default useMainStore
