<template>
    <form @submit.prevent="login">
        <BaseInput
            type="email"
            label="Email"
            name="email"
            v-model="email"
            autocomplete="email"
            placeholder="Your email"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Password"
            name="password"
            v-model="password"
            placeholder="Your password"
            class="mb-4"
        />
        <div class="flex justify-between">
            <BaseBtn type="submit" text="Login" />
            <router-link
                :to="{ name: 'ForgotPassword' }"
                class="text-sm base-link"
            >
                Forgot your password?
            </router-link>
        </div>
        <FlashMessage :error="error" />
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import FlashMessage from '@/components/base/FlashMessage.vue'
import { getError } from '@/utils/helpers'
import AuthService from '@/services/AuthService'

const router = useRouter()
const store = useStore()

let email = ref(null)
let password = ref(null)
let error = ref(null)

async function login() {
    error.value = null
    const payload = {
        email: email.value,
        password: password.value,
    }
    try {
        await AuthService.login(payload)
        const authUser = await store.dispatch('auth/getAuthUser')
        if (authUser) {
            store.dispatch('auth/setGuest', { value: 'isNotGuest' })
            router.push({ name: 'Dashboard' })
        } else {
            const _error = Error('Unable to fetch user after login, check your API settings.')
            _error.name = 'Fetch User'
            throw _error
        }
    } catch (err) {
        error.value = getError(err)
    }
}
</script>
