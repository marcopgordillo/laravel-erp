<template>
    <div class="flex">
        <!-- Backdrop -->
        <div
            :class="open ? 'block' : 'hidden'"
            @click="sidebarClose"
            class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
        ></div>
        <!-- End Backdrop -->

        <div
            :class="open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
            class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
        >
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center">
                    <FireIcon class="w-12 h-12 text-indigo-600" />
                    <span class="mx-2 text-2xl font-semibold text-white">V-Dashboard</span>
                </div>
            </div>

            <nav class="mt-10">
                <router-link
                    :to="{ name: 'Dashboard' }"
                    :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <ChartPieIcon class="w-5 h-5" />
                    <span class="mx-4">Dashboard</span>
                </router-link>

                <router-link
                    :to="{ name: 'Users' }"
                    v-if="user"
                    v-can:users-list
                    :class="[$route.name === 'Users' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <ViewGridIcon class="w-5 h-5" />
                    <span class="mx-4">Users</span>
                </router-link>

                <router-link
                    to="/tables"
                    :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <CollectionIcon class="w-5 h-5" />
                    <span class="mx-4">Tables</span>
                </router-link>

                <router-link
                    to="/forms"
                    :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <PencilAltIcon class="w-5 h-5" />
                    <span class="mx-4">Forms</span>
                </router-link>

                <router-link
                    to="/cards"
                    :class="[$route.name === 'Cards' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <CreditCardIcon class="w-5 h-5" />
                    <span class="mx-4">Cards</span>
                </router-link>

                <router-link
                    to="/modal"
                    :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <DatabaseIcon class="w-5 h-5" />
                    <span class="mx-4">Modal</span>
                </router-link>

                <router-link
                    to="/blank"
                    :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
                    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
                >
                    <TemplateIcon class="w-5 h-5" />
                    <span class="mx-4">Blank</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore, useAuthStore } from '@/store'
import {
    ChartPieIcon,
    FireIcon,
    ViewGridIcon,
    CollectionIcon,
    PencilAltIcon,
    CreditCardIcon,
    DatabaseIcon,
    TemplateIcon,
} from '@heroicons/vue/solid'

const storeMain = useMainStore()
const storeAuth = useAuthStore()

const { open } = storeToRefs(storeMain)
const { user } = storeToRefs(storeAuth)

const activeClass = ref('bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100')
const inactiveClass = ref('hover:bg-gray-600 hover:bg-opacity-25 text-gray-500 hover:text-gray-100 border-gray-900')

function sidebarClose() {
    storeMain.$patch(state => state.open = false)
}
</script>
