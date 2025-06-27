<script setup lang="ts">
import type { TImg } from '@/shared/types/common'
import CertificateIcon from '@/components/ui/icons/CertificateIcon.vue'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UIImgLazy from '@/components/ui/UIImgLazy.vue'
import UITypography from '@/components/ui/UITypography.vue'
import './CertificateCard.scss'

const props = withDefaults(
  defineProps<{
    name?: string
    img?: TImg
  }>(),
  {
    name: '',
    img: () => ({
      src: '',
      alt: '',
    }),
  },
)
</script>

<template>
  <div class="certificate-card">
    <UIImgLazy class="certificate-card__img" :src="props.img.src" :alt="props.img.alt" />
    <div class="certificate-card__text">
      <UITypography variant="title-m" as-child>
        <div class="certificate-card__name">{{ props.name }}</div>
      </UITypography>
      <UITypography variant="btn-m" as-child>
        <div class="certificate-card__link">
          Открыть сертификат
          <IconSprite class="icon-arrow" name="arrow" />
        </div>
      </UITypography>
    </div>
    <CertificateIcon class="certificate-card__icon" name="arrow" />
  </div>
</template>
