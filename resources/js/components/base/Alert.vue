<template>
    <div
        v-show="!dismissed"
        class="flex rounded-lg p-4 mb-4 text-sm"
        :class="typeClass"
        role="alert"
    >
        <component :is="types[type].icon" class="w-5 h-5 inline flex-shrink-0 mr-3"></component>
        <div>
            <slot />
        </div>
        <button
            v-if="dismissable"
            @click="dismissAlert"
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8"
            :class="types[type].dismissClass"
            aria-label="Close"
        >
            <span class="sr-only">Close</span>
            <XIcon class="w-5 h-5" />
        </button>
    </div>
</template>

<script setup>
import { shallowRef, reactive, ref, computed } from 'vue'
import {
    ExclamationCircleIcon,
    ExclamationIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    QuestionMarkCircleIcon,
    XIcon,
    } from '@heroicons/vue/solid'

const props = defineProps({
    type: {
        type: String,
        default: 'info',
    },
    dismissable: {
        type: Boolean,
        default: false,
    },
    border: {
        type: Boolean,
        default: false,
    },
})

let dismissed = ref(false)

const types = reactive({
    info: {
        icon: shallowRef(InformationCircleIcon),
        typeClass: 'bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800',
        dismissClass: 'bg-blue-100 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300',
        borderClass: 'border-t-4 border-blue-500 rounded-none',
    },
    danger: {
        icon: shallowRef(ExclamationCircleIcon),
        typeClass: 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800',
        dismissClass: 'bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
        borderClass: 'border-t-4 border-red-500 rounded-none',
    },
    warning: {
        icon: shallowRef(ExclamationIcon),
        typeClass: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800',
        dismissClass: 'bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
        borderClass: 'border-t-4 border-yellow-500 rounded-none',
    },
    success: {
        icon: shallowRef(CheckCircleIcon),
        typeClass: 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800',
        dismissClass: 'bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
        borderClass: 'border-t-4 border-green-500 rounded-none',
    },
    question: {
        icon: shallowRef(QuestionMarkCircleIcon),
        typeClass: 'bg-orange-100 text-orange-700 dark:bg-orange-200 dark:text-orange-800',
        dismissClass: 'bg-orange-100 text-orange-500 focus:ring-orange-400 hover:bg-orange-200 dark:bg-orange-200 dark:text-orange-600 dark:hover:bg-orange-300',
        borderClass: 'border-t-4 border-orange-500 rounded-none',
    },
})

const typeClass = computed(() => {
    let typeClass = types[props.type].typeClass
    if (props.border) {
        typeClass += ` ${types[props.type].borderClass}`
    }
    return typeClass
})

function dismissAlert() {
    dismissed.value = true
}
</script>
