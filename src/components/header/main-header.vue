<template>
  <HeaderDesktop v-if="!isMobile()" />
  <HeaderMobile v-else />
</template>

<script>
import HeaderDesktop from './desktop/header-desktop.vue'
import HeaderMobile from './mobile/header-mobile.vue'

export default {
  components: {
    HeaderDesktop,
    HeaderMobile
  },
  setup() {
    const isMobile = () => { return (screen.width <= 768) }

    return {
      isMobile
    }
  },
};
</script>

<style scoped>
</style>
