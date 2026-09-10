<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { RouterLink } from 'vue-router';

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200">
    <BaseContainer class="py-6 text-sm">
      <nav aria-label="Основная навигация" class="flex flex-wrap gap-6">
        <RouterLink :to="{ name: 'home' }" exact-active-class="underline underline-offset-4"
          >Главная</RouterLink
        >
        <RouterLink :to="{ name: 'about' }" exact-active-class="underline underline-offset-4"
          >О проекте</RouterLink
        >
      </nav>
    </BaseContainer>
  </footer>
</template>
