<template>
    <div>
        <transition-group name="fade">
            <p
                v-if="message"
                key="message"
                class="mt-2 text-sm text-green-500"
            >
                {{ message }}
            </p>
            <p
                v-if="error && getType(error) === 'string'"
                key="error"
                class="mt-2 text-sm text-red-500"
            >
                {{ error }}
            </p>
            <ul
                v-if="getType(error) === 'object'"
                class="mt-2 text-sm text-red-500"
                key="error-list"
            >
                <li
                    v-for="key in errorKeys"
                    :key="key"
                >
                    <span class="font-bold capitalize">{{ titleCase(key) }}</span>
                    <ul class="ml-2">
                        <li v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
                            {{ item }}
                        </li>
                    </ul>
                </li>
            </ul>
        </transition-group>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, String],
      default: null,
    },
})

const errorKeys = computed(() => {
    if (!props.error || getType(props.error) === 'string') {
        return null
    }
    return Object.keys(props.error)
})

const titleCase = value => value.replace('_', ' ')

function getErrors(key) {
    return props.error[key]
}

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
</script>
