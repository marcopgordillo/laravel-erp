<template>
  <div class="p-5 xl:px-0">
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !role"
        key="loading"
      />
      <div v-else>

        <div class="mt-5 flex items-center justify-between py-2 border-b">
            <div class="inline-flex items-center space-x-2">
                <span class="text-gray-600 font-bold">Name:</span>
                <span class="text-gray-600">{{ role.name }}</span>
            </div>
            <div class="inline-flex items-center space-x-2">
                <router-link
                    v-can:roles-update
                    :to="{ name:'RoleEdit' }"
                    class="px-4 py-2 bg-yellow-400 hover:bg-yellow-500"
                >
                    Edit
                </router-link>
                <button
                    v-can:roles-delete
                    @click="deleteRole"
                    class="px-4 py-2 bg-red-400 hover:bg-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
        <div class="mt-2 inline-flex items-center space-x-2">
            <span class="text-gray-600 font-bold">Permissions:</span>
            <span
                v-for="permission in role.permissions"
                :key="permission"
                class="text-gray-600"
            >
                {{ permission }}
            </span>
        </div>
      </div>
    </transition>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRoleStore } from "@/store"
import { useRoute } from 'vue-router'
import { FlashMessage } from "@/components/base";

const storeRole = useRoleStore()
const route = useRoute()

storeRole.getRole(route.params.id)

const { role, loading, error } = storeToRefs(storeRole)

function deleteRole() {
    if (confirm('Are you sure?')) {
        storeRole.deleteRole()
    }
}
</script>
