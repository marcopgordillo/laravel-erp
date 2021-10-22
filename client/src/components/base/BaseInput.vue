<template>
    <div>
        <label
            :for="name"
            class="text-sm text-gray-500"
            :class="{'sr-only': !showLabel}"
        >
            {{ label }}
        </label>
        <input
            :id="name"
            v-model="value"
            :type="type"
            :required="required"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
</template>

<script>
export default {
    inheritAttrs: true,
}
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
    name: {
        type: String,
        required: true,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})
</script>
