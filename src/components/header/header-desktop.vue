<template>
  <header class="header-main">
    <a class="header-main__logo">
      &lt<span>Kevst</span>.dev/&gt
    </a>
    <div>navbar</div>
  </header>
</template>

<script setup>

</script>

<style scoped>
  .header-main {
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
  }
  .header-main__logo span {
    color: var(--color-texto-1);
  }
</style>
