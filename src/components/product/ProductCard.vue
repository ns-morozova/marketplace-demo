<script setup lang="ts">
import { computed } from 'vue'
import heartFilled from '@/assets/icons/heart-filled.svg'
import heartOutline from '@/assets/icons/heart-outline.svg'
import type { Product } from '@/types/product'

const props =
  defineProps<Pick<Product, 'image' | 'price' | 'name' | 'rating' | 'reviewCount' | 'isSaved'>>()
const emit = defineEmits<{ toggleSaved: [] }>()

const formattedPrice = computed(() =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(props.price),
)
const formattedRating = computed(() => Math.min(5, Math.max(0, props.rating)).toFixed(1))
</script>

<template>
    <article class="h-full flex flex-col gap-4">
        <div class="relative overflow-hidden rounded-xl bg-gray-100">
            <div class="w-full h-50">
                <img :src="image" :alt="name" loading="lazy" class="w-full h-full object-cover" />
            </div>
            
            <button
                type="button"
                class="absolute right-4 top-4 flex size-7 items-center justify-center"
                :aria-label="`Избранное: ${name}`"
                :aria-pressed="isSaved"
                @click="emit('toggleSaved')"
            >
                <img :src="isSaved ? heartFilled : heartOutline" alt="" class="size-6" />
            </button>
        </div>

        <div class="space-y-2">
            <p class="font-medium">{{ formattedPrice }}</p>
            <h3 class="text-sm font-medium uppercase">{{ name }}</h3>
            <div class="mt-auto flex flex-wrap items-center gap-2 text-sm">
                <span :aria-label="`Рейтинг ${formattedRating} из 5`">
                    <span aria-hidden="true" class="text-amber-500">★</span>
                    {{ formattedRating }}
                </span>
                <span class="text-gray-400">Отзывы: {{ reviewCount }}</span>
            </div>
        </div>
    </article>
</template>
