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
import { reactive } from 'vue'
import NavItem from '../nav-item.vue'

export default {
  components: {
    NavItem
  },
  setup() {
    const dataNav = reactive([
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
    ])

    const selectActiveItem = (selectItem) => {
      dataNav.forEach(item => { item.isActive = false });
      selectItem.isActive = !selectItem.isActive
      console.log(dataNav)
    }

    return {
      dataNav,
      selectActiveItem
    }
  }
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
