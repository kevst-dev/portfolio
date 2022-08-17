<template>
  <nav class="nav-header">
    <ul class="nav-header__menu">
      <NavItem v-for="item in dataNav"
        v-on:click="selectActiveItem(item)"
        :dataItem="item"
      />
    </ul>
  </nav>
</template >

<script setup>
  import { reactive } from 'vue'
  import NavItem from '../nav-item.vue'
  import { featuresNavItems } from '../features-nav-items.js'

  const dataNav = reactive(featuresNavItems)

  const selectActiveItem = (selectItem) => {
    dataNav.forEach(item => { item.isActive = false });
    selectItem.isActive = !selectItem.isActive
  }
</script>

<style scoped>
  .nav-header__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
</style>
