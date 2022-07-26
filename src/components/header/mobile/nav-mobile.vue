<template>
  <nav
    class="nav-header"
    :class="{nav__show: isShowNav}"
  >
    <ul class="nav-header__menu">
      <NavItem v-for="item in dataNav"
        v-on:click="selectActiveItem(item)"
        :dataItem="item"
      />
    </ul>
  </nav>
</template>

<script>
import { reactive } from 'vue'
import NavItem from '../nav-item.vue'
import { featuresNavItems } from '../features-nav-items.js'

export default {
  components: {
    NavItem
  },
  props: {
    isShowNav: Boolean
  },
  emits: ['toggle-nav'],
  setup(context) {
    const dataNav = reactive(featuresNavItems)

    const selectActiveItem = (selectItem) => {
      dataNav.forEach(item => { item.isActive = false });
      selectItem.isActive = !selectItem.isActive
      context.emit('toggle-nav')
    }

    return {
      dataNav,
      selectActiveItem
    }
  }
}
</script>

<style scoped>
  .nav-header {
    position: fixed;
    z-index: var(--z-fixed);
    right: -100%;
    top: var(--header-height);

    width: 80%;
    height: calc(100vh - var(--header-height));
    background-color: var(--color-complemento);

    padding: 32px;
    border-top: 3px solid var(--color-secundario);
    transition: .5s;
  }
  .nav__show{ right: 0; }
  .nav-header__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }
</style>
