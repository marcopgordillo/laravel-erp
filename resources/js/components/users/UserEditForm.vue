<template>
    <form
        v-if="!loading && user"
        @submit.prevent="submitEdit"
        class="my-4"
    >
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
        <div
            v-for="role in allRoles"
            :key="role"
        >
            <input
                v-model="roles"
                type="checkbox"
                :value="role"
                :id="role"
            />
            <label :for="role">{{ role }}</label>
        </div>
        <BaseBtn type="submit" text="Update" />
    </form>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { BaseInput, BaseBtn, FlashMessage } from '@/components/base'

const storeUser = useUserStore()
const router = useRouter()
const route = useRoute()

let name = ref(null)
let email = ref(null)
let roles = ref(null)
let password = ref(null)
let passwordConfirm = ref(null)
let allRoles = ref(null)

const { user, loading } = storeToRefs(storeUser)

storeUser.$subscribe((mutation, state) => {
    name.value = state.user.name
    email.value = state.user.email
    roles.value = state.user.roles
    allRoles.value = state.allRoles
})

function submitEdit() {
    const payload = {
        id: +route.params.id,
        name: name.value,
        email: email.value,
        roles: roles.value,
        password: password.value,
        password_confirmation: passwordConfirm.value
    }

    storeUser.updateUser(payload)
    router.push({ name: 'UsersId', params: { id: route.params.id } })
}

onBeforeMount(() => {
    storeUser.getUser(route.params.id)
    storeUser.getRoles()
})
</script>
