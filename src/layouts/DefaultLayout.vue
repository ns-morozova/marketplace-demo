<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:p-4">К содержимому</a>
    <AppHeader />
    <main id="main-content" tabindex="-1" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
