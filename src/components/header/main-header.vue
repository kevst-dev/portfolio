<template>
  <HeaderDesktop v-if="!isMobile()" />
  <HeaderMobile v-else />
</template>

<script setup>
  import HeaderDesktop from './desktop/header-desktop.vue'
  import HeaderMobile from './mobile/header-mobile.vue'

  const isMobile = () => { return (screen.width <= 768) }
</script>

<style scoped>
</style>
