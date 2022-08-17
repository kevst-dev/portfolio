<template>
  <div class="container">
    <p v-for="technology in nameTechnologies"
      class="technology">
      {{technology}}
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    nameTechnologies: Array,
    isLeftPosition: Boolean
  })
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px 15px;
  }

  .technology {
    font-size: var(--font-size-min);
    color: var(--color-texto-2);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }
</style>
