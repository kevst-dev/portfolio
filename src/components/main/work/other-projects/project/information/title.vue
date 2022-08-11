<template>
  <h4 class="title">{{name}}</h4>
</template>

<script>

  export default {
    props: {
      name: String,
    },
    components: {
    },
    setup() {

      return {
      }
    }
  }
</script>

<style scoped>
  .title {
    margin: 0;
    font-size: var(--font-body-text);
    font-weight: 700;
    color: var(--color-texto-1);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }
</style>
