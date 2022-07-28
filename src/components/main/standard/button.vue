<template>
  <a :class="styleButton" href="#">
    <font-awesome-icon v-if="urlIcon != null" :icon="urlIcon" size="lg" />
    {{name}}
  </a>
</template>

<script>

  export default {
    props: {
      name: String,
      styleButton: {
        type: String,
        default: "button-normal"
      },
      urlIcon: {
        type: String,
        default: null
      },
    },
    components: {
    },
    setup() {
    }
  }
</script>

<style scoped>
  .button-normal {
    width: fit-content;
    cursor: pointer;
    padding: 18px 32px;
    border-radius: 10px;
    border: 2px solid var(--color-primario);

    font-size: var(--font-size-body-text);
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--color-fondo);
    background-color: var(--color-primario);
  }
  .button-normal:hover {
    background-color: var(--color-fondo);
    color: var(--color-primario);
  }

  .button-outline {
    cursor: pointer;
    padding: 18px 32px;
    border-radius: 10px;
    border: 2px solid var(--color-primario);

    font-size: var(--font-size-body-text);
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--color-primario);
  }
  .button-outline:hover {
    background-color: var(--color-primario);
    color: var(--color-fondo);
  }

  .button-text {
    font-size: var(--font-size-body-text);
    font-weight: 600;
    border: 0px;
    margin: 10px 0;
    padding: 0;
    color: var(--color-primario);
    display: flex;
    justify-content: center;
  }

  .button-text:hover {
    background-color: var(--color-fondo);
    color: var(--color-primario);
    text-decoration-line: underline;
  }
  /* Desktop-min */
  @media screen and (max-width: 1256px){
    .button-normal, .button-outline, .button-text {
      font-size: var(--font-size-small);
      font-weight: 600;
    }
  }

  /* Mobile */
  @media screen and (max-width: 420px){
    .button-normal, .button-outline, .button-text {
      font-size: var(--font-size-min);
    }
  }


</style>
