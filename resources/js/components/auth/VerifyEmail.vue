<template>
    <div>
        <form @submit.prevent="sendVerification">
            <BaseBtn type="submit" text="Verify Email" />
        </form>
        <FlashMessage :message="message" :error="error" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/js/store'

import { getError } from '@/js/utils/helpers'
import AuthService from '@/js/services/AuthService'
import { BaseBtn, FlashMessage } from '@/js/components/base'

const storeAuth = useAuthStore()

const error = ref(null)
const message = ref(null)

const { user } = storeToRefs(storeAuth)

function sendVerification() {
    error.value = null
    message.value = null

    const payload = {
        user: user.value.id
    }

    AuthService.sendVerification(payload)
        .then(() => (message.value = 'Verification email sent.'))
        .catch(err => error.value = getError(err))
}
</script>
