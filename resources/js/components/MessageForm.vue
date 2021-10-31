<template>
    <form @submit.prevent="postMessage">
        <BaseInput
            type="text"
            label="Message"
            name="message"
            v-model="body"
            class="mb-4"
        />
        <div class="flex justify-end mb-2">
            <BaseBtn type="submit" text="Message" />
        </div>
        <FlashMessage :error="error" v-if="error" />
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useMessageStore } from '@/store'

import { getError } from '@/utils/helpers'
import { BaseBtn, BaseInput, FlashMessage } from './base'

const storeMessage = useMessageStore()

const body = ref(null)
const error = ref(null)

async function postMessage() {
    try {
        const payload = {
            body: body.value,
        }
        error.value = null

        await storeMessage.postMessage(payload)
        body.value = null
    } catch (err) {
        error.value = getError(err)
    }
}
</script>
