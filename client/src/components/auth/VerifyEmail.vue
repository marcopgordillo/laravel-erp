<template>
        <form @submit.prevent="sendVerification">
            <BaseBtn type="submit" text="Verify Email" />
        </form>
        <FlashMessage :message="message" :error="error" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { getError } from '@/utils/helpers'
import AuthService from '@/services/AuthService'
import { BaseBtn, FlashMessage } from '@/components/base'

const store = useStore()

const error = ref(null)
const message = ref(null)

const authUser = computed(() => store.getters['auth/authUser'])

function sendVerification(payload) {
    error.value = null
    message.value = null

    const payload = {
        user: authUser.value.id
    }

    AuthService.sendVerification(payload)
        .then(() => (message.value = 'Verification email sent.'))
        .catch(err => error.value = getError(err))
}
</script>
