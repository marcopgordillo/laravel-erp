<template>
  <div class="p-5 xl:px-0">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <AuthUser class="p-5 bg-white border rounded shadow" />
      <AuthUserForm class="p-5 bg-white border rounded shadow" />
      <UpdatePassword class="p-5 bg-white border rounded shadow" />
      <FileUpload
        label="Upload Avatar"
        :fileTypes="['image/*']"
        endpoint="/users/auth/avatar"
        @fileUploaded="updateUser"
        class="p-5 bg-white border rounded shadow"
      />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/js/store'

import { AuthUser, AuthUserForm, UpdatePassword } from '@/js/components/users'
import { FileUpload } from '@/js/components/base'

const storeAuth = useAuthStore()

function updateUser() {
    storeAuth.getAuthUser()
}
</script>
