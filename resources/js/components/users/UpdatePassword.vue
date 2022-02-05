<template>
  <form @submit.prevent="updatePassword">
    <BaseInput
        type="password"
        label="Current Password"
        name="current-password"
        v-model="currentPassword"
        placeholder="Your Current Password"
        class="mb-2"
    />
    <BaseInput
        type="password"
        label="New Password"
        name="password"
        v-model="password"
        placeholder="Your New Password"
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
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { getError } from "@/js/utils/helpers"
import AuthService from "@/js/services/AuthService";
import { BaseBtn, BaseInput, FlashMessage } from "@/js/components/base"

const currentPassword = ref(null)
const password = ref(null)
const passwordConfirm = ref(null)
const error = ref(null)
const message = ref(null)

function updatePassword() {
    error.value = null
    message.value = null

    const payload = {
        current_password: currentPassword.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
    }

    AuthService.updatePassword(payload)
        .then(() => (message.value = 'Password updated.'))
        .catch(err => (error.value = getError(err)))
}
</script>
