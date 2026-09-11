<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import ProductList from '@/components/product/ProductList.vue'
import { products as initialProducts } from '@/data/products'
import type { Product } from '@/types/product'

const activeFilter = ref<'all' | 'saved'>('all')
const products = ref<Product[]>(initialProducts.map((product) => ({ ...product })))
const visibleProducts = computed(() =>
  activeFilter.value === 'saved'
    ? products.value.filter((product) => product.isSaved)
    : products.value,
)

function toggleSaved(id: Product['id']) {
  const product = products.value.find((product) => product.id === id)
  if (product) product.isSaved = !product.isSaved
}
</script>

<template>
  <section aria-labelledby="home-title" class="py-6">
    <BaseContainer>
      <h1 id="home-title" class="sr-only">Каталог товаров</h1>
      <div class="flex items-center gap-3">
        <button
          type="button"
          class="text-2xl"
          :class="{ 'font-bold': activeFilter === 'all' }"
          :aria-pressed="activeFilter === 'all'"
          @click="activeFilter = 'all'"
        >
          Товары
        </button>
        <button
          type="button"
          class="text-2xl"
          :class="{ 'font-bold': activeFilter === 'saved' }"
          :aria-pressed="activeFilter === 'saved'"
          @click="activeFilter = 'saved'"
        >
          Избранное
        </button>
      </div>
      <div class="mt-9.5">
        <ProductList :products="visibleProducts" @toggle-saved="toggleSaved" />
      </div>
    </BaseContainer>
  </section>
</template>
