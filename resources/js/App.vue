<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const defaultLayout = 'default'

const { currentRoute } = useRouter()

const layout = computed(
    () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)
</script>

<style>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
