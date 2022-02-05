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
            class="mb-4"
        />
        <BaseBtn type="submit" text="Register" />
        <FlashMessage :error="error" />
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getError } from '@/js/utils/helpers'
import AuthService from '@/js/services/AuthService'
import { BaseBtn, BaseInput, FlashMessage } from '@/js/components/base'

const router = useRouter()

let name = ref(null)
let email = ref(null)
let password = ref(null)
let passwordConfirm = ref(null)
let error = ref(null)

function registerUser() {
    error.value = null
    const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value
    }
    AuthService.registerUser(payload)
        .then(() => router.push({ name: 'Dashboard' }))
        .catch(err => error.value = getError(err))
}
</script>
