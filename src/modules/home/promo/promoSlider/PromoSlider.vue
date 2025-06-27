<script setup lang="ts">
import type { NavigationOptions, PaginationOptions } from 'swiper/types'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import SliderControls from '@/components/sliders/sliderControls/SliderControls.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import './PromoSlider.scss'

const modules = ref([Pagination, Navigation, Autoplay])
const pagination = ref<PaginationOptions>({
  clickable: true,
  renderBullet: (index: number, className: string): string => {
    return `<button class="${className}"></button>`
  },
})

const navigation = ref<NavigationOptions>({
  enabled: true,
  nextEl: '.slider-controls__btn.next',
  prevEl: '.slider-controls__btn.prev',
})
</script>

<template>
  <Swiper :pagination="pagination" :modules="modules" :navigation="navigation" :slides-per-view="1" :speed="1000"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }" class="promo__slider">
    <SwiperSlide>
      <img src="/images/promo.webp" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img decoding="async" loading="lazy" src="/images/promo.webp" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img decoding="async" loading="lazy" src="/images/promo.webp" alt="">
    </SwiperSlide>
    <div class="promo__slider_controls">
      <SliderControls variant="light" />
    </div>
    <div class="promo__slider_filter" />
  </Swiper>
</template>
