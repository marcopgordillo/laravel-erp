<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Forgot Password</h2>
    <form
      @submit.prevent="forgotPassword"
      class="p-5 bg-white border rounded shadow"
    >
      <BaseInput
        type="email"
        label="Email"
        name="email"
        v-model="email"
        autocomplete="email"
        placeholder="Your email password"
        class="mb-4"
      />
      <BaseBtn type="submit" text="Send" />
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { getError } from "@/js/utils/helpers"
import AuthService from "@/js/services/AuthService";
import { BaseBtn, BaseInput, FlashMessage } from "@/js/components/base"

const email = ref(null)
const error = ref(null)
const message = ref(null)

function forgotPassword() {
    error.value = null
    message.value = null

    const payload = {
        email: email.value,
    }

    AuthService.forgotPassword(payload)
        .then(() => (message.value = 'Reset password email sent.'))
        .catch(err => (error.value = getError(err)))
}
</script>
