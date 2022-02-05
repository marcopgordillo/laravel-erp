<template>
    <button
        type="button"
        @click="logout"
        class="inline-flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white w-full"
    >
        <span class="hidden sm:inline mr-2">Logout</span>
        <LogoutIcon class="inline w-6 h-6 hover:text-white" />
    </button>
</template>

<script setup>
import { useAuthStore } from '@/js/store';
import { LogoutIcon } from '@heroicons/vue/solid'

const storeAuth = useAuthStore()

function logout() {
    storeAuth.logout()
}
</script>
