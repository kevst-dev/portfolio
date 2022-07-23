<template>
  <header class="header-main">
    <a class="header-main__logo" href="#home">
      &lt<span>Kevst</span>.dev/&gt
    </a>
    <NavbarDesktop/>
  </header>
</template>

<script setup>
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

  .header-main__logo {
    font-weight: 700;
    color: var(--color-primario);

    cursor: pointer;
  }
  .header-main__logo span {
    color: var(--color-texto-1);
  }

  /* desktop min */
  @media screen and (max-width: 1024px){
    .header-main { padding: 0 45px; }
  }
</style>
