<template>
  <header class="p-5 text-white bg-blue-400">
    <nav class="container flex items-center justify-between mx-auto">
      <div v-if="authUser" class="flex items-center space-x-5">
        <router-link :to="{ name: 'Dashboard' }">
          <HomeIcon class="w-6 h-6 text-white" />
          <span class="sr-only">Dashboard</span>
        </router-link>
        <router-link :to="{ name: 'Users' }" v-if="isAdmin">Users</router-link>
      </div>
      <router-link :to="{ name: 'Home'}" v-else>
        <HomeIcon class="w-6 h-6 text-white" />
      </router-link>
      <div class="inline-flex items-center space-x-5" v-if="authUser">
        <router-link :to="{ name: 'User' }">{{ authUser.name }}</router-link>
        <Logout />
      </div>
      <router-link
        v-else
        :to="{ name: 'Login' }"
        class="inline-flex items-center space-x-2"
      >
        <span>Login</span>
        <LoginIcon class="w-6 h-6 text-white" />
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import { LogoutIcon, LoginIcon, HomeIcon } from '../icons'

const store = useStore()

const authUser = computed(() => store.getters['auth/authUser'])
const isAdmin = computed(() => store.getters['auth/isAdmin'])
</script>
