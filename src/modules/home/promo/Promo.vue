<script setup lang="ts">
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UITypography from '@/components/ui/UITypography.vue'
import PromoForm from './promoForm/PromoForm.vue'
import PromoSlider from './promoSlider/PromoSlider.vue'
import './Promo.scss'
</script>

<template>
  <section class="promo">
    <div class="promo__slider_wrap">
      <PromoSlider />
    </div>
    <div class="promo__wrap wrapper">
      <div class="promo__content">
        <UITypography variant="h1" as-child>
          <h1>Любимый семейный кроссовер уже в продаже!</h1>
        </UITypography>
        <UITypography variant="body-l-regular" as-child>
          <p>Первый взнос составит 12% от стоимости дома, без<br>изменения за использование кредита.</p>
        </UITypography>
        <div class="promo__btns">
          <UIButton variant="secondary-light">
            Подробнее
            <template #rightIcon>
              <IconSprite class="icon-arrow" name="arrow" />
            </template>
          </UIButton>
          <UIButton variant="primary-light">
            Тест-драйв
            <template #rightIcon>
              <IconSprite class="icon-arrow" name="arrow" />
            </template>
          </UIButton>
        </div>
      </div>
      <PromoForm />
    </div>
  </section>
</template>
