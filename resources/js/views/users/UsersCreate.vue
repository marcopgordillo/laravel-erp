<template>
    <transition name="fade" mode="out-in">
        <form
            @submit.prevent="submitPost"
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
            <div class="mb-4">
                <label for="file" class="sr-only">
                    Avatar
                </label>
                <input type="file" accept="image/*" @change="fileChange" id="file" />
            </div>
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
            <BaseBtn type="submit" text="Create" />
        </form>
    </transition>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store'
import { useRouter } from 'vue-router'
import { BaseInput, BaseBtn } from '@/components/base'

const storeUser = useUserStore()
const router = useRouter()

let name = ref(null)
let email = ref(null)
let roles = ref([])
let avatar = ref({})
let password = ref(null)
let passwordConfirm = ref(null)

const { allRoles } = storeToRefs(storeUser)

function fileChange(event) {
    if (!event.target.files.length) return;

    avatar.value = {
        name: event.target.files[0].name,
        data: event.target.files[0],
    }
}

function submitPost() {
    const formData = new FormData()

    if (avatar.value.data) {
        formData.append('avatar', avatar.value.data, avatar.value.name)
    }
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('roles', roles.value)
    formData.append('password', password.value)
    formData.append('password_confirmation', passwordConfirm.value)

    const payload = {
        data: formData,
    }

    storeUser.postUser(payload)
    router.push({ name: 'Users' })
}

onBeforeMount(() => {
    storeUser.getRoles()
})
</script>
