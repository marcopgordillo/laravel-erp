<template>
  <div class="p-5 xl:px-0">
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !user"
        key="loading"
      />
      <div v-else class="mt-5 flex items-center justify-between py-2 border-b">
          <div class="inline-flex items-center space-x-2">
            <img
              v-if="!!user.avatar"
              :src="user.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon v-else class="w-10 h-10 text-gray-400 rounded-full" />
            <span class="text-gray-600">{{ user.name }}</span>
          </div>
          <a
            :href="`mailto:${user.email}`"
            :title="user.emailVerified ? 'Verified' : 'Not Verified'"
            class="inline-flex items-center space-x-2"
          >
            <span class="hidden sm:inline">{{ user.email }}</span>
            <MailIcon
              class="w-8 h-8"
              :class="user.emailVerified ? 'text-green-400' : 'text-gray-300'"
            />
          </a>
          <div class="inline-flex items-center space-x-2">
            <router-link
                v-can:users-update="user"
                :to="{ name:'UserEdit' }"
                class="px-4 py-2 bg-yellow-400 hover:bg-yellow-500"
            >
                Edit
            </router-link>
            <button
                v-can:users-delete="user"
                @click="deleteUser"
                class="px-4 py-2 bg-red-400 hover:bg-red-500"
            >
                Delete
            </button>
          </div>
      </div>
    </transition>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from "vuex"
import { useRoute, useRouter } from 'vue-router'
import { MailIcon, UserCircleIcon as AvatarIcon } from '@heroicons/vue/solid'
import { FlashMessage } from "@/components/base";

const store = useStore()
const route = useRoute()
const router = useRouter()

store.dispatch('user/getUser', route.params.id)
const user = computed(() => store.getters['user/user'])
const loading = computed(() => store.getters['user/loading'])
const error = computed(() => store.getters['user/error'])

function deleteUser() {
    if (confirm('Are you sure?')) {
        store.dispatch('user/deleteUser')
    }
}
</script>

