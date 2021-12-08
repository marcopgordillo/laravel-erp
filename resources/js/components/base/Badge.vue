<template>
    <component
        :is="element"
        :[href]="link"
        class="mr-2 px-2.5 py-0.5 rounded inline-flex items-center"
        :class="typeClass"
    >
        <slot />
    </component>
</template>

<script setup>
import { reactive, computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'blue',
    },
    size: {
        type: String,
        default: 'xs',
    },
    link: {
        type: String,
        default: '',
    },
})

const typesColor = reactive({
    blue: {
        typeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
    },
    dark: {
        typeClass: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    },
    red: {
        typeClass: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
    },
    green: {
        typeClass: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
    },
    yellow: {
        typeClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
    },
    indigo: {
        typeClass: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900',
    },
    purple: {
        typeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900',
    },
    pink: {
        typeClass: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900',
    },
})

const typesSizes = reactive({
    xs: {
        typeClass: 'text-xs font-semibold',
    },
    sm: {
        typeClass: 'text-sm font-medium',
    },
})

const typeClass = computed(() => `${typesSizes[props.size].typeClass} ${typesColor[props.color].typeClass}`)
const element = computed(() => props.link ? 'a' : 'span')
const href = computed(() => props.link ? 'href' : '')

</script>
