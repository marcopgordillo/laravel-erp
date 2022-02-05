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
            <BaseBtn type="submit" text="Create" />
        </form>
    </transition>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/js/store'
import { useRouter } from 'vue-router'
import { BaseInput, BaseBtn } from '@/js/components/base'

const storeRole = useRoleStore()
const router = useRouter()

let name = ref(null)
let permissions = ref([])

const { allPermissions } = storeToRefs(storeRole)

function submitPost() {
    const payload = {
        name: name.value,
        permissions: permissions.value,
    }

    storeRole.postRole(payload)
    router.push({ name: 'Roles' })
}

onBeforeMount(() => {
    storeRole.getPermissions()
})
</script>
