<template>
  <header class="header-main">
    <logo-kevst/>
    <div
      class="header__toggle-nav"
      v-on:click="toggleNav()"
     >
      <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
    </div>
    <NavMobile
      :isShowNav="isShowNav"
      @toggle-nav="toggleNav()"
    />
  </header>
</template>

<script setup>
  import { ref } from 'vue'
  import LogoKevst from '../logo-kevst.vue'
  import NavMobile from './nav-mobile.vue'

  const isShowNav= ref(false)

  const toggleNav = () => {
    console.log("aqui")
    isShowNav.value = !isShowNav.value
  }

</script>

<style>
  .header-main {
    width: 100vw;
    z-index: var(--z-fixed);
    position: fixed;
    top: 0;
    left: 0;
    height: var(--header-height);
    padding: 0 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-complemento);
  }
</style>
