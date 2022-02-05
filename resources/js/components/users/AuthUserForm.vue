<template>
  <form @submit.prevent="updateUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      placeholder="Your Name"
      class="mb-2"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="Your email"
      class="mb-4"
    />
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/js/store'
import { getError } from '@/js/utils/helpers'
import AuthService from '@/js/services/AuthService'
import { BaseBtn, BaseInput, FlashMessage } from '@/js/components/base'

const storeAuth = useAuthStore()

const { user } = storeToRefs(storeAuth)
const name = ref(null)
const email = ref(null)
const error = ref(null)
const message = ref(null)

onMounted(() => {
    name.value = user.value.name
    email.value = user.value.email
})

function updateUser() {
    error.value = null
    message.value = null

    const payload = {
        name: name.value,
        email: email.value,
    }

    AuthService.updateUser(payload)
        .then(() => storeAuth.getAuthUser())
        .then(() => (message.value = 'User updated.'))
        .catch(err => (error.value = getError(err)))
}
</script>
