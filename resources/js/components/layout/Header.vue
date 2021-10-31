<template>
    <header class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
        <div class="flex items-center">
            <button
                @click="sidebarOpen"
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
                        v-if="user?.avatar"
                        :src="user.avatar"
                        class="object-cover w-full h-full"
                        alt=""
                    />
                    <AvatarIcon v-else class="w-8 h-8 text-gray-800 rounded-full" />
                </button>
                <div
                    v-show="dropdownOpen"
                    @click="dropdownOpen = false"
                    class="fixed inset-0 z-10 w-full h-full"
                ></div>
                <transition name="fade">
                    <div
                        v-show="dropdownOpen"
                        class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                        <div v-if="user">
                            <router-link
                                :to="{ name: 'User' }"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                            >{{ user.name }}</router-link>
                            <Logout />
                        </div>
                        <router-link
                            v-else
                            :to="{ name: 'Login' }"
                            class="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white inline-flex items-center space-x-2 w-full"
                        >
                            <span>Login</span>
                            <LoginIcon class="w-6 h-6 text-white" />
                        </router-link>
                    </div>
                </transition>
            </div>
        </div>
    </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore, useAuthStore } from '@/store'
import { HomeIcon, LoginIcon, UserCircleIcon as AvatarIcon, } from '@heroicons/vue/solid'
import { MenuAlt2Icon, SearchIcon, BellIcon } from '@heroicons/vue/outline'
import Logout from '../auth/Logout.vue';

const storeMain = useMainStore()
const storeAuth = useAuthStore()

const { user } = storeToRefs(storeAuth)
const dropdownOpen = ref(false)

function sidebarOpen() {
    storeMain.$patch(state => state.open = true)
}
</script>
