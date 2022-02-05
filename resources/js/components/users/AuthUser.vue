<template>
    <div v-if="user">
        <transition name="fade">
            <img
                v-if="user.avatar"
                :src="user.avatar"
                class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                alt=""
            />
        </transition>
        <ul>
            <li class="mb-1 font-bold">{{ user.name }}</li>
            <li>Email: {{ user.email }}</li>
            <li v-if="user.emailVerified" class="text-gray-500">
                Emailed Verified
            </li>
        </ul>
        <VerifyEmail v-if="!user.emailVerified" class="mt-4" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/js/store'
import VerifyEmail from '../auth/VerifyEmail.vue';

const storeAuth = useAuthStore()
const { user } = storeToRefs(storeAuth)
</script>
