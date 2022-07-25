<template>
  <li class="nav__item" >
    <a
      class="nav__link"
      :class="{link__active: dataItem.isActive}"
      :href="'#'+dataItem.key"
    >
      {{dataItem.title}}
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      dataItem: {}
    }
  }
</script>

<style scoped>
  .nav__link {
    color: var(--color-texto-1);
    font-size: var(--font-size-small);
    font-weight: 600;

    position: relative;
  }
  .nav__link:hover {
    position: relative;
  }
  .nav__link:hover::after,
  .link__active::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    left: 0;
    top: 1.8rem;
    background-color: var(--color-primario);
  }
</style>
