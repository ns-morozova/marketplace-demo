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
    class="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 font-medium text-main transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <slot />
  </button>
</template>
