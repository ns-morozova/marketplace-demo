<script setup lang="ts">
import ProductCard from '@/components/product/ProductCard.vue'
import type { Product } from '@/types/product'

defineProps<{ products: readonly Product[] }>()
const emit = defineEmits<{ toggleSaved: [id: Product['id']] }>()
</script>

<template>
  <ul
    v-if="products.length"
    class="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-3 lg:grid-cols-4"
  >
    <li v-for="product in products" :key="product.id">
      <ProductCard
        :image="product.image"
        :price="product.price"
        :name="product.name"
        :rating="product.rating"
        :review-count="product.reviewCount"
        :is-saved="product.isSaved"
        @toggle-saved="emit('toggleSaved', product.id)"
      />
    </li>
  </ul>
  <p v-else class="py-8 text-gray-500">В избранном пока нет товаров.</p>
</template>
