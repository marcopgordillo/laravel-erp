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
import { computed, ref, onMounted } from 'vue'
import { useStore } from "vuex"
import { getError } from "@/utils/helpers"
import AuthService from "@/services/AuthService";
import { BaseBtn, BaseInput, FlashMessage } from "@/components/base";

const store = useStore()

const name = ref(null)
const email = ref(null)
const error = ref(null)
const message = ref(null)

const authUser = computed(() => store.getters['auth/AuthUser'])

function updateUser() {
    error.value = null
    message.value = null

    const payload = {
        name: name.value,
        email: email.value,
    }

    AuthService.updateUser(payload)
        .then(() => store.dispatch('auth/getAuthUser'))
        .then(() => (message.value = 'User updated.'))
        .catch(err => (error.value = getError(err)))
}

onMounted(() => {
    name.value = authUser.value.name
    email.value = authUser.value.email
})
</script>
