<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'
import { RouterLink } from 'vue-router'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseSearchInput from '@/components/ui/BaseSearchInput.vue'
import AuthModal from '@/components/auth/AuthModal.vue'
import logoMain from '@/assets/logo/logo-main.svg'
import profileIcon from '@/assets/icons/profile.svg'
import mosaicIcon from '@/assets/icons/mosaic.svg'
import closeIcon from '@/assets/icons/close-white.svg'

const isCatalogOpen = ref(false)
const isAuthOpen = ref(false)
const catalogId = useId()
const catalogItems = [
  { id: 'all', name: 'Все', icon: '📦' },
  { id: 'games', name: 'Игры', icon: '🎮' },
  { id: 'accounts', name: 'Аккаунты', icon: '👤' },
  { id: 'software', name: 'Софт', icon: '💻' },
] as const
const selectedCatalogId = ref<(typeof catalogItems)[number]['id']>('all')

function selectCatalogItem(id: (typeof catalogItems)[number]['id']) {
  selectedCatalogId.value = id
  closeCatalog()
}

function closeCatalog() {
  isCatalogOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeCatalog()
}

onMounted(() => {
  document.addEventListener('click', closeCatalog)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeCatalog)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="fixed left-1/2 -translate-x-1/2 w-full max-w-6xl bg-white/80 backdrop-blur-[2px] border-b border-black/8 z-20"
  >
    <BaseContainer class="flex flex-col gap-3.5 py-3.5">
      <nav class="flex items-start justify-between">
        <RouterLink :to="{ name: 'home' }" class="text-6xl font-semibold text-accent">
          <img :src="logoMain" alt="Главная" class="" />
        </RouterLink>
        <button type="button" aria-haspopup="dialog" @click="isAuthOpen = true">
          <img :src="profileIcon" alt="Мой профиль" class="size-7" />
        </button>
      </nav>

      <div class="flex gap-1.75 justify-between">
        <div class="relative shrink-0">
          <button
            type="button"
            class="h-full w-max text-white rounded-2xl font-medium text-sm flex items-center gap-2 px-3 py-2"
            :class="isCatalogOpen ? 'bg-[#0F7FD6]' : 'bg-accent'"
            :aria-expanded="isCatalogOpen"
            :aria-controls="catalogId"
            @click.stop="isCatalogOpen = !isCatalogOpen"
          >
            <img
              :src="isCatalogOpen ? closeIcon : mosaicIcon"
              alt=""
              class="size-4"
              aria-hidden="true"
            />
            <span>Каталог</span>
          </button>
          <div
            v-show="isCatalogOpen"
            :id="catalogId"
            class="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-black/8 bg-white p-2 shadow-lg z-30"
          >
            <button
              v-for="item in catalogItems"
              :key="item.id"
              type="button"
              class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm"
              :class="selectedCatalogId === item.id ? 'bg-gray-200/90' : 'hover:bg-gray-100'"
              :aria-pressed="selectedCatalogId === item.id"
              @click="selectCatalogItem(item.id)"
            >
              <span aria-hidden="true">{{ item.icon }}</span>
              <span>{{ item.name }}</span>
            </button>
          </div>
        </div>
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
  <AuthModal v-if="isAuthOpen" @close="isAuthOpen = false" />
</template>
