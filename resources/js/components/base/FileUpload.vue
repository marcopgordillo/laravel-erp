<template>
  <form @submit.prevent="uploadFile">
    <div class="mb-4">
      <label for="file" class="sr-only">
        {{ label }}
      </label>
      <input type="file" :accept="fileTypes" @change="fileChange" id="file" />
    </div>
    <BaseBtn text="Upload" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>

<script setup>
import { ref } from 'vue'

import { getError } from "@/js/utils/helpers"
import FileService from "@/js/services/FileService"
import { BaseBtn, FlashMessage } from "@/js/components/base"

const props = defineProps({
    fileTypes: {
      type: Array,
      default: null,
    },
    endpoint: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
})

const emit = defineEmits(['file-uploaded'])

const file = ref(null)
const message = ref(null)
const error = ref(null)

function clearMessage() {
    error.value = null
    message.value = null
}

function fileChange(event) {
    clearMessage()
    file.value = event.target.files[0]
}

function uploadFile() {
    const payload = {}
    const formData = new FormData()
    formData.append('file', file.value)
    payload.file = formData
    payload.endpoint = props.endpoint
    clearMessage()
    FileService.uploadFile(payload)
        .then(() => {
            message.value = 'File uploaded.'
            emit('file-uploaded')
        })
        .catch(err => (error.value = getError(err)))
}
</script>
