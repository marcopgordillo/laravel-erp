<template>
    <form @submit.prevent="submitEdit" class="my-4">
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
        <BaseBtn type="submit" text="Update" />
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { BaseInput, BaseBtn, FlashMessage } from '@/components/base'
import { getError } from '@/utils/helpers'

const storeUser = useUserStore()
const router = useRouter()

let name = ref(null)
let email = ref(null)
let password = ref(null)
let passwordConfirm = ref(null)

const { user } = storeToRefs(storeUser)

function submitEdit() {
    const payload = {
        id: user.value.id,
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value
    }

    storeUser.updateUser(payload)
    router.push({ name: 'Users' })
}

onMounted(() => {
    name.value = user.value.name
    email.value = user.value.email
})
</script>
