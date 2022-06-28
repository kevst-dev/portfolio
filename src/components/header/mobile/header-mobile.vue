<template>
  <header class="header-main">
    <a class="header-main__logo" href="#home">
      &lt<span>Kevst</span>.dev/&gt
    </a>
    <div class="header__toggle-nav">
      <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
    </div>
  </header>
</template>

<script>
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
