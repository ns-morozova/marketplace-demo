<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

withDefaults(
  defineProps<{
    type?: InputTypeHTMLAttribute
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    type: 'text',
    placeholder: '',
    disabled: false,
  },
)

const model = defineModel<string>({ required: true })
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    class="w-full rounded-2xl border border-black/20 bg-white text-sm px-3 py-2 focus:outline-none"
  />
</template>
