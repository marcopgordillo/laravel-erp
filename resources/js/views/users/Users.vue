<template>
  <div class="p-5 xl:px-0">
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !users.length"
        key="loading"
      />
      <ul v-else class="mt-5">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex items-center justify-between py-2 border-b"
        >
          <div class="inline-flex items-center space-x-2">
            <img
              v-if="user?.avatar"
              :src="user.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon v-else class="w-10 h-10 text-gray-400 rounded-full" />
            <router-link
                :to="{ name: 'UsersId', params: { id: user.id } }"
                class="text-gray-600 base-link"
            >
                {{ user.name }}
            </router-link>
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
        </li>
      </ul>
    </transition>
    <transition-group name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
      <FlashMessage :message="message" v-if="message" key="message" />
    </transition-group>
    <transition name="fade">
      <BasePagination
        path="users"
        :meta="meta"
        :links="links"
        action="user/paginateUsers"
        v-if="meta && meta.last_page > 1"
      />
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from "vuex"
import { onBeforeRouteLeave } from 'vue-router'
import { MailIcon, UserCircleIcon as AvatarIcon } from '@heroicons/vue/solid'
import { BasePagination, FlashMessage } from "@/components/base";

const store = useStore()

const loading = computed(() => store.getters['user/loading'])
const error = computed(() => store.getters['user/error'])
const users = computed(() => store.getters['user/users'])
const meta = computed(() => store.getters['user/meta'])
const links = computed(() => store.getters['user/links'])
const message = computed(() => store.getters['user/message'])

store.dispatch('user/getUsers', 1)

onBeforeRouteLeave((to, from, next) => {
    const currentPage = parseInt(to.query.page) || 1;
    store.dispatch('user/getUsers', currentPage).then(() => {
        to.params.page = currentPage
        next()
    })
})
</script>
