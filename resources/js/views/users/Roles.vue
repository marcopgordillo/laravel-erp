<template>
  <div class="p-5 xl:px-0">
    <router-link
        :to="{ name: 'RolesCreate' }"
        v-can:roles-create
        class="base-link"
    >
        Create new Role
    </router-link>
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !roles.length"
        key="loading"
      />
      <ul v-else class="mt-5">
        <li
          v-for="role in roles"
          :key="role.id"
          class="flex items-center justify-between py-2 border-b"
        >
          <div class="inline-flex items-center space-x-2">
            <router-link
                :to="{ name: 'RolesId', params: { id: role.id } }"
                class="text-gray-600 base-link"
            >
                {{ role.name }}
            </router-link>
          </div>
        </li>
      </ul>
    </transition>
    <transition-group name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
      <FlashMessage :message="message" v-if="message" key="message" />
    </transition-group>
    <transition name="fade">
      <BasePagination
        key="pagination"
        path="Roles"
        :meta="meta"
        :links="links"
        :action="{store: 'role', action: 'paginateRoles'}"
        v-if="meta && meta.last_page > 1"
      />
    </transition>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/js/store'
import { onBeforeRouteLeave } from 'vue-router'
import { BasePagination, FlashMessage } from "@/js/components/base";

const storeRole = useRoleStore()

const { loading, error, roles, meta, links, message } = storeToRefs(storeRole)

storeRole.getRoles(1)

onBeforeRouteLeave(async (to, from, next) => {
    const currentPage = parseInt(to.query.page) || 1;
    await storeRole.getRoles(currentPage)
    to.params.page = currentPage
    next()
})
</script>
