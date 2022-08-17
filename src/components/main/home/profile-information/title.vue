<template>
  <div class="container-title">
    <p class="welcome">¡Hola!</p>
    <h1 class="title">
      Yo soy <span>Kevin</span> <div>Front-End Developer.</div>
    </h1>
  </div>
</template>

<script setup>
</script>

<style scoped>

  .welcome {
    color: var(--color-texto-2);
    font-size: var(--font-size-heading-4);
    font-weight: 500;
  }

  .title {
    color: var(--color-texto-1);
    font-size: var(--font-size-heading-1);
    font-weight: 700;
  }
  .title span {
    color: var(--color-primario);
  }

  /* Desktop-min */
  @media screen and (max-width: 1256px){
    .title div {
      font-size: var(--font-size-heading-2);
    }
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container-title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title { text-align: center; }

    .title div {
      font-size: var(--font-size-heading-1);
    }
  }
  /* Mobile */
  @media screen and (max-width: 420px){
  }
</style>
