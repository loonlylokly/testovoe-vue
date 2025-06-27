<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UITypography from '@/components/ui/UITypography.vue'
import { menuItems } from '@/shared/mocks/headerMenu'
import './NavHeader.scss'

const currentTrigger = ref('')
</script>

<template>
  <NavigationMenuRoot v-model="currentTrigger" class="header__nav">
    <NavigationMenuList class="header__menu">
      <template v-for="item in menuItems" :key="item.value">
        <NavigationMenuItem class="header__item" :value="item.id">
          <NavigationMenuTrigger class="header__item_link">
            <UITypography :line-clamp="1" variant="body-m-regular" as="span">
              {{ item.title }}
            </UITypography>
            <IconSprite name="arrow-small" />
          </NavigationMenuTrigger>
          <NavigationMenuContent class="header__item_context">
            <div class="header__item_context_wrap">
              <ul class="header__item_context_menu">
                <li v-for="contentItem in item.content" :key="contentItem.id" class="header__item_context_item">
                  <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="contentItem.link">
                    {{ contentItem.name }}
                  </NavigationMenuLink>
                </li>
                <!-- <li class="header__item_context_item">
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель2
                </NavigationMenuLink>
              </li>
              <li class="header__item_context_item">
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель3
                </NavigationMenuLink>
              </li> -->
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </template>
      <!-- <NavigationMenuItem class="header__item">
        <NavigationMenuTrigger class="header__item_link">
          <UITypography :line-clamp="1" variant="body-m-regular" as="span">
            Покупка
          </UITypography>
          <IconSprite name="arrow-small" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="header__item_context">
          <div class="header__item_context_wrap">
            <ul class="header__item_context_menu">
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель1
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель2
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель3
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem class="header__item">
        <NavigationMenuTrigger class="header__item_link">
          <UITypography :line-clamp="1" variant="body-m-regular" as="span">
            Сервис
          </UITypography>
          <IconSprite name="arrow-small" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="header__item_context">
          <div class="header__item_context_wrap">
            <ul class="header__item_context_menu">
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель1
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель2
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель3
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem class="header__item">
        <NavigationMenuTrigger class="header__item_link">
          <UITypography :line-clamp="1" variant="body-m-regular" as="span">
            О нас
          </UITypography>
          <IconSprite name="arrow-small" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="header__item_context">
          <div class="header__item_context_wrap">
            <ul class="header__item_context_menu">
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель1
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель2
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель3
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem class="header__item">
        <NavigationMenuTrigger class="header__item_link">
          <UITypography :line-clamp="1" variant="body-m-regular" as="span">
            Еще
          </UITypography>
          <IconSprite name="arrow-small" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="header__item_context">
          <div class="header__item_context_wrap">
            <ul class="header__item_context_menu">
              <li class="header__item_context_item">
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель1
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель2
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink :as="RouterLink" class="header__item_context_link" :to="ROUTES.main">
                  Модель3
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem> -->
      <div class="header__viewport-position">
        <NavigationMenuViewport class="header__item_viewport" />
      </div>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
