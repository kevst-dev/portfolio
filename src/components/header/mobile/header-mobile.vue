<template>
  <header class="header-main">
    <a class="header-main__logo" href="#home">
      &lt<span>Kevst</span>.dev/&gt
    </a>
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

<script>
import { ref } from 'vue'
import NavMobile from './nav-mobile.vue'

export default {
  components: {
    NavMobile
  },
  setup() {
    const isShowNav= ref(false)

    const toggleNav = () => { isShowNav.value = !isShowNav.value }

    return {
      isShowNav,
      toggleNav
    }
  }
}
</script>

<style scoped>
  .header-main {
    height: var(--header-height);
    padding: 0 20px;

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
</style>
