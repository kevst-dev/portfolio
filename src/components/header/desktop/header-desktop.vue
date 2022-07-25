<template>
  <header class="header-main">
    <LogoKevst/>
    <NavbarDesktop/>
  </header>
</template>

<script setup>
  import LogoKevst from '../logo-kevst.vue'
  import NavbarDesktop from './nav-desktop.vue'
</script>

<style scoped>
  .header-main {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: var(--header-height);
    padding: 0 95px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-complemento);
  }

  /* desktop min */
  @media screen and (max-width: 1024px){
    .header-main { padding: 0 45px; }
  }
</style>
