<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Sprites from '@/components/ui/icons/Sprites.vue'
import AppHeader from './modules/header/AppHeader.vue'
</script>

<template>
  <Sprites />
  <AppHeader />
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125">

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped></style>
