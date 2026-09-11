<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    disabled: false,
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="bg-accent text-white rounded-2xl font-medium text-sm flex justify-center gap-2 px-3 py-2.5 disabled:opacity-50"
  >
    <slot />
  </button>
</template>
