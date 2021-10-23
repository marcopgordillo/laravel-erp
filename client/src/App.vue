<template>
    <Header />
    <main class="container mx-auto">
        <router-view />
    </main>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
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
