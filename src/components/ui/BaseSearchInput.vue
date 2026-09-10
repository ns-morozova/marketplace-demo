<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    placeholder: 'Введите запрос',
    disabled: false,
  },
)

const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="w-full">
    <input
      v-model="model"
      v-bind="$attrs"
      type="search"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full rounded-2xl border border-black/20 bg-white text-sm px-3 py-2 focus:outline-none"
    />
  </div>
</template>
