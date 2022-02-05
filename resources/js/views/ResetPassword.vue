<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Reset Password</h2>
    <form
      @submit.prevent="resetPassword"
      class="p-5 bg-white border rounded shadow"
    >
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
            placeholder="Your new Password"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Confirm Password"
            name="password-confirm"
            v-model="passwordConfirm"
            placeholder="Confirm your new Password"
            class="mb-4"
        />
        <BaseBtn type="submit" text="Reset Password" />
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { getError } from "@/js/utils/helpers";
import AuthService from "@/js/services/AuthService";
import { BaseInput, BaseBtn, FlashMessage } from '@/js/components/base'

const route = useRoute()

const email = ref(null)
const password = ref(null)
const passwordConfirm = ref(null)
const error = ref(null)
const message = ref(null)

function resetPassword() {
    error.value = null
    message.value = null

    const payload = {
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
        toke: route.query.token,
    }

    AuthService.resetPassword(payload)
        .then(() => (message.value = 'Password reset.'))
        .catch(err => (error.value = getError(err)))
}
</script>
