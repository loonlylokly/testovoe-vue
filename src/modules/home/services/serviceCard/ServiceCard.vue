<script setup lang="ts">
import type { TImg } from '@/shared/types/common'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UIImgLazy from '@/components/ui/UIImgLazy.vue'
import UITypography from '@/components/ui/UITypography.vue'
import './ServiceCard.scss'

const props = withDefaults(
  defineProps<{
    name?: string
    desc?: string
    price?: string
    img?: TImg
  }>(),
  {
    name: '',
    desc: '',
    price: '',
    img: () => ({
      src: '',
      alt: '',
    }),
  },
)
</script>

<template>
  <div class="service-card">
    <div class="service-card__header">
      <UIImgLazy class="service-card__header_preview" :src="props.img.src" :alt="props.img.alt" />
      <IconSprite class="service-card__header_icon" name="arrow" />
    </div>
    <div class="service-card__content">
      <UITypography variant="title-l" as-child>
        <div class="service-card__content_name">{{ props.name }}</div>
      </UITypography>
      <UITypography variant="body-l-regular" :line-clamp="3" as-child>
        <p class="service-card__content_desc">{{ props.desc }}</p>
      </UITypography>
      <UITypography variant="title-m" as-child>
        <div class="service-card__content_price">от {{ props.price }} ₽</div>
      </UITypography>
    </div>
  </div>
</template>
