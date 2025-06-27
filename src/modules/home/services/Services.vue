<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import SliderDefault from '@/components/sliders/sliderDefault/SliderDefault.vue'
import ServiceCard from './serviceCard/ServiceCard.vue'
import './Services.scss'

const cards = ref([
  {
    id: '1',
    name: 'Лизинг',
    desc: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
    price: '100 000',
    link: '/product1',
    img: { src: '/images/services1.webp', alt: '' },
  },
  {
    id: '2',
    name: 'Лизинг',
    desc: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
    price: '100 000',
    link: '/product2',
    img: { src: '/images/services2.webp', alt: '' },
  },
  {
    id: '3',
    name: 'Лизинг',
    desc: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
    price: '100 000',
    link: '/product3',
    img: { src: '/images/services2.webp', alt: '' },
  },
  {
    id: '4',
    name: 'Лизинг',
    desc: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
    price: '100 000',
    link: '/product4',
    img: { src: '/images/services1.webp', alt: '' },
  },
])
</script>

<template>
  <section class="services wrapper">
    <SliderDefault title="Предоставляемые услуги" btn-all-text="Все услуги" btn-id="serviceSlider">
      <SwiperSlide v-for="card in cards" :key="card.id">
        <RouterLink class="services__link" :to="card.link">
          <ServiceCard :name="card.name" :desc="card.desc" :price="card.price" :img="card.img" />
        </RouterLink>
      </SwiperSlide>
    </SliderDefault>
  </section>
</template>
