<template>
  <h3 class="sub-title">{{nameTitle}}</h3>
</template>

<script setup>
  const props = defineProps({
    nameTitle: String,
  })
</script>

<style scoped>
  .sub-title {
    margin: 0;
    font-size: var(--font-size-heading-3);
    font-weight: 600;
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .sub-title {
      font-size: var(--font-size-heading-4);
    }
  }
</style>
