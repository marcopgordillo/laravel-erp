<template>
    <form @submit.prevent="registerUser">
        <BaseInput
            type="text"
            label="Name"
            name="name"
            v-model="name"
            placeholder="Your name"
            class="mb-2"
        />
        <BaseInput
            type="email"
            label="Email"
            name="email"
            v-model="email"
            placeholder="Your email"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Password"
            name="password"
            v-model="password"
            placeholder="Your password"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Confirm Password"
            name="password-confirm"
            v-model="passwordConfirm"
            placeholder="Confirm your password"
            class="mb-2"
        />
        <BaseBtn type="submit" text="Register" />
        <FlashMessage :error="error" />
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import FlashMessage from '@/components/base/FlashMessage.vue'
import { getError } from '@/utils/helpers'
import AuthService from '@/services/AuthService'

const router = useRouter()

let name = ref(null)
let email = ref(null)
let password = ref(null)
let passwordConfirm = ref(null)
let error = ref(null)

function registerUser() {
    error = null
    const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value
    }
    AuthService.registerUser(payload)
        .then(() => router.push({ name: 'Dashboard' }))
        .catch(err => error = getError(err))
}
</script>
