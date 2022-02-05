<template>
    <transition name="fade" mode="out-in">
        <form
            v-if="!loading && role"
            @submit.prevent="submitEdit"
            class="my-4"
        >
            <BaseInput
                type="text"
                label="Name"
                name="name"
                v-model="name"
                placeholder="Role name"
                class="mb-2"
            />
            <div
                v-for="permission in allPermissions"
                :key="permission"
            >
                <input
                    v-model="permissions"
                    type="checkbox"
                    :value="permission"
                    :id="permission"
                />
                <label :for="permission">{{ permission }}</label>
            </div>
            <BaseBtn type="submit" text="Update" />
        </form>
    </transition>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/js/store'
import { useRouter, useRoute } from 'vue-router'
import { BaseInput, BaseBtn } from '@/js/components/base'

const storeRole = useRoleStore()
const router = useRouter()
const route = useRoute()

let name = ref(null)
let permissions = ref([])
let allPermissions = ref([])

storeRole.$subscribe((mutation, state) => {
    name.value = state.role.name
    permissions.value = state.role.permissions
    allPermissions.value = state.allPermissions
})

const { role, loading } = storeToRefs(storeRole)

function submitEdit() {
    const payload = {
        id: +route.params.id,
        name: name.value,
        permissions: permissions.value,
    }

    storeRole.updateRole(payload)
    router.push({ name: 'RolesId', params: { id: route.params.id } })
}

onBeforeMount(() => {
    storeRole.getRole(route.params.id)
    storeRole.getPermissions()
})
</script>
