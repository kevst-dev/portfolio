<template>
  <div
    class="container"
    :class="{container__invert: isLeftPosition}"
  >
    <p class="status">Proyecto destacado</p>
    <h4 class="title">{{name}}</h4>
  </div>
</template>

<script>

  export default {
    props: {
      name: String,
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

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }

  .container__invert { align-items: flex-start; }

  .status {
    font-size: var(--font-size-body-text);
    color: var(--color-primario);
  }

  .title {
    margin: 0;
    font-size: var(--font-size-heading-4);
    font-weight: 600;
    color: var(--color-primario);
  }
</style>
