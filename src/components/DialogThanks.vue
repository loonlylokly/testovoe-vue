<script setup lang="ts">
import {
  // DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
} from 'reka-ui'
import { computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
})

const emit = defineEmits(['update:isOpen'])

// Используем computed для двусторонней связи
const modelValue = computed({
  get() {
    return props.isOpen
  },
  set(value) {
    emit('update:isOpen', value)
  },
})
</script>

<template>
  <DialogRoot v-model:open="modelValue">
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <h2 style="color: red; font-size: 10rem;">Спасибо</h2>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
