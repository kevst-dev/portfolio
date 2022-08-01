<template>
  <div class="container-technologies">
    <p v-for="technology in nameTechnologies"
      class="technology">
      {{technology}}
    </p>
  </div>
</template>

<script>

  export default {
    props: {
      nameTechnologies: []
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
  .container-technologies {
    margin-left: -15%;
    display: flex;
    gap: 15px;
  }

  .technology {
    font-size: var(--font-size-small);
    color: var(--color-texto-1);
  }
</style>
