<script setup lang="ts">
import type { NavigationOptions } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SliderControls from '@/components/sliders/sliderControls/SliderControls.vue'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UITypography from '@/components/ui/UITypography.vue'
import { remToPx } from '@/shared/helpers/remToPx'
import 'swiper/css'
import 'swiper/css/pagination'
import './SliderDefault.scss'

const props = withDefaults(
  defineProps<{
    title?: string
    btnAllText?: string
    btnAllLink?: string
    btnId?: string
  }>(),
  {
    title: 'Карусель',
    btnAllText: 'Весь список',
    btnAllLink: '/',
    btnId: 'slider',
  },
)

const modules = ref([Navigation])

const navigation = ref<NavigationOptions>({
  enabled: true,
  nextEl: `#${props.btnId}Next`,
  prevEl: `#${props.btnId}Prev`,
})

const breakpoints = computed(() => ({
  375: {
    sliderPerView: 1,
  },
  768: {
    sliderPerView: 2,
  },
  1920: {
    sliderPerView: 3,
  },
}))

// Значение spaceBetween по умолчанию
const spaceBetweenInPx = ref(remToPx(2))
const slidesPerView = ref(3)

// Опционально: обновляем при изменении размера окна
onMounted(() => {
  const updateSpaceBetween = () => {
    const width = window.innerWidth
    if (width <= 375) {
      slidesPerView.value = 1
    }
    else if (width <= 768) {
      slidesPerView.value = 2
    }
    else {
      slidesPerView.value = 3
    }
  }

  window.addEventListener('resize', updateSpaceBetween)
  updateSpaceBetween()

  // Очистка
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSpaceBetween)
  })
})
</script>

<template>
  <div class="slider-default__title">
    <UITypography variant="h2" as="h2">{{ props.title }}</UITypography>
    <div class="slider-default__controls">
      <SliderControls variant="dark" :btn-prev-id="`${props.btnId}Prev`" :btn-next-id="`${props.btnId}Next`" />
      <UIButton variant="secondary-black" as="a" :href="props.btnAllLink">
        {{ props.btnAllText }}
        <template #rightIcon>
          <IconSprite class="icon-arrow" name="arrow" />
        </template>
      </UIButton>
    </div>
  </div>
  <Swiper :modules="modules" :navigation="navigation" :breakpoint="breakpoints" :slides-per-view="slidesPerView"
    :space-between="spaceBetweenInPx" :css-mode="true" :speed="1000" class="slider-default">
    <slot />
  </Swiper>
  <UIButton class="slider-default__all mob" variant="secondary-black" as="a" :href="props.btnAllLink">
    {{ props.btnAllText }}
    <template #rightIcon>
      <IconSprite class="icon-arrow" name="arrow" />
    </template>
  </UIButton>
</template>
