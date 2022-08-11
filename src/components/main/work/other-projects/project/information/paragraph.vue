<template>
  <p class="first-project__paragraph">
    {{paragraph}}
  </p>
</template>

<script>

  export default {
    props: {
      paragraph: String,
      isLeftPosition: Boolean
    },
    components: {
    },
    setup() {
      return {
      }
    }
  }
</script>

<style >
  .first-project__paragraph {
    font-size: var(--font-size-min);
    text-align: left;
    color: var(--color-texto-1);
  }

  /* Tablet */
  @media screen and (max-width: 768px){
  }
</style>
