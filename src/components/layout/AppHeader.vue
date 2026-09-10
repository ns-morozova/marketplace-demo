<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
</script>

<template>
  <header class="border-b border-black/8">
    <BaseContainer class="flex flex-col gap-3.5 py-3.5">
      <RouterLink :to="{ name: 'home' }" class="text-6xl font-semibold text-accent">
        D
      </RouterLink>

      <div class="flex gap-1.75 justify-between">
        <button class="w-max bg-accent text-white rounded-2xl font-medium text-sm px-3 py-2">
          Каталог
        </button>
        <div class="w-full">
          <BaseSearchInput
            model-value=""
            aria-label="Поиск по каталогу"
            placeholder="Поиск по каталогу"
            name="query"
          />
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
