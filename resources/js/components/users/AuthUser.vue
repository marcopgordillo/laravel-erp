<template>
    <div v-if="authUser">
        <transition name="fade">
            <img
                v-if="authUser.data.avatar"
                :src="authUser.data.avatar"
                class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                alt=""
            />
        </transition>
        <ul>
            <li class="mb-1 font-bold">{{ authUser.data.name }}</li>
            <li>Email: {{ authUser.data.email }}</li>
            <li v-if="authUser.data.emailVerified" class="text-gray-500">
                Emailed Verified
            </li>
        </ul>
        <VerifyEmail v-if="!authUser.data.emailVerified" class="mt-4" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import VerifyEmail from '../auth/VerifyEmail.vue';

const store = useStore()

const authUser = computed(() => store.getters['auth/authUser'])
</script>
