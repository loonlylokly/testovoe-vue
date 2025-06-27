<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import { SwiperSlide } from 'swiper/vue'
import { onMounted, onUnmounted, ref } from 'vue'
import SliderDefault from '@/components/sliders/sliderDefault/SliderDefault.vue'
import CertificateCard from './certificateCard/CertificateCard.vue'
import './Certificates.scss'

const galleryName = 'my-gallery'

onMounted(() => {
  Fancybox.bind('[data-fancybox]')
})

onUnmounted(() => {
  Fancybox.destroy()
})

const certificates = ref([
  {
    id: '1',
    name: 'Каталог оборудования ECORESULT и ECOWAY',
    link: '/certificate1',
    img: { src: '/images/certificate.webp', alt: '' },
  },
  {
    id: '2',
    name: 'Каталог оборудования ECORESULT и ECOWAY',
    link: '/certificate1',
    img: { src: '/images/certificate.webp', alt: '' },
  },
  {
    id: '3',
    name: 'Каталог оборудования ECORESULT и ECOWAY',
    link: '/certificate1',
    img: { src: '/images/certificate.webp', alt: '' },
  },
  {
    id: '4',
    name: 'Каталог оборудования ECORESULT и ECOWAY',
    link: '/certificate1',
    img: { src: '/images/certificate.webp', alt: '' },
  },
])
</script>

<template>
  <section class="certificates wrapper">
    <SliderDefault title="Сертификаты" btn-all-text="Все сертификаты" btn-id="certificatesSlider">
      <SwiperSlide v-for="certificate in certificates" :key="certificate.id">
        <a class="certificates__link" :href="certificate.img.src" :data-fancybox="galleryName"
          :data-caption="certificate.img.alt">
          <CertificateCard :name="certificate.name" :img="certificate.img" />
        </a>
      </SwiperSlide>
    </SliderDefault>
  </section>
</template>
