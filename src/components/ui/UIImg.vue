<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    class?: string
    src?: string
    alt?: string
  }>(),
  {
    class: '',
    src: '',
    alt: '',
  },
)

const attrs = useAttrs()
</script>

<template>
  <div :class="`img-wrap ${props.class}`">
    <img decoding="async" loading="lazy" :src="props.src" :alt="props.alt" v-bind="attrs">
  </div>
</template>

<style lang="scss">
.img-wrap {
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
