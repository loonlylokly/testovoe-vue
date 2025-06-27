<script setup lang='ts'>
import { ref } from 'vue'
import HeartIcon from '@/components/ui/icons/HeartIcon.vue'
import LogoBrand from '@/components/ui/icons/LogoBrand.vue'
import PhoneIcon from '@/components/ui/icons/PhoneIcon.vue'
import StatsIcon from '@/components/ui/icons/StatsIcon.vue'
import UITypography from '@/components/ui/UITypography.vue'
import { ROUTES } from '@/shared/constants/routes.ts'
import { useHeaderScroll } from '@/shared/hooks/useHeaderScroll'
import MobileHeader from './mobileHeader/MobileHeader.vue'
import NavHeader from './navHeader/NavHeader.vue'

import './AppHeader.scss'

const mobileHeaderRef = ref<typeof MobileHeader | null>(null)

const getMobileHeader = () => mobileHeaderRef.value?.mobileHeaderRef ?? null
const { headerRef } = useHeaderScroll({
  getMobileHeader,
})
</script>

<template>
  <header ref="headerRef" class="header">
    <div class="header__wrap">
      <MobileHeader ref="mobileHeaderRef" />
      <div class="header__logo_wrap">
        <RouterLink class="header__logo" :to="ROUTES.main">
          <div class="header__logo_img">
            <img src="/images/logo_text.webp" alt="">
          </div>
          <LogoBrand class="header__logo_icon" />
        </RouterLink>
        <UITypography class="header__logo_title" variant="logo-description">
          Официальный дилер<br>Scamacca в Москве
        </UITypography>
      </div>
      <NavHeader />
      <div class="header__info">
        <UITypography class="header__address" variant="body-m-regular" as="div">
          г. Москва, ул. Космонавтиков, д. 6
        </UITypography>
        <UITypography variant="body-m-regular" as-child>
          <a class="header__phone" href="tel:+74954340326">+7 (495) 434-03-26</a>
        </UITypography>
        <div class="header__favorites">
          <button class="header__favorite">
            <HeartIcon class="header__favorite_icon" />
            <span class="header__favorite_counter">22</span>
          </button>
          <button class="header__compare">
            <StatsIcon class="header__compare_icon" />
            <span class="header__compare_counter">22</span>
          </button>
        </div>
      </div>
      <a class="header__connect" href="tel:+74954340326">
        <PhoneIcon />
      </a>
    </div>
  </header>
</template>
