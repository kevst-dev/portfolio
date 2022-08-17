<template>
  <div class="container-title">
    <h2 class="title">{{nameTitle}}</h2>
    <hr class="line">
  </div>
</template>

<script setup>
  const props = defineProps({
    nameTitle: String
  })
</script>

<style scoped>
  .container-title {
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: var(--font-size-heading-2);
    font-weight: 700;
    color: var(--color-primario);
  }

  .line {
    width: 90%;
    height: 4px;
    border-radius: 5px;
    border: 1px solid var(--color-primario);
    background-color: var(--color-primario);
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .title {
      font-size: var(--font-size-heading-3);
    }
  }
</style>
