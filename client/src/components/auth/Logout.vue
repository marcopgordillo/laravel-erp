<template>
    <button
        type="button"
        @click="logout"
        class="inline-flex items-center space-x-2"
    >
        <span class="hidden sm:inline">Logout</span>
        <LogoutIcon class="w-6 h-6 text-white" />
    </button>
</template>

<script setup>
import { useStore } from 'vuex';
import { LogoutIcon } from '@heroicons/vue/solid'
import store from '../../store';

function logout() {
    store.dispatch('auth/logout')
}
</script>
