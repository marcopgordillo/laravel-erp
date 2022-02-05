<template>
  <div aria-label="Pagination" class="flex items-center justify-between py-4">
    <p class="text-sm text-gray-500">
      Page {{ meta.current_page }} of {{ meta.last_page }}
    </p>
    <div class="flex">
      <button
        rel="first"
        type="button"
        @click="firstPage"
        v-if="links.prev"
        class="px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"
      >
        First
      </button>

      <button
        rel="prev"
        type="button"
        @click="prevPage"
        :class="{ 'rounded-r': !links.next }"
        v-if="links.prev"
        class="px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"
      >
        Previous
      </button>

      <button
        rel="next"
        type="button"
        @click="nextPage"
        :class="{ 'rounded-l': !links.prev }"
        v-if="links.next"
        class="px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"
      >
        Next
      </button>

      <button
        rel="last"
        type="button"
        @click="lastPage"
        v-if="links.next"
        class="px-2.5 py-1.5 m-1 text-sm text-pink-400 border rounded hover:text-pink-500"
      >
        Last
      </button>
    </div>
  </div>
</template>
<script setup>
import { useUserStore, useMessageStore } from '@/js/store'
import { useRouter } from 'vue-router'

const props = defineProps({
    action: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      default: null,
    },
    meta: {
      type: Object,
      required: true,
    },
    links: {
      type: Object,
      required: true,
    },
})

const router = useRouter()
const stores = [
    { name: 'storeUser', store: useUserStore },
    { name: 'storeMessage', store: useMessageStore },
]

function Capitalize(value) {
    return `${value[0].toUpperCase()}${value.substring(1)}`
}

const storeName = `store${Capitalize(props.action.store)}`
const store = stores.find(store => store.name === storeName).store()

function firstPage() {
    store[props.action.action](props.links.first)
    if (props.path) {
        router.push({ name: props.path, query: { page: 1 } })
    }
}

function prevPage() {
    store[props.action.action](props.links.prev)
    if (props.path) {
        router.push({ name: props.path, query: { page: props.meta.current_page - 1 } })
    }
}

function nextPage() {
    store[props.action.action](props.links.next)
    if (props.path) {
        router.push({ name: props.path, query: { page: props.meta.current_page + 1 } })
    }
}

function lastPage() {
    store[props.action.action](props.links.last)
    if (props.path) {
        router.push({ name: props.path, query: { page: props.meta.last_page } })
    }
}
</script>
