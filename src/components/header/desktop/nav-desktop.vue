<template>
  <nav class="nav-header">
    <ul class="nav-header__menu">
      <NavItem v-for="item in dataNav"
        v-on:click="selectActiveItem(item, dataNav)"
        :dataItem="item"
      />
    </ul>
  </nav>
</template>

<script>
  import NavItem from '../nav-item.vue'

  let dataNav = [
    {
      key: "home",
      title: "Principal",
      isActive: true
    },
    {
      key: "about",
      title: "Sobre mi",
      isActive: false
    },
    {
      key: "skills",
      title: "Habilidades",
      isActive: false
    },
    {
      key: "work",
      title: "Portafolio",
      isActive: false
    },
    {
      key: "contact",
      title: "Contacto",
      isActive: false
    }
  ]

  export default {
    components: {
      NavItem
    },
    data: () => ({
      dataNav
    }),
    methods: {
      selectActiveItem(selectItem, dataNav) {
        dataNav.forEach(item => { item.isActive = false });
        selectItem.isActive = !selectItem.isActive
      }
    },
  };
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
