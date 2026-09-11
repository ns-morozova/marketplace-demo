<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import closeIcon from '@/assets/icons/close-gray.svg'

const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)
const email = ref('')
const titleId = useId()
const emailId = useId()
let previouslyFocused: HTMLElement | null = null

onMounted(() => {
  previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
  dialog.value?.showModal()
})

onBeforeUnmount(() => {
  dialog.value?.close()
  previouslyFocused?.focus()
})
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      :aria-labelledby="titleId"
      class="m-0 h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-transparent p-4 text-main backdrop:bg-black/50 open:grid open:place-items-center"
      @click.self="emit('close')"
      @cancel.prevent="emit('close')"
    >
      <form
        class="relative w-full max-w-md rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl"
        @submit.prevent
      >
        <button
          type="button"
          aria-label="Закрыть окно авторизации"
          class="absolute right-1.5 top-1.5 flex size-10 items-center justify-center rounded-lg hover:bg-gray-100"
          @click="emit('close')"
        >
          <img :src="closeIcon" alt="" class="size-5" />
        </button>
        <h2 :id="titleId" class="mb-2 text-2xl font-bold">Вход</h2>
        <span class="block text-gray-400 text-sm mb-8">Если вы еще не зарегистрированы, аккаунт появится автоматически</span>
        <label :for="emailId" class="sr-only">Электронная почта</label>
        <BaseInput
          :id="emailId"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Электронная почта"
          autofocus
        />
        <BaseButton :disabled="!email.trim()" class="mt-4 w-full">Получить код</BaseButton>
      </form>
    </dialog>
  </Teleport>
</template>
