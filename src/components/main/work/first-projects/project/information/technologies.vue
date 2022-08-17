<template>
  <div class="container" :class="{conatiner__invert: isLeftPosition}">
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
    margin-left: -15%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px 15px;
  }

  .conatiner__invert {
    margin-left: 0;
    margin-right: -15%;
  }

  .technology {
    font-size: var(--font-size-small);
    color: var(--color-texto-1);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
    .container {
      margin: 0;
    }
  }
</style>
