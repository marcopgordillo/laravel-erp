<template>
    <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
        <div class="flex items-center">
            <button
                @click="isOpen = true"
                class="text-gray-500 focus:outline-none lg:hidden"
            >
                <MenuAlt2Icon class="w-6 h-6" />
            </button>
            <div class="relative mx-4 lg:mx-0">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon class="w-5 h-5 text-gray-500" />
                </span>
                <input
                    class="w-32 pl-10 pr-4 text-indigo-600 border-gray-200 rounded-md sm:w-64 focus:outline-none focus:border-indigo-600 focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
                    type="text"
                    placeholder="Search"
                />
            </div>
        </div>

        <div class="flex items-center">
            <button class="flex mx-4 text-gray-600 focus:outline-none">
                <BellIcon class="w-6 h-6" />
            </button>
            <div class="relative">
                <button
                    @click="dropdownOpen = !dropdownOpen"
                    class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
                >
                    <img
                        class="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                        alt="Your avatar"
                    />
                </button>
                <div
                    v-show="dropdownOpen"
                    @click="dropdownOpen = false"
                    class="fixed inset-0 z-10 w-full h-full"
                ></div>
                <transition
                    enter-active-class="transition duration-150 ease-out transform"
                    enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-95 opacity-0"
                >
                    <div
                        v-show="dropdownOpen"
                        class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >Profile</a>
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >Products</a>
                        <router-link
                            to="/"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >Log out</router-link>
                    </div>
                </transition>
            </div>
        </div>
    </header>
  <!-- <header class="p-5 text-white bg-blue-400">
    <nav class="container flex items-center justify-between mx-auto">
      <div v-if="authUser" class="flex items-center space-x-5">
        <router-link :to="{ name: 'Dashboard' }">
          <HomeIcon class="w-6 h-6 text-white" />
          <span class="sr-only">Dashboard</span>
        </router-link>
        <router-link :to="{ name: 'Users' }" v-can:users-list>Users</router-link>
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
  </header> -->
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import { HomeIcon, LoginIcon } from '@heroicons/vue/solid'
import { MenuAlt2Icon, SearchIcon, BellIcon } from '@heroicons/vue/outline'
import Logout from '../auth/Logout.vue';
import { useSidebar } from '@/hooks/useSidebar'

const store = useStore()

const dropdownOpen = ref(false)
const { isOpen } = useSidebar()
const authUser = computed(() => store.getters['auth/authUser'])
const isAdmin = computed(() => store.getters['auth/isAdmin'])
</script>
