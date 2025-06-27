<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { ref } from 'vue'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UITypography from '@/components/ui/UITypography.vue'
import { menuItems } from '@/shared/mocks/headerMenu'
import './MobileHeader.scss'

const mobileHeaderRef = ref<HTMLElement | null>(null)
const isOpenHeaderMobile = ref(false)

// Экспортируем ref для доступа из родителя
defineExpose({
  mobileHeaderRef,
})
</script>

<template>
  <div class="header-m">
    <button class="burger" aria-label="Мобильное меню" aria-controls="mobile-navigation"
      :aria-expanded="isOpenHeaderMobile" @click="isOpenHeaderMobile = !isOpenHeaderMobile">
      <svg viewBox="0 0 100 100">
        <line class="line top" x1="95" x2="5" y1="25" y2="25" stroke="currentColor" stroke-width="7"
          stroke-dasharray="90" stroke-dashoffset="0" />
        <line class="line middle" x1="5" x2="95" y1="50" y2="50" stroke="currentColor" stroke-width="7"
          stroke-dasharray="90" stroke-dashoffset="0" />
        <line class="line bottom" x1="5" x2="95" y1="75" y2="75" stroke="currentColor" stroke-width="7"
          stroke-dasharray="90" stroke-dashoffset="0" />
      </svg>
    </button>
    <Teleport to="body">
      <div id="mobile-navigation" ref="mobileHeaderRef"
        :class="`header-m__content wrapper ${isOpenHeaderMobile && 'open'}`">
        <AccordionRoot class="header-m__menu" default-value="'item-1'" type="single" :collapsible="true">
          <template v-for="item in menuItems" :key="item.value">
            <AccordionItem class="header-m__item" :value="item.id">
              <AccordionHeader class="header-m__item_header">
                <AccordionTrigger class="header-m__item_trigger">
                  <UITypography :line-clamp="1" variant="body-l-regular" as="span">
                    {{ item.title }}
                  </UITypography>
                  <IconSprite class="header-m__item_arrow" name="arrow-small" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent class="header-m__item_content">
                <ul>
                  <li v-for="contentItem in item.content" :key="contentItem.id">
                    <RouterLink :to="contentItem.link">
                      {{ contentItem.name }}
                    </RouterLink>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </template>
        </AccordionRoot>
      </div>
    </Teleport>
  </div>
</template>
