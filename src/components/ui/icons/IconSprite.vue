<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: '100%' },
  color: { type: String, default: 'currentColor' },
})
</script>

<template>
  <div class="icon-wrap">
    <svg class="icon" :width="size" :height="size" :style="{ color }">
      <use :href="`#icon-${name}`" />
    </svg>
  </div>
</template>
